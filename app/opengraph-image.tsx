import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Camp Interzone — A Hidden Café at the Edge of the Known World";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1E120A",
          padding: "80px",
        }}
      >
        {/* Top accent line */}
        <div style={{ width: "80px", height: "2px", backgroundColor: "#906558", marginBottom: "48px" }} />

        {/* Camp name */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "80px",
            fontWeight: 300,
            color: "#ffffff",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          INTERZONE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "22px",
            color: "#906558",
            letterSpacing: "0.15em",
            marginBottom: "48px",
          }}
        >
          Somewhere in the dust, a lantern is on.
        </div>

        {/* Bottom accent line */}
        <div style={{ width: "80px", height: "2px", backgroundColor: "#906558", marginBottom: "32px" }} />

        {/* Location */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#6B5045",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Black Rock City — Est. 2019
        </div>
      </div>
    ),
    { ...size }
  );
}
