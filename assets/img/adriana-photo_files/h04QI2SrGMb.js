if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometResponsiveTopNav.react",["BaseHeading.react","BaseRow.react","BaseRowItem.react","CometLink.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={row:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},tabs:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},title:{paddingEnd:"hv4rvrfc"}};function a(a){var b=a.action,d=a.auxiliary,e=a.isTitlePrimaryHeading;e=e===void 0?!0:e;var f=a.tabs,g=a.title,j=a.titleURL;a=a.xstyle;e=g!=null?h.jsx(c("BaseRowItem.react"),{xstyle:i.title,children:h.jsx(c("BaseHeading.react"),{isPrimaryHeading:e,children:h.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:g})})}):null;j!=null&&e!=null&&(e=h.jsx(c("CometLink.react"),{href:j,children:e}));return h.jsxs(c("BaseRow.react"),{verticalAlign:"center",xstyle:[i.row,a],children:[e,h.jsx(c("BaseRowItem.react"),{expanding:!0,xstyle:i.tabs,children:f}),b&&h.jsx(c("BaseRowItem.react"),{children:b}),h.jsx(c("BaseRowItem.react"),{children:d})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseAdaptiveTabs.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={absoluteFill:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},absoluteTop:{end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},heightGetter:{lineHeight:"soycq5t1",position:"l9j0dhe7"},heightSetter:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",visibility:"kr9hpln1"},moreTab:{alignItems:"bp9cbjyn",display:"pq6dq46d",justifyContent:"jifvfom9"},moreWrapper:{display:"q9uorilb",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",verticalAlign:"j1lvzwm4"},root:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm",zIndex:"du4w35lb"},tab:{alignItems:"bp9cbjyn",display:"pq6dq46d","float":"bzsjyuwj",justifyContent:"jifvfom9",verticalAlign:"j1lvzwm4"}};function a(a){var b=a.height,d=a.heightXStyle,e=a.tabRole,f=e===void 0?"tab":e;e=a.tabs;var g=a.moreTab,j=a.maxVisibleTabs;j=j===void 0?Infinity:j;var k=a.moreTabWidthXStyle,l=a.rootXStyle,m=a.selectedTabIndex;a=j<e.length?e.slice(0,j):e;j=j>=e.length;e=a.map(function(a,b){return typeof a==="function"?a([i.tab,d],b):h.jsx("div",{"aria-selected":f==="img"?void 0:m===b,className:c("stylex")(i.tab,d),role:f,children:a},b+"tab")});a=f==="tab"?"tablist":"group";return h.jsx("div",{className:c("stylex")(i.root,d,l),children:h.jsxs("div",{className:c("stylex")(i.heightGetter),children:[j&&h.jsx("div",{"aria-hidden":!0,className:c("stylex")(i.heightSetter),role:a,children:e}),h.jsxs("div",{className:c("stylex")(i.absoluteFill),"data-testid":void 0,role:a,children:[h.jsx("div",{className:c("stylex")(i.moreWrapper,d,k),role:f,style:j?{height:"calc((100% - "+b+"px) * 9999)",maxHeight:b,minHeight:0}:void 0,children:typeof g==="function"?g([i.absoluteTop,i.moreTab,d]):h.jsx("div",{className:c("stylex")(i.absoluteTop,i.moreTab,d),children:g})}),e]})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPivotLinkTab.react",["CometPivotLink.react","ReactDOMComet","react","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useRef,k=b.useState,l={tab:{alignItems:"bp9cbjyn",boxSizing:"rq0escxv",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"frgo5egb",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",position:"l9j0dhe7",zIndex:"tkr6xdv7"}};function a(a,b){var e=a.FocusItem,f=a.containerRef,g=a.disabled;g=g===void 0?!1:g;var m=a.hasNewContentBadge;m=m===void 0?!1:m;var n=a.image,o=a.imagePlacement;o=o===void 0?"left":o;var p=a.label,q=a.labelIsHidden;q=q===void 0?!1:q;var r=a.linkType,s=a.onHidden,t=a.selected;t=t===void 0?!1:t;var u=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItem","containerRef","disabled","hasNewContentBadge","image","imagePlacement","label","labelIsHidden","linkType","onHidden","selected","xstyle"]);var v=k(!0),w=v[0],x=v[1],y=j(s);y.current=s;v=i(function(a){var b=a.intersectionRatio;d("ReactDOMComet").flushSync(function(){var a=b<.1;x(a);y.current&&y.current(a)})},[]);s=c("useIntersectionObserver")(v,{root:f?function(){return f.current}:null,threshold:.5});v=h.jsx("div",{className:c("stylex")(l.tab,u),ref:b,children:h.jsx(c("CometPivotLink.react"),{disabled:g,hasNewContentBadge:m,image:n,imagePlacement:o,label:p,labelIsHidden:q,linkProps:a.linkProps,onPress:a.onPress,ref:s,selected:t,testid:void 0,type:r})});return e&&!w?h.jsx(e,{children:v}):v}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometPivotLinkTabs.react",["fbt","ix","BaseAdaptiveTabs.react","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometKeys","CometPivotLinkTab.react","FocusGroup.react","fbicon","focusScopeQueries","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useMemo,m=b.useState,n=c("requireDeferred")("CometTabMenuForPivotLinks.react").__setRef("CometPivotLinkTabs.react");e=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);var o=e[0],p=e[1],q={height:{height:"tv7at329"},moreTabWidth:{width:"tmrshh9y"},root:{marginEnd:"dlv3wnog",marginStart:"rl04r1d5"}};function a(a){var b=a.linkType,e=a.maxTabs,f=e===void 0?Infinity:e,g=a.moreTabConfig,u=a.tabs;e=a.tabsContainerStyle;a=m(function(){return Array.from({length:u.length}).map(function(a,b){return b}).filter(function(a){return a>=f})});var v=a[0],w=a[1],x=l(function(){return v.some(function(a){return(a=u[a])==null?void 0:a.selected})},[v,u]);a=k(function(a,e){var f=[{command:{key:c("CometKeys").DOWN},description:h._(/*FBT_CALL*/"Open Menu"/*FBT_CALL*/),handler:e}];return j.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:f,children:j.jsx(c("CometPivotLinkTab.react"),{FocusItem:p,"aria-haspopup":"menu","aria-label":h._(/*FBT_CALL*/"More"/*FBT_CALL*/),image:(f=g==null?void 0:g.image)!=null?f:{icon:d("fbicon")._(i("484386"),16),type:"icon"},imagePlacement:(f=g==null?void 0:g.imagePlacement)!=null?f:"left",label:(f=g==null?void 0:g.label)!=null?f:h._(/*FBT_CALL*/"More"/*FBT_CALL*/),labelIsHidden:(f=g==null?void 0:g.labelIsHidden)!=null?f:!0,linkType:b,onPress:e,ref:a,role:"tab",selected:x,testid:void 0,xstyle:g==null?void 0:g.xstyle})})},[x,g]);a=j.jsx(c("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:v.map(function(a){return u[a]}).filter(Boolean)},popoverResource:n,children:a});return j.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:t,children:j.jsx(o,{orientation:"horizontal",preventScrollOnFocus:!0,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:j.jsx("div",{className:c("stylex")(q.root,e),children:j.jsx(c("BaseAdaptiveTabs.react"),{height:36,heightXStyle:q.height,maxVisibleTabs:f,moreTab:a,moreTabWidthXStyle:(e=g==null?void 0:g.width)!=null?e:q.moreTabWidth,selectedTabIndex:u.findIndex(function(a){return a.selected}),tabs:u.map(function(a,d){return j.createElement(c("CometPivotLinkTab.react"),babelHelpers["extends"]({},a,{FocusItem:p,key:d+"tab",linkType:b,onHidden:function(a){w(function(b){return a?r(b,d):s(b,d)})}}))})})})})})}a.displayName=a.name+" [from "+f.id+"]";function r(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function s(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}var t=[{command:{key:c("CometKeys").LEFT},description:h._(/*FBT_CALL*/"Previous item"/*FBT_CALL*/),handler:function(){}},{command:{key:c("CometKeys").RIGHT},description:h._(/*FBT_CALL*/"Next item"/*FBT_CALL*/),handler:function(){}}];g["default"]=a}),98);
__d("useCometTypeaheadScrollableViewListStrategy",["CometScrollableArea.react","react","useCometInternalTypeaheadState","useCometTypeaheadKeyboardForScrollableArea","useCometTypeaheadViewListStrategy"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.emptyStateContent,d=a.extraViewProps,e=a.nullstateContent,f=a.scrollableXStyle,g=a.viewItemStrategyRenderer,j=a.viewListStrategyRenderer;a=a.viewXStyle;var k=c("useCometInternalTypeaheadState")();k=k.highlightedEntry;var l=c("useCometTypeaheadKeyboardForScrollableArea")(k),m=c("useCometTypeaheadViewListStrategy")({emptyStateContent:b,extraViewProps:d,nullstateContent:e,viewItemStrategyRenderer:g,viewListStrategyRenderer:j,viewXStyle:a});return i(function(a){return h.jsx(c("CometScrollableArea.react"),{horizontal:!1,ref:l,xstyle:f,children:h.jsx(m,babelHelpers["extends"]({},a))})},[m,l,f])}g["default"]=a}),98);
__d("useCometSearchRoutingQueryString",["CometRouteParams"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams();return typeof a.q==="string"?a.q.trim():""}g["default"]=a}),98);
__d("CometSearchScopedTypeaheadInputStrategy.react",["CometSearchEventEmitterContext","CometTypeaheadInputRoundedStrategy.react","react","useCometTypeaheadInputRefs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect;function a(a,b){var d=a.inputExtraProps,e=a.onChange;a=babelHelpers.objectWithoutPropertiesLoose(a,["inputExtraProps","onChange"]);var f=i(c("CometSearchEventEmitterContext")),g=f.subscribeToScopedSearchTypeaheadFocus;f=c("useCometTypeaheadInputRefs")(b);b=f.composedRef;f=f.inputRef;var k=f.current;j(function(){var a=g(function(){if(k==null)return;k.focus();k.value="";e("")});return function(){a()}},[k,e,g]);return h.jsx(c("CometTypeaheadInputRoundedStrategy.react"),babelHelpers["extends"]({},a,{inputExtraProps:babelHelpers["extends"]({},d,{size:"medium"}),onChange:e,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometSearchScopedTypeahead.react",["BaseTypeahead.react","CometSearchScopedTypeaheadInputStrategy.react","CometTypeaheadLayoutContextualStrategy.react","cr:3634","emptyFunction","react","useStable","withSearchCometTypeaheadBaseNavigationDecorator"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={typeaheadInput:{alignItems:"bp9cbjyn",display:"j83agx80"},typeaheadView:{borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",borderBottomWidth:"afxsp9o4",borderTopColor:"ke985yof",borderEndColor:"b2m76dm3",borderBottomColor:"grkpwi79",borderStartColor:"nksai4kh",borderEndWidth:"ed0hlay0",borderStartWidth:"jcgfde61",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopEndRadius:"h905i5nu",borderTopStartRadius:"monazrh9",borderTopWidth:"rt8b4zig",boxShadow:"s99qchmh",maxHeight:"c94xh3zg",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}},k={12:{paddingEnd:"d1544ag0",paddingStart:"tw6a2znq"},16:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var d=a.paddingHorizontal,e=d===void 0?16:d;d=babelHelpers.objectWithoutPropertiesLoose(a,["paddingHorizontal"]);a=i(function(){return{inputXStyle:[j.typeaheadInput,k[e]],viewXStyle_DO_NOT_USE:j.typeaheadView}},[e]);var f=c("useStable")(function(){var a;return((a=b("cr:3634"))!=null?a:c("emptyFunction").thatReturnsArgument)(c("withSearchCometTypeaheadBaseNavigationDecorator")(c("BaseTypeahead.react")))});return h.jsx(f,babelHelpers["extends"]({},d,{inputStrategyRenderer:c("CometSearchScopedTypeaheadInputStrategy.react"),layoutStrategyRenderer:c("CometTypeaheadLayoutContextualStrategy.react"),xstyles:a}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometSearchScopedTypeaheadDataSource",["CometRelay","CometSearchKeywordDataSource","Promise","cometSearchTypeaheadDecorateMixedPayload","cometSearchTypeaheadDecorateRecentPayload","react","searchCometTypeaheadPushErrorToast"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useMemo;function a(a){var e=a.config,f=e.dataSources.keywordDataSourceParams,g=e.logging.sessionContext,j=e.view.renderLimit,k=a.recentDataSource,l=a.searchScopeEntityID,m=d("CometRelay").useRelayEnvironment(),n=i(function(){return new(c("CometSearchKeywordDataSource"))(babelHelpers["extends"]({},f,{limit:j,onError:function(){return c("searchCometTypeaheadPushErrorToast")()},relayEnvironment:m}))},[f,j,m]),o=h(function(a,b){var c=a.key,d=a.label,e=a.metaData;a=a.rawData;if(k!=null){e={logging:{searchScopeEntityID:l},markers:e.markers};c={key:c,label:d,metaData:e,rawData:a,type:"recent"};k.add(c,g,b)}},[g,k,l]),p=h(function(a){var b=a.query;if(b===""&&k!=null){var d=k.fetchCache(a),e=d.entries;d=d.params;return c("cometSearchTypeaheadDecorateRecentPayload")({entries:e,params:d},{limit:j})}if(b==="")return{entries:[],params:a};e=n.fetchCache(a);d=e.entries;b=e.params;return c("cometSearchTypeaheadDecorateMixedPayload")({entries:d,params:b},{limit:j})},[n,j,k]),q=h(function(a){var d=a.query;if(d===""&&k!=null)return k.fetchNetwork(a).then(function(a){return c("cometSearchTypeaheadDecorateRecentPayload")(a,{limit:j})});return d===""?b("Promise").resolve({entries:[],params:a}):n.fetchNetwork(a).then(function(a){return c("cometSearchTypeaheadDecorateMixedPayload")(a,{limit:j})})},[n,j,k]),r=h(function(a,b){k!=null&&k.remove(a,b)},[k]);return i(function(){return{addRecentEntry:o,fetchCache:p,fetchNetwork:q,removeRecentEntry:r}},[o,p,q,r])}g["default"]=a}),98);
__d("useCometSearchScopedTypeaheadPressEntryHandler",["react","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.callback,d=a.loggingProvider,e=a.urlBuilder,f=c("useCometTypeaheadNavigate")();return h(function(a){var c=a.rawData;c=a.type==="your_group_activity"?c.url:e({entryPointAction:"SEARCH_BOX",query:a.label,typeaheadSessionID:d.getSessionID()});f(c);b&&b()},[e,d,f,b])}g["default"]=a}),98);
__d("useCometSearchScopedTypeaheadSelectFreeformQueryHandler",["react","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.callback,d=a.loggingProvider,e=a.urlBuilder,f=c("useCometTypeaheadNavigate")();return h(function(a){a=e({entryPointAction:"SEARCH_BOX",query:a,typeaheadSessionID:d.getSessionID()});f(a);b&&b()},[e,d,f,b])}g["default"]=a}),98);
__d("useSearchCometScopedTypeaheadViewListStrategy",["CometSearchTypeaheadBaseViewRecentEmptyState.react","react","useCometTypeaheadScrollableViewListStrategy"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.viewItemStrategyRenderer;return c("useCometTypeaheadScrollableViewListStrategy")({emptyStateContent:h.jsx(c("CometSearchTypeaheadBaseViewRecentEmptyState.react"),{}),viewItemStrategyRenderer:a})}g["default"]=a}),98);