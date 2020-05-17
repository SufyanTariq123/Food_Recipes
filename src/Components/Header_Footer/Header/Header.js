import React, { component } from "react";
import { AppBar, TextField, Button, Grid, Paper } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import styles from "./Header.module.css";
import icon from "./../../Images/Food.png";
import SearchIcon from "@material-ui/icons/Search";

const Header = (props) => {
  const { search, onInputChange, onSeacrhClick } = props;
  return (
    <React.Fragment>
      <div className={styles.headerWrapper}>
        <Grid container justify="center">
          <Grid item>
            <div className={styles.header}>
              <img src={icon} alt="Food Icon" className={styles.icon} />
              <i className={styles.text}>Food Recipes</i>
              <strong style={{ color: "white" }}>
                Developed by Sufyan Tariq
              </strong>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.searchWrapper}>
        <Grid container justify="center">
          <Grid item>
            <div className={styles.searchwrapper}>
              <SearchIcon className={styles.searchIcon} />
              <TextField
                id="standard-id"
                label="Search Recipes"
                className={styles.searchTextField}
                value={search}
                onChange={onInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                className={styles.btn}
                onClick={onSeacrhClick}
              >
                Search
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Header;
