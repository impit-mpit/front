import { ArrowRight16 } from "@atomaro/icons"
import { Link } from "@tanstack/react-router"

export const ArticleCard =({data}:any)=>{
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