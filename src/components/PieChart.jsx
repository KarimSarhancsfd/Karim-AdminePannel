import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = ({ isCustomPieColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie /* or Pie for fixed dimensions */
      data={data}
      // isInteractive={false}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
          },
          legends: {
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

        tooltip: {
          container: {
            background: colors.primary[900],
            color: colors.grey[100],
            padding: 12,
            borderRadius: 4,
            border: `1px solid ${colors.grey[500]}`,
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.6}
      activeInnerRadiusOffset={50}
      activeOuterRadiusOffset={20}
      padAngle={0.6}
      cornerRadius={10}
      colors={{ scheme: "set2" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["brighter", 1]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      motionConfig="gentle"
      transitionMode="centerRadius"
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      tooltip={({  indexValue }) => (
        <div
          style={{
             
            padding: "12px",
            borderRadius: "5px",
            color: colors.grey[100],
            border: `1px solid ${colors.grey[500]}`,
          }}
        >
   
          <strong>{indexValue}</strong>
        </div>
      )}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
        },
      ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 36,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // changed
        legendPosition: "middle",
        legendOffset: -40,
        legend: "count",
        legendOffset: -40,
      }}
    />

    //       tooltip={({ id, value, color, indexValue }) => (
    //         <div
    //           style={{
    //             background: theme.palette.mode === "dark"
    //                 ? colors.primary[700]
    //                 : colors.primary[100],
    //             padding: "12px",
    //             borderRadius: "8px",
    //             boxShadow: theme.shadows[3],
    //             color: theme.palette.mode === "dark"
    //                 ? colors.grey[100]
    //                 : colors.grey[900],
    //             border: `1px solid ${colors.grey[500]}`,
    //             minWidth: "180px"
    //         }}
    //     >
    //         <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
    //             <div style={{
    //                 width: "12px",
    //                 height: "12px",
    //                 backgroundColor: color,
    //                 marginRight: "8px",
    //                 borderRadius: "3px"
    //             }} />
    //             <strong>{indexValue}</strong>
    //         </div>
    //         <div style={{ marginLeft: "20px" }}>
    //             <div>ID: <strong>{id}</strong></div>
    //             <div>Label: <strong>{indexValue}</strong></div>
    //             <div>Value: <strong>{value}</strong></div>
    //             <div>Color: <strong>{color}</strong></div>
    //         </div>
    //     </div>
    // )}
  );
};

export default PieChart;
