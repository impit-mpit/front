import { createLazyFileRoute } from '@tanstack/react-router';
import { useAIServiceChat } from '../api/endpoints/nmost-api';
import { useState } from 'react';
import { Send } from '@atomaro/icons';
import { useVLLMStream } from '../api/news/ai';

export const Route = createLazyFileRoute('/chat')({
  component: RouteComponent,
});

function RouteComponent() {
  const [message, setMessage] = useState('');
//   const [data, setData] = useState('');
 const {mutate, data, isPending} = useAIServiceChat();
  const onMessage = () => {
    mutate({
        data: {
            message: message,
        }
    })
};
  return (
    <div className="my-5 bg-white h-[80vh] p-4 rounded-[20px] w-full flex flex-col justify-between">
    <div className='overflow-scroll'>
        {isPending ? "Загрузка...." : data?.message}
    </div>
    <div className='flex flex-row items-center'>

      <input
        className="border border-[#595F6B14] rounded-[20px] py-4 px-6 flex-1"
        placeholder="Задайте вопрос ИИ"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <div className='' onClick={()=>onMessage()}>
        <Send />
      </div>
    </div>
    </div>
  );
}
