app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },

    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

$scope.mains = [
    {
      name: 'Wings',
      description: 'BBQ Dipped. Fried Chicken.',
      price: 4.95
    },
    {
      name: 'Pasta',
      description: 'Served with marinara sauce.',
      price: 3.95
    },

    {
      name: 'Sliders',
      description: 'Grilled Beef, tomatoes, Chesse.',
      price: 4.95
    }
  ];

  $scope.extras = [
    {
      name: 'French Fries',
      description: 'Fried Potatos Honey mustard.',
      price: 4.95
    },
    {
      name: 'Garlic Knots',
      description: 'Served with marinara sauce.',
      price: 3.95
    },

    {
      name: 'chiken Fingers',
      description: 'Fried Chicken.',
      price: 4.95
    }
  ];
}]);