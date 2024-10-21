
app.controller('ProductController', [
    '$scope', '$routeParams', 'ProductService', '$location',
    function ($scope, $routeParams, ProductService, $location) {
        $scope.products = [];
        $scope.newProduct = {};
        $scope.selectedProduct = {};
        $scope.message = '';
        const productId = $routeParams.id; // Get product ID from the route if available

        // Load all products
        function loadProducts() {
            ProductService.getProducts()
                .then(function (data) {
                    console.log('Products loaded:', data); //  checking data Log the products
                    $scope.products = data;
                })
                .catch(function (error) {
                    $scope.message = 'Error loading products: ' + error.message;
                });
               
        }

        // Load product by ID for editing if in edit mode
        function loadProductById() {
            if (productId) {
                ProductService.getProductById(productId)
                    .then(function (data) {
                        console.log(`Loading product by id:`,data);  // checking   data
                        $scope.selectedProduct = data; // Bind product to the form
                    })
                    .catch(function (error) {
                        $scope.message = 'Error loading product: ' + error.message;
                    });
            }
        }

        // Add a new product
        $scope.addProduct = function () {
            console.log('Adding product:', $scope.newProduct); // checking  Log the new product
            ProductService.addProduct($scope.newProduct)
                .then(function () {
                    $scope.message = 'Product added successfully!';
                    loadProducts();
                    $scope.newProduct = {}; // Reset form
                })
                .catch(function (error) {
                    $scope.message = 'Error adding product: ' + error.message;
                });
        };

        // Edit: Update selected product
        $scope.updateProduct = function () {
            console.log('Updating product:', $scope.selectedProduct); // checking Log the product to update
            ProductService.updateProduct($scope.selectedProduct.id, $scope.selectedProduct)
                .then(function () {
                    $scope.message = 'Product updated successfully!';
                    $location.path('/products'); // Redirect to product list
                })
                .catch(function (error) {
                    $scope.message = 'Error updating product: ' + error.message;
                });
        };

        // Cancel edit: Clear form and navigate back to products list
        $scope.cancelEdit = function () {
            $location.path('/products');
        };

        // Delete a product
        $scope.deleteProduct = function (id) {
            ProductService.deleteProduct(id)
                .then(function () {
                    $scope.message = 'Product deleted successfully!';
                    loadProducts();
                })
                .catch(function (error) {
                    $scope.message = 'Error deleting product: ' + error.message;
                });
        };

        // Initialize controller: Load products or a specific product for editing
        if (productId) {
            loadProductById(); // If in edit mode
        } else {
            loadProducts(); // Load product list
        }
    }
]);
