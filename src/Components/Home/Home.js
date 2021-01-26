import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Home.css'



export default class Home extends Component {


    render() {
        return (
            <div className="mainDiv">
                <Container maxWidth="md">
                    <div className="smallerDiv">
                        <h1 className="name">Tony Thomas</h1>
                        <h2 className="job-title">Software Engineer | Front-End Developer</h2>
                        <IconButton id="icon-picker" className="style-icons-linkedIn" aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/tony-thomas-ab8966a5/', "_blank")}>
                            <LinkedInIcon fontSize="large" style={{ fill: '#0072B1' }} />
                        </IconButton>
                        <IconButton id="icon-picker" className="style-icons-github" aria-label="github.com" onClick={() => window.open(' https://github.com/tonythomas504', "_blank")}>
                            <GitHubIcon fontSize="large" style={{ fill: '#000000' }} />
                        </IconButton>
                    </div>
                </Container>
            </div>
        )
    }
}












