import mediaQuery from "styled-media-query"
export const Color = {
    primaly: "#7bbec8",
    secondary: "white",
    tertiary: "#b7dce2",
    background: "whitesmoke",
    shadow: "silver",
    text: "#222222",
} as const

export const mediaMobile = mediaQuery.lessThan("medium")
