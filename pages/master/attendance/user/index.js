import {useEffect, useState} from "react";
import ButtonMd from "../../../../components/button/button-md";
import TitleHeader from "../../../../components/TitleHeader";
import Container from "../../../../components/Container";
import useGetUser from "../../../../hook/useUser";

// import { supabase } from "../components/supabaseClient";

function User() {
    const {isLoading, error, data} = useGetUser()
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>

            <Container>
                {/*<nav*/}
                {/*    aria-label="Site Nav"*/}
                {/*    className="mx-auto flex w-full items-center justify-between py-4 pb-20"*/}
                {/*>*/}
                {/*    <a*/}
                {/*        href="/"*/}
                {/*        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"*/}
                {/*    >*/}
                {/*        <span className="sr-only">Logo</span>*/}
                {/*        👋*/}
                {/*    </a>*/}

                {/*    <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">*/}
                {/*        <li className="hidden lg:block">*/}
                {/*            <a className="rounded-lg px-3 py-2" href="/"> Home </a>*/}
                {/*        </li>*/}

                {/*        <li><a className="rounded-lg px-3 py-2" href=""> Projects </a></li>*/}

                {/*        <li>*/}
                {/*            <a*/}
                {/*                className="inline-flex items-center gap-2 rounded-lg px-3 py-2"*/}
                {/*                href=""*/}
                {/*                target="_blank"*/}
                {/*            >*/}
                {/*                External*/}

                {/*                <svg*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    className="h-4 w-4"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        stroke-linecap="round"*/}
                {/*                        stroke-linejoin="round"*/}
                {/*                        stroke-width="2"*/}
                {/*                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
                {/*                    ></path>*/}
                {/*                </svg>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                <TitleHeader title={"Attendance User"} category={"Master"}/>
                <div className="mb-4">
                    <ButtonMd text="Create" link={"user/create"}
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

                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Employee Number
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Employee Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Unit Bisnis
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Job Titel
                                    </th>

                                </tr>
                                </thead>
                                {isLoading ? (
                                    <h1 className="text-2xl font-bold mt-4 text-center">Loading</h1>
                                ) : (
                                    <tbody>
                                    {data.map((item) => {
                                        return (
                                            <>
                                                <tr>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        {item.employee_number}
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                        {item.employee_name}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {item.unit}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                        {item.job_title_name}
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })}
                                    </tbody>
                                )}

                            </table>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
}

export default User;
