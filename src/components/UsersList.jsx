import React from 'react';

const UsersList = ({users, setAdd, deleteUsers, selectUsers}) => {

  return (

    <ul className='mx-auto  grid md:grid-cols-2  grid-cols-1 w-[90%] gap-6 md:w-5/6 place-content-center h-screen' >
      {
        users.map((user)=>(
          <li className='list-none bg-slate-300 mb-4 p-5 flex gap-2 rounded-lg lg:w-full hover:bg-cyan-800 hover:text-slate-100' key={user.id}>
            <div className='w-[700px]'>
              <h3 className='font-semibold text-[20px]'>
                {user.first_name} {user.last_name}
              </h3>
              <div className='text-slate-500 text-[14px]'>
              {user.email}
            </div>
            <div>
              {user.birthday}
            </div>
            </div>
            <div className='flex justify-center flex-col gap-1'>
              <button onClick={()=>{  selectUsers(user) 
                setAdd(true)}}><i className='fa-solid fa-pencil float-right'></i></button>
              <button onClick={()=> deleteUsers(user.id)}><i className='fa-solid fa-trash text-red-600'></i></button>
            </div>
          </li>
        ) )
      }
    </ul>
  );
};

export default UsersList;