"use client"

import ReactMde, {Command} from 'react-mde';
import ReactMarkdown from 'react-markdown';
import {useCallback, useState} from "react";
import rehypeRaw from 'rehype-raw';

import "react-mde/lib/styles/css/react-mde-all.css";
import "./styles.css";
import {Blockquote, H1, P, H2, H3, Ol, Li} from "@/components/md-editor/components";

const customStyles = {
    h1: ({node, ...props}) => <H1 {...props} />,
    h2: ({node, ...props}) => <H2 {...props} />,
    h3: ({node, ...props}) => <H3 {...props}/>,
    p: ({node, ...props}) => <P {...props} />,
    ol: ({node, ...props}) => <Ol {...props} />,
    li: ({node, ...props}) => <Li {...props} />,
    blockquote: ({node, ...props}) => <Blockquote {...props} />
};

function MdEditor() {

    const [markdown, setMarkdown] = useState('');
    const [selectedTab, setSelectedTab] = useState<"write" | "preview" | undefined>('write');

    return (
        <div className={"flex h-full"}>
            <ReactMde
                value={markdown}
                onChange={setMarkdown}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                childProps={{
                    writeButton: {
                        hidden: true
                    },
                    previewButton: {
                        hidden: true
                    },
                    textArea: {
                        style: {
                            height: "calc(100vh - 50px)"
                        }
                    }
                }}
                classes={{
                    reactMde: 'custom-mde'
                }}

            />
            <div className={"flex-auto"}>
                <div className={"min-h-[50px] preview-custom-hd"}></div>
                <div className={"p-[2em]"}>
                    <ReactMarkdown components={customStyles as any}
                                   rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default MdEditor



