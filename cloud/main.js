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
//7 wdj
function getAdType(ratioConfig) {
  var rand = getRand(0,100);
  for(var i = 0; i < ratioConfig.length; ++i) {
    if(rand < ratioConfig[i][1]) {
      return ratioConfig[i][0];
    }
  }
  return 0;
}

var intlRatioConfig = [[2,33],[3,66],[4,100],[5,0],[6,0]];
var wallRatioConfig = [[1,100],[2,0]];

AV.Cloud.define("getInterstitialAdType", function(request, response) {
  var adType = getAdType(intlRatioConfig);
  response.success(adType);
});

AV.Cloud.define("getWallAdType", function(request, response) {
  return response.success(2);
  //var date = new Date();
  //if(date.getDate()%2 ==0) {
  //  response.success(1);
  //} else {
  //  response.success(2);
  //}
  //var adType = getAdType(wallRatioConfig);
  //response.success(adType);
});

var androidIntlRatioConfig = [[4,50],[7,50]];
var androidWallRatioConfig = [[1,50],[2,50]];

AV.Cloud.define("getAndroidInterstitialAdType", function(request, response) {
  var adType = getAdType(androidIntlRatioConfig);
  response.success(adType);
});


AV.Cloud.define("getAndroidWallAdType", function(request, response) {
  var adType = getAdType(androidWallRatioConfig);
  response.success(adType);
}
