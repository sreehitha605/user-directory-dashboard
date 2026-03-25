export default function SortControls({ setSortField, setSortOrder }) {
  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handleReset = () => {
    setSortField("");
    setSortOrder("");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      

      <button onClick={() => handleSort("name", "asc")}>
        Name A-Z
      </button>

      <button onClick={() => handleSort("name", "desc")}>
        Name Z-A
      </button>

      <button onClick={() => handleSort("company", "asc")}>
        Company A-Z
      </button>

      <button onClick={() => handleSort("company", "desc")}>
        Company Z-A
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
