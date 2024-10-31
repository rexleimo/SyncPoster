import React from "react";

export const SectionStyle: React.CSSProperties = {
    color: '#3f3f3f',
    lineHeight: 1.75,
    fontSize: 14,
    margin: "1.5em 8px",
    letterSpacing: "0.1em"
}

export const PStyle: React.CSSProperties = {
    ...SectionStyle,
    textAlign: "justify"
}

export const BlockquoteStyle: React.CSSProperties = {
    ...SectionStyle,
    textAlign: "left",
    fontStyle: "normal",
    borderStyle: "none",
    padding: "1em",
    borderRadius: 8,
    color: "rgba(0, 0, 0, 0.5)",
    background: "#f7f7f7",
    margin: "2em 8px"
}

