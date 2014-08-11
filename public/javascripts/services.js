/**
 * Created by ZYW on 2014/8/11.
 */

angular.module('an-services',['ngResource'])
    .factory('navData',['$resource',function($resource){
        return $resource('/navdata');
    }])
    .factory('navData2',['$http',function($http){
        return $http.get('/navdata');
    }]);


