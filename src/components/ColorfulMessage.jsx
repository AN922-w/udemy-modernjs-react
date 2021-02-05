import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //color: color, // 同じ名前の場合、代入を省略可能（color のみでOK）
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
