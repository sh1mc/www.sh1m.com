import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
	query {
		allMarkdownRemark {
			nodes {
				html
				frontmatter {
					title
				}
			}
		}
	}
`

export default ({ data }) => (
	<Layout>
		{data.allMarkdownRemark.nodes.map(node => (
			<div>
				<h1>{node.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: node.html }} />
			</div>
		))}
	</Layout>
)
