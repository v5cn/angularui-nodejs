/**
 * Created by ZYW on 2014/8/11.
 */

angular.module('an-controllers',['an-services'])
    .controller('navDropdown',['$scope','navData',function($scope,navData){
        var obj = navData.get(function(data){
            console.log(data);
            $scope.item = obj.navs;
        });
        console.log(obj);
//

        $scope.status = {
            isopen:false
        };
    }]).controller('navDropdown2',['$scope','navData',function($scope,navData){
        navData.success(function(data){
            $scope.item = data.navs;
        });
//        console.log(obj);
//
//        $scope.item = obj.navs;
        $scope.status = {
            isopen:false
        };
    }])
    .controller('indexCarousel',['$scope',function($scope){
        $scope.slides = [];
        for(var i = 0; i<4; i++){
            $scope.slides.push({
                image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                title:"Example headline."+i,
                context:"Note: If you're viewing this page via a "
            });
        }
    }]);