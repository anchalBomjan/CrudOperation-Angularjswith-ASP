var app = angular.module('productApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'Views/products.html',  // Adjusted path
            controller: 'ProductController'
        })
        .when('/add-product', {
            templateUrl: 'Views/addProduct.html',  // Adjusted path
            controller: 'ProductController'
        })
        .when('/edit/:id',{
            templateUrl:'Views/Edit.html',
            controller:'ProductController'
        })
        .when('/categories', {
            templateUrl: 'Views/category.html', // Correct path
            controller: 'CategoryController'
        })
        .otherwise({
            redirectTo: '/products'
        });
}]);
