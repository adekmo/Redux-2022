import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak } from '../../actions/kontakAction';

const AddKontak = () => {

    const [kontak, setKontak] = useState({
        nama : "",
        handphone : ""
    });

    const {addKontakResult} = useSelector((state) => state.KontakReducer);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addKontak({nama : kontak.nama, handphone : kontak.handphone}))
    }

    useEffect(() => {
        if(addKontakResult){
            dispatch(getListKontak());
        }
        setKontak({nama: '', handphone: ''});
    }, [addKontakResult, dispatch])

    return (
        <div>
            <h4>Add Kontak +</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="nama" placeholder="Nama" value={kontak.nama} onChange={(e) => setKontak({...kontak, nama : e.target.value})}></input>
                <input type="text" name="handphone" placeholder="No Handphone" value={kontak.handphone} onChange={(e) => setKontak({...kontak, handphone : e.target.value})}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddKontak
