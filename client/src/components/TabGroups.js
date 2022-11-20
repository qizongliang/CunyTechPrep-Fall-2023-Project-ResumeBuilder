import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";

/**
 * @param {Object[]} contents - array of objects that contains:
 * @param {string} label - the tab name
 * @param {ReactComponentElement} component - the component to render
 * @returns
 */
export default function TabGroups({ contents, ComponentWrapper }) {
  const [currentTab, setCurrentTab] = useState(0);

  function handleChange(e, newTabIndex) {
    setCurrentTab(newTabIndex);
  }

  const tabHeight = "20px";
  return (
    <div>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { backgroundColor: "rgba(0,0,0,0)" },
        }}
        sx={{height: "10px"}}
      >

        {contents.map((content, idx) => {
          return (
            <Tab
              label={
                <div style={{ fontSize: "1.15rem", color: "white" }}>
                  {content.label}
                </div>
              }
              key={content.label}
              style={{
                minHeight: "auto",
                padding: "0.25rem",
                textTransform: "none",
                backgroundColor:
                  currentTab === idx ? "#60A5FA" : "rgba(0,0,0,0.2)",
              }}
            />
          );
        })}
      </Tabs>
      <ComponentWrapper>{contents[currentTab].component}</ComponentWrapper>
    </div>
  );
}
