import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider, DatePicker} from "@material-ui/pickers";

export default class SimpleDatePicker extends React.Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={this.props.selectorDate} onChange={this.props.setDate}/>
            </MuiPickersUtilsProvider>
        )
    }
}