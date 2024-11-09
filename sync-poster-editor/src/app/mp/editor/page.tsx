import MdEditor from "@/components/md-editor";

function Editor() {
  return (
    <div className={"relative"}>
      <div className={"relative container m-auto"}>
        <MdEditor />

        <div
          className={
            "absolute bottom-0 bg-white w-full h-14 border border-solid"
          }
        ></div>
      </div>
    </div>
  );
}

export default Editor;
