import React from 'react';
import TitleBanner from '../component/TitleBanner/TitleBanner';

export default function form() {
    return (
        <div>
            <TitleBanner TitleName="Let Others know Your Account"/>
            <div className="mt-5 w-75 ml-auto mr-auto mb-5">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Account ID</label>
                        <input type="text" name="accountid" className="form-control" placeholder="Your account ID" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Gaming Alias</label>
                        <input type="text" name="gamingalies" className="form-control" placeholder="Your Gaming Name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Real Name</label>
                        <input type="text" name="realname" className="form-control" placeholder="Your Real Name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Game Name</label>
                        <div class="form-check">
                            <input class="form-check-input" name checked type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                            Free Fire
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                            Player Unknown Battle Ground
                            </label>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
