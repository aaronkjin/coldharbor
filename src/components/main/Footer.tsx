import React from "react";

export const Footer = () => {
  const sections = [
    { id: "01", progress: 30 },
    { id: "02", progress: 11 },
    { id: "03", progress: 9 },
    { id: "04", progress: 27 },
    { id: "05", progress: 18 },
  ];

  return (
    <div className="mt-auto px-6 py-4">
      <div className="h-px w-full bg-lumon-text/30 mb-6"></div>
      <div className="flex justify-between mb-6">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col items-center">
            <div className="border border-lumon-text px-6 py-1 mb-2 text-center">
              {section.id}
            </div>
            <div className="w-32 h-5 border border-lumon-text flex bg-lumon-bg">
              <div
                className="bg-lumon-text/50 h-full flex justify-end items-center pr-1"
                style={{ width: `${section.progress}%` }}
              >
                <span className="text-xs text-lumon-bg">
                  {section.progress}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-lumon-text/80">
        0x 1308A : 0x 0EAFC
      </div>
    </div>
  );
};
