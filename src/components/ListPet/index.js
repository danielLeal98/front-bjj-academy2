import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import petsRepository from '../../repositories/pets';
import {
  TextField,
  ClearButton,
  DivButtonSearch,
} from '../../pages/Pets/List/styles';
import { useHistory } from 'react-router-dom';

function TablePets(props) {
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
        pathname: '/editPet',
        state: {
          id: state.id,
          tutorId: state.tutorId,
          tutorName: state.tutor.name,
          name: state.name,
          breed: state.breed,
          date_nasc: state.date_nasc,
          vaccine: state.vaccine,
          obs: state.obs,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function deleteItem(state) {
    petsRepository
      .deletePet(state.id)
      .then(() => {
        petsRepository
          .getAllPets()
          .then((pets) => {
            setDados(pets);
          })
          .catch((err) => toast.error(err.message));
      })
      .catch(() => toast.error('Não foi possível deletar a categoria'));
  }

  const columns = [
    {
      name: 'Nome',
      selector: 'name',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Tutor',
      selector: 'tutor.name',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Raça',
      selector: 'breed',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Data Nasc',
      selector: 'date_nasc',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Vacina',
      selector: 'vaccine',
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Observação',
      selector: 'obs',
      sortable: true,
      grow: 0.5,
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
      <DivButtonSearch>
        <TextField
          id="search"
          type="text"
          placeholder="Filtrar nome do Pet"
          aria-label="Search Input"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <ClearButton type="button" onClick={handleClear}>
          X
        </ClearButton>
      </DivButtonSearch>
      <DataTable
        title="Lista de Pets"
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

export default TablePets;
