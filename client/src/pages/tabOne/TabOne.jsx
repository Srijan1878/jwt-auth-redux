import React, { useState } from "react";
import "./tabOne.css";
import axios from "axios";
export default function TabOne() {
  const [usernameError, setUserNameError] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [newUserSuccessFullyAdded, setnewUserSuccessFullyAdded] =
    useState(false);
  const [usersDetails, setUserDetails] = useState({
    username: "",
    number: "",
    email: "",
    address: "",
  });
  const addMemberHandler = async (e) => {
    e.preventDefault();
    try {
      const regex = new RegExp(/^\S*$/);
      if (regex.test(usersDetails.username)) {
        await axios.post(
          "https://floating-hamlet-71176.herokuapp.com/api/users/add",
          {
            username: usersDetails.username,
            number: usersDetails.number,
            email: usersDetails.email,
            address: usersDetails.address,
          },
          { headers: { "auth-token": sessionStorage.getItem("token") } }
        );
        setNewUser(!newUser);
        setnewUserSuccessFullyAdded(true);
      
    }
      else {
        setUserNameError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="tabOneContainer">
        {/* <h4 className="addMembersTitle">Add Members</h4> */}
        <form onSubmit={addMemberHandler} className="addMembersInputsContainer">
          <div className="inputFieldcontainer">
            <label htmlFor="username">Username</label>
            <input
              className="addMemberInputField"
              name="username"
              type="text"
              value={usersDetails.username}
              onChange={(e) => {
                setUserNameError(false);
                setUserDetails({ ...usersDetails, username: e.target.value });
              }}
            />
            {usernameError && <p style={{color:"red"}}>Username is not supported</p>}
          </div>
          <div className="inputFieldcontainer">
            <label htmlFor="number">Number</label>
            <input
              className="addMemberInputField"
              name="number"
              type="text"
              onChange={(e) => {
                setUserDetails({ ...usersDetails, number: e.target.value });
              }}
              value={usersDetails.number}
            />
          </div>
          <div className="inputFieldcontainer">
            <label htmlFor="email">Email</label>
            <input
              className="addMemberInputField"
              name="email"
              type="text"
              onChange={(e) => {
                setUserDetails({ ...usersDetails, email: e.target.value });
              }}
              value={usersDetails.email}
            />
          </div>
          <div className="inputFieldcontainer">
            <label htmlFor="address">Address</label>
            <input
              className="addMemberInputField"
              name="address"
              type="text"
              onChange={(e) => {
                setUserDetails({ ...usersDetails, address: e.target.value });
              }}
              value={usersDetails.address}
            />
          </div>
          <div className="addMemberBtnContainer">
            <button type="submit" className="addMembersBtn">
              Add
            </button>
          </div>
        </form>
        {newUserSuccessFullyAdded && (
          <div className="newUserAddedModal">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="18.000000pt"
                height="20.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setnewUserSuccessFullyAdded(false);
                }}
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="red"
                  stroke="none"
                >
                  <path
                    d="M2410 5111 c-645 -41 -1231 -313 -1685 -782 -500 -518 -753 -1194
-714 -1911 57 -1052 766 -1966 1775 -2291 377 -122 818 -155 1193 -91 621 105
1186 439 1578 931 291 365 467 772 540 1250 23 150 23 536 0 686 -88 575 -333
1065 -731 1463 -523 523 -1225 790 -1956 745z m-273 -1703 l423 -423 425 425
425 425 212 -213 213 -212 -425 -425 -425 -425 425 -425 425 -425 -213 -212
-212 -213 -425 425 -425 425 -425 -425 -425 -425 -212 213 -213 212 425 425
425 425 -425 425 -425 425 210 210 c115 115 212 210 215 210 3 0 195 -190 427
-422z"
                  />
                </g>
              </svg>
            </div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h4 style={{ textAlign: "center" }}>USER SUCCESSFULLY ADDED</h4>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="40.000000pt"
              height="40.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              style={{marginTop:"10px"}}
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="green"
                stroke="none"
              >
                <path
                  d="M2330 5110 c-482 -43 -950 -230 -1350 -538 -195 -150 -448 -432 -594
-662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31
-565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220
412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 159 26
365 79 499 128 120 44 372 167 471 230 321 204 620 503 824 824 63 99 186 351
230 471 83 228 140 508 152 759 8 154 0 191 -49 247 -102 116 -291 65 -326
-87 -6 -25 -11 -79 -11 -122 0 -114 -28 -306 -65 -454 -191 -763 -806 -1378
-1569 -1569 -349 -88 -729 -87 -1076 1 -856 219 -1501 947 -1614 1822 -20 158
-20 406 0 564 112 874 759 1603 1614 1822 150 38 342 66 458 66 143 1 216 34
253 114 47 103 7 209 -96 257 -44 20 -144 23 -305 9z"
                />
                <path
                  d="M4795 4471 c-16 -4 -41 -13 -55 -21 -14 -7 -549 -536 -1190 -1176
l-1165 -1162 -290 315 c-537 585 -565 614 -613 635 -91 41 -199 3 -241 -84
-27 -56 -27 -127 -2 -176 17 -33 305 -350 849 -936 182 -196 220 -226 292
-226 84 0 68 -15 1372 1287 1348 1346 1287 1280 1276 1378 -13 110 -129 192
-233 166z"
                />
              </g>
            </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
