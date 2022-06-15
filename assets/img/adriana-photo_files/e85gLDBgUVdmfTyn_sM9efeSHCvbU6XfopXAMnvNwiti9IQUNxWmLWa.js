if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("EventCometUserHostCTAButton_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"userActionBarRenderLocation"}],kind:"Fragment",metadata:null,name:"EventCometUserHostCTAButton_action",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{kind:"RequiredField",field:{alias:"primaryActions",args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},{kind:"Variable",name:"render_location",variableName:"userActionBarRenderLocation"},{kind:"Literal",name:"subsurface_type",value:"PRIMARY_SURFACE"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometActionButton_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],storageKey:null},action:"NONE",path:"primaryActions"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometActionButton_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometActionButton_action",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},action:"THROW",path:"title.text"}],storageKey:null},action:"THROW",path:"title"},{kind:"RequiredField",field:{alias:"primary_icon",args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},action:"THROW",path:"primary_icon"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},action:"THROW",path:"is_active"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometActionButton.react",["CometProgressRingIndeterminate.react","CometRelay","ProfileCometActionButton_action.graphql","TetraButton.react","TintableIconSource","coerceRelayImage","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a,e){var f=a.action,g=a.disabled,j=a.forceIsPrimary;j=j===void 0?!1:j;var k=a.forceIsSecondary;k=k===void 0?!1:k;var l=a.labelIsHidden;l=l===void 0?!1:l;var m=a.onClick,n=a.reduceEmphasisIfPrimary;n=n===void 0?!1:n;a.source;var o=babelHelpers.objectWithoutPropertiesLoose(a,["action","disabled","forceIsPrimary","forceIsSecondary","labelIsHidden","onClick","reduceEmphasisIfPrimary","source"]);a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionButton_action.graphql"),f);f=a.primary_icon;var p=a.title.text,q=a.is_optimistic_update===!0,r=q?i.jsx(c("CometProgressRingIndeterminate.react"),{color:g===!0?"disabled":"dark",size:16}):void 0;q=!q&&(f==null?void 0:f.uri)!=null?new(c("TintableIconSource"))("FB",c("coerceRelayImage")(f),16):void 0;f=j||!k&&a.is_active?"primary":"secondary";return i.jsx("div",{className:l?"":"k4urcfbm",ref:e,children:i.jsx(c("TetraButton.react"),babelHelpers["extends"]({},o,{addOnPrimary:r,disabled:g,icon:q,label:p,labelIsHidden:l,onPress:function(a){o.onPress&&o.onPress(a),m&&m()},reduceEmphasis:f==="primary"&&n,size:"medium",tooltip:l?p:null,type:f}))})}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("EventCometUserHostCTAButton.react",["Actor","CometRelay","EventCometUserHostCTAButton_action.graphql","EventCometViewCTAButton.react","ProfileCometActionButton.react","ProfileCometActionTrigger.react","ProfileCometContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useMemo;function a(a){var e=a.host,f=a.onClick,g=a.source;a=a.url;var k=d("CometRelay").useFragment(h!==void 0?h:h=b("EventCometUserHostCTAButton_action.graphql"),e),l=(e=k==null?void 0:k.id)!=null?e:"",m=d("Actor").useActor()[0];e=j(function(){return{isInViewAs:!1,profileID:l,profileVanity:null,viewerID:m}},[l,m]);if(k==null)return null;return(k==null?void 0:k.primaryActions[0])==null?i.jsx(c("EventCometViewCTAButton.react"),{onClick:f,url:a}):i.jsx(c("ProfileCometContext").Provider,{value:e,children:i.jsx(c("ProfileCometActionTrigger.react"),{action:k==null?void 0:k.primaryActions[0],children:function(a){a.memberModerations;a=babelHelpers.objectWithoutPropertiesLoose(a,["memberModerations"]);return i.jsx(c("ProfileCometActionButton.react"),babelHelpers["extends"]({},a,{action:k.primaryActions[0],forceIsSecondary:!0,labelIsHidden:!1,onClick:f,source:g}))}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometPageFollowButton_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageFollowButton_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"does_viewer_follow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"current_notification_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"newsfeed_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offers_subscription",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_home_notification_subscription_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_video_subscription_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_video_subscription_push_status",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesCometFollowButtonRenderer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesCometFollowButtonRenderer_renderer$normalization",selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"does_viewer_follow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"current_notification_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"newsfeed_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offers_subscription",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_home_notification_subscription_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_video_subscription_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_video_subscription_push_status",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("PagesCometFollowButtonRenderer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometFollowButtonRenderer_renderer",selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPageFollowButton_page"}],storageKey:null}],type:"PagesCometFollowButtonRenderer",abstractKey:null};e.exports=a}),null);
__d("CometPageFollowButton.react",["fbt","ix","CometEntryPointDialogTrigger.react","CometPageFollowButton_page.graphql","CometPageFollowCommitMutation","CometPageFollowDialog.entrypoint","CometRelay","CometTrackingCodeContext","TetraButton.react","emptyFunction","fbicon","react","unrecoverableViolation","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useContext;function a(a){var e,f=a.defaultType;f=f===void 0?"normal":f;var g=a.disabled,m=g===void 0?!1:g;g=a.highlightButton;var n=a.labelIsHidden,o=n===void 0?!1:n;n=a.onFollowClick;var p=n===void 0?c("emptyFunction"):n,q=a.padding;n=a.page$key;a=a.size;var r=a===void 0?"large":a;a=d("CometRelay").useFragment(j!==void 0?j:j=b("CometPageFollowButton_page.graphql"),n);var s=d("CometRelay").useRelayEnvironment(),t=l(c("CometTrackingCodeContext")),u=c("useMinifiedProductAttribution")(),v=a==null?void 0:a.id;if(v==null)throw c("unrecoverableViolation")("The page ID can NOT be null.","pages_consumer_experience_www");n=a==null?void 0:a.video_home_notification_subscription_status;var w=a==null?void 0:a.live_video_subscription_status,x=a==null?void 0:a.live_video_subscription_push_status;if(n==null)throw c("unrecoverableViolation")("The video follow status cannot be null.","pages_consumer_experience_www");e=(e=a==null?void 0:a.does_viewer_follow)!=null?e:!1;var y=f==="normal"!==e||f==="secondary"?"secondary":"primary";y=e&&g===!0?"primary":y;if(!e){f=function(){p(),d("CometPageFollowCommitMutation").pageFollowCommitMutationAction({environment:s,isAdminView:!1,navigationChain:u,pageID:v,tracking:t})};return k.jsx(c("TetraButton.react"),{disabled:m,icon:d("fbicon")._(i("618352"),16),label:h._(/*FBT_CALL*/"Follow"/*FBT_CALL*/),labelIsHidden:o,onPress:f,padding:q,reduceEmphasis:y==="primary",size:r,type:y},"follow")}return k.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometPageFollowDialog.entrypoint"),otherProps:{params:{isAdminView:!1,liveNotifPushSettings:(g=x)!=null?g:"OFF",liveNotifSettings:(e=w)!=null?e:"OFF",newsfeedSetting:a==null?void 0:a.newsfeed_setting,notifSetting:(f=a==null?void 0:a.current_notification_setting)!=null?f:"",offersSetting:(x=a==null?void 0:a.offers_subscription)!=null?x:!1,pageID:v,tracking:t,videoNotifSettings:n}},preloadParams:{pageID:v},children:function(a){return k.jsx(c("TetraButton.react"),{disabled:m,icon:d("fbicon")._(i("602176"),16),label:h._(/*FBT_CALL*/"Following"/*FBT_CALL*/),labelIsHidden:o,onPress:a,padding:q,reduceEmphasis:y==="primary",size:r,type:y},"following")}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometFollowButtonRenderer.react",["CometPageFollowButton.react","CometRelay","PagesCometFollowButtonRenderer_renderer.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.renderer;a=babelHelpers.objectWithoutPropertiesLoose(a,["renderer"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometFollowButtonRenderer_renderer.graphql"),e);return i.jsx(c("CometPageFollowButton.react"),babelHelpers["extends"]({},a,{page$key:e==null?void 0:e.page}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometDeferredDialogTrigger.react",["react","useCometDeferredDialog"],(function(a,b,c,d,e,f,g){"use strict";d("react");var h=d("react").useCallback;function a(a){var b=a.children,d=a.dialogProps,e=a.dialogResource,f=a.fallback,g=a.onHide;a=a.onShow;var i=a===void 0?function(){}:a,j=c("useCometDeferredDialog")(e,f);a=h(function(){j(d,g),i()},[j,d,g,i]);return b(a)}g["default"]=a}),98);
__d("CometProfileSwitchCleanAndLogoutUtils",["Banzai","UserMismatchExpected","WebStorage","goForceFullPageRedirectTo","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("ServiceWorkerLoginAndLogout").__setRef("CometProfileSwitchCleanAndLogoutUtils"),i=c("requireDeferred")("WebStorageMonster").__setRef("CometProfileSwitchCleanAndLogoutUtils");function a(a,b,e){i.onReady(function(e){e.cleanOnLogout(b);e=c("WebStorage").getSessionStorage();e!=null&&(e.setItem("show_profile_switch_toast","1"),e.setItem("previous_profile_id",a));d("UserMismatchExpected").setIsUserMismatchExpected(!0);window.setTimeout(function(){d("UserMismatchExpected").setIsUserMismatchExpected(!1)},6e4)});h.onReady(function(a){a.logout()});c("Banzai").flush();if(e==null)window.location.reload();else try{c("goForceFullPageRedirectTo")(e)}catch(a){window.location.reload()}}g.cleanAndLogoutForProfileSwitch=a}),98);
__d("useCometProfileSwitchWithLogoutMutation",["Actor","CometProfileSwitchCleanAndLogoutUtils","CometRelay","JSResourceForInteraction","promiseDone","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("JSResourceForInteraction")("CometProfileSwitchWithLogoutMutation").__setRef("useCometProfileSwitchWithLogoutMutation");function a(a,b,e,f){f&&f();f=d("Actor").useActor();var g=f[0],j=d("CometRelay").useRelayEnvironment();return h(function(){if(a==null)return;c("promiseDone")(i.load().then(function(c){c=c.switchProfileWithLogout;c(j,{profileId:a},{onCompleted:function(a){a=a==null?void 0:(a=a.profile_switcher_comet_login_with_logout)==null?void 0:a.logout_whitelist;Array.isArray(a)&&d("CometProfileSwitchCleanAndLogoutUtils").cleanAndLogoutForProfileSwitch(g,a,b)},onError:function(a){e&&e(a)}})}))},[j,a,e,b])}g["default"]=a}),98);
__d("useShallowEqualMemo",["shallowEqual","useCustomEqualityMemo"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useCustomEqualityMemo")(a,c("shallowEqual"))}g["default"]=a}),98);
__d("XCometGamingArenaHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/tournaments/",Object.freeze({open_create_tournament_form:!1}),void 0);b=a;g["default"]=b}),98);
__d("XFacebookHelpCenterContentControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/help/{cms_id}/{?cms_title}/",Object.freeze({region_hint:[],maybe_redirect_pol:!0}),void 0);b=a;g["default"]=b}),98);
__d("ShowAllReactWarnings",["react"],(function(a,b,c,d,e,f,g){"use strict";d("react");function a(a){a=a.children;return a}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("GroupsCometJoinGroupButtonRelay_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"source"}],kind:"Fragment",metadata:null,name:"GroupsCometJoinGroupButtonRelay_group",selections:[{args:[{kind:"Variable",name:"source",variableName:"source"}],kind:"FragmentSpread",name:"useGroupsCometJoinActionButton_group"},{args:null,kind:"FragmentSpread",name:"useGroupsCometLeaveActionButton_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometLeaveActionButton_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometLeaveActionButton_group",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["GroupLeaveForumAction"]}],concreteType:null,kind:"LinkedField",name:"leave_action",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"useGroupsCometLeaveActionButton_group_leave_action",fragmentName:"GroupsCometVisitGroupButton_action",fragmentPropName:"action",kind:"ModuleImport"}],type:"GroupLeaveForumAction",abstractKey:null}],storageKey:'leave_action(supported:["GroupLeaveForumAction"])'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometLeaveActionButton",["CometRelay","react","useGroupsCometLeaveActionButton_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.group$key,e=a.onFooter,f=a.onPressJoined,g=a.source;a=a.useShortenedCTA;c=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometLeaveActionButton_group.graphql"),c);c=c==null?void 0:c.leave_action;return c==null?null:i.jsx(d("CometRelay").MatchContainer,{match:c,props:{onFooter:e,onPressJoined:f,source:g,useShortenedCTA:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometJoinGroupButtonRelay.react",["CometRelay","GroupsCometJoinGroupButtonRelay_group.graphql","react","useGroupsCometJoinActionButton","useGroupsCometLeaveActionButton"],(function(a,b,c,d,e,f,g){"use strict";var h;d("react");function a(a){var e=a.group$key,f=a.groupShareTrackingParams;f=f===void 0?null:f;var g=a.hasIcon,i=a.isPrimary,j=a.onCancelRequestToJoinError,k=a.onCancelRequestToJoinSuccess,l=a.onFooter,m=a.onPressCancelRequest,n=a.onPressJoin,o=a.onPressJoined,p=a.onRequestToJoinError,q=a.onRequestToJoinSuccess,r=a.openInNewTab,s=a.reduceEmphasis,t=a.source,u=a.testid;a=a.useShortenedCTA;e=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometJoinGroupButtonRelay_group.graphql"),e);f=c("useGroupsCometJoinActionButton")({group$key:e,groupShareTrackingParams:f,hasIcon:g,isPrimary:i,onCancelRequestToJoinError:j,onCancelRequestToJoinSuccess:k,onFooter:l,onPressCancelRequest:m,onPressJoin:n,onPressJoined:o,onRequestToJoinError:p,onRequestToJoinSuccess:q,openInNewTab:r,reduceEmphasis:s,source:t,testid:u,useShortenedCTA:a});g=c("useGroupsCometLeaveActionButton")({group$key:e,onFooter:l,onPressJoined:o,source:t,useShortenedCTA:a});return(j=(i=f)!=null?i:t!=="group_mall"?g:null)!=null?j:null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PayoutCometOnboardingEnvironmentContext.react",["CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");c=b.createContext;var h=b.useContext,i=c(null);function a(){var a=h(i),b=d("CometRelay").useRelayEnvironment();return a||b}g.PayoutCometOnboardingEnvironmentContext=i;g.usePayoutCometOnboardingEnvironment=a}),98);/*FB_PKG_DELIM*/
__d("BlockingSettingsLayoutViewerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4568114363302952"}),null);
__d("BlockingSettingsLayoutViewerQuery$Parameters",["BlockingSettingsLayoutViewerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("BlockingSettingsLayoutViewerQuery_facebookRelayOperation"),metadata:{},name:"BlockingSettingsLayoutViewerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSettingsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7525993687475188"}),null);
__d("CometSettingsRootQuery$Parameters",["CometSettingsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSettingsRootQuery_facebookRelayOperation"),metadata:{},name:"CometSettingsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFullPageEntryPointCompatRoot.react",["CometFullPageCompatRoot.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.extraProps;return h.jsx(c("CometFullPageCompatRoot.react"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("buildCometSettingsRoute.entrypoint",["CometSettingsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h=c("gkx")("2148"),i=!h;a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometSettingsRoot.react").__setRef("buildCometSettingsRoute.entrypoint"),function(a){a=a.routeProps.tab;return{cometSettingsRootQueryReference:{parameters:b("CometSettingsRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),settingsCurrent:i,settingsRevamp:h,tab:a}}}});g["default"]=a}),98);
__d("BlockingSettingsRoot.entrypoint",["BlockingSettingsLayoutViewerQuery$Parameters","JSResourceForInteraction","buildCometSettingsRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSettingsRoute.entrypoint")(c("JSResourceForInteraction")("BlockingSettingsRoot.react").__setRef("BlockingSettingsRoot.entrypoint"),function(a){return{queries:{blockingSettingsLayoutViewerQueryRef:{parameters:b("BlockingSettingsLayoutViewerQuery$Parameters"),variables:{}}}}});g["default"]=a}),98);
__d("CometSettingsFullPageEntryPointCompatRoot.entrypoint",["JSResourceForInteraction","buildCometSettingsRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSettingsRoute.entrypoint")(c("JSResourceForInteraction")("CometFullPageEntryPointCompatRoot.react").__setRef("CometSettingsFullPageEntryPointCompatRoot.entrypoint"),function(a){a=a.routeProps.maintainKey;return{extraProps:{routeProps:{maintainKey:a}}}});g["default"]=a}),98);
__d("XCometSettingsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/settings/",Object.freeze({show_dialog:!1}),void 0);b=a;g["default"]=b}),98);