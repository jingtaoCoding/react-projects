import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPokemon from "../pages/searchPokemon";
import PokemonDetails from "../components/pokemon/PokemonDetails"

// import Landing from "../pages/landing";
// import Demo from "../pages/demo/demo";
// import ReactCheatsheet from "../pages/cheatsheet/reactCheatsheet";
// import { Counter } from "../components/counter/Counter";

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SearchPokemon />} />
        <Route
          path="/details/:id"
          element={<PokemonDetails />}
        />
        {/* <Route path="/demo" element={<Demo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/react/cheatsheet" element={<ReactCheatsheet />} /> */}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default Router;
