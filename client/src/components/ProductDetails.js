import React, { useContext } from "react";
import "../styles.css";
import Footer from "./footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Navbar from "./navbar";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function ProductDetails({ shoe, addCart,count }) {
  console.log(shoe);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Navbar count = {count}/>
      <div className="carddetails-div">
        <Card className= 'card-items'>
          <div>
            <CardMedia
              image={shoe.link}
              title="Paella dish"
              className="card-img"
            />
          </div>
          <div className="details-div">
            <div className="shoenames">
              <h3>{shoe.name}</h3>
              <h6>{shoe.type}</h6>
            </div>
            <div className="proddesc">
              <h6>Product Description</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
            <div className="color-div ">
              <h6>Color</h6>
              <div className="colors">
                <span class="color active" primary="#2175f5" color="blue" />
                <span class="color" primary="#f84848" color="red" />
                <span class="color" primary="#29b864" color="green" />
                <span class="color" primary="#ff5521" color="orange" />
                <span class="color" primary="#444" color="black" />
              </div>
            </div>

            <div className="size-div">
              <h6>Size</h6>
              <div class="sizes">
                <span class="size">7</span>
                <span class="size">8</span>
                <span class="size active">9</span>
                <span class="size">10</span>
                <span class="size">11</span>
              </div>
            </div>
            <div class="buy-price">
              <button
                class="buy" value={shoe.name} onClick={e => addCart(e.currentTarget.value)}
              >
                <i class="fas fa-shopping-cart" />
                Add to card
              </button>
              <div class="price">
                <i class="fas fa-dollar-sign" />
                <h1>189.99</h1>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}