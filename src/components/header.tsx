import { Link } from "@tanstack/react-router";
import Logo from './../img/ico.png'
import { ChevronUp, Menu16 } from "@atomaro/icons";
import { useState } from "react";

export default function Header(){
    const [open,setOpen] = useState(false)
    return(
        <div className="w-full flex flex-row items-center justify-between xl:block bg-white label xl:px-10 xl:py-9 rounded-[20px] px-4 py-4 ">
                <div className="xl:hidden"  onClick={()=>setOpen(!open)}>

                <Menu16  />
                </div>
            <div className="flex flex-row justify-between items-center flex-1">
                <Link className="flex flex-row xl:gap-3 gap-2 items-center">
                    <img src={Logo} className="xl:w-12 xl:h-12 w-4 h-5" />
                    <div className="flex text-[12px] xl:text-[32px]  font-bold xl:gap-2 gap-1 flex-row items-center">
                        <p>НЕЙРО</p>
                        <p className="text-content-primary">МОСТ</p>
                    </div>
                </Link>
                <div className="xl:flex hidden flex-row font-normal text-base items-center uppercase gap-3">
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg">
                        <p>О проекте</p>
                        <ChevronUp />
                    </Link>
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg" to="/autism">
                        <p>Об аутизме</p>
                        <ChevronUp />
                    </Link>
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg" to="/specialist">
                        <p>Специалисты</p>
                        <ChevronUp />
                    </Link>
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg">
                        <p>Сообщество</p>
                        <ChevronUp />
                    </Link>
                </div>
            </div>
            <div className={`${open ? "block" : "hidden"}  absolute left-5 top-20 bg-white h-[100px] w-[150px] flex flex-col items-start gap-2 rounded-[20px]`} >
                <Link  to="/autism" className="w-full">
                    <p className="text-xs">Об Аутизме</p>
                </Link>
                <Link  to="/specialist" className="w-full">
                    <p className="text-xs">Специалисты</p>
                </Link>
                <Link  to="/" className="w-full">
                    <p className="text-xs">Главная</p>
                </Link>
                
            </div>
        </div>
    )
}