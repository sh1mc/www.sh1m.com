import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Color } from "../lib/consts"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <HeaderElem>
	<Wrapper>
	  <Heading>
        <HeaderLink to="/">
		  <Icon />
          {siteTitle}
        </HeaderLink>
	  </Heading>
	</Wrapper>
  </HeaderElem>
)

const Icon = () => (
	<StaticImage
		src="../images/sh1mc_icon.jpg"
		width={50}
		alt="sh1mc's icon"
	/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

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
      margin-bottom: 1.45rem;
`

const HeaderLink = styled(Link)`
	color: ${Color.text};
	text-decoration: None;
`
