import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction';

const ListKontak = () => {

    const {getListKontakResult, getListKontakLoading, getListKontakError} = useSelector((state) => state.KontakReducer);


    const dispatch = useDispatch();

    useEffect(() => {
        //get list kontak, panggil action getListKontak
        console.log('1. useEffect dlu');
        dispatch(getListKontak());
    }, [dispatch])

    return (
        <div>
            <h4>List Kontak</h4>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (
                        <div key={kontak.id}>
                            <div>
                                <h5>{kontak.id}. Nama : {kontak.nama}</h5>
                            </div>
                            <div>
                                <h6>No Handphone : {kontak.handphone}</h6>
                            </div>
                        </div>
                    )
                })
            ) : getListKontakLoading ? (
            <p>Loading...</p>
            ) : <p>{getListKontakError ? getListKontakError : "data kosong"}</p>}
        </div>
    )
}

export default ListKontak
