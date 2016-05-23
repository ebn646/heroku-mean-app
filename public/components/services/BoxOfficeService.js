angular.module('movieSearchApp')
    .factory('BoxOfficeService', function ($log, $resource,$http) {
    var url = '//api.themoviedb.org/3/:method/:what';
    var apikey = 'a47daf25c6cd4e3f68c4ebee27270542';

    return $resource(url,
        {api_key: apikey, callback: 'JSON_CALLBACK'},
        {get: {method: 'JSONP', requestType: 'json'}}
    );
}).factory('CarouselService', function($resource){
    return $resource('/api/movies/misc', {}, {

    });
})
