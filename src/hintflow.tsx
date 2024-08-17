import React, { useState, useEffect } from "react";
import { CloseIcon } from "./icons";

interface HintProps {
  id: string;
  message: string;
  targetSelector: string;
  dismissable?: boolean;
  position?: "top" | "bottom" | "left" | "right";
}

export const Hint: React.FC<HintProps> = ({
  id,
  message,
  targetSelector,
  dismissable = true,
  position = "bottom",
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

  const style = {
    top: rect.top + window.scrollY + (position === "bottom" ? rect.height : 0),
    left: rect.left + window.scrollX + (position === "right" ? rect.width : 0),
    position: "absolute" as const,
    transform:
      position === "top"
        ? "translateY(-100%)"
        : position === "right"
        ? "translateX(100%)"
        : position === "left"
        ? "translateX(-100%)"
        : "none",
  };

  return (
    <div
      style={style}
      className="bg-blue-600 py-4 text-white rounded-lg shadow-lg w-auto max-w-xs z-50 relative"
    >
      {dismissable && (
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Dismiss"
        >
          <CloseIcon className="size-4" />
        </button>
      )}
      <span className="block mt-3 text-sm leading-relaxed mx-4 text-left">
        {message}
      </span>
    </div>
  );
};
