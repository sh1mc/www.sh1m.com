import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Heading1 } from "../styles/main"

const NotFoundPage: React.FC = () => (
    <Layout>
        <Seo title="404: Not found" />
        <Heading1>404: ノット・ファウンド</Heading1>
        <p>お探しのページは存在しません！</p>
    </Layout>
)

export default NotFoundPage
