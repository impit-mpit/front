import { useNavigate } from "@tanstack/react-router"
import { useMediaServiceGetMediaFeed } from "../../api/endpoints/nmost-api"
import Divider from "../divider"

export default function Archive() {
    const {data} = useMediaServiceGetMediaFeed({page:1,pageSize:10})
    const navigate = useNavigate()
    return(
        <div className="flex flex-col w-full bg-white p-4">
            <div className="grid grid-cols-2 gap-3 items-center w-full h-6">
            <p className="border-r">Заголовок</p>
            <p>Краткое содержание</p>
            </div>
            <Divider />
            {data?.media?.map((data,index)=>{
                return(
                    <div  key={index} className="grid grid-cols-2 gap-3 items-center w-full h-6 border-b cursor-pointer" onClick={()=>navigate({to:"/admin/edit/news/"+data.id})}>
                    <p className="border-r truncate">
                        {data.title}
                    </p>
                    <p>
                        {data.shortDescription}
                    </p>
                    </div>
                )
            })}
        </div>
    )
}