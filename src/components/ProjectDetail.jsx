import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PROJECTS = {
  'khach-hang-1': {
    title: 'Minh Anh House',
    count: 12,
    basePath: `${process.env.PUBLIC_URL}/projects/khach-hang-1`,
    description: 'Thiết kế kiến trúc & nội thất — 12 hình ảnh thực tế',
  },
  'ngoc-bunn-studio': {
    title: 'Ngọc Búnn Studio',
    count: 3,
    basePath: `${process.env.PUBLIC_URL}/projects/ngoc-bunn-studio`,
    description: 'Thiết kế nội thất studio — 3 hình ảnh',
  },
  'koi-coffee': {
    title: 'KOI Coffee',
  count: 14,
    basePath: `${process.env.PUBLIC_URL}/projects/koi-coffee`,
  description: 'Thiết kế nội thất quán cà phê — 3 hình ảnh',
  },
  'du-an-mau-1': {
    title: 'Tăng House',
    count: 6,
    basePath: `${process.env.PUBLIC_URL}/projects/du-an-mau-1`,
    description: 'Thiết kế kiến trúc & nội thất — 6 hình ảnh',
  },
  'du-an-mau-2': {
    title: 'Tuan House',
    count: 19,
    basePath: `${process.env.PUBLIC_URL}/projects/du-an-mau-2`,
    description: 'Bộ ảnh mẫu — 3 hình ảnh',
  },
  'du-an-mau-3': {
    title: 'Dự án Mẫu 3',
    count: 3,
    basePath: `${process.env.PUBLIC_URL}/projects/du-an-mau-3`,
    description: 'Bộ ảnh mẫu — 3 hình ảnh',
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS[slug];

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  // Load ảnh từ manifest.json nếu có; nếu không, fallback theo count 01.jpg .. NN.jpg
  useEffect(() => {
    let canceled = false;
    async function load() {
      if (!project) return;
      // If count provided, use count-based filenames and skip manifest
      if (project.count && project.count > 0) {
        const imgs = Array.from({ length: project.count }).map((_, i) => ({
          src: `${project.basePath}/${String(i + 1).padStart(2, '0')}.jpg`,
          alt: `${project.title} - Ảnh ${i + 1}`,
        }));
        if (!canceled) {
          setImages(imgs);
          setIndex(0);
        }
        return;
      }
      try {
        const res = await fetch(`${project.basePath}/manifest.json`, { cache: 'no-store' });
        if (res.ok) {
          const list = await res.json();
          if (!canceled && Array.isArray(list) && list.length) {
            setImages(list.map((name, i) => ({
              src: `${project.basePath}/${name}`,
              alt: `${project.title} - Ảnh ${i + 1}`,
            })));
            setIndex(0);
            return;
          }
        }
      } catch (_) {
        // ignore and fallback
      }
      if (!canceled) {
        setImages([]);
        setIndex(0);
      }
    }
    load();
    return () => { canceled = true; };
  }, [project]);

  const next = () => images.length && setIndex((i) => (i + 1) % images.length);
  const prev = () => images.length && setIndex((i) => (i - 1 + images.length) % images.length);

  // Lock body scroll while viewing detail to keep everything in one screen
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  // Keyboard navigation: ArrowLeft/ArrowRight to navigate, Escape to exit
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if (e.key === 'Escape') { e.preventDefault(); navigate(-1); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev, navigate]);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2>Không tìm thấy dự án</h2>
          <p className="muted">Dự án bạn truy cập không tồn tại.</p>
          <button className="btn" onClick={() => navigate('/')}>Về trang chủ</button>
        </div>
      </section>
    );
  }

  return (
    <div className="project-detail" role="dialog" aria-modal="true">
      <div className="pd__topbar container">
        <div>
          <button className="btn" onClick={() => navigate(-1)}>&larr; Quay lại</button>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h2 style={{ margin: 0 }}>{project.title}</h2>
          <p className="muted" style={{ margin: 0 }}>{index + 1} / {images.length} — {project.description}</p>
        </div>
        <div>
          <button className="btn" onClick={() => navigate('/')}>Trang chủ</button>
        </div>
      </div>

      <div className="pd__body">
        {images.length > 0 ? (
          <>
            <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Ảnh trước">‹</button>
            <img
              className="pd__img"
              src={images[index]?.src}
              alt={images[index]?.alt}
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.endsWith('.jpg')) {
                  img.onerror = null; // prevent loop
                  img.src = img.src.replace(/\.jpg$/i, '.png');
                } else {
                  img.style.visibility = 'hidden';
                }
              }}
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Ảnh sau">›</button>
          </>
        ) : (
          <p className="muted">Chưa có ảnh — thêm ảnh vào thư mục dự án và cập nhật manifest.json</p>
        )}
      </div>

      {images.length > 0 && (
        <div className="pd__thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`pd__thumb ${i === index ? 'pd__thumb--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Xem ảnh ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={(e) => {
                  const im = e.currentTarget;
                  if (im.src.endsWith('.jpg')) {
                    im.onerror = null;
                    im.src = im.src.replace(/\.jpg$/i, '.png');
                  } else {
                    im.style.visibility = 'hidden';
                  }
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
