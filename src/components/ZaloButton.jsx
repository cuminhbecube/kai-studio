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
  <img src={`${process.env.PUBLIC_URL}/zalo.png`} alt="Zalo" width="22" height="22" style={{ display: 'block' }} />
      <span className="zalo-fab__label">Zalo</span>
    </a>
  );
}
