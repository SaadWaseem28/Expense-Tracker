import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

function Charts({ data, colors }) {
  const dataKey = data[0]?.category ? "category" : "month";
  const defaultColors = ["#FF2929"];
  const colorsToUse = colors && colors.length > 0 ? colors : defaultColors;

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} tick={{ fontSize: 12, fill: "gray" }} />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, 100000]}
            tick={{ fontSize: 12, fill: "gray" }}
          />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colorsToUse[index % colorsToUse.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
