import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class AboutMe extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <div id="logo-img">
                            <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/36843216_2230849417136187_5106774049757855744_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=-pLdpnfyBlUAX-zTxIl&_nc_ht=scontent-ort2-1.xx&oh=0c4c6c4576552cfa76e46d3734a4cc73&oe=603B0930" alt="pic of me" />
                        </div>
                        <div className="about-banner">
                            <h1>About Me</h1>
                            <hr />
                            <p>My name is Tony Thomas, and I am full stack developer! I am graduate of Ball State Univeristy, and Eleven Fifty Academy where I completed the full stack web development program.</p>
                            <br />
                            <p>I am married to my beautiful wife Sydney, and we have a labradoodle named Dexter. I am an avid reader, sports fan, love watching movies, and enjoy styaing active.</p>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}