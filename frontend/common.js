async function callApi(endpoint, method = 'GET', bodyData = null) {
    // Không dùng IP cứng nữa, lấy trực tiếp biến từ env.js
    const url = `${API_BASE_URL}/${endpoint}`;

    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'x-user-role': localStorage.getItem('role') || '' // Tự động gửi quyền
            }
        };

        if (bodyData) options.body = JSON.stringify(bodyData);

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.error("Lỗi API:", error);
        return { success: false, message: "Lỗi kết nối!" };
    }
}