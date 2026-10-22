import { ImageResponse } from "next/og";

export const alt = "Braulio De Leon, Senior / Staff Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "#ffffff",
        color: "#0f172a",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>
          Braulio De Leon
        </div>
        <div style={{ marginTop: 24, fontSize: 40, color: "#334155" }}>
          Senior / Staff Frontend Engineer
        </div>
        <div style={{ marginTop: 12, fontSize: 32, color: "#64748b" }}>
          Payments, Auth & Checkout · React · TypeScript
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #e2e8f0",
          paddingTop: 32,
          fontSize: 28,
          color: "#64748b",
        }}
      >
        <span>brauliodeleon.com</span>
        <span>Montevideo, Uruguay · Remote</span>
      </div>
    </div>,
    size
  );
}
