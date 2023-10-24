import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import getVans from '../../api';

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => console.log(data))

        // async function loadVans() {
        //     setLoading(true)
        //     const data = await getVans()
        //     setVans(getVans)
        //     setLoading(false)
        // }
        // loadVans()
    }, [])
    console.log(vans)

    //combine filtering based on search parameter, typefilter and then pass it to map for listing
    const displayedVans = typeFilter
        ? vans.filter((van) => (van.type.toLowerCase() === typeFilter.toLowerCase()))
        : vans
    // console.log(displayedVans)
    const listVans = displayedVans.map((van) => (
        <div key={van.id} className='van-tile'>
            {/* <Link to={`${van.id}`} > | also works */}
            <Link to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}>

                <img src={van.imageUrl} />
                <div className='van-info'>
                    <h3>{van.name} </h3>
                    <p>{van.price}<span>/Day</span></p>

                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div >
    ))

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    return (
        <>
            <nav className='van-list-filter-buttons' >
                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "simple")}  >Simple</button>
                <button className={`van-type rugged  ${typeFilter === 'rugged' ? 'selected' : ""}`} onClick={() => handleFilterChange("type", "rugged")}  >Rugged</button>
                <button className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ""}`} onClick={() => handleFilterChange("type", "luxury")}  >Luxury</button>

                {typeFilter
                    ? (<button className='van-type clear-filters' onClick={() => handleFilterChange("type", null)}  >Clear filters</button>)
                    : null

                }

                <hr></hr>
            </nav>

            <div className='van-list-container'>
                <h1>Explore our van options</h1>
                <div className='van-list'>
                    {listVans}
                </div>

            </div>
        </>
    )
}

export default Vans


