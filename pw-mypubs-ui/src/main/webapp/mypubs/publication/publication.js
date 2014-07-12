(function() {


angular.module('pw.publication', ['ngRoute', 'pw.actions',
	'pw.bibliodata', 'pw.catalog', 'pw.contacts', 'pw.links', 'pw.collaborator' // pub edit modules
])


.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/Publication', {
			templateUrl: 'mypubs/publication/publication.html',
			controller: 'publicationCtrl'
		})
		$routeProvider.when('/Publication/:pubsid', {
			templateUrl: 'mypubs/publication/publication.html',
			controller: 'publicationCtrl'
		})
	}
])


.controller('publicationCtrl',
[ '$scope', '$routeParams', 'PublicationFetcher',
function($scope, $routeParams, PublicationFetcher) {

	if ($routeParams.pubsid) {
		PublicationFetcher.getById($routeParams.pubsid)
	} else {
		// TODO redirect to Search or Select citation

		PublicationFetcher.get()
	}


	$scope.tabs = [
		{
			title:"Bibliodata",
			templateUrl: 'mypubs/publication/bibliodata/bibliodata.html',
			controller: 'biblioCtrl'
		},
		{
			title:"Collaborators",
			templateUrl: 'mypubs/publication/collaborators/collaborator.html',
			controller: 'collaboratorsCtrl'
		},
		{
			title:"Links",
			templateUrl: 'mypubs/publication/links/links.html',
			controller: 'linksCtrl'
		},
		{
			title:"Contacts",
			templateUrl: 'mypubs/publication/contacts/contact.html',
			controller: 'contactCtrl'
		},
		{
			title:"Cataloging",
			templateUrl: 'mypubs/publication/catalog/catalog.html',
			controller: 'catalogCtrl'
		},
		{
			title:"Geospatial",
			templateUrl: 'mypubs/publication/geo/geo.html',
			controller: 'geoCtrl'
		},
	]
}])


}) ()
