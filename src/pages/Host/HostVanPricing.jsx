import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
    const [currentVan, setCurrentVan] = useOutletContext()
    return (
        <div>
            <h3 className='host-van-price'><span>{currentVan.price}/day</span> </h3>
        </div>
    )
}

export default HostVanPricing