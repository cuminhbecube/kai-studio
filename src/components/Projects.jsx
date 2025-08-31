const projects = [
  { name: 'Gia đình Minh Anh', tag: 'Thiết kế & Thi công', thumb: `${process.env.PUBLIC_URL}/projects/khach-hang-1/01.jpg`, anchor: '#khachhang1' },
  { name: 'Biệt thự Phú Gia', tag: 'Kiến trúc' },
  { name: 'Căn hộ The River', tag: 'Nội thất' },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
    <h2>Dự án tiêu biểu</h2>
  <p className="muted">Xem đầy đủ bộ ảnh: <a href="#khachhang1">Gia đình Minh Anh</a></p>
        <div className="grid grid--3">
          {projects.map((p) => {
            const content = (
              <div className="project">
                <div
                  className="project__thumb"
                  aria-hidden="true"
                  style={p.thumb ? { backgroundImage: `url(${p.thumb})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                />
                <div className="project__meta">
                  <h3>{p.name}</h3>
                  <span className="tag">{p.tag}</span>
                </div>
              </div>
            );
            return p.anchor ? (
              <a key={p.name} href={p.anchor} style={{textDecoration: 'none', color: 'inherit'}}>
                {content}
              </a>
            ) : (
              <div key={p.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
