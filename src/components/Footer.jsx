import React from 'react'

const Footer = () => {
    const today = new Date().getFullYear()
    // console.log(today)
    return (
        <footer> &#169;  {today} #VANLIFE</footer>
    )
}

export default Footer