import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteKontak, getListKontak, detailKontak } from '../../actions/kontakAction';

const ListKontak = () => {

    const {getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult} = useSelector((state) => state.KontakReducer);


    const dispatch = useDispatch();

    useEffect(() => {
        //get list kontak, panggil action getListKontak
        console.log('1. useEffect dlu');
        dispatch(getListKontak());
        if(deleteKontakResult){
            dispatch(getListKontak());
        }
    }, [dispatch, deleteKontakResult])

    // useEffect(() => {
    //     if(deleteKontakResult){
    //         dispatch(getListKontak());
    //     }
    // }, [deleteKontakResult, dispatch])

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
                            <div>
                                <button onClick={() => dispatch(deleteKontak(kontak.id))}>remove</button>
                                <button style={{marginLeft: '10px'}} onClick={() => dispatch(detailKontak(kontak)) }>Edit</button>
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
