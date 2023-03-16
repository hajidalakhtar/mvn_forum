import Link from "next/link";

function ButtonMenu(props) {

    return (
        <div className={"cursor-pointer"}>
            <Link href={props.link} className="block p-3 rounded-lg hover:bg-gray-100">
                <div>
                    <div className="font-semibold">{props.title}</div>
                    <span className="text-sm font-light text-gray-500 ">{props.subtitle}</span>
                </div>
            </Link>
        </div>

    )

}

export default ButtonMenu