// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

function getRand() {
  return Math.floor((Math.random()*100)+1);
}

AV.Cloud.define("getAdType", function(request, response) {
  var DOMOB_YJF_RATIO = 50;
  var rand = getRand();
  var adType = 1;
  if(rand < DOMOB_YJF_RATIO) {
    adType = 1;
  } else {
    adType = 2;
  }
  response.success(adType);
});

