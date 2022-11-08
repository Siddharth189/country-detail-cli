"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const { useState } = require("react");
const TextInput = require("ink-text-input").default;
const wcc = require("world-countries-capitals");

const App = () => {
	const [country, setCountry] = useState("");
	const [capital, setCapital] = useState("");
	const [currency, setCurrency] = useState("");
	const [phone, setPhone] = useState("");
	const [language, setLanguage] = useState("");

	React.useEffect(() => {
		const getCountry = wcc.getCountryDetailsByName(country);
		setCapital(getCountry[0].capital);
		setCurrency(getCountry[0].currency);
		setPhone(getCountry[0].phone_code);
		setLanguage(getCountry[0].native_language);
	});

	return (
		<Box flexDirection="column" alignSelf="left">
			<Box borderColor="green" borderStyle="round">
				<Text>Welcome to the country CLI</Text>
			</Box>
			<TextInput
				placeholder="Enter country name..."
				value={country}
				onChange={setCountry}
			/>
			<Box flexDirection="column" borderColor="white" width={80} borderStyle="single">
				<Box>
					<Box width="40%">
						<Text>Code</Text>
					</Box>
					<Box width="40%">
						<Text>Capital</Text>
					</Box>
					<Box width="40%">
						<Text>Currency</Text>
					</Box>
					<Box width="40%">
						<Text>Language</Text>
					</Box>
				</Box>

				<Box>
					<Box width="40%">
						<Text>{phone}</Text>
					</Box>
					<Box width="40%">
						<Text>{capital}</Text>
					</Box>
					<Box width="40%">
						<Text>{currency}</Text>
					</Box>
					<Box width="40%">
						<Text>{language}</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

module.exports = App;
