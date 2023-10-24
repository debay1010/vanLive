import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({ request }) {
    await requireAuth(request)
    return getHostVans()
}
const HostVans = () => {
    const vans = useLoaderData()
    // console.log(vans)

    const hostVanList = vans.map((van) => (

        <Link key={van.id} to={van.id} className='host-van-link-wrapper'>
            {/* <Link key={van.id} to={`${van.id}`} className='host-van-link-wrapper'>      |also works*/}
            <div key={van.id} className='host-van-single'>
                <img src={van.imageUrl} alt={`The Photo of ${van.name}`} />
                <div className='host-van-info' >
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>

        </Link>

    ))


    return (
        <section>
            <h1 className='host-van-title'> Your listed vans</h1>

            <div className='host-van-list'>
                {vans.length > 0 ? (
                    <section>
                        {hostVanList}
                    </section>) : (
                    <h2>Loading...</h2>
                )
                }

            </div>

        </section>
    );
}

export default HostVans