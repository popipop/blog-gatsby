import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { List, Avatar, Divider } from 'antd'

const Bio = () => (
  <StaticQuery 
    query = {
      graphql`
        query {
          site {
            siteMetadata {
              author
              bio
            }
          }
        }
      `
    }
    render={data => (
      <>
        <Divider orientation='left'>Author</Divider>
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
            description={data.site.siteMetadata.bio}
          />
        </List.Item>
      </>
    )}
  />
)

export default Bio
