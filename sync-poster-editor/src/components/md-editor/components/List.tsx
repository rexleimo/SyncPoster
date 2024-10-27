import styles from 'styled-components';
import Section from "@/components/md-editor/components/Section";

export const Ol = styles(Section).attrs({as:"ol"})`
    padding-left: 1em;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
`;

export const Li = styles(Section).attrs({as:"ol"})`
    padding-left: 1em;
    unicode-bidi: isolate;
    text-indent: -1em;
    display: block;
    margin: 0.2em 8px;
`;