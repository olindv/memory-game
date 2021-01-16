import React, {useEffect} from "react";
import "./App.css";
import View from "./pages/index";
import { connect } from "react-redux";
import {getImgRequest} from './redux/actions';

function App({getData}) {


  useEffect(() => {
    getData()
  },[getData])


  return (
    <div className="App">
      <View />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getImgRequest()),
  }
}


export default connect(null, mapDispatchToProps)( App);
