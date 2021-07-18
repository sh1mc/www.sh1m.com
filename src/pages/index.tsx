import * as React from "react"
import Layout from "../components/layout"
import { Heading1, Heading2 } from "../styles/main"
import Seo from "../components/seo"
import { Link } from "gatsby"

const IndexPage: React.FC = () => (
    <Layout>
        <Seo title="ホーム" />
        <Heading1>ホーム</Heading1>
        <Heading2>欢迎光临!</Heading2>
        <Link to="/pgp.txt">PGP 公開鍵</Link>
    </Layout>
)

export default IndexPage
