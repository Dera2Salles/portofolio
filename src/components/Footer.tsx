import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: "var(--mocha-crust)",
      borderTop: "1px solid var(--mocha-s0)",
      padding: "32px 0",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "flex", flexDirection: "row",
          justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "16px",
        }}>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 800, color: "var(--mocha-text)", letterSpacing: "0.05em" }}>
              DERANDRAINY MARIE MARTINOT DE SALLES
            </p>
            <p style={{ fontSize: "12px", color: "var(--mocha-ov1)", marginTop: "2px", fontWeight: 500 }}>
              Full Stack Developer
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "12px", color: "var(--mocha-ov0)" }}>
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>

          <div>
            <a
              href="mailto:dera.ah.14@gmail.com"
              style={{
                fontSize: "13px", fontWeight: 600,
                color: "var(--mocha-sub1)", textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mocha-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mocha-sub1)")}
            >
              dera.ah.14@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
