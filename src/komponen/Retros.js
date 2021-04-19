import React from 'react'
import RetroList from './RetroList'
import useFetch from './useFetch'

const Retros = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/products?category.nama=Retro')

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {loading && <div className='loading'><div></div><div></div><div></div></div>}
            {items && <RetroList itemss={items}/>}
        </div>
    )
}

export default Retros
