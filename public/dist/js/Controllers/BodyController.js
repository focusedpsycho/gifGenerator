angular.module('emotionGIFGenerator')
.controller('BodyController',['$scope','$window', 'categories',
  function($scope,$window,categories)
{

    var BodyCtrl=this;
    console.log(categories);
    BodyCtrl.categories = categories.allCategories;
    BodyCtrl.limit = categories.limit;

    BodyCtrl.init = function(){
       BodyCtrl.selectedCategories = BodyCtrl.categories.splice(0, BodyCtrl.limit);
    }

    BodyCtrl.expandCategories = function(){
      console.log('called');
      const startingPoint = BodyCtrl.selectedCategories.length;
      const endingPoint = Math.min(BodyCtrl.categories.length, 
        BodyCtrl.selectedCategories.length+ BodyCtrl.limit);
       for(let i=startingPoint;i< endingPoint ;i++){
            BodyCtrl.selectedCategories.push(BodyCtrl.categories[i]);
       }
    }

    BodyCtrl.init();

    angular.element($window).bind("scroll", function() {
      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body, html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      windowBottom = windowHeight + window.pageYOffset;
      if (Math.ceil(windowBottom) >= docHeight) {
          $scope.$apply(BodyCtrl.expandCategories());
      }
  });


    



}])