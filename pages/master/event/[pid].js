import {useRouter} from "next/router";
import Container from "../../../components/Container";
import TitleHeader from "../../../components/TitleHeader";
import ButtonSM from "../../../components/button/button-sm";
import ButtonMD from "../../../components/button/button-md";
import {Send} from "lucide-react";
import {useFindByIdEvent} from "../../../hook/useEvent";
import {useEffect, useState, useMemo} from "react";
import moment from "moment-timezone";
import {useRowSelect, useTable} from "react-table";
import useGetUser from "../../../hook/useUser";
import LoadingScreen from "../../../components/loading";


function detail() {
    const router = useRouter()
    const {pid} = router.query

    const [data, setData] = useState([])

    const columns = useMemo(
        () => [
            {
                Header: 'Employee Number',
                accessor: 'employee_number',
                Cell: tableProps => (
                    <b>{tableProps.row.original.participant.employee_number}</b>
                )
            },
            {
                Header: 'Employee Name',
                accessor: 'employee_name',
                Cell: tableProps => (
                    <b>{tableProps.row.original.participant.employee_name}</b>
                )
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                Cell: tableProps => (
                    <b>{tableProps.row.original.participant.unit}</b>
                )
            },
            {
                Header: 'Job Title Name',
                accessor: 'job_title_name',
                Cell: tableProps => (
                    <b>{tableProps.row.original.participant.job_title_name}</b>
                )
            },

        ],
        []
    );


    const tableInstance = useTable({columns, data})

    const {isLoading, error, data: userData} = useFindByIdEvent(pid)
    if (error) {
        return <div>Error: {error.message}</div>;
    }


    useEffect(() => {
        if (!isLoading) {
            setData(userData.ParticipantEvent)
        }
    }, [isLoading, userData])
    if (isLoading) {
        return <LoadingScreen/>
    }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance


    return (
        <Container>
            <TitleHeader title={"Detail Event"} category={"Master"}/>

            <div className={"flex justify-end gap-2"}>

                <ButtonSM text={"Edit"} icon={<Send/>}/>
                <ButtonSM text={"Send Email"} icon={<Send/>}/>

            </div>

            <div className={"border border-1 p-4 rounded mb-3 mt-2"}>

                <div className={"grid grid-cols-12 justify-center"}>


                    <div className={"col-span-12"}>
                        <div className={"grid grid-cols-3 gap-2 justify-center"}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Event
                                    Name</label>
                                <p className={"text-lg font-bold"}>{userData.event_name}</p>
                            </div>

                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Event
                                    Date</label>
                                <p className={"text-lg font-bold"}>{moment(userData.event_date).format(
                                    "DD-MM-YY HH:mm")}</p>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                                <p className={"text-lg font-bold"}>Inews tower lantai 23 jam 23</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0 	">
                        <div className={"flex justify-between"}>
                            <div>
                                <h1>Peserta</h1>
                            </div>

                        </div>

                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse " {...getTableProps()}>
                            <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}
                                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}

                            </thead>

                            <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap px-6 py-2 ">
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </Container>
    )
}

export default detail