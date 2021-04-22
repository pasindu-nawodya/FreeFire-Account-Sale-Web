import React, { Component } from 'react';
import Youtube from "../../img/youtube.png";
import Facebook from "../../img/facebook.png";

export default class Footer extends Component {
    render() {

        var date = new Date();
        var today = date.getFullYear();  

        return (
            <div style={{
                backgroundColor: "#B83200",
                borderRadius: 0,
                paddingTop: "20px",
                paddingBottom: "20px",
                textAlign:"center"
              }}
              role="alert" className="bg-dark text-white">
                <div className="bg-dark text-white"> Connect With Us : 
                    &nbsp;<a href={"https://www.youtube.com/channel/UCCfYY1nvSinlg79wAsbDJkg?view_as=subscriber"}> <img src={Youtube} style={{width:"25px", height:"25px"}} alt="youtube"/> </a> &nbsp;
                    &nbsp;<a href={"https://www.facebook.com/Zanity-Gaming-104938104845840"}> <img src={Facebook} style={{width:"25px", height:"20px"}} alt="facebook"/> </a> &nbsp;
                    | © {today} Copyright Reserved
                </div>
            </div>
        )
    }
}