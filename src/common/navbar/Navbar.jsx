import style from './navbar.module.scss'
import url from '../../data/url'
import { useEffect, useCallback } from 'react'

const itemsPageUrl = url.client + '/#/items'
const cartPageUrl = url.client + '/#/cart'
const orderPageUrl = url.client + '/#/orders'

function Hamburger() {
  function handleOpen(e) {
    const panel = document.querySelector('#burger-panel')
    if (panel) {
      panel.style.display = 'block'
    }
  }

  function handleClose() {
    const panel = document.querySelector('#burger-panel')
    if (panel) {
      panel.style.display = 'none'
    }
  }

  return (
    <>
      <div className={style.burgerContainer}>
        <div
          className={style.burgerOpen}
          type='checkbox'
          id='burgerOpen'
          onClick={handleOpen}
        />
        <div className={style.burgerLink}></div>
        <div className={style.burgerLink}></div>
        <div className={style.burgerLink}></div>
      </div>
      <div id='burger-panel' className={style.burgerPanel}>
        <div
          className={style.burgerClose}
          id='burgerClose'
          onClick={handleClose}>
          X
        </div>
        <div className={style.burgerLinks}>
          <a
            className={style.burgerLink}
            href={itemsPageUrl}
            onClick={handleClose}>
            全部好貨
          </a>
          <a
            className={style.burgerLink}
            href={orderPageUrl}
            onClick={handleClose}>
            查詢訂單
          </a>
          <a
            className={style.burgerLink}
            href={cartPageUrl}
            onClick={handleClose}>
            購物車
          </a>
        </div>
      </div>
    </>
  )
}

function LogoContainer() {
  return (
    <div className={style.logoContainer}>
      <a className={style.logoLink} href={itemsPageUrl}>
        <div className={style.logoDiv}>
          <img
            className={style.logo}
            src={`${url.client}/images/cry.png`}
            alt='logo'
          />
        </div>
        <span className={style.logoText}>斷。捨。離</span>
      </a>
    </div>
  )
}

function Links() {
  return (
    <div className={style.links}>
      <a className={style.link} href={itemsPageUrl}>
        全部好貨
      </a>
      <a className={style.link} href={orderPageUrl}>
        查詢訂單
      </a>
    </div>
  )
}

function Cart({ cartItemsId }) {
  function closeMenuPanel() {
    const panel = document.querySelector('#burger-panel')
    if (panel) {
      panel.style.display = 'none'
    }
  }
  return (
    <a className={style.cart} href={cartPageUrl} onClick={closeMenuPanel}>
      <img
        className={style.cartIcon}
        src={`${url.client}/images/cart.png`}
        alt='cart'
      />
      {cartItemsId && (
        <div className={style.cartCount}>
          {cartItemsId ? cartItemsId.length : 0}
        </div>
      )}
    </a>
  )
}

function Navbar({ cartItemsId }) {
  return (
    <div className={style.navbar}>
      <div className='RWD-container'>
        <div className={style.navbarContainer}>
          <div className={style.side}>
            <Hamburger />
            <LogoContainer />
          </div>
          <div className={style.side}>
            <Links />
            <Cart cartItemsId={cartItemsId} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
