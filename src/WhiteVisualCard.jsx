import MyDesign from "./MyDesign";
import Lines from "./Lines";

export default function WhiteVisualCard(props) {
  return (
    <div
      data-layer="Card 2"
      className="Card2"
      style={{
        width: "346px",
        height: "248px",
        position: "absolute",
        top: 80,
        right: 224,
        transform: props.transforming,
      }}
    >
      {/* Shadow */}
      <div
        data-layer="Shadow"
        style={{
          width: "264px",
          height: "154px",
          left: "0px",
          top: "60px",
          position: "absolute",
          transform: "rotate(16.72deg)",
          transformOrigin: "top left",
          background:
            "linear-gradient(90deg, #4484FF 0%, #44B0FF 23%, #FF44EC 49%, #44A5FF 74%, #F2FF5E 100%)",
          boxShadow: "55px 55px 55px",
          filter: "blur(28px)",
          opacity: 0.6,
        }}
      />

      {/* Background */}
      <div
        data-layer="BG"
        style={{
          width: "319px",
          height: "202px",
          left: "0px",
          top: "49px",
          position: "absolute",
          transform: "rotate(16.72deg)",
          transformOrigin: "top left",
          background: "white",
          borderRadius: "13px",
          overflow: "hidden",
        }}
      ></div>

      {/* Name */}
      <div
        style={{
          width: "104.5px",
          height: "15.7px",
          left: "-23px",
          top: "210px",
          position: "absolute",
          transform: "rotate(16.72deg)",
          color: "#18181B",
          fontSize: "10.45px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: "15.7px",
          letterSpacing: "0.87px",
        }}
      >
        Esther Howard
      </div>

      {/* Company */}
      <div
        style={{
          width: "119px",
          height: "15.7px",
          left: "-30px",
          top: "230px",
          position: "absolute",
          transform: "rotate(16.72deg)",
          opacity: 0.5,
          color: "#18181B",
          fontSize: "9.7px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: "15.7px",
          letterSpacing: "0.87px",
        }}
      >
        RJ Development INC
      </div>

      {/* rareblocks */}
      <div
        style={{
          width: "131px",
          height: "26px",
          left: "158px",
          top: "130px",
          position: "absolute",
          transform: "rotate(16.72deg)",
        }}
      >
        <span
          style={{
            color: "#F43F5E",
            fontSize: "14.1px",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: "26px",
            letterSpacing: "2.6px",
          }}
        >
          /
        </span>
        <span
          style={{
            color: "#18181B",
            fontSize: "13.3px",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: "26px",
            letterSpacing: "2.6px",
          }}
        >
          rareblocks
        </span>
      </div>
      <MyDesign
        transforming="rotate(25.5deg) scale(0.8)"
        left="-15px"
        top="127px"
      />
      {/* ✅ Visa Logo (placed LAST, so it appears on top) */}
      <div style={{ width: 114.12, height: 64.97, position: "relative" }}>
        <div
          data-svg-wrapper
          style={{
            left: 160,
            bottom: -192,
            position: "absolute",
          }}
        >
          <svg
            width="76"
            height="52"
            viewBox="0 0 98 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.0538 46.5278L27.5687 43.9788L42.6622 12.9811L51.1482 15.5303L36.0538 46.5278ZM30.221 9.24371L15.3978 29.2298L15.8906 24.1152L15.891 24.1172L17.4387 8.6031C17.4387 8.6031 17.975 5.56497 14.2952 4.45954L0.922044 0.442174L0.599347 0.946873C0.599347 0.946873 4.43329 3.02625 8.35594 7.33829L7.22188 37.8675L16.0626 40.5233L39.3529 11.987L30.221 9.24371ZM87.17 61.8833L94.9611 64.2238L97.9589 29.5915L91.138 27.5425C87.9883 26.5963 86.4915 28.7947 86.4915 28.7947L64.7756 55.156L73.6207 57.8131L76.8438 53.5034L87.6304 56.7438L87.17 61.8833ZM81.2964 47.55L89.4185 36.6931L88.2628 49.6428L81.2964 47.55ZM72.8751 30.6018L76.1884 23.9669C76.1884 23.9669 72.8788 21.4234 68.9837 20.2533C64.773 18.9884 54.2208 17.8249 51.5325 26.7737C49.0032 35.1934 60.7077 38.8236 59.3792 43.2461C58.0506 47.6687 47.7619 43.714 45.1256 39.8815L41.6658 46.8203C41.6658 46.8203 44.9017 49.7988 50.6904 51.5377C56.4808 53.2772 66.1167 52.9032 68.568 44.7433C71.1135 36.2696 59.5091 31.9234 60.6158 28.2393C61.7237 24.5545 69.8451 27.5103 72.8751 30.6018Z"
              fill="#2566AF"
            />
          </svg>
        </div>

        <div
          data-svg-wrapper
          style={{
            left: 159,
            bottom: -161,
            position: "absolute",
          }}
        >
          <svg
            width="15"
            height="21"
            viewBox="0 0 18 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8916 24.1163L17.4394 8.60223C17.4394 8.60223 17.9756 5.5641 14.2958 4.45867L0.922669 0.441305L0.599972 0.946004C0.599972 0.946004 6.62747 4.20899 11.2934 11.052C15.7554 17.5933 15.8916 24.1163 15.8916 24.1163Z"
              fill="#E6A540"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
