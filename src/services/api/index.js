import axios from "axios";

// import { store } from "../../store/store";
// import {
//     sessionRefreshTokenSelector,
// } from "../../routes/auth/auth.selectors";
// import { clearModalState } from "../../components/modal/modal.actions";
// import { clearSession, updateToken } from "../../routes/auth/auth.actions";

// import { BASE_URL } from "./api.config";

// multipart
export const formDataHeaders = {
    accept: "*/*",
    ContentType: "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
};

// for multiple requests
let isRefreshing = false;
let failedQueue = [];

// failed requests queue
const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

const apiClient = axios.create({
    baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
    (config) => {
        // const reduxStore = store.getState();
        // const token = sessionAccessTokenSelector(reduxStore);
        // const contentType = config.ContentType
        //     ? config.ContentType
        //     : "application/json";
        // if (token) {
        //     config.headers["Authorization"] = "Bearer " + token;
        // }
        // (config.headers["Access-Control-Allow-Credentials"] = true),
        //     (config.headers["Content-Type"] = contentType);
        // return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    }
    // function (error) {
    //     const originalRequest = error.config;
    //     if (error.response.status === 403 && !originalRequest._retry) {
    //         if (isRefreshing) {
    //             return new Promise(function (resolve, reject) {
    //                 failedQueue.push({ resolve, reject });
    //             })
    //                 .then((token) => {
    //                     originalRequest.headers["Authorization"] =
    //                         "Bearer " + token;
    //                     return axios(originalRequest);
    //                 })
    //                 .catch((err) => {
    //                     return Promise.reject(err);
    //                 });
    //         }

    //         originalRequest._retry = true;
    //         isRefreshing = true;

    //         const reduxStore = store.getState();
    //         const refreshToken = sessionRefreshTokenSelector(reduxStore);

    //         axios.defaults.headers.common["Authorization"] =
    //             "Bearer " + refreshToken;

    //         return new Promise(function (resolve, reject) {
    //             axios
    //                 .post(BASE_URL + "auth/refresh_token")
    //                 .then((res) => {
    //                     if (res.status === 201) {
    //                         store.dispatch(updateToken(res.data));
    //                         axios.defaults.headers.common["Authorization"] =
    //                             "Bearer " + res.data.access_token;
    //                         originalRequest.headers["Authorization"] =
    //                             "Bearer " + res.data.access_token;
    //                         processQueue(null, res.data.access_token);
    //                         resolve(axios(originalRequest));
    //                     }
    //                 })
    //                 .catch((err) => {
    //                     processQueue(err, null);
    //                     reject(err);
    //                     store.dispatch(clearSession());
    //                     store.dispatch(clearModalState());
    //                 })
    //                 .finally(() => {
    //                     isRefreshing = false;
    //                 });
    //         });
    //     }
    //     return Promise.reject(error);
    // }
);

const { get, post, put, delete: destroy } = apiClient;

export { get, post, put, destroy };
