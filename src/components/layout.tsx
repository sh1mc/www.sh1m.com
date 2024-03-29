import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { mediaMobile } from "../lib/consts"

import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
import { Color } from "../lib/consts"
import "./layout.css"

const Layout: React.FC = ({ children }) => {
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
    padding-right: 2rem;
    padding-left: 2rem;
`

const Root = styled.html`
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    background: ${Color.background};
    position: relative;
    min-height: 100vh;
	font-family: 'M PLUS Rounded 1c', sans-serif;
	font-size: 1.2rem;
    ${mediaMobile`font-size: 1rem;`}
`
