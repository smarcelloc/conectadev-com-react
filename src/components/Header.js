import { AppBar, Button, IconButton, Toolbar, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  NotificationsNone as NotificationsNoneIcon
} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({

  appBar: {
    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
  },

  logo: {
    maxHeight: 55
  },

  separator: {
    flexGrow: 1
  }

}));


function Header() {

  const classes = useStyle();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="Logotipo do ConectaDev" className={classes.logo} />
        <div className={classes.separator}></div>
        <Button variant="contained" color="primary">Novo posts</Button>
        <IconButton title="Notificação">
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar src="/images/avatars/default.png" alt="Perfil do sistema" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;