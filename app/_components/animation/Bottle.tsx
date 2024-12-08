'use client';
import React, { useRef } from "react";

export const Bottle = () => {
const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <>
     {/* @ts-expect-error: カスタム要素 'lottie-player' が型定義されていないためエラーを無視します */}
    <lottie-player
     ref={ref}
     autoplay
     loop
     mode="normal"
     src="/lottie/bottle.json">
     {/* @ts-expect-error: カスタム要素 'lottie-player' が型定義されていないためエラーを無視します */}
     </lottie-player>
    </>
  );
};
