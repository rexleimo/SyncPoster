import styles from 'styled-components';

const Section = styles.p`
    color: #3f3f3f;
    line-height: 1.75;
    font-size: 14px;
    margin: 1.5em 8px;
    letter-spacing: 0.1em;
`

export  const P = styles(Section).attrs({as:"p"})`
    text-align: justify;
`;

export  const Blockquote = styles(Section).attrs({as:"blockquote"})`
    text-align: left;
    font-style: normal;
    border-left: none;
    padding: 1em;
    border-radius: 8px;
    color: rgba(0, 0, 0, 0.5);
    background: #f7f7f7;
    margin: 2em 8px;
`;

export default Section;