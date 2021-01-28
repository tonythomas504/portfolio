import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import './aboutMe.css'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>About Me </h1>
            </div>
        )
    }
}