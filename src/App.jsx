import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import AddBtn from './components/AddBtn'

function App() {
  const [users, setUsers] = useState([])

  const [add, setAdd] = useState(false)
  const [userSelect, setUserSelect] = useState(null)


  useEffect(() =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data))
  }, [] )

  const getUsers =()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data))
  }

  const deleteUsers =(id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() =>getUsers())
  }
  const selectUsers=(user)=>{
    setUserSelect(user)
  }
  const deselectUsers=()=>setUserSelect(null)
  

  return (
    <div className="App lg:flex overflow-y-auto
    ">
      <UsersList users={users} selectUsers={selectUsers} deleteUsers={deleteUsers} setAdd={setAdd} />
     {add &&  <UsersForm setAdd={setAdd} userSelect={userSelect} getUsers={getUsers} deselectUsers={deselectUsers}  />}
      <AddBtn setAdd={setAdd}/>
    </div>
      
  )
}

export default App
