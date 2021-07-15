import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Heading1 } from "../styles/main"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
	<Layout>
		<Seo title="ホーム" />
		{data.allMarkdownRemark.nodes.map(node => (
			<div>
				<Heading1>{node.frontmatter.title}</Heading1>
				<div dangerouslySetInnerHTML={{ __html: node.html }} />
			</div>
		))}
	</Layout>
)

export default IndexPage

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


