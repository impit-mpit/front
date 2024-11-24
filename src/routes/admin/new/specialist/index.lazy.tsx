
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useSpecialistServiceCreateSpecialist } from '../../../../api/endpoints/nmost-api'
import { ChevronLeft } from '@atomaro/icons'

export const Route = createLazyFileRoute('/admin/new/specialist/')({
  component: RouteComponent,
})

function RouteComponent() {
    const [name,setName] = useState("")
    const [fio,setFio] = useState("")
    const [desc,setDesc] = useState("")
    const navigate = useNavigate()
  
    const {mutate} = useSpecialistServiceCreateSpecialist()
    
    const onCreate = ()=>{
      mutate({
        data:{
            fio,
            name,
            description:desc,
        }
      })
    }
    return (
    <div className='flex flex-row gap-4'>
        <div className='bg-white rounded-xl p-2 h-fit cursor-pointer' onClick={()=>navigate({to:'/admin'})}>
          <ChevronLeft />
        </div>
        <div className='w-full flex flex-col gap-4 bg-white rounded-[20px] p-4'>
        <input
          className="border border-[#595F6B14] rounded-[20px] py-4 px-6 w-fit"
          placeholder="Специальность"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
         <input
          className="border border-[#595F6B14] rounded-[20px] py-4 px-6 w-fit"
          placeholder="ФИО"
          onChange={(e) => setFio(e.target.value)}
          value={fio}
        />
         <input
          className="border border-[#595F6B14] rounded-[20px] py-4 px-6 w-fit"
          placeholder="Описание"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <div className='cursor-pointer bg-content-primary px-8 py-3 rounded-[20px] text-white w-fit' onClick={()=>onCreate()}>
          Создать
        </div>
        </div>
    </div>
    )
}
