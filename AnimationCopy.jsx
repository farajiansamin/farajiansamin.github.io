import React, { useEffect } from "react";
import anime from "animejs";

const AnimatedSVGComponent = () => {
  const styles = {
    svg: {
      display: "block",
      margin: "0 auto",
      marginTop: "-20px",
    },
    blend: {
      mixBlendMode: "multiply",
    },
    isolate: {
      isolation: "isolate",
    },
  };
  const commonPathStyle = {
    fillRule: "evenodd",
    strokeWidth: 80,
    strokeLinecap: "round",
    strokeLinejoin: "miter",
    strokeMiterlimit: 4,
    strokeOpacity: 1,
  };

  // Specific styles for elements
  const k4Style = {
    ...commonPathStyle,
    fill: "none",
    stroke: "#df871b",
  };

  const blendStyle = {
    ...commonPathStyle,
    mixBlendMode: "multiply",
    opacity: 1,
    fillOpacity: 1,
  };

  const circleStyle = {
    opacity: 1,
    fillOpacity: 1,
    stroke: "none",
    strokeWidth: 80,
    strokeLinecap: "round",
    strokeLinejoin: "miter",
    strokeMiterlimit: 4,
    strokeOpacity: 1,
  };
  useEffect(() => {
    const timeline = anime.timeline({
      autoplay: true,
      direction: "",
      loop: false,
    });

    function setDash(el) {
      if (el.nodeName === "path") {
        const dashoffset = anime.setDashoffset(el);
        el.style.dashArray = dashoffset;
        return [dashoffset - 1, 0];
      }
      return 0;
    }

    const animations = [
      { name: ".t1", x: 195.47816, y: 152.84847, stroke: "#dd5d20" },
      { name: ".t2", x: 254.09133, y: 152.65768, stroke: "#0b9444" },
      { name: ".h1", x: 387.71374, y: 152.65768, stroke: "#1f91ac" },
      { name: ".h2", x: 383.47816, y: 210.44844, stroke: "#df871b" },
      { name: ".h3", x: 510.41374, y: 152.65768, stroke: "#1f91ac" },
      { name: ".h4", x: 507, y: 152.36218, fill: "#df871b" },
      { name: ".i1", x: 192.47816, y: 348.64847, stroke: "#dd5d20" },
      { name: ".i2", x: 188.47816, y: 463.85818, stroke: "#dd5d20" },
      { name: ".i3", x: 258.09133, y: 348.56614, stroke: "#1f91ac" },
      { name: ".i4", x: 254, y: 348.36218, fill: "#ffffff" },
      { name: ".n1", x: 387.71374, y: 348.36614, stroke: "#da3931" },
      { name: ".n2", x: 499.004, y: 348.36614, stroke: "#da3931" },
      { name: ".n3", x: 395.7, y: 348.46218, stroke: "#0b9444" },
      { name: ".n4", x: 391.70001, y: 348.66217, fill: "#da3931" },
      { name: ".n5", x: 503, y: 463.16217, fill: "#da3931" },
      { name: ".k1", x: 188.32637, y: 544.48746, stroke: "#da3931" },
      { name: ".k2", x: 200.31263, y: 659.5965, stroke: "#1f91ac" },
      { name: ".k3", x: 196.31264, y: 659.39655, fill: "#da3931" },
      { name: ".k4", x: 252.924, y: 599.49118, stroke: "#df871b" },
    ];

    animations.forEach((animation, index) => {
      // Optimizing by combining properties and reducing delays/durations
      timeline.add({
        targets: animation.name,
        stroke: animation.stroke ? ["#000", animation.stroke] : undefined,
        fill: animation.fill ? ["#000", animation.fill] : undefined,
        translateX: {
          value: [100 * (index % 4) - animation.x + 100, -100],
        },
        translateY: {
          value: [100 * Math.floor(index / 4) - animation.y + 100, -100],
        },
        strokeDashoffset: {
          value: setDash,
        },
        duration:60, // Reduced duration
        delay: 120 + index , // Reduced overall delay
        easing: "easeOutQuad", // Adjusted easing for a quicker response
        offset:3, // Synchronizes the animations
      });
    });
  }, []);

  return (
    <div style={styles.body}>
      <svg className="svg" width="540" height="565.71424" viewBox="0 0 580 800">
        <path
          className="k4"
          style={k4Style}
          d="m 275.924,699.49118 54.75863,60.10532"
        />
        <g className="isolate">
          {/* T Paths */}
          <path
            className="blend t1"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#dd5d20",
              strokeWidth: 79.81949615,
            }}
            d="m 215.47816,250.84847 115.22634,0"
          />
          <path
            className="blend t2"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#0b9444",
              strokeWidth: 79.81949615,
            }}
            d="m 273.09133,252.65768 0,115.22634"
          />

          {/* H Paths */}
          <path
            className="blend h1"
            style={{
              ...blendStyle,
              fill: "#1f91ac",
              stroke: "#1f91ac",
              strokeWidth: 79.81949615,
            }}
            d="m 410.71374,252.65768 0,115.22634"
          />
          <path
            className="blend h2"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#df871b",
              strokeWidth: 79.81949615,
            }}
            d="m 410.47816,310.44844 115.22634,0"
          />

          {/* I Paths */}
          <path
            className="blend i1"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#dd5d20" }}
            d="m 215.47816,448.64847 115.22634,0"
          />
          <path
            className="blend i2"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#dd5d20" }}
            d="m 215.47816,563.85818 115.22634,0"
          />
          <path
            className="blend i3"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#1f91ac" }}
            d="m 273.09133,448.56614 0,115.22634"
          />

          {/* N Paths */}
          <path
            className="blend n1"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 410.71374,448.36614 0,115.22634"
          />
          <path
            className="blend n2"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 526.004,448.36614 0,115.22634"
          />
          <path
            className="blend n3"
            style={{ ...blendStyle, fill: "none", stroke: "#0b9444" }}
            d="m 410.7,448.46218 115.37,115.013"
          />

          {/* K Paths */}
          <path
            className="blend k1"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 215.32637,644.48746 0,115.22634"
          />
          <path
            className="blend k2"
            style={{ ...blendStyle, fill: "none", stroke: "#1f91ac" }}
            d="m 215.31263,759.5965 115.37,-115.013"
          />

          {/* Additional Paths and Circles */}
          <path
            className="h3"
            style={{
              ...blendStyle,
              fill: "#1f91ac",
              stroke: "#1f91ac",
              strokeWidth: 79.81949615,
            }}
            d="m 525.41374,252.65768 0,115.22634"
          />
          <circle
            className="h4"
            style={{ ...circleStyle, fill: "#df871b" }}
            cx="526"
            cy="252.36218"
            r="40"
          />
          <circle
            className="i4"
            style={{ ...circleStyle, fill: "#ffffff" }}
            cx="273"
            cy="448.36218"
            r="40"
          />
          <circle
            className="n4"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="410.70001"
            cy="448.66217"
            r="40"
          />
          <circle
            className="n5"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="526"
            cy="563.16217"
            r="40"
          />
          <circle
            className="k3"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="215.31264"
            cy="759.39655"
            r="40"
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVGComponent;
