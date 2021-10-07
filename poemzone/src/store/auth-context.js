import React, { useState } from "react";

const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(currentTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;
	return remainingDuration;
};

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem("token");
	const [token, setToken] = useState(initialToken);

	const userIsLoggedIn = !!token;

	const logOutHandler = () => {
		setToken(null);
		localStorage.removeItem(token);
	};

	const logInHandlder = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem("token", token);

		const remainingTime = calculateRemainingTime(expirationTime);

		const logoutTimer = setTimeout(logOutHandler, remainingTime);
	};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: logInHandlder,
		logout: logOutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
