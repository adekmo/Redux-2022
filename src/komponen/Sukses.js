import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const Sukses = () => {
    const { items, loading, error } = useFetch('http://localhost:8000/keranjangs');

    const history = useHistory()

    const handleClick = () => {
        axios
        .get('http://localhost:8000/keranjangs')
        .then((res) => {
            const itemKeranjang = res.data;
            itemKeranjang.map(function(item) {
                return axios
                        .delete('http://localhost:8000/keranjangs/' + item.id)
                        .then((res) => history.push('/'))
                        .catch((error) => console.log(error))
            })
        })
        .catch((error) => {
            console.log("something error")
        })
    }

    return (
        <div>
                {
                    // penulisan if-else loading, jika true jalankan div, jika false jalankan table
                    loading ? <div>Loading . . .</div> : <div className="mt-4 text-center">
                    <img src="assets/images/sukses.png" width="500" />
                    <h2>Sukses</h2>
                    <p>Terima Kasih Telah Berbelanja</p>
                    <button onClick={handleClick}>Back to home</button>
                    </div>
                }
        </div>
    )
}

export default Sukses
