import React from 'react';
import CSS from 'csstype';
import MUIDataTable, { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import colors from '@/theme/foundations/colors';

const theme = createTheme();

interface TableProps extends MUIDataTableProps {
  onClose: () => void;
  noMatch: string;
  columns: MUIDataTableColumn[];
  headerStyles?: { style: CSS.Properties };
  cellStyles?: { style: CSS.Properties };

  showAddButton?: boolean;
  addButtonText?: string;
  onClickAddButton?: () => void;
  customToolbar?: React.Component | Element;
}

export default function TableBase({
  columns,
  data,
  title,
  options,
  noMatch,
  headerStyles,
  cellStyles,
  showAddButton = false,
  addButtonText,
  onClickAddButton,
  customToolbar,
}: TableProps) {
  headerStyles = headerStyles ?? { style: { textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' } };
  cellStyles = cellStyles ?? { style: { textAlign: 'center' } };

  options = {
    filter: false,
    rowsPerPage: 10,
    download: false,
    viewColumns: false,
    print: false,
    elevation: 0,
    filterType: 'dropdown',
    responsive: 'vertical',
    selectableRows: 'none',
    textLabels: {
      body: {
        noMatch: 'Não há dados a serem mostrados',
        toolTip: 'Ordenar',
        columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
      },
      pagination: {
        next: 'Próxima Página',
        previous: 'Página Anterior',
        rowsPerPage: 'Linhas por página:',
        displayRows: 'de',
      },
      toolbar: {
        search: 'Pesquisar',
        downloadCsv: 'Download CSV',
        print: 'Imprimir',
        viewColumns: 'Exibir Colunas',
        filterTable: 'Filtrar na Tabela',
      },
      filter: {
        all: 'Tudo',
        title: 'FILTROS',
        reset: 'RESETAR',
      },
      viewColumns: {
        title: 'Exibir Colunas',
        titleAria: 'Mostrar/Esconder Colunas na Tabela',
      },
      selectedRows: {
        text: 'linha selecionada',
        delete: 'Deletar',
        deleteAria: 'Deletar Linha Selecionada',
      },
    },
    customToolbar: showAddButton
      ? (data) => (
          <>
            <Button
              startIcon={<AddIcon />}
              sx={{ marginLeft: '1rem' }}
              variant="contained"
              size="small"
              style={{ backgroundColor: colors.primary[600] }}
              onClick={onClickAddButton}
            >
              {addButtonText}
            </Button>
            {customToolbar}
          </>
        )
      : () => {
          customToolbar;
        },
    ...options,
  };

  columns = columns.map((column: MUIDataTableColumn) => {
    return {
      ...column,
      options: {
        ...column.options,
        setCellHeaderProps: () => {
          return headerStyles;
        },
        setCellProps: () => {
          return cellStyles;
        },
      },
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable title={title} data={data} columns={columns} options={options} />
    </ThemeProvider>
  );
}
