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
    const initialDelay = 3000; // Delay before the animation starts, in milliseconds

    const timeline = anime
      .timeline({
        autoplay: true,
        direction: "alternate",
        loop: true,
        begin: function () {
          // This function is called once the delay is over and just before the animation starts
          console.log(
            "Animation is starting after initial delay of " +
              initialDelay +
              "ms",
          );
        },
      })
      .add({
        delay: initialDelay, // Adding initial delay to the timeline
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
      { name: ".h1", x: 195.47816, y: 212.84847, stroke: "#dd5d20" },
      { name: ".h2", x: 195.09133, y: 152.65768, stroke: "#0b9444" },
      { name: ".h3", x: 310.09133, y: 152.65768, stroke: "#0b9444" },
      { name: ".e1", x: 389.71374, y: 152.65768, stroke: "#1f91ac" },
      { name: ".e2", x: 390.47816, y: 160.44844, stroke: "#df871b" },
      { name: ".e3", x: 390.41374, y: 215.65768, stroke: "#1f91ac" },
      { name: ".e4", x: 390.41374, y: 275.65768, stroke: "#1f91ac" },
      { name: ".e5", x: 389.71374, y: 215.65768, fill: "#df871b" },
      { name: ".l1", x: 200.47816, y: 475.64847, stroke: "#dd5d20" },
      { name: ".l2", x: 200, y: 360.85818, stroke: "#dd5d20" },
      { name: ".l3", x: 200, y: 475.36218, fill: "#ffffff" },

      { name: ".l21", x: 393.47816, y: 360.36218, stroke: "#ffffff" },
      { name: ".l22", x: 400.71374, y: 478.36614, stroke: "#da3931" },
      { name: ".l23", x: 400, y: 477.36614, fill: "#df871b" },

      { name: ".o1", x: 200, y: 557.36614, stroke: "#0b9444" },
      { name: ".o2", x: 197.70001, y: 673.66217, stroke: "#da3931" },
      { name: ".o3", x: 325, y: 560.16217, stroke: "#da3931" },
      { name: ".o4", x: 207.32637, y: 557.48746, stroke: "#da3931" },
      { name: ".o5", x: 203.31263, y: 670.5965, fill: "#ffffff" },
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
        duration: 70, // Reduced duration
        delay: 0, // Reduced overall delay
        easing: "easeOutQuad", // Adjusted easing for a quicker response
        offset: 0, // Synchronizes the animations
      });
    });
    const delayBetweenLoops = 2000; // Adjust as needed
    timeline.add({
      delay: delayBetweenLoops,
    });
  }, []);

  return (
    <div>
      <svg className="w-full" width="540" height="565.71424" viewBox="0 0 580 800">
        <g className="isolate">
          {/* T Paths */}
          <path
            className="blend h1"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#dd5d20",
              strokeWidth: 79.81949615,
            }}
            d="m 215.47816,310.44844  115.22634,0"
          />
          <path
            className="blend h2"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#0b9444",
              strokeWidth: 79.81949615,
            }}
            d="m 215.47816,252.65768 0,115.22634"
          />
          <path
            className="blend h3"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#0b9444",
              strokeWidth: 79.81949615,
            }}
            d="m 330.7045,252.65768 0,115.22634"
          />

          {/* H Paths */}
          <path
            className="blend e1"
            style={{
              ...blendStyle,
              fill: "#1f91ac",
              stroke: "#1f91ac",
              strokeWidth: 79.81949615,
            }}
            d="m 410.71374,252.65768 0,115.22634"
          />
          <path
            className="blend e2"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#df871b",
              strokeWidth: 79.81949615,
            }}
            d="m 410.47816,253.44844 115.22634,0"
          />
          <path
            className="blend e3"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#df871b",
              strokeWidth: 79.81949615,
            }}
            d="m 410.47816,310.44844 115.22634,0"
          />
          <path
            className="blend e4"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#df871b",
              strokeWidth: 79.81949615,
            }}
            d="m 410.47816,370.44844 115.22634,0"
          />

          {/* I Paths */}

          <path
            className="blend l1"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#dd5d20" }}
            d="m 215.47816,563.85818 115.22634,0"
          />
          <path
            className="blend l2"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#1f91ac" }}
            d="m 215.47816,448.56614 0,115.22634"
          />

          {/* N Paths */}
          <path
            className="blend l21"
            style={{ ...blendStyle, fill: "#fffffff", stroke: "#da3931" }}
            d="m 410.71374,448.36614 0,115.22634"
          />

          <path
            className="blend l22"
            style={{ ...blendStyle, fill: "none", stroke: "#0b9444" }}
            d="m 410.7,563.46218 115.37,0"
          />

          {/* K Paths */}
          <path
            className="blend o1"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 215.32637,644.48746 0,115.22634"
          />
          <path
            className="blend o2"
            style={{ ...blendStyle, fill: "none", stroke: "#1f91ac" }}
            d="m 215.31263,759.5965 115.37,0"
          />
          <path
            className="blend o3"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 330.7045,644.48746 0,115.22634"
          />
          <path
            className="blend o4"
            style={{ ...blendStyle, fill: "none", stroke: "#1f91ac" }}
            d="m 215.31263,645.5965 115.37,0"
          />

          {/* Additional Paths and Circles */}

          <circle
            className="e5"
            style={{ ...circleStyle, fill: "#ddf871b" }}
            cx="410.71374"
            cy="310.44844"
            r="40"
          />
          <circle
            className="l3"
            style={{ ...circleStyle, fill: "#ffffff" }}
            cx=" 215.47816"
            cy="563.85818"
            r="40"
          />
          <circle
            className="l23"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="410.70001"
            cy="563"
            r="40"
          />

          <circle
            className="o5"
            style={{ ...circleStyle, fill: "" }}
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
