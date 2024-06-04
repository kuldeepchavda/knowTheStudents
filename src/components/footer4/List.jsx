import React from "react";

const styles = {
  body: {
    margin: "20px",
  },
  btn: {
    backgroundColor: "blue",
    padding: "10px 15px",
    border: "none",
    fontSize: "18px",
    position: "relative",
  },
  btnBefore: {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    height: "102px",
    width: "0%",
    transition: "width 0.3s ease",
    backgroundColor: "green",
  },
  btnHover: {
    width: "100%",
  },
};

export default function CustomButton() {

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div style={styles.body}>
      <button
        style={styles.btn}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        this is button
      </button>
    </div>
  );
}
