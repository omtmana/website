import '../styles/Layout.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout