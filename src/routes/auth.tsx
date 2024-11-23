import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Logo from './../img/ico.png'
export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()

    const onAuth=()=>{
                navigate({to:"/admin"})
    }
  return (
    <div className='flex-1 flex justify-center items-center bg-content-primary'>
        <div className='bg-white flex flex-col gap-4 rounded-3xl px-6 py-4'>
                <div className="flex flex-row gap-3 items-center">
                    <img src={Logo} className="w-12 h-12" />
                    <div className="flex text-[32px]  font-bold gap-2 flex-row items-center">
                        <p>НЕЙРО</p>
                        <p className="text-content-primary">МОСТ</p>
                    </div>
                </div>
                <p className=''>Для доступа в систему необходимо заполнить данные</p>
                <div className='flex flex-col gap-4'>
                    <input className='border border-[#595F6B14] rounded-[20px] py-4 px-6' placeholder='Почта' />
                    <input className='border border-[#595F6B14] rounded-[20px] py-4 px-6'placeholder='Пароль' type='password' />
                </div>
                <div className='flex items-center justify-center bg-content-primary text-white rounded-2xl py-4' onClick={()=>onAuth()}>Войти</div>
        </div>
    </div>
  )
}
