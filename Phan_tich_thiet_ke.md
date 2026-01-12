Phân tích thiết kế hệ thống Quản lý bãi xe

I. Tổng quan hệ thống

1.1 Mô tả hệ thống

Hệ thống Quản lý Bãi gửi xe được xây dựng nhằm hỗ trợ việc ghi nhận, quản lý và xử lý
thông tin gửi xe một cách chính xác, nhanh chóng và hiệu quả. Hệ thống cho phép
nhân viên bãi xe thực hiện các thao tác liên quan đến việc ghi nhận xe vào bãi,
xe ra khỏi bãi, quản lý vé gửi xe, quản lý nhân viên cũng như lập các báo cáo
thống kê phục vụ công tác quản lý.

Khi có phương tiện vào bãi gửi, nhân viên bãi xe thực hiện nhập các thông tin cần thiết của xe (như loại xe, biển số…). Hệ thống sẽ tự động cấp vé gửi xe cho phương tiện và ghi lại thời điểm xe bắt đầu gửi. Thông tin thời gian gửi xe được lưu trữ trong hệ thống nhằm phục vụ cho việc tính thời gian và chi phí gửi xe khi phương tiện rời khỏi bãi.

Khi phương tiện ra khỏi bãi gửi, nhân viên nhập mã vé gửi xe vào hệ thống. Dựa trên thông tin thời gian xe vào bãi đã được lưu trước đó, hệ thống sẽ tính toán thời gian gửi xe và tự động tính phí gửi xe theo quy định. Kết quả tính phí được hiển thị để nhân viên thông báo cho người gửi xe và hoàn tất quá trình trả xe

Hệ thống cho phép quản lý toàn bộ vé gửi xe, bao gồm:

* Thêm mới vé gửi xe khi phát sinh nhu cầu.
* Cập nhật trạng thái vé (đang sử dụng, đã thanh toán, hết hiệu lực…).
* Tra cứu thông tin vé gửi xe nhằm phục vụ việc kiểm soát và xử lý các tình huống phát sinh.

Hệ thống hỗ trợ quản lý thông tin nhân viên làm việc tại bãi gửi xe:

* Thêm mới, chỉnh sửa hoặc xóa thông tin nhân viên.
* Phân quyền truy cập theo vai trò nhằm đảm bảo mỗi nhân viên chỉ được thực hiện các chức năng phù hợp với
  quyền hạn của mình.

Hệ thống cung cấp các chức năng báo cáo và thống kê nhằm hỗ trợ công tác quản lý:

* Thống kê số lượng xe gửi theo thời gian.
* Thống kê doanh thu từ hoạt động gửi xe.
* Xuất báo cáo dưới các định dạng phù hợp phục vụ việc lưu trữ và đánh giá hoạt động của bãi gửi xe.

1.2 Phạm vi hệ thống

Hệ thống phục vụ cho các bãi gửi xe tại trường học, tòa nhà, khu dân cư hoặc trung tâm thương mại, bao gồm:

- Quản lý thông tin xe ra/vào
- Quản lý vé gửi xe
- Quản lý nhân viên
- Báo cáo và thống kê

II. Tác nhân tham gia

1. Người gửi xe

   - Gửi xe
   - Lấy xe
2. Nhân viên

   - Ghi nhận xe vào/ra
   - Thu phí
3. Quản lý

   - Quản lý hệ thống
   - Xem báo cáo cuối ngày
4. Quản trị hệ thống

   - Bảo trì hệ thống
   - Phân quyền

III. Yêu cầu

3.1 Yêu cầu chức năng

a. Đăng nhập hệ thống

- Người dùng nhập tài khoản và mật khẩu
- Hệ thống xác thực thông tin
- Cho phép truy cập theo quyền

b. Ghi nhận xe vào

Hệ thống cần ghi lại thời điểm xe bắt đầu vào bãi :

* Nhân viên nhập thông tin xe
* Hệ thống cấp vé gửi xe
* Lưu thời gian gửi xe

c. Ghi nhận xe ra:

* Nhân viên nhập mã vé
* Hệ thống tính thời gian gửi
* Tính phí gửi xe

d. Quản lý vé gửi

* Thêm mới vé
* Cập nhật trạng thái vé
* Tra cứu vé gửi xe

e. Quản lý nhân viên

- Thêm, sửa, xóa nhân viên
- Phân quyền truy cập

f. Báo cáo thống kê

- Thống kê số lượng xe gửi
- Thống kê doanh thu
- Xuất báo cáo

3.2 Yêu cầu phi chức năng

* Hệ thống dễ sử dụng
* Thời gian phản hồi nhanh
* Bảo mật thông tin người dùng
* Sao lưu dữ liệu định kỳ

IV. Phân tích mở rộng mục tiêu

4.1.Quản lý phương tiện ra vào bãi xe

- Ghi nhận đầy đủ thông tin xe khi vào và khi ra (biển số, loại xe, thời gian vào ra)
- Tự động xác định trạng thái xe trong bãi
- Hạn chế tình trạng thất lạc xe, nhầm lẫn xe

4.2.Quản lý vé xe và khách hàng

- Quản lý vé ngày, vé tháng
- Lưu trữ thông tin khách hàng gửi xe dài hạn
- Hỗ trợ tìm kiếm và rà soát thông tin nhanh chóng

4.3.Tính toán và quản lý phí gửi xe

- Tự động tính phí dựa trên thời gian gửi và loại xe
- Giảm sai sót trong quá trình thu phí
- Hỗ trợ thống kê doanh thu theo ngày, tháng, năm

4.4.Quản lý sức chứa và vị trí bãi xe

- Theo dõi số lượng xe hiện có trong bãi
- Cảnh báo khi bãi xe gần hoặc đã đầy

4.5.Hỗ trợ quản trị và báo cáo

- Cung cấp các báo cáo thống kê
- Hỗ trợ quản trị viên đưa ra quyết định quản lý kịp thời
- Lưu trữ dữ liệu lâu dài phục vụ kiểm tra, đối chiếu

V. Ràng buộc và mở rộng

* Hệ thống làm việc trên nền tảng web
* Thời gian phản hồi nhanh
* Bảo mật thông tin
* Sao lưu và có thể phát triển

VI. Phân tích và thiết kế đối tượng với UML

6.1 Biểu đồ UseCase tổng quát

`<img src = "images/uml_bai_xe.PNG" width = 400 />`

6.1.2 Biểu đồ Usecase phân rã

Usecase phân rã ghi xe vào

`<img src = "images/uml_xe_vao" />`

Usecase phân rã ghi xe ra

`<img src = "images/uml_xe_ra" />`

Usecase phân rã quản lý vé xe

`<img src = "images/uml_ve_xe" />`

Usecase phân rã quản lý nhân viên

`<img src = "images/uml_nhan_vien" />`

usecase phân rã quản lý báo cáo

`<img src ="uml_bao_cao" />`

6.2 Kịch bản Usecase

**Kịch bản cho use case “Đăng nhập**·

| **Thuộc tính**            | **Mô tả**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**           | Đăng nhập                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Tác nhân chính**       | Nhân viên, Quản trị viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Mức**                    | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Tiền điều kiện**      | Người dùng đã có tài khoản hợp lệ; Trang đăng nhập đã sẵn sàng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Đảm bảo tối thiểu**  | Nếu đăng nhập thất bại (sai tài khoản hoặc mật khẩu), hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Đảm bảo thành công** | Người dùng được xác thực thành công và được chuyển đến trang chủ phù hợp (trang quản trị hoặc trang nhân viên)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Kích hoạt**             | Người dùng chọn chức năng“Đăng nhập” trên trang web                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Chuỗi sự kiện chính** | 1. Người dùng chọn chức năng đăng nhập<br />2. Hệ thống hiển thị form đăng nhập <br />3. Người dùng nhập tên đăng nhập và mật khẩu <br />4. Hệ thống kiểm tra tính hợp lệ dữ liệu (không để trống, đúng định dạng)<br />5. Hệ thống gửi thông tin đăng nhập đến CSDL để xác nhận <br />6. CSDL trả kết quả xác thực <br />7. Nếu thông tin đúng:<br />&nbsp;&nbsp;• Tạo phiên đăng nhập <br />&nbsp;&nbsp;• Chuyển đến trang chủ phù hợp <br />&nbsp;&nbsp;• Hiển thị thông báo “Đăng nhập thành công”<br />8. Người dùng bắt đầu sử dụng hệ thống |
| **Ngoại lệ**              | 4.a. Thông tin không hợp lệ (bỏ trống, sai định dạng)<br />&nbsp;&nbsp;4.a.1. Hệ thống hiển thị thông báo lỗi <br />&nbsp;&nbsp;4.a.2. Người dùng nhập lại thông tin <br />6.a. Sai tài khoản hoặc mật khẩu <br />&nbsp;&nbsp;6.a.1. Hệ thống thông báo “Tên tài khoản hoặc mật khẩu không đúng”<br />&nbsp;&nbsp;6.a.2. Người dùng nhập lại thông tin                                                                                                                                                                                                                                                 |

**Kịch bản use case cho "Cập nhật trạng thái vé"**


| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên use case           | Cập nhật trạng thái vé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Tác nhân chính       | Nhân viên, quản lý                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Mức                    | Mức 3 – Use case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Mô tả chức năng     | Cho phép nhân viên hoặc quản lý cập nhật trạng thái vé xe trong hệ thống quản lý bãi xe                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Tiền điều kiện      | - Hệ thống quản lý bãi xe đang hoạt động bình thường<br />- Nhân viên hoặc quản lý đã đăng nhập vào hệ thống <br />- Vé xe cần cập nhật đã tồn tại trong cơ sở dữ liệu                                                                                                                                                                                                                                                                                                                                                                |
| Đảm bảo tối thiểu  | Nếu cập nhật thất bại (trạng thái không hợp lệ, vé không tồn tại), hệ thống không thay đổi dữ liệu và hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Đảm bảo thành công | Trạng thái vé được cập nhật thành công và lưu vào CSDL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Chuỗi sự kiện chính | 1. Nhân viên hoặc quản lý truy cập hệ thống quản lý bãi xe<br />2. Hệ thống hiển thị giao diện quản lý vé <br />3. Tác nhân chọn vé xe cần cập nhật trạng thái <br />4. Tác nhân thực hiện thao tác xe vào hoặc ra bãi <br />5. Tác nhân chọn trạng thái mới cho vé xe <br />6. Tác nhân nhấn nút "Cập nhật trạng thái"<br />7. Hệ thống kiểm tra thông tin cập nhật <br />8. Nếu hợp lệ, hệ thống lưu trạng thái mới vào CSDL <br />9. Hệ thống thông báo cập nhật trạng thái vé thành công |
| Ngoại lệ              | 8.1. Trạng thái vé không hợp lệ:<br />- Hệ thống từ chối cập nhật <br />- Hiển thị thông báo lỗi và yêu cầu chọn lại <br />8.2. Vé xe không tồn tại:<br />- Hiển thị thông báo vé không tồn tại<br />8.3. Tác nhân hủy thao tác:<br />- Không lưu thay đổi và quay lại giao diện quản lý vé                                                                                                                                                                                                                                |


**Kịch bản use case cho "Tra cứu vé"**


| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tên Use Case           | Tra cứu vé                                                                                                                                                                                                                                                                                                                                                                                           |
| Tác nhân chính       | Nhân viên, Quản lý                                                                                                                                                                                                                                                                                                                                                                                 |
| Mức                    | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                               |
| Tiền điều kiện      | - Nhân viên hoặc quản lý đã đăng nhập vào hệ thống<br />- Cơ sở dữ liệu vé xe đã có dữ liệu                                                                                                                                                                                                                                                                                     |
| Đảm bảo tối thiểu  | Nếu không tìm thấy vé hoặc thông tin tra cứu không hợp lệ, hệ thống hiển thị thông báo và không gây lỗi                                                                                                                                                                                                                                                                           |
| Đảm bảo thành công | Hệ thống hiển thị danh sách vé phù hợp với điều kiện tra cứu                                                                                                                                                                                                                                                                                                                              |
| Chuỗi sự kiện chính | 1. Tác nhân mở chức năng tra cứu vé<br />2. Hệ thống hiển thị form tra cứu <br />3. Tác nhân nhập thông tin tra cứu <br />4. Tác nhân nhấn"Tra cứu**"**<br />5. Hệ thống kiểm tra dữ liệu nhập <br />6. Hệ thống truy vấn CSDL <br />7. Hệ thống hiển thị kết quả tra cứu phù hợp                                                                         |
| Ngoại lệ              | 5.1. Thông tin tra cứu không hợp lệ:<br />- 5.1.1. Hệ thống hiển thị thông báo lỗi <br />- 5.1.2. Yêu cầu tác nhân nhập lại thông tin tra cứu <br />7.1. Không tìm thấy vé phù hợp:<br />- 7.1.1. Hệ thống hiển thị thông báo không có kết quả tra cứu <br />7.2. Tác nhân hủy thao tác tra cứu:<br />- 7.2.1. Hệ thống quay lại giao diện quản lý vé |

**Kịch bản use case cho "Thêm nhân viên"**

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên Use Case           | Thêm nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Tác nhân chính       | Quản lý                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Mức                    | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Tiền điều kiện      | - Quản lý đã đăng nhập hệ thống<br />- Có quyền quản lý nhân viên                                                                                                                                                                                                                                                                                                                                                                                                        |
| Đảm bảo tối thiểu  | Nếu thông tin không hợp lệ hoặc nhân viên đã tồn tại, hệ thống không lưu dữ liệu và hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                      |
| Đảm bảo thành công | Nhân viên mới được thêm thành công vào hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Chuỗi sự kiện chính | 1. Quản lý truy cập chức năng quản lý nhân viên<br />2. Hệ thống hiển thị danh sách nhân viên <br />3. Quản lý chọn "Thêm nhân viên""<br />4. Hệ thống hiển thị form nhập thông tin <br />5. Quản lý nhập thông tin nhân viên <br />6. Quản lý nhấn \"Lưu"<br />7. Hệ thống kiểm tra tính hợp lệ <br />8. Hệ thống lưu thông tin vào CSDL <br />9. Hệ thống thông báo thêm thành công                                           |
| Ngoại lệ              | 7.1. Thông tin nhân viên không hợp lệ:<br />- 7.1.1. Hệ thống hiển thị thông báo lỗi <br />- 7.1.2. Yêu cầu quản lý nhập lại thông tin <br />7.2. Nhân viên đã tồn tại:<br />- 7.2.1. Hệ thống từ chối thêm nhân viên <br />- 7.2.2. Hiển thị thông báo nhân viên đã tồn tại trong hệ thống <br />9.1. Quản lý hủy thao tác thêm nhân viên:- 9.1.1. Hệ thống không lưu dữ liệu và quay lại giao diện quản lý nhân viên |
