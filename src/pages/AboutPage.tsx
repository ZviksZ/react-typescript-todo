import React from 'react'
import {useHistory} from 'react-router-dom'


export const AboutPage: React.FC = () => {
    const history = useHistory()
    return(
        <>
            <h1>INFO PAGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolorum fuga incidunt odit officia voluptas? Accusantium, ad ullam. Harum!</p>
            <button className="btn" onClick={() => history.push('/')}>Back to todo</button>
        </>
    )
}