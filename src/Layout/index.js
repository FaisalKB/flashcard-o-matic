import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

/* These (above and below) are the imports, we are importing from React as well as folders within our project */

import Home from "./HomeComponent/Home";
import Study from "./StudyComponent/Study";

import Deck from "./DecksComponent/Deck";
import CreateDeck from "./NewDecksComponent/CreateDeck";
import EditDeck from "./EditDecksComponent/EditDeck";

import AddCard from "./CardComponents/new/AddCard";
import EditCard from "./CardComponents/edit/EditCard";

/* index.js within Layout houses my primary component that renders the homepage. Using Switch and Route, i can determine paths that the router will then route to, resulting in rendering only
what is necessary based on the url/path */

/* below is my Switch/Route layout. you'll see that within switch is multiple routes, each with it's own path that contains a component to render based on what page we're on */

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
