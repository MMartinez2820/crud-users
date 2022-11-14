import React from 'react';

const AddBtn = ({setAdd}) => {

  return (
    <div className='w-8 h-8 rounded-xl grid place-content-center fixed bottom-10 bg-sky-900 ml-5 hover:bg-teal-400 right-10
    ' onClick={()=>setAdd(true)}>
      <i class="fa-solid fa-user-plus"></i>
    </div>
  );
};

export default AddBtn;