import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Home, About } from '../pages'

import './Navigation.css'

export const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li><Link to='/about'>About</Link></li>
        </ul>

        <Route path='/' exact component={ Home } />
        <Route path='/about' component={ About } />
    </nav>
)
