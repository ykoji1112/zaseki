import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FloorSelect(props) {
  const classes = useStyles();
  const [floor, setFloor] = React.useState(props.floor);

  const handleChange = (event) => {
    setFloor(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">場所</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={floor}
          onChange={handleChange}
          label="floor"
        >
          <MenuItem value="">
            <em>全て</em>
          </MenuItem>
          <MenuItem value="本社1階">本社1階</MenuItem>
          <MenuItem value="本社2階">本社2階</MenuItem>
          <MenuItem value="本社3階">本社3階</MenuItem>
          <MenuItem value="本社4階">本社4階</MenuItem>
          <MenuItem value="本社5階">本社5階</MenuItem>
          <MenuItem value="盛岡センター">盛岡センター</MenuItem>
          <MenuItem value="大船渡センター">大船渡センター</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
