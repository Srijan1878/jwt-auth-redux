import React, { useState } from "react";
import "./login.css";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authRedux";

export default function Login() {
  const dispatch = useDispatch()
  const [correctCredentials,setCorrectCredentials] = useState()
    const [credentials,setCredentials]= useState({
        email:"",
        password:""
    })
    const [wrongCredentials,setWrongCredentials] = useState(false)
    
    const submitHandler =async (e) => {
        e.preventDefault()
        try{
        const res = await axios.post('https://floating-hamlet-71176.herokuapp.com/api/admin/login', {
     email:credentials.email,
     password:credentials.password
    })
    if(res.data === "Invalid Password"){
        setWrongCredentials(true)
    }
    else if(res.data === "No User Exists with the given email"){
        setWrongCredentials(true)
    }
    sessionStorage.setItem('token',res.data.token)
    sessionStorage.setItem('admin',(res.data.admin._id))
    setCorrectCredentials(true)
     test()
    sessionExpiry()
}catch(error){
    console.log(error)
}
}
const sessionExpiry = () => {
setTimeout(() => {
  dispatch(authActions.sessionExpires())
  //setSessionExpire(true)
},300000)
}
const test =  async()=> {
await dispatch(authActions.login(correctCredentials))
}
  return (
    <div className="container" >
      <div className="signInContainer">
        <div className="illustrationContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={400.667}
            height={500.667}
            viewBox="0 0 4946.667 4946.667"
          >
            <defs>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-39009.8 39009.8) rotate(51.159 -.373 -.998)"
                spreadMethod="pad"
                id="prefix__b"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2104.76 0 0 -2104.76 10588.9 18521.6)"
                spreadMethod="pad"
                id="prefix__d"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2100.4 0 0 -2100.4 8248.28 18521.8)"
                spreadMethod="pad"
                id="prefix__f"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2096.03 0 0 -2096.03 5910 18522.1)"
                spreadMethod="pad"
                id="prefix__h"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2101.07 0 0 -2101.07 10562.8 16990.3)"
                spreadMethod="pad"
                id="prefix__j"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2096.72 0 0 -2096.72 8226.26 16991.3)"
                spreadMethod="pad"
                id="prefix__l"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2092.35 0 0 -2092.35 5892.05 16992.2)"
                spreadMethod="pad"
                id="prefix__n"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2097.38 0 0 -2097.38 10536.8 15472.2)"
                spreadMethod="pad"
                id="prefix__p"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2093.04 0 0 -2093.04 8204.32 15474)"
                spreadMethod="pad"
                id="prefix__r"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2088.7 0 0 -2088.7 5874.17 15475.7)"
                spreadMethod="pad"
                id="prefix__t"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2093.71 0 0 -2093.71 10510.9 13959.4)"
                spreadMethod="pad"
                id="prefix__v"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2089.39 0 0 -2089.39 8182.45 13961.9)"
                spreadMethod="pad"
                id="prefix__x"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2085.06 0 0 -2085.06 5856.34 13964.4)"
                spreadMethod="pad"
                id="prefix__z"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2090.04 0 0 -2090.04 10485.1 12451.9)"
                spreadMethod="pad"
                id="prefix__B"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2085.74 0 0 -2085.74 8160.66 12455.1)"
                spreadMethod="pad"
                id="prefix__D"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2081.43 0 0 -2081.43 5838.57 12458.4)"
                spreadMethod="pad"
                id="prefix__F"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2086.4 0 0 -2086.4 10459.3 10949.5)"
                spreadMethod="pad"
                id="prefix__H"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2082.11 0 0 -2082.11 8138.94 10953.5)"
                spreadMethod="pad"
                id="prefix__J"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2077.81 0 0 -2077.81 5820.87 10957.5)"
                spreadMethod="pad"
                id="prefix__L"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2082.77 0 0 -2082.77 10433.7 9452.4)"
                spreadMethod="pad"
                id="prefix__N"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2078.48 0 0 -2078.48 8117.3 9457.1)"
                spreadMethod="pad"
                id="prefix__P"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2074.21 0 0 -2074.21 5803.22 9461.8)"
                spreadMethod="pad"
                id="prefix__R"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2079.15 0 0 -2079.15 10408.1 7960.3)"
                spreadMethod="pad"
                id="prefix__T"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2074.88 0 0 -2074.88 8095.74 7965.8)"
                spreadMethod="pad"
                id="prefix__V"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2070.62 0 0 -2070.62 5785.64 7971.2)"
                spreadMethod="pad"
                id="prefix__X"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2075.54 0 0 -2075.54 10382.7 6473.4)"
                spreadMethod="pad"
                id="prefix__Z"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2071.29 0 0 -2071.29 8074.24 6479.6)"
                spreadMethod="pad"
                id="prefix__ab"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2067.04 0 0 -2067.04 5768.12 6485.8)"
                spreadMethod="pad"
                id="prefix__ad"
              >
                <stop offset={0} stopColor="#dae3fe" />
                <stop offset={1} stopColor="#e9effd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__af"
              >
                <stop offset={0} stopColor="#4042e2" />
                <stop offset={1} stopColor="#4f52ff" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(10682.3 0 0 -10682.3 17120 15881)"
                spreadMethod="pad"
                id="prefix__ah"
              >
                <stop offset={0} stopColor="#4042e2" />
                <stop offset={1} stopColor="#4f52ff" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(8173.7 -8173.7) rotate(-66.571 -1.152 -3.862)"
                spreadMethod="pad"
                id="prefix__aj"
              >
                <stop offset={0} stopColor="#09005d" />
                <stop offset={1} stopColor="#1a0f91" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-51217.9 51217.9) rotate(-81.79 .027 .488)"
                spreadMethod="pad"
                id="prefix__al"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-51217.9 51217.9) rotate(-81.79 .029 .487)"
                spreadMethod="pad"
                id="prefix__an"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(23862 -23862) rotate(-63.299 -.08 -1.166)"
                spreadMethod="pad"
                id="prefix__ap"
              >
                <stop offset={0} stopColor="#fe7062" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1186.01 0 0 -1186.01 9375.82 5346.4)"
                spreadMethod="pad"
                id="prefix__ar"
              >
                <stop offset={0} stopColor="#09005d" />
                <stop offset={1} stopColor="#1a0f91" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-1990.097 1990.097) rotate(-83.463 -.552 4.416)"
                spreadMethod="pad"
                id="prefix__at"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1707.25 0 0 -1707.25 11181.8 5316.3)"
                spreadMethod="pad"
                id="prefix__av"
              >
                <stop offset={0} stopColor="#09005d" />
                <stop offset={1} stopColor="#1a0f91" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-1990.092 1990.092) rotate(-87.07 -1.179 4.676)"
                spreadMethod="pad"
                id="prefix__ax"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-11424.64) rotate(-78.156 -.75 .393)"
                spreadMethod="pad"
                id="prefix__az"
              >
                <stop offset={0} stopColor="#09005d" />
                <stop offset={1} stopColor="#1a0f91" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-7714.96 7714.96) rotate(-47.81 2.059 3.292)"
                spreadMethod="pad"
                id="prefix__aB"
              >
                <stop offset={0} stopColor="#4042e2" />
                <stop offset={1} stopColor="#4f52ff" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-15786.67 15786.67) rotate(-61.417 .656 1.298)"
                spreadMethod="pad"
                id="prefix__aD"
              >
                <stop offset={0} stopColor="#4042e2" />
                <stop offset={1} stopColor="#4f52ff" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(1530.14 -1530.14) rotate(-69.887 -5.054 -10.915)"
                spreadMethod="pad"
                id="prefix__aF"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-1882.658 1882.658) rotate(-82.539 3.977 9.418)"
                spreadMethod="pad"
                id="prefix__aH"
              >
                <stop offset={0} stopColor="#4042e2" />
                <stop offset={1} stopColor="#4f52ff" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-1882.648 1882.648) rotate(-82.539 3.846 9.532)"
                spreadMethod="pad"
                id="prefix__aJ"
              >
                <stop offset={0} stopColor="#4042e2" />
                <stop offset={1} stopColor="#4f52ff" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-4007.82 4007.82) rotate(-38.536 5.787 6.79)"
                spreadMethod="pad"
                id="prefix__aL"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(2342.48 -2342.48) rotate(52.164 11.525 .138)"
                spreadMethod="pad"
                id="prefix__aN"
              >
                <stop offset={0} stopColor="#09005d" />
                <stop offset={1} stopColor="#1a0f91" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-1942.64 1942.64) rotate(-37.421 12.606 14.085)"
                spreadMethod="pad"
                id="prefix__aP"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-4316.58) rotate(40.821 4.377 -7.03)"
                spreadMethod="pad"
                id="prefix__aR"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(-139.179 11275.739 6886.885) scale(4201.81)"
                spreadMethod="pad"
                id="prefix__aT"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(-139.179 11325.051 6938.61) scale(4316.57)"
                spreadMethod="pad"
                id="prefix__aV"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(13680.43 -13680.43) rotate(52.854 2.276 -.1)"
                spreadMethod="pad"
                id="prefix__aX"
              >
                <stop offset={0} stopColor="#e1473d" />
                <stop offset={1} stopColor="#e9605a" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-7681.88 7681.88) rotate(-78.475 .561 3.125)"
                spreadMethod="pad"
                id="prefix__aZ"
              >
                <stop offset={0} stopColor="#fe7062" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(12990.356 -12990.356) rotate(4.276 20.956 11.748)"
                spreadMethod="pad"
                id="prefix__bb"
              >
                <stop offset={0} stopColor="#ff9085" />
                <stop offset={1} stopColor="#fb6fbb" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(8560.92 -8560.92) rotate(-68.53 -.693 -2.735)"
                spreadMethod="pad"
                id="prefix__bd"
              >
                <stop offset={0} stopColor="#fe7062" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-1162.881 1162.881) rotate(-62.7 11.86 26.341)"
                spreadMethod="pad"
                id="prefix__bf"
              >
                <stop offset={0} stopColor="#fe7062" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-7903.72 7903.72) rotate(-78.664 .493 2.119)"
                spreadMethod="pad"
                id="prefix__bh"
              >
                <stop offset={0} stopColor="#febbba" />
                <stop offset={1} stopColor="#ff928e" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-39009.8 39009.8) rotate(51.159 -.373 -.998)"
                spreadMethod="pad"
                id="prefix__bj"
              >
                <stop offset={0} stopColor="#c4d5fd" />
                <stop offset={1} stopColor="#ceddfc" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-39009.8 39009.8) rotate(51.159 -.373 -.998)"
                spreadMethod="pad"
                id="prefix__bl"
              >
                <stop offset={0} stopColor="#c4d5fd" />
                <stop offset={1} stopColor="#ceddfc" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__bn"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(8173.7 -8173.7) rotate(-66.571 -1.152 -3.862)"
                spreadMethod="pad"
                id="prefix__bp"
              >
                <stop offset={0} stopColor="#32368c" />
                <stop offset={1} stopColor="#3e41b1" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__br"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(8173.7 -8173.7) rotate(-66.571 -1.152 -3.862)"
                spreadMethod="pad"
                id="prefix__bt"
              >
                <stop offset={0} stopColor="#32368c" />
                <stop offset={1} stopColor="#3e41b1" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__bv"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-39009.8 39009.8) rotate(51.159 -.373 -.998)"
                spreadMethod="pad"
                id="prefix__bx"
              >
                <stop offset={0} stopColor="#c4d5fd" />
                <stop offset={1} stopColor="#ceddfc" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__bz"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-39009.8 39009.8) rotate(51.159 -.373 -.998)"
                spreadMethod="pad"
                id="prefix__bB"
              >
                <stop offset={0} stopColor="#c4d5fd" />
                <stop offset={1} stopColor="#ceddfc" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__bD"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__bF"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-39009.8 39009.8) rotate(51.159 -.373 -.998)"
                spreadMethod="pad"
                id="prefix__bH"
              >
                <stop offset={0} stopColor="#c4d5fd" />
                <stop offset={1} stopColor="#ceddfc" />
              </linearGradient>
              <linearGradient
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(-35753.66 35753.66) rotate(-80.272 .363 1.084)"
                spreadMethod="pad"
                id="prefix__bJ"
              >
                <stop offset={0} stopColor="#5864e9" />
                <stop offset={1} stopColor="#636ffd" />
              </linearGradient>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__a">
                <path d="M5063.74 14074.5c-576.11 2343-480.69 4874.4 135.95 7235.1 140.07-396.5 319.19-764.2 528.6-1096.9 96.82-153.8 186.15-311.5 267.78-472.6h-449.63c-193.93 0-352.15-126.7-355.79-280.8l-126.91-5384.8m27200.36 5256.4c-71 46.8-161.9 75.9-253.7 75.9h-1167.9v4638.1c2.1.7 4.1 1.4 6.2 2.3 97 42.5 192.4 91.5 283.4 145.5 1 .6 2.1 1.3 3.1 2 641.1-1552.4 1007.7-3210.4 1128.9-4863.8m-1421.6 4846.9v677.4c86.2-181.8 168.5-365.5 246.7-550.6-6.6-1.3-13-3.7-19.1-7.3-73.5-43.5-149.8-83.6-227.6-119.5m-19211.9 725h-980.8c-750.76 1091.6-1835.91 1764-2910.26 1774.9 638.9 888.7 1738.05 2218.9 3348.26 3364.9-237.4-736.4-317.7-1582.5-197.8-2461.8 68.7-504.5 198.1-980.7 376.3-1416.9 167-408.8 289-831.8 364.3-1261.1M29251.1 27419h-7892.8c-7.8 27-15.4 54.2-22.6 81.3-11.7 44.1-51.6 73.2-95.2 73.2-8.3 0-16.8-1.1-25.2-3.3-52.5-13.9-83.8-67.8-69.9-120.4 2.7-10.3 5.5-20.6 8.3-30.8h-3400.8c-31.7 197-53.2 396.3-64.2 597.4-8.8 160.1-24.1 321.8-46.3 484.7-214.5 1574.1-1018.7 2874.2-2056.9 3543.1 329.6 71.2 669.9 130.2 1020.4 175.3 591.8 76.2 1200.3 114.7 1816.5 114.7 3141.2 0 6498.1-998.8 9044.7-3098.8 668.2-551 1262-1161.2 1784-1816.4m-8136.7 988.9c-1.4 0-2.8 0-4.2-.1-55.1-1.2-96.6-48.1-94.3-102.4 1.2-29 2.7-58.1 4.6-87.2 5.1-80.4 12.7-161.8 22.8-241.9 6.2-49.8 48.6-86.3 97.5-86.3 2.1 0 4.2.1 6.3.2l6 .6c54 6.8 92.3 56 85.5 109.9-9.5 76.2-16.8 153.5-21.6 230-1.8 27.6-3.2 55.3-4.4 82.9-2.2 52.9-45.8 94.3-98.2 94.3m32 679.5c-48.6 0-90.6-35.8-97.4-85.1-7.3-53.2-13.6-107.2-18.7-160.4-5.1-54.2 34.5-102.2 88.7-107.4 3.1-.3 6.2-.5 9.2-.5 2.2 0 4.4.1 6.5.2 47.4 3 87 40.1 91.7 88.9 4.8 50.5 10.8 101.8 17.7 152.4 7.4 53.9-30.2 103.5-84.1 110.9-4.6.7-9.1 1-13.6 1m1542.5 2575.2c-20.2 0-40.5-6.2-58-19-43.4-31.7-86.6-64.6-128.4-97.8-42.6-33.8-49.7-95.7-15.9-138.3 19.4-24.5 48.2-37.2 77.2-37.2 2 0 4.1 0 6.2.2 19.4 1.2 38.6 8.1 54.9 21.1 39.8 31.6 80.8 62.8 122.1 93 43.9 32 53.5 93.6 21.5 137.5-19.3 26.4-49.2 40.5-79.6 40.5" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__c">
                <path d="M10588.9 18095.2l2088.2 2.3 16.6 850.5h-2090.2l-14.6-852.8" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__e">
                <path d="M8248.28 18095.7l2086.12 2.2 14.3 850.1H8260.55z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__g">
                <path d="M5910 18096.1l2084.01 2.2 12.02 849.7H5920.01z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__i">
                <path d="M10562.8 16568.5l2084.6-1.1 16.5 845-2086.6.7-14.5-844.6" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__k">
                <path d="M8226.26 16569.7l2082.44-1.1 14.3 844.6-2084.51.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__m">
                <path d="M5892.05 16570.9l2080.38-1.1 11.98 844.2-2082.39.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__o">
                <path d="M10536.8 15052.2l2080.9-1.7 16.5 842.1-2083 1.4-14.4-841.8" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__q">
                <path d="M8204.32 15054.2l2078.88-1.7 14.2 841.6-2080.9 1.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__s">
                <path d="M5874.17 15056.1l2076.76-1.7 11.93 841.3-2078.76 1.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__u">
                <path d="M10510.9 13541.3l2077.3-2.4 16.4 839.1-2079.3 2-14.4-838.7" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__w">
                <path d="M8182.45 13543.9l2075.25-2.3 14.1 838.7-2077.21 2z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__y">
                <path d="M5856.34 13546.7l2073.16-2.5 11.9 838.4-2075.17 2z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__A">
                <path d="M10485.1 12035.5l2073.7-3.1 16.3 836.3-2075.7 2.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__C">
                <path d="M8160.66 12038.9l2071.64-3.1 14.1 835.9-2073.64 2.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__E">
                <path d="M5838.57 12042.4l2069.58-3.1 11.85 835.4-2071.57 2.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__G">
                <path d="M10459.3 10534.9l2070.2-3.7 16.2 833.3-2072.1 3.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__I">
                <path d="M8138.94 10539.1l2068.06-3.7 14.1 832.9-2070.1 3.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__K">
                <path d="M5820.87 10543.3l2066-3.8 11.81 832.6-2067.98 3.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__M">
                <path d="M10433.7 9039.5l2066.5-4.4 16.3 830.5-2068.6 4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__O">
                <path d="M8117.3 9044.4l2064.5-4.4 14 830.1-2066.49 4.1z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__Q">
                <path d="M5803.22 9049.3l2062.44-4.4 11.78 829.7-2064.42 4.1z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__S">
                <path d="M10408.1 7549.2l2063-5 16.2 827.6-2065 4.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__U">
                <path d="M8095.74 7554.9l2060.96-5.1 13.9 827.3-2062.89 4.6z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__W">
                <path d="M5785.63 7560.5l2058.9-5 11.72 826.8-2060.85 4.7z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__Y">
                <path d="M10382.7 6064l2059.4-5.7 16.1 824.9-2061.4 5.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aa">
                <path d="M8074.24 6070.4l2057.36-5.7 13.9 824.5-2059.33 5.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ac">
                <path d="M5768.12 6076.8l2055.34-5.7 11.7 824-2057.32 5.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ae">
                <path d="M30612.2 4963.4H14335.7c-127.3 0-230.4 103.1-230.4 230.3v21994.9c0 127.2 103.1 230.4 230.4 230.4h6818c26.3-95.8 56.5-191.4 89.8-284.5 14.4-40.3 52.3-65.4 92.7-65.4 2.1 0 4.1.1 6.2.2 9 .6 18.1 2.5 27 5.6 51.2 18.4 77.8 74.7 59.5 125.9-25.6 71.6-49.3 144.7-70.6 218.2h9253.9c127.2 0 230.3-103.2 230.3-230.4v-3010.8c-14.2-6.5-28.4-12.9-42.7-19.2-30.7-13.5-44.7-49.4-31.3-80.1 10-22.8 32.4-36.4 55.8-36.4 1.2 0 2.5 0 3.8.1 4.8.3 9.7 1.2 14.4 2.7V5193.7c0-127.2-103.1-230.3-230.3-230.3m-1002.8 18990.8c-31.7 0-58.8-24.3-61.1-56.5-2.4-33.5 22.9-62.6 56.3-65 61.6-4.3 123.8-6.5 185.9-6.5 44.2 0 88.5 1.1 132.5 3.3l.8.1c33.1 2.1 58.5 30.5 56.8 63.7-1.6 32.5-28.4 57.8-60.6 57.8-1 0-2.1 0-3.1-.1-42.1-2.1-84.4-3.2-126.7-3.2-59.2 0-118.4 2.1-176.9 6.2-1.3.1-2.6.2-3.9.2m922.6 102.2c-5.7 0-11.5-.8-17.3-2.5-96.7-28.9-196.2-52.2-295.8-69.4-33.1-5.7-55.3-37.1-49.6-70.2 5.1-29.6 30.8-50.5 59.8-50.5 1.3 0 2.6 0 3.9.1 2.2.1 4.3.4 6.5.8 104.4 17.9 208.7 42.4 310.1 72.7 32.1 9.6 50.4 43.5 40.8 75.6-7.9 26.5-32.2 43.4-58.4 43.4m-1532.5 16.9c-25.7 0-49.5-16.3-57.8-42-10.4-31.9 7-66.2 39-76.6 100.4-32.8 204.1-59.7 308.2-80.1 3.9-.8 7.9-1.1 11.7-1.1 1.3 0 2.6 0 3.8.1 27 1.7 50.4 21.3 55.8 49 6.5 32.9-15 64.8-47.9 71.3-99.3 19.5-198.2 45.2-294 76.4-6.2 2-12.6 3-18.8 3m-562.4 262.5c-20.3 0-40.2-10.2-51.7-28.6-17.8-28.6-9.1-66.1 19.4-83.8 89.8-56.1 184-107.1 279.9-151.9 8.3-3.8 17-5.7 25.6-5.7 1.3 0 2.6.1 3.9.2 21.4 1.3 41.6 14.1 51.3 34.9 14.2 30.5 1 66.7-29.4 80.9-91.5 42.6-181.2 91.3-266.9 144.8-10 6.2-21.2 9.2-32.1 9.2m-483.8 389.5c-15.3 0-30.6-5.8-42.4-17.3-24-23.4-24.5-61.9-1.1-85.9 73.7-75.7 152.9-147.9 235.5-214.4 11.2-9 24.7-13.5 38.1-13.5 1.3 0 2.5.1 3.8.2 16.5 1 32.4 8.7 43.6 22.5 21 26.1 16.9 64.4-9.2 85.5-78.8 63.5-154.4 132.3-224.7 204.5-11.9 12.2-27.7 18.4-43.6 18.4m-2636 20.8c-3.3 0-6.6-.1-9.9-.5-104.8-10.2-209.9-16.1-313.4-17.6-54.4-.9-97.8-45.5-97-99.8.7-53.9 44.7-97.1 98.3-97.1h1.5c64.1.9 129.2 3.5 193.7 7.6 45.2 2.8 90.6 6.5 136 10.9 54.1 5.3 93.7 53.4 88.5 107.6-5 50.8-47.9 88.9-97.7 88.9m-1161.8 63.1c-45.6 0-86.6-31.8-96.3-78.1-11.2-53.3 22.8-105.5 76.1-116.7 107.5-22.6 217.1-40.8 325.8-54.2 4.1-.5 8.1-.8 12.1-.8 2.1 0 4.2.1 6.3.2 46.3 3 85.5 38.5 91.4 86.2 6.6 54-31.7 103.1-85.7 109.8-103.2 12.7-207.3 30-309.4 51.5-6.8 1.5-13.6 2.1-20.3 2.1m1987.7 110.2c-10.1 0-20.5-1.6-30.7-5-98.9-32.4-200.5-61-302.1-85.1-52.9-12.6-85.6-65.6-73.1-118.5 10.7-45.3 51.1-75.8 95.7-75.8 2.1 0 4.1.1 6.2.2 5.5.4 11.1 1.2 16.6 2.5 106.9 25.3 213.9 55.5 318 89.6 51.7 16.9 79.9 72.5 62.9 124.2-13.5 41.4-52.1 67.9-93.5 67.9m-2788.6 153.7c-37.4 0-73.1-21.3-89.6-57.5-22.6-49.5-.9-107.9 48.6-130.5 99.9-45.6 202.8-87.6 305.8-124.5 11-4 22.3-5.9 33.3-5.9 2.1 0 4.2.1 6.2.2 38 2.5 72.8 26.9 86.5 65.1 18.3 51.2-8.3 107.5-59.5 125.9-97.8 35.1-195.5 74.9-290.5 118.3-13.2 6.1-27.1 8.9-40.8 8.9m4222.4 146.5c-10.4 0-20.9-2.7-30.6-8.3-29-16.9-38.7-54.2-21.8-83.2 53.3-91.2 113-180.3 177.2-264.7 12-15.7 30.1-24 48.5-24 1.2 0 2.5.1 3.8.2 11.6.7 23.1 4.7 33 12.3 26.7 20.3 31.9 58.5 11.5 85.2-61.3 80.4-118.2 165.4-169 252.4-11.3 19.3-31.7 30.1-52.6 30.1m-665.9 49.7c-17.1 0-34.6-4.5-50.4-13.9-89.4-53.5-182.2-103.7-275.9-149.5-48.9-23.8-69.1-82.8-45.3-131.6 17.1-35 52.1-55.3 88.6-55.3 2 0 4.1 0 6.2.2 12.5.8 25 4 36.9 9.8 98.6 48.1 196.4 101.1 290.5 157.4 46.7 27.9 61.9 88.3 34 134.9-18.4 30.9-51.1 48-84.6 48m-4236.4-16.4c54.9-38.8 110.9-76.4 167.4-112.2 16.4-10.4 34.6-15.3 52.7-15.3 2 0 4.1.1 6.2.2 30.4 1.9 59.4 17.9 77 45.5 29.1 46 15.5 106.8-30.5 135.9-38.5 24.4-76.7 49.6-114.5 75.6 69.5 85.9 111.1 195.4 111.1 314.5 0 276.5-224.1 500.7-500.7 500.7-137.4 0-261.8-55.3-352.3-144.9-19.4 22-46.5 33.3-73.8 33.3-22.5 0-45.1-7.6-63.6-23.3-41.5-35.2-46.6-97.3-11.5-138.8 11.9-14 23.8-27.9 35.9-41.7-22.8-57.3-35.4-119.8-35.4-185.3 0-276.5 224.2-500.7 500.7-500.7 83.5 0 162.1 20.4 231.3 56.5m4788.7 417.6c-22.9 0-45.9-8-64.6-24.3-38.6-33.6-78.1-66.7-117.6-98.4-42.4-34-49.2-96-15.2-138.4 19.4-24.2 48-36.8 76.8-36.8 2.1 0 4.2 0 6.3.2 19.5 1.2 38.9 8.2 55.3 21.4 41.6 33.3 83.2 68.2 123.8 103.6 41 35.8 45.2 97.9 9.5 138.9-19.5 22.3-46.8 33.8-74.3 33.8m-5917.5 1116.1c-15.3 0-30.9-3.6-45.4-11.2-48.2-25.2-66.9-84.7-41.7-132.9 50.8-97.2 106.4-193.5 165.3-286.2 18.8-29.5 50.6-45.6 83.2-45.6 2.1 0 4.2.1 6.2.2 16.1 1 32 5.9 46.5 15.2 45.9 29.1 59.5 89.9 30.3 135.8-55.9 88.1-108.7 179.5-156.9 271.8-17.6 33.6-52 52.9-87.5 52.9" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ag">
                <path d="M27574.2 9043.1H17348c-125.9 0-228 102.1-228 228V22491c0 125.9 102.1 228 228 228h10226.2c125.9 0 228-102.1 228-228V9271.1c0-125.9-102.1-228-228-228z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ai">
                <path d="M22443.4 25196.4c-276.5 0-500.7 224.2-500.7 500.7 0 65.5 12.6 128 35.4 185.3 60.2-69.1 123.3-136.6 188-201.2 19.2-19.1 44.4-28.7 69.6-28.7 2 0 4.1 0 6.2.2 23.1 1.4 45.8 11 63.5 28.7 38.4 38.5 38.3 100.8-.2 139.2-73.9 73.7-145.5 151.4-212.7 230.8-.5.5-.9 1-1.4 1.5 90.5 89.6 214.9 144.9 352.3 144.9 276.6 0 500.7-224.2 500.7-500.7 0-119.1-41.6-228.6-111.1-314.5-48.6 33.4-96.6 67.9-143.3 103.3-17.8 13.5-38.7 20-59.4 20-29.7 0-59.1-13.4-78.5-39-32.9-43.4-24.3-105.1 19-137.9 34.1-25.9 68.8-51.2 103.9-76.1-69.2-36.1-147.8-56.5-231.3-56.5" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ak">
                <path d="M25678.2 17614l-6441.7-107.1c-490.3-8.2-889.2-389.4-889.2-851.5v-4056.8c0-462.1 398.9-820.7 889.2-801l6441.7 258.7c462.7 18.6 836.5 395.6 836.5 842.2v3920.7c0 446.7-373.8 802.5-836.5 794.8z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__am">
                <path d="M26004.3 18347.7c-195.1-2.9-353.5 147.7-353.5 336.3v887.9c0 890.7-753.5 1613.2-1686.2 1610.5l-2098.5-6c-956.7-2.8-1740.7-746.6-1740.7-1658.2v-908.6c0-193-166.1-352-371.3-355.1-205.6-3-372.5 151.5-372.5 345.1v911.4c0 1301 1120.9 2359.5 2484.5 2359.5h2098.5c1325 0 2392.1-1028.1 2392.1-2291.7v-885.3c0-188.1-157.7-342.9-352.4-345.8z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ao">
                <path d="M23499.6 15365.7c0 450.8-393.6 804.8-872.1 772.3-423-28.8-772.9-367.6-795.8-772.1-17.7-314 154.8-585.3 417.1-722.6 111.5-58.3 166.9-181.4 145.2-303l-183.9-1032.2c-23.4-131.4 82.2-246.9 221.2-241.9l472.7 16.9c138.3 5 243.2 127.5 220 256.8l-183.8 1022.6c-21.9 121.9 41.5 243.1 153.3 310 243.3 145.4 406.1 403.3 406.1 693.2z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aq">
                <path d="M10561.8 4924.1c.1 8.9-.4 17.8-2.7 26.8-133.6 529.6-796.59 859.5-796.59 859.5l-262.72-20.6c-151.05-466.8-131.64-753.1-107.38-880.6.67-3.6 1.76-7 2.71-10.4 216.72-19.4 662.78-32 1166.68 25.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__as">
                <path d="M9394.16 6181.1l111.27-535.7c8.15-39.2 38.31-68.6 74.84-72 44.72-4.2 108.37-6.7 172.39 2.7 57.4 8.4 97.37 66.8 87.2 129.4l-77.35 475.6z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__au">
                <path d="M12889 4948.9c-1.9 4-3.5 8.2-6.3 12-140.7 196.6-499 588.1-1207.1 757.8l-339.7 10.8s-151.2-262.9-154.1-749.9c77.6-31.7 227.7-65.9 517.8-74 448.5-12.6 980.6 26 1189.4 43.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aw">
                <path d="M11257.8 6228.5c5.4-25.1 76-406.2 103.4-554 6.5-35.1 33.9-60.9 66.4-62.7 58.2-3.2 152-3.6 232.7 18.3 43.5 11.8 72.7 56.2 69.6 105.4l-38 602.9z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ay">
                <path d="M11000.4 13265.9s467.3-3210.9 804.5-7031.9c6.3-71.2-50.4-133.1-120.3-147.8-103.1-21.7-254.5-47.5-379.8-44-67 1.9-122.9 51.5-134.2 117.5-114.8 673.7-934.6 4289.4-1149.7 5085.2 0 0-247.18-3380.3-168.19-5134 1.97-43.6-29.96-81.4-73.32-86.4-65.77-7.6-171-13.4-304.92.8-50.83 5.4-91.84 43.8-99.1 94.4-81.83 570.2-552.82 3964.1-532.8 6408.9 1.14 137.9 161.77 1270.6 161.77 1270.6z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aA">
                <path d="M11181.5 18665.7l62.5-1680.2c177.7-61.2 346.9-108.7 508-144.3 100.8 324.5 322.7 722.6 504.3 1018.7-667.5 236-1074.8 805.8-1074.8 805.8z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aC">
                <path d="M8934.11 13080.9c-48.05 17-81.54 60.6-86.77 111.3-62.14 602.9-363.01 4340.9 1536.46 5878.6 0 0 108.9 285 1004.3-415.6s416-1434.9 201.6-2447.7c-259.4-1225.7-714.5-2227.5-513.1-2981.7 13.9-52.1-13.5-106.7-64-125.3-695.6-256.4-1388.42-264.9-2078.49-19.6z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aE">
                <path d="M11124.7 20190.8c-.6-53.2-759-1130.5-759-1130.5s136.1-268.2 786-485.9l561.1 1153.5z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aG">
                <path d="M10749 16504.4c-4.7 0-9.5 1.3-13.8 4.2-605.9 409.4-890.92 1070.2-893.74 1076.8-5.29 12.6.56 27 13.06 32.3 12.56 5.3 26.97-.5 32.31-13 2.75-6.5 282.47-654.3 875.97-1055.3 11.3-7.6 14.3-22.9 6.6-34.2-4.7-7-12.5-10.8-20.4-10.8z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aI">
                <path d="M11651.5 17420.3c-8 0-16 3.9-20.7 11.3-1.8 2.8-186.9 290.9-539.5 922.3-108.4 194.1-250.9 317-423.5 365.3-285.8 79.9-561.3-73.3-564-74.9-11.9-6.5-26.9-2.6-33.6 9.3-6.7 11.8-2.6 26.8 9.2 33.5 11.9 6.8 295.2 165.3 601.2 79.7 185.9-51.9 338.6-182.7 453.7-388.9 351.7-629.7 536.1-916.8 537.9-919.7 7.4-11.4 4.1-26.6-7.3-34-4.2-2.7-8.8-3.9-13.4-3.9z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aK">
                <path d="M11721.9 20808.1s269.9-620 288-945.4c18.2-325.4 88.3-536.5-288-602-376.2-65.6-693.2 121.9-864.9 446 0 0-269 499.5-208.7 704 60.4 204.6 1073.6 397.4 1073.6 397.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aM">
                <path d="M10985.6 19939.8l21.4 9.4c27.3 12 38.9 44.5 25.2 70.9-53 102.6-156.5 337.5-22.8 392.3 172.2 70.6 854.3 209.7 1001.4 451.7 141.5 232.6 16.2 532.9-172.2 618.3-12.6 5.7-27.5 1.2-33.9-11l-15.7-29.7c-10.8-20.4-40.8-17.3-47.2 4.8-6.1 21.2-34.3 25.3-46 6.6-45.3-72.4-167.4-189.8-494-250.1-464.2-85.7-771-273.5-778.7-594.2-.5-20.4-22.1-31.7-39.5-21.1-34.3 20.8-89.2 30.7-162.5-31-127.4-107.2-75.3-385.2 204.2-613.9 13.3-10.9 13.1-31.6-1.2-41-50.7-33-126.2-111.4 69.5-216 202.4-108.2 353.5-99.3 411.7-89.7 14.5 2.3 23.8 16.4 20.7 30.7l-62.1 281.9c-3.6 16 8.6 31.1 24.9 31.1z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aO">
                <path d="M10997.3 19880.3s-103 396-280.5 285c-177.6-111.1 92.1-443.8 234.8-458.6z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aQ">
                <path d="M14491.9 18792.1s-135.2 239.8-126.6 356.3c8.6 116.6-64 287.7 13.2 275 77.3-12.6 93.2-2.3 114.2-142.1 21-139.8 264.8-750.6-.8-489.2z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aS">
                <path d="M14517.4 19173.4l-3.1-479.1c-915.7-988.7-1656.9-1046.9-2258-834.4-181.7-296.1-403.5-694.2-504.3-1018.7 2445.4-539.1 3021.2 1709 3021.2 1709 331.2 137.2 398 217.4 383.8 307.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aU">
                <path d="M15221.6 19648.7c-78.2 31.8-231.1 323.4-260.4 227.4-29.3-95.9 12.4-227.4 0-268.2-12.4-40.8-203-510-164.9-614.3 27.4-75.2 178.8-64.1 201.9-187.1 7.7-40.9 40.3-70.2 78.2-70.2 37.9 0 70.5 29.2 78.2 70.1 3.1 16.3 145.2 810.6 67 842.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aW">
                <path d="M14171.4 20477.9c247.2-125 346.4-426.9 221.3-674.2-125-247.3-426.8-346.4-674.1-221.3-247.3 125-346.5 426.8-221.4 674.1 125 247.3 426.9 346.4 674.2 221.4zm-1445.8 168.7c-617.5-1221.3-128-2711.9 1093.3-3329.4 992.7-501.8 2163.2-272.4 2898.3 486.9l4243.3-2145.5c70.4-35.6 154.3-32.7 222.1 7.7l415 247.2c7.2 4.3 13.9 9 20.4 13.9 1.9 1.3 3.6 2.8 5.4 4.3 4.8 3.8 9.5 7.8 13.9 12 1.5 1.4 3.1 2.8 4.5 4.3 5.6 5.4 10.8 11.1 15.7 17l.2.3c52.1 63.4 68 151.9 36.1 231.9l-337.2 845.4c-20.8 52.2-60 95-110.2 120.4l-425 214.9-112.5-222.5-365.1 184.6 112.5 222.5-341.6 172.7-103.5-204.7-443.7 224.4 103.4 204.6-165.3 83.6-53.3-105.3-372 188 53.3 105.4-289.3 146.3-112.5-222.5-206.7 104.5 112.5 222.5-179.1 90.5-112.5-222.4-358.2 181.1 112.5 222.4-503.5 254.6-215.7 109c175.7 1042.1-333.4 2120.8-1326.1 2622.7-1221.3 617.5-2711.9 128-3329.4-1093.3z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__aY">
                <path d="M16165.1 19898.2l2011.6-1017-112.5-222.5 358.2-181.1 112.5 222.5 179.1-90.6-112.5-222.4 206.7-104.5 112.5 222.4 289.3-146.3-53.3-105.3 372-188.1 53.3 105.3 165.3-83.5-103.5-204.7 443.8-224.4 103.5 204.7 341.6-172.7-112.5-222.5 365.1-184.6 112.5 222.5 425-214.9c50.2-25.4 89.3-68.2 110.2-120.4l337.2-845.3c42-105.4 1.2-225.7-96.2-283.7l-415-247.2c-67.8-40.5-151.7-43.4-222.1-7.7L15914.5 18376z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__ba">
                <path d="M13794.9 19709.9c-247.2 125-346.4 426.9-221.3 674.2 125 247.3 426.8 346.4 674.1 221.3 247.3-125 346.5-426.8 221.4-674.1-125-247.3-426.9-346.4-674.2-221.4zm100.4-2265.1c1221.3-617.5 2711.9-128 3329.4 1093.3 617.5 1221.2 128 2711.9-1093.3 3329.3-1221.3 617.5-2711.9 128-3329.4-1093.2-617.5-1221.3-128-2711.9 1093.3-3329.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bc">
                <path d="M14247.7 20605.4c247.3-125 346.5-426.8 221.4-674.1-125-247.3-426.9-346.4-674.2-221.4-247.2 125-346.4 426.9-221.3 674.2 125 247.3 426.8 346.4 674.1 221.3zm2545.9-2673.8l4243.3-2145.4c70.4-35.7 154.3-32.8 222.1 7.7l415 247.2c62.6 37.2 101.4 100.2 110.3 168.4-386.7 419.1-4062.9 2024.3-4200.4 2354.7-48.9 117.5-57.3 295.5 89.2 571.6l-215.6 109c175.7 1042.1-333.4 2120.8-1326.1 2622.6-1221.3 617.5-2711.9 128-3329.4-1093.2-617.5-1221.3-128-2711.9 1093.3-3329.4 992.6-501.9 2163.2-272.5 2898.3 486.8z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__be">
                <path d="M13794.9 19709.9c-247.2 125-346.4 426.9-221.3 674.2 125 247.3 426.8 346.4 674.1 221.3 247.3-125 346.5-426.8 221.4-674.1-125-247.3-426.9-346.4-674.2-221.4zm319.8-1831.1c981.6-496.3 2179.7-102.9 2676 878.7 496.3 981.6 102.9 2179.6-878.7 2675.9-981.6 496.3-2179.7 102.9-2676-878.7-496.3-981.6-102.9-2179.6 878.7-2675.9z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bg">
                <path d="M10749 16504.4s2333.5-781.2 3638.7 212.6c81 61.6 183.1 88.5 283.6 72.2l498.6-81.3c209.3-34.1 408.7 101.6 453.8 308.8 25.7 118.1 38.1 247.4 11.9 358.4l-941.3 56.8 26.9 122.2s-416.1-101.8-424.5-427.3c0 0-975.9-639.3-2756 353 0 0-693.2-542.5-791.7-975.4z" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bi">
                <path d="M22563.8 31370.3c-29 0-57.8 12.7-77.2 37.2-33.8 42.6-26.7 104.5 15.9 138.3 41.8 33.2 85 66.1 128.4 97.8 17.5 12.8 37.8 19 58 19 30.4 0 60.3-14.1 79.6-40.5 32-43.9 22.4-105.5-21.5-137.5-41.3-30.2-82.3-61.4-122.1-93-16.3-13-35.5-19.9-54.9-21.1-2.1-.2-4.2-.2-6.2-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bk">
                <path d="M21128.2 28734c-3 0-6.1.2-9.2.5-54.2 5.2-93.8 53.2-88.7 107.4 5.1 53.2 11.4 107.2 18.7 160.4 6.8 49.3 48.8 85.1 97.4 85.1 4.5 0 9-.3 13.6-1 53.9-7.4 91.5-57 84.1-110.9-6.9-50.6-12.9-101.9-17.7-152.4-4.7-48.8-44.3-85.9-91.7-88.9-2.1-.1-4.3-.2-6.5-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bm">
                <path d="M24995.3 24531.1c-53.6 0-97.6 43.2-98.3 97.1-.8 54.3 42.6 98.9 97 99.8 103.5 1.5 208.6 7.4 313.4 17.6 3.3.4 6.6.5 9.9.5 49.8 0 92.7-38.1 97.7-88.9 5.2-54.2-34.4-102.3-88.5-107.6-45.4-4.4-90.8-8.1-136-10.9-64.5-4.1-129.6-6.7-193.7-7.6h-1.5m-522.1 28.3c-4 0-8 .3-12.1.8-108.7 13.4-218.3 31.6-325.8 54.2-53.3 11.2-87.3 63.4-76.1 116.7 9.7 46.3 50.7 78.1 96.3 78.1 6.7 0 13.5-.6 20.3-2.1 102.1-21.5 206.2-38.8 309.4-51.5 54-6.7 92.3-55.8 85.7-109.8-5.9-47.7-45.1-83.2-91.4-86.2-2.1-.1-4.2-.2-6.3-.2m1359.8 75.6c-44.6 0-85 30.5-95.7 75.8-12.5 52.9 20.2 105.9 73.1 118.5 101.6 24.1 203.2 52.7 302.1 85.1 10.2 3.4 20.6 5 30.7 5 41.4 0 80-26.5 93.5-67.9 17-51.7-11.2-107.3-62.9-124.2-104.1-34.1-211.1-64.3-318-89.6-5.5-1.3-11.1-2.1-16.6-2.5-2.1-.1-4.1-.2-6.2-.2m-2180.3 119.7c-11 0-22.3 1.9-33.3 5.9-103 36.9-205.9 78.9-305.8 124.5-49.5 22.6-71.2 81-48.6 130.5 16.5 36.2 52.2 57.5 89.6 57.5 13.7 0 27.6-2.8 40.8-8.9 95-43.4 192.7-83.2 290.5-118.3 51.2-18.4 77.8-74.7 59.5-125.9-13.7-38.2-48.5-62.6-86.5-65.1-2-.1-4.1-.2-6.2-.2m2975.4 164.3c-36.5 0-71.5 20.3-88.6 55.3-23.8 48.8-3.6 107.8 45.3 131.6 93.7 45.8 186.5 96 275.9 149.5 15.8 9.4 33.3 13.9 50.4 13.9 33.5 0 66.2-17.1 84.6-48 27.9-46.6 12.7-107-34-134.9-94.1-56.3-191.9-109.3-290.5-157.4-11.9-5.8-24.4-9-36.9-9.8-2.1-.2-4.2-.2-6.2-.2m-3733.3 206.4c-18.1 0-36.3 4.9-52.7 15.3-56.5 35.8-112.5 73.4-167.4 112.2 61.3 32 115.2 76.3 158.3 129.7 37.8-26 76-51.2 114.5-75.6 46-29.1 59.6-89.9 30.5-135.9-17.6-27.6-46.6-43.6-77-45.5-2.1-.1-4.2-.2-6.2-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bo">
                <path d="M22674.7 25252.9c-35.1 24.9-69.8 50.2-103.9 76.1-43.3 32.8-51.9 94.5-19 137.9 19.4 25.6 48.8 39 78.5 39 20.7 0 41.6-6.5 59.4-20 46.7-35.4 94.7-69.9 143.3-103.3-43.1-53.4-97-97.7-158.3-129.7" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bq">
                <path d="M21978.1 25882.4c-12.1 13.8-24 27.7-35.9 41.7-35.1 41.5-30 103.6 11.5 138.8 18.5 15.7 41.1 23.3 63.6 23.3 27.3 0 54.4-11.3 73.8-33.3-48.5-48-87.3-106-113-170.5" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bs">
                <path d="M22235.7 25652.5c-25.2 0-50.4 9.6-69.6 28.7-64.7 64.6-127.8 132.1-188 201.2 25.7 64.5 64.5 122.5 113 170.5.5-.5.9-1 1.4-1.5 67.2-79.4 138.8-157.1 212.7-230.8 38.5-38.4 38.6-100.7.2-139.2-17.7-17.7-40.4-27.3-63.5-28.7-2.1-.2-4.2-.2-6.2-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bu">
                <path d="M21707.3 26310.7c-32.6 0-64.4 16.1-83.2 45.6-58.9 92.7-114.5 189-165.3 286.2-25.2 48.2-6.5 107.7 41.7 132.9 14.5 7.6 30.1 11.2 45.4 11.2 35.5 0 69.9-19.3 87.5-52.9 48.2-92.3 101-183.7 156.9-271.8 29.2-45.9 15.6-106.7-30.3-135.8-14.5-9.3-30.4-14.2-46.5-15.2-2-.1-4.1-.2-6.2-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bw">
                <path d="M21358.3 27419h-204.6c-2.8 10.2-5.6 20.5-8.3 30.8-13.9 52.6 17.4 106.5 69.9 120.4 8.4 2.2 16.9 3.3 25.2 3.3 43.6 0 83.5-29.1 95.2-73.2 7.2-27.1 14.8-54.3 22.6-81.3" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__by">
                <path d="M21336.2 27069.1c-40.4 0-78.3 25.1-92.7 65.4-33.3 93.1-63.5 188.7-89.8 284.5h204.6c21.3-73.5 45-146.6 70.6-218.2 18.3-51.2-8.3-107.5-59.5-125.9-8.9-3.1-18-5-27-5.6-2.1-.1-4.1-.2-6.2-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bA">
                <path d="M21140.8 27890c-48.9 0-91.3 36.5-97.5 86.3-10.1 80.1-17.7 161.5-22.8 241.9-1.9 29.1-3.4 58.2-4.6 87.2-2.3 54.3 39.2 101.2 94.3 102.4 1.4.1 2.8.1 4.2.1 52.4 0 96-41.4 98.2-94.3 1.2-27.6 2.6-55.3 4.4-82.9 4.8-76.5 12.1-153.8 21.6-230 6.8-53.9-31.5-103.1-85.5-109.9l-6-.6c-2.1-.1-4.2-.2-6.3-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bC">
                <path d="M27342.8 25372.6c-28.8 0-57.4 12.6-76.8 36.8-34 42.4-27.2 104.4 15.2 138.4 39.5 31.7 79 64.8 117.6 98.4 18.7 16.3 41.7 24.3 64.6 24.3 27.5 0 54.8-11.5 74.3-33.8 35.7-41 31.5-103.1-9.5-138.9-40.6-35.4-82.2-70.3-123.8-103.6-16.4-13.2-35.8-20.2-55.3-21.4-2.1-.2-4.2-.2-6.3-.2" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bE">
                <path d="M29790.5 23826.2c-62.1 0-124.3 2.2-185.9 6.5-33.4 2.4-58.7 31.5-56.3 65 2.3 32.2 29.4 56.5 61.1 56.5 1.3 0 2.6-.1 3.9-.2 58.5-4.1 117.7-6.2 176.9-6.2 42.3 0 84.6 1.1 126.7 3.2 1 .1 2.1.1 3.1.1 32.2 0 59-25.3 60.6-57.8 1.7-33.2-23.7-61.6-56.8-63.7l-.8-.1c-44-2.2-88.3-3.3-132.5-3.3m438.6 37.6c-29 0-54.7 20.9-59.8 50.5-5.7 33.1 16.5 64.5 49.6 70.2 99.6 17.2 199.1 40.5 295.8 69.4 5.8 1.7 11.6 2.5 17.3 2.5 26.2 0 50.5-16.9 58.4-43.4 9.6-32.1-8.7-66-40.8-75.6-101.4-30.3-205.7-54.8-310.1-72.7-2.2-.4-4.3-.7-6.5-.8-1.3-.1-2.6-.1-3.9-.1m-928.5 9.7c-3.8 0-7.8.3-11.7 1.1-104.1 20.4-207.8 47.3-308.2 80.1-32 10.4-49.4 44.7-39 76.6 8.3 25.7 32.1 42 57.8 42 6.2 0 12.6-1 18.8-3 95.8-31.2 194.7-56.9 294-76.4 32.9-6.5 54.4-38.4 47.9-71.3-5.4-27.7-28.8-47.3-55.8-49-1.2-.1-2.5-.1-3.8-.1" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bG">
                <path d="M30842.5 24044.9v132.9c77.8 35.9 154.1 76 227.6 119.5 6.1 3.6 12.5 6 19.1 7.3 15.4-36.4 30.9-73.4 46-109.9-1-.7-2.1-1.4-3.1-2-91-54-186.4-103-283.4-145.5-2.1-.9-4.1-1.6-6.2-2.3" />
              </clipPath>
              <clipPath clipPathUnits="userSpaceOnUse" id="prefix__bI">
                <path d="M30824.3 24042.1c-23.4 0-45.8 13.6-55.8 36.4-13.4 30.7.6 66.6 31.3 80.1 14.3 6.3 28.5 12.7 42.7 19.2v-132.9c-4.7-1.5-9.6-2.4-14.4-2.7-1.3-.1-2.6-.1-3.8-.1m-2114 23.7c-8.6 0-17.3 1.9-25.6 5.7-95.9 44.8-190.1 95.8-279.9 151.9-28.5 17.7-37.2 55.2-19.4 83.8 11.5 18.4 31.4 28.6 51.7 28.6 10.9 0 22.1-3 32.1-9.2 85.7-53.5 175.4-102.2 266.9-144.8 30.4-14.2 43.6-50.4 29.4-80.9-9.7-20.8-29.9-33.6-51.3-34.9-1.3-.1-2.6-.2-3.9-.2m-526.9 328.4c-13.4 0-26.9 4.5-38.1 13.5-82.6 66.5-161.8 138.7-235.5 214.4-23.4 24-22.9 62.5 1.1 85.9 11.8 11.5 27.1 17.3 42.4 17.3 15.9 0 31.7-6.2 43.6-18.4 70.3-72.2 145.9-141 224.7-204.5 26.1-21.1 30.2-59.4 9.2-85.5-11.2-13.8-27.1-21.5-43.6-22.5-1.3-.1-2.5-.2-3.8-.2m-433.1 445.2c-18.4 0-36.5 8.3-48.5 24-64.2 84.4-123.9 173.5-177.2 264.7-16.9 29-7.2 66.3 21.8 83.2 9.7 5.6 20.2 8.3 30.6 8.3 20.9 0 41.3-10.8 52.6-30.1 50.8-87 107.7-172 169-252.4 20.4-26.7 15.2-64.9-11.5-85.2-9.9-7.6-21.4-11.6-33-12.3-1.3-.1-2.6-.2-3.8-.2" />
              </clipPath>
            </defs>
            <path d="M0 4946.667h4946.667V0H0z" fill="#fff" />
            <g
              clipPath="url(#prefix__a)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5063.74 14074.5c-576.11 2343-480.69 4874.4 135.95 7235.1 140.07-396.5 319.19-764.2 528.6-1096.9 96.82-153.8 186.15-311.5 267.78-472.6h-449.63c-193.93 0-352.15-126.7-355.79-280.8l-126.91-5384.8m27200.36 5256.4c-71 46.8-161.9 75.9-253.7 75.9h-1167.9v4638.1c2.1.7 4.1 1.4 6.2 2.3 97 42.5 192.4 91.5 283.4 145.5 1 .6 2.1 1.3 3.1 2 641.1-1552.4 1007.7-3210.4 1128.9-4863.8m-1421.6 4846.9v677.4c86.2-181.8 168.5-365.5 246.7-550.6-6.6-1.3-13-3.7-19.1-7.3-73.5-43.5-149.8-83.6-227.6-119.5m-19211.9 725h-980.8c-750.76 1091.6-1835.91 1764-2910.26 1774.9 638.9 888.7 1738.05 2218.9 3348.26 3364.9-237.4-736.4-317.7-1582.5-197.8-2461.8 68.7-504.5 198.1-980.7 376.3-1416.9 167-408.8 289-831.8 364.3-1261.1M29251.1 27419h-7892.8c-7.8 27-15.4 54.2-22.6 81.3-11.7 44.1-51.6 73.2-95.2 73.2-8.3 0-16.8-1.1-25.2-3.3-52.5-13.9-83.8-67.8-69.9-120.4 2.7-10.3 5.5-20.6 8.3-30.8h-3400.8c-31.7 197-53.2 396.3-64.2 597.4-8.8 160.1-24.1 321.8-46.3 484.7-214.5 1574.1-1018.7 2874.2-2056.9 3543.1 329.6 71.2 669.9 130.2 1020.4 175.3 591.8 76.2 1200.3 114.7 1816.5 114.7 3141.2 0 6498.1-998.8 9044.7-3098.8 668.2-551 1262-1161.2 1784-1816.4m-8136.7 988.9c-1.4 0-2.8 0-4.2-.1-55.1-1.2-96.6-48.1-94.3-102.4 1.2-29 2.7-58.1 4.6-87.2 5.1-80.4 12.7-161.8 22.8-241.9 6.2-49.8 48.6-86.3 97.5-86.3 2.1 0 4.2.1 6.3.2l6 .6c54 6.8 92.3 56 85.5 109.9-9.5 76.2-16.8 153.5-21.6 230-1.8 27.6-3.2 55.3-4.4 82.9-2.2 52.9-45.8 94.3-98.2 94.3m32 679.5c-48.6 0-90.6-35.8-97.4-85.1-7.3-53.2-13.6-107.2-18.7-160.4-5.1-54.2 34.5-102.2 88.7-107.4 3.1-.3 6.2-.5 9.2-.5 2.2 0 4.4.1 6.5.2 47.4 3 87 40.1 91.7 88.9 4.8 50.5 10.8 101.8 17.7 152.4 7.4 53.9-30.2 103.5-84.1 110.9-4.6.7-9.1 1-13.6 1m1542.5 2575.2c-20.2 0-40.5-6.2-58-19-43.4-31.7-86.6-64.6-128.4-97.8-42.6-33.8-49.7-95.7-15.9-138.3 19.4-24.5 48.2-37.2 77.2-37.2 2 0 4.1 0 6.2.2 19.4 1.2 38.6 8.1 54.9 21.1 39.8 31.6 80.8 62.8 122.1 93 43.9 32 53.5 93.6 21.5 137.5-19.3 26.4-49.2 40.5-79.6 40.5"
                fill="url(#prefix__b)"
              />
            </g>
            <path
              d="M1328.87 1658.347c.343-17.76 15.277-32.054 33.57-32.054h1109.667c18.546 0 38.24 14.734 38.24 32.734V4174.16c0 13.44-7.84 26.333-17.64 35.827-9.8 9.48-24.254 14.8-38.094 14.76l-1121.825-2.974c-13.96-.04-27.61-5.506-37.376-15.2-9.764-9.693-15.261-22.813-15-36.373l48.459-2511.853"
              fill="#bdd0fb"
            />
            <path
              d="M1509.413 1806.067a753.483 753.483 0 00-16.52-44.294l69.907-.213a792.786 792.786 0 01-1.12 44.333l-52.267.174M1544.44 1931.68c-.787-2.493-1.56-5-2.307-7.507l3.947-.013c-.533 2.507-1.093 5.027-1.64 7.52"
              fill="#dfe9fd"
            />
            <path
              d="M692.087 2352.093c.485-20.546 21.581-37.44 47.438-37.44h977.355c26.2 0 51.933 17.787 51.933 38.6v1861.214c0 10.013-7.253 19.626-16.186 26.693-8.92 7.08-22.147 11.04-34.76 11.013l-1021.871-2.213c-12.716-.027-25.165-4.12-34.059-11.333-8.894-7.227-13.908-17.214-13.67-27.307l43.82-1859.227"
              fill="#bdd0fb"
            />
            <g
              clipPath="url(#prefix__c)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10588.9 18095.2l2088.2 2.3 16.6 850.5h-2090.2l-14.6-852.8"
                fill="url(#prefix__d)"
              />
            </g>
            <g
              clipPath="url(#prefix__e)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8248.28 18095.7l2086.12 2.2 14.3 850.1H8260.55l-12.27-852.3"
                fill="url(#prefix__f)"
              />
            </g>
            <g
              clipPath="url(#prefix__g)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5910 18096.1l2084.01 2.2 12.02 849.7H5920.01l-10.01-851.9"
                fill="url(#prefix__h)"
              />
            </g>
            <g
              clipPath="url(#prefix__i)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10562.8 16568.5l2084.6-1.1 16.5 845-2086.6.7-14.5-844.6"
                fill="url(#prefix__j)"
              />
            </g>
            <g
              clipPath="url(#prefix__k)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8226.26 16569.7l2082.44-1.1 14.3 844.6-2084.51.7-12.23-844.2"
                fill="url(#prefix__l)"
              />
            </g>
            <g
              clipPath="url(#prefix__m)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5892.05 16570.9l2080.38-1.1 11.98 844.2-2082.39.7-9.97-843.8"
                fill="url(#prefix__n)"
              />
            </g>
            <g
              clipPath="url(#prefix__o)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10536.8 15052.2l2080.9-1.7 16.5 842.1-2083 1.4-14.4-841.8"
                fill="url(#prefix__p)"
              />
            </g>
            <g
              clipPath="url(#prefix__q)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8204.32 15054.2l2078.88-1.7 14.2 841.6-2080.9 1.4-12.18-841.3"
                fill="url(#prefix__r)"
              />
            </g>
            <g
              clipPath="url(#prefix__s)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5874.17 15056.1l2076.76-1.7 11.93 841.3-2078.76 1.3-9.93-840.9"
                fill="url(#prefix__t)"
              />
            </g>
            <g
              clipPath="url(#prefix__u)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10510.9 13541.3l2077.3-2.4 16.4 839.1-2079.3 2-14.4-838.7"
                fill="url(#prefix__v)"
              />
            </g>
            <g
              clipPath="url(#prefix__w)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8182.45 13543.9l2075.25-2.3 14.1 838.7-2077.21 2-12.14-838.4"
                fill="url(#prefix__x)"
              />
            </g>
            <g
              clipPath="url(#prefix__y)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5856.34 13546.7l2073.16-2.5 11.9 838.4-2075.17 2-9.89-837.9"
                fill="url(#prefix__z)"
              />
            </g>
            <g
              clipPath="url(#prefix__A)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10485.1 12035.5l2073.7-3.1 16.3 836.3-2075.7 2.7-14.3-835.9"
                fill="url(#prefix__B)"
              />
            </g>
            <g
              clipPath="url(#prefix__C)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8160.66 12038.9l2071.64-3.1 14.1 835.9-2073.64 2.7-12.1-835.5"
                fill="url(#prefix__D)"
              />
            </g>
            <g
              clipPath="url(#prefix__E)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5838.57 12042.4l2069.58-3.1 11.85 835.4-2071.57 2.7-9.86-835"
                fill="url(#prefix__F)"
              />
            </g>
            <g
              clipPath="url(#prefix__G)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10459.3 10534.9l2070.2-3.7 16.2 833.3-2072.1 3.4-14.3-833"
                fill="url(#prefix__H)"
              />
            </g>
            <g
              clipPath="url(#prefix__I)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8138.94 10539.1l2068.06-3.7 14.1 832.9-2070.1 3.4-12.06-832.6"
                fill="url(#prefix__J)"
              />
            </g>
            <g
              clipPath="url(#prefix__K)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5820.87 10543.3l2066-3.8 11.81 832.6-2067.98 3.4-9.83-832.2"
                fill="url(#prefix__L)"
              />
            </g>
            <g
              clipPath="url(#prefix__M)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10433.7 9039.5l2066.5-4.4 16.3 830.5-2068.6 4-14.2-830.1"
                fill="url(#prefix__N)"
              />
            </g>
            <g
              clipPath="url(#prefix__O)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8117.3 9044.4l2064.5-4.4 14 830.1-2066.49 4.1-12.01-829.8"
                fill="url(#prefix__P)"
              />
            </g>
            <g
              clipPath="url(#prefix__Q)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5803.22 9049.3l2062.44-4.4 11.78 829.7-2064.42 4.1-9.8-829.4"
                fill="url(#prefix__R)"
              />
            </g>
            <g
              clipPath="url(#prefix__S)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10408.1 7549.2l2063-5 16.2 827.6-2065 4.7-14.2-827.3"
                fill="url(#prefix__T)"
              />
            </g>
            <g
              clipPath="url(#prefix__U)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8095.74 7554.9l2060.96-5.1 13.9 827.3-2062.89 4.6-11.97-826.8"
                fill="url(#prefix__V)"
              />
            </g>
            <g
              clipPath="url(#prefix__W)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5785.63 7560.5l2058.9-5 11.72 826.8-2060.85 4.7-9.77-826.5"
                fill="url(#prefix__X)"
              />
            </g>
            <g
              clipPath="url(#prefix__Y)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10382.7 6064l2059.4-5.7 16.1 824.9-2061.4 5.3-14.1-824.5"
                fill="url(#prefix__Z)"
              />
            </g>
            <g
              clipPath="url(#prefix__aa)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8074.24 6070.4l2057.36-5.7 13.9 824.5-2059.33 5.3-11.93-824.1"
                fill="url(#prefix__ab)"
              />
            </g>
            <g
              clipPath="url(#prefix__ac)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M5768.12 6076.8l2055.34-5.7 11.7 824-2057.32 5.4-9.72-823.7"
                fill="url(#prefix__ad)"
              />
            </g>
            <path
              d="M3243.267 2396.547c.48-20.547 21.586-37.454 47.44-37.454h977.346c26.214 0 51.947 17.787 51.947 38.614V4258.92c0 10.013-7.267 19.613-16.187 26.693-8.933 7.067-22.16 11.027-34.76 11l-1021.88-2.213c-12.72-.027-25.16-4.107-34.053-11.333-8.893-7.214-13.907-17.2-13.68-27.307l43.827-1859.213"
              fill="#bdd0fb"
            />
            <path
              d="M4112.333 2578.253v-113.546h131.334l-2.2 113.413-129.134.133M4237.493 2782.12l-125.16-.067v-112.64l127.36.04-2.2 112.667M4233.547 2984.373l-121.214-.093v-112.267l123.4.08-2.186 112.28M4229.613 3185.933l-117.28-.133v-111.88l119.454.12-2.174 111.893M4225.68 3386.787l-113.347-.16v-111.494l115.534.16-2.187 111.494M4221.773 3586.96l-109.44-.2v-111.107l111.614.187-2.174 111.12M4217.88 3786.427l-105.547-.214v-110.72l107.707.2-2.16 110.734M4214 3985.227l-101.667-.254V3874.64l103.814.227-2.147 110.36M4210.12 4183.333l-97.787-.266v-109.974l99.934.267-2.147 109.973"
              fill="#dee8fd"
            />
            <path
              d="M2271.653 2902.853c-79.76-250.44-234.08-450.026-416.893-567.346-163.413-104.894-281.16-268.24-324.747-456.934a762.609 762.609 0 00-16.36-59.6c-95.933-301.2-359.048-486.32-587.688-413.506-228.642 72.826-336.225 376.026-240.294 677.213 19.613 61.587 46.224 118.307 78.101 168.96 101.736 161.64 141.547 355.507 104.115 543.027-33.458 167.573-24.38 356.253 35.421 544.013 89.19 280.027 271.605 496.493 482.825 605.467 79.894 41.213 151.934 96.64 211.587 163.626 99.133 111.294 238.853 163.614 367.213 122.734 138.48-44.107 224.987-184.334 231.214-347.947 3.533-92.573 25.293-183.32 60.773-269.107 83.773-202.533 95.387-457.4 14.733-710.6"
              fill="#91b3fa"
            />
            <path
              d="M1880.707 3658.773c-5.214-15.453-10.587-30.866-15.747-46.346-17.04-49.894-33.68-99.907-51.04-149.68-29.44-82.707-59.347-165.24-89.813-247.574a903.51 903.51 0 0041.026 42.187c5.854 16.2 11.614 32.427 17.16 48.733l51.707 149.76c15.88 47.547 31.467 95.174 46.707 142.934v59.986m-439.84-1162.946l-27.32-65.254c-20.334-48.666-40.667-97.32-61.494-145.773-40.824-97.267-82.35-194.24-124.672-290.867-41.813-96.853-84.55-193.333-127.572-289.64l8.268-3.906c93.27 189.533 180.344 381.933 265.403 575.226 21.28 48.32 41.787 96.974 62.44 145.56l3.747 8.8c-.2 21.8.2 43.734 1.2 65.854"
              fill="#d0defd"
            />
            <path
              d="M2938.933 2405.053c-37.28-273.493-160.493-507.92-327.786-662.413-149.56-138.12-241.574-328.427-252.654-531.493a806.29 806.29 0 00-6.173-64.627c-44.827-328.933-282.72-568.12-531.333-534.227-248.614 33.88-413.814 328-368.987 656.934 9.16 67.266 26.413 130.76 50.173 188.92 75.827 185.64 82.094 393.4 9.907 580.573-64.52 167.267-88.987 364.08-61.04 569.133 41.68 305.814 190.8 562.787 388.88 713.8 74.92 57.107 139.2 127.507 188.653 207.6 82.187 133.094 216.747 212.534 356.32 193.507 150.574-20.52 264.854-149.88 300.6-317.987 20.227-95.133 58.92-185.053 110.867-267.36 122.6-194.306 180.267-455.826 142.573-732.36"
              fill="#7d97f4"
            />
            <path
              d="M2049.493 1290.8h-19.773c-1.24-5.053-2.467-10.12-3.707-15.187-25.706-107.76-52.44-215.306-79.493-322.72l9.213-2.546c32.96 113.026 63.987 226.586 93.76 340.453"
              fill="#c7d2fa"
            />
            <g
              clipPath="url(#prefix__ae)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M30612.2 4963.4H14335.7c-127.3 0-230.4 103.1-230.4 230.3v21994.9c0 127.2 103.1 230.4 230.4 230.4h6818c26.3-95.8 56.5-191.4 89.8-284.5 14.4-40.3 52.3-65.4 92.7-65.4 2.1 0 4.1.1 6.2.2 9 .6 18.1 2.5 27 5.6 51.2 18.4 77.8 74.7 59.5 125.9-25.6 71.6-49.3 144.7-70.6 218.2h9253.9c127.2 0 230.3-103.2 230.3-230.4v-3010.8c-14.2-6.5-28.4-12.9-42.7-19.2-30.7-13.5-44.7-49.4-31.3-80.1 10-22.8 32.4-36.4 55.8-36.4 1.2 0 2.5 0 3.8.1 4.8.3 9.7 1.2 14.4 2.7V5193.7c0-127.2-103.1-230.3-230.3-230.3m-1002.8 18990.8c-31.7 0-58.8-24.3-61.1-56.5-2.4-33.5 22.9-62.6 56.3-65 61.6-4.3 123.8-6.5 185.9-6.5 44.2 0 88.5 1.1 132.5 3.3l.8.1c33.1 2.1 58.5 30.5 56.8 63.7-1.6 32.5-28.4 57.8-60.6 57.8-1 0-2.1 0-3.1-.1-42.1-2.1-84.4-3.2-126.7-3.2-59.2 0-118.4 2.1-176.9 6.2-1.3.1-2.6.2-3.9.2m922.6 102.2c-5.7 0-11.5-.8-17.3-2.5-96.7-28.9-196.2-52.2-295.8-69.4-33.1-5.7-55.3-37.1-49.6-70.2 5.1-29.6 30.8-50.5 59.8-50.5 1.3 0 2.6 0 3.9.1 2.2.1 4.3.4 6.5.8 104.4 17.9 208.7 42.4 310.1 72.7 32.1 9.6 50.4 43.5 40.8 75.6-7.9 26.5-32.2 43.4-58.4 43.4m-1532.5 16.9c-25.7 0-49.5-16.3-57.8-42-10.4-31.9 7-66.2 39-76.6 100.4-32.8 204.1-59.7 308.2-80.1 3.9-.8 7.9-1.1 11.7-1.1 1.3 0 2.6 0 3.8.1 27 1.7 50.4 21.3 55.8 49 6.5 32.9-15 64.8-47.9 71.3-99.3 19.5-198.2 45.2-294 76.4-6.2 2-12.6 3-18.8 3m-562.4 262.5c-20.3 0-40.2-10.2-51.7-28.6-17.8-28.6-9.1-66.1 19.4-83.8 89.8-56.1 184-107.1 279.9-151.9 8.3-3.8 17-5.7 25.6-5.7 1.3 0 2.6.1 3.9.2 21.4 1.3 41.6 14.1 51.3 34.9 14.2 30.5 1 66.7-29.4 80.9-91.5 42.6-181.2 91.3-266.9 144.8-10 6.2-21.2 9.2-32.1 9.2m-483.8 389.5c-15.3 0-30.6-5.8-42.4-17.3-24-23.4-24.5-61.9-1.1-85.9 73.7-75.7 152.9-147.9 235.5-214.4 11.2-9 24.7-13.5 38.1-13.5 1.3 0 2.5.1 3.8.2 16.5 1 32.4 8.7 43.6 22.5 21 26.1 16.9 64.4-9.2 85.5-78.8 63.5-154.4 132.3-224.7 204.5-11.9 12.2-27.7 18.4-43.6 18.4m-2636 20.8c-3.3 0-6.6-.1-9.9-.5-104.8-10.2-209.9-16.1-313.4-17.6-54.4-.9-97.8-45.5-97-99.8.7-53.9 44.7-97.1 98.3-97.1h1.5c64.1.9 129.2 3.5 193.7 7.6 45.2 2.8 90.6 6.5 136 10.9 54.1 5.3 93.7 53.4 88.5 107.6-5 50.8-47.9 88.9-97.7 88.9m-1161.8 63.1c-45.6 0-86.6-31.8-96.3-78.1-11.2-53.3 22.8-105.5 76.1-116.7 107.5-22.6 217.1-40.8 325.8-54.2 4.1-.5 8.1-.8 12.1-.8 2.1 0 4.2.1 6.3.2 46.3 3 85.5 38.5 91.4 86.2 6.6 54-31.7 103.1-85.7 109.8-103.2 12.7-207.3 30-309.4 51.5-6.8 1.5-13.6 2.1-20.3 2.1m1987.7 110.2c-10.1 0-20.5-1.6-30.7-5-98.9-32.4-200.5-61-302.1-85.1-52.9-12.6-85.6-65.6-73.1-118.5 10.7-45.3 51.1-75.8 95.7-75.8 2.1 0 4.1.1 6.2.2 5.5.4 11.1 1.2 16.6 2.5 106.9 25.3 213.9 55.5 318 89.6 51.7 16.9 79.9 72.5 62.9 124.2-13.5 41.4-52.1 67.9-93.5 67.9m-2788.6 153.7c-37.4 0-73.1-21.3-89.6-57.5-22.6-49.5-.9-107.9 48.6-130.5 99.9-45.6 202.8-87.6 305.8-124.5 11-4 22.3-5.9 33.3-5.9 2.1 0 4.2.1 6.2.2 38 2.5 72.8 26.9 86.5 65.1 18.3 51.2-8.3 107.5-59.5 125.9-97.8 35.1-195.5 74.9-290.5 118.3-13.2 6.1-27.1 8.9-40.8 8.9m4222.4 146.5c-10.4 0-20.9-2.7-30.6-8.3-29-16.9-38.7-54.2-21.8-83.2 53.3-91.2 113-180.3 177.2-264.7 12-15.7 30.1-24 48.5-24 1.2 0 2.5.1 3.8.2 11.6.7 23.1 4.7 33 12.3 26.7 20.3 31.9 58.5 11.5 85.2-61.3 80.4-118.2 165.4-169 252.4-11.3 19.3-31.7 30.1-52.6 30.1m-665.9 49.7c-17.1 0-34.6-4.5-50.4-13.9-89.4-53.5-182.2-103.7-275.9-149.5-48.9-23.8-69.1-82.8-45.3-131.6 17.1-35 52.1-55.3 88.6-55.3 2 0 4.1 0 6.2.2 12.5.8 25 4 36.9 9.8 98.6 48.1 196.4 101.1 290.5 157.4 46.7 27.9 61.9 88.3 34 134.9-18.4 30.9-51.1 48-84.6 48m-4236.4-16.4c54.9-38.8 110.9-76.4 167.4-112.2 16.4-10.4 34.6-15.3 52.7-15.3 2 0 4.1.1 6.2.2 30.4 1.9 59.4 17.9 77 45.5 29.1 46 15.5 106.8-30.5 135.9-38.5 24.4-76.7 49.6-114.5 75.6 69.5 85.9 111.1 195.4 111.1 314.5 0 276.5-224.1 500.7-500.7 500.7-137.4 0-261.8-55.3-352.3-144.9-19.4 22-46.5 33.3-73.8 33.3-22.5 0-45.1-7.6-63.6-23.3-41.5-35.2-46.6-97.3-11.5-138.8 11.9-14 23.8-27.9 35.9-41.7-22.8-57.3-35.4-119.8-35.4-185.3 0-276.5 224.2-500.7 500.7-500.7 83.5 0 162.1 20.4 231.3 56.5m4788.7 417.6c-22.9 0-45.9-8-64.6-24.3-38.6-33.6-78.1-66.7-117.6-98.4-42.4-34-49.2-96-15.2-138.4 19.4-24.2 48-36.8 76.8-36.8 2.1 0 4.2 0 6.3.2 19.5 1.2 38.9 8.2 55.3 21.4 41.6 33.3 83.2 68.2 123.8 103.6 41 35.8 45.2 97.9 9.5 138.9-19.5 22.3-46.8 33.8-74.3 33.8m-5917.5 1116.1c-15.3 0-30.9-3.6-45.4-11.2-48.2-25.2-66.9-84.7-41.7-132.9 50.8-97.2 106.4-193.5 165.3-286.2 18.8-29.5 50.6-45.6 83.2-45.6 2.1 0 4.2.1 6.2.2 16.1 1 32 5.9 46.5 15.2 45.9 29.1 59.5 89.9 30.3 135.8-55.9 88.1-108.7 179.5-156.9 271.8-17.6 33.6-52 52.9-87.5 52.9"
                fill="url(#prefix__af)"
              />
            </g>
            <path
              d="M3732.427 3890.48h-1476.56c-55.974 0-101.347-45.373-101.347-101.347V1841.96c0-55.973 45.373-101.347 101.347-101.347h1476.56c55.973 0 101.346 45.374 101.346 101.347v1947.173c0 55.974-45.373 101.347-101.346 101.347"
              fill="#7d97f4"
            />
            <g
              clipPath="url(#prefix__ag)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M27574.2 9043.1H17348c-125.9 0-228 102.1-228 228V22491c0 125.9 102.1 228 228 228h10226.2c125.9 0 228-102.1 228-228V9271.1c0-125.9-102.1-228-228-228"
                fill="url(#prefix__ah)"
              />
            </g>
            <g
              clipPath="url(#prefix__ai)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M22443.4 25196.4c-276.5 0-500.7 224.2-500.7 500.7 0 65.5 12.6 128 35.4 185.3 60.2-69.1 123.3-136.6 188-201.2 19.2-19.1 44.4-28.7 69.6-28.7 2 0 4.1 0 6.2.2 23.1 1.4 45.8 11 63.5 28.7 38.4 38.5 38.3 100.8-.2 139.2-73.9 73.7-145.5 151.4-212.7 230.8-.5.5-.9 1-1.4 1.5 90.5 89.6 214.9 144.9 352.3 144.9 276.6 0 500.7-224.2 500.7-500.7 0-119.1-41.6-228.6-111.1-314.5-48.6 33.4-96.6 67.9-143.3 103.3-17.8 13.5-38.7 20-59.4 20-29.7 0-59.1-13.4-78.5-39-32.9-43.4-24.3-105.1 19-137.9 34.1-25.9 68.8-51.2 103.9-76.1-69.2-36.1-147.8-56.5-231.3-56.5"
                fill="url(#prefix__aj)"
              />
            </g>
            <g
              clipPath="url(#prefix__ak)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M25678.2 17614l-6441.7-107.1c-490.3-8.2-889.2-389.4-889.2-851.5v-4056.8c0-462.1 398.9-820.7 889.2-801l6441.7 258.7c462.7 18.6 836.5 395.6 836.5 842.2v3920.7c0 446.7-373.8 802.5-836.5 794.8"
                fill="url(#prefix__al)"
              />
            </g>
            <g
              clipPath="url(#prefix__am)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M26004.3 18347.7c-195.1-2.9-353.5 147.7-353.5 336.3v887.9c0 890.7-753.5 1613.2-1686.2 1610.5l-2098.5-6c-956.7-2.8-1740.7-746.6-1740.7-1658.2v-908.6c0-193-166.1-352-371.3-355.1-205.6-3-372.5 151.5-372.5 345.1v911.4c0 1301 1120.9 2359.5 2484.5 2359.5h2098.5c1325 0 2392.1-1028.1 2392.1-2291.7v-885.3c0-188.1-157.7-342.9-352.4-345.8"
                fill="url(#prefix__an)"
              />
            </g>
            <g
              clipPath="url(#prefix__ao)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M23499.6 15365.7c0 450.8-393.6 804.8-872.1 772.3-423-28.8-772.9-367.6-795.8-772.1-17.7-314 154.8-585.3 417.1-722.6 111.5-58.3 166.9-181.4 145.2-303l-183.9-1032.2c-23.4-131.4 82.2-246.9 221.2-241.9l472.7 16.9c138.3 5 243.2 127.5 220 256.8l-183.8 1022.6c-21.9 121.9 41.5 243.1 153.3 310 243.3 145.4 406.1 403.3 406.1 693.2"
                fill="url(#prefix__ap)"
              />
            </g>
            <g
              clipPath="url(#prefix__aq)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10561.8 4924.1c.1 8.9-.4 17.8-2.7 26.8-133.6 529.6-796.59 859.5-796.59 859.5l-262.72-20.6c-151.05-466.8-131.64-753.1-107.38-880.6.67-3.6 1.76-7 2.71-10.4 216.72-19.4 662.78-32 1166.68 25.3"
                fill="url(#prefix__ar)"
              />
            </g>
            <path
              d="M1252.683 4293.493c1.56 5.68 5.75 10.094 11.116 11.227 41.104 8.64 106.441 1.693 133.868-1.893 6.053-.8 10.48-6.387 10.573-12.707-67.187 7.64-126.661 5.96-155.557 3.373"
              fill="#91b3fa"
            />
            <g
              clipPath="url(#prefix__as)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M9394.16 6181.1l111.27-535.7c8.15-39.2 38.31-68.6 74.84-72 44.72-4.2 108.37-6.7 172.39 2.7 57.4 8.4 97.37 66.8 87.2 129.4l-77.35 475.6h-368.35"
                fill="url(#prefix__at)"
              />
            </g>
            <path
              d="M1559.947 4292.587c-38.68-1.08-58.694-5.64-69.04-9.867-.027 3.853 0 7.76.12 11.827.133 4.333 3.346 7.786 7.293 7.76l212.413-1.374c6.787-.04 10.747-7.906 7.8-14.12-27.84 2.307-98.786 7.454-158.586 5.774"
              fill="#91b3fa"
            />
            <g
              clipPath="url(#prefix__au)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M12889 4948.9c-1.9 4-3.5 8.2-6.3 12-140.7 196.6-499 588.1-1207.1 757.8l-339.7 10.8s-151.2-262.9-154.1-749.9c77.6-31.7 227.7-65.9 517.8-74 448.5-12.6 980.6 26 1189.4 43.3"
                fill="url(#prefix__av)"
              />
            </g>
            <g
              clipPath="url(#prefix__aw)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M11257.8 6228.5c5.4-25.1 76-406.2 103.4-554 6.5-35.1 33.9-60.9 66.4-62.7 58.2-3.2 152-3.6 232.7 18.3 43.5 11.8 72.7 56.2 69.6 105.4l-38 602.9-434.1-109.9"
                fill="url(#prefix__ax)"
              />
            </g>
            <g
              clipPath="url(#prefix__ay)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M11000.4 13265.9s467.3-3210.9 804.5-7031.9c6.3-71.2-50.4-133.1-120.3-147.8-103.1-21.7-254.5-47.5-379.8-44-67 1.9-122.9 51.5-134.2 117.5-114.8 673.7-934.6 4289.4-1149.7 5085.2 0 0-247.18-3380.3-168.19-5134 1.97-43.6-29.96-81.4-73.32-86.4-65.77-7.6-171-13.4-304.92.8-50.83 5.4-91.84 43.8-99.1 94.4-81.83 570.2-552.82 3964.1-532.8 6408.9 1.14 137.9 161.77 1270.6 161.77 1270.6l1996.06-533.3"
                fill="url(#prefix__az)"
              />
            </g>
            <g
              clipPath="url(#prefix__aA)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M11181.5 18665.7l62.5-1680.2c177.7-61.2 346.9-108.7 508-144.3 100.8 324.5 322.7 722.6 504.3 1018.7-667.5 236-1074.8 805.8-1074.8 805.8"
                fill="url(#prefix__aB)"
              />
            </g>
            <g
              clipPath="url(#prefix__aC)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M8934.11 13080.9c-48.05 17-81.54 60.6-86.77 111.3-62.14 602.9-363.01 4340.9 1536.46 5878.6 0 0 108.9 285 1004.3-415.6s416-1434.9 201.6-2447.7c-259.4-1225.7-714.5-2227.5-513.1-2981.7 13.9-52.1-13.5-106.7-64-125.3-695.6-256.4-1388.42-264.9-2078.49-19.6"
                fill="url(#prefix__aD)"
              />
            </g>
            <g
              clipPath="url(#prefix__aE)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M11124.7 20190.8c-.6-53.2-759-1130.5-759-1130.5s136.1-268.2 786-485.9l561.1 1153.5-588.1 462.9"
                fill="url(#prefix__aF)"
              />
            </g>
            <g
              clipPath="url(#prefix__aG)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10749 16504.4c-4.7 0-9.5 1.3-13.8 4.2-605.9 409.4-890.92 1070.2-893.74 1076.8-5.29 12.6.56 27 13.06 32.3 12.56 5.3 26.97-.5 32.31-13 2.75-6.5 282.47-654.3 875.97-1055.3 11.3-7.6 14.3-22.9 6.6-34.2-4.7-7-12.5-10.8-20.4-10.8"
                fill="url(#prefix__aH)"
              />
            </g>
            <g
              clipPath="url(#prefix__aI)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M11651.5 17420.3c-8 0-16 3.9-20.7 11.3-1.8 2.8-186.9 290.9-539.5 922.3-108.4 194.1-250.9 317-423.5 365.3-285.8 79.9-561.3-73.3-564-74.9-11.9-6.5-26.9-2.6-33.6 9.3-6.7 11.8-2.6 26.8 9.2 33.5 11.9 6.8 295.2 165.3 601.2 79.7 185.9-51.9 338.6-182.7 453.7-388.9 351.7-629.7 536.1-916.8 537.9-919.7 7.4-11.4 4.1-26.6-7.3-34-4.2-2.7-8.8-3.9-13.4-3.9"
                fill="url(#prefix__aJ)"
              />
            </g>
            <g
              clipPath="url(#prefix__aK)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M11721.9 20808.1s269.9-620 288-945.4c18.2-325.4 88.3-536.5-288-602-376.2-65.6-693.2 121.9-864.9 446 0 0-269 499.5-208.7 704 60.4 204.6 1073.6 397.4 1073.6 397.4"
                fill="url(#prefix__aL)"
              />
            </g>
            <g
              clipPath="url(#prefix__aM)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10985.6 19939.8l21.4 9.4c27.3 12 38.9 44.5 25.2 70.9-53 102.6-156.5 337.5-22.8 392.3 172.2 70.6 854.3 209.7 1001.4 451.7 141.5 232.6 16.2 532.9-172.2 618.3-12.6 5.7-27.5 1.2-33.9-11l-15.7-29.7c-10.8-20.4-40.8-17.3-47.2 4.8-6.1 21.2-34.3 25.3-46 6.6-45.3-72.4-167.4-189.8-494-250.1-464.2-85.7-771-273.5-778.7-594.2-.5-20.4-22.1-31.7-39.5-21.1-34.3 20.8-89.2 30.7-162.5-31-127.4-107.2-75.3-385.2 204.2-613.9 13.3-10.9 13.1-31.6-1.2-41-50.7-33-126.2-111.4 69.5-216 202.4-108.2 353.5-99.3 411.7-89.7 14.5 2.3 23.8 16.4 20.7 30.7l-62.1 281.9c-3.6 16 8.6 31.1 24.9 31.1h96.8"
                fill="url(#prefix__aN)"
              />
            </g>
            <g
              clipPath="url(#prefix__aO)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10997.3 19880.3s-103 396-280.5 285c-177.6-111.1 92.1-443.8 234.8-458.6l45.7 173.6"
                fill="url(#prefix__aP)"
              />
            </g>
            <g
              clipPath="url(#prefix__aQ)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M14491.9 18792.1s-135.2 239.8-126.6 356.3c8.6 116.6-64 287.7 13.2 275 77.3-12.6 93.2-2.3 114.2-142.1 21-139.8 264.8-750.6-.8-489.2"
                fill="url(#prefix__aR)"
              />
            </g>
            <g
              clipPath="url(#prefix__aS)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M14517.4 19173.4l-3.1-479.1c-915.7-988.7-1656.9-1046.9-2258-834.4-181.7-296.1-403.5-694.2-504.3-1018.7 2445.4-539.1 3021.2 1709 3021.2 1709 331.2 137.2 398 217.4 383.8 307.3l-639.6 315.9"
                fill="url(#prefix__aT)"
              />
            </g>
            <g
              clipPath="url(#prefix__aU)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M15221.6 19648.7c-78.2 31.8-231.1 323.4-260.4 227.4-29.3-95.9 12.4-227.4 0-268.2-12.4-40.8-203-510-164.9-614.3 27.4-75.2 178.8-64.1 201.9-187.1 7.7-40.9 40.3-70.2 78.2-70.2 37.9 0 70.5 29.2 78.2 70.1 3.1 16.3 145.2 810.6 67 842.3"
                fill="url(#prefix__aV)"
              />
            </g>
            <g
              clipPath="url(#prefix__aW)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M14171.4 20477.9c247.2-125 346.4-426.9 221.3-674.2-125-247.3-426.8-346.4-674.1-221.3-247.3 125-346.5 426.8-221.4 674.1 125 247.3 426.9 346.4 674.2 221.4zm-1445.8 168.7c-617.5-1221.3-128-2711.9 1093.3-3329.4 992.7-501.8 2163.2-272.4 2898.3 486.9l4243.3-2145.5c70.4-35.6 154.3-32.7 222.1 7.7l415 247.2c7.2 4.3 13.9 9 20.4 13.9 1.9 1.3 3.6 2.8 5.4 4.3 4.8 3.8 9.5 7.8 13.9 12 1.5 1.4 3.1 2.8 4.5 4.3 5.6 5.4 10.8 11.1 15.7 17l.2.3c52.1 63.4 68 151.9 36.1 231.9l-337.2 845.4c-20.8 52.2-60 95-110.2 120.4l-425 214.9-112.5-222.5-365.1 184.6 112.5 222.5-341.6 172.7-103.5-204.7-443.7 224.4 103.4 204.6-165.3 83.6-53.3-105.3-372 188 53.3 105.4-289.3 146.3-112.5-222.5-206.7 104.5 112.5 222.5-179.1 90.5-112.5-222.4-358.2 181.1 112.5 222.4-503.5 254.6-215.7 109c175.7 1042.1-333.4 2120.8-1326.1 2622.7-1221.3 617.5-2711.9 128-3329.4-1093.3"
                fill="url(#prefix__aX)"
              />
            </g>
            <g
              clipPath="url(#prefix__aY)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M16165.1 19898.2l2011.6-1017-112.5-222.5 358.2-181.1 112.5 222.5 179.1-90.6-112.5-222.4 206.7-104.5 112.5 222.4 289.3-146.3-53.3-105.3 372-188.1 53.3 105.3 165.3-83.5-103.5-204.7 443.8-224.4 103.5 204.7 341.6-172.7-112.5-222.5 365.1-184.6 112.5 222.5 425-214.9c50.2-25.4 89.3-68.2 110.2-120.4l337.2-845.3c42-105.4 1.2-225.7-96.2-283.7l-415-247.2c-67.8-40.5-151.7-43.4-222.1-7.7L15914.5 18376l250.6 1522.2"
                fill="url(#prefix__aZ)"
              />
            </g>
            <g
              clipPath="url(#prefix__ba)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M13794.9 19709.9c-247.2 125-346.4 426.9-221.3 674.2 125 247.3 426.8 346.4 674.1 221.3 247.3-125 346.5-426.8 221.4-674.1-125-247.3-426.9-346.4-674.2-221.4zm100.4-2265.1c1221.3-617.5 2711.9-128 3329.4 1093.3 617.5 1221.2 128 2711.9-1093.3 3329.3-1221.3 617.5-2711.9 128-3329.4-1093.2-617.5-1221.3-128-2711.9 1093.3-3329.4"
                fill="url(#prefix__bb)"
              />
            </g>
            <g
              clipPath="url(#prefix__bc)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M14247.7 20605.4c247.3-125 346.5-426.8 221.4-674.1-125-247.3-426.9-346.4-674.2-221.4-247.2 125-346.4 426.9-221.3 674.2 125 247.3 426.8 346.4 674.1 221.3zm2545.9-2673.8l4243.3-2145.4c70.4-35.7 154.3-32.8 222.1 7.7l415 247.2c62.6 37.2 101.4 100.2 110.3 168.4-386.7 419.1-4062.9 2024.3-4200.4 2354.7-48.9 117.5-57.3 295.5 89.2 571.6l-215.6 109c175.7 1042.1-333.4 2120.8-1326.1 2622.6-1221.3 617.5-2711.9 128-3329.4-1093.2-617.5-1221.3-128-2711.9 1093.3-3329.4 992.6-501.9 2163.2-272.5 2898.3 486.8"
                fill="url(#prefix__bd)"
              />
            </g>
            <g
              clipPath="url(#prefix__be)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M13794.9 19709.9c-247.2 125-346.4 426.9-221.3 674.2 125 247.3 426.8 346.4 674.1 221.3 247.3-125 346.5-426.8 221.4-674.1-125-247.3-426.9-346.4-674.2-221.4zm319.8-1831.1c981.6-496.3 2179.7-102.9 2676 878.7 496.3 981.6 102.9 2179.6-878.7 2675.9-981.6 496.3-2179.7 102.9-2676-878.7-496.3-981.6-102.9-2179.6 878.7-2675.9"
                fill="url(#prefix__bf)"
              />
            </g>
            <g
              clipPath="url(#prefix__bg)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M10749 16504.4s2333.5-781.2 3638.7 212.6c81 61.6 183.1 88.5 283.6 72.2l498.6-81.3c209.3-34.1 408.7 101.6 453.8 308.8 25.7 118.1 38.1 247.4 11.9 358.4l-941.3 56.8 26.9 122.2s-416.1-101.8-424.5-427.3c0 0-975.9-639.3-2756 353 0 0-693.2-542.5-791.7-975.4"
                fill="url(#prefix__bh)"
              />
            </g>
            <path
              d="M3836.853 1186.227c-.173 0-.36 0-.533-.014-7.24-.293-12.88-6.413-12.573-13.653a502.813 502.813 0 00-.08-42.533c-.32-7.147 5.16-13.227 12.28-13.68l.253-.014c.2 0 .4-.013.587-.013 6.986 0 12.8 5.507 13.106 12.547.667 14.893.694 29.96.08 44.773-.28 6.773-5.64 12.147-12.266 12.56-.28.013-.574.027-.854.027m-8.066-114.08c-6.214 0-11.734-4.427-12.907-10.76a500.078 500.078 0 00-9.413-41.454c-1.907-6.986 2.213-14.213 9.213-16.12 1.16-.306 2.32-.453 3.453-.453 5.787 0 11.067 3.827 12.667 9.667a536.575 536.575 0 019.92 43.626c1.293 7.134-3.427 13.974-10.56 15.28-.52.094-1.027.16-1.547.187-.28.027-.546.027-.826.027m-33-109.454a13.13 13.13 0 01-12.067-7.96 497.582 497.582 0 00-18.44-38.293c-3.413-6.387-1.013-14.347 5.387-17.773a13.002 13.002 0 016.173-1.547c4.68 0 9.227 2.507 11.587 6.92a516.527 516.527 0 0119.413 40.347c2.867 6.653-.227 14.373-6.88 17.24-1.427.6-2.893.946-4.347 1.04-.28.013-.546.026-.826.026m-56.667-99.346c-4.053 0-8.04-1.867-10.613-5.387a493.485 493.485 0 00-26.547-33.227c-4.76-5.466-4.187-13.76 1.28-18.52a13.05 13.05 0 018.613-3.226c3.667 0 7.307 1.52 9.907 4.493a534.296 534.296 0 0127.947 34.987c4.266 5.853 3 14.066-2.854 18.346a13.112 13.112 0 01-7.733 2.534m-77.4-84.227c-3.053 0-6.12-1.053-8.613-3.213a506.478 506.478 0 00-33.24-26.534c-5.854-4.293-7.134-12.493-2.854-18.346a13.103 13.103 0 0110.6-5.387c2.694 0 5.414.827 7.747 2.533a531.904 531.904 0 0134.973 27.92c5.467 4.76 6.054 13.054 1.294 18.52a13.068 13.068 0 01-9.08 4.48c-.267.027-.547.027-.827.027m-94.093-64.987a13.02 13.02 0 01-6.2-1.573 498.147 498.147 0 00-38.28-18.507c-6.654-2.88-9.72-10.6-6.84-17.253a13.136 13.136 0 0112.053-7.933c1.747 0 3.507.346 5.213 1.08a528.274 528.274 0 0140.28 19.493c6.387 3.427 8.787 11.387 5.36 17.773a13.154 13.154 0 01-10.746 6.894c-.28.013-.56.026-.84.026m-482.04-.72a13.123 13.123 0 01-11.587-6.96c-3.413-6.4-1-14.346 5.4-17.76a524.288 524.288 0 0140.387-19.346 13.026 13.026 0 015.146-1.054c5.107 0 9.96 2.987 12.08 7.974 2.854 6.666-.24 14.373-6.906 17.226a491.304 491.304 0 00-38.36 18.374 13.19 13.19 0 01-6.16 1.546m375.973-41.786c-1.16 0-2.333-.147-3.507-.48a504.576 504.576 0 00-41.413-9.507c-7.12-1.32-11.84-8.16-10.52-15.293 1.173-6.334 6.707-10.734 12.933-10.734.774 0 1.574.067 2.36.214a518.784 518.784 0 0143.614 10.013c6.986 1.92 11.093 9.147 9.173 16.147-1.52 5.546-6.387 9.266-11.827 9.613-.266.027-.533.027-.813.027m-269.64-.307c-5.787 0-11.08-3.853-12.667-9.707-1.893-6.986 2.254-14.2 9.254-16.093a528.582 528.582 0 0143.666-9.84c.8-.147 1.6-.213 2.387-.213 6.213 0 11.72 4.466 12.867 10.786 1.293 7.134-3.44 13.974-10.574 15.267a504.686 504.686 0 00-41.506 9.347c-.867.24-1.734.373-2.6.426-.28.014-.56.027-.827.027m156.667-17.427c-.174 0-.36 0-.547-.013a497.585 497.585 0 00-21.427-.453c-7.04 0-14.08.146-21.08.44-.186.013-.386.013-.573.013-6.987 0-12.8-5.52-13.107-12.573-.293-7.147 5.174-13.2 12.28-13.654l.28-.013c7.4-.32 14.854-.467 22.294-.467 7.506 0 15.013.16 22.466.48 7.24.307 12.854 6.44 12.547 13.68-.293 6.76-5.653 12.107-12.267 12.534-.28.013-.573.026-.866.026"
              fill="#dee8fd"
            />
            <g
              clipPath="url(#prefix__bi)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M22563.8 31370.3c-29 0-57.8 12.7-77.2 37.2-33.8 42.6-26.7 104.5 15.9 138.3 41.8 33.2 85 66.1 128.4 97.8 17.5 12.8 37.8 19 58 19 30.4 0 60.3-14.1 79.6-40.5 32-43.9 22.4-105.5-21.5-137.5-41.3-30.2-82.3-61.4-122.1-93-16.3-13-35.5-19.9-54.9-21.1-2.1-.2-4.2-.2-6.2-.2"
                fill="url(#prefix__bj)"
              />
            </g>
            <g
              clipPath="url(#prefix__bk)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M21128.2 28734c-3 0-6.1.2-9.2.5-54.2 5.2-93.8 53.2-88.7 107.4 5.1 53.2 11.4 107.2 18.7 160.4 6.8 49.3 48.8 85.1 97.4 85.1 4.5 0 9-.3 13.6-1 53.9-7.4 91.5-57 84.1-110.9-6.9-50.6-12.9-101.9-17.7-152.4-4.7-48.8-44.3-85.9-91.7-88.9-2.1-.1-4.3-.2-6.5-.2"
                fill="url(#prefix__bl)"
              />
            </g>
            <g
              clipPath="url(#prefix__bm)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M24995.3 24531.1c-53.6 0-97.6 43.2-98.3 97.1-.8 54.3 42.6 98.9 97 99.8 103.5 1.5 208.6 7.4 313.4 17.6 3.3.4 6.6.5 9.9.5 49.8 0 92.7-38.1 97.7-88.9 5.2-54.2-34.4-102.3-88.5-107.6-45.4-4.4-90.8-8.1-136-10.9-64.5-4.1-129.6-6.7-193.7-7.6h-1.5m-522.1 28.3c-4 0-8 .3-12.1.8-108.7 13.4-218.3 31.6-325.8 54.2-53.3 11.2-87.3 63.4-76.1 116.7 9.7 46.3 50.7 78.1 96.3 78.1 6.7 0 13.5-.6 20.3-2.1 102.1-21.5 206.2-38.8 309.4-51.5 54-6.7 92.3-55.8 85.7-109.8-5.9-47.7-45.1-83.2-91.4-86.2-2.1-.1-4.2-.2-6.3-.2m1359.8 75.6c-44.6 0-85 30.5-95.7 75.8-12.5 52.9 20.2 105.9 73.1 118.5 101.6 24.1 203.2 52.7 302.1 85.1 10.2 3.4 20.6 5 30.7 5 41.4 0 80-26.5 93.5-67.9 17-51.7-11.2-107.3-62.9-124.2-104.1-34.1-211.1-64.3-318-89.6-5.5-1.3-11.1-2.1-16.6-2.5-2.1-.1-4.1-.2-6.2-.2m-2180.3 119.7c-11 0-22.3 1.9-33.3 5.9-103 36.9-205.9 78.9-305.8 124.5-49.5 22.6-71.2 81-48.6 130.5 16.5 36.2 52.2 57.5 89.6 57.5 13.7 0 27.6-2.8 40.8-8.9 95-43.4 192.7-83.2 290.5-118.3 51.2-18.4 77.8-74.7 59.5-125.9-13.7-38.2-48.5-62.6-86.5-65.1-2-.1-4.1-.2-6.2-.2m2975.4 164.3c-36.5 0-71.5 20.3-88.6 55.3-23.8 48.8-3.6 107.8 45.3 131.6 93.7 45.8 186.5 96 275.9 149.5 15.8 9.4 33.3 13.9 50.4 13.9 33.5 0 66.2-17.1 84.6-48 27.9-46.6 12.7-107-34-134.9-94.1-56.3-191.9-109.3-290.5-157.4-11.9-5.8-24.4-9-36.9-9.8-2.1-.2-4.2-.2-6.2-.2m-3733.3 206.4c-18.1 0-36.3 4.9-52.7 15.3-56.5 35.8-112.5 73.4-167.4 112.2 61.3 32 115.2 76.3 158.3 129.7 37.8-26 76-51.2 114.5-75.6 46-29.1 59.6-89.9 30.5-135.9-17.6-27.6-46.6-43.6-77-45.5-2.1-.1-4.2-.2-6.2-.2"
                fill="url(#prefix__bn)"
              />
            </g>
            <g
              clipPath="url(#prefix__bo)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M22674.7 25252.9c-35.1 24.9-69.8 50.2-103.9 76.1-43.3 32.8-51.9 94.5-19 137.9 19.4 25.6 48.8 39 78.5 39 20.7 0 41.6-6.5 59.4-20 46.7-35.4 94.7-69.9 143.3-103.3-43.1-53.4-97-97.7-158.3-129.7"
                fill="url(#prefix__bp)"
              />
            </g>
            <g
              clipPath="url(#prefix__bq)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M21978.1 25882.4c-12.1 13.8-24 27.7-35.9 41.7-35.1 41.5-30 103.6 11.5 138.8 18.5 15.7 41.1 23.3 63.6 23.3 27.3 0 54.4-11.3 73.8-33.3-48.5-48-87.3-106-113-170.5"
                fill="url(#prefix__br)"
              />
            </g>
            <g
              clipPath="url(#prefix__bs)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M22235.7 25652.5c-25.2 0-50.4 9.6-69.6 28.7-64.7 64.6-127.8 132.1-188 201.2 25.7 64.5 64.5 122.5 113 170.5.5-.5.9-1 1.4-1.5 67.2-79.4 138.8-157.1 212.7-230.8 38.5-38.4 38.6-100.7.2-139.2-17.7-17.7-40.4-27.3-63.5-28.7-2.1-.2-4.2-.2-6.2-.2"
                fill="url(#prefix__bt)"
              />
            </g>
            <g
              clipPath="url(#prefix__bu)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M21707.3 26310.7c-32.6 0-64.4 16.1-83.2 45.6-58.9 92.7-114.5 189-165.3 286.2-25.2 48.2-6.5 107.7 41.7 132.9 14.5 7.6 30.1 11.2 45.4 11.2 35.5 0 69.9-19.3 87.5-52.9 48.2-92.3 101-183.7 156.9-271.8 29.2-45.9 15.6-106.7-30.3-135.8-14.5-9.3-30.4-14.2-46.5-15.2-2-.1-4.1-.2-6.2-.2"
                fill="url(#prefix__bv)"
              />
            </g>
            <g
              clipPath="url(#prefix__bw)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M21358.3 27419h-204.6c-2.8 10.2-5.6 20.5-8.3 30.8-13.9 52.6 17.4 106.5 69.9 120.4 8.4 2.2 16.9 3.3 25.2 3.3 43.6 0 83.5-29.1 95.2-73.2 7.2-27.1 14.8-54.3 22.6-81.3"
                fill="url(#prefix__bx)"
              />
            </g>
            <g
              clipPath="url(#prefix__by)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M21336.2 27069.1c-40.4 0-78.3 25.1-92.7 65.4-33.3 93.1-63.5 188.7-89.8 284.5h204.6c21.3-73.5 45-146.6 70.6-218.2 18.3-51.2-8.3-107.5-59.5-125.9-8.9-3.1-18-5-27-5.6-2.1-.1-4.1-.2-6.2-.2"
                fill="url(#prefix__bz)"
              />
            </g>
            <g
              clipPath="url(#prefix__bA)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M21140.8 27890c-48.9 0-91.3 36.5-97.5 86.3-10.1 80.1-17.7 161.5-22.8 241.9-1.9 29.1-3.4 58.2-4.6 87.2-2.3 54.3 39.2 101.2 94.3 102.4 1.4.1 2.8.1 4.2.1 52.4 0 96-41.4 98.2-94.3 1.2-27.6 2.6-55.3 4.4-82.9 4.8-76.5 12.1-153.8 21.6-230 6.8-53.9-31.5-103.1-85.5-109.9l-6-.6c-2.1-.1-4.2-.2-6.3-.2"
                fill="url(#prefix__bB)"
              />
            </g>
            <g
              clipPath="url(#prefix__bC)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M27342.8 25372.6c-28.8 0-57.4 12.6-76.8 36.8-34 42.4-27.2 104.4 15.2 138.4 39.5 31.7 79 64.8 117.6 98.4 18.7 16.3 41.7 24.3 64.6 24.3 27.5 0 54.8-11.5 74.3-33.8 35.7-41 31.5-103.1-9.5-138.9-40.6-35.4-82.2-70.3-123.8-103.6-16.4-13.2-35.8-20.2-55.3-21.4-2.1-.2-4.2-.2-6.3-.2"
                fill="url(#prefix__bD)"
              />
            </g>
            <path
              d="M3671.347 1339.96c1.52-2.133 1.52-5 .013-7.133l-43.253-60.867c13.293-32.253 21.533-66.84 23.893-102.653l65.613-35.534a6.145 6.145 0 003.134-6.4l-14.654-88.36a6.132 6.132 0 00-5.026-5.053l-73.574-12.453c-13.8-33.134-32.76-63.214-55.746-89.44l21.28-71.574a6.144 6.144 0 00-2.32-6.746l-72.84-52.12a6.15 6.15 0 00-7.12-.014l-60.88 43.254c-32.24-13.294-66.827-21.534-102.64-23.894l-35.547-65.613a6.126 6.126 0 00-6.4-3.133l-88.36 14.653a6.102 6.102 0 00-5.04 5.027l-12.467 73.573a325.227 325.227 0 00-89.426 55.747l-71.587-21.28a6.124 6.124 0 00-6.733 2.32l-52.12 72.84a6.129 6.129 0 00-.014 7.12l43.254 60.88c-13.294 32.24-21.547 66.826-23.894 102.64l-65.626 35.546a6.146 6.146 0 00-3.134 6.4l14.654 88.36a6.132 6.132 0 005.04 5.04l73.573 12.467c13.787 33.133 32.76 63.213 55.747 89.44l-21.28 71.573a6.138 6.138 0 002.306 6.734l72.854 52.12a6.129 6.129 0 007.12.013l60.866-43.24c32.254 13.28 66.84 21.533 102.654 23.893l35.533 65.614c1.253 2.293 3.827 3.56 6.4 3.133l88.373-14.653a6.163 6.163 0 005.04-5.04l12.454-73.574c33.133-13.786 63.213-32.76 89.44-55.746l71.573 21.28a6.137 6.137 0 006.747-2.307l52.12-72.84"
              fill="#91b3fa"
            />
            <path
              d="M3280.84 1094.84c-14.067 11.92-22.667 28.6-24.187 46.973-3.16 37.934 25.134 71.36 63.067 74.507 37.947 3.173 71.36-25.133 74.52-63.08 3.147-37.92-25.147-71.347-63.08-74.507-3.44-.28-6.853-.32-10.24-.093-14.68.92-28.64 6.52-40.08 16.2zm37.147 142.413c-49.48-4.106-86.374-47.706-82.267-97.186 1.987-23.96 13.2-45.72 31.56-61.254 18.347-15.546 41.653-23 65.627-21.013 49.466 4.12 86.373 47.707 82.266 97.187-3.746 45.013-40.16 79.626-83.96 82.4-4.346.28-8.773.24-13.226-.134"
              fill="#bdd0fb"
            />
            <path
              d="M3337.613 1367.28c7.52-.48 15.054-1.333 22.6-2.587a213.71 213.71 0 007.094-1.293 221.909 221.909 0 0034.12-9.653c.146-.067.293-.12.44-.174l1.28-.48c.84-.32 1.666-.64 2.493-.973a5.26 5.26 0 003.307-5.2 5.755 5.755 0 00-.36-1.613 5.252 5.252 0 00-6.814-2.947 211.58 211.58 0 01-43.28 11.973c-73.72 12.24-144.986-15.546-191.56-67.4-25.92-28.84-44.186-65.133-50.986-106.133a215.846 215.846 0 01-2.467-21.573c-3.053-48.28 10.48-95.76 39.013-135.64 32.774-45.814 81.427-76.107 137-85.334 114.76-19.013 223.52 58.84 242.534 173.547a212.577 212.577 0 012.44 21.28c1.946 30.8-2.867 61.693-14.2 90.427a5.242 5.242 0 002.96 6.813c2.693 1.053 5.746-.253 6.813-2.96 11.893-30.173 16.947-62.6 14.907-94.933-.48-7.467-1.32-14.92-2.56-22.347-19.96-120.44-134.227-202.147-254.614-182.187-58.333 9.68-109.413 41.494-143.826 89.587-29.96 41.867-44.16 91.707-40.947 142.4.48 7.533 1.347 15.08 2.587 22.627 9.68 58.346 41.493 109.426 89.586 143.84 41.867 29.96 91.734 44.16 142.44 40.933"
              fill="#bdd0fb"
            />
            <path
              d="M4306.173 1503.08a8.22 8.22 0 01-1.786-.187c-4.374-1-7.107-5.333-6.12-9.693a332.854 332.854 0 003.773-19.427c.653-3.96 4.08-6.8 7.973-6.8.44 0 .894.04 1.334.12 4.426.72 7.426 4.894 6.693 9.307a338.655 338.655 0 01-3.96 20.36 8.094 8.094 0 01-7.387 6.307c-.173.013-.346.013-.52.013M4314.253 1441.24h-.293a8.118 8.118 0 01-7.8-8.413c.44-11.294.293-22.747-.427-34.014-.146-2.386-.32-4.773-.533-7.16-.373-4.453 2.933-8.373 7.4-8.76.12 0 .24-.013.373-.013 4.094 0 8.027 3.08 8.387 7.413.213 2.507.4 5 .56 7.494.747 11.813.907 23.813.453 35.666a8.103 8.103 0 01-7.586 7.774c-.174.013-.36.013-.534.013m-7.08-83.88a8.114 8.114 0 01-7.933-6.453c-2.8-13.4-6.467-26.76-10.88-39.694a8.092 8.092 0 017.653-10.72c3.374 0 6.534 2.107 7.694 5.48a351.51 351.51 0 0111.4 41.614 8.11 8.11 0 01-7.427 9.76c-.173.013-.347.013-.507.013m-27.24-79.653c-3 0-5.893-1.68-7.293-4.56a335.01 335.01 0 00-20.32-35.814c-2.44-3.746-1.387-8.773 2.36-11.213a8.13 8.13 0 014.44-1.32 8.091 8.091 0 016.787 3.68 350.93 350.93 0 0121.306 37.56c1.96 4.027.294 8.88-3.733 10.84a8.133 8.133 0 01-3.04.813c-.173 0-.347.014-.507.014m-46-70.52c-2.306 0-4.6-.987-6.2-2.88a333.223 333.223 0 00-28.453-29.747c-3.293-3.04-3.493-8.173-.453-11.453a8.083 8.083 0 015.96-2.614c1.973 0 3.933.72 5.493 2.147a352.77 352.77 0 0129.84 31.2c2.893 3.413 2.467 8.533-.96 11.427a8.13 8.13 0 01-4.707 1.893c-.173.013-.346.027-.52.027m-61.813-57.16a8.124 8.124 0 01-4.733-1.52 337.305 337.305 0 00-34.827-21.947c-3.92-2.147-5.36-7.08-3.213-11.013a8.137 8.137 0 017.12-4.214c1.32 0 2.653.32 3.893 1.014a355.294 355.294 0 0136.493 22.986c3.64 2.627 4.467 7.694 1.854 11.32a8.093 8.093 0 01-6.08 3.36c-.16.014-.334.014-.507.014m-73.813-40.414c-.987 0-2-.173-2.987-.56a331.074 331.074 0 00-39.08-12.773c-4.333-1.133-6.947-5.56-5.813-9.893a8.092 8.092 0 017.84-6.067c.68 0 1.36.08 2.04.253a349.688 349.688 0 0141 13.4c4.16 1.654 6.2 6.374 4.546 10.534-1.2 3-4 4.906-7.026 5.093-.174.013-.347.013-.52.013M3891.2 1095.44c-3.653 0-6.973-2.493-7.867-6.2a8.087 8.087 0 015.947-9.787 351.299 351.299 0 0136.853-6.92c1.894-.266 3.76-.493 5.64-.72.374-.053.747-.08 1.107-.08 3.973 0 7.413 3.12 7.88 7.214.52 4.44-2.667 8.466-7.12 8.986-1.76.2-3.533.427-5.32.667a339.182 339.182 0 00-35.2 6.6c-.467.12-.947.187-1.413.213-.174.014-.334.027-.507.027m125.68-6.947c-.347 0-.693-.026-1.053-.066a331.771 331.771 0 00-41.067-2.8c-4.467-.027-8.08-3.68-8.053-8.16.026-4.467 3.68-8.014 8.16-8.054 14.386.094 28.88 1.067 43.066 2.934 4.44.573 7.574 4.64 6.987 9.08-.507 3.906-3.72 6.8-7.52 7.04-.173.013-.347.026-.52.026"
              fill="#dee8fd"
            />
            <g
              clipPath="url(#prefix__bE)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M29790.5 23826.2c-62.1 0-124.3 2.2-185.9 6.5-33.4 2.4-58.7 31.5-56.3 65 2.3 32.2 29.4 56.5 61.1 56.5 1.3 0 2.6-.1 3.9-.2 58.5-4.1 117.7-6.2 176.9-6.2 42.3 0 84.6 1.1 126.7 3.2 1 .1 2.1.1 3.1.1 32.2 0 59-25.3 60.6-57.8 1.7-33.2-23.7-61.6-56.8-63.7l-.8-.1c-44-2.2-88.3-3.3-132.5-3.3m438.6 37.6c-29 0-54.7 20.9-59.8 50.5-5.7 33.1 16.5 64.5 49.6 70.2 99.6 17.2 199.1 40.5 295.8 69.4 5.8 1.7 11.6 2.5 17.3 2.5 26.2 0 50.5-16.9 58.4-43.4 9.6-32.1-8.7-66-40.8-75.6-101.4-30.3-205.7-54.8-310.1-72.7-2.2-.4-4.3-.7-6.5-.8-1.3-.1-2.6-.1-3.9-.1m-928.5 9.7c-3.8 0-7.8.3-11.7 1.1-104.1 20.4-207.8 47.3-308.2 80.1-32 10.4-49.4 44.7-39 76.6 8.3 25.7 32.1 42 57.8 42 6.2 0 12.6-1 18.8-3 95.8-31.2 194.7-56.9 294-76.4 32.9-6.5 54.4-38.4 47.9-71.3-5.4-27.7-28.8-47.3-55.8-49-1.2-.1-2.5-.1-3.8-.1"
                fill="url(#prefix__bF)"
              />
            </g>
            <path
              d="M4151.36 1720.707c-2.013-4.867-4.08-9.8-6.133-14.654a7.876 7.876 0 011.573-.16 8.117 8.117 0 016.987 3.96 8.12 8.12 0 01-2.427 10.854"
              fill="#dee8fd"
            />
            <g
              clipPath="url(#prefix__bG)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M30842.5 24044.9v132.9c77.8 35.9 154.1 76 227.6 119.5 6.1 3.6 12.5 6 19.1 7.3 15.4-36.4 30.9-73.4 46-109.9-1-.7-2.1-1.4-3.1-2-91-54-186.4-103-283.4-145.5-2.1-.9-4.1-1.6-6.2-2.3"
                fill="url(#prefix__bH)"
              />
            </g>
            <g
              clipPath="url(#prefix__bI)"
              transform="matrix(.13333 0 0 -.13333 0 4946.667)"
            >
              <path
                d="M30824.3 24042.1c-23.4 0-45.8 13.6-55.8 36.4-13.4 30.7.6 66.6 31.3 80.1 14.3 6.3 28.5 12.7 42.7 19.2v-132.9c-4.7-1.5-9.6-2.4-14.4-2.7-1.3-.1-2.6-.1-3.8-.1m-2114 23.7c-8.6 0-17.3 1.9-25.6 5.7-95.9 44.8-190.1 95.8-279.9 151.9-28.5 17.7-37.2 55.2-19.4 83.8 11.5 18.4 31.4 28.6 51.7 28.6 10.9 0 22.1-3 32.1-9.2 85.7-53.5 175.4-102.2 266.9-144.8 30.4-14.2 43.6-50.4 29.4-80.9-9.7-20.8-29.9-33.6-51.3-34.9-1.3-.1-2.6-.2-3.9-.2m-526.9 328.4c-13.4 0-26.9 4.5-38.1 13.5-82.6 66.5-161.8 138.7-235.5 214.4-23.4 24-22.9 62.5 1.1 85.9 11.8 11.5 27.1 17.3 42.4 17.3 15.9 0 31.7-6.2 43.6-18.4 70.3-72.2 145.9-141 224.7-204.5 26.1-21.1 30.2-59.4 9.2-85.5-11.2-13.8-27.1-21.5-43.6-22.5-1.3-.1-2.5-.2-3.8-.2m-433.1 445.2c-18.4 0-36.5 8.3-48.5 24-64.2 84.4-123.9 173.5-177.2 264.7-16.9 29-7.2 66.3 21.8 83.2 9.7 5.6 20.2 8.3 30.6 8.3 20.9 0 41.3-10.8 52.6-30.1 50.8-87 107.7-172 169-252.4 20.4-26.7 15.2-64.9-11.5-85.2-9.9-7.6-21.4-11.6-33-12.3-1.3-.1-2.6-.2-3.8-.2"
                fill="url(#prefix__bJ)"
              />
            </g>
            <path
              d="M4181.44 1698.587a8.137 8.137 0 01-6.413-3.147c-2.747-3.547-2.094-8.64 1.453-11.373a337.246 337.246 0 0015.28-12.56 8.099 8.099 0 015.32-1.987c2.267 0 4.52.933 6.12 2.773 2.947 3.374 2.587 8.494-.773 11.44a353.357 353.357 0 01-16.027 13.147 7.958 7.958 0 01-4.44 1.68c-.173.013-.347.027-.52.027"
              fill="#dee8fd"
            />
            <path
              d="M4203.48 1545.72a4.127 4.127 0 000-4.773l-28.933-40.734c8.893-21.573 14.413-44.72 15.986-68.68l43.907-23.786a4.092 4.092 0 002.093-4.28l-9.8-59.134a4.123 4.123 0 00-3.36-3.373l-49.24-8.333a217.464 217.464 0 00-37.306-59.854l14.24-47.893a4.084 4.084 0 00-1.547-4.507l-48.747-34.88a4.107 4.107 0 00-4.76-.013l-40.733 28.947c-21.573-8.894-44.72-14.414-68.693-15.987l-23.774-43.907a4.121 4.121 0 00-4.28-2.106l-59.133 9.813a4.092 4.092 0 00-3.373 3.36l-8.347 49.24a217.59 217.59 0 00-59.84 37.307l-47.893-14.24a4.084 4.084 0 00-4.507 1.546l-34.88 48.734a4.106 4.106 0 00-.013 4.773l28.946 40.733c-8.893 21.574-14.413 44.72-15.986 68.68l-43.92 23.787a4.132 4.132 0 00-2.094 4.28l9.814 59.133a4.077 4.077 0 003.36 3.374l49.24 8.333a217.74 217.74 0 0037.293 59.853l-14.24 47.894a4.104 4.104 0 001.547 4.506l48.746 34.88a4.106 4.106 0 004.774.014l40.733-28.947c21.573 8.893 44.72 14.413 68.68 15.987l23.787 43.92a4.113 4.113 0 004.28 2.093l59.133-9.813a4.108 4.108 0 003.373-3.36l8.334-49.24c22.173-9.227 42.293-21.92 59.853-37.307l47.893 14.24a4.098 4.098 0 004.507-1.533l34.88-48.747"
              fill="#91b3fa"
            />
            <path
              d="M3927.053 1413.213c-1 12.014 2.747 23.694 10.534 32.894 7.773 9.186 18.68 14.813 30.693 15.813 12.013.973 23.68-2.747 32.893-10.533 9.187-7.787 14.8-18.694 15.8-30.694 2.067-24.786-16.426-46.626-41.213-48.693a44.068 44.068 0 00-6.627-.067c-21.946 1.387-40.2 18.734-42.08 41.28zm39.894 64.854c-16.334-1.347-31.16-8.987-41.747-21.494-10.573-12.493-15.667-28.373-14.307-44.693 2.8-33.707 32.454-58.787 66.214-56.04 33.693 2.8 58.826 32.507 56.026 66.187-1.36 16.333-8.986 31.146-21.493 41.733-10.16 8.6-22.56 13.573-35.613 14.4-3 .187-6.04.16-9.08-.093"
              fill="#bdd0fb"
            />
            <path
              d="M3980.6 1568.573c5.12-.333 10.267-.92 15.427-1.773a153.504 153.504 0 0030.04-8.16c.426-.173.866-.347 1.293-.507a8.121 8.121 0 005.12-8.053 8.239 8.239 0 00-.56-2.48c-1.64-4.16-6.36-6.173-10.52-4.547-9 3.56-18.427 6.16-28.013 7.747-.534.093-1.054.173-1.587.253-22.72 3.547-45.467 1.294-66.56-6.253-11.453-4.093-22.413-9.76-32.627-16.933l-.253-.174c-.253-.186-.507-.36-.747-.533-29.666-21.227-49.28-52.72-55.24-88.693a134.787 134.787 0 01-1.6-13.96c-1.986-31.267 6.774-62 25.24-87.814 21.227-29.666 52.72-49.28 88.694-55.24 35.96-5.946 72.12 2.44 101.773 23.654 29.653 21.213 49.28 52.72 55.24 88.693.76 4.573 1.293 9.173 1.573 13.773 1.267 19.947-1.84 39.934-9.186 58.534a7.976 7.976 0 00-.547 3.493 8.097 8.097 0 005.107 7.027c4.173 1.626 8.88-.4 10.533-4.574a152.413 152.413 0 0010.28-65.493 150.635 150.635 0 00-1.76-15.413c-6.667-40.254-28.627-75.494-61.8-99.227-33.187-23.733-73.6-33.173-113.867-26.467-40.24 6.68-75.48 28.614-99.213 61.8-20.68 28.894-30.467 63.28-28.253 98.254.32 5.186.92 10.4 1.786 15.6 12.92 77.933 83.04 132.36 160.227 127.466"
              fill="#bdd0fb"
            />
          </svg>
        </div>
        <form className="formContainer" onSubmit={submitHandler}>
          <div className="emailInputContainer">
            <label style={{ textAlign: "left" }} htmlFor="email">
              Email
              <br />
              <input type="text" name="email" className="emailInputText" value={credentials.email} onChange={(e)=>{setCredentials({...credentials,email:e.target.value})}}/>
            </label>
          </div>
          <div className="passwordInputContainer">
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" name="password" className="passwordInputText" value={credentials.password} onChange={(e)=>{setCredentials({...credentials,password:e.target.value})}}/>
          </div>
          <div className="signInWrapper">
            <button className="signInBtn" type="submit">Sign-In</button>
          </div>
          {wrongCredentials && (
              <h4>Wrong Credentials</h4>
          )}
        </form>
      </div>
    </div>
  );
}
