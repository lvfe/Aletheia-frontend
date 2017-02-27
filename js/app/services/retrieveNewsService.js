myApp.service('retrieveNewsService', function ($http) {
	this.getAnalysis = function (link, callback) {
		var model = {};
		var result = {
			"keywords":["Trump", "water"],
			"relevant": [
				{
					"url": "http://www.bbc.com/capital/gallery/20170223-the-boss-who-doesnt-believe-in-work-life-balance",
					"title": "the-boss-who-doesnt-believe-in-work-life-balance"
				},
				{
					"url": "http://www.bbc.com/capital/story/20170224-some-cafes-are-banning-wi-fi-to-encourage-conversation",
					"title": "some-cafes-are-banning-wi-fi-to-encourage-conversation"
				}
			],
			"collaborate":[
				{
					"evidence": 20,
					"url": "http://www.bbc.com/capital/story/20170224-some-cafes-are-banning-wi-fi-to-encourage-conversation",
					"title": "some-cafes-are-banning-wi-fi-to-encourage-conversation"
				}

			],
			"content": ["racism", "porn"]
		}
		// trying get weather
		$http({
			method: 'GET',
			url:'js/dublin.json'
		})
		.then(function sunccessCallback(response) {
			model = result;
			callback(null, model);
		}, function errorCallback(response){
			model = result;
			callback(null, model);
		});
	}

});