import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../mystyles.css";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Cards({ shoes, addCart, findShoe }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  if(shoes !== null){

    
    return (
      <div className = {window.innerWidth > 768 ? 'lazy' : 'not-lazy'}>
    <div className={window.innerWidth > 768 ? 'not-card-set' : 'card-set'}>
      {shoes.map(shoe => (
        <div className = 'classy'>
        <Card className = 'mycard'>
         
            <CardMedia
              className={classes.media}
              image={shoe.link}
              title="Paella dish"
              // value={shoe.name}
              // onClick={e => findShoe(e.currentTarget.value)}
              />
         
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <div className="card-data">
                <div>
                  <h4 className="shoe-name">{shoe.name}</h4>
                  <h6>{shoe.type}</h6>
                </div>

                <div className="amount-div">
                  <h4>{shoe.price}</h4>
                </div>
              </div>
              <Link
            to={{
              pathname: `/products/${shoe.name}`
            }}
            >
              <Button
                variant="contained"
                color="secondary"
                value={shoe.name}
                className= "my-button"
                onClick={e => findShoe(e.currentTarget.value)}
                >
                View Details
              </Button>

              </Link>

              <Button
                variant="contained"
                color="secondary"
                value={shoe.name}
                className= "my-button"
                onClick={e => addCart(e.currentTarget.value)}
                >
                ADD TO CART
              </Button>
            </Typography>
          </CardContent>
         
        </Card>
        </div>
      ))}
    </div>
    </div>
  );
  
  
}

else if(shoes === null){
  return(
    <div>Loading Products ...</div>
  )
}
}
