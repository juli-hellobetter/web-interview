import React from "react";
import styled from "styled-components";

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

// Fetch data from the API and display it in a table in the desired format
// Indicate empty, loading and error state
// Add basic prop types or TypeScript interfaces
// Implement simple sorting functionality

const DataTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>field1</Th>
          <Th>field2</Th>
          <Th>field3</Th>
          <Th>field4</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </tbody>
    </Table>
  );
};

export default DataTable;
