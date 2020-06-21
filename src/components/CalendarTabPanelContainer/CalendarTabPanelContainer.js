import React from "react";
import SimpleDatePicker from "../SimpleDatePicker/SimpleDatePicker";
import {MuiThemeProvider} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default class CalendarTabPanelContainer extends React.Component {

    render() {
        return (
            <div align={"center"}>
                <SimpleDatePicker selectorDate={this.props.selectorDate}
                                  setDate={this.props.setDate}/>
                <MuiThemeProvider theme={this.props.theme}>
                    <Button value={this.props.workStatus}
                            onClick={this.props.setWorkStopStatus}
                            style={{width: "65vw", marginTop: "1vh"}} variant={"contained"}
                            size={"medium"}
                            color={"primary"}>
                        {this.props.workStatus}
                    </Button>
                </MuiThemeProvider>
            </div>
        );
    }
}