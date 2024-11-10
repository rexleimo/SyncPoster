import MdEditor from "@/components/md-editor";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

function Editor() {
  return (
    <div className={"relative"}>
      <div className={"relative container m-auto"}>
        <MdEditor />

        <div
          className={clsx(
            "absolute bottom-0 bg-white w-full h-14 border border-solid",
            "flex items-center justify-end gap-2",
            "p-2",
          )}
        >
          <Button className={"rounded"} variant="ghost" color={"primary"}>
            保存草稿
          </Button>
          <Button className={"rounded"} variant="ghost" color={"default"}>
            发表
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
