var app = angular.module('CrudApp',[]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/Contacts', {
			templateUrl:'views/contacts.html',
			controller:'ContactsCtrl'
		}).
		when('/Add',{
			templateUrl:'views/add.html',
			controller:'AddCtrl'
		}).
		when('/Edit',{
			templateUrl:'views/edit.html',
			controller:'EditCtrl'
		}).
		otherwise({
			redirectTo:'/Contacts'
		});
}]);

app.controller('MainCtrl', ['$scope',function($scope){
	$scope.title = "Contact Management"
	$scope.persons = [
		{
			'name':'Senthil',
			'email':'ssthil@gmail.com',
			'age':'32',
			'mobile':'98005761',
			'id':'0'
		},
		{
			'name':'Surya',
			'email':'75senya@gmail.com',
			'age':'26',
			'mobile':'98005761',
			'id':'1'
		}

	];

	//$scope.updatePersons = [];
	$scope.editing = false;

		$scope.editItem = function(index){
			 $scope.editing = $scope.persons.indexOf(index);	   
		}
}]);

app.controller('ContactsCtrl', ['$scope',function($scope){
	$scope.name = 'Name';
	$scope.email = 'Email';
	$scope.age = 'Age';
	$scope.mobile = 'Contact Number';
}]);



app.controller('AddCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.save = function() { 
    
         $scope.persons.push ({name:$scope.name, email:$scope.email, age:$scope.age, mobile:$scope.mobile})
         $location.path('/'); 
     
       
      };
}]);
app.controller('EditCtrl', ['$scope','$location' , function($scope, $location) {
	//$scope.message = "This is Update screen";

	$scope.save = function(){
		$scope.persons.push({name:$scope.name, email:$scope.email, age:$scope.age, mobile:$scope.mobile})
		$location.path('/');
	};

	$scope.editItem = function(index){ 
		//$scope.updatePersons[persons.id] = true;
		$scope.editmode = true;
    	$scope.name = angular.copy($scope.currentrow);
	};
}]);