import React from 'react'
import JerseyList from './JerseyList';
import useFetch from './useFetch'

const Jerseys = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/products?category.nama=Jersey')

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {loading && <div>Loading ...</div>}
            {items && <JerseyList itemss={items}/>}
        </div>
    )
}

export default Jerseys
