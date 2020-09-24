import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export default ({ children }) => {
  const [search, setSearch] = useState(null);
};
