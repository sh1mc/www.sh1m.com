import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Color } from "../lib/consts"
import { StaticImage } from "gatsby-plugin-image"
import { mediaMobile } from "../lib/consts"

const Header: React.FC = ({ siteTitle }) => (
    <HeaderElem>
        <Wrapper>
            <Heading>
                <HeaderLink to="/">
                    <HeaderIcon />
                    {siteTitle}
                </HeaderLink>
            </Heading>
        </Wrapper>
        <Navi>
            <NaviLink to="/">ホーム</NaviLink>
            <NaviLink to="/portfolio">私について</NaviLink>
            <NaviLink to="/links">リンク集</NaviLink>
        </Navi>
    </HeaderElem>
)

export default Header

const Icon = () => (
    <StaticImage src="../images/sh1mc_icon.jpg" width={50} alt="sh1mc's icon" />
)

const HeaderIcon = styled(Icon)`
    margin-right: 1rem;
`

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

const NaviLink = styled(Link)`
    display: inline-block;
    text-decoration: None;
    color: ${Color.text};
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background: ${Color.secondary};
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    border-radius: 0.3rem;
    box-shadow: 0.15rem 0.15rem ${Color.shadow};

    font-size: 1.3rem;
    ${mediaMobile`font-size: 1rem;`}
`

const Navi = styled.div`
    background: ${Color.tertiary};
    padding-left: 0.8rem;
    font-family: "M PLUS Rounded 1c", sans-serif;
`

const Heading = styled.h1`
    margin: 0;
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
`

const HeaderElem = styled.header`
    background: ${Color.primaly};
`

const HeaderLink = styled(Link)`
    color: ${Color.text};
    text-decoration: None;
    font-size: 2.5rem;
    ${mediaMobile`font-size: 1.6rem;`}
`
