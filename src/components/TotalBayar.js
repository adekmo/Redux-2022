import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../utils/constant';

export default class TotalBayar extends Component {

    submitTotalHarga = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL+"pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses')
        })
    }

    render() {

        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <div className="fixed-bottom">
                <Row>
                    <Col md={{ span:3, offset:9 }} className="px-4">
                        <h4>Total Harga: <strong className="float-right mr-2">Rp. {numberWithCommas (totalBayar)}</strong></h4>

                    <Button variant="primary"
                    block
                    className="mb-2 mt-3"
                    size="lg"
                    onClick={ () => this.submitTotalHarga(totalBayar)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> Bayar
                    </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
