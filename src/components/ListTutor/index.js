import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import tutorsRepository from '../../repositories/tutors';
import {
  TextField,
  ClearButton,
  DivButtonSearch,
} from '../../pages/Pets/List/styles';
import { useHistory } from 'react-router-dom';

function TableTutors(props) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    setDados(props.data);
    if (props.data != null) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [props.data]);

  const filteredItems = dados.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };

  async function editItem(state) {
    try {
      await history.push({
        pathname: '/editTutor',
        state: {
          id: state.id,
          name: state.name,
          cpf: state.cpf,
          phone: state.phone,
          address: state.address,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteItem(id) {
    try {
      tutorsRepository
        .deleteTutor(id)
        .then(() => {
          tutorsRepository
            .getAllTutors()
            .then((tutors) => {
              setDados(tutors);
            })
            .catch((err) => toast.error(err.message));
        })
        .catch(() => toast.error('Não foi possível deletar o Tutor'));
    } catch {}
  }

  const columns = [
    {
      name: 'Nome',
      selector: 'name',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Cpf',
      selector: 'cpf',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Telefone',
      selector: 'phone',
      sortable: true,

      grow: 0.2,
    },
    {
      name: 'Endereço',
      selector: 'address',
      sortable: true,

      grow: 0.4,
    },
    {
      cell: (row) => (
        <button
          onClick={() => editItem(row)}
          id={row.id}
          style={{
            fontSize: '16px',
            borderColor: 'white',
            marginRight: '5px',
            padding: '2px',
          }}
        >
          <i className="fas fa-edit"></i> Editar
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <button
          onClick={() => deleteItem(row.id)}
          id={row.id}
          style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '16px',
            padding: '2px',
            marginRight: '5px',
            borderColor: 'white',
          }}
        >
          <i className="fas fa-trash"></i> Apagar
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: '35px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '6px',
        paddingRight: '6px',
        fontSize: '16px',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'var(--secondary)',
      },
    },
    cells: {
      style: {
        paddingLeft: '6px',
        paddingRight: '6px',
        fontSize: '16px',
      },
    },
  };

  const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <div style={{ overflowX: 'auto', backgroundColor: 'transparent' }}>
      <div>
        <DivButtonSearch>
          <TextField
            id="search"
            type="text"
            placeholder="Filtrar por Tutor"
            aria-label="Search Input"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <ClearButton type="button" onClick={handleClear}>
            X
          </ClearButton>
        </DivButtonSearch>
      </div>
      <DataTable
        title="Lista de Tutors"
        columns={columns}
        data={filteredItems}
        customStyles={customStyles}
        responsive
        pagination
        paginationComponentOptions={paginationOptions}
        progressPending={loading}
        overflow={true}
        striped={true}
      />
    </div>
  );
}

export default TableTutors;
