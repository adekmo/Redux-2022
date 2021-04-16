import React, { useState } from 'react'
import useFetch from './useFetch'
import { useHistory } from 'react-router'

const FormData = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/keranjangs')
    const history = useHistory()
    const [nama, setNama] = useState('')
    const [nohp, setNohp] = useState('')
    const [alamat, setAlamat] = useState('')

    const totalBelanja = items.reduce(function (result, item){
        return result + item.total_harga;
    }, 0)

    const taxPrice = totalBelanja * 0.1;
    const shippingPrice = totalBelanja > 2000000 ? 0 : 100000;
    const total = totalBelanja + taxPrice + shippingPrice;

    // TANPA FORM
    // const submitTotalBayar = (total) => {
    //     const pesanan = {
    //         total_bayar: total,
    //         item: items
    //     }
        
    //     fetch('http://localhost:8000/pesanans', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json"},
    //         body: JSON.stringify(pesanan) 
    //     }).then(() => {
    //         console.log('Blog added')

    //         history.push('/pembayaran')
    //     })
        
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const pesanans = {nama, nohp, alamat, totalBelanja, taxPrice, shippingPrice, total, items }

        fetch('http://localhost:8000/pesanans', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(pesanans) 
        }).then(() => {
            console.log('Blog added')

            history.push('/pembayaran')
        })


    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Nama :</label>
                <input 
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />

                <label>No Handphone :</label>
                <input 
                    type="text"
                    required
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                />

                <label>Alamat :</label>
                <textarea
                    required
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                ></textarea>

                {/* false */}
                { !loading && <button>Add Blog</button> }
                {/* true */}
                { loading && <button disabled>Adding Blog ...</button> }
            </form>
        </div>
    )
}

export default FormData
