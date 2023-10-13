sap.ui.define([
	"sap/m/Text"
], function (Text) {
	"use strict";

	new Text({
		text: "Hello World via Javascript"
	}).placeAt("content");

});