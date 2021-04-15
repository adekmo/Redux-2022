import React, { useState } from 'react'
import useFetch from './useFetch'
import { useHistory } from 'react-router'

const FormData = () => {

    const { items, loading, error } = useFetch('http://localhost:8000/keranjangs')
    const history = useHistory()
    const [nama, setNama] = useState('')
    const [nohp, setNohp] = useState('')
    const [alamat, setAlamat] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const pesanans = {nama, nohp, alamat, }

        fetch('http://localhost:8000/pesanans', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(pesanans) 
        }).then(() => {
            console.log('Blog added')

            history.push('/sukses')
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
