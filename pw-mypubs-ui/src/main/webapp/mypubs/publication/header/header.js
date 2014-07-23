(function() {


angular.module('pw.pubHeader', [])


.directive('pwPubheader', function() {

	var _this = {
		restrict   : 'E', //AEC
		replace    : true,
		transclude : true,
		scope      : true,
		templateUrl: 'mypubs/publication/header/header.html',
	}
	return _this
})


.controller('pubHeaderCtrl', [
'$scope', 'DataRowFieldService', 'headerFields',
function ($scope, DataRowFieldService, fields) {

	var pubData = $scope.pubData;
	$scope.rows = fields
	DataRowFieldService.fieldMapper(fields, pubData)
}])


.factory('headerFields', function() {
	return [
		{
			name   : "id",
			label  : "Prod ID",
			rowType: "Readonly",
		},
		{
			additional:true,
			name   : "index-id",
			label  : "Index ID",
			rowType: "Readonly",
		},
		{
			additional:true,
			name   : "display-to-public-date",
			label  : "Display to Public",
			rowType: "Date",
			andTime: true,
			elId   : "PublicDate",
		},
	]
})


}) ()
