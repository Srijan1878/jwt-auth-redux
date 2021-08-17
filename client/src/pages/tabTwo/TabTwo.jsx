import React, { useEffect, useState } from 'react'
import './tabTwo.css'
import axios from 'axios'

export default function TabTwo() {
    const [users,setUsers] = useState([])
    const [userDeleted,setUserDeleted] = useState(false)
    useEffect(async()=>{
    const res = await axios.get('https://floating-hamlet-71176.herokuapp.com/api/users/get',{headers:{"auth-token":sessionStorage.getItem("token")}})
    setUsers(res.data)
    },[userDeleted])
    return (
        <>
        <div className="tabTwoContainer"> 
           <h2 className={"heading"} style={{color:"white",fontFamily:'Georama, sans-serif'}}>Members</h2>
           {users.map((user,index)=>( 
           <div className="tableContainer">
           <h4 className="userDataList">{index+1}</h4> 
           <h4 className="userDataList">{user.username}</h4>
           <h4 className="userDataList">{user.email}</h4>
           <h4 className="userDataList">{user.phone}</h4>   
           <h4 className="userDataList">{user.address}</h4>
           <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="18.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet" style={{cursor:'pointer'}} onClick={async()=>{
    await axios.delete("https://floating-hamlet-71176.herokuapp.com/api/users/delete/"+user._id,{
        id:user._id
    })
    setUserDeleted(!userDeleted)
 }}>

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2410 5111 c-645 -41 -1231 -313 -1685 -782 -500 -518 -753 -1194
-714 -1911 57 -1052 766 -1966 1775 -2291 377 -122 818 -155 1193 -91 621 105
1186 439 1578 931 291 365 467 772 540 1250 23 150 23 536 0 686 -88 575 -333
1065 -731 1463 -523 523 -1225 790 -1956 745z m-273 -1703 l423 -423 425 425
425 425 212 -213 213 -212 -425 -425 -425 -425 425 -425 425 -425 -213 -212
-212 -213 -425 425 -425 425 -425 -425 -425 -425 -212 213 -213 212 425 425
425 425 -425 425 -425 425 210 210 c115 115 212 210 215 210 3 0 195 -190 427
-422z" />
</g>
</svg>
           </div>
           ))}
        </div>
        </>
    )
}
