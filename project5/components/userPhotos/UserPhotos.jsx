import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import './UserPhotos.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        //photos: window.cs142models.photoOfUserModel(this.props.match.params.userId),
        photos: undefined,
    };

    fetchModel('http://localhost:3000/photosOfUser/'+this.props.match.params.userId).then(response => {
        this.setState({photos: response.data});
    });
    fetchModel('http://localhost:3000/user/'+this.props.match.params.userId).then(response => {
        this.props.changeView("Photos of " + response.data.first_name + " "+response.data.last_name);
    });
  }


  handleComments(index) {
      let comments = this.state.photos[index].comments;
      if (undefined !== comments) {
        let listItems = [];
        let Itemkey = 0;
        for (let i = 0; i<comments.length;i++) {
            listItems[i] = 
            <Card key={Itemkey}>
                <CardContent>
                    <ListItem>
                        <ListItemText primary={comments[i].date_time}/>
                    </ListItem>
                    <ListItem button component={Link} to={'/users/'+this.props.match.params.userId} >
                        <ListItemText secondary={comments[i].user.first_name +" " + comments[i].user.last_name}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary={comments[i].comment}/>
                    </ListItem>
                </CardContent>
            </Card>;
            Itemkey += 1;
        }
        return listItems;
      }
  }

  render() {
    let listItems = [];
    let Itemkey = 0;
    if (undefined !== this.state.photos) {
    for (let i=0; i<this.state.photos.length; i++) {
        listItems[i] = 
       <Card key = {Itemkey}> 
      <CardHeader
        subheader={this.state.photos[i].date_time}
      />
      <CardMedia
        component = "img"
        image={"/images/"+this.state.photos[i].file_name}
        height="200"
        width="50"
        title={this.state.photos[i].file_name}
      />
      <CardContent>
          {this.handleComments(i)}
      </CardContent>
      </Card>;

      Itemkey += 1;
    }
    }

    return (
        <div>
        {listItems}
      {/*
      <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the user from
        window.cs142models.photoOfUserModel(userId):
        <Typography variant="caption">
          {JSON.stringify(window.cs142models.photoOfUserModel(this.props.match.params.userId))}
        </Typography>
      </Typography>
      */}
    </div>

    );
  }
}

export default UserPhotos;
