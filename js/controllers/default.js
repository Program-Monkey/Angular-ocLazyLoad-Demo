/*
*  defaultCtrl
*/
(function(){
"use strict"
tempApp.controller("defaultCtrl",defaultCtrlFn);
function defaultCtrlFn(){
    var vm = this;
    vm.value = "Hello World";
};
}());