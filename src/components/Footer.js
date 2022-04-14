import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join our newsletter to receive our latest updates!!!
                </p> 
                <p className='footer-subscription-text'>You can optout at any time.</p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Socail Links</h2>
                    <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                    <Link to='sign-up'> How it works</Link>
                </div>
            </div>
        </div>
    <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    BRAVO
                    <i className='fab fa-typo3' />
                </Link>
            </div>
            <small className='website-rights'>BRAVO © 2022</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                to='/'
                target="_blank"
                aria-label='Facebook'>
                    <i className='fab fa-facebook'/>
                </Link>
                <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

            </div>

        </div>
    </section>
    </div>
  )
}

export default Footer