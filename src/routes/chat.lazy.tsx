import { createLazyFileRoute } from '@tanstack/react-router';
import { useAIServiceChat } from '../api/endpoints/nmost-api';
import { useState } from 'react';
import { Send } from '@atomaro/icons';

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
    <div className="my-5 bg-white h-[80vh] p-4 rounded-[20px] w-full flex flex-col gap-4 justify-between">
    <div className='overflow-scroll'>
        {isPending ? "Пожалуйста подождите, ИИ генерирует ответ на ваш вопрос." : data?.message}
        {!isPending && !data ? "Пожалуйста учтите что ИИ дает ответы только на те вопросы, которые есть в его базе" : null}
    </div>
    <div className='flex flex-row items-center'>

      <input
        className="border border-[#595F6B14] rounded-[20px] py-4 px-6 flex-1 mr-5"
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
