/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichFaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  /**
   * useEffect の第2引数に関心を分離したい変数を設定する
   * 第2引数に空の配列を代入した場合、初回のみ実行されるため、初期処理に利用可能
   */
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps: off
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichFaceShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(/・ω・)/</p>}
    </>
  );
};

export default App;
