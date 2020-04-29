import axios from 'axios';

let http1cancel = null;
export const axiosg = {
    get: async (url, params, response_func, err_func) => {
        try {
            const response = await axios({
                method: "get",
                url: url,
                params: params
            });
            response_func(response)
        } catch (error) {
            if (err_func !== undefined) {
                err_func(error);
            }
        }
    },
    post: async (url, params, response_func, err_func) => {
        try {
            const response = await axios({
                method: "post",
                url: url,
                params: params
            });
            response_func(response)
        } catch (error) {
            if (err_func !== undefined) {
                err_func(error);
            }
        }
    },
    get1: async (url, params, response_func, err_func) => {
        try {
            if (http1cancel !== null) {
                http1cancel();
                http1cancel = null;
            }
            params["cancelToken"] = new axios.CancelToken((c) => {
                http1cancel = c;
            });
            const response = await axios({
                method: "get",
                url: url,
                params: params,
                cancelToken: new axios.CancelToken((c) => {
                    http1cancel = c;
                })
            });
            response_func(response)
        } catch (error) {
            if (err_func !== undefined) {
                err_func(error);
            }
        }
    },
    post1: async (url, params, response_func, err_func) => {
        try {
            if (http1cancel !== null) {
                http1cancel();
                http1cancel = null;
            }
            const response = await axios({
                method: "post",
                url: url,
                params: params,
                cancelToken: new axios.CancelToken((c) => {
                    http1cancel = c;
                })
            });
            http1cancel = null;
            response_func(response)
        } catch (error) {
            if (err_func !== undefined) {
                err_func(error);
            }
        }
    },
    // file: async (url, params, response_func, err_func) => {
    //     try {
    //         const response = await axios({
    //             method: "post",
    //             url: url,
    //             params: params,
    //             headers: {"Content-Type": "multipart/form-data","Access-Control-Allow-Origin":"*"}
    //         });
    //         response_func(response)
    //     } catch (error) {
    //         global.func.Yea_show_toast("toast-error", "网络错误", 3000);
    //         if (err_func !== undefined)
    //             err_func(error);
    //     }
    // },
    file: async (url, params, data, progress_func, response_func, err_func, cancel_func) => {
        try {
            const response = await axios({
                method: "post",
                url: url,
                params: params,
                data: data,
                headers: {"Content-Type": "multipart/form-data"},
                onUploadProgress: progress_func,
                withCredentials: true,
                cancelToken: new axios.CancelToken((c) => {
                    cancel_func(c)
                })
            });
            response_func(response)
        } catch (error) {
            if (err_func !== undefined) {
                err_func(error);
            }
        }
    },
};