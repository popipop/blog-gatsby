import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { List } from "antd";
import Bio from "../components/bio";

const IndexPage = ({ data }) => (
  <Layout page='1'>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <List
      itemLayout="horizontal"
      dataSource={data.allMarkdownRemark.edges}
      renderItem={({ node }) => (
        <List.Item extra={<Link to={node.frontmatter.slug}>Suite...</Link>} >
          <List.Item.Meta
            title={
              <span style={{ fontSize: "2rem"}}>
                <Link to={node.frontmatter.slug}>
                  {node.frontmatter.title}
                </Link>
              </span>
            }
            description={
              <p style={{padding: "16px", lineHeight: "1.25"}}>
                {node.excerpt}
              </p>
            }
          />
        </List.Item>
      )}
    />

    <Bio/>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
