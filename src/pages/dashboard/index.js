import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button, Space, Input, Form, Checkbox, Icon } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { PlusCircleTwoTone, CalendarTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";

const { TextArea } = Input;

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0 5vh",
          padding: "25px 50px",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "50px", margin: 0 }}>
          Welcome, Rosalie
        </h1>
        <h3 style={{ textAlign: "center", fontSize: "25px", margin: 0 }}>
          To get started with Wri.py, click on one of the following options.
        </h3>
        <div class="col-6">
          <div id="browse" style={{}}>
            <Tooltip title="Coming soon!">
              <button
                style={{
                  backgroundColor: "#CDDFDF",
                  padding: "5vh",
                  margin: "2.5vh",
                  border: "none",
                  borderRadius: "15px",
                  width: "100%",
                  height: "25vh",
                }}
              >
                <PlusCircleTwoTone
                  twoToneColor="#ffccc7"
                  style={{ fontSize: "500%" }}
                  type="setting"
                />
                <h1 style={{ fontSize: "1.5em" }}>
                  Long Term Emotional Trends: Browse old journal entries
                </h1>
              </button>
            </Tooltip>
          </div>
          <Tooltip title="Coming soon!">
            <div id="calendar" style={{}}>
              <button
                style={{
                  backgroundColor: "#FFB667",
                  padding: "5vh",
                  margin: "2.5vh",
                  border: "none",
                  marginRight: "2.5vh",
                  borderRadius: "15px",
                  width: "100%",
                  height: "25vh",
                }}
              >
                <CalendarTwoTone
                  twoToneColor="#FFD7AB"
                  style={{ fontSize: "500%" }}
                  type="setting"
                />
                <h1 style={{ fontSize: "1.5em" }}>Calendar</h1>
              </button>
            </div>
          </Tooltip>
        </div>

        <Link to="/editor">
          <div id="write" class="col-6" style={{}}>
            <button
              class="col-5"
              style={{
                backgroundColor: "#F8E0E0",
                padding: "5vh",
                margin: "2.5vh",
                border: "none",
                borderRadius: "15px",
                width: "100%",
                height: "55vh",
              }}
            >
              <PlusCircleTwoTone
                twoToneColor="#ffccc7"
                style={{ fontSize: "500%" }}
                type="setting"
              />
              <h1 style={{ fontSize: "1.5em" }}>Write Your Journal</h1>
            </button>
          </div>
        </Link>

        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Dashboard;

/*vh vw*/
