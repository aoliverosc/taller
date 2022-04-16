"use strict";

const axios = require("axios");

const getIps = async (req, res) => {
    try {
		const response = await axios({
			url: "https://check.torproject.org/torbulkexitlist",
			method: "get",
		});
		
        const responseParsed = response.data.replace(/(\r\n|\n|\r)/gm, " ").split(" ");
		responseParsed.pop();
		res.status(200).send(responseParsed);
	} catch (err) {
		res.status(500).send({ message: err });
	}
};

module.exports = {
    getIps
};