import '../assets/css/notification.css';

export default function Notification({ logo, message }) {
  // 1. Tentukan emoji berdasarkan props.logo
  let emoji = '💎'; // Default jika tidak sesuai
  if (logo === 'success') emoji = '✅';
  if (logo === 'error') emoji = '❌';

  // 2. Tentukan nama class untuk styling jika dibutuhkan
  const logoClass = logo ? `${logo}-logo` : 'default-logo';

  return (
    <div className="container-notification">
      <div className="notification">
        {/* Render emoji dan class secara dinamis langsung dari React */}
        <div className="notification-logo" className={logoClass}>
          {emoji}
        </div>
        <div className="notification-content">
          {message ?? 'Default message'}
        </div>
      </div>
    </div>
  );
}