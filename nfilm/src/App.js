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
const Trending = React.lazy(() => import("./pages/Trending"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // margin: "100px auto",
            }}
          >
            <LoadingSpinner />
          </div>
        }
      >
        <BrowserView>
          <div className={classes.displayMinWidth600}>
            <Routes>
              <Route path="/" element={<Home requests={requests} />} />
              <Route
                path="/tvshows"
                element={<TvShows requests={requests} />}
              />
              <Route path="/movies" element={<Movies requests={requests} />} />

              <Route
                path="/search"
                element={<Search requests={requests} apikey={API_KEY} />}
              />
              <Route
                path="/search/:keyword"
                element={<Search requests={requests} apikey={API_KEY} />}
              />
              <Route
                path="/search/:keyword/:page"
                element={<Search requests={requests} apikey={API_KEY} />}
              />
              <Route path="/genres" element={<Genres requests={requests} />} />
              <Route
                path="/genres/:genresId"
                element={<Genres requests={requests} />}
              />
              <Route
                path="/genres/:genresId/:page"
                element={<Genres requests={requests} />}
              />

              <Route
                path="/trending"
                element={<Trending requests={requests} />}
              />

              <Route
                path="/trending/:page"
                element={<Trending requests={requests} />}
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

              <Route path="*" element={<PageNotFound requests={requests} />} />
            </Routes>
          </div>
          {/* <div className={classes.displayMaxWidth600}>
            <h3>Mobile version is developing...</h3>
            <LoadingSpinner></LoadingSpinner>
          </div> */}
        </BrowserView>
        <MobileView>
          {/* <div
            style={{
              marginTop: "120px",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <h3>Mobile version is developing...</h3>
            <LoadingSpinner></LoadingSpinner>
          </div> */}
          <Routes>
            <Route path="/" element={<Home requests={requests} />} />
            <Route path="/tvshows" element={<TvShows requests={requests} />} />
            <Route path="/movies" element={<Movies requests={requests} />} />

            <Route
              path="/search"
              element={<Search requests={requests} apikey={API_KEY} />}
            />
            <Route
              path="/search/:keyword"
              element={<Search requests={requests} apikey={API_KEY} />}
            />
            <Route
              path="/search/:keyword/:page"
              element={<Search requests={requests} apikey={API_KEY} />}
            />
            <Route path="/genres" element={<Genres requests={requests} />} />
            <Route
              path="/genres/:genresId"
              element={<Genres requests={requests} />}
            />
            <Route
              path="/genres/:genresId/:page"
              element={<Genres requests={requests} />}
            />

            <Route
              path="/trending"
              element={<Trending requests={requests} />}
            />

            <Route
              path="/trending/:page"
              element={<Trending requests={requests} />}
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

            <Route path="*" element={<PageNotFound requests={requests} />} />
          </Routes>
        </MobileView>
      </Suspense>
    </Layout>
  );
}

export default App;
