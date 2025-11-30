import MyDesign from "./MyDesign";

export default function BlackCardVisual(props) {
  return (
    <div
      data-layer="Card 2"
      className="Card2"
      style={{
        width: "331px", // 75% of 441px
        height: "237px", // 75% of 316.21px
        position: "absolute",
        top: 320,
        right: 160,
        transform:props.transforming,
      }}
    >
      
      <div
        data-layer="Shadow"
        className="Shadow"
        style={{
          width: "277px", // 75% of 369.28px
          height: "162px", // 75% of 216.03px
          left: "313px", // 75% of 417.10px
          top: "181px", // 75% of 240.70px
          position: "absolute",
          transform: "rotate(171deg)",
          transformOrigin: "top left",
          background:
            "linear-gradient(90deg, #4484FF 0%, #44B0FF 23%, #FF44EC 49%, #44A5FF 74%, #F2FF5E 100%)",
          boxShadow: "10px 10px 59px",
          filter: "blur(29px)",
        }}
      />
      <div
        data-layer="BG"
        className="Bg"
        style={{
          width: "305px", // 75% of 406.50px
          height: "193px", // 75% of 257.15px
          left: "0px",
          top: "47px", // 75% of 62.07px
          position: "absolute",
          transform: "rotate(-9deg)",
          transformOrigin: "top left",
          background: "#383335ff",
          borderRadius: "12.6px", // 75% of 16.84px
        }}
      />
      <MyDesign transforming="scale(0.75)" left="25px" top="100px"/>
      <div
        data-layer="Jenny Wilson"
        className="JennyWilson"
        style={{
          width: "90px", // 75% of 120.15px
          height: "15px", // 75% of 20.21px
          left: "43px", // 75% of 56.72px
          top: "184px", // 75% of 245.33px
          position: "absolute",
          transform: "rotate(-9deg)",
          transformOrigin: "top left",
          color: "white",
          fontSize: "9.26px", // 75% of 12.35px
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: "15px",
          letterSpacing: "0.84px", // 75% of 1.12px
          wordWrap: "break-word",
        }}
      >
        Jenny Wilson
      </div>
      <div
        data-layer="Codes by JW"
        className="CodesByJw"
        style={{
          width: "114px", // 75% of 151.59px
          height: "15px",
          left: "45px", // 75% of 60.15px
          top: "200px", // 75% of 267.53px
          position: "absolute",
          transform: "rotate(-9deg)",
          transformOrigin: "top left",
          opacity: 0.5,
          color: "white",
          fontSize: "9.26px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: "15px",
          letterSpacing: "0.84px",
          wordWrap: "break-word",
        }}
      >
        Codes by JW
      </div>
      <div
        data-layer="/rareblocks"
        className="Rareblocks"
        style={{
          width: "125px", // 75% of 166.19px
          height: "25px", // 75% of 33.69px
          left: "162px", // 75% of 215.99px
          top: "36px", // 75% of 48.02px
          position: "absolute",
          transform: "rotate(-9deg)",
          transformOrigin: "top left",
        }}
      >
        <span
          style={{
            color: "#F43F5E",
            fontSize: "13.5px", // 75% of 17.97px
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: "25px",
            letterSpacing: "2.5px", // 75% of 3.37px
            wordWrap: "break-word",
          }}
        >
          /
        </span>
        <span
          style={{
            color: "white",
            fontSize: "12.75px", // 75% of 17px
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: "25px",
            letterSpacing: "2.5px",
            wordWrap: "break-word",
          }}
        >
          rareblocks
        </span>
      </div>
      {/* ✅ Visa Logo (placed LAST, so it appears on top) */}
      <div
        style={{
          width: 114.12,
          height: 64.97,
          position: "relative",
          transform: "rotate(-26deg)",
        }}
      >
        <div
          data-svg-wrapper
          style={{
            left: 177,
            top: 168,

            position: "absolute",
          }}
        >
          <svg
            width="68"
            height="55"
            viewBox="0 0 98 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.0538 46.5278L27.5687 43.9788L42.6622 12.9811L51.1482 15.5303L36.0538 46.5278ZM30.221 9.24371L15.3978 29.2298L15.8906 24.1152L15.891 24.1172L17.4387 8.6031C17.4387 8.6031 17.975 5.56497 14.2952 4.45954L0.922044 0.442174L0.599347 0.946873C0.599347 0.946873 4.43329 3.02625 8.35594 7.33829L7.22188 37.8675L16.0626 40.5233L39.3529 11.987L30.221 9.24371ZM87.17 61.8833L94.9611 64.2238L97.9589 29.5915L91.138 27.5425C87.9883 26.5963 86.4915 28.7947 86.4915 28.7947L64.7756 55.156L73.6207 57.8131L76.8438 53.5034L87.6304 56.7438L87.17 61.8833ZM81.2964 47.55L89.4185 36.6931L88.2628 49.6428L81.2964 47.55ZM72.8751 30.6018L76.1884 23.9669C76.1884 23.9669 72.8788 21.4234 68.9837 20.2533C64.773 18.9884 54.2208 17.8249 51.5325 26.7737C49.0032 35.1934 60.7077 38.8236 59.3792 43.2461C58.0506 47.6687 47.7619 43.714 45.1256 39.8815L41.6658 46.8203C41.6658 46.8203 44.9017 49.7988 50.6904 51.5377C56.4808 53.2772 66.1167 52.9032 68.568 44.7433C71.1135 36.2696 59.5091 31.9234 60.6158 28.2393C61.7237 24.5545 69.8451 27.5103 72.8751 30.6018Z"
              fill="#ffffffff"
            />
          </svg>
        </div>

        <div
          data-svg-wrapper
          style={{
            left: 175,
            top: 172,
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
