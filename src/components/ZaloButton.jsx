export default function ZaloButton() {
  const phone = '0941905990';
  const zaloLink = `https://zalo.me/${phone}`;
  return (
    <a
      className="zalo-fab"
      href={zaloLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Zalo 0941 905 990"
      title="Chat Zalo 0941 905 990"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="white"/>
        <path d="M8 16h8l-4-8-4 8z" fill="#0068ff"/>
        <path d="M9 10h6" stroke="#0068ff" strokeWidth="2"/>
      </svg>
      <span className="zalo-fab__label">Zalo</span>
    </a>
  );
}
