import React from 'react';

const MovieTable = ({ data }) => {
  return (
    <div style={{ padding: '1rem', overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black', backgroundColor: '#f4f4f4' }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Role</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tableCellStyle}>{user.id}</td>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.role}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Table Cell and Header Styling
const tableHeaderStyle = {
  padding: '8px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '8px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

export default MovieTable;
