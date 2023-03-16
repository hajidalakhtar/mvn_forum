import {useEffect, useState} from "react";
import ButtonMd from "../../../components/button/button-md";
import TitleHeader from "../../../components/TitleHeader";
import Container from "../../../components/Container";
import {Edit, Eye, Trash2} from "lucide-react";
import moment from "moment-timezone";
import useEvents from "../../../hook/useEvent";
import {useGetEvents} from "../../../hook/useEvent";
import Link from "next/link";


function Event() {
    const {isLoading, error, data} = useGetEvents()
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Container>
                <TitleHeader title={"Master Event"} category={"Master"}/>
                <div className="flex justify-start	 mb-4">

                    <ButtonMd text="Create" link={"event/create"}
                              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-plus-lg"
                                         viewBox="0 0 16 16">
                                  <path fill-rule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                              </svg>}/>

                </div>
                <div
                    className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            {/*{isLoading ? "Loading..." : JSON.stringify()}*/}
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Event Name
                                    </th>

                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Total perserta
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Tanggal acara
                                    </th>

                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Jam acara
                                    </th>

                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Action
                                    </th>

                                </tr>
                                </thead>
                                <tbody>
                                {isLoading ? "Loading..." :
                                    data.map((item, index) => {
                                        return (
                                            <tr>
                                                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap px-4 py-2  text-left text-blueGray-700 ">
                                                    {item.event_name}
                                                </th>
                                                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap px-4 py-2  text-left text-blueGray-700 ">
                                                    0
                                                </th>
                                                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap px-4 py-2  text-left text-blueGray-700 ">
                                                    {moment(item.event_date).format('DD MMMM YYYY')}
                                                </th>

                                                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap px-4 py-2  text-left text-blueGray-700 ">
                                                    {moment(item.event_date).format('HH:mm:ss')}
                                                </th>

                                                <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap px-4 py-2  text-left text-blueGray-700 ">
                                                    <div className={"flex justify-start gap-3"}>
                                                        <div className={"cursor-pointer"}>
                                                            <Link href={"event/" + item.id}>
                                                                <Eye/>
                                                            </Link>
                                                        </div>
                                                        <Edit/>
                                                        <Trash2/>
                                                    </div>

                                                </th>
                                            </tr>
                                        )

                                    })}

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

    export default Event;

