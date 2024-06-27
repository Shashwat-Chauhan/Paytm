import React, { useEffect, useMemo, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import axios from "axios"


function Dashboard() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/account/balance",{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token") 
    }
    })
    .then((response) => {
      setBalance(response.data.balance);
    })
  }, [])
  return (
    <>
    <Appbar/>
    <Balance value={balance}/>
    <Users/>
    </>
    
  )
}

export default Dashboard
