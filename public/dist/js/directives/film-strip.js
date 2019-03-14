angular.module('emotionGIFGenerator').directive('filmStrip',
    function ($window,giphyImageSearchService) {
        return {
            restrict: "E",
            scope: {
                category: '='
            },
            templateUrl: 'dist/views/carousel.html',
            link: function (scope, elem, attrs) {
                scope.randomId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
                giphyImageSearchService.getGIFsByCategory(scope.category)
                .then(function(resp){
                 scope.images = resp;
                 divideImagesForScreen();

                 angular.element($window).bind('resize',function(){
                     divideImagesForScreen(true);
                 });
                })

                function divideImagesForScreen(runDigest){
                    var screenWidth = $window.innerWidth;
                    let chunksize = 6;

                    if (screenWidth < 767) {
                        chunksize =3;
                    } else if((screenWidth >= 768) && (screenWidth<= 991) ){
                        chunksize = 4;
                    }
           
                    scope.imageChunks = _.chunk(scope.images, chunksize);
                    if(runDigest){
                        scope.$digest();
                    }
                }

            }
        };
    })