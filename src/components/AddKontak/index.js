import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction';

const AddKontak = () => {

    const [kontak, setKontak] = useState({
        nama : "",
        handphone : "",
        id : ""
    });

    const {addKontakResult, detailKontakResult,  updateKontakResult} = useSelector((state) => state.KontakReducer);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(kontak.id){
            //update kontak
            dispatch(updateKontak({id: kontak.id, nama : kontak.nama, handphone : kontak.handphone}))
        }else{
            //add kontak
            dispatch(addKontak({nama : kontak.nama, handphone : kontak.handphone}))
        }
    }

    useEffect(() => {
        if(addKontakResult){
            dispatch(getListKontak());
        }
        setKontak({nama: '', handphone: ''});
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if(detailKontakResult){
            setKontak({nama : detailKontakResult.nama, handphone: detailKontakResult.handphone, id: detailKontakResult.id})
        }
    }, [detailKontakResult, dispatch])

    useEffect(() => {
        if(updateKontakResult){
            dispatch(getListKontak());
        }
        setKontak({nama: '', handphone: ''});
    }, [updateKontakResult, dispatch])

    return (
        <div>
            <h4>{kontak.id ? "Edit Kontak" : "Add Kontak"}</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="nama" placeholder="Nama" value={kontak.nama} onChange={(e) => setKontak({...kontak, nama : e.target.value})}></input>
                <input type="text" name="handphone" placeholder="No Handphone" value={kontak.handphone} onChange={(e) => setKontak({...kontak, handphone : e.target.value})}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddKontak
