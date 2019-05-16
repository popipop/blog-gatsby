import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout';
import Bio from '../components/bio';

const Post = ({data}) => {
  const { title, date, excerpt } = data.markdownRemark.frontmatter
  const __html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <Bio />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      html
      excerpt
    }
  }
`

export default Post