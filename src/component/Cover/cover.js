import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Cover from "../../img/banner2.jpeg";
import './cover.css';

export default class cover extends Component {
    render() {
        return (
            <div className="cover-container">
                <img src={Cover}  className="cover-img" alt={"Free Fire Guild Tournament"} />
                <div className="text-cover">
                    <br />   
                    <div className="main-txt">Are You Seeking a Place to Sell and Buy Your Gaming Account? If Yes,</div>                 
                    <div className="second-txt">Welcome to Account.LK</div>                    
                    <Link to="/form">                   
                        <button type="button" className="btn btn-outline-light mt-3">
                            Sell Your Account Here
                        </button>  
                    </Link>                 
                </div>
            </div>
        )
    }
}
