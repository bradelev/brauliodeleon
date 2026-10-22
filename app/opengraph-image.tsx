import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";

export const alt = "Braulio De Leon, Senior / Staff Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs raw font files (it can't read woff2), so these come from
// @fontsource instead of next/font.
function font(pkg: string, file: string): Promise<Buffer> {
  return readFile(
    path.join(process.cwd(), "node_modules/@fontsource", pkg, "files", file)
  );
}

export default async function OpengraphImage(): Promise<ImageResponse> {
  const [sans, sansSemibold, mono] = await Promise.all([
    font("ibm-plex-sans", "ibm-plex-sans-latin-400-normal.woff"),
    font("ibm-plex-sans", "ibm-plex-sans-latin-600-normal.woff"),
    font("ibm-plex-mono", "ibm-plex-mono-latin-400-normal.woff"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "88px 96px",
        background: "#fcfcfc",
        color: "#18181b",
        fontFamily: "Plex Sans",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontFamily: "Plex Mono", fontSize: 26, color: "#c2410c" }}
        >
          Montevideo, Uruguay · remote, US time zones
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Braulio De Leon
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 38,
            lineHeight: 1.35,
            color: "#3f3f46",
            maxWidth: 900,
          }}
        >
          Senior / Staff Frontend Engineer. Payments, authentication and
          checkout in React and TypeScript.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "2px solid #e4e4e7",
          paddingTop: 28,
          fontFamily: "Plex Mono",
          fontSize: 26,
          color: "#71717a",
        }}
      >
        brauliodeleon.com
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plex Sans", data: sans, weight: 400 },
        { name: "Plex Sans", data: sansSemibold, weight: 600 },
        { name: "Plex Mono", data: mono, weight: 400 },
      ],
    }
  );
}
