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
        <div className='container'>
            <h2 className='text-center my-3'>ISI DATA DIRI</h2>
            <div className="row">
                <div className="col-6 mx-auto">
                    <form  className="formdata" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="namalabel" className="form-label">Nama</label>
                            <input type="text" className="form-control" id="namalabel" required
                                value={nama}
                                onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="labelnohp" className="form-label">No Handphone</label>
                            <input type="text" className="form-control" id="labelnohp" required
                                value={nohp}
                                onChange={(e) => setNohp(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="labelalamat" className="form-label">Alamat</label>
                            <textarea className="form-control" id="labelalamat" required
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}></textarea>
                        </div>
                        {/* false */}
                        { !loading && <button type="submit" className="btn btn-primary">Submit</button> }
                        {/* true */}
                        { loading && <button  type="submit" className="btn btn-primary" disabled>Adding Data ...</button> }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormData
