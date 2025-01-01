interface Column<
  TObject extends object,
  Accessor extends keyof TObject = keyof TObject
> {
  label: Accessor;
}

interface TableProps<TObject extends object> {
  columns: Column<TObject>[];
  rows: TObject[];
}

const Table = <TObject extends object>({
  columns,
  rows,
}: TableProps<TObject>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{String(col.label)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{String(row[col.label])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

interface User {
  id: number;
  name: string;
  age: number;
}

const columns: Column<User>[] = [
  { label: "id" },
  { label: "name" },
  { label: "age" },
];

const rows: User[] = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
];

const AComponent = () => {
  return <Table columns={columns} rows={rows} />;
};
