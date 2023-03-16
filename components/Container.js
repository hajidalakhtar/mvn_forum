function Container(props) {

    return (
        <div
            className=" mt-12 relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 lg:mb-8 lg:max-w-4xl ">
            {props.children}
        </div>
        // <h1>ads</h1>
    )
}


export default Container