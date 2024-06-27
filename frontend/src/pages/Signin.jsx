import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Signin() {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className='h-screen bg-slate-700 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 px-4 h-max'>
                <Heading label={"SignIn"}/>
                <SubHeading label={"Enter your credentials to login to your account"}/>
                <InputBox onchange={e => {setUsername(e.target.value)}} label={"Email"} placeholder={"shashwat@gmail.com"}/>
                <InputBox onchange={e => {setPassword(e.target.value)}} label={"Password"} placeholder={"123456"}/>
                <Button onPress={async() => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username,
                        password
                    });
                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                }} text={"Sign In"}/>
                <BottomWarning label={"Not a User?"} buttonText={"Sign-Up"} to={"/Signup"}/>
            </div>
        </div>
    </div>
  )
}

export default Signin
