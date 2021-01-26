import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import './aboutMe.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMainDiv">
                <Container maxWidth="lg">
                    <div className="aboutDiv">
                        <h1 class="aboutTitle">About Me</h1>
                        <h2 class="aboutText">I love to design, code, and innovate. To achieve my dream of becoming a software engineer, I graduated from the Web Development Program at Eleven Fifty Academy where I learned to create full stack applications from ground up. I also graduated from Ball State University with a bacherlor's degree in International Business. Outside of work, I love to read, watch films, workout, and spend time with my wife and dog.</h2>
                    </div>
                </Container>
            </div>
        )
    }
}