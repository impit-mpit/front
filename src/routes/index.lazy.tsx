import { createLazyFileRoute } from '@tanstack/react-router'
import { getNews } from '../api/news'
import { useNewsServiceGetNewsFeed } from '../api/endpoints/nmost-api'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const Card =({data})=>{
  return(
    <div className='w-[506px] h-[280px] flex flex-col gap-9 px-6 py-[30px] bg-white rounded-[20px]'>
      <p>{data.title}</p>
      <p>{data.shortBody}</p>
    </div>
  )
}


function Index() {
  const page = 1
  const pageSize = 4
  const {data} = useNewsServiceGetNewsFeed({
    page: 1,
    pageSize: 10,
  })
  console.log(data)
  
  return (
    <div className='flex flex-col gap-16 '>
    <div className="px-10 -mt-3 pb-6 rounded-b-[20px]  bg-white">
      <div className='w-full h-[472px] bg-[#363636] rounded-[20px]'>

      </div>
      <div>

      </div>
    </div>
      <div className='flex flex-row items-center text-4xl uppercase gap-3'>
        <p>Свежие новости и</p>
        <p className='text-content-primary'>статьи</p>
      </div>
      <div className=' px-10 py-9 flex flex-col gap-6'>
        <div className='grid grid-cols-3 h-[320px] items-center bg-white rounded-[20px]'>
          <div className='bg-slate-500 h-full !w-[500px] rounded-[20px]'>
          </div>
          <div className='flex flex-col col-span-2 gap-4 py-7 pr-8'>
            <p className='text-4xl text-balance'>Программы для домашней школы для аутистов:
            индивидуальные учебные планы и ресурсы.</p>
            <p className='text-xl text-balance'>
            Уникальные стили обучения аутистов выигрывают от индивидуального домашнего обучения. Оно открывает мир индивидуальных возможностей. Оно позволяет использовать полезные инструменты. Это и наглядные пособия, и практические занятия, и высокотехнологичные средства. Все они подстраиваются под конкретные потребности детей. 
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {
              data?.news?.map((news,index)=>{
                if (index < 3)
                return(
                <Card key={index} data={news} />
              )})
           
          }
        </div>
      </div>
    </div>
  )
}