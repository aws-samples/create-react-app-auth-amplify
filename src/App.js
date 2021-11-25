import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
import Amplify, {Storage} from 'aws-amplify';
import aws_exports from './aws-exports';
import styled from "styled-components";
import ReactPlayer from 'react-player/lazy';

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: ''
    };
  }

  render() {
    const toggleVideo = async filePath => {
      try {
        const videoUrl = await Storage.get(filePath, {expires: 60});
        if (!this.state.videoUrl){
          this.setState({videoUrl: videoUrl})
        }
      } catch (error) {
        console.error('Error accessing the file from s3! ', error);
      }
    };
    toggleVideo("intro.mp4");
    const Button = styled.button`
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    `;

    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Best Hand balancer
          </p>
          <div id="about">
            <div className="container">
              <div className="row">
                {/*<div className="col-xs-12 col-md-6">*/}
                {/*  {" "}*/}
                {/*  <img src="./logo.svg" className="img-responsive" alt="" />{" "}*/}
                {/*</div>*/}
                <div className="col-xs-12 col-md-6">
                  <div className="about-text">
                    <h2>About Us</h2>
                    <p>Hello, I am professional handbalancer!</p>
                    <div className="list-style">
                      <div className="col-lg-6 col-sm-6 col-xs-12">
                        <ReactPlayer url={this.state.videoUrl} />
                      </div>
                      <br/>
                      <div className="col-lg-6 col-sm-6 col-xs-12">
                        <Button className="btn-style">
                          Buy course
                        </Button>
                      </div>
                    </div>
                  </div>
                  <h3>Why Choose Us?</h3>
                  <ul>
                    <li>
                      First reason
                    </li>
                    <li>
                      Second reason
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
