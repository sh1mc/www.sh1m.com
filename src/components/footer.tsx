import * as React from "react"
import styled from "styled-components"
import { Color } from "../lib/consts"

const Footer = () => <FooterElem>
    <Copyright>
        Copyright 2021-2022 sh1mc
    </Copyright>
</FooterElem>

export default Footer

const FooterElem = styled.footer`
    background: ${Color.primaly};
    position: absolute;
    bottom: 0;
    width: 100%;
`
const Copyright = styled.div`
    text-align: right;
    padding-top: 1rem;
`
