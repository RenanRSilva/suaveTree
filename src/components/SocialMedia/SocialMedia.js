import React from "react";

import facebookIcon from "../../images/facebook.png"
import instagramIcon from "../../images/instagram.png"
import whatsappIcon from "../../images/whatsapp.png"


import styles from './SocialMedia.module.css'

const SocialMedia = () => {
  return (
    <div className={styles.social__media__container}>
      <div className={styles.center}>
        <a href="https://www.facebook.com/audicenterribeiraopreto/" target="_blank" rel="noreferrer">
          <img
            src={facebookIcon}
            alt=""
            width={70}
          />
        </a>
      </div>
      <div className={styles.center}>
        <a href="https://www.instagram.com/audicenterribeiraopreto/" target="_blank" rel="noreferrer">
          <img
            src={instagramIcon}
            alt=""
            width={70}
          />
        </a>
      </div>
      <div className={styles.center}>
        <a href="https://api.whatsapp.com/send?phone=5516981606477" target="_blank" rel="noreferrer">
          <img
            src={whatsappIcon}
            alt=""
            width={70}
          />
        </a>
      </div>
    </div >
  )
}

export default SocialMedia
