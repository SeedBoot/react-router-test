import React from 'react'
import { Link, Route } from 'react-router-dom'

const Topic = ({ match }) =>{
    console.log(match)
    return <h2>{match.params.aboutId}</h2>
}
export const About = ({ match }) => (
    <React.Fragment>
        <h1>About</h1>
        <p>yayayayay yah yah</p>
        <Link to={`${match.url}/me`}>About me</Link>
        <Link to={`${match.url}/you`}>About you</Link>

        <Route path={`${match.path}/:aboutId`} component={Topic} />
        <Route exact path={match.path} render={ () =>{ console.log(match.path); return <h2>Pick one!</h2>} } />
    </React.Fragment>
)
