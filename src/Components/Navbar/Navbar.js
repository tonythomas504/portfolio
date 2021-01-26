import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar, Container } from '@material-ui/core'
import './Navbar.css'
import ttLogos from '../Photos/SkillsPhotos/ttLogos.png'

export default class Navbar extends Component {
    render() {
        return (
            <div class="navbar">
                <AppBar id="app-bar" position="static" style={{ background: "#000000" }}>
                    <Toolbar>
                        <Link style={{ textDecoration: 'none' }} to="/"><Button id="Links">Home</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to="/about me"><Button id="Links">About Me</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to="/skills"><Button id="Links">Skills</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to="/portfolio"><Button id="Links">Portfolio</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to="/contact"><Button id="Links">Contact</Button></Link>
                        <img id="photo" src={ttLogos} alt="Tony Thomas initials" />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}