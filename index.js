angular.module('devSetup', []);
angular.module('devSetup').controller('devSetupCtrl', function($scope){

    $scope.items = [
    {nome: "Teclado", preco: "123", link: "https//amazon"},
    {nome: "Mouse", preco: "56", link: "kabum.com.br"},
    {nome: "Headset", preco: "993", link: "pichau.com.br"},
    {nome: "Mousepad", preco: "100", link: "terabyte.com.br"}
];
})


