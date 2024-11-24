import { Link } from "@tanstack/react-router";
import Divider from "./divider";

export default function Footer(){
    return(
        <div className="mt-5 rounded-[20px] xl:flex hidden flex-col bg-white w-full gap-6 px-[60px] py-[30px]">
            <Divider />
            <div className="grid grid-cols-4 label">
                <div className="flex uppercase flex-col gap-6">
                    <p className=" font-bold text-xl">Деятельность проекта</p>
                    <div className="flex flex-col gap-3">
                        <p>положение сообщества</p>
                        <p>Календарь событий</p>
                        <p>Архив событий</p>
                        <p>План работы и отчеты</p>
                    </div>
                </div>
                <div className="flex uppercase flex-col gap-6">
                    <p className=" font-bold text-xl">Родителям</p>
                    <div className="flex flex-col gap-3">
                        <p>Информация для родителей особонных детей с рас</p>
                        <p>Информация по здравоохранению, созданию и поддержанию комфортной среды</p>
                        <p>Информация для родителей детей с расстройствами речи</p>
                        <p>Контакты специалистов</p>
                    </div>
                </div>
                <div className="flex uppercase flex-col gap-6">
                    <p className=" font-bold text-xl">Сообщество</p>
                    <div className="flex flex-col gap-3">
                        <p>Группы для родителей</p>
                        <Link><p>Whatsapp</p></Link>
                        <Link><p>Telegram</p></Link>
                    </div>
                </div>
                <div className="flex uppercase flex-col gap-6">
                    <p className=" font-bold text-xl">Подписаться на рассылку</p>
                </div>
            </div>
        </div>
    )
}