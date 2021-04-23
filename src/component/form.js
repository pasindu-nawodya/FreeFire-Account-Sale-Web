import React from 'react';
import axios from 'axios';
import TitleBanner from '../component/TitleBanner/TitleBanner';
import "./main.css"

export default class FormSale extends React.Component {

    state = {
        accountid:'',
        gamingalies:'',
        realname:'',
        gamename:'',
        price_t:'',
        level:'',
        image:'',
        desc:'',
        whatsapp:'',
        email:'',
        mobile:'',
        uploading: false
    }

    uploadImage = async e => {
        this.setState({
            uploading:true
        })
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'suiteplus')
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dujlxhnx3/image/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
        this.setState({
            image:file.secure_url,
            uploading:false
        })
      }

      handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //make post request

        alert("Request Send To The Guild!")
        axios.post(`https://freefire-account-sale.herokuapp.com/account/`, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    render(){

    var {uploading} = this.state;

    return (
        <div>
            <TitleBanner TitleName="Let Others know Your Account"/>
            <div className="mt-5 w-50 ml-auto mr-auto mb-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">1) Account ID</label>
                        <input type="text" name="accountid" className="form-control" placeholder="Your account ID" onChange={this.handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">2) Gaming Alias</label>
                        <input type="text" name="gamingalies" className="form-control" placeholder="Your Gaming Name (ex: B 2 K)" onChange={this.handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">3) Real Name</label>
                        <input type="text" name="realname" className="form-control" placeholder="Your Real Name" onChange={this.handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">4) Game Name</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gamename" id="gridRadios1" value="f" onChange={this.handleChange} required/>
                            <label className="form-check-label">
                            Free Fire
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gamename" id="gridRadios1" value="p" onChange={this.handleChange} required/>
                            <label className="form-check-label">
                            Player Unknown Battle Ground
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">5) Payment Method</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="price_t" id="gridRadios1" value="c" onChange={this.handleChange} required/>
                            <label className="form-check-label">
                            Cash
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="price_t" id="gridRadios1" value="e" onChange={this.handleChange} required/>
                            <label className="form-check-label" >
                            Exchange
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="price_t" id="gridRadios1" value="ce" onChange={this.handleChange} required/>
                            <label className="form-check-label">
                            Cash or Exchange
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">6) Game Level</label>
                        <input type="text" name="level" className="form-control" placeholder="Game Level (ex: 56)" onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">7) Image</label><br/>
                        {
                            uploading ? <div className="loader"></div> : this.state.image !== '' && <img src={this.state.image} height="50%" width="60%" alt=""/>
                        }
                        <input type="file" className="form-control" name="image" onChange={this.uploadImage} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">8) Description</label>
                        <textarea className="form-control" name="desc" onChange={this.handleChange} placeholder="More details about your account (Town, Gun skins, Started Season etc)" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">9) Whatsapp Number</label>
                        <input type="text" name="whatsapp" className="form-control" onChange={this.handleChange} placeholder="For contact purpose" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">10) Email</label>
                        <input type="text" name="email" className="form-control" onChange={this.handleChange} placeholder="Working Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">11) Mobile</label>
                        <input type="text" name="mobile" className="form-control" onChange={this.handleChange} placeholder="Working Number" />
                    </div>
                    {
                        !uploading && <button type="submit" className="btn btn-primary">Submit</button> 
                    }
                    
                </form>
            </div>
        </div>
    )
}
}
