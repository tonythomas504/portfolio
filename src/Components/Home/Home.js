import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import './Home.css'
import photoOfMe from '../Photos/SkillsPhotos/photoOfMe.png'


export default class Home extends Component {


    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div id="logo-img">
                            <img src={photoOfMe} alt="pic of me" />
                        </div>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />
                            <p>HTML/CSS | JavaScript | React | TypeScript | NodeJS | PostgreSQL</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/tony-thomas-ab8966a5/" target="blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/tonythomas504" target="blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>

        )
    }
}



// <IconButton id="icon-picker" className="style-icons-linkedIn" aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/tony-thomas-ab8966a5/', "_blank")}>
// <LinkedInIcon fontSize="large" style={{ fill: '#0072B1' }} />
// </IconButton>
// <IconButton id="icon-picker" className="style-icons-github" aria-label="github.com" onClick={() => window.open(' https://github.com/tonythomas504', "_blank")}>
// <GitHubIcon fontSize="large" style={{ fill: '#000000' }} />
// </IconButton>








