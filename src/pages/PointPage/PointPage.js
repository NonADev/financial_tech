import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import DateFnsUtils from '@date-io/date-fns';
import {DatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default class PointPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabOption: 0,
            selectorDate: new Date()
        };
    }

    dateChanger(v){
        this.setState({
            selectorDate: v
        })
    }

    tabChangeHandler(e, v){
        this.setState({
            tabOption: v
        })
    }

    render() {
        document.body.style.backgroundColor = '#eff2f2';
        let imgIcon = require("../../images/2858066.png");
        return(
            <div>
                <Grid container>
                    <Grid item style={{marginLeft: "1vw", marginTop: "1vh"}} xs={4}>
                        <Avatar style={{backgroundColor: "white", height: "27vw", width: "27vw"}} variant={"square"} src={imgIcon}/>
                    </Grid>
                    <Grid item xs={7}>
                        <Button style={{marginTop: "2vh", minWidth: "60vw", borderRadius: "30px",color: "white", backgroundColor: '#499bbf'}}>Gabi Sampaio</Button>
                        <Button style={{marginTop: "1vh", minWidth: "60vw", borderRadius: "30px",color: "white", backgroundColor: '#50bf3e'}}>React Developer</Button>
                    </Grid>
                    <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <Paper style={{marginTop:"3vh", width: "93vw",minHeight:"20vh"}}>
                            <Grid container>
                                <Grid item xs={6} style={{marginTop: "5vh", textAlign: "center"}}>
                                    <p>Entrada<br/>8:00</p>
                                </Grid>
                                <Grid item xs={6} style={{marginTop: "5vh",textAlign: "center"}}>
                                    <p>Saida<br/>16:00</p>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "3vh"}}>
                        <Paper>
                            <Tabs
                                value={this.state.tabOption}
                                onChange={this.tabChangeHandler.bind(this)}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Calendario" {...a11yProps(0)} />
                                <Tab label="Pagamentos" {...a11yProps(1)} />
                                <Tab label="Opções" {...a11yProps(2)} />
                            </Tabs>
                            <SwipeableViews
                                index={this.state.tabOption}
                                onChangeIndex={this.tabChangeHandler.bind(this)}
                            >
                                <TabPanel value={this.state.tabOption} index={0}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker value={this.state.selectorDate} onChange={this.dateChanger.bind(this)} />
                                    </MuiPickersUtilsProvider>
                                </TabPanel>
                                <TabPanel value={this.state.tabOption} index={1}>
                                    PAGAMENTOS
                                </TabPanel>
                                <TabPanel value={this.state.tabOption} index={2}>
                                    OPÇÕES
                                </TabPanel>
                            </SwipeableViews>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}