import React from 'react'
import { useHistory } from 'react-router'
import { Commas } from '../utiliti/koma'
import useFetch from './useFetch'
import { Link } from 'react-router-dom';

const Hasil = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/keranjangs')
    const history = useHistory()

    const totalBelanja = items.reduce(function (result, item){
        return result + item.total_harga;
    }, 0)

    const taxPrice = totalBelanja * 0.1;
    const shippingPrice = totalBelanja > 2000000 ? 0 : 100000;
    const total = totalBelanja + taxPrice + shippingPrice;


    return (
        <div className="container">
            {
                loading ? <div className='loading'><div></div><div></div><div></div></div> : items.length === 0 && <div>Keranjang Kosong</div> }
                {
                items.map((h, index) => {
                    return(
                    <div className="row" key={index}>
                            <div className="col-md-1 mb-1 text-center">
                                <h5>{index+1}</h5>
                            </div>
                            <div className="col-md-4 mb-4"  >
                                <h5 className="card-title">Nama Product: {h.product.nama}</h5>
                                <h5 className="card-title">Kode: {h.product.kode}</h5>
                                <p>Harga : Rp. {Commas (h.product.harga)}</p>
                                <p>Jumlah : {h.jumlah}  </p>
                                <h5 className="card-title">Total Harga: Rp. {Commas (h.total_harga)}</h5>
                                <div className='text-right'>
                                    <button className='btn btn-danger'>
                                        Hapus
                                    </button>
                                </div>
                                <hr/>
                            </div>
                            
                            <div className="col-md-4 span-3 offset-7 fixed-bottom my-3">
                                <div className="row">
                                    <div className="col">
                                        <h5>Total Harga Item: </h5>
                                        <h5>Pajak: </h5>
                                        <h5>Biaya Shipping: </h5>
                                        <hr/>
                                        <h5>Total Biaya: </h5>
                                    </div>
                                    <div className="col text-right">
                                        <h5>Rp. {Commas (totalBelanja)}</h5>
                                        <h5>Rp. {Commas (taxPrice)}</h5>
                                        <h5>Rp. {Commas (shippingPrice)}</h5>
                                        <hr/>
                                        <h5>Rp. {Commas (total)}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className='btn btn-primary btn-block mt-3' ><Link className='nav-link active text-white' to='/formdata'>Isi Data Diri</Link></button>
                                </div>
                            </div>
                    </div>
                )
            })
            
        }

        
        </div>
    )
}

export default Hasil
