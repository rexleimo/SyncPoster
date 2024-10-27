import styles from 'styled-components';
import Section from "@/components/md-editor/components/Section";

const H1 = styles(Section).attrs({as: "h1"})`
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    display: table;
    padding: 0 1em;
    border-bottom: 2px solid rgba(15, 76, 129, 1);
    margin: 0 auto 1em;
`;

export const H2 = styles(H1).attrs({as: "h2"})`
    margin: 4em auto 2em;
    padding: 0 0.2em;
    background: rgba(15, 76, 129, 1);
    color: #FFF;
`;

export const H3 = styles(H1).attrs({as: "h3"})`
    text-align: left;
    line-height: 1.2;
    font-size: 1.1em;
    margin: 2em 8px 0.75em 0;
    padding-left: 8px;
    border-left: 3px solid rgba(15, 76, 129, 1);
    border-bottom: 0;
`

export default H1;