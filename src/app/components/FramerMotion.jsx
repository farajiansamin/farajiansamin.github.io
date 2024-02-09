import React from "react";
import { motion } from "framer-motion";

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

  return (
    <div style={styles.body}>
      <svg className="svg" width="540" height="565.71424" viewBox="0 0 580 800">
        <motion.path
          className="k4"
          style={k4Style}
          d="m 275.924,699.49118 54.75863,60.10532"
          transition={{ duration: 3 }}
        />
        <g className="isolate">
          {/* T Paths */}
          <motion.path
            className="blend t1"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#dd5d20",
              strokeWidth: 79.81949615,
            }}
            d="m 215.47816,252.84847 115.22634,0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            className="blend t2"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#0b9444",
              strokeWidth: 79.81949615,
            }}
            d="m 273.09133,252.65768 0,115.22634"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />

          {/* H Paths */}
          <motion.path
            className="blend h1"
            style={{
              ...blendStyle,
              fill: "#1f91ac",
              stroke: "#1f91ac",
              strokeWidth: 79.81949615,
            }}
            d="m 410.71374,252.65768 0,115.22634"
            initial={{ pathLength: 0 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            className="blend h2"
            style={{
              ...blendStyle,
              fill: "#dd5d20",
              stroke: "#df871b",
              strokeWidth: 79.81949615,
            }}
            d="m 410.47816,310.44844 115.22634,0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />

          {/* I Paths */}
          <motion.path
            className="blend i1"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#dd5d20" }}
            d="m 215.47816,448.64847 115.22634,0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            className="blend i2"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#dd5d20" }}
            d="m 215.47816,563.85818 115.22634,0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
          <motion.path
            className="blend i3"
            style={{ ...blendStyle, fill: "#dd5d20", stroke: "#1f91ac" }}
            d="m 273.09133,448.56614 0,115.22634"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />

          {/* N Paths */}
          <motion.path
            className="blend n1"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 410.71374,448.36614 0,115.22634"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            className="blend n2"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 526.004,448.36614 0,115.22634"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            className="blend n3"
            style={{ ...blendStyle, fill: "none", stroke: "#0b9444" }}
            d="m 410.7,448.46218 115.37,115.013"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />

          {/* K Paths */}
          <motion.path
            className="blend k1"
            style={{ ...blendStyle, fill: "#1f91ac", stroke: "#da3931" }}
            d="m 215.32637,644.48746 0,115.22634"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            className="blend k2"
            style={{ ...blendStyle, fill: "none", stroke: "#1f91ac" }}
            d="m 215.31263,759.5965 115.37,-115.013"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />

          {/* Additional Paths and Circles */}
          <motion.path
            className="h3"
            style={{
              ...blendStyle,
              fill: "#1f91ac",
              stroke: "#1f91ac",
              strokeWidth: 79.81949615,
            }}
            d="m 525.41374,252.65768 0,115.22634"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.circle
            className="h4"
            style={{ ...circleStyle, fill: "#df871b" }}
            cx="526"
            cy="252.36218"
            r="40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.circle
            className="i4"
            style={{ ...circleStyle, fill: "#ffffff" }}
            cx="273"
            cy="448.36218"
            r="40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.circle
            className="n4"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="410.70001"
            cy="448.66217"
            r="40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.circle
            className="n5"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="526"
            cy="563.16217"
            r="40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.circle
            className="k3"
            style={{ ...circleStyle, fill: "#da3931" }}
            cx="215.31264"
            cy="759.39655"
            r="40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVGComponent;
