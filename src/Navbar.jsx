export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        maxWidth: "100vw",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px", // reduced side padding
        backgroundColor: "#fff",
        fontFamily: "Plus Jakarta Sans, sans-serif",
        boxSizing: "border-box",
        background:"transparent"
      }}
    >
      {/* Left side: Logo + Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        {/* Logo */}
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 16,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            margin: 0,
          }}
        >
          <span style={{ color: "#F43F5E" }}>/</span>
          <span style={{ color: "#18181B" }}>rareblocks</span>
        </h1>

        {/* Navigation Links */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            gap: 30,
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="#" style={linkStyle}>
              Solutions
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Industries
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Fees
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              About Rareblocks
            </a>
          </li>
        </ul>
      </div>

      {/* Right side: Sign in + Button */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a href="#" style={linkStyle}>
          Sign in
        </a>
        <button
          style={{
            backgroundColor: "#18181B",
            color: "white",
            border: "none",
            borderRadius: 10,
            padding: "10px 20px",
            fontFamily: "Plus Jakarta Sans",
            fontSize: 14,
            fontWeight: 'bold',
            cursor: "pointer",
            transition: "0.3s",
            
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Create free account
        </button>
      </div>
    </nav>
  );
}

// Reusable link style
const linkStyle = {
  fontSize: 14,
  color: "#18181B",
  fontWeight: 500,
  textDecoration: "none",
  transition: "0.3s",
};
