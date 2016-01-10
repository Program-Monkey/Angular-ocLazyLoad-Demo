/*
*  cofig for ui.router
*/
"use strict"
tempApp.config(["$stateProvider","$urlRouterProvider","$locationProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise("/default");
    $stateProvider
    .state("default",{
        url:"/default",
        views:{
            "":{
                templateUrl:"views/default.html",
                controller:"defaultCtrl",
                controllerAs:"default"
            }
        },
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/default.js");
            }]
        } 
    })
    .state("uibootstrap",{
        url:"/uibootstrap",
        views:{
            "":{
                templateUrl:"views/ui-bootstrap.html"
            }
        },
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("ui.bootstrap");
            }]
        } 
    })
    .state("ngtable",{
        url:"/ngtable",
        views:{
            "":{
                templateUrl:"views/ng-table.html",
                controller:"ngTableCtrl",
                controllerAs:"ngtable"
            }
        },
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("ngTable").then(
                    function(){
                        return $ocLazyLoad.load("js/controllers/ng-table.js");
                    }
                );
            }]
        } 
    })
    .state("ngtree",{
        url:"/ngtree",
        views:{
            "":{
                templateUrl:"views/angular-tree-control.html",
                controller:"ngTreeCtrl",
                controllerAs:"ngtree"
            }
        },
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("treeControl").then(
                    function(){
                        return $ocLazyLoad.load("js/controllers/angular-tree-control.js");
                    }
                );
            }]
        } 
    })
};