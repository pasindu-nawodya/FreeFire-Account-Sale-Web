import TitleBanner from '../component/TitleBanner/TitleBanner';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Freefire = () =>{

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
        'https://freefire-account-sale.herokuapp.com/account/'+window.location.href.split('/').reverse()[0],
        ); 
        setData(result.data);
    },[]);

    return(
        <div>
            <TitleBanner  TitleName={"Account Details : Ensure Before Contact"} />
            <div className="mt-5 w-50 ml-auto mr-auto mb-5">
            <InnerImageZoom src={data.image} />
                <form>
                    <div className="mb-3">
                        <label  className="form-label">1) Account ID</label>
                        <input type="text" name="accountid" value={data.accountid} className="form-control" placeholder="Your account ID" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">2) Gaming Alias</label>
                        <input type="text" name="gamingalies" value={data.gamingalies} className="form-control" placeholder="Your Gaming Name (ex: B 2 K)" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">3) Real Name</label>
                        <input type="text" name="realname" value={data.realname} className="form-control" placeholder="Your Real Name" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">4) Game Name</label>
                        <input type="text" name="name" value={data.gamename === 'f' ? "Free Fire" : "PubG"} className="form-control" placeholder="Your Real Name" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">5) Payment Method</label>
                        <input type="text" name="price_t" value={data.pricet_t==='c' ? "Cash Only" : data.pricet_t === 'e' ? "Exchange Only" : "Cash Or Exchange"} className="form-control" placeholder="Your Real Name" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">6) Game Level</label>
                        <input type="text" name="level" value={data.level} className="form-control" placeholder="Game Level (ex: 56)" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">7) Description</label>
                        <textarea className="form-control" value={data.desc} name="desc" placeholder="More details about your account (Town, Gun skins, Started Season etc)" id="exampleFormControlTextarea1" rows="3" readOnly></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">8) Whatsapp Number</label>
                        <input type="text" name="whatsapp" value={data.whatsapp} className="form-control" placeholder="For contact purpose" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">9) Email</label>
                        <input type="text" name="email" value={data.email} className="form-control" placeholder="Working Email" readOnly/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">10) Mobile</label>
                        <input type="text" name="mobile" value={data.mobile} className="form-control" placeholder="Working Number" readOnly/>
                    </div>
                    
                </form>
            </div>
            </div>
    )
}

export default Freefire;