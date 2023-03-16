import TitleHeader from "../../../../components/TitleHeader";
import ButtonMd from "../../../../components/button/button-md";
import Container from "../../../../components/Container";
import {useState} from "react";
import Api from "../../../../lib/api";

function Create() {

    const api = new Api()
    const [employeeNumber, setEmployeeNumber] = useState(null)
    const [unit, setUnit] = useState(null)
    const [employeeName, setEmployeeName] = useState(null)
    const [jobTitleName, setJobTitleName] = useState(null)
    const [jobLevel, setJobLevel] = useState(null)
    const [grade, setGrade] = useState(null)
    const [statusKaryawan, setStatusKaryawan] = useState(null)
    const [email, seEemail] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            employee_number: employeeNumber,
            unit: unit,
            employee_name: employeeName,
            job_title_name: jobTitleName,
            job_level: jobLevel,
            grade: grade,
            status_karyawan: statusKaryawan,
            email: email
        }
        api.postUser(data).then((res) => {
                setIsSuccess(true)
            }
        )
    }


    return (
        <Container>

            <TitleHeader title={"Create User"} category={"Master"}/>

            <form action="pages/master/attendance/user/index" className="mx-auto mt-8 mb-0 max-w-md space-y-4"
                  onSubmit={handleSubmit}>
                {isSuccess ?
                    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 "
                         role="alert">
                        <span className="font-medium">Success!</span> Data berhasil ditambahkan
                    </div>
                    : ""}
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Email</label>
                    <input
                        onChange={(e) => {
                            seEemail(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder="Enter text"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Employee Number</label>
                    <input
                        onChange={(e) => {
                            setEmployeeNumber(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder=" Employee Number"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Employee Name</label>
                    <input
                        onChange={(e) => {
                            setEmployeeName(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder="Employee Name"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Unit Bisnis</label>
                    <input
                        onChange={(e) => {
                            setUnit(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder="Unit Bisnis"
                    />
                </div>


                <div>2
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Job Title Name</label>
                    <input
                        onChange={(e) => {
                            setJobTitleName(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder="Job Title Name"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Job Level</label>
                    <input
                        onChange={(e) => {
                            setJobLevel(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder="Job Level"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900 ">Status Karyawan</label>
                    <input
                        onChange={(e) => {
                            setStatusKaryawan(e.target.value)
                        }}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                        placeholder="Enter text"
                    />
                </div>
                <button type={"submit"}>Sumbit</button>
            </form>
        </Container>

        // </div>

    )
}

export default Create