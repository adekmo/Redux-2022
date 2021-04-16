import React from 'react'
import useFetch from './useFetch'
import { Link } from 'react-router-dom';

const Pembayaran = () => {
    const { items, loading, error } = useFetch('http://localhost:8000/pesanans')

    return (
        <div className="container">
            {
            items.map((item, index) => {
                return (
                    <div className="col-md-4 mb-4 d-inline-flex" key={index}>
                        <div>
                            <h3>Nama : {item.nama}</h3>
                            <h3>No Handphone : {item.nohp}</h3>
                            <h3>Alamat : {item.alamat}</h3>
                            {
                                item.items.map((it, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={"assets/images/"+
                                            it.product.category.nama.toLowerCase()+
                                            "/"+
                                            it.product.gambar} className="card-img-top" alt="jersey" />
                                            <h3>Jumlah : {it.jumlah}</h3>
                                            <h3>Jumlah : {it.total_harga}</h3>
                                        </div>
                                    )
                                })
                            }
                            <h3>Total Belanja : {item.totalBelanja}</h3>
                            <h3>Pajak : {item.taxPrice}</h3>
                            <h3>Shipping Price : {item.shippingPrice}</h3>
                            <h3>Total Bayar : {item.total}</h3>
                            
                            {/* <h5 className="card-title">{item.nama}</h5>
                            <p>Rp. {Commas(item.harga)}</p>
                                <div className='d-flex justify-content-end'>
                                    
                                <button className="btn btn-primary mt-2" onClick={(e) => keranjang(item)}>Add to Cart</button> 
                                
                                </div>   */}
                                <button className='btn btn-primary'><Link className='nav-link active text-white' to='/sukses'>Lanjutkan Pemabayaran</Link></button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Pembayaran
