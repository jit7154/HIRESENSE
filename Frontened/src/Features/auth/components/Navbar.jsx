import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();

  const onLogout = async () => {
    await handleLogout();
    navigate("/");
  };

  const initials = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "?";

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 40px', height: '64px',
      background: 'rgba(15,17,21,0.85)',
      borderBottom: '0.5px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      position: 'sticky', top: 0, zIndex: 100,
    }}>

      {/* Logo */}
      <Link to={user ? "/dashboard" : "/"} style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        fontSize: '18px', fontWeight: 700, color: '#f3f4f6',
        textDecoration: 'none', letterSpacing: '0.04em'
      }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
        HireSense
      </Link>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {user ? (
          <>
            {/* Avatar + username */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(99,102,241,0.2)', border: '0.5px solid rgba(99,102,241,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 600, color: '#818cf8'
              }}>
                {initials}
              </div>
              <span style={{ fontSize: '14px', color: '#9ca3af' }}>{user.username}</span>
            </div>

            {/* Logout */}
            <button onClick={onLogout} style={{
              background: 'transparent', color: '#6b7280',
              border: '0.5px solid rgba(255,255,255,0.1)',
              padding: '7px 16px', borderRadius: '8px',
              fontSize: '13px', cursor: 'pointer',
            }}>
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{
              color: '#9ca3af', fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', padding: '7px 16px',
              borderRadius: '8px', border: '0.5px solid transparent',
            }}>
              Sign in
            </Link>
            <Link to="/register">
              <button style={{
                background: '#6366f1', color: '#fff', border: 'none',
                padding: '8px 20px', borderRadius: '8px',
                fontSize: '14px', fontWeight: 500, cursor: 'pointer',
              }}>
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;