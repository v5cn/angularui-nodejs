/**
 * Created by ZYW on 2014/8/11.
 */

var index = angular.module('index',['ui.router','ui.bootstrap','an-controllers','an-services','ngResource']);

index.config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/index');

    $stateProvider.state('index',{
        url:'',
        views:{
            "navbar":{templateUrl:'./navbar'},
            "main":{templateUrl:'./main'}
        }
    }).state('login',{
        url:'/login',
        views:{

        }
    });
});