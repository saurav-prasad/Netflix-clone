import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
    const [handleShow, sethandleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.scrollY > 100) {
                sethandleShow(true)
            } else sethandleShow(false)
        })
        return () => window.removeEventListener('scroll')
    }, [])

    return (
        // <div style={{ backgroundColor: `${handleShow && '#141414'}` }} className='nav flexCenter'>
        <div className={`nav flexCenter ${handleShow && 'navColor'}`}>
            <img src="https://about.netflix.com/images/logo.png" className='netflixLogo' alt="" />
            <img src="https://pbs.twimg.com/media/Dj7pdk_XoAEWZ9f?format=jpg&name=360x360" alt="" className='userLogo' />
        </div>
    )
}

export default Nav