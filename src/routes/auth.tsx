import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Logo from './../img/ico.png'
import { useAuthServiceLogin } from '../api/endpoints/nmost-api'
import { useEffect, useState } from 'react'
export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  const [login,setLogin]= useState("")
  const [pass,setPass] = useState("")
    const navigate = useNavigate()
    const {mutate,data} = useAuthServiceLogin()

    const onAuth=()=>{
      mutate({data:{
        username:login,
        password:pass}
      })
      if (login !== "admin" && pass !== "admin123123")
        window.alert("Пароль не верный")
      else
      navigate({to:"/admin"})
    }
    useEffect(()=>{
console.log(data)
    },[data])
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
                    <input className='border border-[#595F6B14] rounded-[20px] py-4 px-6' placeholder='Логин' onChange={(e)=>setLogin(e.target.value)} value={login} />
                    <input className='border border-[#595F6B14] rounded-[20px] py-4 px-6'placeholder='Пароль' type='password' onChange={(e)=>setPass(e.target.value)} value={pass} />
                </div>
                <div className='flex items-center justify-center bg-content-primary text-white rounded-2xl py-4' onClick={()=>onAuth()}>Войти</div>
        </div>
    </div>
  )
}
