import React, { createContext, useState, Component, useReducer } from 'react';

export const AuthContext = createContext();

const authReducer = (state, actions) => {
	switch (actions.type) {
		case 'SET_AUTH':
			return {
				isAuth: true,
			};
		default:
			return state;
	}
};

// const AuthContextProvider = (props) => {
// 	const [state, dispatch] = useReducer(authReducer, {
// 		isAuth: false,
// 	});
// 	// const changeAuth = setIsAuth;
// 	console.log(state);
// 	return (
// 		<AuthContext.Provider
// 			value={{
// 				state,
// 				dispatch,
// 			}}
// 		>
// 			{props.children}
// 		</AuthContext.Provider>
// 	);
// };

// export default AuthContextProvider;
