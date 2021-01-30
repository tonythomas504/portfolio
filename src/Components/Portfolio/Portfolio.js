import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, Button, CardMenu, IconButton, CardText, CardActions } from 'react-mdl'
import MovieView from '../Photos/SkillsPhotos/MovieView.png'



export default class Portfolio extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { activeTab: 0 };
    // }

    // toggleCategories() {
    //     if (this.state.activeTab === 0) {
    //         return (
    //             <div>This is React</div>
    //         )
    //     }
    //     else if (this.state.activeTab === 1) {
    //         return (
    //             <div>
    //                 This is React
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
            <div id="portfolio-grid">
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            <Card id="card-portfolio" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#ffffff', height: '176px', background: `url(${MovieView})` }}>React Project #1
                                    </CardTitle>
                                <CardText>Hello is a project</CardText>
                                <CardActions border>
                                    <Button colored>Github</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#ffffff' }}></CardMenu>
                                <IconButton name="share" />
                            </Card>
                            <Card id="card-portfolio" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#ffffff', height: '176px', background: `url(${MovieView})` }}>React Project #1
                                    </CardTitle>
                                <CardText>Hello is a project</CardText>
                                <CardActions border>
                                    <Button colored>Github</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#ffffff' }}></CardMenu>
                                <IconButton name="share" />
                            </Card>
                            <Card id="card-portfolio" shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#ffffff', height: '176px', background: `url(${MovieView})` }}>React Project #1
                                    </CardTitle>
                                <CardText>Hello is a project</CardText>
                                <CardActions border>
                                    <Button colored>Github</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#ffffff' }}></CardMenu>
                                <IconButton name="share" />
                            </Card>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

// <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
// //     <Tab>React</Tab>
// //     <Tab>React</Tab>
// </Tabs>