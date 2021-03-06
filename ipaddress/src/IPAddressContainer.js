import React, { Component } from "react";

var xhr;

class IPAddressContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "booty"
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', "https://ipinfo.io/json?token=2277ce4bac0347", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        return(
            <div>{this.state.ip_address}</div>
        );
    }
};

export default IPAddressContainer;