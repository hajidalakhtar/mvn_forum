/* eslint-disable no-undef */
import axios from "axios";
// import { useErrorStore } from '../../store/error';
// import Auth from '../auth';

export default class Api {
    constructor() {
        this.api_url = "http://localhost:3000/api/";
    }

    init = () => {
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };

        // headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjY5ODY0MjAwLCJuYmYiOjE2Njk4NjQyMDAsImp0aSI6InVidENhaFJueUhtb3lIZEIiLCJzdWIiOiI2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.1dyeHroTDrK3Z-R4rObKZtJZDC0Lirz0p9w4OqxQgLk`;
        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });

        return this.client;
    };
    getEvent = () => {
        return this.init()
            .get(`event`)
            .then((response) => {
                return response.data.data
            })
            .catch((error) => {
            });
    };

    getEventById = (id) => {
        return this.init()
            .get(`event?id=${id}`)
            .then((response) => {
                return response.data.data
            })
            .catch((error) => {
            });
    }

    getUser = () => {
        return this.init()
            .get(`user`)
            .then((response) => {
                return response.data.data
            })
            .catch((error) => {
            });
    };


    postUser = (data) => {
        return this.init()
            .post(`user`, JSON.stringify(data))
            .catch((error) => {
                console.log(data)
            });
    };

    postEvent = (data) => {
        return this.init()
            .post(`event`, JSON.stringify(data))
            .catch((error) => {
                console.log(data)
            });
    };


}