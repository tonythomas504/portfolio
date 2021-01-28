import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content, Button } from 'react-mdl'

export default class Navbar extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Title" scroll>
                        <Navigation>
                            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                            <Link style={{ textDecoration: 'none' }} to="/about me">About Me</Link>
                            <Link style={{ textDecoration: 'none' }} to="/resume">Resume</Link>
                            <Link style={{ textDecoration: 'none' }} to="/portfolio">Portfolio</Link>
                            <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                            <Link style={{ textDecoration: 'none' }} to="/about me">About Me</Link>
                            <Link style={{ textDecoration: 'none' }} to="/resume">Resume</Link>
                            <Link style={{ textDecoration: 'none' }} to="/portfolio">Portfolio</Link>
                            <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Layout>
            </div>
        )
    }
}