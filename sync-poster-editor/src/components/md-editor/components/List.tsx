import {SectionStyle} from "@/components/md-editor/components/Section";
import React from "react";

export const OlStyle: React.CSSProperties = {
    ...SectionStyle,
    paddingLeft: "1em",
    listStyleType: "decimal",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: 0,
    paddingInlineEnd: 0,
    paddingInlineStart: 40,
    unicodeBidi: "isolate"
};

export const LiStyle: React.CSSProperties = {
    ...SectionStyle,
    paddingLeft: "1em",
    unicodeBidi: "isolate",
    textIndent: "-1em",
    display: "block",
    margin: "0.2em 8px"
}
