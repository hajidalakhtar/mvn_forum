export default function ButtonMD(props) {
    if (props.type === "submit") {
        return (
            <button type="submit"
                    className="inline-flex items-center gap-2 rounded border border-dark px-8 py-3 text-dark  focus:outline-none focus:ring "
            >
                <span className="text-sm font-medium"> {props.text} </span>
                {props.icon}
            </button>
        )
    } else {

        return (
            <a className="inline-flex items-center gap-2 rounded border border-dark px-8 py-3 text-dark  focus:outline-none focus:ring "
               href={props.link}
            >
                <span className="text-sm font-medium"> {props.text} </span>
                {props.icon}
            </a>
        )
    }

}
