import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Layout, Menu, Button } from "antd";
import logo from "./wripy.svg";

import firebase from "firebase/app";

//Importing pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Journal from "./pages/editor";

const { Header, Footer, Sider, Content } = Layout;

function App({ user }) {
  return (
    <Router>
      <Layout>
        <Header style={{ backgroundColor: "#570015" }}>
          <Menu
            class="nav"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ backgroundColor: "#570015" }}
          >
            <a href="/" style={{ marginRight: "10px" }}>
              <img src={logo} />
            </a>

            {user !== null ? (
              <Menu.Item class="nav" key="signout">
                <a
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  Sign Out
                </a>
              </Menu.Item>
            ) : (
              <>
                <Menu.Item class="nav" key="login">
                  <a
                   href="/login"
                  >
                    Login
                  </a>
                </Menu.Item>
                <Menu.Item class="nav" key="signup">
                  <a href="/signup">Sign-Up</a>
                </Menu.Item>
              </>
            )}
          </Menu>
        </Header>
        <Content style={{ minHeight: "calc(100vh - 125px)" }}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/editor">
              <div>
                <Button
                  type="primary"
                  href="/dashboard"
                  size="large"
                  style={{
                    background: "gold",
                    borderColor: "gold",
                    color: "black",
                    display: "block",
                    marginTop: "25px",
                    width: "40%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Back to Dashboard
                </Button>
                <Journal />
              </div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#570015",
            color: "#FFFFFF",
          }}
        >
          Wri.py Journal ©2020 Created by Rosalie Liu
        </Footer>
      </Layout>
    </Router>
  );
}

function L() {
  return <h2>Login</h2>;
}

function U() {
  return <h2>Users</h2>;
}

export default App;
