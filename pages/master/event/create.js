import React, {useMemo, useState, useEffect} from "react";
import Container from "../../../components/Container";
import TitleHeader from "../../../components/TitleHeader";
import ButtonMD from "../../../components/button/button-md";
import ButtonSM from "../../../components/button/button-sm";
import Api from "../../../lib/api";
import useGetUser from "../../../hook/useUser";
import {useTable, useRowSelect} from 'react-table'
import {Send} from "lucide-react";
import {useRouter} from "next/router";


const IndeterminateCheckbox = React.forwardRef(
    ({indeterminate, ...rest}, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type="checkbox"
                       className={"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "}
                       ref={resolvedRef} {...rest} />
            </>
        )
    }
)

function Create() {
    const api = new Api()
    const Router = useRouter()
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [data, setData] = useState([])

    const columns = React.useMemo(
        () => [
            {
                Header: 'Employee Number',
                accessor: 'employee_number',
                Cell: tableProps => (
                    <b>{tableProps.row.original.employee_number}</b>
                )
            },
            {
                Header: 'Employee Name',
                accessor: 'employee_name',
            },
            {
                Header: 'Unit',
                accessor: 'unit',
            },
            {
                Header: 'Job Title Name',
                accessor: 'job_title_name',
            },

        ],
        []
    );


    const tableInstance = useTable({columns, data})
    const {isLoading, error, data: userData} = useGetUser()
    useEffect(() => {
        if (!isLoading) {
            setData(userData)
        }
    }, [isLoading, userData])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    Cell: ({row}) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedIds = selectedFlatRows.map(d => d.original.id)

        // console.log(selectedIds)
        const date = new Date(eventDate);
        const eventDateisoString = date.toISOString();
        const data = {
            event_name: eventName,
            event_date: eventDateisoString,
            participant: selectedIds
        }
        api.postEvent(data).then((res) => {
            Router.back()
            // onClick={() => }
            }
        )
    }

    return (
        <Container>
            <TitleHeader title={"Create Event"} category={"Master"}/>
            <form onSubmit={handleSubmit}>
                <div className={"grid grid-cols-2 gap-2 justify-center"}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Event
                            Name</label>
                        <input type="text"
                               onChange={(e) => {
                                   setEventName(e.target.value)
                               }}
                               className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                               placeholder="name@flowbite.com" required/>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Event
                            Date</label>
                        <input type="datetime-local"
                               onChange={(e) => {
                                   setEventDate(e.target.value)
                               }}
                               className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                               placeholder="name@flowbite.com" required/>
                    </div>
                </div>


                <div
                    className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0 	">
                            <div className={"flex justify-between"}>
                                <div>
                                    <h1>Silahkan Pilih Peserta</h1>
                                </div>
                                <div>
                                    <ButtonSM text={"Upload Excel"}/>
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

                <div className={"flex justify-end"}>
                    <ButtonMD type={"submit"} text={"Submit"} icon={<Send size={18}/>}/>
                </div>
            </form>
        </Container>

    )


}

export default Create