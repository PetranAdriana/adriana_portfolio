if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"animated_image_attribution",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachmentAttribution_attachment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Video",abstractKey:null}],storageKey:null}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"height",value:396},b={kind:"Variable",name:"scale",variableName:"scale"},c={kind:"Literal",name:"width",value:396},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:[a,b,{kind:"Literal",name:"sizing",value:"contain-fit"},c],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:d,storageKey:null},{alias:null,args:[a,b,c],concreteType:"Image",kind:"LinkedField",name:"animated_image",plural:!1,selections:d,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"animated_image_caption",storageKey:null}],type:"GenericAttachmentMedia",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedVideoWithGifOverlay_attachment"},{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentAttribution_attachment"}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment",selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentAttribution_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentVideoRenderer_media$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFICommentAnimatedImageAttachmentVideoRenderer_media$normalization",selections:[{alias:"fallbackImage",args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"animated_image_caption",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_podcast_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"unsupported_browser_message",storageKey:null},{alias:null,args:null,concreteType:"MusicVideoMetadata",kind:"LinkedField",name:"pmv_metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_ncsr",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},{alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},{alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},{alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_rss_podcast_video",storageKey:null},{alias:null,args:null,concreteType:"VideoPlayerShakaLiveP2PInit",kind:"LinkedField",name:"video_player_shaka_live_p2p_init",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},{alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},{alias:null,args:null,concreteType:"SphericalVideoFallbackUrls",kind:"LinkedField",name:"spherical_video_fallback_urls",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sd",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_gaming_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_latency_menu_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fbls_tier",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_latency_sensitive_broadcast",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_latency_setting",storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"comet_video_player_static_config",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comet_video_player_context_sensitive_config",storageKey:null},{alias:null,args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{args:null,documentName:"useVideoPlayerShakaPerformanceLoggerRelayImpl_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerRelayImpl_init",fragmentPropName:"init",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_player_shaka_performance_logger_should_sample",storageKey:null},{alias:"video_player_shaka_performance_logger_init2",args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{args:null,documentName:"useVideoPlayerShakaPerformanceLoggerBuilder_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerBuilder_init",fragmentPropName:"init",kind:"ModuleImport"},{alias:null,args:null,kind:"ScalarField",name:"per_session_sampling_rate",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},{alias:null,args:null,concreteType:"VideoP2PSettings",kind:"LinkedField",name:"p2p_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ticket",storageKey:null},{alias:null,args:null,concreteType:"VideoP2PSettingsConfig",kind:"LinkedField",name:"config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"delay_p2p_until_play",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"disable_hivejava_for_livevc",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VideoHiveCommunityInfo",kind:"LinkedField",name:"community_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"community_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"community_name",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VideoHiveInitializationOptions",kind:"LinkedField",name:"hive_initialization_options",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHiveInitializationOptionHiveJava",kind:"LinkedField",name:"hive_java",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"min_version",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hive_tech_order",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"debug_level",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AudioSettings",kind:"LinkedField",name:"audio_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"video_volume_setting",storageKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_background_color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_background_opacity",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_text_color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_text_size",storageKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"VideoBroadcastLowLatencyConfig",kind:"LinkedField",name:"broadcast_low_latency_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ll_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ll_latency_tolerance_ms",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"audio_availability",storageKey:null},{alias:null,args:null,concreteType:"VideoMutedSegment",kind:"LinkedField",name:"muted_segments",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"mute_start_time_in_sec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mute_end_time_in_sec",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SphericalVideoRenderer",kind:"LinkedField",name:"spherical_video_renderer",plural:!1,selections:[{args:null,documentName:"VideoPlayerRelay_video_spherical_video_renderer",fragmentName:"VideoPlayerSphericalRelay_sphericalVideoRenderer",fragmentPropName:"sphericalVideoRenderer",kind:"ModuleImport"}],storageKey:null},{"if":null,kind:"Defer",label:"VideoPlayerRelay_video$defer$InstreamVideoAdBreaksPlayer_video",selections:[b,{alias:null,args:null,concreteType:"InstreamExtraConfig",kind:"LinkedField",name:"instream_extra_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"instream_halo_delay_time_seconds",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{args:null,documentName:"InstreamVideoAdBreaksPlayer_video_instream_video_ad_breaks_comet",fragmentName:"InstreamVideoAdBreaksPlayerImpl_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null}]},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentVideoRenderer_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachmentVideoRenderer_media",selections:[{alias:"fallbackImage",args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachment_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentAnimatedImageAttachment_attachment",fragmentName:"CometUFICommentAnimatedImageAttachmentVideoRenderer_media",fragmentPropName:"media",kind:"ModuleImport"}],type:"Video",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ThirdPartyMediaAttachmentInfo",kind:"LinkedField",name:"third_party_media_info",plural:!1,selections:[{args:null,documentName:"CometUFICommentAnimatedImageAttachment_attachment__thirdPartyMediaInfo",fragmentName:"CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo",fragmentPropName:"thirdPartyMediaInfo",kind:"ModuleImport"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFICommentThirdPartyStickerRenderer_attachment"},{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment"},{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"animated_image_attribution",storageKey:null},d=[b],e={kind:"Variable",name:"scale",variableName:"scale"},f={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},g={kind:"Literal",name:"height",value:396},h={kind:"Literal",name:"width",value:396},i=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},f];return{kind:"SplitOperation",metadata:{},name:"CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentAnimatedImageAttachment_attachment",fragmentName:"CometUFICommentAnimatedImageAttachmentVideoRenderer_media",fragmentPropName:"media",kind:"ModuleImport"},b,c,{alias:null,args:[{kind:"Literal",name:"supported",value:["CometProductTagFeedOverlayRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_product_tag_feed_overlay_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedVideoWithGifOverlay_attachment",fragmentName:"CometProductTagFeedOverlayRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometProductTagFeedOverlayRenderer",abstractKey:null}],storageKey:'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])'}],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:d,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"animated_image_caption",storageKey:null},c],type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageVideo",abstractKey:null},{alias:"sticker_image",args:[{kind:"Literal",name:"height",value:80},e,{kind:"Literal",name:"width",value:80}],concreteType:"Image",kind:"LinkedField",name:"animated_image",plural:!1,selections:[f],storageKey:null},{alias:null,args:[g,e,{kind:"Literal",name:"sizing",value:"contain-fit"},h],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:i,storageKey:null},{alias:null,args:[g,e,h],concreteType:"Image",kind:"LinkedField",name:"animated_image",plural:!1,selections:i,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ThirdPartyMediaAttachmentInfo",kind:"LinkedField",name:"third_party_media_info",plural:!1,selections:[{args:null,documentName:"CometUFICommentAnimatedImageAttachment_attachment__thirdPartyMediaInfo",fragmentName:"CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo",fragmentPropName:"thirdPartyMediaInfo",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:"story_url",args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:[{kind:"Literal",name:"supported",value:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentOnsiteDonateLinkRenderer","StoryAttachmentClickToBookNowRenderer"]}],concreteType:null,kind:"LinkedField",name:"story_attachment_link_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryLeadGenLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryGenericLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentGenericLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryClickToMessenger_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentClickToMessengerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryFundraiserLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentFundraiserLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryOnsiteDonateLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentOnsiteDonateLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryClickToBookNow_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentClickToBookNowRenderer",abstractKey:null}],storageKey:'story_attachment_link_renderer(supported:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentOnsiteDonateLinkRenderer","StoryAttachmentClickToBookNowRenderer"])'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentAnimatedImageShareStyleRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentThirdPartyStickerRenderer_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometUFICommentThirdPartyStickerRenderer_attachment",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"RequiredField",field:{alias:"sticker_image",args:[{kind:"Literal",name:"height",value:80},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:80}],concreteType:"Image",kind:"LinkedField",name:"animated_image",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},action:"THROW",path:"media.sticker_image.uri"}],storageKey:null},action:"THROW",path:"media.sticker_image"}],storageKey:null},action:"THROW",path:"media"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},action:"THROW",path:"url"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"provider",storageKey:null}]};e.exports=a}),null);
__d("CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"provider",storageKey:null},action:"THROW",path:"provider"}],type:"ThirdPartyMediaAttachmentInfo",abstractKey:null};e.exports=a}),null);
__d("CometFeedGifOverlay.react",["fbt","ix","CometImage.react","CometPressable.react","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k={gifButton:{appearance:"dwo3fsh8",backgroundColor:"g5ia77u1",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"rt8b4zig",borderEndWidth:"n8ej3o3l",borderBottomWidth:"agehan2d",borderStartWidth:"sk4xxmp2",boxSizing:"rq0escxv",color:"lkb5bm1b",display:"a8c37x1j",height:"datstx6m",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",position:"l9j0dhe7",textAlign:"i1ao9s8h",width:"k4urcfbm",zIndex:"du4w35lb"},gifIcon:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",boxSizing:"rq0escxv",cursor:"nhd2j8a9",height:"rdkrh8wx",left:"pzli0o6b",position:"pmk7jnqg",top:"rk01pc8j",transform:"py2didcb",width:"orwu60u2"},gifIconImage:{boxSizing:"rq0escxv",left:"pzli0o6b",position:"pmk7jnqg",top:"rk01pc8j",transform:"k8ui9dzl"},gifIconImageHidden:{transform:"izhqzi6j",transitionProperty:"flx89l3n",transitionTimingFunction:"heur4gxb"},hideTransition1:{transitionDuration:"kmdw4o4n"},hideTransition2:{transitionDuration:"dpja2al7"},hideTransition3:{transitionDuration:"qgmjvhk0"}};function a(a){var b=a.isPaused,d=a.isPlayable,e=a.label,f=a.linkProps;a=a.onPress;if(d){if(b==null||a==null)throw c("unrecoverableViolation")("isPaused and onPress cannot be nullish if the component is playable in CometFeedGifOverlay","comet_feed")}else if(f==null||e==null)throw c("unrecoverableViolation")("linkProps or label cannot be nullish if the component is not playable in CometFeedGifOverlay","comet_feed");return d?j.jsx(c("CometPressable.react"),{display:"inline",label:b===!0?h._(/*FBT_CALL*/"Play GIF"/*FBT_CALL*/):h._(/*FBT_CALL*/"Pause GIF"/*FBT_CALL*/),linkProps:f,onPress:a,overlayDisabled:!0,xstyle:k.gifButton,children:j.jsxs("i",{className:c("stylex")(k.gifIcon),children:[j.jsx("span",{className:c("stylex")(k.gifIconImage,b===!1&&k.gifIconImageHidden,b===!1&&k.hideTransition3),children:j.jsx(c("CometImage.react"),{src:i("99378")})}),j.jsx("span",{className:c("stylex")(k.gifIconImage,b===!1&&k.gifIconImageHidden,b===!1&&k.hideTransition2),children:j.jsx(c("CometImage.react"),{src:i("99379")})}),j.jsx("span",{className:c("stylex")(k.gifIconImage,b===!1&&k.gifIconImageHidden,b===!1&&k.hideTransition1),children:j.jsx(c("CometImage.react"),{src:i("99380")})})]})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIAnimatedImageAttachmentGIFOverlay.react",["CometFeedGifOverlay.react","VideoPlayerHooks","react","useDebouncedValue"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=d("VideoPlayerHooks").useController();a=d("VideoPlayerHooks").usePaused();var e=d("VideoPlayerHooks").usePlaying();e=c("useDebouncedValue")(e,5);var f=a&&!e;a=i(function(){f?b.play("user_initiated"):b.pause("user_initiated")},[f,b]);return h.jsx(c("CometFeedGifOverlay.react"),{isPaused:f,isPlayable:!0,onPress:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentAnimatedImageAttachmentAttribution.react",["fbt","ix","CometPressable.react","CometRelay","CometRow.react","CometRowItem.react","CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql","TetraIcon.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l={footer:{backgroundImage:"sg6hv7x6",bottom:"i09qtzwb",end:"n7fi1qx3",opacity:"pedkr2u6",position:"pmk7jnqg",start:"j9ispegn",transitionProperty:"pnx7fd3z",transitionTimingFunction:"heur4gxb"},hidden:{opacity:"b5wmifdl",pointerEvents:"hzruof5a",transform:"c6mbcsjx",transitionDuration:"ms05siws"}};function a(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql"),a.attachment),f=e.media;return k.jsx(c("CometPressable.react"),{"aria-label":h._(/*FBT_CALL*/"Click to view attachment"/*FBT_CALL*/),hideHoverOverlay:!0,linkProps:{url:e.url},xstyle:[l.footer,a.isHidden&&l.hidden],children:k.jsxs(c("CometRow.react"),{align:"justify",paddingVertical:16,spacingVertical:8,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"meta2",children:(f==null?void 0:f.animated_image_attribution)||(e==null?void 0:(a=e.source)==null?void 0:a.text)})}),k.jsx(c("CometRowItem.react"),{children:k.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("570405"),24)})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentAnimatedImageAttachmentFallbackRenderer.react",["CometFeedGifOverlay.react","CometImage.react","CometPressable.react","CometRelay","CometUFICommentAnimatedImageAttachmentAttribution.react","CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql","CometUFICommentAttachmentContainer.react","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useState,l={image:{display:"a8c37x1j",height:"idiwt2bm",maxWidth:"d2edcug0"},maximize:{display:"a8c37x1j",height:"datstx6m",width:"k4urcfbm"},overlayContainer:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}};function a(a){var e,f,g;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql"),a.attachment);var m=a.media,n=k(!1),o=n[0],p=n[1];n=m==null?void 0:(n=m.animated_image)==null?void 0:n.uri;var q=Boolean(n);e=(e=m==null?void 0:(e=m.animated_image)==null?void 0:e.height)!=null?e:m==null?void 0:(e=m.image)==null?void 0:e.height;f=(f=m==null?void 0:(f=m.animated_image)==null?void 0:f.width)!=null?f:m==null?void 0:(f=m.image)==null?void 0:f.height;g=m==null?void 0:(g=m.image)==null?void 0:g.uri;var r=a==null?void 0:a.url;if(e==null||f==null||g==null||r==null)throw c("unrecoverableViolation")("unable to play gif as either animatedURI, staticURI, height or width is missing","ufi2");var s=j(function(){p(function(a){return!a})},[]);return i.jsxs(c("CometUFICommentAttachmentContainer.react"),{children:[i.jsx("div",{className:c("stylex")(l.overlayContainer),children:n!=null?i.jsx(c("CometFeedGifOverlay.react"),{isPaused:o,isPlayable:!0,onPress:s}):i.jsx(c("CometPressable.react"),{"aria-label":r,linkProps:{rel:["noopener","noreferrer"],target:"_blank",url:r},xstyle:l.maximize})}),i.jsx(c("CometImage.react"),{alt:(s=m==null?void 0:m.animated_image_caption)!=null?s:"GIF",height:e,src:!o&&n!=null?n:g,width:f,xstyle:l.image}),i.jsx(c("CometUFICommentAnimatedImageAttachmentAttribution.react"),{attachment:a,isHidden:!o&&q})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentAnimatedImageAttachment.react",["CometRelay","CometUFICommentAnimatedImageAttachmentFallbackRenderer.react","CometUFICommentAnimatedImageAttachment_attachment.graphql","gkx","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.attachment;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentAnimatedImageAttachment_attachment.graphql"),a);var e=a.media;if(e==null)throw c("unrecoverableViolation")("Unable to render a gif with no associated media","ufi2");return e.__typename==="Video"?c("gkx")("1859164")&&a.third_party_media_info?i.jsx(d("CometRelay").MatchContainer,{match:a.third_party_media_info,props:{attachment$key:a}}):i.jsx(d("CometRelay").MatchContainer,{match:e,props:{attachment:a}}):i.jsx(c("CometUFICommentAnimatedImageAttachmentFallbackRenderer.react"),{attachment:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentAnimatedImageAttachmentVideoRenderer.react",["CometDOMOnlyBoundary.react","CometImage.react","CometRelay","CometUFIAnimatedImageAttachmentGIFOverlay.react","CometUFICommentAnimatedImageAttachmentAttribution.react","CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment.graphql","CometUFICommentAnimatedImageAttachmentVideoRenderer_media.graphql","CometUFICommentAttachmentContainer.react","CometVisualCompletionAttributes","VideoAutoplayLocalScopeProvider.react","VideoPlayerAutoplayRulesProvider","VideoPlayerHooks","VideoPlayerRelay.react","VideoPlayerSurface.react","react","stylex","useDebouncedValue"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react"),k={image:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm",zIndex:"du4w35lb"},root:{backgroundColor:"tqsryivl",height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}},l=d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("gif");function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment.graphql"),a.attachment);a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometUFICommentAnimatedImageAttachmentVideoRenderer_media.graphql"),a.media);e=j.jsx(c("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:l,children:j.jsx(c("VideoPlayerRelay.react"),{portalingEnabled:!1,subOrigin:"animated_image_share",video:a,children:j.jsxs(c("VideoPlayerSurface.react"),{children:[j.jsx(c("CometUFIAnimatedImageAttachmentGIFOverlay.react"),{}),j.jsx(m,{attachment:e})]})})});a=(a=a.fallbackImage)!=null?a:{};var f=a.height,g=a.uri;a=a.width;g!=null&&f!=null&&a!=null&&(e=j.jsxs("div",babelHelpers["extends"]({className:c("stylex")(k.root),style:{height:"min("+k.root.height+","+f+")",width:"min("+k.root.width+","+a+")"}},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:[j.jsx(c("CometImage.react"),{src:g,xstyle:k.image}),j.jsx(c("CometDOMOnlyBoundary.react"),{fallback:null,children:e})]})));return j.jsx(c("CometUFICommentAttachmentContainer.react"),{children:e})}a.displayName=a.name+" [from "+f.id+"]";function m(a){a=a.attachment;var b=d("VideoPlayerHooks").usePaused(),e=d("VideoPlayerHooks").usePlaying();e=c("useDebouncedValue")(e,5);b=b&&!e;return j.jsx(c("CometUFICommentAnimatedImageAttachmentAttribution.react"),{attachment:a,isHidden:!b})}m.displayName=m.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentAnimatedImageShareAttachmentStyle.react",["CometRelay","CometUFICommentAnimatedImageAttachment.react","CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql","FBLogger","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.styleTypeRenderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql"),a);a=a.attachment;if(a==null){c("FBLogger")("CometFeed").mustfix("CometUFICommentAnimatedImageShareAttachmentStyle: Tried to render an animated image, but attachment information is null.");return null}return i.jsx(c("CometUFICommentAnimatedImageAttachment.react"),{attachment:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentThirdPartyStickerRenderer.react",["fbt","ix","CometImageFromIXValue.react","CometPressable.react","CometRelay","CometSpriteBase.react","CometUFICommentThirdPartyStickerRenderer_attachment.graphql","CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo.graphql","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=d("react"),m={providerIcon:{display:"j83agx80",paddingEnd:"ph5uu5jm"},root:{alignItems:"bp9cbjyn",backgroundColor:"hybvsw6c",borderTopStartRadius:"lit7pgxp",borderTopEndRadius:"o3c63hce",borderBottomEndRadius:"hqlzco19",borderBottomStartRadius:"lsl2245n",bottom:"i09qtzwb",display:"j83agx80",justifyContent:"taijpn5t",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",paddingTop:"ecm0bbzt",paddingBottom:"e5nlhep0",position:"pmk7jnqg",start:"j9ispegn"},stickerContainer:{height:"pioscnbf",width:"etr7akla"}};function a(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo.graphql"),a.thirdPartyMediaInfo);a=d("CometRelay").useFragment(k!==void 0?k:k=b("CometUFICommentThirdPartyStickerRenderer_attachment.graphql"),a.attachment$key);e=e.provider;var f=a.media.sticker_image.uri;a=a.url;return l.jsxs("div",{className:c("stylex")(m.stickerContainer),children:[l.jsx(c("CometSpriteBase.react"),{accessibilityCaption:h._(/*FBT_CALL*/"Click to view attachment"/*FBT_CALL*/),cursorEnabled:!0,linkProps:{url:a},src:f,xstyle:m.stickerContainer}),l.jsxs(c("CometPressable.react"),{"aria-label":h._(/*FBT_CALL*/"Click to view attachment"/*FBT_CALL*/),linkProps:{url:a},xstyle:m.root,children:[l.jsx("div",{className:c("stylex")(m.providerIcon),children:l.jsx(c("CometImageFromIXValue.react"),{source:i("1877536")})}),l.jsx(c("TetraText.react"),{type:"meta2",children:e})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);