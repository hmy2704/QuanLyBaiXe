// frontend/common.js

async function callApi(endpoint, method = 'GET', bodyData = null) {

    const BASE_URL = 'http://localhost:3000/api';

    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };


        if (bodyData) {
            options.body = JSON.stringify(bodyData);
        }

        const response = await fetch(`${BASE_URL}/${endpoint}`, options);


        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Lỗi kết nối API:", error);
        return { success: false, message: "Không thể kết nối đến máy chủ!" };
    }
}