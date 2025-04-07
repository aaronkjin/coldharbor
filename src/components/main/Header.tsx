import React from "react";

export const Header = () => {
  return (
    <div className="px-6 py-3 border-b border-lumon-text/30">
      <div className="flex justify-between items-center">
        <div className="text-lumon-text text-lg font-mono">Cold Harbor</div>
        <div className="flex items-center gap-3">
          <span className="text-lumon-text text-lg">21% Complete</span>
          <div className="relative ml-4">
            <svg
              width="50"
              height="30"
              viewBox="0 0 200 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="100"
                cy="60"
                rx="90"
                ry="50"
                stroke="#8bdae9"
                strokeWidth="1.5"
                fill="none"
              />

              <g stroke="#8bdae9" strokeWidth="1.5" fill="none">
                <ellipse cx="100" cy="60" rx="70" ry="38" />
                <line x1="30" y1="60" x2="170" y2="60" />
                <path d="M 40 35 Q 100 15 160 35" />
                <path d="M 40 85 Q 100 105 160 85" />

                <path d="M 100 22 Q 100 60 100 98" />
                <path d="M 70 30 Q 70 60 70 90" />
                <path d="M 130 30 Q 130 60 130 90" />
              </g>

              <text
                x="100"
                y="65"
                textAnchor="middle"
                fill="#8bdae9"
                fontFamily="sans-serif"
                fontSize="18"
                fontWeight="500"
              >
                LUMON
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-lumon-text/30 mt-2"></div>
    </div>
  );
};
