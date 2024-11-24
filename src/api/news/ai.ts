

const AI_URL = "https://nmost.site/api/v1/ai/chat"

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';


interface StreamOptions {
    onToken?: (token: string) => void;
    onFinish?: () => void;
    onError?: (error: Error) => void;
  }
  
  const streamVLLM = async (prompt: string) => {
    const response = await fetch(AI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: prompt }),
    });
  
    if (!response.body) throw new Error('No response body');
    return response.body;
  };
  
  export const useVLLMStream = (options: StreamOptions = {}) => {
    const [generatedText, setGeneratedText] = useState<string>('');
  
    const mutation = useMutation({
      mutationFn: streamVLLM,
      onMutate: () => {
        setGeneratedText('');
      },
      onSuccess: async (responseBody) => {
        console.log(responseBody);
        const reader = responseBody.getReader();
        console.log(reader);
        const decoder = new TextDecoder();
  
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
  
            const chunk = decoder.decode(value);
            const lines = chunk
              .split('\n')
              .filter(line => line.trim().startsWith('data: '));
  
            for (const line of lines) {
              try {
                const data = JSON.parse(line.slice(6)); // Remove 'data: ' prefix
  
                if (data.finished) {
                  options.onFinish?.();
                  break;
                }
  
                if (data.token) {
                  options.onToken?.(data.token);
                  setGeneratedText(prev => prev + data.token);
                }
              } catch (e) {
                console.error('Failed to parse JSON:', e);
              }
            }
          }
        } catch (error) {
          options.onError?.(error as Error);
          throw error;
        }
        
      },
      onError: (error) => {
        options.onError?.(error as Error);
      }
    });
  
    return {
      generate: mutation.mutate,
      generatedText,
      isGenerating: mutation.isPending
    };
  };