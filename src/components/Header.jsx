export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
  <a href="#hero" className="brand">K.A.I Architect</a>
        <nav className="nav">
          <a href="#about">Giới thiệu</a>
          <a href="#services">Dịch vụ</a>
          <a href="#projects">Dự án</a>
          <a href="#contact" className="btn btn--sm">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}
