tooltip={({ id, value, color, indexValue }) => (
  <div style={{
    padding: "12px",
    borderRadius: "15px",
    color: colors.grey[100],
    border: `1px solid ${colors.grey[500]}`,
    background: colors.primary[900],
    minWidth: "180px"
  }}>
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
