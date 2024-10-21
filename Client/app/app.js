var app = angular.module('productApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'views/products.html',  // Adjusted path
            controller: 'ProductController'
        })
        .when('/add-product', {
            templateUrl: 'views/addProduct.html',  // Adjusted path
            controller: 'ProductController'
        })
        .when('/edit/:id',{
            templateUrl:'views/Edit.html',
            controller:'ProductController'
        })
        .when('/categories', {
            templateUrl: 'views/category.html', // Correct path
            controller: 'CategoryController'
        })
        .otherwise({
            redirectTo: '/products'
        });
}]);
