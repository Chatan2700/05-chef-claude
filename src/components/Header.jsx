import React from 'react'
import chefClaudeLogo from "/src/assets/Chef Claude Icon.svg"

const Header = () => {
  return (
    <>
      <header>
        <img src={chefClaudeLogo} alt="" />
        <span>Chef Claude</span>
      </header>
    </>
  )
}

export default Header