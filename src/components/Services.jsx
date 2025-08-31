const services = [
  { title: 'Thiết kế kiến trúc', desc: 'Nhà phố, biệt thự, homestay; giải pháp thông thoáng & tiết kiệm năng lượng.' },
  { title: 'Thiết kế nội thất', desc: 'Căn hộ, nhà ở, văn phòng; bố trí thông minh, vật liệu bền vững.' },
  { title: '3D Render & VR', desc: 'Phối cảnh 3D chân thực, walkthrough giúp hình dung không gian trước thi công.' },
  { title: 'Thi công trọn gói', desc: 'Dự toán chi tiết, quản lý tiến độ và chất lượng, bảo hành dài hạn.' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Dịch vụ</h2>
        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
