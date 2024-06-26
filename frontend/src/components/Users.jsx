import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from "axios"
import { useNavigate, useSearchParams } from 'react-router-dom'


function Users() {
    
  const [users, setUsers] = useState([])
    const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://paytm-tau6.onrender.com/api/v1/user/bulk")
        .then(response => {
            setUsers(response.data.user)
        })
  }, [])

  return (
    <>
    <div className="font-bold mt-6 text-lg px-5">
        Users
    </div>
    <div className="my-2 px-5">
        <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
    </div>
    <div>
        {users.map(user => <User user={user} />)}
    </div>
    </>
  )
  function User({user}) {
    return <div className="flex justify-between px-5">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
        <Button onPress={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName)
        }} text={"Send Money"}/>
        </div>
    </div>
}



}

export default Users
