
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
<<<<<<< HEAD
var __uniConfig = {"pages":["pages/index/index","pages/sort/sort","pages/shopcar/shopcar","pages/mine/mine","pages/detal/detal","components/button/button","components/test/test","components/login/login","components/register/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"list":[{"pagePath":"pages/index/index","iconPath":"static/img/tabbar/home.svg","text":"主页","selectedIconPath":"static/img/tabbar/home_active.svg"},{"pagePath":"pages/sort/sort","iconPath":"static/img/tabbar/type.svg","selectedIconPath":"static/img/tabbar/type_active.svg","text":"分类"},{"pagePath":"pages/shopcar/shopcar","iconPath":"static/img/tabbar/shopcar.svg","selectedIconPath":"static/img/tabbar/shopcar_active.svg","text":"购物车"},{"pagePath":"pages/mine/mine","iconPath":"static/img/tabbar/profile.svg","text":"我的","selectedIconPath":"static/img/tabbar/profile_active.svg"}],"color":"#7A7E83","selectedColor":"#3cc51f","fontSize":"12px"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"app","compilerVersion":"3.4.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"主页"}},{"path":"/pages/sort/sort","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false}},{"path":"/pages/shopcar/shopcar","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","navigationBarBackgroundColor":"#eeefff","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#353535","navigationBarTextStyle":"white","titleNView":{"bounce":"none","autoBackButton":true,"homeButton":true,"buttons":[{"type":"back","float":"left"},{"type":"home","float":"right"}]}}},{"path":"/pages/detal/detal","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}},{"path":"/components/button/button","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/test/test","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/login/login","meta":{},"window":{"titleNView":false}},{"path":"/components/register/register","meta":{},"window":{"navigationBarTitleText":"register","enablePullDownRefresh":false}}];
=======
var __uniConfig = {"pages":["pages/index/index","pages/sort/sort","pages/shopcar/shopcar","pages/mine/mine","pages/detal/detal","components/button/button","components/test/test"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"必要商城","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"list":[{"pagePath":"pages/index/index","iconPath":"static/img/tabbar/home.svg","text":"主页","selectedIconPath":"static/img/tabbar/home_active.svg"},{"pagePath":"pages/sort/sort","iconPath":"static/img/tabbar/type.svg","selectedIconPath":"static/img/tabbar/type_active.svg","text":"分类"},{"pagePath":"pages/shopcar/shopcar","iconPath":"static/img/tabbar/shopcar.svg","selectedIconPath":"static/img/tabbar/shopcar_active.svg","text":"购物车"},{"pagePath":"pages/mine/mine","iconPath":"static/img/tabbar/profile.svg","text":"我的","selectedIconPath":"static/img/tabbar/profile_active.svg"}],"color":"#7A7E83","selectedColor":"#3cc51f","fontSize":"12px"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"app","compilerVersion":"3.4.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"主页"}},{"path":"/pages/sort/sort","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false}},{"path":"/pages/shopcar/shopcar","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","navigationBarBackgroundColor":"#eeefff","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#353535","navigationBarTextStyle":"white","titleNView":{"bounce":"none","buttons":[{"type":"back","float":"left","onclick":"myback","fontSize":"20px","fontWeight":"bold"},{"text":"☰","float":"right","fontSize":"20px","onclick":"mybar"}]}}},{"path":"/pages/detal/detal","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}},{"path":"/components/button/button","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/test/test","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
>>>>>>> 5e4b85945f15a0b8f5e93886973307d3b6fd0ffe
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
