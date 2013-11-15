// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

//return number in [start,end)
function getRand(start, end) {
  return Math.floor((Math.random()*(end-start)+start));
}

//0 null
//1 domob
//2 yjf
//3 baidu
//4 adwo
//5 guomob
//6 admob
function getAdType(ratioConfig) {
  var rand = getRand(0,100);
  for(var i = 0; i < ratioConfig.length; ++i) {
    if(rand < ratioConfig[i][1]) {
      return ratioConfig[i][0];
    }
  }
  return 0;
}

var intlRatioConfig = [[2,20],[3,40],[4,60],[5,80],[6,100]];
var wallRatioConfig = [[1,50],[2,100]];

AV.Cloud.define("getInterstitialAdType", function(request, response) {
  var adType = getAdType(intlRatioConfig);
  response.success(adType);
});

AV.Cloud.define("getWallAdType", function(request, response) {
  var adType = getAdType(wallRatioConfig);
  response.success(adType);
});

