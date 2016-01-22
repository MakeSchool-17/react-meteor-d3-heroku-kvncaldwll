Hours = new Meteor.Collection("Hours");

Meteor.methods({
	// takes number of hours and date as parameters
	insertHour: function(numHours, date) {
		// check if int
		numHours = parseInt(numHours, 10); // second(called a 'radix') param tells which numeral system
		// use meteor check function to check if int again..
		check(numHours, Number);
		check(date, Date);
		// use meteor insert function to insert the parameters as 
		// key-value pairs to the collection
		var newInsert = Hours.insert({
			hours 	: 	numHours,
			date 	: 	date
		});
		// executes
		return newInsert;
	},

	removeHour: function(id) {
		// check if string
		check(id, String);
		// use meteor remove function to remove by id, returns if error
		var rmvInsert = Hours.remove( id, function onError(){ console.log( 'Oops! Something went wrong :(' ) } );
		// executes
		return rmvInsert;

	}

});