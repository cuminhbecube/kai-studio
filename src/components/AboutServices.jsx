const services = [
  { title: 'Thiết kế kiến trúc', desc: 'Nhà phố, biệt thự, homestay; giải pháp thông thoáng & tiết kiệm năng lượng.' },
  { title: 'Thiết kế nội thất', desc: 'Căn hộ, nhà ở, văn phòng; bố trí thông minh, vật liệu bền vững.' },
  { title: '3D Render & VR', desc: 'Phối cảnh 3D chân thực, walkthrough giúp hình dung không gian trước thi công.' },
  { title: 'Thi công trọn gói', desc: 'Dự toán chi tiết, quản lý tiến độ và chất lượng, bảo hành dài hạn.' },
];

export default function AboutServices() {
  return (
    <section id="about-services" className="section about-services">
      <div className="container">
        <div id="about" className="as__about">
          <h2>Về K.A.I Architect</h2>
          <p>
            Chúng tôi là đội ngũ kiến trúc sư và nhà thiết kế nội thất, chú trọng sự cân bằng giữa
            công năng, thẩm mỹ và ngân sách. Quy trình làm việc minh bạch, bàn giao đúng tiến độ.
          </p>
          <div className="about__grid">
            <div className="card">
              <h3>Thiết kế kiến trúc</h3>
              <p>Nhà phố, biệt thự, homestay với công năng tối ưu và thông gió chiếu sáng tốt.</p>
            </div>
            <div className="card">
              <h3>Thiết kế nội thất</h3>
              <p>Căn hộ, nhà ở, văn phòng theo phong cách hiện đại, tối giản hoặc tân cổ điển.</p>
            </div>
            <div className="card">
              <h3>Thi công & giám sát</h3>
              <p>Triển khai hồ sơ kỹ thuật, phối hợp thi công, kiểm soát chất lượng và chi phí.</p>
            </div>
          </div>
        </div>

        <div id="services" className="as__services">
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
      </div>
    </section>
  );
}
