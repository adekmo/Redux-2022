import React from 'react'
import { Commas } from '../utiliti/koma'

const RetroList = ({itemss}) => {

    return (
        <div className="container">
            {
                itemss.map((r, index) => {
                    return(
                        <div className="col-md-4 mb-4 d-inline-flex" key={index}>
                            <div className="card shadow " >
                                <img src={"assets/images/"+
                        r.category.nama.toLowerCase()+
                        "/"+
                        r.gambar} className="card-img-top" alt="jersey" />
                                <div className="card-body">
                                    <h5 className="card-title">{r.nama}</h5>
                                    <p>Rp. {Commas(r.harga)}</p>
                                    <div className='d-flex justify-content-center'>
                                    <button className="btn btn-primary mt-2">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })
        }
        </div>
    )
}

export default RetroList