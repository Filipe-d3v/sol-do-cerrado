import React from "react";
import Styles from './nav.module.css';
import Logo from '../../Assets/Vale-logo.png'
import {IoMenu, IoClose} from 'react-icons/io5'
import { Link } from "react-router-dom";

export default function Nav(){
  function Open() {
    document.getElementById('menuSide').style.width = '250px'
    document.getElementById('list').style.display = 'block'
    document.getElementById('icon').style.display = 'block'
}
function Close() {
    document.getElementById('menuSide').style.width = '0px'
    document.getElementById('list').style.display = 'none'
    document.getElementById('icon').style.display = 'none'
}
  return(
    <>
    <div className={Styles.container}>
      <div>
        <p onClick={Open}><IoMenu /></p>
      </div>
      
      <img src={Logo} alt='vale'/>

      <h2> SOL DO CERRADO</h2>
      
    </div>

    <nav id="menuSide" className={Styles.menu}>
      <i id="icon" onClick={Close}><IoClose /></i>
      <ul id="list">
        <li>
          <Link to='/' onClick={Close}>HOME</Link>
        </li>
        <li>
          <Link to='/colaboradores' onClick={Close}>COLABORADORES</Link>
        </li>
        <li>
          <Link to='/sobre' onClick={Close}>SOBRE</Link>
        </li>
      </ul>
      </nav>
    </>
  )
}