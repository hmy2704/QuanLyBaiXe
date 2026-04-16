import cv2
import easyocr
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Cho phép Web từ cổng 3000 gọi sang cổng 5001

# Khởi tạo Reader (Dùng CPU)
reader = easyocr.Reader(['en'], gpu=False)
UPLOAD_FOLDER = 'uploads'


@app.route('/ocr', methods=['POST'])
def ocr_api():
    if 'image' not in request.files:
        return jsonify({"error": "No image"}), 400

    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    file = request.files['image']
    path_anh = os.path.join(UPLOAD_FOLDER, 'temp_scan.jpg')
    file.save(path_anh)

    # 1. Nhận diện chữ từ ảnh
    # kết quả trả về: [[bbox, text, prob], ...]
    results = reader.readtext(path_anh)

    # 2. In ra Terminal để My theo dõi (Debug)
    print("\n" + "="*30)
    print(f"--- Đang xử lý ảnh mới ---")

    bien_so_full = ""
    for (bbox, text, prob) in results:
        # Loại bỏ khoảng trắng và ký tự đặc biệt, chỉ giữ chữ và số
        clean_text = "".join(e for e in text if e.isalnum()).upper()
        if clean_text:
            print(
                f"AI tìm thấy vùng chữ: {clean_text} (Độ tin cậy: {prob:.2f})")
            bien_so_full += clean_text

    # 3. Trả kết quả về cho Web
    print(f"KẾT QUẢ CUỐI CÙNG: {bien_so_full}")
    print("="*30)

    # Nếu không đọc được gì, trả về null để Web báo lỗi "Thử lại"
    if not bien_so_full:
        return jsonify({"bien_so": None})

    return jsonify({"bien_so": bien_so_full})


if __name__ == "__main__":
    app.run(port=5001, debug=False)
