app.service('ProductService', ['$http', function ($http) {
    const baseUrl = 'https://localhost:44341/api/Product';

    // Get all products
    this.getProducts = function () {
        return $http.get(baseUrl).then(response => response.data).catch(handleError);
    };

    // Get a product by ID
    this.getProductById = function (id) {
        return $http.get(`${baseUrl}/${id}`).then(response => response.data).catch(handleError);
    };

    // Add a new product
    this.addProduct = function (product) {
        return $http.post(baseUrl, product).then(response => response.data).catch(handleError);
    };

    // Update an existing product
    this.updateProduct = function (id, product) {
        return $http.put(`${baseUrl}/${id}`, product).then(response => response.data).catch(handleError);
    };

    // Delete a product by ID
    this.deleteProduct = function (id) {
        return $http.delete(`${baseUrl}/${id}`).then(response => response.data).catch(handleError);
    };

    // Handle errors
    function handleError(error) {
        console.error('API error:', error);
        throw error; // Re-throw error to handle it in the controller
    }
}]);

