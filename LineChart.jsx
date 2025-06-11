<ResponsiveLine
  data={data}
  theme={{
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
    tooltip: {
      container: {
        color: colors.primary[900],
      },
    },
  }}
  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
  curve="catmullRom"
  axisBottom={{ legend: 'transportation', legendOffset: 36 }}
  axisLeft={{ legend: 'count', legendOffset: -40 }}
  colors={{ scheme: 'set2' }}
  pointColor={{ theme: 'background' }}
  pointBorderWidth={2}
  pointBorderColor={{ from: 'seriesColor' }}
  pointLabelYOffset={-12}
  enableArea={true}
  enableTouchCrosshair={true}
  useMesh={true}
  legends={[
    {
      anchor: 'bottom-right',
      direction: 'column',
      translateX: 100,
      itemWidth: 80,
      itemHeight: 22,
      symbolShape: 'circle'
    }
  ]}
  isFocusable={true}
/>