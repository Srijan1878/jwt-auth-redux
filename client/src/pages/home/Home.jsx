import React, { useEffect, useContext,useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authRedux";
import TabOne from "../tabOne/TabOne";
import TabTwo from "../tabTwo/TabTwo";
import './home.css'
export default function Home() {
  const [showExpandedTab, setShowExpandedTab] = useState(false);
  const [showExpandedTabTwo, setShowExpandedTabTwo] = useState(false);
  const [sessionExpire,setSessionExpire] = useState(false)
  const [counter,setCounter] = useState(10)
  const dispatch = useDispatch()
  const sessionExpired = useSelector(state => state.auth.sessionExpired)
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(authActions.login())
    }
  }, [dispatch]);
  useEffect(()=>{
  console.log("changed tab one")
  },[showExpandedTab])
  useEffect(()=>{
    console.log("changed tab two")
    },[showExpandedTabTwo])
      const logoutHandler = async () => {
        sessionStorage.clear()
       dispatch(authActions.logout());
   }
    useEffect(()=>{
      if(sessionExpired===true){
      countDown()
      }
    },[counter,sessionExpired])
    const countDown =()=> {
      setTimeout(()=>{
        setCounter(prevCounter=>prevCounter-1)
      },1000) 
   if(counter === 0){
    sessionStorage.clear()
    dispatch(authActions.logout())
     window.location.reload()
   }
    }
  const LoginAgainHandler = () => {
    sessionStorage.clear()
    dispatch(authActions.logout())
    window.location.reload()
  }
  return (
    <>
    <div className={sessionExpired?"sessionExpiredModal":"hiddenSessionExpiredModal"} >
          <h3 style={{fontSize:"35px"}}>Session Expired</h3>
          <p className="ReLoginText" onClick={LoginAgainHandler}>Please login again.</p>
          <p style={{fontSize:"22px",fontWeight:"500"}}>{counter}</p>
      </div>
      {/* <Topbar /> */}
      <div className={sessionExpire?"disabledMainContainer":"mainContainer"}>
      <div className={showExpandedTab?"expandedTabOneContainer":"TabOneContainer"} onMouseEnter={()=>{setShowExpandedTab(true)}} onMouseLeave={()=>{setShowExpandedTab(false)}}>
      <div className={showExpandedTab?"hiddenOverlayDiv":"overlayDiv"}>
        
      </div>
      <div >
      <div className={showExpandedTab?"expandedTabOneTitle":"tabOneTitle"} >
      <h2 className="addText">Add</h2>
      <h2 className={showExpandedTab?"expandedTabOneText":"tabOneText"}>Members</h2>

      </div>
      
      </div>
      
      <TabOne/>
      </div>
      <div className="menuIconIllustration">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 x="0px" y="0px" width="100" height="100" viewBox="0 0 512 100"
 preserveAspectRatio="xMidYMid meet" className="illustrationSVG" onClick={logoutHandler}>

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none" id="svgColor">
<path d="M325 5106 c-148 -37 -271 -159 -311 -310 -11 -42 -14 -384 -14 -2021
0 -2157 -3 -2031 57 -2135 37 -62 111 -134 169 -163 27 -13 350 -125 719 -248
l670 -224 90 0 c110 0 172 20 255 81 67 49 121 123 150 207 16 46 20 82 20
202 l0 145 353 0 c402 0 442 5 577 71 162 79 293 244 334 419 23 97 23 1033 1
1088 -67 160 -299 170 -383 17 -15 -26 -18 -89 -22 -520 l-5 -490 -25 -45
c-14 -24 -45 -58 -68 -75 l-44 -30 -359 -3 -359 -3 -2 1653 -3 1653 -32 67
c-52 110 -122 175 -242 225 l-56 23 527 -3 526 -2 44 -30 c23 -17 54 -51 68
-75 l25 -45 5 -387 5 -386 30 -43 c45 -64 104 -91 186 -87 76 4 127 32 169 95
l25 37 3 397 c3 448 0 475 -66 609 -54 110 -168 223 -282 279 -152 74 -81 71
-1455 70 -943 -1 -1242 -4 -1280 -13z"/>
<path d="M3965 4031 c-51 -23 -101 -79 -114 -128 -7 -23 -11 -169 -11 -370 l0
-333 -448 0 -448 0 -53 -26 c-90 -45 -134 -140 -110 -238 16 -67 85 -138 151
-154 32 -8 181 -12 477 -12 l431 0 0 -331 c0 -234 4 -344 12 -373 25 -81 118
-146 209 -146 80 1 107 24 567 483 461 460 492 497 492 575 0 95 6 88 -479
575 -301 301 -470 464 -497 477 -51 25 -126 25 -179 1z" />
</g>
</svg>
      </div>
      <div className={showExpandedTabTwo?"expandedTabTwoContainer":"TabTwoContainer"} onMouseLeave={()=>{setShowExpandedTabTwo(false)}}>
      <TabTwo />
      <div className={showExpandedTabTwo?"hiddenOverlayDivTabTwo":"overlayDivTabTwo"} >
      <h1 style={{color:"white",cursor:"pointer",fontSize:"80px",fontFamily:'Georama, sans-serif'}}  onMouseEnter={()=>{setShowExpandedTabTwo(true)}}>Member List</h1>            
      </div>
      </div>
      </div>
    </>
  );
}
