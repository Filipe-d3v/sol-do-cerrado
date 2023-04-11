import React from "react";
import Styles from "./footer.module.css";
import { IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export default function Footer(){
  return(
    <>
      <footer className={Styles.footer}>
          <div className={Styles.vale}>
            <h2>Vale</h2>
            <i style={{marginLeft: '40px'}}><IoLogoFacebook /></i>
            <i><IoLogoYoutube /></i>
            <i><IoLogoLinkedin /></i>
            <i><IoLogoInstagram /></i>
            <i><IoLogoTwitter /></i>
            <br />
            <br />
            <br />
            <span>&#169; Vale | Todos os direitos reservados.</span>
          </div>
          <div>
              <h5 style={{marginTop: "75px"}}>Quem somos</h5>
              <h5>O que fazemos</h5>
              <h5>Nossa gente</h5>
              <h5>Canal de denúncias</h5>
              <h5>Código de conduta</h5>
            </div>

      </footer>
    </>
  )
}