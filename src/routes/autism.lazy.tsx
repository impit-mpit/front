import Image from './../img/image1.png'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/autism')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex xl:flex-row flex-col-reverse rounded-[20px] bg-white items-center justify-center mt-5">
    <div className="w-full xl:h-[641px] h-[110px] flex items-center justify-center rounded-[20px]">
      <div className='flex flex-col gap-2 items-center text-start justify-center px-4'>
        <div className="uppercase font-medium xl:text-[40px] text-start text-[.75rem] label">
          <p className=''>Что такое Аутизм ?</p>
        </div>
        <p className='mx-auto xl:w-[550px] text-[6px] xl:text-xl text-text-secondary'>
Аутизм представляет собой разновидность устройства нервной системы, он присутствует приблизительно у 1% населения Земли и классифицируется как нарушение развития. Несмотря на то, что в настоящее время аутизм более распространён в сравнении с тем, что было в прошлом, он не является чем-то новым и существует по всему миру и среди людей любого возраста: как взрослых, так и детей. Слова "аутичный" и "спектр аутизма" обычно используются для обозначения людей, имеющих относящийся к аутистическому спектру официальный диагноз, или тех, кто самоидентифициует себя частью аутического сообщества. И хотя каждый из аутичных людей уникален, как и любой человек, у них есть общие черты, характерные для аутизма. 
        </p>
      </div>
    </div>
    <div className='bg-url(`./../img/image 13.png`) w-full h-full rounded-r-[20px]'><img className='xl:rounded-r-[20px] rounded-t-[20px]' src={Image}  /></div>
  </div>
  )
}
