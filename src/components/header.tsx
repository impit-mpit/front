import { Link } from "@tanstack/react-router";
import Logo from './../img/ico.png'
import { ChevronUp } from "@atomaro/icons";

export default function Header(){
    return(
        <div className="w-full bg-white px-10 py-9 rounded-[20px]">
            <div className="flex flex-row justify-between items-center">
                <Link className="flex flex-row gap-3 items-center">
                    <img src={Logo} className="w-12 h-12" />
                    <div className="flex text-[32px]  font-bold gap-2 flex-row items-center">
                        <p>НЕЙРО</p>
                        <p className="text-content-primary">МОСТ</p>
                    </div>
                </Link>
                <div className="flex flex-row font-normal text-base items-center uppercase gap-3">
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
                <Link className="bg-content-bright rounded-lg text-base text-white px-6 py-3 font-semibold">
                    Авторизация
                </Link>
            </div>
        </div>
    )
}