# K.A.I Architect Website

Website giới thiệu công ty thiết kế kiến trúc và nội thất K.A.I Architect của KTS. Trương Đình Nguyễn Trường.

## Thông tin dự án

- **Công ty**: K.A.I Architect
- **Kiến trúc sư**: KTS. Trương Đình Nguyễn Trường
- **Lĩnh vực**: Thiết kế kiến trúc & nội thất
- **Công nghệ**: React 19.1.1, Create React App

## Tính năng website

### 🏠 Các trang chính
- **Hero**: Giới thiệu và thông điệp chính
- **Về chúng tôi**: Thông tin công ty và điểm mạnh
- **Dịch vụ**: Thiết kế kiến trúc, nội thất, 3D/VR, thi công trọn gói
- **Dự án**: Portfolio công trình đã thực hiện
- **Liên hệ**: Form và thông tin liên lạc

### 📱 Tích hợp liên lạc
- **Email**: Truongcamlbn@gmail.com
- **Điện thoại**: 0941 905 990, 0345 629 288
- **Zalo**: 0941 905 990 (nút floating)

### 🖼️ Gallery & Media
- Gallery "Gia đình Minh Anh" với 12 hình ảnh thực tế
- Lightbox với navigation, responsive design
- Lazy loading cho tối ưu performance

### 🎨 Thiết kế
- Dark theme hiện đại với gradient background
- Responsive: desktop, tablet, mobile
- Typography và spacing tối ưu
- Hover effects và transitions mượt mà

## Cài đặt và chạy dự án

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm start
```
Website sẽ chạy tại [http://localhost:3000](http://localhost:3000)

### Build production
```bash
npm run build
```
Tạo bản build tối ưu trong thư mục `build/`

### Chạy tests
```bash
npm test
```

## Cấu trúc dự án

```
src/
├── components/
│   ├── Header.jsx          # Navigation bar
│   ├── Hero.jsx           # Landing section
│   ├── About.jsx          # Giới thiệu công ty
│   ├── Services.jsx       # Danh sách dịch vụ
│   ├── Projects.jsx       # Tổng quan dự án
│   ├── ProjectKhachHang1.jsx  # Gallery "Gia đình Minh Anh"
│   ├── Contact.jsx        # Form và thông tin liên hệ
│   ├── Footer.jsx         # Footer
│   └── ZaloButton.jsx     # Floating Zalo button
├── App.js                 # Main app component
├── App.css               # Main styles
└── index.js              # Entry point

public/
├── projects/
│   └── khach-hang-1/     # Thư mục chứa 12 ảnh dự án
│       ├── 01.jpg
│       ├── 02.jpg
│       └── ... (12.jpg)
└── index.html
```

## Thêm nội dung

### Thêm ảnh dự án mới
1. Tạo thư mục trong `public/projects/`
2. Thêm ảnh với tên `01.jpg`, `02.jpg`, v.v.
3. Tạo component gallery tương tự `ProjectKhachHang1.jsx`

### Chỉnh sửa thông tin liên hệ
- Sửa trong `src/components/Contact.jsx`
- Sửa trong `src/components/Footer.jsx`
- Sửa trong `src/components/ZaloButton.jsx`

### Cập nhật nội dung
- Hero: `src/components/Hero.jsx`
- Dịch vụ: `src/components/Services.jsx`
- Về chúng tôi: `src/components/About.jsx`

## Triển khai

Website sẵn sàng deploy lên các platform:
- Vercel
- Netlify
- GitHub Pages
- Hosting truyền thống

Chạy `npm run build` và upload thư mục `build/` lên server.

## SEO & Meta

- Title: "K.A.I Architect — Thiết kế Kiến trúc & Nội thất"
- Description: Đã tối ưu cho công ty thiết kế
- Responsive meta viewport
- Structured cho mobile-friendly

## Liên hệ

**KTS. Trương Đình Nguyễn Trường**
- Email: Truongcamlbn@gmail.com
- Phone: 0941 905 990, 0345 629 288
- Zalo: 0941 905 990
