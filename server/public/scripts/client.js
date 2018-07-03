let FoodApp = angular.module('FoodApp', []);

FoodApp.controller('FoodController', [function() {
    let self = this;
    self.message = 'Angular is up';
    self.input = '';
    self.foodsArray = [];
    self.addFood = function() {
        self.foodsArray.push(self.input);
        self.input = '';
    }
}]);