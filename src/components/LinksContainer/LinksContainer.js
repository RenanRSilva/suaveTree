import React from "react";
import Links from "../Links/Links";
import SocialMedia from "../SocialMedia/SocialMedia";

import styles from './LinksContainer.module.css'

const links = [
  {
    name: 'Site',
    link: 'https://www.audiribeiraopreto.com.br/'
  },
  {
    name: 'Novos',
    link: 'https://www.audiribeiraopreto.com.br/novos'
  },
  {
    name: 'Seminovos',
    link: 'https://www.audiribeiraopreto.com.br/seminovos'
  },
  {
    name: 'Venda Direta',
    link: 'https://www.audiribeiraopreto.com.br/vendadireta'
  }
]

const LinksContainer = () => {
  return (
    <div className={styles.links__container}>
      {links.map(link => (
        <Links name={link.name} link={link.link} />
      ))}
      <SocialMedia />
    </div>
  )
}

export default LinksContainer
