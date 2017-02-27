myApp.controller("PageController", function ($scope, retrieveNewsService) {
	$scope.output = "";

	$scope.addNews = function(link) {
		if (link) {
			retrieveNewsService.getAnalysis(link, function(err, response) {
				if (err) {
					// console.log(err);
					$scope.output = "Error: City not found";
					return;
				}
				$scope.response = response;

				// empty input field
				$scope.link = null;
			});
		}

	};

	window.addEventListener('click', function(e){
		if(e.target.href!==undefined){
			chorme.tabs.create({url:e.target.href})
			$scope.link = e.target.href
		}
	})
});