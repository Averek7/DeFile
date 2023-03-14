import React, { useEffect, useRef } from "react";
function LottieCard({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src={src}
        width={100}
        height={100}
      />
    </div>
  );
}

export default LottieCard;
