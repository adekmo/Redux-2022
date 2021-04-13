import React from 'react'
import { Commas } from '../utiliti/koma'

const TrainingList = ({itemss}) => {

    return (
        <div className="container">
            {
                itemss.map((t, index) => {
                    return(
                        <div className="col-md-4 mb-4 d-inline-flex">
                            <div className="card shadow " key={index}>
                                <img src={"assets/images/"+
                        t.category.nama.toLowerCase()+
                        "/"+
                        t.gambar} className="card-img-top" alt="jersey" />
                                <div className="card-body">
                                    <h5 className="card-title">{t.nama}</h5>
                                    <p>Rp. {Commas(t.harga)}</p>
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

export default TrainingList