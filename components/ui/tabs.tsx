// components/TabSystem.tsx
"use client";
import { useState, useEffect } from "react";

type TabOption = {
  id: string;
  label: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: TabOption[];
  defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);
  const [renderKey, setRenderKey] = useState(0);

  // Update the renderKey whenever the activeTab changes
  useEffect(() => {
    setTimeout(() => {
      setRenderKey((prev) => prev + 1);
    }, 0);
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="mb-8 flex w-full gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 cursor-pointer rounded-lg py-4 text-center text-base font-medium transition-colors duration-300 ${activeTab === tab.id ? "bg-[#27AF58] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - with key for re-rendering */}
      <div key={renderKey} className="w-full py-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
