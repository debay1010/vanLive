import React from 'react'
import { NavLink, Link, useParams, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'



const HostVansDetail = () => {
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    const [currentVan, setCurrentVan] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
        // .then(data => console.log(data))
    }, [])
    console.log(currentVan)


    return (
        <>
            <section>
                <Link to=".." relative="path" className="back-button">
                    &larr; <span>Back to all vans</span></Link>

                <div className='host-van-detail-layout-container'>
                    <div className='host-van-detail' >
                        <img src={currentVan.imageUrl} />
                        <div className='host-van-detail-info-text'>
                            <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>

                    <nav className='host-van-detail-nav'>
                        <NavLink to="." end style={({ isActive }) => isActive ? activeStyle : null} >Details</NavLink>
                        <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyle : null} >Pricing</NavLink>
                        <NavLink to="photos" style={({ isActive }) => isActive ? activeStyle : null} >Photos</NavLink>
                    </nav>
                    {/* <Outlet context={{currentVan}} /> */}
                    <Outlet context={[currentVan, setCurrentVan]} />

                </div>
            </section>
        </>

    )
}

export default HostVansDetail

// return <Outlet context={[count, setCount]} />;