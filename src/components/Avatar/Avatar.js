import React from "react";

import icon from '../../images/audi.jpg'

import styles from './Avatar.module.css'

const Avatar = () => {
  return (
    <img
      className={styles.avatar}
      width={160}
      height={160}
      src={icon} alt="" />
  )
}

export default Avatar
