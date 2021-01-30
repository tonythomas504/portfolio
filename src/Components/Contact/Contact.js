import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tony Thomas</h2>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQGLZLg2RIJhjA/profile-displayphoto-shrink_200_200/0/1602854842294?e=1617235200&v=beta&t=OB03KfSBMO1GMSWjwbEzHk63XHgThhzJSgPfzny0Uy0"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>The best way to reach me is by email, but if you do call please leave a voicemail. Looking forward to connecting!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                    (262) 344-4718</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    tonythomas504@gmail.com</ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

