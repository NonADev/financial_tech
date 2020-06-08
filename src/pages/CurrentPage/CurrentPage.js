import React from 'react';
import LoginPage from "../LoginPage/LoginPage";
import PointPage from "../PointPage/PointPage";

export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSecure: 0
        }
    }

    setUserSecure(number) {
        this.setState({
            userSecure: (number)
        });
    }

    render() {
        return (
            (this.state.userSecure === 0)
                ? <LoginPage
                    userSecure={this.state.userSecure}
                    setUserSecure={this.setUserSecure.bind(this)}
                />
                : <PointPage/>
        );
    }
}