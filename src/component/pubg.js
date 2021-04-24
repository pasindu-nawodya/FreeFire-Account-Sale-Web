import TitleBanner from '../component/TitleBanner/TitleBanner';
import Card from '../component/card/card';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Freefire = () =>{

    const [data, setData] = useState([]);
 
    useEffect(async () => {
        const result = await axios(
        'https://freefire-account-sale.herokuapp.com/account/',
        ); 
        setData(result.data);
    },[]);

    return(
        <div >
            <TitleBanner TitleName={"Available Free Fire accounts"}/>
            {data.length === 0 &&
                <div className="jumbotron w-75 ml-auto mr-auto mb-5">
                <h1 className="display-4 text-center ">All Accounts Sold !</h1>
              </div>
            }        
            <Card items={data.filter(item => item.gamename === "p")}/>
        </div>
    )
}

export default Freefire;