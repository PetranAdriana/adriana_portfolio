if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometInstantGamesPlayerRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6128055357223099"}),null);
__d("CometInstantGamesPlayerRootQuery$Parameters",["CometInstantGamesPlayerRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometInstantGamesPlayerRootQuery_facebookRelayOperation"),metadata:{},name:"CometInstantGamesPlayerRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometInstantGamesPlayerRHCQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5244976028881965"}),null);
__d("FeaturedGame.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("qex")._("149")===!0}};g["default"]=a}),98);
__d("CometInstantGamesPlayerRHCQuery$Parameters",["CometInstantGamesPlayerRHCQuery_facebookRelayOperation","FeaturedGame.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometInstantGamesPlayerRHCQuery_facebookRelayOperation"),metadata:{},name:"CometInstantGamesPlayerRHCQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__FeaturedGamerelayprovider:b("FeaturedGame.relayprovider")}}};e.exports=a}),null);
__d("InstantGameEnvironmentType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({STANDARD:"standard",COPLAY:"coplay",CANVAS:"canvas",VIDEO_PLUGIN:"video_plugin",LIVE_PRODUCER_PLUGIN:"live_producer_plugin"});c=a;f["default"]=c}),66);
__d("InstantGameGamePlayerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={clientAppID:null,environmentType:"standard",interactivesCommentsChannelID:"",isInteractivesCommentsInSidepane:!1,isScreenshotProviderRegistered:!1,sessionID:"",setInteractivesCommentsChannelID:function(a){},setIsInteractivesCommentsInSidepane:function(a){},setIsScreenshotProviderRegistered:function(a){},setShouldInteractivesCommentsToggleShow:function(a){},shouldInteractivesCommentsToggleShow:!1,tournamentPostID:null};c=a.createContext(b);g["default"]=c}),98);
__d("InstantApplicationContextTokenInputCreator.entrypointutils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=null;switch(c){case"THREAD":d={thread_id:b};break;case"STORY":d={story_token:b};break;case"GROUP":d={group_id:b};break;case"LINK":d={link_fragment:b};break;default:d=Object.freeze({});break}return{app_id:a,context_source_id:b,key:d}}f.getTokenInput=a}),66);
__d("InstantGamesPlayerUtils",["cx","CSS","Env"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return c("Env").isCometOnMobile===!0}function b(){document.body&&d("CSS").addClass(document.body,"_4png")}function e(){document.body&&d("CSS").removeClass(document.body,"_4png")}f="containerWrapper";g.isCometOnMobile=a;g.lockPlayerScrolling=b;g.unlockPlayerScrolling=e;g.containerWrapperId=f}),98);
__d("InstantGamesTrackingData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.getEcosystem=function(){return this.$1};b.getSurface=function(){return this.$2};b.getFeature=function(){return this.$3};b.serialize=function(){return this.$1+"~"+this.$2+"~"+this.$3};return a}();f["default"]=a}),66);
__d("CometGamingLeftRailSectionPlaceholder.react",["BaseGlimmer.react","CometErrorBoundary.react","CometListCellGlimmer.react","CometPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children;a=a.numberOfItems;return h.jsx(c("CometErrorBoundary.react"),{children:h.jsx(c("CometPlaceholder.react"),{fallback:h.jsxs(h.Fragment,{children:[h.jsx(c("BaseGlimmer.react"),{className:"pnicyljo dhix69tm bi6gxh9e rgmg9uty",index:0}),h.jsx(c("CometListCellGlimmer.react"),{imageStyle:"circle",numberOfItems:a})]}),children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("InstantGameEnvironmentType.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["CANVAS","COPLAY","LIVE_PRODUCER_PLUGIN","STANDARD","VIDEO_PLUGIN"]);c=a;f["default"]=c}),66);
__d("InstantGameEnvironmentTypeUtils.facebook",["$InternalEnumUtils","InstantGameEnvironmentType"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("InstantGameEnvironmentType"));b=d("$InternalEnumUtils").createFromJSEnum(c("InstantGameEnvironmentType"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("InstantGamesPlayer.entrypointutils",["gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";var h=["276641894055477","5377936592235218"];function a(a){return!h.includes(String(a))}function b(a,b){return b&&a!=="CANVAS"&&c("gkx")("4478")}function d(a){return a&&c("qex")._("453")===!0}g.HORIZON_2D_APP_IDS=h;g.getHasRHC=a;g.getHasCommunity=b;g.getHasRHCTournaments=d}),98);
__d("CometInstantGamesPlayerRoot.entrypoint",["CometInstantGamesPlayerRHCQuery$Parameters","CometInstantGamesPlayerRootQuery$Parameters","InstantApplicationContextTokenInputCreator.entrypointutils","InstantGameEnvironmentTypeUtils.facebook","InstantGamesPlayer.entrypointutils","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c;c=(c=d("InstantGameEnvironmentTypeUtils.facebook").fromJSEnum(a.routeProps.environmentType))!=null?c:"STANDARD";var e=d("InstantGamesPlayer.entrypointutils").getHasRHC(a.routeProps.appID);return{extraProps:babelHelpers["extends"]({},a.routeParams,{hasRHC:e}),queries:{instantGamesPlayerRHCQuery:{options:{},parameters:b("CometInstantGamesPlayerRHCQuery$Parameters"),variables:{app_id:a.routeProps.appID,has_community:d("InstantGamesPlayer.entrypointutils").getHasCommunity(c,e),has_rhc:e,has_rhc_tournaments:d("InstantGamesPlayer.entrypointutils").getHasRHCTournaments(e),is_canvas_on_comet:e&&c==="CANVAS",scale:d("WebPixelRatio").get()}},instantGamesPlayerRootQuery:{options:{},parameters:b("CometInstantGamesPlayerRootQuery$Parameters"),variables:{app_id:a.routeProps.appID,automated_input_config_name:a.routeParams.automated_input_config_name,cloud_binary_id:a.routeParams.cloud_binary_id,cloud_host_override_cluster:a.routeParams.cloud_host_override_cluster,cloud_host_override_host:a.routeParams.cloud_host_override_host,cloud_host_override_pop:a.routeParams.cloud_host_override_pop,cloud_host_override_port:a.routeParams.cloud_host_override_port,cloud_host_override_site_key:a.routeParams.cloud_host_override_site_key,context_source_id:a.routeParams.context_source_id,entry_point_video_id:a.routeParams.entrypoint_video_id,environment_type:c,game_id:a.routeProps.appID,is_canvas_on_comet:c==="CANVAS",is_comet_on_mobile:a.routeProps.isCometOnMobile,ota_update:a.routeParams.ota_update,payload:a.routeParams.payload,scale:d("WebPixelRatio").get(),session_id:(e=a.routeParams.session_id)!=null?e:(c=a.timeSpentMetaData)==null?void 0:(e=c.session_ids)==null?void 0:e.cg_session_id,show_top_bar:!a.routeProps.hideTopBar,source:a.routeProps.source,token_input:d("InstantApplicationContextTokenInputCreator.entrypointutils").getTokenInput(a.routeProps.appID,a.routeParams.context_source_id,(c=a.routeParams.context_type)!=null?c:"GENERIC")}}}}},root:c("JSResourceForInteraction")("CometInstantGamesPlayerRoot.react").__setRef("CometInstantGamesPlayerRoot.entrypoint")};g["default"]=a}),98);
__d("InstantGamesWebHubEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743697");c=b("FalcoLoggerInternal").create("instant_games_web_hub_events",a);e.exports=c}),null);
__d("useInstantGamesWebHubImpressionLogging",["InstantGamesWebHubEventsFalcoEvent","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("useSinglePartialViewImpression")({onImpressionStart:function(){var b=babelHelpers["extends"]({},a,{event:"impression"});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return b})}}),d=function(b){var d=babelHelpers["extends"]({},a,b,{event:"click"});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return d})};return{impressionRef:b,logClick:d}}g["default"]=a}),98);
__d("XCometInstantGamesHubControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/",Object.freeze({sort_type:"recommended",category:400}),void 0);b=a;g["default"]=b}),98);
__d("XCometInstantGamesHubPlayControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/{game_or_link}/{?link_fragment}/",Object.freeze({source:"www_unknown",skip_check:!1,prefer_close:!1,ota_update:!1}),void 0);b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("CometSSRViewportHints",[],(function(a,b,c,d,e,f){"use strict";e={max:function(a,b){return a<=b},min:function(a,b){return a>=b}};var g=null,h=null,i=[];function a(a){return a==="width"?g:h}function b(a){g=a.width_px,h=a.height_px}function c(a,b,c,d){var e=i.findIndex(function(b){return b.dimension===a&&b.operation===c&&b.result===d});if(e===-1)i.push({dimension:a,numPixels:b,operation:c,result:d});else{var f=c==="min"&&d===!0||c==="max"&&d===!1,g=i[e].numPixels;i[e].numPixels=f?Math.max(g,b):Math.min(g,b)}}function d(){i.length=0}f.check=e;f.useMatchViewportResults=i;f.getDimension=a;f.setDimensions=b;f.addUseMatchViewportResult=c;f.clearUseMatchViewportResults=d}),66);
__d("useMatchViewport",["CometSSRViewportHints","ExecutionEnvironment","react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(a,b,e){var f=h(function(){if(!d("ExecutionEnvironment").canUseDOM){var c=d("CometSSRViewportHints").getDimension(b);return c!=null?d("CometSSRViewportHints").check[a](c,e):!1}return!!window.matchMedia&&window.matchMedia(i(a,b,e)).matches}),g=f[0],j=f[1];d("ExecutionEnvironment").canUseDOM||d("CometSSRViewportHints").addUseMatchViewportResult(b,e,a,g);c("useLayoutEffect_SAFE_FOR_SSR")(function(){if(!window.matchMedia)return;var c=i(a,b,e),d=window.matchMedia(c),f=function(a){return j(a.matches)};d.addListener(f);return function(){return d.removeListener(f)}},[a,b,e]);return g}function i(a,b,c){return"("+a+"-"+b+": "+c+"px)"}g["default"]=a}),98);
__d("useProfileCometIsCenteredLayout",["CometLeftRailLayoutContext","CometRouteRenderType","react","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("CometLeftRailLayoutContext")),b=d("CometRouteRenderType").useIsHosted();a=a||b;b=a?1259:899;return c("useMatchViewport")("max","width",b)}g["default"]=a}),98);
__d("CometSSRBtoaPolyfill",[],(function(a,b,c,d,e,f){"use strict";var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function a(a){a=String(a);var b=a.length%3,c,d,e,f="",h=0;for(;h<a.length;){c=a.charCodeAt(h++);d=a.charCodeAt(h++);e=a.charCodeAt(h++);if(c>255||d>255||e>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");c=c<<16|d<<8|e;f+=g.charAt(c>>18&63)+g.charAt(c>>12&63)+g.charAt(c>>6&63)+g.charAt(c&63)}return b?f.slice(0,b-3)+"===".substring(b):f}f["default"]=a}),66);
__d("CometSSRMarkupMode",[],(function(a,b,c,d,e,f){"use strict";var g="ssr";function a(a){g=a}function b(){return g}f.setSSRMarkupMode=a;f.getSSRMarkupMode=b}),66);
__d("CometSSRDOMPolyfill",["CometSSRBtoaPolyfill","CometSSRMarkupMode","CometSSRViewportHints","Env"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){function a(a){var b=this;this.$1=a.href;Object.keys(a).forEach(function(c){Object.defineProperty(b,c,{value:a[c],writable:!1})})}var b=a.prototype;b.toString=function(){return this.$1};b.valueOf=function(){return this.$1};return a}();function a(a){d("CometSSRViewportHints").setDimensions(a)}function b(a){window.document=window.document||{},(window.location==null||Object.prototype.toString.call(window.location)==="[object Object]")&&(window.location=new h(a)),window.document.location=window.location}function i(a){window.__comet_ssr_is_server_env_DO_NOT_USE=!0,window.__flight_execution_mode_DO_NOT_USE=a}function j(){window.atob=window.__atob,window.btoa=c("CometSSRBtoaPolyfill")}function e(a){switch(a){case"adsmanager":l();break;case"flight":k("flight");break;case"email":k("ssr");d("CometSSRMarkupMode").setSSRMarkupMode("markup_only");break;default:k("ssr");break}}function k(a){i(a),j()}function l(){k("ssr"),window.Event=function(){},window.navigator={},window.URL=n(),window.FormData=function(){},window.document=window.document||{},m(window.document),Object.defineProperty(window.document,"cookie",{value:""})}function m(a){a.getElementById=function(){return null},a.querySelector=function(){return null},a.querySelectorAll=function(){return[]}}function f(a){for(var b in a)c("Env")[b]=a[b]}function n(){return function(){this.searchParams={get:function(){}}}}g.setViewportDimensionsGuess=a;g.setWindowLocation=b;g.defineGlobals=e;g.flushJSEnv=f}),98);
__d("CometSSRServerJSPayloadUtils",["ErrorGuard","HasteSupportData","ServerJS"],(function(a,b,c,d,e,f,g){"use strict";var h="";function a(a){d("HasteSupportData").handle(a.hsdp);c("ErrorGuard").skipGuardGlobal(!0);new(c("ServerJS"))().handle(a.jsmods);return h}function e(c,d,e){var a;typeof c==="string"?a=b.call(null,c):a=c;c=a[d].apply(a,e);c===void 0&&(c="");h=JSON.stringify(c)}g.handlePayload=a;g.invokeAndCaptureReturnValue=e}),98);/*FB_PKG_DELIM*/
__d("CometLayoutSidePaneAndMainContentResponsiveContainer.react",["BaseContainerQueryElement.react","BaseHeadingContext","BaseStickyHeader.react","BaseView.react","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","react","stylex","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=360,k={containerResponsive:{display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",minHeight:"dp1hu0rb",position:"l9j0dhe7","@media (max-width: 899px)":{flexDirection:"psu0lv52",zIndex:"gpq6b651"}},contentArea:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",minHeight:"dp1hu0rb",minWidth:"hpfvmrgz",position:"l9j0dhe7",zIndex:"du4w35lb"},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)":{display:"hlyrhctz"}},leftRailResponsive:{display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"dp1hu0rb",overflowAnchor:"rek2kq2y",width:"o36gj0jk",zIndex:"tkr6xdv7"},mainContent:{display:"j83agx80",flexGrow:"buofh1pr",minHeight:"dp1hu0rb","@media (min-width: 900px)":{width:"kh4zg2hq"}},responsiveHeader:{display:"a8c37x1j",zIndex:"tkr6xdv7"}};function a(a){var b=a.leftRailContent,d=a.leftRailHeading,e=a.leftRailPrimary;e=e===void 0?!1:e;var f=a.mainContent,g=a.mainContentHeading;a=a.testid;a=i(c("BaseHeadingContext"));a=h.jsx("div",{className:c("stylex")(k.contentArea,e===!0&&k.contentAreaWithLeftRailPrimary),children:h.jsx(c("CometRouterFocusRegion.react"),{children:h.jsx(c("CometLeftRailLayoutContext").Provider,{value:!0,children:h.jsx(c("BaseHeadingContext").Provider,{value:a+1,children:f})})})});f=c("useMatchViewport")("max","width",899);g=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":g,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:"calc(100% - "+j+"px)",role:"main",xstyle:k.mainContent,children:a});return h.jsx(c("BaseView.react"),{testid:void 0,xstyle:k.containerResponsive,children:h.jsxs(c("CometLeftRailPrimaryContext").Provider,{value:e,children:[f?h.jsx(c("BaseStickyHeader.react"),{xstyle:k.responsiveHeader,children:h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":d,breakpoint:900,"data-testid":void 0,inverseToContainer:!0,maxWidth:"100%",minWidth:j,role:"navigation",children:b})}):h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":d,breakpoint:900,"data-testid":void 0,inverseToContainer:!0,maxWidth:j,minWidth:j,role:"navigation",xstyle:k.leftRailResponsive,children:b}),g]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLayoutSidePaneResponsive.react",["BaseGlimmer.react","CometLeftRailComponent.react","CometPivotLinkTabs.react","CometResponsiveTopNav.react","react","stylex","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmerContainer:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},left:{display:"j83agx80",minWidth:"dhp61c6y"},top:{backgroundColor:"cddn0xzi",borderBottom:"linmgsc8",display:"j83agx80",paddingTop:"jktsbyx5",paddingBottom:"osnr6wyh",zIndex:"tkr6xdv7"},ufiGlimmer:{borderTopStartRadius:"dwerhba3",borderTopEndRadius:"kgjeooe1",borderBottomEndRadius:"kxcb68kb",borderBottomStartRadius:"mwvzfrdb",height:"bsodd3zb",marginTop:"tr9rh885",marginEnd:"wkznzc2l",marginBottom:"sjgh65i0",marginStart:"dhix69tm",width:"pnicyljo"}};function a(a){var b=a.footer,d=a.header,e=a.primaryNav,f=a.search,g=a.secondaryNav,j=a.stickyNav,k=a.topNav;a=a.topTabs;var l=c("useMatchViewport")("max","width",899);if(l){l=(f==null?void 0:f.topSearch)!=null||a!=null?h.jsx(c("CometResponsiveTopNav.react"),{action:f!=null?f.topSearch:void 0,tabs:a!=null?h.jsx(c("CometPivotLinkTabs.react"),{tabs:a}):void 0,xstyle:i.top}):null;return(a=k)!=null?a:l}return h.jsx(c("CometLeftRailComponent.react"),{footer:b,header:d,primaryNav:e,search:f!=null?f.leftSearch:null,secondaryNav:g,stickyNav:j,xstyle:i.left})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.header;a=a.primaryNavPlaceholder;return h.jsxs(h.Fragment,{children:[h.jsx(c("CometLeftRailComponent.react"),{header:b,primaryNav:a,xstyle:i.left}),h.jsxs("div",{className:[c("stylex")(i.top),c("stylex")(i.glimmerContainer)],children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.ufiGlimmer),index:1}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.ufiGlimmer),index:2}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.ufiGlimmer),index:3})]})]})}b.displayName=b.name+" [from "+f.id+"]";g.CometLayoutSidePaneResponsive=a;g.CometLayoutSidePaneResponsiveLoading=b}),98);
__d("XCometInstantGamesMyGamesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/games/instantgames/mygames/",Object.freeze({category:400,sort_type:"recommended"}),void 0);b=a;g["default"]=b}),98);
__d("CometGamingLeftRailSettingsMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4583488961768131"}),null);
__d("GroupsCometNextGenIALeftRailGroupSwitcherPopoverWrapperQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4570578343058706"}),null);