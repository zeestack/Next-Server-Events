"use client";

import _ from "lodash";

type TableProps<T extends { id: string }> = {
  columns: string[];
  data: Array<T>;
};

export function Table<T extends { id: string }>({
  columns,
  data,
}: TableProps<T>) {
  console.log(data);

  return (
    <table className="table table-normal w-full">
      <thead>
        <tr>
          {columns?.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((d) => (
          <tr key={d.id}>
            {Object.keys(d).map((k) => (
              <th key={d.id + k}>{d[k as keyof T] as string}</th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
