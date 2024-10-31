import {SectionStyle} from "@/components/md-editor/components/Section";
import React from "react";


export const H1Style:React.CSSProperties = {
    ...SectionStyle,
    fontSize: "1.2em",
    fontWeight: "bold",
    textAlign: "center",
    display: "table",
    padding: "0 1em",
    borderBottom: "2px solid rgba(15, 76, 129, 1)",
    margin: "0 auto 1em"
}

export const H2Style:React.CSSProperties = {
    ...H1Style,
    margin: "4em auto 2em",
    padding: "0 0.2em",
    background: "rgba(15, 76, 129, 1)",
    color: "#FFF",
}

export const H3Style:React.CSSProperties = {
    ...H1Style,
    textAlign: "left",
    lineHeight: "1.2",
    fontSize: "1.1em",
    margin: "2em 8px 0.75em 0",
    paddingLeft: "8px",
    borderLeft: "3px solid rgba(15, 76, 129, 1)",
    borderBottom: 0,
}

