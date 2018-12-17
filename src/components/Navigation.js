import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Home, About } from '../pages'

import './Navigation.css'

export const Navigation = () => (
    <BrowserRouter>
    <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>

        <Route path='/' exact component={ Home } />
        <Route path='/about' component={ About } />
    </div>
    </BrowserRouter>
)
