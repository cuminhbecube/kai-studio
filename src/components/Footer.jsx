export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
  <p>© {new Date().getFullYear()} K.A.I Architect — KTS. TRƯƠNG ĐÌNH NGUYỄN TRƯỜNG</p>
        <div className="footer__links">
          <a href="#about">Giới thiệu</a>
          <a href="#services">Dịch vụ</a>
          <a href="#projects">Dự án</a>
          <a href="mailto:Truongcamlbn@gmail.com">Email</a>
          <a href="tel:+84941905990">0941 905 990</a>
          <a href="https://zalo.me/0941905990" target="_blank" rel="noopener noreferrer">Zalo</a>
        </div>
      </div>
    </footer>
  );
}
