import React from 'react'
import { Commas } from '../utiliti/koma'

const ItemsList = ({itemss, keranjang}) => {


    return (
        <div className="container">
            {
            itemss.map((item, index) => {
                return (
                    <div className="col-md-4 mb-4 d-inline-flex" key={index}>
                        <div> 
                            <img src={"assets/images/"+
                                    item.category.nama.toLowerCase()+
                                    "/"+
                                    item.gambar} className="card-img-top" alt="jersey" />
                            
                            <h5 className="card-title">{item.nama}</h5>
                            <p>Rp. {Commas(item.harga)}</p>
                                <div className='d-flex justify-content-end'>
                                    
                                <button className="btn btn-primary mt-2" onClick={(e) => keranjang(item)}>Add to Cart</button> 
                                </div>  
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ItemsList
