import React from 'react';
import classes from './BurgerIngredient.css';

const bugerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>
  }

};

export default bugerIngredient;