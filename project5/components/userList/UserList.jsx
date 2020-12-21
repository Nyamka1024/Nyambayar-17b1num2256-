import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
}
from '@material-ui/core';
import './UserList.css';
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userList: undefined,
          //userList : window.cs142models.userListModel(),
    };    
    fetchModel('http://localhost:3000/user/list').then(response => {
        this.setState({userList: response.data});
    });
  }

  render() {
    let listItems = [];
    let Itemkey = 0;
    if ( undefined !== this.state.userList) {
    for (let i = 0; i < this.state.userList.length; i++) {

        listItems[i] = 
        <Link to={"/users/" +  this.state.userList[i]._id} key={Itemkey}>
      <ListItem button>
          <ListItemText primary = {this.state.userList[i].first_name + " " + this.state.userList[i].last_name} />
      </ListItem>
      <Divider key={Itemkey-1}/>
        </Link>;
        Itemkey += 1;
    }

    }

    return (
      <div>
        {/*<Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://material-ui.com/demos/lists/">Lists</a> and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography>*/}
        <List component="nav">
            {listItems}
        </List>
        {/*<Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography>*/}
      </div>
    );
  }
}

export default UserList;
