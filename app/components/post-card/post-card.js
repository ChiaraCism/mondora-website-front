angular.module("mnd-web.components")

.directive("mndPostCard", function () {
	return {
		restrict: "EA",
		templateUrl: "components/post-card/post-card.html",
		link: function ($scope, $element, $attrs) {
			$scope.type = $attrs.type;

			$scope.getTitle = function () {
				var title;
				if ($scope.post.title) {
					title = $scope.post.title.trim();
				}
				return title || "Untitled post";
			};

		}
	};
});
