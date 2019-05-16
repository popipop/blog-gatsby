/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import { Layout, Menu, Icon } from "antd"

const { Header, Content, Footer, Sider } = Layout

const GLayout = ({ children, page }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="user" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="https://popipop.com" target='_blank' rel="noopener noreferrer">
                <Icon type="video-camera" />
                <span className="nav-text">popipop.com</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/page-2'>
                <Icon type="upload" />
                <span className="nav-text">page 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/about'>
                <Icon type="user" />
                <span className="nav-text">About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, color: 'white', fontSize: '3em' }}>{data.site.siteMetadata.title}</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )}
  />
)

GLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GLayout
