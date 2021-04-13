import React from 'react'
import TrainingList from './TrainingLIst'
import useFetch from './useFetch'

const Trainings = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/products?category.nama=Training')

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {loading && <div>Loading ...</div>}
            {items && <TrainingList itemss={items}/>}
        </div>
    )
}

export default Trainings
