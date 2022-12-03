import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./app.module.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { BrowserView, MobileView } from "react-device-detect"; // display device

import { requests } from "./components/const/CONST";
import { API_KEY } from "./components/const/CONST";

const Search = React.lazy(() => import("./pages/Search"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const MyCollection = React.lazy(() => import("./pages/MyCollection"));
const Genres = React.lazy(() => import("./components/Genres/Genres"));
const Movies = React.lazy(() => import("./pages/Movies"));
const TvShows = React.lazy(() => import("./pages/TvShows"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "100px auto",
            }}
          >
            <LoadingSpinner />
          </div>
        }
      >
        <div className={classes.displayMinWidth600}>
          <Routes>
            <Route path="/" element={<Home requests={requests} />} />
            <Route path="/tvshows" element={<TvShows requests={requests} />} />
            <Route path="/movies" element={<Movies requests={requests} />} />
            <Route
              path="/search"
              element={<Search requests={requests} apikey={API_KEY} />}
            />
            <Route path="/genres" element={<Genres requests={requests} />} />
            <Route
              path="/genres/:genresId"
              element={<Genres requests={requests} />}
            />
            <Route
              path="/mycollection"
              element={<MyCollection requests={requests} />}
            />
            <Route path="/login" element={<Login requests={requests} />} />
            <Route
              path="/register"
              element={<Register requests={requests} />}
            />
          </Routes>
        </div>
        <div className={classes.displayMaxWidth600}>
          <h3>Mobile version is developing...</h3>
          <LoadingSpinner></LoadingSpinner>
        </div>
      </Suspense>
    </Layout>
  );
}

export default App;
