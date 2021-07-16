import mediaQuery from "styled-media-query"
import styled from "styled-components"
import { Color } from "../lib/consts"

export const Body = styled.body`
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
`

const Common = `
	margin-left: 0;
	margin-right: 0;
	margin-top: 0;
	padding-bottom: 0;
	padding-left: 0;
	padding-right: 0;
	padding-top: 0;
	margin-bottom: 1.45rem;
`

const Heading = `
	${Common}
	color: ${Color.text};
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: bold;
	text-rendering: optimizeLegibility;
`

const mediaMobile = mediaQuery.lessThan("medium");

export const Heading1 = styled.h1`
    ${Heading}
    line-height: 1.1;
    font-size: 2.25rem;
	${mediaMobile`font-size:1.7rem`}
`

export const Heading2 = styled.h2`
    ${Heading}
    font-size: 1.62671rem;
    line-height: 1.1;
`

export const Heading3 = styled.h3`
    ${Heading}
    font-size: 1.38316rem;
    line-height: 1.1;
`

export const Heading4 = styled.h3`
    ${Heading}
    font-size: 1rem;
    line-height: 1.1;
`

export const Heading5 = styled.h3`
    ${Heading}
    font-size: 0.85028rem;
    line-height: 1.1;
`

export const Heading6 = styled.h3`
    ${Heading}
    font-size: 0.78405rem;
    line-height: 1.1;
`

export const Image = styled.img`
    border-style: none;
    max-width: 100%;
    ${Common}
`
