import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.svg'
import signlogo from '../../assets/menuLogo.png'
import poster from '../../assets/background.jpg'
import search from '../../assets/Search.png'  
import Hero from '../movie/Hero';


const Navbar = () => {
  return (
    <div>

      <div className="Container">
        <div className="jwick">
          <img src={poster} alt='poster' />
        </div>
      </div>
      
      <div className='navbar'>
        
        <div className="movielogo">
          <img src={logo} alt={logo}/>
        </div>

        <div className="searchbar">
            <div className="searcher">
                <input 
                type="text" 
                spellCheck="true" 
                placeholder='What do you want to watch?'/>
                <img src={search} alt="search" className='Icon' />
            </div>
        </div>
            

            <div className="menu">
                <p className="sign">Sign in</p>
                <div className="menu__btn">
                    <img src={signlogo} alt={signlogo} />
                </div>
            </div>
      
      </div>

      <Hero />
    </div>

    
  )
}

export default Navbar