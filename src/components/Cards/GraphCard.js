import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GraphCard({ mode, data = [] }) {
  const lineColor = mode ? "#8884d8" : "#f1f1f1"; // Light color in dark mode
  const gridColor = mode ? "#ccc" : "#444"; // Adjust grid visibility
  const textColor = mode ? "#333" : "#f1f1f1"; // Text color adjustment

  return (
    <div
      className={`h-[90%] w-[95%] ${
        mode ? "bg-[#a8daef] border border-[#16222a]" : "bg-[#7999aa]/70"
      } rounded-[13px] transition-all duration-300 ease-in-out flex items-center justify-center`}
    >
      {data.length > 0 ? (
        <ResponsiveContainer width="99%" height="95%">
          <LineChart data={data}>
            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip
              contentStyle={{
                backgroundColor: mode ? "#fff" : "#333",
                color: mode ? "#000" : "#fff",
              }}
            />
            <Line type="monotone" dataKey="marks" stroke={lineColor} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className={`${mode ? "text-black" : "text-white"}`}>
          No data available
        </p>
      )}
    </div>
  );
}

export default GraphCard;
