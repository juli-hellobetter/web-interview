import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
`;

const Th = styled.th`
  background: var(--accent-color);
  color: #fff;
  padding: 0.75rem;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: center;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

type DataRow = any;

const DUMMY_API = 'https://jsonplaceholder.typicode.com/users';

const mapApiToDataRow = (user: any): DataRow => ({
  quark: user.name,
  nebula: user.id,
  flux: user.username,
  zeta: user.id % 2 === 0,
});

// Fetch data from the API and display it in a table in the desired format
// Add basic prop types or TypeScript interfaces
// Implement simple sorting functionality
// Indicate empty, loading and error state

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(DUMMY_API)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((users) => {
        setData(users.map(mapApiToDataRow));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Quark</Th>
          <Th>Nebula</Th>
          <Th>Flux</Th>
          <Th>Zeta</Th>
        </Tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <Tr key={idx}>
            <Td>{row.quark}</Td>
            <Td>{row.nebula}</Td>
            <Td>{row.flux}</Td>
            <Td>{row.zeta ? 'Yes' : 'No'}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
