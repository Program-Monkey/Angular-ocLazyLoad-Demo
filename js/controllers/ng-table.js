/*
*  ngTableCtrl
*/
(function(){
"use strict"
tempApp
.controller("ngTableCtrl",["$location","NgTableParams","$filter",ngTableCtrlFn]);
function ngTableCtrlFn($location,NgTableParams,$filter){
    var vm = this;
    //数据
    var data = [{ name: "Moroni", age: 50 },
                 { name: "Tiancum ", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 },
                 { name: "Tiancum", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 },
                 { name: "Tiancum", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 },
                 { name: "Tiancum", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 }];
    vm.tableParams = new NgTableParams(    // 合并默认的配置和url参数
        angular.extend({
            page: 1,            // 第一页
            count: 10,          // 每页的数据量
           sorting: {
                name: 'asc'     // 默认排序
            }
        },
        $location.search())
        ,{
            total: data.length, // 数据总数
            getData: function ($defer, params) {
                $location.search(params.url()); // 将参数放到url上，实现刷新页面不会跳回第一页和默认配置
                var orderedData = params.sorting ?
                        $filter('orderBy')(data, params.orderBy()) :data;
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        }
    );
};
})();