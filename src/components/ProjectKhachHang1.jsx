import { useState } from 'react';

const IMAGES = Array.from({ length: 12 }).map((_, i) => ({
  src: `${process.env.PUBLIC_URL}/projects/khach-hang-1/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Công trình Gia đình Minh Anh - Ảnh ${i + 1}`,
}));

export default function ProjectKhachHang1() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const next = () => setIndex((i) => (i + 1) % IMAGES.length);
  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  return (
  <section id="khachhang1" className="section">
      <div className="container">
    <h2>Gia đình Minh Anh</h2>
        <p className="muted">Thiết kế kiến trúc & nội thất — 12 hình ảnh thực tế</p>
        <div className="gallery">
          {IMAGES.map((img, i) => (
            <button key={img.src} className="gallery__item" onClick={() => openAt(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" onError={(e) => { e.currentTarget.style.visibility = 'hidden'; e.currentTarget.parentElement.classList.add('gallery__item--fallback'); }} />
            </button>
          ))}
        </div>

        {open && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
            <button className="lightbox__close" onClick={close} aria-label="Đóng">×</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Ảnh trước">‹</button>
            <img className="lightbox__img" src={IMAGES[index].src} alt={IMAGES[index].alt} onClick={(e) => e.stopPropagation()} />
            <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Ảnh sau">›</button>
          </div>
        )}
      </div>
    </section>
  );
}
