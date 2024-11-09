import styles from "./style.module.scss";
import clsx from "clsx";

import { FaWeixin, FaWeibo, FaRegEye, FaPenToSquare } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

function PublishItem() {
  return (
    <div className={"bg-white p-4 rounded-b"}>
      <div
        className={clsx(
          "flex",
          "items-center p-4 rounded-b",
          styles.publicItem,
        )}
      >
        <div className={"min-w-56"}>
          <time>2020-10-22</time>
        </div>
        <div
          className={
            "flex-auto grid grid-cols-[6.25rem_1fr_10rem_5rem] items-center"
          }
        >
          <div className={"relative"}>
            <div className={"relative w-20 h-20 bg-amber-300"}></div>
          </div>
          <div className={"relative"}>
            <h2>我爱你亲爱的菇凉</h2>
            <div className={"mt-2"}>
              <h3 className={"text-medium"}>平台同步状态</h3>
              <div className={"flex flex-row gap-1 mt-1 text-gray-400"}>
                <p className={"text-sm"}>
                  <FaWeixin />
                </p>
                <p>
                  <FaWeibo />
                </p>
              </div>
            </div>
          </div>
          <div className={"relative flex flex-col justify-end text-sm"}>
            <h2>站点数据</h2>
            <p className={"flex flex-row gap-1 mt-1 items-center text-sm"}>
              <span className={"text-gray-400"}>
                <FaRegEye />
              </span>
              <span>：100</span>
            </p>
          </div>
          <div className={clsx("relative", styles.publicUntil)}>
            <div className={"mt-1"}>
              <Tooltip showArrow={true} content="修改" placement={"bottom"}>
                <Button isIconOnly={true} variant={"ghost"} size={"sm"}>
                  <FaPenToSquare />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishItem;
