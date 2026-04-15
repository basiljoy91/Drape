import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #5a1b1f 0%, #8d3a3f 50%, #e7c6a3 100%)",
          color: "#f8e7d4",
          padding: "64px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1px solid rgba(248,231,212,0.35)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>Premium Occasionwear</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 120, lineHeight: 0.9 }}>Drape</div>
            <div style={{ fontSize: 40, maxWidth: 760 }}>Sarees, bridal edits, blouses, accessories, and ceremonial fashion.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
