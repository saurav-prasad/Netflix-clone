import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer flexCenter'>
            <div className='footerContainer flexCenter'>Netflix-clone Made with ❤️ by Saurav
                <a target='__blank' href='https://www.linkedin.com/in/saurav-prasadd/' className='footerLink cursorPointer'>
                    <img className='footerImage' src="/linkedin.png" alt="LinkedIn" />
                </a>
                <a target='__blank' href='https://github.com/saurav-prasad' className='footerLink cursorPointer'>
                    <img className='footerImage' src="/github-mark-white.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
    )
}

export default Footer