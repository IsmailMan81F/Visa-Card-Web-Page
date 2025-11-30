export default function Content() {
  return (
    <div
      style={{
        width: 360,
        height: 380,
        position: "relative",
        marginTop: 100,
        marginLeft: 130,
      }}
    >
      <div
        style={{
          width: 340,
          left: 0,
          top: 0,
          position: "absolute",
          color: "#18181B",
          fontSize: 44, // smaller
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 800,
          lineHeight: "48px",
          wordWrap: "break-word",
        }}
      >
        A special credit card made for Developers.
      </div>

      <div
        style={{
          width: 345,
          left: 5,
          top: 175,
          position: "absolute",
          color: "#52525B",
          fontSize: 14, // smaller
          fontFamily: "Inter",
          fontWeight: 400,
          lineHeight: "20px",
          wordWrap: "break-word",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        The ultimate credit card for developers, combining innovation, freedom,
        and seamless financial control.
      </div>

      {/* Input Field */}
      <div
        style={{
          width: 380,
          height: 54,
          top: 250,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 44,
            padding: "4px",
            background: "#FAFAFA",
            borderRadius: 12,
            border: "1px solid #A1A1AA",
            fontSize: 13,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 400,
            color: "#18181B",
            outline: "none",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <input
            type="email"
            placeholder="Enter email address"
            style={{
              fontSize: 13,
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              color: "#18181B",
              outline: "none",
              background: "#FAFAFA",
              border: "none",
              width: "51%",
              borderRadius:10,
              padding:'0 15px'
            }}
          />
          {/* Button */}
          <button
            style={{
              width: 150,
              height: 44,
              padding: 12,
              background: "#18181B",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              color: "white",
              fontSize: 15,
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              lineHeight: "22px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            Get Free Card
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          left: 5,
          top: 338,
          position: "absolute",
          color: "#18181B",
          fontSize: 30,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          lineHeight: "42px",
          wordWrap: "break-word",
        }}
      >
        2943
      </div>

      <div
        style={{
          width: 77,
          left: 95,
          top: 344,
          position: "absolute",
          color: "#18181B",
          fontSize: 11,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 400,
          lineHeight: "16px",
          wordWrap: "break-word",
        }}
      >
        Cards Delivered
      </div>

      <div
        style={{
          left: 210,
          top: 338,
          position: "absolute",
          textAlign: "right",
          color: "#18181B",
          fontSize: 30,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          lineHeight: "42px",
          wordWrap: "break-word",
        }}
      >
        $1M+
      </div>

      <div
        style={{
          width: 77,
          left: 300,
          top: 344,
          position: "absolute",
          color: "#18181B",
          fontSize: 11,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 400,
          lineHeight: "16px",
          wordWrap: "break-word",
        }}
      >
        Transaction Completed
      </div>
    </div>
  );
}
