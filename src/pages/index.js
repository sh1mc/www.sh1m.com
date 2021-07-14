import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
	query {
		allMarkdownRemark {
			nodes {
				frontmatter {
					title
				}
				html
			}
		}
	}
`

const IndexPagea = ({ data }) => {
	<Layout>
		{data.allMarkdownRemark.nodes.map(node => (
			<div key={node.id}>
				<h1>{node.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: node.html }} />
			</div>
		))}
	</Layout>
}

const IndexPage = () => (
  <Layout>
	<Seo title="Portfolio" />
	<h1>ポートフォリオ</h1>
	<p></p>
	<StaticImage
	  src="../images/sh1mc_icon.jpg"
	  width={150}
	  quality={95}
	  formats={["AUTO", "WEBP", "AVIF"]}
	  alt="sh1mc's icon"
	/>
  </Layout>
)

export default IndexPagea
