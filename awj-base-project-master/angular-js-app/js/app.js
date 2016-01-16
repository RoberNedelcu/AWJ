var app = angular.module('blog', []);

app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    $scope.helloWorld = 'Bine ati venit la laboratorul de Aplicatii Web cu suport Java';
    var url = 'http://localhost:8080/persoana';

    $scope.persoane = [];
    $scope.fields = [];
    $scope.persoana = {};


    $scope.person = {};
    $scope.editPerson = {};



    $http.get(url).then(function successCallback(response) {

        $scope.persoane = response.data;
        $scope.fields = Object.keys(response.data[0]);

        console.log($scope.persoane);
        //console.log($scope.fields);

    });


    $scope.addPersoana = function(persoana) {
        persoana.id = parseInt(persoana.id);
        console.log(persoana.id);
        $http({
            method: 'POST',
          //  url: url,
            url: url+'/' + id +'/' + name +'/' + age,
            data: {}  // persoana
        }).then(function successCallback(response) {
            console.log(response);
            $scope.persoane.push(persoana);
            // done.
        }, function errorCallback(response) {
            console.log(response);
        });
    };


    $scope.deletePersoana = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.persoane = $scope.persoane.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdatePerson = function(person) {
        $scope.editPerson = person;
    };


    $scope.updatePerson = function() {
        $http({
            method: 'PUT',
            url: url+'/' + id,
            data: $scope.editPerson
        }).then(function successCallback(response) {
            $scope.editPerson = {};
            console.log(response);
            $scope.persoane.push($scope.editPerson);
            // done.
        }, function errorCallback(response) {
            $scope.editPerson = {};
            console.log(response);
        });
    };

}]);

app.controller('FilmController', ['$scope', '$http', function ($scope, $http) {

    var url = 'http://localhost:8080/film';

    $scope.filme = [];
    $scope.fields = [];
    $scope.filme = {};


    $scope.film = {};
    $scope.editFilm = {};



    $http.get(url).then(function successCallback(response) {

        $scope.filme = response.data;
        $scope.fields = Object.keys(response.data[0]);

        console.log($scope.filme);
        //console.log($scope.fields);

    });


    $scope.addFilm = function(film) {
        film.id = parseInt(film.id);
        console.log(film.id);
        $http({
            method: 'POST',
            url: url+'/' + id +'/' + denumire +'/' + rating,
            data: film
        }).then(function successCallback(response) {
            console.log(response);
            $scope.filme.push(film);
            // done.
        }, function errorCallback(response) {
            console.log(response);
        });
    };


    $scope.deleteFilm = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.filme = $scope.filme.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdateFilm = function(film) {
        $scope.editFilm = film;
    };


    $scope.updateFilm = function() {
        $http({
            method: 'PUT',
            url: url+ '/' + id,
            data: $scope.editFilm
        }).then(function successCallback(response) {
            $scope.editFilm = {};
            console.log(response);
            $scope.filme.push($scope.editFilm);
            // done.
        }, function errorCallback(response) {
            $scope.editFilm = {};
            console.log(response);
        });
    };

}]);


app.controller('ComputerController', ['$scope', '$http', function ($scope, $http) {

    var url = 'http://localhost:8080/computer';

    $scope.computers = [];
    $scope.fields = [];
    $scope.computers = {};


    $scope.computer = {};
    $scope.editComputer = {};



    $http.get(url).then(function successCallback(response) {

        $scope.computers = response.data;
        $scope.fields = Object.keys(response.data[0]);

        console.log($scope.computers);
        //console.log($scope.fields);

    });


    $scope.addComputer = function(computer) {
        computer.id = parseInt(computer.id);
        console.log(computer.id);
        $http({
            method: 'POST',
            url: url+'/' + id +'/' + brand +'/' + model,
            data: computer
        }).then(function successCallback(response) {
            console.log(response);
            $scope.computers.push(computer);
            // done.
        }, function errorCallback(response) {
            console.log(response);
        });
    };


    $scope.deleteComputer = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.computers = $scope.computers.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdateComputer = function(computer) {
        $scope.editComputer = computer;
    };


    $scope.updateComputer = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editComputer
        }).then(function successCallback(response) {
            $scope.editComputer = {};
            console.log(response);
            $scope.computers.push($scope.editComputer);
            // done.
        }, function errorCallback(response) {
            $scope.editComputer = {};
            console.log(response);
        });
    };

}]);

app.controller('FilmController', ['$scope', '$http', function ($scope, $http) {

    var url = 'http://localhost:8080/film';

    $scope.filme = [];
    $scope.fields = [];
    $scope.filme = {};


    $scope.film = {};
    $scope.editFilm = {};



    $http.get(url).then(function successCallback(response) {

        $scope.filme = response.data;
        $scope.fields = Object.keys(response.data[0]);

        console.log($scope.filme);
        //console.log($scope.fields);

    });


    $scope.addFilm = function(film) {
        film.id = parseInt(film.id);
        console.log(film.id);
        $http({
            method: 'POST',
            url: url,
            data: film
        }).then(function successCallback(response) {
            console.log(response);
            $scope.filme.push(film);
            // done.
        }, function errorCallback(response) {
            console.log(response);
        });
    };


    $scope.deleteFilm = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.filme = $scope.filme.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdateFilm = function(film) {
        $scope.editFilm = filme;
    };


    $scope.updateFilm = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editFilm
        }).then(function successCallback(response) {
            $scope.editFilm = {};
            console.log(response);
            $scope.filme.push($scope.editFilm);
            // done.
        }, function errorCallback(response) {
            $scope.editFilm = {};
            console.log(response);
        });
    };

}]);


app.controller('ProdusController', ['$scope', '$http', function ($scope, $http) {

    var url = 'http://localhost:8080/produs';

    $scope.produse = [];
    $scope.fields = [];
    $scope.produse = {};


    $scope.produs = {};
    $scope.editProdus = {};



    $http.get(url).then(function successCallback(response) {

        $scope.produse = response.data;
        $scope.fields = Object.keys(response.data[0]);

        console.log($scope.produse);
        //console.log($scope.fields);

    });


    $scope.addProdus = function(produs) {
        produs.id = parseInt(produs.id);
        console.log(produs.id);
        $http({
            method: 'POST',
              url: url+'/' + id +'/' + denumire +'/' + furnizor,
            data: produs
        }).then(function successCallback(response) {
            console.log(response);
            $scope.produse.push(produs);
            // done.
        }, function errorCallback(response) {
            console.log(response);
        });
    };


    $scope.deleteProdus = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.produse = $scope.produse.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdateProdus = function(produs) {
        $scope.editProdus = produs;
    };


    $scope.updateProdus = function() {
        $http({
            method: 'PUT',
            url: url+ '/' + id,
            data: $scope.editProdus
        }).then(function successCallback(response) {
            $scope.editProdus = {};
            console.log(response);
            $scope.produse.push($scope.editPrpdis);
            // done.
        }, function errorCallback(response) {
            $scope.editProdus = {};
            console.log(response);
        });
    };

}]);
