import React from 'react'
import useFetch from './useFetch'
import { Link } from 'react-router-dom';

const Pembayaran = () => {
    const { items, loading, error } = useFetch('http://localhost:8000/pesanans')

    return (
        <div className="py-5">
            <div className="container">
            <div className="row justify-content-center">
                    <div className="col-md">
                        {
                            // penulisan if-else loading, jika true jalankan div, jika false jalankan table
                            loading ? <div>Loading . . .</div> : <table className="table align-middle">
                            <thead className="text-center table-secondary">
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>No HP</th>
                                    <th>Alamat</th>
                                    <th>Items</th>
                                    <th>Total Harga</th>
                                    <th>Pajak</th>
                                    <th>Shipping</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        items.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item.nama}</td>
                                                    <td>{item.nohp}</td>
                                                    <td>{item.alamat}</td>
                                                    <td className="text-center">
                                                        <tr>
                                                            <th>Gambar</th>
                                                            <th>Jumlah Item</th>
                                                            <th>Total</th>
                                                        </tr>
                                                        {
                                                        item.items.map((it, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td className="itemgambar"><img src={"assets/images/"+
                                                                    it.product.category.nama.toLowerCase()+
                                                                    "/"+
                                                                    it.product.gambar} className="card-img-top" alt="jersey" /></td>
                                                                    <td>{it.jumlah}</td>
                                                                    <td>{it.total_harga}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    </td>
                                                    <td>{item.totalBelanja}</td>
                                                    <td>{item.taxPrice}</td>
                                                    <td>{item.shippingPrice}</td>
                                                    <td>{item.total}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Pembayaran
