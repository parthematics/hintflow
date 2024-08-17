import React, { useState, useEffect } from "react";
import { CloseIcon } from "./icons";
import "./style.css";

interface HintProps {
  id: string;
  message: string;
  targetSelector: string;
  dismissable?: boolean;
  position?: "top" | "bottom" | "left" | "right";
  color?: string;
  align?: "left" | "center" | "right";
}

export const Hint: React.FC<HintProps> = ({
  id,
  message,
  targetSelector,
  dismissable = true,
  position = "bottom",
  color = "#1e3a8a",
  align = "center",
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(`hintflow-dismissed-${id}`);
    if (!dismissed) {
      setVisible(true);
    }
  }, [id]);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(`hintflow-dismissed-${id}`, "true");
  };

  if (!visible) return null;

  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) return null;

  const rect = targetElement.getBoundingClientRect();

  const topPosition =
    position === "top"
      ? rect.top + window.scrollY - 10
      : position === "bottom"
      ? rect.top + window.scrollY + rect.height + 10
      : rect.top + window.scrollY + rect.height / 2;

  const leftPosition =
    position === "left"
      ? rect.left + window.scrollX - 10
      : position === "right"
      ? rect.left + window.scrollX + rect.width + 10
      : align === "left"
      ? rect.left + window.scrollX
      : align === "center"
      ? rect.left + window.scrollX + rect.width / 2
      : rect.left + window.scrollX + rect.width;

  const transform =
    position === "top"
      ? "translate(-50%, -100%)"
      : position === "bottom"
      ? "translate(-50%, 0)"
      : position === "left"
      ? "translate(-100%, -50%)"
      : position === "right"
      ? "translate(0, -50%)"
      : align === "center"
      ? "translate(-50%, 0)"
      : align === "right"
      ? "translateX(-100%)"
      : "none";

  const style = {
    top: topPosition,
    left: leftPosition,
    transform,
    backgroundColor: color,
    position: "absolute" as const,
    zIndex: 1000,
  };

  return (
    <div style={style} className="hintflow-popup">
      {dismissable && (
        <button
          onClick={handleDismiss}
          className="dismiss-button"
          aria-label="Dismiss"
        >
          <CloseIcon className="size-4" />
        </button>
      )}
      <span className="message">{message}</span>
    </div>
  );
};
