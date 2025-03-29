import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export const IndicatorTable = ({data}) => {
  return (
    <div className="mt-4">
      <Table height={400} data={data} bordered={true} cellBordered={true}>
        {Object.keys(data[0]).map((col) => (
          <Column flexGrow={1} align="center" fixed>
            <HeaderCell>{col}</HeaderCell>
            <Cell dataKey={col} />
          </Column>
        ))}
      </Table>
    </div>
  );
};
