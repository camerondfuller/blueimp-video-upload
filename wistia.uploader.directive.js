'use strict';

(function(){

   angular.module('wistia.uploader', [])

   .directive('wistia.uploader', [Uploader]);

   function Uploader() {
      return {
         restrict: 'E',
         templateUrl:'templates/wistia-uploader-directive.html',
         link: function(scope, element, attrs) {
            $(element)
            .find('#videoUploader')
            .fileupload({
               progressall:function(e, data) {
                  var progress = parseInt(data.loaded /data.total *100, 10);
                  $('.progress-bar').css({
                     width: progress + '%'
                  });
               }
            }
         });
      }
   };
}
})();
