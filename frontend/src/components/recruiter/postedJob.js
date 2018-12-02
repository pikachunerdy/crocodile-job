import React, { Component } from 'react'
import "../Jobs/jobs.css";
import { Link } from 'react-router-dom';
import Pin from '../Files/Images/Pin.svg';
import { api, printError, printMessage } from '../../services';
import $ from 'jquery';
import { IMAGE_PATHS, S3_URL } from '../../constants/routes';
import jwt_decode from 'jwt-decode';

class PostedJob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            address: "",
            easyApply: "",
            applicant_resume_name: "",
            job_id: ""
        }


    }


    render() {
        let easyApplyButton = null;


        return (
            <div id="card11">
                <div className="container py-1">
                    <div id="card-card1" className="card">
                        <div className="row" style={{height:"140px"}}>
                            <div className="col-md-3">

                                <img src={Pin} style={{ width: "40%" }} />

                            </div>
                            <div className="col-md-9">
                                <div id="cb" className="card-block">
                                    <h3 id="card-heading-saved" className="card-title"><Link id="jobsavedheading" to="">Software Engineering Intern - Machine Learning</Link></h3>
                                    <div className="row">
                                        <div className="col-md-7" style={{ paddingLeft: "0px"}}>
                                            <p id="propdetails1">San Jose ,CA</p>
                                            <p id="propdetails" className="card-text" style={{ paddingTop: "0px" }}>San Jose ,CA</p>

                                        </div>

                                        
                                        
                                            <div className="col-md-2">
                                            <span className="bluetext"> 21 </span>
                                            <span className ="lightgreytext"> Appications</span>
                                        </div>
                        
                                        <div className="col-md-2">
                                            <span className="bluetext"> 10 </span>
                                            <span className ="lightgreytext"> Bookmarks</span>               
                                        </div> 
                                        <div style={{paddingBottom:"10%"}}>
                        <button type="button" class="btn btn-outline-primary">Edit</button></div>
                                           

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div style={{paddingLeft:"66%",paddingBottom:"2%"}}>
                        <span className="JobDate"> Created At :</span> <label>25th Jan 2018</label><span className="JobDate" style={{paddingLeft:"4%"}}> Updated at :</span><label> 30th Jan 2018</label>
                        </div>
                       

                    </div>
                </div>
            </div>
        )
    }
}
export default PostedJob;