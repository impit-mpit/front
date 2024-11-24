import { Link } from "@tanstack/react-router";
import Logo from './../img/ico.png'
import { ChevronUp } from "@atomaro/icons";

export default function Header(){
    return(
        <div className="w-full  bg-white label xl:px-10 xl:py-9 rounded-[20px] px-4 py-7 ">
            <div className="flex flex-row justify-between items-center">
                <Link className="flex flex-row gap-3 items-center">
                    <img src={Logo} className="xl:w-12 xl:h-12 w-4 h-5" />
                    <div className="flex text-[12px] xl:text-[32px]  font-bold gap-2 flex-row items-center">
                        <p>НЕЙРО</p>
                        <p className="text-content-primary">МОСТ</p>
                    </div>
                </Link>
                <div className="xl:flex hidden flex-row font-normal text-base items-center uppercase gap-3">
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg">
                        <p>О проекте</p>
                        <ChevronUp />
                    </Link>
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg">
                        <p>Об аутизме</p>
                        <ChevronUp />
                    </Link>
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg">
                        <p>Ресурсы для родителей</p>
                        <ChevronUp />
                    </Link>
                    <Link className="bg-bg flex flex-row items-center gap-2 py-3 px-6 rounded-lg">
                        <p>Сообщество</p>
                        <ChevronUp />
                    </Link>
                </div>
            </div>
        </div>
    )
}