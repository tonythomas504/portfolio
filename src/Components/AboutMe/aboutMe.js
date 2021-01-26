import React, { Component } from 'react'
import { Container } from '@material-ui/core'

export default class aboutMe extends Component {
    render() {
        return (
            <div className="mainDiv">
                <Container>
                    <div className="smallerDiv">
                        <h1>About Me</h1>
                        <div className="aboutMe2">
                            <h2>I love to design, code, and innovate. To achieve my dream of becoming a software engineer, I graduated from the Web Development Program at Eleven Fifty Academy where I learned to create full stack applications from ground up. I also graduated from Ball State University with a bacherlor's degree in International Business. Outside of work, I love to read, watch films, workout, and spend time with my wife and dog.</h2>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}