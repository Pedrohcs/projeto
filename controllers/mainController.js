angular.module('meuApp')
    .controller('mainController', ['$scope', '$http', function($scope, $http) {
        $scope.submit = function() {
            $scope.substituiEspaco();
            $http.get($scope.addressFormatado).
            then(function(response) {
                $scope.resposta = response.data;
                console.log(response);
            }).catch(function(response) {
                $scope.resposta = 'Rua não encontrada'
            })
        }

        $scope.substituiEspaco = function () {
            $scope.addressFormatado = $scope.address.replace(' ', '%20');
            console.log($scope.addressFormatado);
            $scope.addressFormatado = 'https://viacep.com.br/ws/GO/Goiania/'+$scope.addressFormatado+'/json/';
        }
    }]);



