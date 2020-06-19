import React from 'react';
import LoginPage from "../LoginPage/LoginPage";
import PointPage from "../PointPage/PointPage";

export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSecure: 0,
            userData: {}
        }
    }

    setUserData(data) {
        this.setState({
            userData: data
        })
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
                    setUserData={this.setUserData.bind(this)}
                    userSecure={this.state.userSecure}
                    setUserSecure={this.setUserSecure.bind(this)}
                />
                : <PointPage userData={this.state.userData} resetDB={this.props.resetDB}/>
        );
    }
}