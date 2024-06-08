import ThemeContext from "context/theme-context";
import { useCenteredTree } from "hooks/user-tree-chart";
import { cn } from "lib/utils";
import React, { useContext, useState } from "react";
import Tree from "react-d3-tree";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.

const renderForeignObjectNode = ({
  nodeDatum: nodeData,
  toggleNode,
  foreignObjectProps,
  theme,
}) => {
  return (
    <>
      <circle
        r={25}
        fill="rgb(234 85 15)"
        stroke="rgb(234 85 15)"
        onClick={toggleNode}
      ></circle>
      <foreignObject {...foreignObjectProps}>
        <div
          className={cn(
            "border border-slate-700 rounded-md p-3",
            theme == "dark" ? "bg-slate-950 text-white" : "bg-slate-100"
          )}
        >
          <h3 className="mb-2 font-bold text-lg text-center">
            {nodeData.name}
          </h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {nodeData.attributes &&
              Object.keys(nodeData.attributes).map((labelKey, i) => (
                <li key={`${labelKey}-${i}`} className="mb-2">
                  <span className="font-bold">{labelKey}</span>:{" "}
                  <span className="font-light">
                    {nodeData.attributes[labelKey]}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </foreignObject>
    </>
  );
};

export default function OrgChartTree({ data }) {
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 250, y: 250 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: 40,
  };
  const { theme } = useContext(ThemeContext);

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div
      id="treeWrapper"
      style={{
        width: "100%",
        height: "55rem",
      }}
      ref={containerRef}
    >
      <Tree
        zoom={0.5}
        rootNodeClassName="demo-node"
        branchNodeClassName="demo-node"
        svgClassName="demo-node"
        depthFactor={350}
        translate={{ x: 150, y: 400 }}
        data={data}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            foreignObjectProps,
            theme,
          })
        }
        // pathFunc="step"
        dimensions={dimensions}
        enableLegacyTransitions
        pathFunc={"step"}
      />
    </div>
  );
}
