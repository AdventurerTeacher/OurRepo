import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import  { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [city, setCity] = React.useState('');

  // const handleChange = (event) => {
  //   setCity(event.target.value);
  // };

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/getD/")
      .then(response => response.json())
      .then(data => setData(data));
  });

  return (
      <div align = "center"  >
         <ul>
        {data.map(el => ( <li>
          <br></br>
         <Card className={classes.root} >
            <CardHeader
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={el.name}
            subheader={el.date}
        />
        <CardContent>
        <Typography>{el.subject}</Typography>
            <Typography variant="body2"  component="p">
            {el.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button aria-label="add to favorites" variant="contained" color="primary">
            BOOK
            </Button>
        </CardActions>
        </Card>
        </li>
        ))}
          </ul>
      </div>
    
  );
}
