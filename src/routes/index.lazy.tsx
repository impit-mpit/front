import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useMediaServiceGetMediaFeed, useNewsServiceGetNewsFeed } from '../api/endpoints/nmost-api'
import { ArrowRight16 } from '@atomaro/icons'
import Divider from '../components/divider'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const ArticleCard =({data}:any)=>{
  return(
    <Link to={`/article/${data.id}`}>
    <div className='w-[506px] h-[280px] flex flex-col gap-9 px-6 py-[30px] bg-white rounded-[20px]'>
      <div className='flex flex-row justify-between'>
      <p className='font-medium text-2xl label '>{data.title}</p>
      <div className='bg-content-primary rounded-full flex items-center justify-center w-8 h-8'>
        <ArrowRight16 fill='#fff' />
      </div>
      </div>
      <p className='text-2xl text-text-secondary'>{data.shortBody}</p>
    </div>
    </Link>
  )
}
const VideoCard =({data}:any)=>{
  return(
    <Link to={`/videos/${data.id}`}>
    <div className='w-[506px] h-[280px] flex flex-col justify-between px-6 py-[30px] bg-white rounded-[20px]'>
      <div className='flex flex-row justify-between'>
      <p className='font-medium text-2xl label truncate max-w-[400px]'>{data.title}</p>
      <div className='bg-content-primary rounded-full flex items-center justify-center !w-8 !h-8'>
        <ArrowRight16 fill='#fff' />
      </div>
      </div>
      <p className='text-2xl text-text-secondary h-fit text-wrap'>{data.shortDescription}</p>
    </div>
    </Link>
  )
}


function Index() {
  const {data} = useNewsServiceGetNewsFeed({
    page: 1,
    pageSize: 10,
  })
  const {data:videos} = useMediaServiceGetMediaFeed({
    page:1,
    pageSize:10,
  })
  console.log(videos)
  
  return (
    <div className='flex flex-col gap-16 '>
    <div className=" -mt-3 pb-6 rounded-b-[20px]  bg-white">
      <div className='w-full h-[472px] bg-[#363636] rounded-[20px]'>

      </div>
      <div>

      </div>
    </div>
      <div className='flex flex-row items-center label text-4xl uppercase gap-3'>
        <p>Свежие новости и</p>
        <p className='text-content-primary'>статьи</p>
      </div>
      <div className=' py-9 flex flex-col gap-6'>
        <div className='grid grid-cols-3 h-[320px] items-center bg-white rounded-[20px]'>
          <div className='bg-slate-500 h-full !w-[500px] rounded-[20px]'>
          </div>
          <div className='flex flex-col col-span-2 gap-4 py-7 pr-8'>
            <p className='text-4xl text-balance label'>Программы для домашней школы для аутистов:
            индивидуальные учебные планы и ресурсы.</p>
            <Divider />
            <p className='text-xl text-balance text-text-secondary'>
            Уникальные стили обучения аутистов выигрывают от индивидуального домашнего обучения. Оно открывает мир индивидуальных возможностей. Оно позволяет использовать полезные инструменты. Это и наглядные пособия, и практические занятия, и высокотехнологичные средства. Все они подстраиваются под конкретные потребности детей. 
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {
              data?.news?.map((news,index)=>{
                if (index < 3)
                return(
                <ArticleCard key={index} data={news} />
              )})
           
          }
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {
              videos?.media?.map((media,index)=>{
                if (index < 3)
                return(
                <VideoCard key={index} data={media} />
              )})
           
          }
        </div>
      </div>
    </div>
  )
}