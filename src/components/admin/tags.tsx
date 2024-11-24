import { useNavigate } from "@tanstack/react-router"
import { useTagsServiceCreateTags, useTagsServiceGetTagsFeed } from "../../api/endpoints/nmost-api"
import Divider from "../divider"
import { useState } from "react"

export default function Tags() {
    const [open,setOpen] = useState(false)
    const [name,setName] = useState("")
    const {data} = useTagsServiceGetTagsFeed({page:1,pageSize:10})
    const {mutate}=useTagsServiceCreateTags()
    const navigate = useNavigate()
    const onNew =()=>{
        mutate({
            data:{name:name}
        })
    }
    return(
        <div className="flex flex-col w-full bg-white p-4">
            <div className="grid grid-cols-2 gap-3 items-center w-full h-6">
            <p>Заголовок</p>
            </div>
            <Divider />
            {data?.tags?.map((data,index)=>{
                return(
                    <div  key={index} className="grid grid-cols-2 gap-3 items-center w-full h-6 border-b cursor-pointer" onClick={()=>navigate({to:"/admin/edit/news/"+data.id})}>
                    <p >
                        {data.name}
                    </p>
                    </div>
                )
            })}
            <Divider />
            <div className="bg-content-primary text-white w-fit px-6 py-3 " onClick={()=>setOpen(true)}>Создать новый тег</div>
            {open && 
                <div className="bg-white absolute m-auto w-[200px] h-[200px]">
                                        <input className='border border-[#595F6B14] rounded-[20px] py-4 px-6' placeholder='Имя нового тега' onChange={(e)=>setName(e.target.value)} />
                                        <div className="bg-content-primary" onClick={()=>onNew()}>Создать</div>
                </div>
            }
        </div>
    )
}