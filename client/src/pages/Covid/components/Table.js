/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

// Libraries
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

// CSS
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

// Components
import { CreatedAtCellRenderer } from './CellRenderer';
import { InfoCellRenderer } from './CellRenderer';

const Table = ({  rowData }) => {
  const [darkThemeClassState, setDarkThemeClassState] = useState('');

  // Helper Functions
  const customValueGetter = (params) => params.node.data.info;
  const customValueGetterContact = (params) => params.node.data.contact;


  useEffect(() => {
    const themeClassName = 'light'
      ? 'ag-theme-alpine-dark'
      : 'ag-theme-alpine';
    setDarkThemeClassState(themeClassName);
  }, ['light']);

  return (
    <div
      style={{ height: '70vh', marginTop: 20 }}
      className={darkThemeClassState}
    >
      <AgGridReact
        rowData={rowData}
        suppressRowClickSelection
        rowSelection='multiple'
        rowHeight={200}
        frameworkComponents={{
          infoCellRenderer: InfoCellRenderer,
          createdAtCellRenderer: CreatedAtCellRenderer,
        }}
        overlayLoadingTemplate={
          '<span className="ag-overlay-loading-center">Please wait while we are fetching the data</span>'
        }
        overlayNoRowsTemplate={
          rowData
            ? '<span >Please select your state and required resource type</span>'
            : '<span className="ag-overlay-loading-center">Please wait while we are fetching the data</span>'
        }
      >
        <AgGridColumn
          field='district'
          checkboxSelection
        />
        <AgGridColumn
          field='info'
          wrapText
          minWidth={200}
          flex={5}
          // valueGetter={customValueGetter}
          cellRenderer='infoCellRenderer'
     
        />
        <AgGridColumn
          field='contact'
          wrapText
          flex={4}
          minWidth={160}
          valueGetter={customValueGetterContact}
          cellRenderer='infoCellRenderer'
        />
        <AgGridColumn field='createdAt' cellRenderer='createdAtCellRenderer' />
      </AgGridReact>
    </div>
  );
};

export default Table;
