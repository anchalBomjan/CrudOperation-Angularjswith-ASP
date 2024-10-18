
app.controller('CategoryController', ['$scope', function($scope) {

    // Static data for product categories
    $scope.categories = [
        { id: 1, name: 'Electronics', description: 'All kinds of electronic gadgets and devices.' },
        { id: 2, name: 'Clothing', description: 'Men’s, women’s, and children’s apparel.' },
        { id: 3, name: 'Home Appliances', description: 'Appliances for household needs.' },
        { id: 4, name: 'Books', description: 'Books from all genres and authors.' },
        { id: 5, name: 'Beauty Products', description: 'Cosmetics, skincare, and grooming products.' }
    ];

}]);
