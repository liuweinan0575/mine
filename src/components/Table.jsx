import React from 'react';

const Cell = ({h}) => typeof h === 'number'?<td >{h}</td>:<td className="mdl-data-table__cell--non-numeric">{h}</td>

const Table = ({header, body}) =>
<table className="mdl-data-table mdl-js-data-table mdl-data-table" style={{width: '100%'}}>
  { header && <thead><th>
      { header.map((h, i)=><Cell key ={i} h={h} />) }
      </th>
    </thead>
  }
  { body && <tbody>
    {
      body.map((row, i)=><tr key={i}>
      {
        row.map((col, ii)=><Cell key ={ii} h={col} />)}</tr>)}
  </tbody>}
</table>

export default Table;
