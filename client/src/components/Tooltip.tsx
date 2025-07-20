import { createPortal } from "react-dom";
import { useState } from "react";

interface TooltipProps {
  text: string;
}

const Tooltip = ({ text }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setCoords({
      top: rect.top + window.scrollY + 28,
      left: rect.left + rect.width / 2,
    });
    setVisible(true);
  };

  const handleMouseLeave = () => setVisible(false);

  return (
    <>
      <span
        className="tooltip-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        i
      </span>
      {visible &&
        createPortal(
          <div
            className="tooltip-text floating-tooltip"
            style={{ top: coords.top, left: coords.left }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
