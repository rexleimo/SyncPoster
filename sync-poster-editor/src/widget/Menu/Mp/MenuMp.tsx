"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import clsx from "clsx";
import styles from "./styles/index.module.scss";

type MenuLinkProps = {
  href: string;
  label: string;
};
const MenuLink = ({ href, label }: MenuLinkProps) => {
  return (
    <div className={"flex items-center gap-3 cursor-pointer"}>
      <span className={"w-px h-px block mr-4 mt-1"}></span>
      <Link href={href}>
        <span
          className={clsx(
            "relative inline-flex items-center",
            "text-medium text-foreground font-normal",
            "hover:opacity-80",
            "active:opacity-disabled transition-opacity",
            "w-full",
            styles.publishItemSpan,
          )}
        >
          {label}
        </span>
      </Link>
    </div>
  );
};

function MenuMp() {
  return (
    <Accordion defaultExpandedKeys={["content"]}>
      <AccordionItem key={"content"} aria-label={"content"} title={"内容管理"}>
        <ul className={"flex flex-col w-full mb-4"}>
          <div
            className={clsx(
              "flex flex-col gap-3 items-start",
              styles.publishItem,
            )}
            role={"group"}
          >
            <li className={"flex flex-col w-full first:mt-4"} role={"list"}>
              <MenuLink href={"/mp/"} label={"草稿箱"} />
            </li>
          </div>

          <div
            className={clsx(
              "flex flex-col gap-3 items-start",
              styles.publishItem,
            )}
            role={"group"}
          >
            <li className={"flex flex-col w-full first:mt-4"} role={"list"}>
              <MenuLink href={"/mp/publish"} label={"发表记录"} />
            </li>
          </div>

          <div
            className={clsx(
              "flex flex-col gap-3 items-start",
              styles.publishItem,
            )}
            role={"group"}
          >
            <li className={"flex flex-col w-full first:mt-4"} role={"list"}>
              <MenuLink href={"/mp/editor"} label={"新的创作"} />
            </li>
          </div>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}

export default MenuMp;
