import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

class HomeNav extends Component {
  /*getClick() 
    { 
        if (this.state.color === '#4cb96b') 
            this.setState({ color : '#aaa' }); 
        else
            this.setState({ color : '#4cb96b' }); 
    }*/

  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "block",
          position: "absolute",
          marginTop: "200px",
          top: "-50px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontWeight: "bold",
            fontSize: "96px",
            color: "#570015",
            textShadow:
              "-5px -5px 0 #FFFFFF, 5px -5px 0 #FFFFFF, -5px 5px 0 #FFFFFF, 5px 5px 0 #FFFFFF",
          }}
        >
          Wri.py
        </h1>
        <h2
          style={{
            textShadow:
              "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF",
          }}
        >
          A dynamic, reflective journal using sentiment analysis
        </h2>
        <Space>
          <Link to="/login">
            <Button
              type="primary"
              size="large"
              style={{
                background: "gold",
                borderColor: "gold",
                color: "black",
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              type="secondary"
              size="large"
              style={{
                background: "gold",
                borderColor: "gold",
                color: "black",
              }}
            >
              Sign-up
            </Button>
          </Link>
        </Space>
      </div>
    );
  }
}

export default HomeNav;
