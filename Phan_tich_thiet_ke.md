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
=======================

## II. Tác nhân tham gia

II. Tác nhân tham gia

1.Người gửi xe

* Gửi xe

- Lấy xe

1. Nhân viên

   - Ghi nhận xe vào/ra
   - Thu phí
2. Quản lý

   - Quản lý hệ thống
   - Xem báo cáo cuối ngày
3. Quản trị hệ thống

   - Bảo trì hệ thống
   - Phân quyền

III. Yêu cầu

III. Yêu cầu phi chức năng
==============================

II. Yêu cầu phi chức năng
2.1 Hiệu năng
2.2 Độ tin cậy
=================

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

a. Khả năng sử dụng

- giao diện trực quan, dễ sử dụng
- Nhân viên mới có thể làm quen với hệ thống một cách dễ dàng
- Hiển thị trạng thái bãi xe (còn trống hay đã hết)
- Ngôn ngữ hỗ trợ: tiếng Việt, Tiếng Anh
- Thông báo lỗi rõ ràng dễ hình dung.

b. Hiệu suất

- Thời gian phản hồi: <= 2 giây cho các check in/ check-out
- Thời gian nhận diện biển số xe: <= 3 giây
- Xử lý đồng thời: tối thiểu không quá 50 giao dịch/ 1 giây.
- Tải trang web: <=5 giây

c. Độ tin cậy

- Tính khả dụng:
- Thời gian trung bình giữa hai lỗi (MTBF):
- Thời gian trung bình để sửa lỗi (MTTR):
- Độ chính xác:
- Tỷ lệ lỗi: <=1 lỗi nghiêm trọng/tháng

d. Độ bảo mật

- Mã hóa dữ liệu thanh toán chuẩn PCIDSS:
- Mã hóa thông tin cá nhân khách hàng
- Xác thực đa yếu tố cho tài khoản quản trị
- Phân quyền rõ ràng: Quản trị, nhân viên
- tuân thủ Luật An toàn thông tin mạng và nghị điịnh 13/2023/NĐ-CP và bảo vệ dữ liệu cá nhân
- Camera giám sát 24/7 và lưu trữ giữ liệu 30 ngày

e. Độ an toàn

- Hệ thống phòng cháy chữa cháy đạt chuẩn PCCC
- Hệ thống chiểu sáng
- Nút khẩn cấp tại các vị trí quan trọng

f. Khả năng hỗ trợ

- Log hệ thống chi tiết, dễ tra cứu
- Code tuân thủ:
- Tài liệu API đầy đủ:
- Comment code bằng tiếng việt hoặc anh

g. Ràng buộc về thiết kế

- Backend:Javascript, php
- Frontend:HTML, CSS, React.sj
- Database: MySQL
- khác: Visual Paradigm
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



## USE CASE: ĐĂNG KÝ

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Đăng ký                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Tác nhân chính**           | Người dùng (Khách hàng hoặc Quản trị viên), Nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Người chịu trách nhiệm** | Quản trị hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Tiền điều kiện**          | Tài khoản chưa tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Đảm bảo tối thiểu**      | Nếu đăng ký thất bại (tài khoản đã tồn tại), hệ thống hiển thị thông báo lỗi và yêu cầu người dùng nhập lại                                                                                                                                                                                                                                                                                                                                                                                                |
| **Đảm bảo thành công**     | Người dùng đăng ký thành công và được chuyển đến trang chủ phù hợp (trang quản trị hoặc trang khách hàng)                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Kích hoạt**                 | Người dùng chọn chức năng**“Đăng ký”** trên trang web                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Chuỗi sự kiện chính**     | 1. Người dùng chọn chức năng “Đăng ký” trên hệ thống`<br>`2. Hệ thống hiển thị form đăng ký`<br>`3. Người dùng nhập tên đăng nhập, mật khẩu và nhập lại mật khẩu`<br>`4. Hệ thống kiểm tra tính hợp lệ của dữ liệu (không để trống, đúng định dạng, tài khoản chưa tồn tại)`<br>`5. Hệ thống gửi thông tin đăng ký đến CSDL để xác nhận`<br>`6. Cơ sở dữ liệu trả kết quả xác thực`<br>`7. Người dùng bắt đầu sử dụng hệ thống |
| **Ngoại lệ**                  | **4.a. Thông tin đăng ký không hợp lệ** (bỏ trống, sai định dạng)`<br>`4.a.1. Hệ thống hiển thị thông báo lỗi`<br>`4.a.2. Người dùng nhập lại thông tin                                                                                                                                                                                                                                                                                                                                            |

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
| Chuỗi sự kiện chính | 1. Tác nhân mở chức năng tra cứu vé<br />2. Hệ thống hiển thị form tra cứu <br />3. Tác nhân nhập thông tin tra cứu <br />4. Tác nhân nhấn"Tra cứu**"**<br />5. Hệ thống kiểm tra dữ liệu nhập <br />6. Hệ thống truy vấn CSDL <br />7. Hệ thống hiển thị kết quả tra cứu phù hợp                                                                               |
| Ngoại lệ              | 5.1. Thông tin tra cứu không hợp lệ:<br />- 5.1.1. Hệ thống hiển thị thông báo lỗi <br />- 5.1.2. Yêu cầu tác nhân nhập lại thông tin tra cứu <br />7.1. Không tìm thấy vé phù hợp:<br />- 7.1.1. Hệ thống hiển thị thông báo không có kết quả tra cứu <br />7.2. Tác nhân hủy thao tác tra cứu:<br />- 7.2.1. Hệ thống quay lại giao diện quản lý vé |

**Kịch bản use case cho "Thêm nhân viên"**

| Thuộc tính                                   | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên Use Case                                  | Thêm nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Tác nhân chính                              | Quản lý                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Mức                                           | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Tiền điều kiện                             | - Quản lý đã đăng nhập hệ thống<br />- Có quyền quản lý nhân viên                                                                                                                                                                                                                                                                                                                                                                                                        |
| Đảm bảo tối thiểu                         | Nếu thông tin không hợp lệ hoặc nhân viên đã tồn tại, hệ thống không lưu dữ liệu và hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                      |
| Đảm bảo thành công                        | Nhân viên mới được thêm thành công vào hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Chuỗi sự kiện chính                        | 1. Quản lý truy cập chức năng quản lý nhân viên<br />2. Hệ thống hiển thị danh sách nhân viên <br />3. Quản lý chọn "Thêm nhân viên""<br />4. Hệ thống hiển thị form nhập thông tin <br />5. Quản lý nhập thông tin nhân viên <br />6. Quản lý nhấn \"Lưu"<br />7. Hệ thống kiểm tra tính hợp lệ <br />8. Hệ thống lưu thông tin vào CSDL <br />9. Hệ thống thông báo thêm thành công                                           |
| Ngoại lệ                                     | 7.1. Thông tin nhân viên không hợp lệ:<br />- 7.1.1. Hệ thống hiển thị thông báo lỗi <br />- 7.1.2. Yêu cầu quản lý nhập lại thông tin <br />7.2. Nhân viên đã tồn tại:<br />- 7.2.1. Hệ thống từ chối thêm nhân viên <br />- 7.2.2. Hiển thị thông báo nhân viên đã tồn tại trong hệ thống <br />9.1. Quản lý hủy thao tác thêm nhân viên:- 9.1.1. Hệ thống không lưu dữ liệu và quay lại giao diện quản lý nhân viên |
| **Kịch bản use case Xóa nhân viên** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

| Thuộc tính                | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên use case               | Xóa nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Tác nhân chính           | Quản trị                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Mức                        | 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Người chịu trách nhiệm | Quản trị hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Tiền điều kiện          | Quản trị đã đăng nhập thành công và đang ở giao diện "Quản lý nhân viên"                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Đảm bảo tối thiểu      | Nhân viên không bị xóa nếu Quản trị hủy xác nhận; dữ liệu hệ thống vẫn toàn vẹn                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Đảm bảo thành công     | Thông tin nhân viên được loại bỏ khỏi danh sách hoạt động trong CSDL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Kích hoạt                 | Quản trị chọn một hoặc nhiều nhân viên trong danh sách và nhấn nút "Xóa"                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Chuỗi sự kiện chính     | 1. Quản trị chọn nhân viên cần xóa từ danh sách hiển thị.<br />2. Quản trị nhấn nút "Xóa".<br />3. Hệ thống hiển thị thông báo xác nhận: "Bạn có chắc chắn muốn xóa nhân viên này không?".<br />4. Quản trị nhấn "Đồng ý" (Confirm).<br />5. Hệ thống kiểm tra các ràng buộc dữ liệu (ví dụ: nhân viên này có đang xử lý báo cáo nào không).<br />6. Hệ thống thực hiện xóa dữ liệu trong CSDL.<br />7. Hệ thống thông báo xóa thành công và cập nhật lại danh sách nhân viên. |
| Ngoại lệ                  | 4.a: Quản trị nhấn "Hủy" (Cancel).<br />4.a.1: Hệ thống đóng thông báo xác nhận và không thực hiện lệnh xóa.<br />5.a: Nhân viên không thể xóa do ràng buộc dữ liệu (ví dụ: đang là quản lý của một bộ phận khác).<br />5.a.1: Hệ thống báo lỗi "Không thể xóa nhân viên này" và nêu lý do.                                                                                                                                                                                                                   |


## USE CASE: PHÂN QUYỀN NGƯỜI DÙNG

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Phân quyền người dùng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Tác nhân chính**           | Quản trị viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Người chịu trách nhiệm** | Admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Tiền điều kiện**          | - Đăng nhập với tư cách Quản trị viên`<br>`- Tài khoản người dùng đã tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Đảm bảo thành công**     | Phân quyền thành công cho người dùng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Kích hoạt**                 | Quản trị viên chọn chức năng**“Quản lý người dùng”**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Chuỗi sự kiện chính**     | 1. Admin truy cập chức năng “Quản lý người dùng”`<br>`2. Admin nhập thông tin để tìm kiếm người dùng`<br>`3. Hệ thống trả về danh sách người dùng phù hợp`<br>`4. Admin chọn người dùng cần phân quyền`<br>`5. Hệ thống hiển thị danh sách vai trò/quyền hạn`<br>`6. Admin chọn quyền/role cho người dùng`<br>`7. Admin nhấn nút “Lưu”`<br>`8. Hệ thống kiểm tra quyền hợp lệ`<br>`9. Hệ thống cập nhật thông tin phân quyền`<br>`10. Hệ thống thông báo phân quyền thành công |
| **Ngoại lệ**                  | **3.a. Không tìm thấy người dùng**`<br>`3.a.1. Admin nhập lại thông tin tìm kiếm                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

**Kịch  bản use case Cập nhật thông tin nhân viên**

| Thuộc tính                                           | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên use case                                          | Cập nhật thông tin nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Tác nhân chính                                      | Quản trị                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Mức                                                   | 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Người chịu trách nhiệm                            | Quản trị hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Tiền điều kiện                                     | Quản trị đã đăng nhập vào hệ thống thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Đảm bảo tối thiểu                                 | Hệ thống giữ nguyên dữ liệu cũ nếu quá trình cập nhật bị hủy hoặc lỗi.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Đảm bảo thành công                                | Thông tin mới của nhân viên được cập nhật chính xác vào Cơ sở dữ liệu (CSDL)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Kích hoạt                                            | Quản trị chọn chức năng “Quản lý nhân viên” từ menu hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Chuỗi sự kiện chính                                | 1. Quản trị chọn chức năng “Cập nhật nhân viên” trong danh sách nhân viên.<br />2. Hệ thống hiển thị biểu mẫu (form) thông tin hiện tại của nhân viên và yêu cầu nhập thông tin mới.<br />3. Quản trị thực hiện chỉnh sửa các trường thông tin cần thiết và nhấn “Lưu”.<br />4. Hệ thống kiểm tra tính hợp lệ của dữ liệu.<br />5. Hệ thống cập nhật thông tin mới vào CSDL.<br />6. Hệ thống thông báo cập nhật thành công.<br />7. Quản trị kết thúc tác vụ. |
| Ngoại lệ                                             | 3.a: Hệ thống thông báo dữ liệu nhập vào không hợp lệ (ví dụ: định dạng email sai, để trống trường bắt buộc).<br />3.a.1: Quản trị nhập lại thông tin đúng và tiếp tục bước 4.<br />3.b: Nhân viên muốn cập nhật không còn tồn tại trong hệ thống (đã bị xóa bởi người khác).<br />3.b.1: Hệ thống báo lỗi và quay lại danh sách nhân viên.                                                                                                                                   |
| **Kịch bản cho use case “Ghi nhận xe vào"** | <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên UseCase            | Xe vào                                                                                                                                                                                                                                                                                                                                               |
| Tác nhân chính       | Nhân viên                                                                                                                                                                                                                                                                                                                                           |
| Mức                    | Mức 3 - UseCase nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                |
| Tiền điều kiện      | - Hệ thống đã được khởi động và cài đặt đầy đủ<br />- Nhân viên đã đăng nhập vào hệ thống<br />- Xe đến bãi đỗ xe<br />- Hệ thống có thể truy cập máy quét biển số xe và máy in vé<br />- Hệ thống có thể truy cập cơ sở dữ liệu để lưu trữ thông tin vé và xe                           |
| Đảm bảo tối thiểu  | Bãi xe còn chỗ trống                                                                                                                                                                                                                                                                                                                              |
| Đảm bảo thành công | Vé được cấp cho khách                                                                                                                                                                                                                                                                                                                           |
| Kích hoạt             | Người dùng chọn chức năng "Xe vào"                                                                                                                                                                                                                                                                                                             |
| Chuỗi sự kiện chính | 1. Nhân viên chọn chức năng "Nhận xe vào"<br />2. Vé gửi xe được tạo ra và in ra cho khách hàng<br />3. Nhân viên chọn chức năng "Nhận xe vào"<br />4. Hệ thống kích hoạt máy quét biển số xe<br />5. Vé được in ra và giao cho khách hàng<br />6. Hệ thống lưu thông tin xe và vé vào cơ sở dữ liệu |
| Ngoại lệ              | 1. Thông tin xe không được nhận diện<br />        - Hệ thống hiển thị thông báo lỗi và yêu cầu nhân viên nhập thủ công biển số xe<br />2. Máy in vé lỗi khi tạo vé<br />        - Hệ thống hiển thị thông báo lỗi và yêu cầu nhân viên in lại hoặc liên hệ bộ phận kỹ thuật                  |

**Kịch bản cho use case “Ghi nhận xe ra"**

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên Use Case           | Xe ra                                                                                                                                                                                                                                                               |
| Tác nhân chính       | Nhân viên                                                                                                                                                                                                                                                         |
| Mức                    | Mức 3 - UseCase nghiệp vụ chi tiết                                                                                                                                                                                                                              |
| Tiền điều kiện      | - Hệ thống đã được khởi động và cài đặt đầy đủ<br />- Nhân viên đã đăng nhập vào hệ thống<br />- Xe chuẩn bị ra khỏi bãi đỗ xe<br />- Hệ thống có thể truy cập cơ sở dữ liệu để kiểm tra thông tin vé               |
| Đảm báo tối thiểu  | Biển số xe khớp vơi vé                                                                                                                                                                                                                                         |
| Đảm bảo thành công | Lưu giao dịch thành công                                                                                                                                                                                                                                        |
| Kích hoạt             | Người dùng chọn chức năng "Xe ra"                                                                                                                                                                                                                             |
| Chuỗi sự kiện chính | 1. Nhân viên chọn chức năng "Nhận xe ra"<br />2. Hệ thống kịch hoạt máy quét biển số xe<br />3. Vé được thu hồi và xác nhận thanh toán<br />4. Hệ thống ghi nhận xe ra và hoàn tất vé                                                 |
| Ngoại lệ              | 1. Không tìm thấy vé<br />      - Hệ thống hiển thị thông báo không tồn tại vé và yêu cầu nhân viên kiểm tra lại thông tin<br />2. Khách chưa thanh toán<br />      - Hệ thống hiển thị thông báo chưa hoàn tất thanh toán |

**Kịch bản cho Use Case "Thêm mới vé"**

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên UseCase            | Thêm mới vé                                                                                                                                                                                                                                                                                             |
| Tác nhân chính       | Nhân viên                                                                                                                                                                                                                                                                                                |
| Mức                    | Mức 3 - UseCase nghiệp vụ chi tiết                                                                                                                                                                                                                                                                     |
| Tiền điều kiện      | - Hệ thống đã được khởi động và cài đặt đầy đủ<br />- Nhân viên đã đăng nhập vào hệ thống<br />- Khách hàng yêu cầu thêm mới vé gửi xe                                                                                                                                 |
| Đảm báo tối thiểu  | Biển số xe hợp lệ, mẫ vé hợp lệ                                                                                                                                                                                                                                                                    |
| Đảm báo thành công | Gán đúng vị trí xe, tạo mã vé duy nhất                                                                                                                                                                                                                                                            |
| Kích hoạt             | Người dùng chọn chức năng "Thêm mới"                                                                                                                                                                                                                                                               |
| Chuỗi sự kiện chính | 1. Nhân viên chọn chức năng "Thêm mới vé"<br />2. Nhân viên nhập thông tin cần thiết để tạo vé mới (biển số xe, thời gian gửi,...)<br />3. Hệ thống tạo vé mới vào cơ sở dữ liệu                                                                                          |
| Ngoại lệ              | 1. Mã vé mới đã tồn tại<br />      - Hệ thống hiển thị thông báo đã tồn tại mã vé và yêu cầu nhân viên nhập lại  thông tin<br />2. Thiếu thông tin<br />      - Hệ thống hiển thị thông báo yêu cầu nhập đầy đủ thông tin cần thiết để tạo vé mới |



## USE CASE: XEM BÁO CÁO

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Xem báo cáo                                                                                                                                                                                                                                                                                                                                  |
| **Tác nhân chính**           | Quản lý cửa hàng, Admin                                                                                                                                                                                                                                                                                                                    |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                       |
| **Người chịu trách nhiệm** | Quản trị hệ thống, Chủ cửa hàng                                                                                                                                                                                                                                                                                                         |
| **Tiền điều kiện**          | Actor đã đăng nhập hệ thống                                                                                                                                                                                                                                                                                                             |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi trên màn hình                                                                                                                                                                                                                                                                 |
| **Đảm bảo thành công**     | Báo cáo được hiển thị đầy đủ và chi tiết                                                                                                                                                                                                                                                                                          |
| **Kích hoạt**                 | Quản lý chọn chức năng**“Quản lý báo cáo”**                                                                                                                                                                                                                                                                                   |
| **Chuỗi sự kiện chính**     | 1. Actor truy cập chức năng “Quản lý báo cáo”`<br>`2. Hệ thống hiển thị form xem báo cáo`<br>`3. Actor tìm kiếm báo cáo (theo tên, loại, ngày tạo, …)`<br>`4. Hệ thống hiển thị danh sách báo cáo phù hợp`<br>`5. Actor chọn báo cáo muốn xem`<br>`6. Hệ thống hiển thị chi tiết báo cáo |
| **Ngoại lệ**                  | **3.a. Không tìm thấy báo cáo**`<br>`3.a.1. Actor nhập lại từ khóa tìm kiếm                                                                                                                                                                                                                                                 |



## USE CASE: TẠO BÁO CÁO

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Tạo báo cáo                                                                                                                                                                                                                                                                                                                                                                            |
| **Tác nhân chính**           | Quản lý cửa hàng, Admin                                                                                                                                                                                                                                                                                                                                                               |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                  |
| **Người chịu trách nhiệm** | Quản trị hệ thống, Chủ cửa hàng                                                                                                                                                                                                                                                                                                                                                    |
| **Tiền điều kiện**          | Actor đã đăng nhập hệ thống                                                                                                                                                                                                                                                                                                                                                        |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                             |
| **Đảm bảo thành công**     | Báo cáo được tạo thành công                                                                                                                                                                                                                                                                                                                                                       |
| **Kích hoạt**                 | Quản lý chọn chức năng**“Quản lý báo cáo”**                                                                                                                                                                                                                                                                                                                              |
| **Chuỗi sự kiện chính**     | 1. Actor truy cập chức năng “Quản lý báo cáo”`<br>`2. Actor chọn “Tạo báo cáo”`<br>`3. Hệ thống hiển thị form tạo báo cáo`<br>`4. Actor nhập thông tin và nhấn **“Tạo”**`<br>`5. Hệ thống kiểm tra tính hợp lệ của dữ liệu`<br>`6. Hệ thống lưu báo cáo vào CSDL`<br>`7. Hệ thống thông báo tạo báo cáo thành công |
| **Ngoại lệ**                  | **4.a. Nhập thiếu thông tin**`<br>`4.a.1. Hệ thống hiển thị thông báo *“Thiếu thông tin, vui lòng nhập đầy đủ”*`<br>`4.a.2. Actor nhập lại thông tin`<br><br>`**5.a. Dữ liệu không hợp lệ**`<br>`5.a.1. Hệ thống hiển thị thông báo *“Dữ liệu không hợp lệ”*`<br>`5.a.2. Actor nhập lại thông tin                    |



## USE CASE: SỬA BÁO CÁO

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Sửa báo cáo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Tác nhân chính**           | Quản lý cửa hàng, Admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Người chịu trách nhiệm** | Quản trị hệ thống, Chủ cửa hàng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Tiền điều kiện**          | - Actor đã đăng nhập hệ thống`<br>`- Báo cáo cần sửa đã tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Đảm bảo thành công**     | Báo cáo được cập nhật thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Kích hoạt**                 | Quản lý chọn chức năng**“Quản lý báo cáo”**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Chuỗi sự kiện chính**     | 1. Actor truy cập chức năng “Quản lý báo cáo”`<br>`2. Actor chọn “Sửa báo cáo”`<br>`3. Hệ thống hiển thị form sửa báo cáo`<br>`4. Actor tìm kiếm báo cáo cần chỉnh sửa`<br>`5. Hệ thống hiển thị danh sách báo cáo phù hợp`<br>`6. Actor chọn báo cáo cần sửa`<br>`7. Hệ thống hiển thị chi tiết báo cáo`<br>`8. Actor chỉnh sửa thông tin và nhấn **“Lưu”**`<br>`9. Hệ thống kiểm tra tính hợp lệ và cập nhật dữ liệu vào CSDL`<br>`10. Hệ thống thông báo cập nhật báo cáo thành công |
| **Ngoại lệ**                  | **5.a. Báo cáo không tồn tại**`<br>`5.a.1. Actor thực hiện tìm kiếm lại báo cáo`<br><br>`**9.a. Dữ liệu không hợp lệ**`<br>`9.a.1. Hệ thống hiển thị thông báo *“Dữ liệu không hợp lệ”*`<br>`9.a.2. Actor nhập lại thông tin                                                                                                                                                                                                                                                                                                             |

6.3 Biểu đồ lớp

<p align="center">
  <img src="images/CL_baiGuiXe.png" width="400">
</p>

| **Tên lớp** | **Thuộc tính**                                     | **Phương thức**                                                    |
| ------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| **NhanVien**  | maNV`<br>`hoTen`<br>`taiKhoan`<br>`sdt               | quanLyXeRa()`<br>`quanLyXeVao()`<br>`quanLyVeXe()`<br>`quanLyBaoCao() |
| **QuanTri**   | tenQT`<br>`maQT`<br>`sdt                               | quanLyNhanVien()`<br>`xemBaoCao()                                         |
| **BaiGuiXe**  | tenBai`<br>`diaChi                                       | ghiNhanXeVao()`<br>`ghiNhanXeRa()                                         |
| **Xe**        | maXe`<br>`bienSo`<br>`loaiXe                           | timKiem()`<br>`themXe()                                                   |
| **VeXe**      | maVe`<br>`thoiGianVao`<br>`thoiGianRa`<br>`trangThai | capNhatTrangThai()`<br>`thongTinThoiGianGui()`<br>`traCuuVe()           |
| **BaoCao**    | maBaoCao`<br>`ngayTao`<br>`nguoiTao`<br>`noiDung     | xuatBaoCao()`<br>`thongKeDoanhThu()`<br>`capNhatBaoCao()                |
