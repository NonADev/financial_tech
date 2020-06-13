import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

export default class PointPage extends React.Component{
    render() {
        document.body.style.backgroundColor = '#eff2f2';
        let imgIcon = require("../../images/2858066.png");
        return(
            <div>
                <Grid container>
                    <Grid style={{marginLeft: "1vw", marginTop: "1vh"}} item xs={4}>
                        <Avatar style={{border: "1px solid black", backgroundColor: "white", height: "27vw", width: "27vw"}} variant={"square"} src={imgIcon}/>
                    </Grid>
                    <Grid item xs={7}>
                        <Button style={{marginTop: "2vh", minWidth: "60vw", borderRadius: "30px",color: "white", backgroundColor: '#499bbf'}}>Gabi Sampaio</Button>
                        <Button style={{marginTop: "1vh", minWidth: "60vw", borderRadius: "30px",color: "white", backgroundColor: '#50bf3e'}}>React Developer</Button>

                    </Grid>
                </Grid>
            </div>
        );
    }
}