"use client"

import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import {useState} from "react";
import rehypeRaw from 'rehype-raw';

import "react-mde/lib/styles/css/react-mde-all.css";
import "./styles.css";

const customStyles = {
    h1: ({ node, ...props }) => (
        <h1 style={{ color: 'red', fontSize: '2em' }} {...props} />
    ),
};

function MdEditor(){

    const [markdown, setMarkdown] = useState('');
    const [selectedTab, setSelectedTab] = useState<"write" | "preview" | undefined>('write');

    return (
        <div className={"flex"}>
            <ReactMde
                value={markdown}
                onChange={setMarkdown}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                childProps={{
                    writeButton:{
                        hidden:true
                    },
                    previewButton: {
                        hidden:true
                    },
                }}
                classes={{
                    reactMde: 'custom-mde'
                }}
            />
            <div className={"flex-auto"}>
                <div className={"min-h-[50px] preview-custom-hd"}></div>
                <ReactMarkdown components={customStyles as any} rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export  default  MdEditor



