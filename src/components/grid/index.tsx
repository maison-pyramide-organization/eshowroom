import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const Grid = () => {
  const [visible, setVisibilty] = useState(false);
  const cols = 12;
  const gap = 32;
  const margin = 40;
  const opacity = 20;

  // Hide / Show Grid
  const toogleGrid = (e: any) => {
    const key = e.key;
    const shift = e.shiftKey;
    if (key && shift) setVisibilty((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("keypress", toogleGrid);
    return () => {
      document.removeEventListener("keypress", toogleGrid);
    };
  }, []);

  const styles = {
    grid: css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
      display: flex;
      gap: ${gap}px;
      padding-inline: ${margin}px;
      & div {
        width: 100%;
        background-color: red;
        opacity: ${opacity}%;
      }
    `,
  };

  return (
    <>
      {visible && (
        <div css={styles.grid}>
          {[...Array(cols)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      )}
    </>
  );
};

export default Grid;
