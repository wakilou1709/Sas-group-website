export default function TestPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1890ff', fontSize: '48px' }}>✅ Le serveur fonctionne!</h1>
      <p style={{ fontSize: '24px', marginTop: '20px' }}>
        SAS Group - Site Web Opérationnel
      </p>
      <div style={{ marginTop: '40px', padding: '20px', background: '#e6f7ff', borderRadius: '8px' }}>
        <h2>Caractéristiques:</h2>
        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>✨ Design moderne</li>
          <li>🌍 Multilingue (FR/EN/SW)</li>
          <li>🏗️ Section BTP</li>
          <li>💧 Section Wateri</li>
          <li>📱 Responsive</li>
        </ul>
      </div>
      <p style={{ marginTop: '40px' }}>
        <a href="/" style={{ color: '#1890ff', fontSize: '20px' }}>
          ← Retour à la page d'accueil
        </a>
      </p>
    </div>
  );
}
