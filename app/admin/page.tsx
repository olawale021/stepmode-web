'use client';

import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://fivafit-backend.onrender.com';

interface User {
  id: string;
  email: string;
  full_name: string | null;
  username: string | null;
  push_notifications_enabled: boolean;
  has_push_token: boolean;
  created_at: string;
}

interface SendResult {
  total: number;
  sent: number;
  skipped: number;
  failed: number;
}

export default function AdminDashboard() {
  const [adminKey, setAdminKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [sendToAll, setSendToAll] = useState(false);
  const [result, setResult] = useState<SendResult | null>(null);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/admin/users`, {
        headers: { 'x-admin-key': adminKey },
      });
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
        setAuthenticated(true);
      } else {
        setError(data.error || 'Failed to authenticate');
      }
    } catch (err: any) {
      setError(err.message || 'Connection failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!title || !body) {
      setError('Title and body are required');
      return;
    }
    if (!sendToAll && selectedUsers.size === 0) {
      setError('Select at least one user or check "Send to All"');
      return;
    }

    setSending(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/api/admin/send-notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({
          title,
          body,
          sendToAll,
          userIds: sendToAll ? undefined : Array.from(selectedUsers),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
        setTitle('');
        setBody('');
      } else {
        setError(data.error || 'Failed to send');
      }
    } catch (err: any) {
      setError(err.message || 'Send failed');
    } finally {
      setSending(false);
    }
  };

  const toggleUser = (userId: string) => {
    const next = new Set(selectedUsers);
    if (next.has(userId)) {
      next.delete(userId);
    } else {
      next.add(userId);
    }
    setSelectedUsers(next);
    if (next.size > 0) setSendToAll(false);
  };

  const selectAll = () => {
    if (selectedUsers.size === filteredUsers.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(filteredUsers.map(u => u.id)));
      setSendToAll(false);
    }
  };

  const filteredUsers = users.filter(u => {
    const q = search.toLowerCase();
    return (
      (u.email?.toLowerCase().includes(q)) ||
      (u.full_name?.toLowerCase().includes(q)) ||
      (u.username?.toLowerCase().includes(q))
    );
  });

  const usersWithTokens = users.filter(u => u.has_push_token).length;

  if (!authenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <h1 style={styles.loginTitle}>StepMode Admin</h1>
          <p style={styles.loginSubtitle}>Enter your admin key to continue</p>
          <input
            type="password"
            placeholder="Admin Secret Key"
            value={adminKey}
            onChange={e => setAdminKey(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && fetchUsers()}
            style={styles.input}
          />
          <button onClick={fetchUsers} disabled={loading || !adminKey} style={styles.primaryBtn}>
            {loading ? 'Authenticating...' : 'Login'}
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>StepMode Admin</h1>
        <div style={styles.stats}>
          <span style={styles.stat}>{users.length} users</span>
          <span style={styles.stat}>{usersWithTokens} with push tokens</span>
        </div>
      </header>

      <div style={styles.content}>
        {/* Compose Section */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Send Notification</h2>

          <input
            type="text"
            placeholder="Notification Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Notification Body"
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={3}
            style={{ ...styles.input, resize: 'vertical' as const }}
          />

          <div style={styles.sendOptions}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={sendToAll}
                onChange={e => {
                  setSendToAll(e.target.checked);
                  if (e.target.checked) setSelectedUsers(new Set());
                }}
              />
              Send to all users with push enabled
            </label>

            {!sendToAll && selectedUsers.size > 0 && (
              <span style={styles.selectedCount}>
                {selectedUsers.size} user{selectedUsers.size !== 1 ? 's' : ''} selected
              </span>
            )}
          </div>

          <button
            onClick={handleSend}
            disabled={sending || !title || !body || (!sendToAll && selectedUsers.size === 0)}
            style={{
              ...styles.primaryBtn,
              opacity: sending || !title || !body || (!sendToAll && selectedUsers.size === 0) ? 0.5 : 1,
            }}
          >
            {sending ? 'Sending...' : 'Send Notification'}
          </button>

          {result && (
            <div style={styles.resultBox}>
              Sent: {result.sent} | Skipped: {result.skipped} | Failed: {result.failed} | Total: {result.total}
            </div>
          )}
          {error && <p style={styles.error}>{error}</p>}
        </div>

        {/* Users Section */}
        <div style={styles.card}>
          <div style={styles.usersHeader}>
            <h2 style={styles.cardTitle}>Users</h2>
            <div style={styles.usersActions}>
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ ...styles.input, marginBottom: 0, maxWidth: 250 }}
              />
              <button onClick={selectAll} style={styles.secondaryBtn}>
                {selectedUsers.size === filteredUsers.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>
          </div>

          <div style={styles.userList}>
            {filteredUsers.map(user => (
              <div
                key={user.id}
                onClick={() => toggleUser(user.id)}
                style={{
                  ...styles.userRow,
                  backgroundColor: selectedUsers.has(user.id) ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
                  borderColor: selectedUsers.has(user.id) ? '#00ff88' : 'rgba(255,255,255,0.1)',
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedUsers.has(user.id)}
                  onChange={() => toggleUser(user.id)}
                  style={{ marginRight: 12 }}
                />
                <div style={styles.userInfo}>
                  <span style={styles.userName}>
                    {user.full_name || user.username || 'No name'}
                  </span>
                  <span style={styles.userEmail}>{user.email}</span>
                </div>
                <div style={styles.userBadges}>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: user.has_push_token ? 'rgba(0,255,136,0.2)' : 'rgba(255,100,100,0.2)',
                    color: user.has_push_token ? '#00ff88' : '#ff6464',
                  }}>
                    {user.has_push_token ? 'Token Active' : 'No Token'}
                  </span>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: user.push_notifications_enabled ? 'rgba(0,255,136,0.2)' : 'rgba(255,100,100,0.2)',
                    color: user.push_notifications_enabled ? '#00ff88' : '#ff6464',
                  }}>
                    {user.push_notifications_enabled ? 'Push ON' : 'Push OFF'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loginContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  loginCard: {
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 40,
    maxWidth: 400,
    width: '100%',
    textAlign: 'center',
  },
  loginTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 8,
  },
  loginSubtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    marginBottom: 24,
  },
  container: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
  },
  header: {
    padding: '24px 32px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#00ff88',
  },
  stats: {
    display: 'flex',
    gap: 16,
  },
  stat: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '6px 12px',
    borderRadius: 8,
  },
  content: {
    maxWidth: 900,
    margin: '0 auto',
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  card: {
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 24,
    border: '1px solid rgba(255,255,255,0.1)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 10,
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  primaryBtn: {
    width: '100%',
    padding: '14px 20px',
    backgroundColor: '#00ff88',
    color: '#000',
    border: 'none',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  secondaryBtn: {
    padding: '8px 16px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 8,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
  },
  sendOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    cursor: 'pointer',
  },
  selectedCount: {
    fontSize: 13,
    color: '#00ff88',
  },
  resultBox: {
    marginTop: 12,
    padding: '12px 16px',
    backgroundColor: 'rgba(0,255,136,0.1)',
    borderRadius: 8,
    color: '#00ff88',
    fontSize: 14,
    textAlign: 'center',
  },
  error: {
    color: '#ff6464',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
  usersHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  usersActions: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  userList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    maxHeight: 500,
    overflowY: 'auto',
  },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  userInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  userName: {
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
  },
  userEmail: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
  },
  userBadges: {
    display: 'flex',
    gap: 6,
  },
  badge: {
    fontSize: 11,
    padding: '4px 8px',
    borderRadius: 6,
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
};
