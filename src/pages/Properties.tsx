import { SetStateAction, useEffect, useState } from "react";
import Papa from "papaparse";

function Properties() {
  const [data, setData] = useState([])
  const greeting = "Properties";

  useEffect(() => {
    Papa.parse("/AB_NYC_2019.csv", {
      download: true,
      header: true,
      complete: function (results: { data: SetStateAction<never[]>; }) {
        console.log("Finished:", results.data);
        setData(results.data)
      },
    });
  }, []);

  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">{greeting}</h1>
      <table className="table-auto">
        <thead className="bg-zinc-200">
          <tr>
            {data[0] && Object.keys(data[0]).map((heading) => <th key={heading}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((cell, i) => (
                <td key={i}>{cell as string}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Properties;
