import React from "react";
import App from "./App";
import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloProvider,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

// const LOCAL = "http://localhost:5000/";
const HEROKU = "https://arcane-wave-70063.herokuapp.com/";

const httpLink = createHttpLink({
	uri: HEROKU,
});

const authLink = setContext(() => {
	const token = localStorage.getItem("jwtToken");
	return {
		headers: {
			Authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
