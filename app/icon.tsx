import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbfcff"
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 112,
            background: "#2a51e8",
            color: "#ffffff",
            fontSize: 132,
            fontWeight: 900,
            letterSpacing: 0,
            boxShadow: "0 42px 110px rgba(42,81,232,0.26)"
          }}
        >
          CH
        </div>
      </div>
    ),
    size
  );
}
