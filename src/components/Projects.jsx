import { Link } from 'react-router-dom';

const projects = [
  { name: 'Minh Anh House', tag: 'Thiết kế & Thi công', thumb: `${process.env.PUBLIC_URL}/projects/khach-hang-1/01.jpg`, slug: 'khach-hang-1' },
  { name: 'Ngọc Búnn Studio', tag: 'Nội thất', thumb: `${process.env.PUBLIC_URL}/projects/ngoc-bunn-studio/01.jpg`, slug: 'ngoc-bunn-studio' },
  { name: 'KOI Coffee', tag: 'Thiết kế & Thi công', thumb: `${process.env.PUBLIC_URL}/projects/koi-coffee/01.jpg`, slug: 'koi-coffee' },
  { name: 'Tang House', tag: 'Thiết kế & Thi công', thumb: `${process.env.PUBLIC_URL}/projects/du-an-mau-1/01.jpg`, slug: 'du-an-mau-1' },
  { name: 'Tuan House', tag: 'Nội thất', thumb: `${process.env.PUBLIC_URL}/projects/du-an-mau-2/01.jpg`, slug: 'du-an-mau-2' },
  { name: 'Dự án Mẫu 3', tag: 'Kiến trúc', thumb: `${process.env.PUBLIC_URL}/projects/du-an-mau-3/01.jpg`, slug: 'du-an-mau-3' },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
    <h2>Dự án tiêu biểu</h2>
  <p className="muted">Xem đầy đủ bộ ảnh: <Link to="/du-an/ngoc-bunn-studio">Ngọc Búnn Studio</Link> · <Link to="/du-an/koi-coffee">KOI Coffee</Link></p>
        <div className="grid grid--3">
          {projects.map((p) => {
            const content = (
              <div className="project">
                <div className="project__thumb" aria-hidden="true">
                  {p.thumb && (
                    <img
                      src={p.thumb}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.src.endsWith('.jpg')) {
                          img.onerror = null; // prevent loop
                          img.src = img.src.replace(/\.jpg$/i, '.png');
                        } else {
                          img.style.visibility = 'hidden';
                        }
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  )}
                </div>
                <div className="project__meta">
                  <h3>{p.name}</h3>
                  <span className="tag">{p.tag}</span>
                </div>
              </div>
            );
            return p.slug ? (
              <Link key={p.name} to={`/du-an/${p.slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                {content}
              </Link>
            ) : (
              <div key={p.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
