
import { ChevronLeft } from '@atomaro/icons'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useNewsServiceCreateNews, useNewsServiceDeleteNews, useNewsServiceGetNewsById } from '../../../../api/endpoints/nmost-api'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/admin/edit/news/$newsid')({
  component: RouteComponent,
})

function RouteComponent() {
    const id = Route.useParams()
    const [title,setTitle] = useState("")
    const [shortdesc,setShortdesc] = useState("")
    const [desc,setDesc] = useState("")
    const navigate = useNavigate()
    
    const {mutate:del} = useNewsServiceDeleteNews()
    const {data} = useNewsServiceGetNewsById(id.newsid)
    const {mutate} = useNewsServiceCreateNews()
    console.log(data)

    useEffect(()=>{
        setTitle(data?.title)
        setShortdesc(data?.shortBody)
        setDesc(data?.body)
    },[data])
    
    const onCreate = ()=>{
      mutate({
        data:{
          ...(title ? {title} : null),
          ...(shortdesc ?{shortBody:shortdesc} : null),
          ...(desc ? {body:desc}:null),
        }
      })
    }

    const onDelete =()=>{
        del({
                id:id.newsid
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
          placeholder="Заголовок"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
         <input
          className="border border-[#595F6B14] rounded-[20px] py-4 px-6 w-fit"
          placeholder="Краткое описание"
          onChange={(e) => setShortdesc(e.target.value)}
          value={shortdesc}
        />
         <input
          className="border border-[#595F6B14] rounded-[20px] py-4 px-6 w-fit"
          placeholder="Полный текст"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <div className='cursor-pointer bg-content-primary px-8 py-3 rounded-[20px] text-white w-fit' onClick={()=>onCreate()}>
          Сохранить
        </div>
        <div className='cursor-ponter bg-red-500 text-white px-8 py-3 rounded-[20px] w-fit' onClick={()=>onDelete()}>Удалить</div>
        </div>
    </div>
    )
}
