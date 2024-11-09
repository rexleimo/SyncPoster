import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

function Mp() {
  return (
    <div className={"relative container m-auto"}>
      <div className={"relative"}>
        <h1 className={"text-2xl"}>草稿箱子</h1>
      </div>

      <div className={"relative"}>
        <div
          className={
            "gap-2.5 bg-white rounded mt-5 text-gray-950 cursor-pointer"
          }
        >
          <Link
            href={"/mp/editor"}
            className={"h-48 flex flex-col justify-center items-center "}
          >
            <FaPlus className={"text-2xl"} />
            <span className={"text-sm"}>新的创作</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mp;
