/*
*  cofig for ui.router
*/
"use strict"
tempApp.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/default");
    $stateProvider
    .state("default",{
        url:"/default",
        templateUrl:"views/default.html",
        controller:"defaultCtrl",
        controllerAs:"default",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/default.js");
            }]
        } 
    })
    .state("uibootstrap",{
        url:"/uibootstrap",
        templateUrl:"views/ui-bootstrap.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("ui.bootstrap");
            }]
        } 
    })
    .state("ngtable",{
        url:"/ngtable",
        templateUrl:"views/ng-table.html",
        controller:"ngTableCtrl",
        controllerAs:"ngtable",
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
        templateUrl:"views/angular-tree-control.html",
        controller:"ngTreeCtrl",
        controllerAs:"ngtree",
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
