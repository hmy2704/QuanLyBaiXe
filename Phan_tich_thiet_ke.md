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


<p align="center">
  <img src="images/uml_bai_xe.PNG" width="400">
</p>


6.1.2 Biểu đồ Usecase phân rã

Usecase phân rã ghi xe vào


<p align="center">
  <img src="images/uml_xe_vao.PNG" width="400">
</p>


Usecase phân rã ghi xe ra


<p align="center">
  <img src="images/uml_xe_ra.PNG" width="400">
</p>


Usecase phân rã quản lý vé xe


<p align="center">
  <img src="images/uml_ve_xe.PNG" width="400">
</p>


Usecase phân rã quản lý nhân viên


<p align="center">
  <img src="images/uml_nhan_vien.PNG" width="400">
</p>


usecase phân rã quản lý báo cáo


<p align="center">
  <img src="images/uml_bao_cao.PNG" width="400">
</p>


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

·
