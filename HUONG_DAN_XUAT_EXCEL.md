# Hướng dẫn sử dụng tính năng Xuất file

## Tính năng đã được thêm vào trang Báo cáo

### 1. Xuất báo cáo ra Excel
- **Vị trí**: Nút icon Excel (📊) trong cột "Thao tác" của mỗi dòng báo cáo
- **Chức năng**: Xuất chi tiết của một báo cáo cụ thể thành file Excel với nhiều sheets:
  - **Sheet 1 - Chi tiết báo cáo**: Thông tin chi tiết báo cáo (mã, tiêu đề, loại, kỳ báo cáo, trạng thái, ngày tạo)
  - **Sheet 2 - Dữ liệu liên quan**: Dữ liệu doanh số hoặc công nợ đại lý tùy theo loại báo cáo
    - Nếu là báo cáo doanh thu → Hiển thị doanh số đại lý
    - Nếu là báo cáo công nợ → Hiển thị công nợ đại lý
- **Tên file**: `BaoCao_[Mã báo cáo]_[Ngày].xlsx`
- **Ví dụ**: `BaoCao_BC4_19-10-2025.xlsx`

### 2. Xuất báo cáo ra PDF
- **Vị trí**: Nút icon Download (⬇️) trong cột "Thao tác" của mỗi dòng báo cáo
- **Chức năng**: Xuất chi tiết của một báo cáo cụ thể thành file PDF với định dạng chuyên nghiệp:
  - **Phần header**: Tiêu đề "BÁO CÁO CHI TIẾT" với màu xanh nổi bật
  - **Chi tiết báo cáo**: Mã, tiêu đề, loại, kỳ báo cáo, trạng thái, ngày tạo
  - **Footer**: Số trang và ngày xuất báo cáo
- **Tên file**: `BaoCao_[Mã báo cáo]_[Ngày].pdf`
- **Ví dụ**: `BaoCao_BC4_20-10-2025.pdf`

## Thư viện sử dụng

### Xuất Excel
- **xlsx**: Thư viện để tạo và xuất file Excel
- **Phiên bản**: Latest
- **Cài đặt**: `npm install xlsx`

### Xuất PDF
- **html2pdf.js**: Thư viện để chuyển đổi HTML sang PDF với hỗ trợ Unicode hoàn toàn
- **Phiên bản**: Latest
- **Cài đặt**: `npm install html2pdf.js`
- **Ưu điểm**: Hỗ trợ đầy đủ tiếng Việt, font Unicode, định dạng đẹp mắt

## Định dạng file

### File Excel (.xlsx)
- **Định dạng**: .xlsx (Excel 2007+)
- **Encoding**: UTF-8 (hỗ trợ tiếng Việt đầy đủ)
- **Tự động định dạng**: Số liệu, ngày tháng được định dạng phù hợp
- **Multiple sheets**: Mỗi file có thể chứa nhiều sheet với dữ liệu khác nhau
- **Hỗ trợ mở bằng**: Microsoft Excel, Google Sheets, LibreOffice Calc

### File PDF (.pdf)
- **Định dạng**: .pdf (Portable Document Format)
- **Layout**: A4, portrait orientation
- **Font**: Arial Unicode MS (hỗ trợ tiếng Việt hoàn toàn ✓)
- **Encoding**: UTF-8 (hỗ trợ đầy đủ tiếng Việt có dấu)
- **Màu sắc**: 
  - Header báo cáo: Xanh (#3B82F6)
  - Dòng chẵn: Nền xám nhạt (#f5f5f5)
- **Nội dung**:
  - Tiêu đề báo cáo với đường kẻ
  - Thông tin chi tiết báo cáo trong bảng (mã, tiêu đề, loại, kỳ báo cáo, trạng thái, ngày tạo)
  - Footer với ngày xuất
- **Hỗ trợ mở bằng**: Adobe Acrobat Reader, trình duyệt web, các ứng dụng đọc PDF
- **Cách tạo**: HTML → Canvas → PDF (đảm bảo hiển thị chính xác)

## Lưu ý

- File sẽ được tải xuống tự động vào thư mục Downloads của trình duyệt
- Tên file có chứa ngày xuất để dễ quản lý
- Dữ liệu trong file Excel hỗ trợ đầy đủ tiếng Việt ✓
- **File PDF hiện nay đã hỗ trợ đầy đủ tiếng Việt** ✓ (sử dụng html2pdf.js với font Unicode)
  - Tất cả ký tự tiếng Việt có dấu được hiển thị chính xác
  - Định dạng bảng đẹp mắt và chuyên nghiệp
- Cả hai định dạng đều có thể in trực tiếp hoặc gửi qua email
