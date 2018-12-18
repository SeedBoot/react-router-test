import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, About } from './pages'

export const AppRouter = (props) => (
    <BrowserRouter>
        <Fragment>
            {props.children}
            <Route path='/' exact component={ Home } />
            <Route path='/about' component={ About } />
        </Fragment>
    </BrowserRouter>
)
