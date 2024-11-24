
import { createLazyFileRoute } from '@tanstack/react-router'
import { useSpecialistServiceGetSpecialistFeed } from '../api/endpoints/nmost-api'
import Divider from '../components/divider'

export const Route = createLazyFileRoute('/specialist')({
  component: RouteComponent,
})

const SpecialistCard =({data}:any)=>{
    return(
      <div className='xl:w-[506px] xl:h-[280px] w-[140px] h-[108px] flex flex-col xl:gap-9 xl:px-6 xl:py-[30px] gap-3 px-4 py-4 bg-white rounded-[20px]'>
        <div className='flex flex-col justify-between xl:gap-2 gap-1'>
        <p className='font-medium xl:text-4xl text-[6px] label '>{data.name}</p>
        <Divider />
        </div>
        <p className='xl:text-2xl text-[6px] text-text-primary'>{data.fio}</p>
        <p className='xl:text-2xl text-[6px] text-text-primary'>{data.description}</p>
      </div>
    )
}

function RouteComponent() {
    const {data} = useSpecialistServiceGetSpecialistFeed({
        page:1,pageSize:10
    })
    return (
        <div className='grid grid-cols-2 xl:grid-cols-3 my-5'>
        {data?.Specialist?.map((data,index)=>{
            return(
                <SpecialistCard data={data} key={index} />
                )
        })}
    </div>
  )
}
