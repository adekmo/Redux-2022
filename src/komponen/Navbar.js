import React from 'react'
import { NavLink } from 'react-router-dom'
import useFetch from './useFetch';


const Navbar = ({children}) => {

    const { items } = useFetch('http://localhost:8000/keranjangs')

    const countCart = items.length;

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">ADEKMO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink exact className='nav-link' to='/'>All Products</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className='nav-link' to='/jersey'>Jersey</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className='nav-link' to='/retro'>Retro</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className='nav-link' to='/training'>Training</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/pembayaran'>Pesanan Saya</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className='nav-link active' to='/hasil'>Keranjang { ' '}
                    {countCart ? (
                        <button className='badge'>{countCart}</button>
                    ) : ('')
                }</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="py-4">
                {children}
            </div>
        </div>
    )
}

export default Navbar
