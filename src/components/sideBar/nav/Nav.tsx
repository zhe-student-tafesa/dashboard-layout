'use client'
import React from 'react'
import styles from './nav.module.css'
import NavIcon from '../navIcon/NavIcon'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const Nav = () => {
  return (
    <div className={styles.container}>
         <NavIcon href='#'>
            <FaIcons.FaBars onClick={()=>{
                console.log("works first")
            }} />
          </NavIcon>
    </div>
  )
}

export default Nav