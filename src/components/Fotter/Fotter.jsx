import React from 'react'
import "./Fotter.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { ImGooglePlus3 } from "react-icons/im";

const Fotter = () => {
  return (
  <>
<div className="container-fluid ">
    <div className="row">
        <div className=" col-12 p-0 m-0">
        <div class="footer-icons cntupperfotter p-0 m-4">
        
    <div className='fotter-upper m-5 ml-5'>
    <div className="dfottericons fotterphonefirst p-4"><FaPhoneVolume className="fotterphone  fottervol" fontSize={30}/></div>
        <p className='w-100 dfootterphone'>02770-239243/44</p>
    </div>
    <div className='fotter-upper fottermiddle p-3 m-5'>
    <div className="dfottericonscen p-4"> <FaLocationDot className="fotterphone" fontSize={33} /></div>
        <p className='w-50 dfottericonscencnt'>Sr. No.: 109 & 110, Nr. Ahmadpura Bus Stop, Talod-Himatnagar Highway, Ahmadpura Ta.Talod, Dist. Sabarkantha - 383215, Gujarat.(lndia)</p>
    </div>
    <div className='fotter-upper fotterend p-3 m-3'>
    .  <div className="dfottericons p-4"><IoMail className="fotterphone" fontSize={30}/></div>
        <p className='w-50 dfootermsgcnt'>info@kesarcraft.com<br/>sales@kesarcraft.com</p>
    </div>

        </div>
<div class="footer-content p-0 m-0">
    <div className='fontupper'>
    <p className='w-50 p-4 copyright'>Copyright © 2020 Kesar. All rights reserved.</p>
    </div>

       
        <div class="copyright-icons m-4">
        <CiFacebook fontSize={35} className='copyrighticoninner p-1'/>
        <ImGooglePlus3 fontSize={35} className='copyrighticoninner p-1'/>
        </div>
        <div >
        <p className='fontlast'>Design by Aplus Design Studio</p>
        </div>
       

</div>
        </div>
    </div>
</div>


  </>
  )
}

export default Fotter
