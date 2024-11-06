import styles from './style.module.scss';
import clsx from "clsx";

function PublishItem() {
    return (
        <div className={clsx("flex", "items-center", styles.publicItem)}>
            <div className={"min-w-56"}>
                <time>2020-10-22</time>
            </div>
            <div className={"flex-auto grid grid-cols-[6.25rem_1fr]"}>
                <div className={"relative"}>

                </div>
                <div className={"relative"}>

                </div>
            </div>
        </div>
    )
}

export default PublishItem