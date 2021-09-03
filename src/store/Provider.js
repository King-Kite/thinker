import React, { createContext, useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";

export const GlobalContext = createContext({});

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{ children }
		</GlobalContext.Provider>
	)
}

export default Provider;