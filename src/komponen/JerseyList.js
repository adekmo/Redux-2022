import React from 'react'
import { Commas } from '../utiliti/koma'

const JerseyList = ({itemss}) => {

    return (
        <div className="container">
            {
                itemss.map((j, index) => {
                    return(
                        <div className="col-md-4 mb-4 d-inline-flex">
                            <div className="card shadow " key={index}>
                                <img src={"assets/images/"+
                        j.category.nama.toLowerCase()+
                        "/"+
                        j.gambar} className="card-img-top" alt="jersey" />
                                <div className="card-body">
                                    <h5 className="card-title">{j.nama}</h5>
                                    <p>Rp. {Commas(j.harga)}</p>
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

export default JerseyList