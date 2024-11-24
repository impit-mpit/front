import { useNavigate } from "@tanstack/react-router"
import { useSpecialistServiceGetSpecialistFeed } from "../../api/endpoints/nmost-api"
import Divider from "../divider"

export default function Specialist() {
        const {data} = useSpecialistServiceGetSpecialistFeed({page:1,pageSize:10})
        const navigate = useNavigate()
        return(
            <div className="flex flex-col w-full bg-white p-4">
                <div className="grid grid-cols-2 gap-3 items-center w-full h-6">
                <p className="border-r">ФИО</p>
                <p>Описание</p>
                </div>
                <Divider />
                {data?.Specialist?.map((data,index)=>{
                    return(
                        <div  key={index} className="grid grid-cols-2 gap-3 items-center w-full h-6 border-b cursor-pointer" onClick={()=>navigate({to:"/admin/edit/news/"+data.id})}>
                        <p className="border-r">
                            {data.fio}
                        </p>
                        <p className="truncate">
                            {data.description}
                        </p>
                        </div>
                    )
                })}
                <div className="bg-content-primary w-fit px-8 py-3 rounded-[20px] text-white cursor-pointer" onClick={()=>navigate({to:"/admin/new/specialist"})}>
                    Создать статью
                </div>
            </div>
        )
    }