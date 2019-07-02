import React, { Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import './Register.css';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

function Register() {
  const [uni, setUnit] = React.useState('');
  
  const handleChange = event => {
    setUnit(event.target.value);
  };

  return (
    <Fragment>
      <h2>Registrar Produtos</h2>

      <form noValidate autoComplete="off">
        <div className="">
          <TextField
            className="field-id"
            id="id"
            label="ID"
            // onChange={}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="name"
            label="Nome"
            // onChange={}
            margin="normal"
            variant="outlined"
          />
        </div>

        <div>
          <Select
            value={uni}
            onChange={handleChange}
            input={<BootstrapInput name="Unidade" id="age-customized-select" />}
          >
            <MenuItem value="Varejo">Varejo</MenuItem>
            <MenuItem value="Atacado">Atacado</MenuItem>
          </Select>

          <TextField
            id="price"
            label="Preço"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            margin="normal"
            variant="outlined"
          />
        </div>
        <Button variant="contained" size="medium" color="primary" className="">
          Salvar
        </Button>
      </form>
    </Fragment>
  )
}

export default Register;