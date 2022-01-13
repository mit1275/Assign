import React from "react";
import { Media } from "react-bootstrap";
// import "../Category/SubCategory/subcategory.scss";
// import "./Amit";
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import Card from '@material-ui/core/Card';
import ContactsIcon from '@mui/icons-material/Contacts';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import MIT from '../../images/download.jfif';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import WorkIcon from '@mui/icons-material/Work';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Input from "@material-ui/core/Input";
import Axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import Header from './Header';
import ShareIcon from '@mui/icons-material/Share';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1.1,
    padding: theme.spacing(1.1),
    maxWidth: 660,
    
    
  },
  media: {
    height: 70,
    width:680
    // Ho
  },
}));

function MediaCard(props) {
  const classes = useStyles();
  const [Files, setFiles] = React.useState([]);



  return (
    <>
      {
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                
                title={props.firstName}
                // console.log(prp)
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  <h3 style={{fontFamily:'Comic Sans MS'}}>{props.firstName} {props.lastName}</h3>
                  
                  <h2 style={{color:'green'}}><SchoolIcon/></h2>
                <h3 style={{fontFamily:'Comic Sans MS',color:'#20B2AA'}}>EDUCATION</h3>
                <h5>{props.education}</h5>
                <h2 style={{color:'green'}}><WorkIcon/></h2>
                <h3 style={{fontFamily:'Comic Sans MS',color:'#20B2AA'}}>EXPERIENCE</h3>
                <h5>{props.exper}</h5>
                
                

               
                
                  
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  // image=
                  component='p'
                ></Typography>
                
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
            <h1 style={{size:'49em'}}><ShareIcon/></h1>
          </Card>
          
        // </Link>
      }
    </>
  );
}
export default function ProfileCard(props) {
 
  const [Files, setFiles] = React.useState([]);
  const [search,setsearch]=React.useState("");

  const address = 'http://localhost:3001/api/admin/allfiles';
  React.useEffect(() => {
    // <Header/>
    Axios.post(address).then((result) => {

      // for var i in 
      console.log(result.data.files);
      setFiles(result.data.files);
     
     
    });
  }, []);
  

  return (
    <>
    {/* <div className="App"> */}
      
      {/* <form><input type="text" class="textbox" placeholder="Search" onChange={event=>{setsearch(event.target.value)}}></input></form> */}
      {
        Files.filter((value)=>{
          if(search==="")
          {
            return value;
          }
          else if(value.filename.toLowerCase().includes(search.toLowerCase()))
          {
               return value;
          }
        }).map((value, key) => {
          return (
            <div style={{ marginRight: '20px', width: '30rem',marginTop:'30px',justifyContent:"center"}}>
              {/* <margin */}

              {/* console.log() */}
              <MediaCard {...value} />
            </div>
          )
        })
      }
    {/* </div> */}
      {/*  */}
    </>
  );
}
