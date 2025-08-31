export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Liên hệ</h2>
        <p style={{marginBottom: 12}}>
          Liên hệ trực tiếp: <a href="mailto:Truongcamlbn@gmail.com">Truongcamlbn@gmail.com</a> ·
          <a href="tel:+84941905990"> 0941 905 990</a> ·
          <a href="tel:+84345629288"> 0345 629 288</a> ·
          <a href="https://zalo.me/0941905990" target="_blank" rel="noopener noreferrer">Zalo</a>
        </p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form__row">
            <input type="text" placeholder="Họ và tên" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Tiêu đề" />
          <textarea rows="4" placeholder="Nội dung" />
          <button className="btn btn--primary" type="submit">Gửi yêu cầu</button>
        </form>
      </div>
    </section>
  );
}
