import axios from 'axios'
import React from 'react'
import ItemsList from './ItemsList'
import useFetch from './useFetch'

const Home = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/products')

    // Post data ke API
    const keranjang = (e) => {
        axios
        .get('http://localhost:8000/keranjangs?product.id=' + e.id)
        .then((res) => {
            if(res.data.length === 0){
                const tambahKeranjang = {
                    jumlah: 1,
                    total_harga: e.harga,
                    product: e
                }
        
                fetch('http://localhost:8000/keranjangs/' , {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(tambahKeranjang) 
                }).then(() => {
                    console.log('item added')
                })
            } else{
                const tambahKeranjangs = {
                    jumlah: res.data[0].jumlah+1,
                    total_harga: res.data[0].total_harga+e.harga,
                    product: e
                }

                fetch('http://localhost:8000/keranjangs/'+ res.data[0].id , {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(tambahKeranjangs) 
                }).then(() => {
                    console.log('item added')
                })
            }
        })
    }

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {loading && <div className='loading'><div></div><div></div><div></div></div>}
            {items && <ItemsList itemss={items} keranjang={keranjang} />}
        </div>
    )
}

export default Home
