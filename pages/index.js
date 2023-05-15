import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { supabase } from "../components/supabaseClient";
// import moment from "moment";
const img = require("../public/bg.jpg");

import moment from "moment-timezone";

// const styling = {
//   backgroundImage: `url('${img}')`,
//   width: "100%",
//   height: "100%",
// };
// console.log(img);

// import { createClient } from "@supabase/supabase-js";

// let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const b = Swal.getHtmlContainer().querySelector("b");
//     timerInterval = setInterval(() => {
//       b.textContent = Swal.getTimerLeft();
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   },
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });

const Home = (props) => {
  const [nik, setNik] = useState("-");
  const [name, setName] = useState("-");
  const [unitBisnis, setUnitBisnis] = useState("-");
  const [attendanceDate, setAttendanceDate] = useState("-");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  // const handleCloseOpenModalSuccess = ()=>{

  // }

  const handleSubmit = async (result, err) => {
    if (!!result) {
      setIsLoading(true);
      let { data: mnc_event, error } = await supabase
          .from("mnc_event")
          .update({ attendance_at: moment().tz("Asia/Jakarta").format() })
          .eq("id", result?.text)
          .select();
      setNik(mnc_event[0].employee_number);
      setName(mnc_event[0].employee_name);
      setUnitBisnis(mnc_event[0].unit);
      setAttendanceDate(mnc_event[0].attendance_at);

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          setNik("-")
          setName("-")
          setUnitBisnis("-")
          setAttendanceDate("-")
          setIsSuccess(false);
        }, 2000);

      }, 1000);
    }




  };

  return (
      <>
        {/*  */}
        {/* <h1 className="text-3xl font-bold underline">{data}</h1>


          backgroundImage: `url(https://ik.imagekit.io/jh2scbhjww/WhatsApp_Image_2023-05-15_at_12.46.29_Qcu6CLt6H.jpeg?updatedAt=1684141149810)`,

     ""
      <p>{data}</p> */}
        {/* bg.jpg */}
        {/* <div className="container-sm "> */}
        {/* <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" */}
        {/* /> */}

        <div style={{ display: isLoading ? "flex" : "none" }} className="modal">
          <div className="modal-content">
            <div className="loader"></div>
            <div className="modal-text text-white">Loading...</div>
          </div>
        </div>

        <div style={{ display: isSuccess ? "flex" : "none" }} className="modal">
          <div className="modal-content">
            {/* <div className="loader"></div> */}
            <div className="modal-text text-white">
              <img
                  className="w-52"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iSG9pSkN1NDNRdHNoeklyWUN4T2ZDYV9WRmF6N01rakFpdTBfZ3IxIiB4MT0iMjEuMjQxIiB4Mj0iMy41NDEiIHkxPSIzOS4yNDEiIHkyPSIyMS41NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4xMDgiIHN0b3AtY29sb3I9IiMwZDcwNDQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii40MzMiIHN0b3AtY29sb3I9IiMxMTk0NWEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSG9pSkN1NDNRdHNoeklyWUN4T2ZDYV9WRmF6N01rakFpdTBfZ3IxKSIgZD0iTTE2LjU5OSw0MS40MkwxLjU4LDI2LjQwMWMtMC43NzQtMC43NzQtMC43NzQtMi4wMjgsMC0yLjgwMmw0LjAxOS00LjAxOQljMC43NzQtMC43NzQsMi4wMjgtMC43NzQsMi44MDIsMEwyMy40MiwzNC41OTljMC43NzQsMC43NzQsMC43NzQsMi4wMjgsMCwyLjgwMmwtNC4wMTksNC4wMTkJQzE4LjYyNyw0Mi4xOTMsMTcuMzczLDQyLjE5MywxNi41OTksNDEuNDJ6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJIb2lKQ3U0M1F0c2h6SXJZQ3hPZkNiX1ZGYXo3TWtqQWl1MF9ncjIiIHgxPSItMTUuNzciIHgyPSIyNi40MDMiIHkxPSI0My4yMjgiIHkyPSI0My4yMjgiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoMTM0Ljk5OSAyMS4yODcgMzguODczKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhYzc4MiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIxYjg3NiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNIb2lKQ3U0M1F0c2h6SXJZQ3hPZkNiX1ZGYXo3TWtqQWl1MF9ncjIpIiBkPSJNMTIuNTgsMzQuNTk5TDM5LjU5OSw3LjU4YzAuNzc0LTAuNzc0LDIuMDI4LTAuNzc0LDIuODAyLDBsNC4wMTksNC4wMTkJYzAuNzc0LDAuNzc0LDAuNzc0LDIuMDI4LDAsMi44MDJMMTkuNDAxLDQxLjQyYy0wLjc3NCwwLjc3NC0yLjAyOCwwLjc3NC0yLjgwMiwwbC00LjAxOS00LjAxOQlDMTEuODA3LDM2LjYyNywxMS44MDcsMzUuMzczLDEyLjU4LDM0LjU5OXoiPjwvcGF0aD4KPC9zdmc+"
              />
            </div>
          </div>
        </div>

        <div
            className=" w-100 h-screen"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(https://ik.imagekit.io/jh2scbhjww/Corporate_MPlay_Ry7G6bFbd.jpg?updatedAt=1678936345403)`,
            }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="">
            <div className="px-20  text-gray-800">
              <div className="hidden xl:flex flex-row justify-between shadow-md border rounded-md ">
                <div
                    style={{ backgroundColor: "rgba(255, 251, 251, 0.1)" }}
                    className="flex flex-col items-center justify-between w-2/4 px-4 py-2  border-r-2 border-gray-500 border-dashed rounded-l-md"
                >
                  <div className="flex-col">
                    <QrReader
                        onResult={handleSubmit}
                        className="w-80"
                        // style={{width: 1000, height:1000}}
                        // containerStyle={{height: 280,marginTop: -40, }}
                    />

                    {/* <img src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a" /> */}
                    {/* <p className="my-2 text-xs italic font-light text-gray-500">
                  Scan here to check in!
                </p>
                 */}
                    {/* <div className="text-xs mb-2 text-gray-600">
                  <span className="text-gray-500">Valid until :</span>
                  <br />
                  Monday, 28 September 2020 18:30:23
                </div> */}
                  </div>
                  <div className="text-left">
                    {/* <img src="https://ad-venture.org.uk/wp-content/uploads/2017/05/logo-placeholder.png" /> */}
                  </div>
                </div>
                <div
                    className="relative flex flex-col w-2/4"
                    style={{ backgroundColor: "rgba(255, 251, 251, 0.1)" }}
                >
                  <div className="absolute flex flex-row p-2 text-gray-800 opacity-100">
                    <div className="flex flex-col mt-7">
                      <div className="flex flex-col">
                        <p className="font-bold text-2xl text-white mt-10">
                          Nik :{" "}
                          <span className="text-2xl font-semibold text-white">
                          {nik}
                        </span>
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-2xl text-white mt-2">
                          Nama :{" "}
                          <span className="text-4xl font-semibold text-white underline">
                          {name}
                        </span>
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-2xl text-white mt-2">
                          Unit Bisnis :{" "}
                          <span className="text-2xl font-semibold text-white">
                          {unitBisnis}
                        </span>
                        </p>
                      </div>

                      {/* <div className="flex flex-col">
                    <p className="font-bold text-2xl text-white mt-2">
                      Attedance No :{" "}
                      <span className="text-2xl font-semibold text-white">-</span>
                    </p>
                  </div> */}
                      <div className="flex flex-col">
                        <p className="font-bold text-2xl text-white mt-2">
                          Attendance Date:{" "}
                          <span className="text-2xl font-semibold text-white">
                          {attendanceDate == "-"
                              ? "-"
                              : moment(attendanceDate).format(
                                  "DD-MM-YY HH:mm:ss "
                              )}
                        </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <img src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png" /> */}
                  {/* <div className="absolute p-1 bottom-24">
                <div className="flex flex-row px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
                  <span className="mr-2 font-normal text-gray-500">
                    Organizer :
                  </span>
                  <p className="font-semibold text-red-800">Banua Coder</p>
                </div>
              </div>
              <div className="absolute self-end mr-1 mt-1">
                <p className="px-4 py-2 text-2xl font-bold text-red-800 bg-white rounded-md ">
                  <span className="font-normal text-gray-500">Ticket Number :</span>
                  12
                </p>
              </div> */}
                  {/* <div className="absolute bottom-0 flex flex-col w-full h-24">
                <div className="w-full h-full bg-white opacity-75 rounded-br-md"></div>

              </div> */}
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="pb-2 text-white text-sm italic">Powered By</p>
                <p className="pb-2 text-white text-md italic">IUS STUDIO</p>
              </div>

              {/* <div className="xl:hidden flex flex-col bg-white border rounded-md shadow-md">
              <div className="py-2 px-4 flex-col flex text-center">
                <img
                  className="mx-auto"
                  src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a"
                />

              </div>
              <hr className="border-dashed border-2 border-gray-400" />
              <img src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png" />
              <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
                <p className="self-start font-bold text-gray-500">Mulai</p>
                <div className="flex text-sm justify-between my-2 md:text-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="font-bold text-red-800">Senin, 29 September 2020</p>
                </div>
                <div className="flex text-sm justify-between my-2 md:text-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="font-bold text-red-800">10:30</p>
                </div>
              </div>
              <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
                <p className="self-start font-bold text-gray-500">Selesai</p>
                <div className="flex text-sm md:text-xl justify-between my-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="font-bold text-red-800">Senin, 29 September 2020</p>
                </div>
                <div className="flex text-sm md:text-xl justify-between my-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="font-bold text-red-800">15:30</p>
                </div>
              </div>
              <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
                <p className="self-start font-bold text-gray-500">Lokasi</p>
                <div className="flex text-sm md:text-xl justify-between my-2">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="font-bold text-red-800">
                    Banua Coder Coworking Space, Palu, Sulawesi Tengah,
                    Indonesia
                  </p>
                </div>
              </div>
              <hr className="border-gray-400" />
              <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
                <p className="self-start font-bold text-white">Powered By</p>
                <p className="self-start font-bold text-white">IUS Studio</p>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        {/* </div> */}
      </>
  );
};
export default Home;



