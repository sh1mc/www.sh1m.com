import * as React from "react"
import Layout from "../components/layout"
import { Heading1, Heading2 } from "../styles/main"
import Seo from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const IndexPage: React.FC = () => (
    <Layout>
        <Seo title="ホーム" />
        <Heading1>ホーム</Heading1>
        <Welcome>欢迎光临!</Welcome>
        <Link to="/pgp.txt">PGP 公開鍵</Link>
    </Layout>
)

const Welcome = styled(Heading2)`
    font-family: "Noto Sans SC", sans-serif;
`

export default IndexPage
