const StackTable = ({ id, columns, data, gridTemplateColumns }) => (
  <table id={id} className="block md:border">
    <thead className="border-b hidden md:block" aria-hidden="true">
      <tr
        className={"block md:grid grid-flow-col"}
        style={{ gridTemplateColumns }}
      >
        {columns.map((col, i) => (
          <th
            key={id + "-th-" + i}
            className={"block p-2" + (i > 0 ? " border-l" : "")}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="block">
      {data.map((row, rowIndex) => (
        <tr
          key={id + "-row-" + rowIndex}
          className={
            "block md:grid grid-flow-col py-3 md:py-0 border mb-6 md:mb-0 shadow-md md:shadow-none rounded md:rounded-none" +
            (rowIndex > 0 ? " border-t" : "")
          }
          style={{ gridTemplateColumns }}
        >
          {Object.keys(row).map((key, colIndex) => (
            <td
              className={
                "grid grid-flow-col grid-cols-2 items-center h-full md:grid-cols-1 p-2" +
                (colIndex > 0 ? " border-l" : "") +
                (columns[colIndex].label.length > 0
                  ? " grid-cols-2"
                  : " grid-cols-1 text-center")
              }
              key={id + "-row-" + rowIndex + "-col-" + colIndex}
            >
              {columns[colIndex].label.length > 0 && (
                <div className="md:sr-only font-bold text-right pr-2">
                  {columns[colIndex].label}
                </div>
              )}

              <div
                className={
                  "pl-2 md:p-0" +
                  (columns[colIndex].label.length > 0
                    ? " text-left md:text-center"
                    : " text-center")
                }
              >
                {columns[colIndex].render
                  ? columns[colIndex].render(row[key])
                  : row[key]}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default StackTable
