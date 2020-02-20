
import React, { useState } from "react";
import Compras from "./Compras";
import ListaCompras from "./ListaCompras";


class General extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1
    }
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  /*
  * the functions for our button
  */
 previousButton(e) {
  let currentStep = this.state.currentStep;
  if (currentStep !== 1) {
    this._prev();
  }
}

nextButton = (e) => {
  let currentStep = this.state.currentStep;
  if (currentStep === 1) {
    this._next();
  }
}
  
  render() {
    return (
      <React.Fragment>
        <Step1
          currentStep={this.state.currentStep}
          nextButton={e => this.nextButton()}
        />
        <Step2
          currentStep={this.state.currentStep}
          previousButton = {e=>this.previousButton()}
        />

      </React.Fragment>
    );
  }
}

const Step1 = (props) => {
  if (props.currentStep !== 1) return null;

  return (
    <ListaCompras nextButton={e => props.nextButton()} />
  );
}

const Step2 = (props) => {
  if (props.currentStep !== 2) return null;

  return (
    <Compras previousButton={e => props.previousButton()} />
  )
}

export default General;