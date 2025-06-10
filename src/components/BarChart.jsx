import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
    
      data={data}
      indexBy="country"
      labelSkipWidth={12}
      labelSkipHeight={12}
      colors={{ scheme: "set2" }}
      borderRadius={10}
      enableTotals={{
        enabled: true,
        textColor:
          theme.palette.mode === "dark"
            ? colors.greenAccent[200]
            : colors.grey[900],
        background:
          theme.palette.mode === "dark"
            ? colors.primary[700]
            : colors.primary[100],
        lineColor: colors.grey[500],
      }}
      motionConfig="gentle"
      valueFormat=" >-$"
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
      tooltip={({ id, value, color, indexValue }) => (
        <div
          style={{
            background: theme.palette.mode === "dark" 
                ? colors.primary[700] 
                : colors.primary[100],
            padding: "12px",
            borderRadius: "8px",
            boxShadow: theme.shadows[3],
            color: theme.palette.mode === "dark" 
                ? colors.grey[100] 
                : colors.grey[900],
            border: `1px solid ${colors.grey[500]}`,
            minWidth: "180px"
        }}
    >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <div style={{
                width: "12px",
                height: "12px",
                backgroundColor: color,
                marginRight: "8px",
                borderRadius: "3px"
            }} />
            <strong>{indexValue}</strong>
        </div>
        <div style={{ marginLeft: "20px" }}>
            <div>ID: <strong>{id}</strong></div>
            <div>Label: <strong>{indexValue}</strong></div>
            <div>Value: <strong>{value}</strong></div>
            <div>Color: <strong>{color}</strong></div>
        </div>
    </div>
)}
    />
  );
};

export default BarChart;
