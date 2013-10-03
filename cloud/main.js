// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

function getRand() {
  return Math.floor((Math.random()*100)+1);
}

function getAdType(domobYjfRatio) {
  var rand = getRand();
  var adType = 1;
  if(rand < domobYjfRatio) {
    adType = 1;
  } else {
    adType = 2;
  }
  return adType;
}

AV.Cloud.define("getInterstitialAdType", function(request, response) {
  var DOMOB_YJF_RATIO = 50;
  var adType = getAdType(DOMOB_YJF_RATIO);
  response.success(adType);
});

AV.Cloud.define("getWallAdType", function(request, response) {
  var DOMOB_YJF_RATIO = 50;
  var adType = getAdType(DOMOB_YJF_RATIO);
  response.success(adType);
});

