import React from 'react'
import { Route, Switch } from 'react-router'
import Navbar from '../komponen/Navbar'
import Home from '../komponen/Home'
import Retros from '../komponen/Retros'
import Trainings from '../komponen/Trainings'
import Jerseys from '../komponen/Jerseys'
import Hasil from '../komponen/Hasil'
import Sukses from '../komponen/Sukses'
import FormData from '../komponen/FormData'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Home />
                </Navbar>
            </Route>
            <Route path='/jersey'>
                <Navbar>
                    <Jerseys />
                </Navbar>
            </Route>
            <Route path='/retro'>
                <Navbar>
                    <Retros />
                </Navbar>
            </Route>
            <Route path='/training'>
                <Navbar>
                    <Trainings />
                </Navbar>
            </Route>
            <Route path='/hasil'>
                <Navbar>
                    <Hasil />
                </Navbar>
            </Route>
            <Route path='/sukses'>
                <Navbar>
                    <Sukses />
                </Navbar>
            </Route>
            <Route path='/formdata'>
                <Navbar>
                    <FormData />
                </Navbar>
            </Route>
        </Switch>
    )
}

export default Router
