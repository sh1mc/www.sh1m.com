import * as React from "react"
import Layout from "../components/layout"
import { Heading1, Ul, Li, A } from "../styles/main"
import Seo from "../components/seo"

const IndexPage: React.FC = () => (
    <Layout>
        <Seo title="リンク集" />
        <Heading1>リンク集</Heading1>
        <Ul>
            <Li>
                <A to="https://github.com/sh1mc">GitHub</A>
            </Li>
            <Li>
                <A to="https://twitter.com/sh1mc">Twitter</A>
            </Li>
            <Li>
                <A to="https://vrchat.com/home/user/usr_d00f79b1-9a82-49cf-b4d4-f64535646748">
                    VRChat
                </A>
            </Li>
        </Ul>
    </Layout>
)

export default IndexPage
