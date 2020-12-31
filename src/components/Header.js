import { Button } from "@material-ui/core";

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <h1>ConectaDev</h1>
        </div>
        <div>
          <Button variant="contained" color="primary">Novo posts</Button>
          <span>img 01</span>
          <span>img 02</span>
        </div>
      </div>
    </header>
  );
}

export default Header;