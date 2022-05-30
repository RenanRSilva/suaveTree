import React from "react";

import styles from './Links.module.css'

const Links = ({ name, link }) => {
  return (
    <a className={styles.link_div} href={link} target="_blank" rel="noreferrer">
      <div className={styles.link}>
        <h2>{name}</h2>
      </div>
    </a>
  )
}

export default Links
