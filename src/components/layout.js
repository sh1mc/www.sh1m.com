import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
import { Color } from "../lib/consts"
import { Helmet } from "react-helmet"
import "./layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: "ja",
                }}
            />
            <Root>
                <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
                <Wrapper>
                    <main>{children}</main>
                </Wrapper>
                <Footer />
            </Root>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.5rem 1.0875rem 1.45rem;
    color: ${Color.text};
    background: ${Color.secondary};
`

const Root = styled.html`
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em georgia, serif, sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    background: ${Color.background};
`
