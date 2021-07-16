import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Heading1 } from "../styles/main"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <Seo title="ホーム" />
		<Heading1>欢迎光临!</Heading1>
    </Layout>
)

export default IndexPage


