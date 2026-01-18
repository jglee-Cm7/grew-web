import React, { ReactNode } from "react";

interface SubTextItem {
  text: string;
  number?: number; // Optional number for numbered items
}

interface InfoBoxProps {
  heading: string; // The green heading text on the left
  mainText?: string; // The main description text (optional)
  subTextItems?: SubTextItem[]; // Array of sub-text items (optional)
  children?: ReactNode; // For any custom content
}

export function InfoBox({
  heading,
  mainText,
  subTextItems = [],
  children,
}: InfoBoxProps) {
  return (
    <div className="flex items-start rounded-lg border border-gray-200 bg-white p-6">
      {/* Left side - green heading */}
      <div className="w-32 shrink-0">
        <h3 className="font-medium text-[#27AF58]">{heading}</h3>
      </div>

      {/* Right side - content */}
      <div className="flex-1">
        {/* Main text if provided */}
        {mainText && <p className="text-gray-800">{mainText}</p>}

        {/* Sub-text items if provided */}
        {subTextItems.length > 0 && (
          <ul className="mt-2 space-y-2">
            {subTextItems.map((item, index) => (
              <li key={index} className="flex gap-2 text-gray-700">
                {item.number !== undefined && (
                  <span className="shrink-0">{item.number}.</span>
                )}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Any additional custom content */}
        {children}
      </div>
    </div>
  );
}
