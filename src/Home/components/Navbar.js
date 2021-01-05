import { Button, List, ListItem, ListItemText, ListSubheader, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 230,
    marginRight: theme.spacing(2)
  },
  buttonRegistrar: {
    width: '100%'
  }

}));


const tags = [
  {
    id: '1',
    name: 'php'
  },
  {
    id: '2',
    name: 'javascript'
  },
  {
    id: '3',
    name: 'reactjs'
  },
  {
    id: '4',
    name: 'dotnet'
  },
  {
    id: '5',
    name: 'webdev'
  }
]

function Navbar() {
  const classes = useStyle();

  return (
    <Paper component="nav" className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.buttonRegistrar}>Registrar grátis</Button>
      <List dense>
        <ListSubheader>Tags em alta</ListSubheader>
        {
          tags.map(tag => (
            <ListItem key={tag.id} button>
              <ListItemText primary={tag.name} />
            </ListItem>
          ))
        }
        <ListItem button>
          <ListItemText primary="Exibir mais tags" />
        </ListItem>
      </List>
    </Paper>
  );
}

export default Navbar;