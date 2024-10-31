"use client"

import ReactMde, {Command} from 'react-mde';
import ReactMarkdown from 'react-markdown';
import {useState} from "react";
import rehypeRaw from 'rehype-raw';

import "react-mde/lib/styles/css/react-mde-all.css";
import "./styles.css";
import {
    BlockquoteStyle,
    H1Style,
    H2Style,
    H3Style,
    ImageUploader,
    LiStyle,
    OlStyle,
    PStyle
} from "@/components/md-editor/components";

const customStyles = {
    h1: ({node, ...props}) => <h1 {...props} style={H1Style}/>,
    h2: ({node, ...props}) => <h2 {...props} style={H2Style}/>,
    h3: ({node, ...props}) => <h3 {...props} style={H3Style}/>,
    p: ({node, ...props}) => <p {...props} style={PStyle}/>,
    ol: ({node, ...props}) => <ol {...props} style={OlStyle}/>,
    li: ({node, ...props}) => <li {...props} style={LiStyle}/>,
    blockquote: ({node, ...props}) => <blockquote {...props} style={BlockquoteStyle}/>
};

function MdEditor() {

    const [markdown, setMarkdown] = useState('');
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">('write');

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
                commands={{
                    "image": ImageUploader
                }}
                toolbarCommands={[
                    ['bold', 'italic', 'strikethrough'],
                    ['link', 'unordered-list', 'ordered-list', 'checked-list'],
                    ['image'],
                ]}
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



