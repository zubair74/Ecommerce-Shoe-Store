import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


import "../styles.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function CartItems({ cart, getProd }) {

  const fetchedData = getProd()
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(cart);

  return (
    <div className={window.innerWidth > 768 ? 'cart-items-div' : 'not-cart-div'}>
      {cart.map(carts => (
        <Card className="cart-items" variant="outlined">
          <div>
            <CardMedia
              // className={classes.media}
              image={carts.link}
              title="Paella dish"
              className="cart-img"
            />
          </div>
          <div>
            <CardContent>
              <Typography variant="h5" component="h2">
                {carts.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {carts.type}
              </Typography>
              <Typography variant="body2" component="p">
                Quantity: 1
              </Typography>
              <Typography variant="h5" component="h2">
                {carts.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">ADD PAIR</Button>
              <Button size="small">REMOVE PAIR</Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </div>
  );
}