import React from "react";

const CircularProgressBar = ({
  min = 0,
  max = 100,
  current = 75,
  size = 200,
  strokeWidth = 15,
  color = "#4CAF50",
}) => {
  // Validate input values
  const validatedCurrent = Math.max(min, Math.min(max, current));
  const validatedMin = Math.min(min, max);
  const validatedMax = Math.max(min, max);

  // Calculate progress percentage
  const percentage =
    ((validatedCurrent - validatedMin) / (validatedMax - validatedMin)) * 100;

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Center position
  const center = size / 2;

  const containerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: `100%`,
    height: `auto`,
  };

  const svgStyle = {
    transform: "rotate(-90deg)",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const percentageTextStyle = {
    fontSize: `${size / 6}px`,
    fontWeight: "bold",
    margin: 0,
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={containerStyle}>
      <svg width={size} height={size} style={svgStyle}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill='transparent'
          stroke='rgba(0, 0, 0, 0.3)'
          strokeWidth={8}
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill='transparent'
          stroke='rgb(167, 201, 87)'
          strokeWidth={16}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap='square'
        />
      </svg>

      <div style={textContainerStyle}>
        <p style={percentageTextStyle}>{formatTime(current)}</p>
      </div>
    </div>
  );
};

export default CircularProgressBar;
