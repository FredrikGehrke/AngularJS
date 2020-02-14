var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/Hem.html",
        controller: "hemController" 
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "aboutController",
        activetab: "about"
    })
    .when("/begagnadebilar", {
        templateUrl: "views/begagnadebilar.html",
        controller: "begagnadebilarController",
        activetab: "begagnadebilar"
    })
})




app.controller("hemController", function($scope) {
    $scope.hem = [
        { title: "Köp din drömbil idag!"},
    ]
})
.controller("aboutController", function($scope) {
    $scope.testamonials = [
        { image: "p-img.png", title: "Köp din drömbil idag!", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
    ]
})


.controller("varabilarController", function($scope) {
    $scope.varabilar = [
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
    ]
})
.controller("begagnadebilarController", function($scope) {
    $scope.pageTitle = "Contact";
})


// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<section class="first-section bg-img1"><header> <nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="navbar-brand logo" href="#"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="#/!">Hem <span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!about">Våra Bilar</a></li><li class="nav-item"><a class="nav-link" href="#!begagnadebilar">Begagnade Bilar</a> </li> <li class="nav-item"><a class="nav-link" href="#!kontakt">Kontakt</a> </li> <li class="nav-item"><a class="nav-link" href="#!omOss">Om Oss</a> </li></ul></div></div><i class="fas fa-search sok-icon"></i></nav></header>'
    }
})
app.directive("appfooter", function() {
    return {
        template: '<footer id="footer"><div class="own-jumbotron7"><div class="row-7 justify-content-center"><div class="col"><div class="seventh-rubrik"><div class="navbar-brand-footer logo" href="#"></div></div><div id="logo-text"><p>Öppetttider:</p><p>Mån-Fre: 10-18</p></div></div><div class="col seventh-p"><p>Leverans</p><p>FAQ</p><p>Returer</p></div><div class="col seventh-p"><p>Pilgatan 2, Västerås</p><p>070 345 67 03</p><p>exoticcars.se</p></div><div class="col seventh-p"><p>Om Oss</p><p>GDPR</p><p>Kontakt</p></div><div class="col seventh-p"><p>Facebook</p><p>Twitter</p><p>Instagram</p></div></div></div> <div id="copyright">&copy; ExoticCars 2020</div> </footer>'
    }
})