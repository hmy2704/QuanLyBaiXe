 **Phân tích thiết kế hệ thống Quản lý bãi xe**

## I. Tổng quan hệ thống

1.1 Mô tả hệ thống

Hệ thống Quản lý Bãi gửi xe được xây dựng nhằm hỗ trợ công tác ghi nhận, quản lý và xử lý thông tin gửi xe một cách chính xác, nhanh chóng và minh bạch. Hệ thống phù hợp triển khai cho các bãi gửi xe sử dụng hình thức thu vé thủ công, chưa tích hợp thiết bị tự động hoặc IoT.

Hệ thống cho phép nhân viên bãi xe thực hiện các nghiệp vụ chính như ghi nhận phương tiện vào bãi, ghi nhận phương tiện ra bãi, quản lý vé gửi xe, quản lý thông tin nhân viên và lập các báo cáo thống kê phục vụ công tác quản lý.

Khi có phương tiện vào bãi gửi, nhân viên bãi xe phát vé gửi xe cho khách và nhập mã vé vào hệ thống. Đồng thời, nhân viên ghi nhận các thông tin nhận diện của phương tiện bao gồm biển số xe, loại xe và màu xe. Hệ thống tự động lưu thời điểm phương tiện vào bãi và liên kết thông tin vé gửi với phương tiện, đảm bảo việc quản lý chính xác từng lượt gửi xe.

Trong quá trình phương tiện ra khỏi bãi, khách hàng xuất trình vé gửi xe. Nhân viên nhập mã vé vào hệ thống để tra cứu thông tin lượt gửi tương ứng. Hệ thống hiển thị đầy đủ các thông tin đã lưu của phương tiện như biển số, loại xe, màu xe và thời gian gửi. Nhân viên tiến hành đối chiếu các thông tin này với phương tiện thực tế nhằm đảm bảo trả đúng xe cho khách, hạn chế tối đa các trường hợp nhầm lẫn hoặc gian lận. Sau khi hoàn tất đối soát, hệ thống tự động tính toán thời gian gửi và phí gửi xe theo quy định, cập nhật trạng thái vé và kết thúc lượt gửi xe.

Bên cạnh đó, hệ thống hỗ trợ quản lý nhân viên bãi xe bao gồm tạo mới, cập nhật, phân quyền truy cập và ghi nhận nhật ký thao tác nhằm tăng cường tính kiểm soát và minh bạch trong vận hành. Các chức năng báo cáo thống kê cho phép tổng hợp số lượng xe gửi, doanh thu theo thời gian, hỗ trợ ban quản lý trong việc theo dõi và đánh giá hiệu quả hoạt động của bãi gửi xe.

Trong tương lai, hệ thống có thể được mở rộng tích hợp các công nghệ nhận diện tự động như mã QR hoặc nhận diện biển số nhằm nâng cao mức độ tự động hóa và an toàn trong quản lý bãi gửi xe.

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

## II. Tác nhân tham gia

1. Người gửi xe

- Gửi xe
- Lấy xe
- Xuất trình vé khi lấy xe ra khỏi bãi

2. Nhân viên

   - Ghi nhận xe vào/ra
   - Thu phí
   - Tra cứu thông tin vé
3. Quản lý

   - Quản lý hệ thống
   - Xem báo cáo cuối ngày
   - Quản lý nhân viên
4. Quản trị hệ thống

   - Bảo trì hệ thống
   - Phân quyền

## III. Yêu cầu chức năng

3.1 Yêu cầu chức năng

a. Đăng nhập hệ thống

* Người dùng nhập tài khoản và mật khẩu
* Hệ thống xác thực thông tin đăng nhập
* Phân quyền truy cập theo vai trò:

  * Nhân viên bãi xe
  * Quản lý bãi xe
  * Quản trị hệ thống

b. Ghi nhận xe vào

Hệ thống hỗ trợ ghi nhận thông tin phương tiện khi vào bãi gửi:

* Nhân viên nhập thông tin xe:
  * Loại xe (xe máy, ô tô)
  * Biển số xe
  * Hình thức gửi (vé lượt, vé tháng)
* Hệ thống kiểm tra:
  * Tính hợp lệ của vé tháng (nếu có)
  * Số chỗ trống trong bãi
* Hệ thống cấp vé gửi xe (vé giấy /  thẻ từ)
* Ghi nhận thời điểm xe vào bãi
* Cập nhật số lượng xe hiện có trong bãi

c. Ghi nhận xe ra:

Hệ thống hỗ trợ trả xe và kiểm soát an toàn:

* Nhân viên nhập mã vé gửi xe
* Hệ thống đối soát:
  * Thông tin vé gửi
  * Biển số xe
  * Thời điểm xe vào bãi
* Hệ thống tính toán:
  * Thời gian gửi xe
  * Phí gửi xe theo quy định (theo giờ/loại xe)
* Hiển thị số tiền cần thanh toán
* Cập nhật trạng thái vé gửi và số chỗ trống trong bãi
* Xử lý các trường hợp ngoại lệ:
  * Mất vé
  * Vé không hợp lệ
  * Sai thông tin xe

d. Quản lý vé gửi

* Quản lý vé gửi theo loại:

  * Vé gửi theo lượt
  * Vé gửi theo tháng
* Thêm mới, cập nhật, hủy vé gửi
* Gia hạn vé tháng
* Theo dõi trạng thái vé:

  * Đang sử dụng
  * Hết hạn
  * Đã thanh toán
* Tra cứu lịch sử gửi xe theo vé

e. Quản lý nhân viên

* Thêm, sửa, xóa thông tin nhân viên
* Phân quyền chức năng theo vai trò
* Ghi nhận nhật ký thao tác của nhân viên
* Theo dõi lịch sử xử lý xe ra/vào

f. Báo cáo thống kê

- Thống kê số lượng xe gửi
- Thống kê doanh thu
- Xuất báo cáo

3.2 Yêu cầu phi chức năng

a. Khả năng sử dụng

* Giao diện trực quan: Giao diện được thiết kế tối ưu cho nghiệp vụ bãi xe, hỗ trợ các phím tắt để nhân viên ghi nhận xe vào/ra nhanh chóng
* Hỗ trợ đào tạo: Nhân viên mới có thể nắm bắt quy trình nhận diện xe, đối soát vé và tính phí chỉ sau tối đa 01 giờ làm quen
* Hiển thị trạng thái bãi xe: Dashboard phải hiển thị thời gian thực số chỗ trống cho từng loại xe (ô tô, xe máy) và từng khu vực để hỗ trợ điều phối
* Đa ngôn ngữ: Hệ thống hỗ trợ hoàn toàn giao diện Tiếng Việt và Tiếng Anh
* Thông báo và phản hồi: Cung cấp thông báo rõ ràng khi nhận diện sai biển số, vé hết hạn hoặc bãi đã đầy chỗ

b. Hiệu suất

* Tốc độ xử lý giao dịch: Thời gian phản hồi cho các thao tác check-in/check-out (bao gồm tính phí tự động) không quá 2 giây
* Hiệu suất AI/Quét biển số: Thời gian tự động nhận diện biển số xe qua camera hoặc mã vạch/thẻ từ không quá 1.5 giây để tránh ùn tắc làn xe
* Khả năng xử lý đồng thời: Hệ thống xử lý ổn định tối thiểu 50 giao dịch thanh toán hoặc tra cứu cùng một lúc
* Tải trang: Các trang báo cáo doanh thu và báo cáo thống kê phức tạp phải được hiển thị trong vòng 3 đến 5 giây

c. Độ tin cậy

* Tính khả dụng : Hệ thống hoạt động liên tục 24/7 đảm bảo không gián đoạn việc ra vào bãi
* Độ chính xác dữ liệu: Đảm bảo chính xác 100% trong việc tính toán phí gửi xe theo khung giờ/ngày và loại xe đã thiết lập
* Kiểm soát lỗi: Tỷ lệ lỗi nghiêm trọng (như sai lệch doanh thu hoặc mất dữ liệu xe trong bãi) không quá 1 lỗi/tháng
* Khả năng phục hồi: Thời gian trung bình để sửa lỗi (MTTR) và khôi phục hoạt động sau sự cố phần mềm không quá 1 giờ

d. Độ bảo mật

- Mã hóa dữ liệu thanh toán chuẩn PCIDSS
- Mã hóa thông tin cá nhân khách hàng
- Xác thực đa yếu tố cho tài khoản quản trị
- Phân quyền rõ ràng: Quản trị, nhân viên
- tuân thủ Luật An toàn thông tin mạng và nghị điịnh 13/2023/NĐ-CP và bảo vệ dữ liệu cá nhân
- Camera giám sát 24/7 và lưu trữ giữ liệu 30 ngày

e. Độ an toàn

* PCCC: Hệ thống có khả năng kết nối với cảm biến khói/cháy để tự động mở toàn bộ Barrier thoát hiểm khi có sự cố
* Chiếu sáng và Khẩn cấp: Hỗ trợ cảnh báo trên màn hình điều khiển khi các thiết bị phần cứng (Barrier, máy in vé) gặp sự cố kỹ thuật

f. Khả năng hỗ trợ và bảo trì

* Nhật ký hệ thống : Lưu trữ chi tiết lỗi hệ thống và các truy vấn cơ sở dữ liệu để phục vụ bảo trì^^.
* Tiêu chuẩn mã nguồn: Code phải tuân thủ quy chuẩn thiết kế sạch, có chú thích  rõ ràng bằng tiếng Việt hoặc tiếng Anh để dễ dàng nâng cấp bãi xe sau này
* Tài liệu kỹ thuật: Cung cấp đầy đủ tài liệu API phục vụ kết nối với các thiết bị ngoại vi như đầu đọc thẻ, camera nhận diện biển số

g. Ràng buộc về thiết kế

* Backend:Javascript, php
* Frontend:HTML, CSS, React.sj
* Database: MySQL
* khác: Visual Paradigm

## IV. Phân tích mở rộng mục tiêu

**4.1. Quản lý hoạt động xe ra/vào bãi**

* Ghi nhận chi tiết thông tin phương tiện khi vào và rời bãi như biển số, loại xe, thời điểm vào – ra
* Tự động cập nhật và xác định trạng thái xe đang có mặt trong bãi
* Giảm thiểu rủi ro thất lạc hoặc nhầm lẫn phương tiện

**4.2. Quản lý vé xe và thông tin khách hàng**

* Quản lý các loại vé gửi xe theo ngày,tháng,năm
* Lưu trữ thông tin khách hàng gửi xe dài hạn một cách hệ thống
* Hỗ trợ tra cứu và kiểm tra dữ liệu nhanh chóng, thuận tiện

**4.3. Tính phí và quản lý doanh thu gửi xe**

* Tự động tính toán chi phí gửi xe dựa trên thời gian sử dụng và loại phương tiện
* Hạn chế sai sót trong quá trình thu và quản lý phí
* Hỗ trợ tổng hợp, thống kê doanh thu theo ngày, tháng và năm

**4.4. Quản lý sức chứa và khu vực bãi xe**

* Theo dõi số lượng phương tiện đang gửi trong bãi theo thời gian thực
* Cảnh báo khi số lượng xe đạt ngưỡng tối đa hoặc bãi xe đã đầy

**4.5. Hỗ trợ công tác quản trị và lập báo cáo**

* Cung cấp các báo cáo thống kê phục vụ công tác quản lý
* Hỗ trợ quản trị viên đưa ra quyết định kịp thời và chính xác
* Lưu trữ dữ liệu lâu dài để phục vụ việc kiểm tra và đối chiếu sau này

## V. Ràng buộc và mở rộng

* Hệ thống làm việc trên nền tảng web
* Thời gian phản hồi nhanh
* Bảo mật thông tin
* Sao lưu và có thể phát triển

## VI. Phân tích và thiết kế đối tượng với UML

### 6.1 Biểu đồ UseCase tổng quát

<p align="center">
  <img src="images/uml_bai_xe.PNG" width="400">
</p>

6.1.2 Biểu đồ Usecase phân rã

Usecase phân rã ghi xe vào

<p align="center">
  <img src = "images/uml_xe_vao.PNG" width="400">
</p>

Usecase phân rã quản lý vé xe

<p align="center">
  <img src = "images/uml_ve_xe.PNG" width="400">
</p>

Usecase phân rã ghi xe ra

<p align="center">
  <img src="images/uml_xe_ra.PNG" width="400">
</p>

Usecase phân rã quản lý nhân viên

<p align="center">
  <img src="images/uml_nhan_vien.PNG" width="400">
</p>

usecase phân rã quản lý báo cáo

<p align="center">
  <img src="images/uml_bao_cao.PNG" width="400">
</p>

### 6.2 Kịch bản Usecase

Kịch bản cho use case “Đăng nhập"

| Thuộc tính                      | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
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

**Kịch bản use case Xóa nhân viên**

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

**Kịch  bản use case Cập nhật thông tin nhân viên**

| Thuộc tính                | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên use case               | Cập nhật thông tin nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Tác nhân chính           | Quản trị                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Mức                        | 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Người chịu trách nhiệm | Quản trị hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Tiền điều kiện          | Quản trị đã đăng nhập vào hệ thống thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Đảm bảo tối thiểu      | Hệ thống giữ nguyên dữ liệu cũ nếu quá trình cập nhật bị hủy hoặc lỗi.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Đảm bảo thành công     | Thông tin mới của nhân viên được cập nhật chính xác vào Cơ sở dữ liệu (CSDL)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Kích hoạt                 | Quản trị chọn chức năng “Quản lý nhân viên” từ menu hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Chuỗi sự kiện chính     | 1. Quản trị chọn chức năng “Cập nhật nhân viên” trong danh sách nhân viên.<br />2. Hệ thống hiển thị biểu mẫu (form) thông tin hiện tại của nhân viên và yêu cầu nhập thông tin mới.<br />3. Quản trị thực hiện chỉnh sửa các trường thông tin cần thiết và nhấn “Lưu”.<br />4. Hệ thống kiểm tra tính hợp lệ của dữ liệu.<br />5. Hệ thống cập nhật thông tin mới vào CSDL.<br />6. Hệ thống thông báo cập nhật thành công.<br />7. Quản trị kết thúc tác vụ. |
| Ngoại lệ                  | 3.a: Hệ thống thông báo dữ liệu nhập vào không hợp lệ (ví dụ: định dạng email sai, để trống trường bắt buộc).<br />3.a.1: Quản trị nhập lại thông tin đúng và tiếp tục bước 4.<br />3.b: Nhân viên muốn cập nhật không còn tồn tại trong hệ thống (đã bị xóa bởi người khác).<br />3.b.1: Hệ thống báo lỗi và quay lại danh sách nhân viên. Kịch bản cho use case “Đăng ký"                                                                                             |

| Tiêu đề                            | Tên nội dung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tên Use Case**               | Đăng ký                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Tác nhân chính**           | Người dùng (Khách hàng hoặc Quản trị viên), Nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Người chịu trách nhiệm** | Quản trị hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Tiền điều kiện**          | Tài khoản chưa tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Đảm bảo tối thiểu**      | Nếu đăng ký thất bại (tài khoản đã tồn tại), hệ thống hiển thị thông báo lỗi và yêu cầu người dùng nhập lại                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Đảm bảo thành công**     | Người dùng đăng ký thành công và được chuyển đến trang chủ phù hợp (trang quản trị hoặc trang khách hàng)                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Kích hoạt**                 | Người dùng chọn chức năng**“Đăng ký”** trên trang web                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Chuỗi sự kiện chính**     | 1. Người dùng chọn chức năng “Đăng ký” trên hệ thống `<br>`2. Hệ thống hiển thị form đăng ký `<br>`3. Người dùng nhập tên đăng nhập, mật khẩu và nhập lại mật khẩu `<br>`4. Hệ thống kiểm tra tính hợp lệ của dữ liệu (không để trống, đúng định dạng, tài khoản chưa tồn tại)`<br>`5. Hệ thống gửi thông tin đăng ký đến CSDL để xác nhận `<br>`6. Cơ sở dữ liệu trả kết quả xác thực `<br>`7. Người dùng bắt đầu sử dụng hệ thống |
| **Ngoại lệ**                  | **4.a. Thông tin đăng ký không hợp lệ** (bỏ trống, sai định dạng)`<br>`4.a.1. Hệ thống hiển thị thông báo lỗi `<br>`4.a.2. Người dùng nhập lại thông tin                                                                                                                                                                                                                                                                                                                                                |

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
| Ngoại lệ              | <br />8.1. Vé xe không tồn tại:<br />- Hiển thị thông báo vé không hợp lệ<br />-Nhân viên nhậplại<br />6.1. Tác nhân hủy thao tác:<br />- Không lưu thay đổi và quay lại giao diện quản lý vé                                                                                                                                                                                                                                                                                                                                                |

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

**Kịch bản use case "phân quyền người dùng"**

| Tiêu đề                            | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Phân quyền người dùng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Tác nhân chính**           | Quản trị viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Người chịu trách nhiệm** | Admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Tiền điều kiện**          | - Đăng nhập với tư cách Quản trị viên `<br>`- Tài khoản người dùng đã tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Đảm bảo thành công**     | Phân quyền thành công cho người dùng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Kích hoạt**                 | Quản trị viên chọn chức năng**“Quản lý người dùng”**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Chuỗi sự kiện chính**     | 1. Admin truy cập chức năng “Quản lý người dùng”`<br>`2. Admin nhập thông tin để tìm kiếm người dùng `<br>`3. Hệ thống trả về danh sách người dùng phù hợp `<br>`4. Admin chọn người dùng cần phân quyền `<br>`5. Hệ thống hiển thị danh sách vai trò/quyền hạn `<br>`6. Admin chọn quyền/role cho người dùng `<br>`7. Admin nhấn nút “Lưu”`<br>`8. Hệ thống kiểm tra quyền hợp lệ `<br>`9. Hệ thống cập nhật thông tin phân quyền `<br>`10. Hệ thống thông báo phân quyền thành công |
| **Ngoại lệ**                  | **3.a. Không tìm thấy người dùng** `<br>`3.a.1. Admin nhập lại thông tin tìm kiếm                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

**Kịch  bản use case Cập nhật thông tin nhân viên**

| Thuộc tính                | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên use case               | Cập nhật thông tin nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Tác nhân chính           | Quản trị                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Mức                        | 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Người chịu trách nhiệm | Quản trị hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Tiền điều kiện          | Quản trị đã đăng nhập vào hệ thống thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Đảm bảo tối thiểu      | Hệ thống giữ nguyên dữ liệu cũ nếu quá trình cập nhật bị hủy hoặc lỗi.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Đảm bảo thành công     | Thông tin mới của nhân viên được cập nhật chính xác vào Cơ sở dữ liệu (CSDL)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Kích hoạt                 | Quản trị chọn chức năng “Quản lý nhân viên” từ menu hệ thống                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Chuỗi sự kiện chính     | 1. Quản trị chọn chức năng “Cập nhật nhân viên” trong danh sách nhân viên.<br />2. Hệ thống hiển thị biểu mẫu (form) thông tin hiện tại của nhân viên và yêu cầu nhập thông tin mới.<br />3. Quản trị thực hiện chỉnh sửa các trường thông tin cần thiết và nhấn “Lưu”.<br />4. Hệ thống kiểm tra tính hợp lệ của dữ liệu.<br />5. Hệ thống cập nhật thông tin mới vào CSDL.<br />6. Hệ thống thông báo cập nhật thành công.<br />7. Quản trị kết thúc tác vụ. |
| Ngoại lệ                  | 3.a: Hệ thống thông báo dữ liệu nhập vào không hợp lệ (ví dụ: định dạng email sai, để trống trường bắt buộc).<br />3.a.1: Quản trị nhập lại thông tin đúng và tiếp tục bước 4.<br />3.b: Nhân viên muốn cập nhật không còn tồn tại trong hệ thống (đã bị xóa bởi người khác).<br />3.b.1: Hệ thống báo lỗi và quay lại danh sách nhân viên.                                                                                                                                   |
|                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên UseCase            | Xe vào                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Tác nhân chính       | Nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Mức                    | Mức 3 - UseCase nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                        |
| Tiền điều kiện      | - Hệ thống đã được khởi động và cài đặt đầy đủ<br />- Nhân viên đã đăng nhập vào hệ thống<br />- Xe đến bãi đỗ xe<br />- Hệ thống có thể truy cập máy quét biển số xe và máy in vé<br />- Hệ thống có thể truy cập cơ sở dữ liệu để lưu trữ thông tin vé và xe                                                                                                   |
| Đảm bảo tối thiểu  | Bãi xe còn chỗ trống                                                                                                                                                                                                                                                                                                                                                                                                      |
| Đảm bảo thành công | Vé được cấp cho khách                                                                                                                                                                                                                                                                                                                                                                                                   |
| Kích hoạt             | Người dùng chọn chức năng "Xe vào"                                                                                                                                                                                                                                                                                                                                                                                     |
| Chuỗi sự kiện chính | 1. Nhân viên chọn chức năng "Nhận xe vào"<br />2. Hệ thống hiện thị màm hình nhận xe<br />3. Hệ thống kích hoạt máy quét biển số<br />4. Hệ thống nhận diện và ghi biển số xe<br />5. Nhân viên đưa vé gửi xe cho khách  hàng<br />6.Nhân viên nhấn nút mở Barrier<br />7.Hệ thống điều khiểnmở Barrier<br />7. Hệ thống lưu thông tin xe và vé vào cơ sở dữ liệu |
| Ngoại lệ              | 4.1. Thông tin xe không được nhận diện<br />        - Hệ thống hiển thị thông báo lỗi và yêu cầu nhân viên nhập thủ công biển số xe                                                                                                                                                                                                                                                               |

**Kịch bản cho use case “Ghi nhận xe ra"**

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tên Use Case           | Xe ra                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Tác nhân chính       | Nhân viên                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Mức                    | Mức 3 - UseCase nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Tiền điều kiện      | - Hệ thống đã được khởi động và cài đặt đầy đủ<br />- Nhân viên đã đăng nhập vào hệ thống<br />- Xe chuẩn bị ra khỏi bãi đỗ xe<br />- Hệ thống có thể truy cập cơ sở dữ liệu để kiểm tra thông tin vé                                                                                                                                                                                                                           |
| Đảm báo tối thiểu  | Biển số xe khớp vơi vé                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Đảm bảo thành công | Lưu giao dịch thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Kích hoạt             | Người dùng chọn chức năng "Xe ra"                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Chuỗi sự kiện chính | 1. Nhân viên chọn chức năng "Nhận xe ra"<br />2. Hệ thống kịch hoạt máy quét biển số xe<br />3. Hệ thống nhận diện biển số và tìm vé tươngứng<br />4. Hệ thống tính thời gian gửi và tính phí gửi xe<br />5.Nhân viên thu phí từ khách hàng<br />6.Nhân viên nhấn nút mở Barrier<br />7.Hệ thống điểu khiển barrier mở cho xe ra<br />8.Hệ thống ghi nhận xe ra<br />9.Hệ thống lưu thông  tin giao dịch vào csdl |
| Ngoại lệ              | 3.1. Không tìm thấy vé<br />     3.1.a - Hệ thống hiển thị thông báo không tồn tại vé và yêu cầu nhân viên kiểm tra lại thông tin<br />      3.1.b- nếu vé vẫn không hợp lệ, nhân viên không mở barrier , gửi báo cáo đến quản lý để xử lý sự cố<br />3.2 hệ thống không nhận diện được biển số<br />     - Hệ thống yêu cầu nhân viên nhập thủ công                                                  |

**Kịch bản cho Use Case "Thêm mới vé"**

| Thuộc tính            | Mô tả                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tên UseCase            | Thêm mới vé                                                                                                                                                                                                                                                                                                                                                     |
| Tác nhân chính       | Nhân viên                                                                                                                                                                                                                                                                                                                                                        |
| Mức                    | Mức 3 - UseCase nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                             |
| Tiền điều kiện      | - Hệ thống đã được khởi động và cài đặt đầy đủ<br />- Nhân viên đã đăng nhập vào hệ thống<br />- Khách hàng yêu cầu thêm mới vé gửi xe                                                                                                                                                                                         |
| Đảm báo tối thiểu  | Biển số xe hợp lệ, mẫ vé hợp lệ                                                                                                                                                                                                                                                                                                                            |
| Đảm báo thành công | Gán đúng vị trí xe, tạo mã vé duy nhất                                                                                                                                                                                                                                                                                                                    |
| Kích hoạt             | Người dùng chọn chức năng "Thêm mới"                                                                                                                                                                                                                                                                                                                       |
| Chuỗi sự kiện chính | 1. Nhân viên chọn chức năng "Thêm mới vé"<br />2. Hệ thống hiện thị màn hình chức năng thêm mới vé<br />3. Nhân viên nhập mã vé có sẵn<br />4. Hệ thống kiểm tra tính hợp lệ của mã vé<br />5.Hệ thống lưu thông tin vào Csdl<br />6. Hệ thống thông báo tạo vé thành công<br />7.Nhân viên đưa vé cho khách |
| Ngoại lệ              | 3.1. Mã vé mới đã tồn tại<br />      - Hệ thống hiển thị thông báo đã tồn tại mã vé <br />      - yêu cầu nhân viên nhập lại  thông tin<br />3.2. Thiếu thông tin<br />      - Hệ thống hiển thị thông báo yêu cầu nhập đầy đủ thông tin cần thiết để tạo vé mới                                        |

**Kịch bản UseCase "xem báo cáo"**

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Xem báo cáo                                                                                                                                                                                                                                                                                                                                     |
| **Tác nhân chính**           | Quản lý cửa hàng, Admin                                                                                                                                                                                                                                                                                                                       |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                          |
| **Người chịu trách nhiệm** | Quản trị hệ thống, Chủ cửa hàng                                                                                                                                                                                                                                                                                                            |
| **Tiền điều kiện**          | Actor đã đăng nhập hệ thống                                                                                                                                                                                                                                                                                                                |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi trên màn hình                                                                                                                                                                                                                                                                    |
| **Đảm bảo thành công**     | Báo cáo được hiển thị đầy đủ và chi tiết                                                                                                                                                                                                                                                                                             |
| **Kích hoạt**                 | Quản lý chọn chức năng**“Quản lý báo cáo”**                                                                                                                                                                                                                                                                                            |
| **Chuỗi sự kiện chính**     | 1. Actor truy cập chức năng “Quản lý báo cáo”`<br>`2. Hệ thống hiển thị form xem báo cáo `<br>`3. Actor tìm kiếm báo cáo (theo tên, loại, ngày tạo, …)`<br>`4. Hệ thống hiển thị danh sách báo cáo phù hợp `<br>`5. Actor chọn báo cáo muốn xem `<br>`6. Hệ thống hiển thị chi tiết báo cáo |
| **Ngoại lệ**                  | **3.a. Không tìm thấy báo cáo** `<br>`3.a.1. Actor nhập lại từ khóa tìm kiếm                                                                                                                                                                                                                                                   |

**Kịch bản Usecase "tạo báo cáo"**

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Tạo báo cáo                                                                                                                                                                                                                                                                                                                                                                               |
| **Tác nhân chính**           | Quản lý cửa hàng, Admin                                                                                                                                                                                                                                                                                                                                                                  |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                     |
| **Người chịu trách nhiệm** | Quản trị hệ thống, Chủ cửa hàng                                                                                                                                                                                                                                                                                                                                                       |
| **Tiền điều kiện**          | Actor đã đăng nhập hệ thống                                                                                                                                                                                                                                                                                                                                                           |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                |
| **Đảm bảo thành công**     | Báo cáo được tạo thành công                                                                                                                                                                                                                                                                                                                                                          |
| **Kích hoạt**                 | Quản lý chọn chức năng**“Quản lý báo cáo”**                                                                                                                                                                                                                                                                                                                                       |
| **Chuỗi sự kiện chính**     | 1. Actor truy cập chức năng “Quản lý báo cáo”`<br>`2. Actor chọn “Tạo báo cáo”`<br>`3. Hệ thống hiển thị form tạo báo cáo `<br>`4. Actor nhập thông tin và nhấn **“Tạo”**`<br>`5. Hệ thống kiểm tra tính hợp lệ của dữ liệu `<br>`6. Hệ thống lưu báo cáo vào CSDL `<br>`7. Hệ thống thông báo tạo báo cáo thành công |
| **Ngoại lệ**                  | **4.a. Nhập thiếu thông tin** `<br>`4.a.1. Hệ thống hiển thị thông báo *“Thiếu thông tin, vui lòng nhập đầy đủ”*`<br>`4.a.2. Actor nhập lại thông tin `<br><br>`**5.a. Dữ liệu không hợp lệ** `<br>`5.a.1. Hệ thống hiển thị thông báo *“Dữ liệu không hợp lệ”*`<br>`5.a.2. Actor nhập lại thông tin                    |

**Kịch bản Usecase"sửa báo cáo"**

| **Tiêu đề**                  | **Tên nội dung**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên Use Case**               | Sửa báo cáo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Tác nhân chính**           | Quản lý cửa hàng, Admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Mức**                        | Mức 3 – Use Case nghiệp vụ chi tiết                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Người chịu trách nhiệm** | Quản trị hệ thống, Chủ cửa hàng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Tiền điều kiện**          | - Actor đã đăng nhập hệ thống `<br>`- Báo cáo cần sửa đã tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Đảm bảo tối thiểu**      | Nếu có lỗi xảy ra, hệ thống hiển thị thông báo lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Đảm bảo thành công**     | Báo cáo được cập nhật thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Kích hoạt**                 | Quản lý chọn chức năng**“Quản lý báo cáo”**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Chuỗi sự kiện chính**     | 1. Actor truy cập chức năng “Quản lý báo cáo”`<br>`2. Actor chọn “Sửa báo cáo”`<br>`3. Hệ thống hiển thị form sửa báo cáo `<br>`4. Actor tìm kiếm báo cáo cần chỉnh sửa `<br>`5. Hệ thống hiển thị danh sách báo cáo phù hợp `<br>`6. Actor chọn báo cáo cần sửa `<br>`7. Hệ thống hiển thị chi tiết báo cáo `<br>`8. Actor chỉnh sửa thông tin và nhấn **“Lưu”**`<br>`9. Hệ thống kiểm tra tính hợp lệ và cập nhật dữ liệu vào CSDL `<br>`10. Hệ thống thông báo cập nhật báo cáo thành công |
| **Ngoại lệ**                  | **5.a. Báo cáo không tồn tại** `<br>`5.a.1. Actor thực hiện tìm kiếm lại báo cáo `<br><br>`**9.a. Dữ liệu không hợp lệ** `<br>`9.a.1. Hệ thống hiển thị thông báo *“Dữ liệu không hợp lệ”*`<br>`9.a.2. Actor nhập lại thông tin                                                                                                                                                                                                                                                                                                                |

### 6.3 Biểu đồ lớp

<p align="center">
  <img src="images/CL_baiGuiXe.png" width="400">
</p>

| **Tên Lớp** | Thuộc tính                                                  | **Phương thức**                                                    |
| ------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **NhanVien**  | maNV `<br>`hoTen `<br>`taiKhoan `<br>`sdt               | quanLyXeRa()`<br>`quanLyXeVao()`<br>`quanLyVeXe()`<br>`quanLyBaoCao() |
| **QuanTri**   | tenQT `<br>`maQT `<br>`sdt                                | quanLyNhanVien()`<br>`xemBaoCao()                                         |
| **BaiGuiXe**  | tenBai `<br>`diaChi                                         | ghiNhanXeVao()`<br>`ghiNhanXeRa()                                         |
| **Xe**        | maXe `<br>`bienSo `<br>`loaiXe                            | timKiem()`<br>`themXe()                                                   |
| **VeXe**      | maVe `<br>`thoiGianVao `<br>`thoiGianRa `<br>`trangThai | capNhatTrangThai()`<br>`thongTinThoiGianGui()`<br>`traCuuVe()           |
| **BaoCao**    | maBaoCao `<br>`ngayTao `<br>`nguoiTao `<br>`noiDung     | xuatBaoCao()`<br>`thongKeDoanhThu()`<br>`capNhatBaoCao()                |

### 6.4 Biểu đồ tuần tự

Biểu đồ tuần tự kịch bản "đăng nhập"

<p align="center">
  <img src="images/sq_login.png" width="400">
</p>

Biểu đồ tuần tự cho kịch bản "đăng xuất"

<p align="center">
  <img src="images/sq_logout.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "xe vào"

<p align="center">
  <img src="images/sq_xe_vao2.png" width="400">
</p>

Biểu đồ tuần tự cho kịch bản " Ghi Xe ra"

<p align="center">
  <img src="images/sq_xe_ra.png" width="400">
</p>

Biểu đồ tuần tự cho kịch bản "Thêm vé mới"

<p align="center">
  <img src="images/sq_them_ve_moi.png" width="400">
</p>x

Biểu đồ tuần tự cho kịch bản "Cập nhật trạng thái vé"

<p align="center">
  <img src="images/sq_update_ve.png" width="400">
</p>

Biểu đồ tuần từ cho kịch bản " Tra cứu vé"

<p align="center">
  <img src="images/tt_tracuuve.png" width="400">
</p>

Biểu đồ tuần tự cho kịch bản " Thêm nhân viên"

<p align="center">
  <img src="images/themnv.png" width="400">
</p>

Biểu đồ tuần tư cho kịch bản " Cập nhật thông tin nhân viên "

<p align="center">
  <img src="images/capnhatttnv.png" width="400">
</p>

Biểu đồ tuần tự cho kịch bản "Xóa nhân viên "

<p align="center">
  <img src="images/xoanv.png" width="400">
</p>

Biểu đồ tuần tự cho kịch bản "Phân quyền người dùng"

<p align="center">
  <img src="images/sq_phan_quyen.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "Tạo báo cáo"

<p align="center">
  <img src="images/sq_tao_bao_cao.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản"Sửa báo cáo"

<p align="center">
  <img src="images/sq_sua_bao_cao.png" width="400">
</p>

Biểu đồ kịch bản tuần tự cho kịch bản "Xoá báo cáo"

<p align="center">
  <img src="images/sq_xoa_bc.png" width="400">
</p>

### 6.5 Biểu đồ hoạt động

Biểu đồ hoạt động cho kịch bản "đăng ký"

<p align="center">
  <img src="images/AC_dangKy.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "đăng nhập"

<p align="center">
  <img src="images/AC_dangNhap.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "Cập nhật trạng thái xe"

<p align="center">
  <img src="images/AC_capNhatTrangThaiXe.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "Thêm nhân viên"

<p align="center">
  <img src="images/AC_themNhanVien.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "Tra cứu vé"

<p align="center">
  <img src="images/AC_traCuuVe.png" width="400">
</p>

Biểu đồ hoạt động cho kịch bản "Xóa nhân viên"

<p align="center">
  <img src="images/AC_xoaNhanVien.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Thêm vé mới"

<p align="center"> 
<img src="images/AC_them_ve_moi.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Nhận xe ra"

<p align="center"> 
<img src="images/AC_nhan_xe_ra.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Nhận xe vào"

<p align="center"> 
<img src="images/AC_nhan_xe_vao.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Phân quyền người dùng"

<p align="center"> 
<img src="images/AC_phan_quyen.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Cập nhật thông tin nhân viên"

<p align="center"> 
<img src="images/AC_cap_nhap_nhan_vien.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Tạo báo cáo"

<p align="center"> 
<img src="images/AC_tao_bao_cao.png" width="400">
</p>

Biểu đồ hoạt động chức năng "Sửa báo cáo"

<p align="center"> 
<img src="images/AC_sua_bao_cao.png" width="400">
</p>

# VII. Giao diện của hệ thống

7.1  Đăng nhập hệ thống

![1768545860248](image/Phan_tich_thiet_ke/1768545860248.png)

7.2 Thêm mới vé xe

![1768545875832](image/Phan_tich_thiet_ke/1768545875832.png)

7.3 Ghi nhận xe vào

![1768545891972](image/Phan_tich_thiet_ke/1768545891972.png)

7.4 Ghi nhận xe ra

![1768545899050](image/Phan_tich_thiet_ke/1768545899050.png)

7.5 Menu chính

   ![1768545899050](image/Phan_tich_thiet_ke/1768545899050.png)
5. Menu chính![1768545906251](image/Phan_tich_thiet_ke/1768545906251.png)

# VIII.Thiết kế Cơ sở dữ liệu

Cơ sở dữ liệu của hệ thống Quản lý bãi xe sử dụng MySQL, tên bảng được đặt bằng tiếng việt viết liền không dấu, chữ cái đầu viết hoa để thống nhất nghiệp vụ cho từng hệ thống

7.1 Thiết kế cơ sở dữ liệu Quản lý người dùng và phân quyền

Các bảng chính :

NhanVien: Dùng để quản lý nhân viên

TaiKhoan: dùng để quản lý tài  khoản

VaiTro: quản lý vai trò

PhanQuyen: quản lý quyền

NhatKyHeThong: quản lý nhật ký hoạt động tránh gian lận

7.1.1 Biểu đồ ERD quản lý người dùng và phân quyền

<p align="center">
  <img src="images/erd_qly_nguoi_dung.png" width="400">
</p>

7.2 Thiết kế cơ sở dữ liệu Quản lý  Phương tiện và Nhận diện xe

Các bảng chính:

Xe: Lưu trữ biển số định danh phương tiện

LoaiXe: Quản lý đơn giá theo từng loại phương tiện

HinhAnhXe: Lưu ảnh camera nhận diện biển số đối soát

LuotGui:  Ghi nhận chi tiết thi gian và phí của từng lượt xe

7.2.1 Biểu đồ ERD Quản lý  Phương tiện và Nhận diện xe

<p align="center">
  <img src="images/erd_qlyphuongtien.png" width="400">
</p>

7.3 Thiết kế cơ sở dữ liệu Quản lý vé và lượt gửi xe

Các bảng chính:

LoaiVe: Phân loại vé ngày/tháng

VeGui: Lưu thông tin vé được tạo ra

TrangThaiVe: Quản lý tình trạng của vé (vd: Đang gửi, Đã huỷ....)

LuotGui: Ghi nhận lượt gửi, gửi thành công/thất bại

7.3.1 Biểu đồ ERD Quản lý vé và lượt gửi xe

![1768804764638](image/Phan_tich_thiet_ke/1768804764638.png)

7.4 Thiết kế cơ sở dữ liệu Quản lý bãi xe và điều phối

Các bảng chính:

BaiXe: Lưu thông tin tổng quát của bãi xe

KhuVuc: Quản lý khu vực và phân khu trong một bãi xe

ChoDoXe: Quản lý vị trí đỗ xe cụ thể

LichSuDoXe: Lịch sử xe ra/vào

7.4.1 Biểu đồ ERD Quản lý bãi xe và điều phối

<p align="center">
  <img src="images/erd_QLybaixevafDieuPhoi.png" width="400">
</p>

7.5 Thiết kế cơ sở dữ liệu Thanh toán và Báo cáo

Các bảng chính:

BangGiaGuiXe: Quy định phí gửi

ChiTietHoaDon: Cách tính tiền cụ thể

HoaDon: ghi nhận doanh thu

BaoCaoThongKe: Xuất báo cáo

BaoCao_HoaDon: bảng phụ liên kết giữa hóa đơn và báo cáo

7.5.1 Biểu đồ ERD Thanh toán và báo cáo

<p align="center">
  <img src="images/ERD_ThanhToan&BaoCao.png" width="400">
</p>
