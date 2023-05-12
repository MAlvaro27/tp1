import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <div className='divfooter'>
      <h3>Mis redes sociales:</h3>
      <a href="https://www.facebook.com/m.alvaro.albornoz/" target='_blank'> <BsFacebook className="Fc"/> </a>
      <a href="https://www.instagram.com/alvaroalbornozok" target='_blank'> <BsInstagram className="Ig"/> </a>
      <a href="https://www.whatsapp.com" target='_blank'> <BsWhatsapp className="Wp"/> </a>
    </div>      
    </>
  )
}

export default Footer