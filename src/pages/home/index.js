import React, { Component } from "react";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import HomeNav from "../../components/HomeNav";
import Editor from "../editor";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

class Home extends Component {
  /*getClick() 
    { 
        if (this.state.color === '#4cb96b') 
            this.setState({ color : '#aaa' }); 
        else
            this.setState({ color : '#4cb96b' }); 
    }*/

  render() {
    return (
      <>
        <div className="col-12" style={{ backgroundColor: "#FFFFFF" }}>
          <img
            src="603.jpg"
            style={{
              //style wow
              margin: "auto",
              display: "block",
              width: "75%",
              maxWidth: "750px",
              marginTop: "50px",
            }}
          />
          <HomeNav />
          <div style={{textAlign: "center"}}>
            <div
              style={{
                marginTop: "50px",
                marginBottom: "50px",
                padding: "50px",
                backgroundColor: "#570015",
                textAlign: "left",
                boxShadow: "inset 0 0 10px #3F0707",
              }}
            >
              <h2 style={{ color: "#F8E0E0" }}>About Wri.py</h2>
              <h3 style={{ color: "#FFFFFF" }}>
                During the pandemic, many people are isolated from others,
                creating more mental health issues with less resources to tackle
                them. Journaling has been known to help mental health as well as
                help the immune system. Wri.py is a smart journal that help
                users express their emotions, while automatically tracking and
                detecting emotional trends through their writing.
              </h3>
            </div>
            <div class="row">
              <div class="col-12">
                <h2>Journaling for Emotional Wellness</h2>
                <p>
                  Studies show writing therapy is quite effective, and even more
                  effective when writing emotionally.
                </p>
              </div>
              <div class="col-6">
                <h2>20.6%</h2>
                <p>
                  Of U.S. adults had a mental health condition before the
                  pandemic{" "}
                </p>
              </div>
              <div class="col-6">
                <h2>40.9%</h2>
                <p>
                  Of U.S. adults have a harmful mental health condition in the
                  pandemic.
                </p>
              </div>
            </div>
            <div style={{
                marginTop: "50px",
                marginBottom: "50px",
                padding: "50px",
                backgroundColor: "#570015",
                textAlign: "center",
                boxShadow: "inset 0 0 10px #3F0707",
                
              }}>
              <h2 style={{color: "#FFFFFF", fontWeight:"bolder"}}>Try it out!</h2>
              <Editor />
            </div>
            <div class="row">
              <div class="col-4">
                <h2>Sentiment Analysis</h2>
                <p>
                  Sentiment Analysis is the use of linguistics and machine
                  learning (natural language processing) to quantify emotions
                </p>
              </div>
              <div class="col-4">
                <h2>Catharsis</h2>
                <p>
                  A large part of maintaining emotional wellness is getting
                  feelings and events off your chest.
                </p>
              </div>
              <div class="col-4">
                <h2>Reflection</h2>
                <p>
                  Afterwards, the best next step is to then take a step back
                  from your emotions and think about what they mean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
