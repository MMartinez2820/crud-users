import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const UsersForm = ({setAdd, getUsers, userSelect, deselectUsers}) => {
  const { handleSubmit, register, reset } = useForm()

    useEffect(()=>{
      if (userSelect) {
        reset(userSelect)
      }
    }, [userSelect])

    const submit = (data)=>{
      if (userSelect) {
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, data)
        .then(()=>{
          getUsers()
          deselectUsers()
        } )
        .catch((error)=> console.log(error.response?.data))
      
      }else{
        axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(()=> getUsers())
        .catch((error)=> console.log(error.response?.data))
      }

    }
  return (
    <div >
      <div className='top-0 right-0 bottom-0 left-0  fixed bg-gray-900/80
      ' onClick={()=>setAdd(false)}>

      </div>
      <form className='bg-zinc-200 p-8 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hover:bg-cyan-800   transition-transform
        ' onSubmit={handleSubmit(submit)}>
      <h1 className='text-[25px] font-semibold mb-3'>New Users</h1>
      <div>
      <i className="fa-solid fa-user w-[15px]"></i>
      
      <div className='w-full flex'>
        <input className='bg-zinc-200 p-2 rounded-md ml-2 pl-2 w-1/2
'{...register("first_name")} type="text" id="first_name" placeholder='Ingresar el Name'/>
        <input className='bg-zinc-200 p-2 rounded-md ml-2 pl-2 w-1/2
'{...register("last_name")} type="text" id='last_name' placeholder='Ingresar su Last Name'/>

      </div>
      <div className='mb-2 flex'>
      <i className="fa-solid fa-envelope w-[15px]"></i>
        <input className='bg-zinc-200 p-2 rounded-md ml-2 pl-2 w-full
'{...register("email")} type="text" id='email' placeholder='Ingrese su Email'/>
      </div>
      <div className='mb-2 flex'>
      <i className="fa-solid fa-lock w-[15]"></i>
        <input className='bg-zinc-200 p-2 rounded-md ml-2 pl-2 w-full
'{...register("password")} type="password" id="password" placeholder="Ingresar su password"/>
      </div>
      <div className='mb-2'>
      <i className="fa-solid fa-cake-candles w-[15px]"></i>
      <input className='bg-zinc-200 p-2 rounded-md ml-2 pl-2 w-full
'{...register("birthday")} type="date" id="birthday" placeholder="Ingresar su birthday"/>
      </div>
      </div>
      <button className='bg-[#37acdae6]  p-2 rounded-xl w-full mt-5 h-10 hover:bg-[#2fd9efd9] duration-1000 hover:translate-y-2
'>Upload</button>
    </form>
    </div>
      
  );
};

export default UsersForm;