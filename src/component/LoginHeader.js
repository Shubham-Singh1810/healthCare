import React from 'react'
import "../Style/header.css"
function LoginHeader() {
  return (
    <div className="LoginHeader">
        <div className="brandName">
            <span>H</span>Care
        </div>
        <div className="navRight">
        <div className="loginBtn">
            <a href="">Login</a><span>|</span>
            <a href="">SignUp</a>
        </div>
        <div className="addToCard">
            <i class="fa fa-shopping-cart"></i>
        </div>
        </div>
    </div>
  )
}
export default LoginHeader