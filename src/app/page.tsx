import styles from './page.module.css';

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        background: '#111111',
        border: '1px solid #333333',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          display: 'inline-block',
          background: '#ffffff',
          color: '#000000',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>
          Framework 03 / 14
        </div>
        <h1 style={{ color: '#ffffff', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          SecureShield Test Website - Next.js (React)
        </h1>
        <p style={{ color: '#888888', marginBottom: '1.5rem' }}>
          Next.js App Router project structure with Server/Client boundary support.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ background: '#1c1c1c', padding: '1rem', borderRadius: '8px', border: '1px solid #2a2a2a' }}>
            <span style={{ display: 'block', fontSize: '0.8rem', color: '#888888' }}>Architecture:</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff' }}>App Router (Server/Client)</span>
          </div>
          <div style={{ background: '#1c1c1c', padding: '1rem', borderRadius: '8px', border: '1px solid #2a2a2a' }}>
            <span style={{ display: 'block', fontSize: '0.8rem', color: '#888888' }}>SSR Protection:</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#3fb950' }}>SSR Guarded Client-Only</span>
          </div>
        </div>

        {/* SecureShield Next.js Client Provider Anchor */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.25rem' }}>
            🛡️ SecureShield Protection Status
          </h3>
          <p style={{ color: '#aaaaaa' }}>
            Client wrapper ready: &apos;use client&apos; SecurityProvider wraps root layout tree.
          </p>
        </div>
      </div>
    </main>
  );
}
