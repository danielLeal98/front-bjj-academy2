import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import usersRepository from '../../repositories/users';
import {
  TextField,
  ClearButton,
  DivButtonSearch,
} from '../../pages/Pets/List/styles';
import { useHistory } from 'react-router-dom';

function TableUsers(props) {
  const history = useHistory();
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

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
        pathname: '/editUser',
        state: {
          id: state.id,
          name: state.name,
          email: state.email,
          password: state.password,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function deleteItem(state) {
    usersRepository
      .deleteUser(state.id)
      .then(() => {
        usersRepository
          .getAllUsers()
          .then((user) => {
            setDados(user);
          })
          .catch((err) => toast.error(err.message));
      })
      .catch(() => toast.error('Não foi possível deletar o Usuário'));
  }

  const columns = [
    {
      name: 'Nome',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },

    {
      cell: (row) => (
        <button
          onClick={() => editItem(row)}
          id={row.id}
          style={{
            fontSize: '16px',
            borderColor: 'white',
            padding: '2px',
            marginRight: '5px',
          }}
        >
          <i className="fas fa-edit"></i> Editar
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,

      grow: 0.1,
    },
    {
      cell: (row) => (
        <button
          onClick={() => deleteItem(row)}
          id={row.id}
          style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '16px',
            borderColor: 'white',
            padding: '2px',
            marginRight: '5px',
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
    <div style={{ overflowX: 'auto' }}>
      <DivButtonSearch>
        <TextField
          id="search"
          type="text"
          placeholder="Filtrar por Nome"
          aria-label="Search Input"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <ClearButton type="button" onClick={handleClear}>
          X
        </ClearButton>
      </DivButtonSearch>
      <DataTable
        title="Lista de Usuários"
        columns={columns}
        data={filteredItems}
        customStyles={customStyles}
        responsive
        pagination
        paginationComponentOptions={paginationOptions}
        progressPending={loading}
        striped={true}
      />
    </div>
  );
}

export default TableUsers;
