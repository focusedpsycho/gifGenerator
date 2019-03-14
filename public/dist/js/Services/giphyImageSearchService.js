angular.module('emotionGIFGenerator')
.service('giphyImageSearchService',['$q','$http','config', function($q,$http,config)
{   
    
       this.getGIFsByCategory=function(category)
  {  
     const deferred = $q.defer();
    
     const gifUrls = [];


       $http.get(
           config.giphyBaseUrl,
           {
               params: {
                   'q': category,
                   'api_key': 'CpnjeLOGKnDfxJFh9zRolOJ8utKnpkOG'
               }
           }
       ).then(function success(response)
       {

           _.forEach(response.data.data, function(gifResponseObject){
            //    console.log(gifResponseObject);
               gifUrls.push(gifResponseObject.images.original.url);
           })
           deferred.resolve(gifUrls);
       }, function error(error)
       { 
          deferred.resolve(error);

       })

            
      return deferred.promise;  

}


}]);