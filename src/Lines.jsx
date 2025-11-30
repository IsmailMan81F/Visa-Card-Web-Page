export default function Lines() {
  return (
    <div
      style={{
        position: "absolute",
        top: -220,
        right: 400,
        opacity: 0.06,
        transform: "rotate(-5deg) ",
      }}
    >
      {Array.from({ length: 45 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 448.11,
            height: 0,
            left: 76.94 - i * 6.47,
            top: -8.32 + i * 0.58,
            position: "absolute",
            transform: "rotate(56deg)",
            transformOrigin: "top left",
            outline: "1.21px #18181B solid",
            outlineOffset: "-0.60px",
          }}
        />
      ))}
    </div>
  );
}
