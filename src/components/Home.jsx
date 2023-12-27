import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "4px 12px" }}>
      <h4>Home</h4>
      The Redux Toolkit is a package designed to make working with Redux more
      efficient by providing simplifications and shortcuts for common Redux use
      cases. It includes utilities and abstractions to reduce the amount of
      boilerplate code typically required when setting up a Redux store and
      writing reducers.
      <h3>Redux Toolkit includes several key features:</h3>
      <h4>configureStore():</h4> A function that wraps around the createStore()
      function from Redux. It helps configure the Redux store with additional
      functionalities like middleware, DevTools setup, etc.{" "}
      <h4>createSlice():</h4> A function for defining Redux state slices, which
      contains reducer logic and action creators in a more concise manner.{" "}
      <h4>createAction():</h4> A utility to create action objects in Redux
      without the need to write action types.
      <h4>createReducer():</h4> A utility function for defining Redux reducers
      in a more compact way using a lookup table of reducer functions.{" "}
      <h4>createAsyncThunk():</h4>A utility to simplify the creation of action
      creators that perform asynchronous logic and dispatch actions based on the
      promise resolution.
      <h4>createEntityAdapter():</h4> A set of utilities for working with
      normalized state data, particularly useful for managing entities like
      users, posts, etc. 
     <h4> The official documentation for Redux Toolkit can be
      found on the Redux Toolkit GitHub repository:</h4> Redux Toolkit Documentation
      This documentation provides detailed guides, examples, and API references
      for using Redux Toolkit effectively in your Redux-based applications.
    </div>
  );
};

export default Home;
