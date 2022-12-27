import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPokemon from "../pages/searchPokemon";
import SinglePokemonPage from "../pages/singlePokemonPage";

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SearchPokemon />} />
        <Route path="/details/:id" element={<SinglePokemonPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default Router;
