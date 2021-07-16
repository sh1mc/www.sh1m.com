import * as React from "react"
import styled from "styled-components"
import { Color } from "../lib/consts"

const Footer = () => <FooterElem />

export default Footer

const FooterElem = styled.footer`
    margin-top: 2rem;
    padding-bottom: 2rem;
    background: ${Color.primaly};
	position: absolute;
	bottom: 0;
	width: 100%;
`
   
