import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Upload from "./pages/Upload";
import AddTag from "./pages/AddTag";
import SearchTag from "./pages/SearchTag";

const { Header, Content, Footer, Sider } = Layout;

Amplify.configure(aws_exports);

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<UploadOutlined />}>
                <Link to="/upload">Upload</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<FileOutlined />}>
                <Link to="/addTag">Add Tag</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<SearchOutlined />}>
                <Link to="/searchTag">Search Tag</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content>
              <Switch>
                <Route path="/upload">
                  <Upload />
                </Route>
                <Route path="/addTag">
                  <AddTag />
                </Route>
                <Route path="/searchTag">
                  <SearchTag />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default withAuthenticator(App, true);
