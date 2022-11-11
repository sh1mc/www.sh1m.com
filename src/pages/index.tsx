import * as React from "react"
import Layout from "../components/layout"
import { Heading1, Heading2 } from "../styles/main"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <Seo title="ホーム" />
		<Heading1>ホーム</Heading1>
		<Heading2>欢迎光临!</Heading2>
    </Layout>
)

export default IndexPage


