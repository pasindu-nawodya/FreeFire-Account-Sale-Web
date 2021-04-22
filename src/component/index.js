import React from 'react';
import Cover from "../component/Cover/cover";
import Freefire from "../img/ff.jpg";
import Pubg from "../img/pubg.png";

export default function index() {
    return (
        <div>
            <Cover/>
            <div className="alert alert-danger w-75 mt-5 text-center ml-auto mr-auto" role="alert">
                <div>Don't Share Your Account Password. We Didn't Ask Your Password Any Time. Keep It Secret.</div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}} className="mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card ml-2 mr-2 mt-3" >
                            <img src={Freefire} className="card-img-top" alt="..." style={{height: "350px"}}/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Free Fire Accounts</h5>
                                <div href="#" class="btn btn-outline-danger">Seek Accounts</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card ml-2 mr-2 mt-3" >
                            <img src={Pubg} className="card-img-top" alt="..." style={{height: "350px"}}/>
                            <div className="card-body text-center">
                                <h5 className="card-title">PUBG Accounts</h5>
                                <div href="#" class="btn btn-outline-danger">Seek Accounts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
