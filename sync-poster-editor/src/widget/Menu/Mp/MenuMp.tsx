'use client'

import {Accordion, AccordionItem} from "@nextui-org/accordion";
import Link from "next/link";

function MenuMp() {
    return (
        <Accordion>
            <AccordionItem key={"content"} aria-label={"content"} title={"内容管理"}>
                <Link href={"/mp/"}>
                    草稿箱
                </Link>
                <Link href={"/mp/publish"}>
                    发表记录
                </Link>
                <Link href={"/mp/editor"}>
                    新的创作
                </Link>
            </AccordionItem>
        </Accordion>
    )
}

export default MenuMp