(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[524],{"J+og":function(e,i,s){"use strict"
s.r(i)
var n=s("ejBJ")
var t=s("rWGD")
var a=s("ouhR")
var o=s.n(a)
var r=s("vI2V")
s("jYyc")
s("Z+Ib")
s("UlQx")
s("p6Wi")
s("7LJr")
s("OShF")
s("iBIV")
s("7WS/")
s("s/PJ")
s("IZD0")
const l=ENV.rubricAssessments
o()("#content").addClass("padless")
let d=1
function _(e){if(e.submission){const i=[]
i.push(e)
e=i}for(var i in e){const s=e[i].submission
const n=s.visible_submission_comments||s.submission_comments
const t=ENV.SUBMISSION.user_id?"user_id":"anonymous_id"
if(s[t].toString()!==ENV.SUBMISSION[t])continue
for(const e in n){const s=n[e].submission_comment||n[e]
if(o()("#submission_comment_"+s.id).length>0)continue
const t=o()("#comment_blank").clone(true).removeAttr("id")
s.posted_at=o.a.datetimeString(s.created_at)
t.fillTemplateData({data:s,id:"submission_comment_"+s.id})
if(s.media_comment_id){const e=o()("#comment_media_blank").clone(true).removeAttr("id")
e.fillTemplateData({data:s})
t.find(".comment").empty().append(e.show())}else for(var i in s.attachments){const e=s.attachments[i].attachment
const n=o()("#comment_attachment_blank").clone(true).removeAttr("id")
e.comment_id=s.id
n.fillTemplateData({data:e,hrefValues:["comment_id","id"]})
t.find(".comment_attachments").append(n.show())}o()(".comments .comment_list").append(t.show()).scrollTop(1e4)
o()(".grading_comment").val()===s.comment&&o()(".grading_comment").val("")}o()(".comments .comment_list .play_comment_link").mediaCommentThumbnail("small")
o()(".save_comment_button").attr("disabled",null)
if(s){g(s)
o()(".submission_details").fillTemplateData({data:s})
o()("#add_comment_form .comment_attachments").empty()}}o()(".submission_header").loadingImage("remove")}function c(e,i){return null==e?"":i.call(this,e)}function u(e){return t["a"].n(Object(n["a"])(e,n["a"].DEFAULT))}function g(e){["pass","fail","complete","incomplete"].indexOf(e.entered_grade)>-1?o()(".grading_box").val(e.entered_grade):o()(".grading_box").val(c(e.entered_grade,r["a"].formatGrade))
o()(".late_penalty").text(c(-e.points_deducted,u))
o()(".published_grade").text(c(e.published_grade,r["a"].formatGrade))
o()(".grade").text(c(e.grade,r["a"].formatGrade))
e.excused?o()(".entered_grade").text(t["a"].t("Excused")):o()(".entered_grade").text(c(e.entered_grade,r["a"].formatGrade))
!e.excused&&e.points_deducted?o()(".late-penalty-display").show():o()(".late-penalty-display").hide()}function m(e){e.show()
const i=e.find(":tabbable")
const s=[i.first()[0],i.last()[0]]
const n={9:"tab",13:"enter",27:"esc"}
o()(".hide_rubric_link").keydown((function(e){if("enter"==n[e.which]){e.preventDefault()
o()(this).click()}}))
i.each((function(){o()(this).bind("keydown",e=>{"esc"==n[e.which]&&o()(".hide_rubric_link").click()})}))
o()(s).each((function(e){o()(this).bind("keydown",(function(e){if("tab"==n[e.which]){const i=o()(this).is(o()(s).first())?e.shiftKey:!e.shiftKey
if(i){e.preventDefault()
const i=this
const n=o.a.grep(s,e=>e!=i)
o()(n).focus()}}}))}))
e.siblings().attr("data-hide_from_rubric",true).end().parentsUntil("#application").siblings().not("#aria_alerts").attr("data-hide_from_rubric",true)
e.hide()}function f(e){const i=e.is(":visible")
o()("#application").find("[data-hide_from_rubric]").attr("aria-hidden",i)}function h(){o()("#rubric_holder").fadeOut((function(){f(o()(this))
o()(".assess_submission_link").focus()}))}function p(){o()("#rubric_holder").fadeIn((function(){f(o()(this))
o()(this).find(".hide_rubric_link").focus()}))}function b(){const e=o()("#preview_frame")
const i=e.offset().top
const s=o()(window).height()-i
e.height(s)
o()("#rubric_holder").css({maxHeight:s-50,overflow:"auto",zIndex:5})
o()(".comments").height(s)}function w(){o()(document).ready((function(){o()(".comments .comment_list .play_comment_link").mediaCommentThumbnail("small")
o()(window).bind("resize",b).triggerHandler("resize")
o()(".comments_link").click(e=>{e.preventDefault()
o()(".comments").slideToggle(()=>{o()(".comments .media_comment_content").empty()
o()(".comments textarea:visible").focus().select()})})
o()(".save_comment_button").click(e=>{o()(document).triggerHandler("comment_change")})
o()(document).bind("comment_change",e=>{o()(".save_comment_button").attr("disabled","disabled")
o()(".submission_header").loadingImage()
const i=o()(".update_submission_url").attr("href")
const s=o()(".update_submission_url").attr("title")
const n={"submission[assignment_id]":ENV.SUBMISSION.assignment_id,"submission[group_comment]":o()("#submission_group_comment").attr("checked")?"1":"0"}
const a=ENV.SUBMISSION.user_id?"user_id":"anonymous_id"
n["submission[".concat(a,"]")]=ENV.SUBMISSION[a]
if(o()("#media_media_recording:visible").length>0){const e=o()("#media_media_recording").data("comment_id")
const i=o()("#media_media_recording").data("comment_type")
n["submission[media_comment_type]"]=i||"video"
n["submission[media_comment_id]"]=e}else{o()(".grading_comment").val()&&""!=o()(".grading_comment").val&&(n["submission[comment]"]=o()(".grading_comment").val())
!n["submission[comment]"]&&o()("#add_comment_form input[type='file']").length>0&&(n["submission[comment]"]=t["a"].t("see_attached_files","See attached files"))}if(!n["submission[comment]"]&&!n["submission[media_comment_id]"]){o()(".submission_header").loadingImage("remove")
o()(".save_comment_button").attr("disabled",null)
return}o()("#add_comment_form input[type='file']").length>0?o.a.ajaxJSONFiles(i+".text",s,n,o()("#add_comment_form input[type='file']"),_):o.a.ajaxJSON(i,s,n,_)})
o()(".cancel_comment_button").click(e=>{o()(".grading_comment").val("")
o()(".comments_link").click()})
o()(".grading_value").change(e=>{o()(document).triggerHandler("grading_change")})
o()(document).bind("grading_change",e=>{o()(".save_comment_button").attr("disabled","disabled")
o()(".submission_header").loadingImage()
const i=o()(".update_submission_url").attr("href")
const s=o()(".update_submission_url").attr("title")
const n={"submission[assignment_id]":ENV.SUBMISSION.assignment_id,"submission[user_id]":ENV.SUBMISSION.user_id,"submission[group_comment]":o()("#submission_group_comment").attr("checked")?"1":"0"}
if(o()(".grading_value:visible").length>0){n["submission[grade]"]=r["a"].delocalizeGrade(o()(".grading_value").val())
o.a.ajaxJSON(i,s,n,_)}else{o()(".submission_header").loadingImage("remove")
o()(".save_comment_button").attr("disabled",null)}})
o()(".attach_comment_file_link").click(e=>{e.preventDefault()
const i=o()("#comment_attachment_input_blank").clone(true).removeAttr("id")
i.find("input").attr("name","attachments["+d+++"][uploaded_data]")
o()("#add_comment_form .comment_attachments").append(i.slideDown())})
o()(".delete_comment_attachment_link").click((function(e){e.preventDefault()
o()(this).parents(".comment_attachment_input").slideUp((function(){o()(this).remove()}))}))
o()(".save_rubric_button").click((function(){const e=o()(this).parents("#rubric_holder").find(".rubric")
const i=rubricAssessment.assessmentData(e)
const s=o()(".update_rubric_assessment_url").attr("href")
const n="POST"
e.loadingImage()
o.a.ajaxJSON(s,n,i,s=>{e.loadingImage("remove")
const n=s
let t=false
if(n.rubric_association){rubricAssessment.updateRubricAssociation(e,s.rubric_association)
delete n.rubric_association}for(const e in l){const i=l[e].rubric_assessment
if(i&&n&&n.id==i.id){l[e].rubric_assessment=n
t=true}}if(!t){s.rubric_assessment||(s={rubric_assessment:s})
l.push(s)
const e=o()(document.createElement("option"))
e.val(n.id).text(n.assessor_name).attr("id","rubric_assessment_option_"+n.id)
o()("#rubric_assessments_select").prepend(e).val(n.id)}o()("#rubric_assessment_option_"+n.id).text(n.assessor_name)
o()("#new_rubric_assessment_option").remove()
o()("#rubric_assessments_list").show()
"peer_review"===n.assessment_type&&o()(".save_rubric_button").remove()
setTimeout(()=>{rubricAssessment.populateRubric(e,n,i)
const s=n.artifact
s&&g(s)},500)
h()})}))
o()("#rubric_holder .rubric").css({width:"auto",marginTop:0})
m(o()("#rubric_holder"))
o()(".hide_rubric_link").click(e=>{e.preventDefault()
h()})
o()(".assess_submission_link").click(e=>{e.preventDefault()
o()("#rubric_assessments_select").change()
p()})
o()("#rubric_assessments_select").change((function(){const e=o()(this).val()
let i=null
for(const s in l){const n=l[s].rubric_assessment
n.id==e&&(i=n)}const s=o()("#rubric_holder .rubric")
rubricAssessment.populateNewRubric(s,i,ENV.rubricAssociation)
const n=!i||i.assessor_id==ENV.RUBRIC_ASSESSMENT.assessor_id
o()("#rubric_holder .save_rubric_button").showIf(n)})).change()
o()(".media_comment_link").click(e=>{e.preventDefault()
o()("#media_media_recording").show()
const i=o()("#media_media_recording").find(".media_recording")
i.mediaComment("create","any",(e,s)=>{o()("#media_media_recording").data("comment_id",e).data("comment_type",s)
o()(document).triggerHandler("comment_change")
o()("#add_comment_form").show()
o()("#media_media_recording").hide()
i.empty()},()=>{o()("#add_comment_form").show()
o()("#media_media_recording").hide()})})
o()("#media_recorder_container a").live("click",e=>{o()("#add_comment_form").show()
o()("#media_media_recording").hide()})
o()(".comments .comment_list").delegate(".play_comment_link","click",(function(e){e.preventDefault()
const i=o()(this).parents(".comment_media").getTemplateData({textValues:["media_comment_id"]}).media_comment_id
i&&o()(this).parents(".comment_media").find(".media_comment_content").mediaComment("show",i,"video",this)})).delegate("a.instructure_inline_media_comment","click",e=>{e.preventDefault()
e.stopPropagation()})
g(ENV.SUBMISSION.submission)}))}o()(document).fragmentChange((e,i)=>{if("#rubric"==i)o()(".assess_submission_link:visible:first").click()
else if(i.match(/^#comment/)){let e=null
try{e=JSON.parse(i.substring(8))}catch(e){}e&&e.comment&&o()(".grading_comment").val(e.comment)
o()(".grading_comment").focus().select()}})
INST.refreshGrades=function(){const e=o()(".submission_data_url").attr("href")
setTimeout(()=>{o.a.ajaxJSON(e,"GET",{},_)},500)}
o()(document).ready(()=>{window.addEventListener("message",e=>{"refreshGrades"===e.data&&INST.refreshGrades()},false)})
var v=s("2/9e")
var k=s("3lLS")
var z=s.n(k)
z()(()=>{w()
v["a"].renderPills()})},KR5x:function(e,i,s){"use strict"
s.d(i,"a",(function(){return v}))
var n=s("1OyB")
var t=s("vuIU")
var a=s("md7G")
var o=s("foSv")
var r=s("Ji7U")
var l=s("q1tI")
var d=s.n(l)
var _=s("17x9")
var c=s.n(_)
var u=s("cClk")
var g=s("sTNg")
var m=s("nAyT")
var f=s("M8//")
var h,p,b,w
var v=(h=Object(m["a"])("7.0.0",null,"Use @instructure/ui-text-area instead."),h(p=(w=b=function(e){Object(r["a"])(i,e)
function i(){var e
var s
Object(n["a"])(this,i)
for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l]
s=Object(a["a"])(this,(e=Object(o["a"])(i)).call.apply(e,[this].concat(r)))
s._textArea=null
return s}Object(t["a"])(i,[{key:"focus",value:function(){this._textArea&&this._textArea.focus()}},{key:"render",value:function(){var e=this
return d.a.createElement(f["a"],Object.assign({ref:function(i){e._textArea=i}},this.props))}},{key:"minHeight",get:function(){return this._textArea&&this._textArea.minHeight}},{key:"invalid",get:function(){return this._textArea&&this._textArea.invalid}},{key:"id",get:function(){return this._textArea&&this._textArea.id}},{key:"focused",get:function(){return this._textArea&&this._textArea.focused}},{key:"value",get:function(){return this._textArea&&this._textArea.value}}])
i.displayName="TextArea"
return i}(l["Component"]),b.propTypes={label:c.a.node.isRequired,id:c.a.string,size:c.a.oneOf(["small","medium","large"]),layout:c.a.oneOf(["stacked","inline"]),autoGrow:c.a.bool,resize:c.a.oneOf(["none","both","horizontal","vertical"]),width:c.a.string,height:c.a.string,maxHeight:c.a.oneOfType([c.a.number,c.a.string]),messages:c.a.arrayOf(g["FormPropTypes"].message),inline:c.a.bool,placeholder:c.a.string,disabled:c.a.bool,readOnly:c.a.bool,required:c.a.bool,textareaRef:c.a.func,defaultValue:c.a.string,value:Object(u["a"])(c.a.string),onChange:c.a.func},b.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},w))||p)},RhCJ:function(e,i,s){"use strict"
s.d(i,"a",(function(){return n}))
function n(e,i,s){if("input"===e.as){if("children"===i&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(s,' as="input"`'))}else{if("value"===i&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(s,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(s,' as="input"`.'))}return}},WEeK:function(e,i,s){"use strict"
var n=s("rePB")
var t=s("Ff2n")
var a=s("1OyB")
var o=s("vuIU")
var r=s("md7G")
var l=s("foSv")
var d=s("Ji7U")
var _=s("q1tI")
var c=s.n(_)
var u=s("17x9")
var g=s.n(u)
var m=s("TSYQ")
var f=s.n(m)
var h=s("cClk")
var p=s("nAyT")
var b=s("jtGx")
var w=s("E+IV")
var v=s("/UXv")
var k=s("sTNg")
var z=s("TstA")
var y=s("BTe1")
var x=s("J2CL")
function B(e){var i=e.colors,s=e.typography,n=e.borders,t=e.spacing,a=e.forms
return{fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,borderWidth:n.widthSmall,borderStyle:n.style,borderColor:i.borderMedium,borderRadius:n.radiusMedium,iconColor:i.textDarkest,color:i.textDarkest,background:i.backgroundLightest,padding:t.small,focusOutlineWidth:n.widthMedium,focusOutlineStyle:n.style,focusOutlineColor:i.borderBrand,errorBorderColor:i.borderDanger,errorOutlineColor:i.borderDanger,placeholderColor:i.textDark,smallFontSize:s.fontSizeSmall,smallHeight:a.inputHeightSmall,mediumFontSize:s.fontSizeMedium,mediumHeight:a.inputHeightMedium,largeFontSize:s.fontSizeLarge,largeHeight:a.inputHeightLarge}}B.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
s.d(i,"a",(function(){return I}))
var S,q,H,M,O
var j={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::-ms-input-placeholder,input[type].qBMHb_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var I=(S=Object(p["a"])("7.0.0",{label:"renderLabel",disabled:"interaction",readOnly:"interaction",required:"isRequired",inline:"display"}),q=Object(x["themeable"])(B,j),S(H=q(H=(O=M=function(e){Object(d["a"])(i,e)
function i(e){var s
Object(a["a"])(this,i)
s=Object(r["a"])(this,Object(l["a"])(i).call(this))
s.handleInputRef=function(e){s._input=e
s.props.inputRef(e)}
s.handleChange=function(e){s.props.onChange(e,e.target.value)}
s.handleBlur=function(e){s.props.onBlur(e)
s.setState({hasFocus:false})}
s.handleFocus=function(e){s.props.onFocus(e)
s.setState({hasFocus:true})}
s.state={hasFocus:false}
s._defaultId=Object(y["a"])("TextInput")
s._messagesId=Object(y["a"])("TextInput-messages")
return s}Object(o["a"])(i,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var i=this.props,s=i.type,a=i.size,o=i.textAlign,r=i.placeholder,l=i.value,d=i.defaultValue,_=i.disabled,u=i.readOnly,g=i.interaction,m=i.required,h=i.isRequired,p=Object(t["a"])(i,["type","size","textAlign","placeholder","value","defaultValue","disabled","readOnly","interaction","required","isRequired"])
var w=Object(b["b"])(p)
var v=(e={},Object(n["a"])(e,j.input,true),Object(n["a"])(e,j[a],a),Object(n["a"])(e,j["textAlign--".concat(o)],o),e)
var k=""
w["aria-describedby"]&&(k="".concat(w["aria-describedby"]))
this.hasMessages&&(k=""!==k?"".concat(k," ").concat(this._messagesId):this._messagesId)
return c.a.createElement("input",Object.assign({},w,{className:f()(v),defaultValue:d,value:l,placeholder:r,ref:this.handleInputRef,type:s,id:this.id,required:h||m,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===g||_,readOnly:"readonly"===g||u,"aria-describedby":""!==k?k:null,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var i=this.props,s=i.interaction,t=i.disabled,a=i.width,o=i.inline,r=i.display,l=i.label,d=i.renderLabel,_=i.renderBeforeInput,u=i.renderAfterInput,g=i.messages,m=i.inputContainerRef,h=i.icon
var p=_||u||h
var b=(e={},Object(n["a"])(e,j.facade,true),Object(n["a"])(e,j.disabled,"disabled"===s||t),Object(n["a"])(e,j.invalid,this.invalid),Object(n["a"])(e,j.focused,this.state.hasFocus),e)
return c.a.createElement(k["FormField"],{id:this.id,label:Object(w["a"])(d||l),messagesId:this._messagesId,messages:g,inline:"inline-block"===r||o,width:a,inputContainerRef:m,layout:this.props.layout},c.a.createElement("span",{className:f()(b)},p?c.a.createElement(z["a"],{wrap:"wrap"},_&&c.a.createElement(z["a"].Item,{padding:"0 0 0 small"},Object(w["a"])(_)),c.a.createElement(z["a"].Item,{shouldGrow:true,shouldShrink:true},c.a.createElement(z["a"],{__dangerouslyIgnoreExperimentalWarnings:true},c.a.createElement(z["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(u||h)&&c.a.createElement(z["a"].Item,{padding:"0 small 0 0"},u?Object(w["a"])(u):Object(w["a"])(h))))):this.renderInput()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
i.displayName="TextInput"
return i}(_["Component"]),M.propTypes={renderLabel:g.a.oneOfType([g.a.node,g.a.func]),type:g.a.oneOf(["text","email","url","tel","search","password"]),id:g.a.string,value:Object(h["a"])(g.a.string),defaultValue:g.a.string,interaction:g.a.oneOf(["enabled","disabled","readonly"]),messages:g.a.arrayOf(k["FormPropTypes"].message),size:g.a.oneOf(["small","medium","large"]),textAlign:g.a.oneOf(["start","center"]),width:g.a.string,display:g.a.oneOf(["inline-block","block"]),placeholder:g.a.string,isRequired:g.a.bool,inputRef:g.a.func,inputContainerRef:g.a.func,renderBeforeInput:g.a.oneOfType([g.a.node,g.a.func]),renderAfterInput:g.a.oneOfType([g.a.node,g.a.func]),onChange:g.a.func,onBlur:g.a.func,onFocus:g.a.func,icon:g.a.func,label:g.a.oneOfType([g.a.node,g.a.func]),disabled:g.a.bool,readOnly:g.a.bool,required:g.a.bool,inline:g.a.bool},M.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:"enabled",isRequired:false,value:void 0,defaultValue:void 0,display:"block",placeholder:void 0,width:void 0,size:"medium",textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,i){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},O))||H)||H)},rWGD:function(e,i,s){"use strict"
var n=s("pQTu")
var t=s("m0r6")
Object(t["a"])(JSON.parse('{"ar":{"click_here_to_download_size_of_file_74443988":"انقر هنا للتنزيل %{size_of_file}","download_assignment_submissions_41e50ee7":"تنزيل عمليات إرسال المهمة","excused_cf8792eb":"ليس إجباري","submissions":{"creating_zip":"جارٍ إنشاء الملف المضغوط...","download_submissions_title":"تنزيل عمليات إرسال المهمة","finished_redirecting":"انتهى!  جارٍ إعادة التوجيه إلى الملف...","gathering_files":"جارٍ تجميع الملفات (%{progress})...","gathering_files_progress":"يجري تجميع الملفات (%{progress})...","see_attached_files":"انظر الملفات المرفقة"}},"cy":{"click_here_to_download_size_of_file_74443988":"Cliciwch yma i lwytho i lawr %{size_of_file}","download_assignment_submissions_41e50ee7":"Llwytho’r aseiniadau sydd wedi’u cyflwyno i lawr","excused_cf8792eb":"Wedi esgusodi","submissions":{"creating_zip":"Wrthi’n creu ffeil .zip...","download_submissions_title":"Llwytho’r aseiniadau sydd wedi’u cyflwyno i lawr","finished_redirecting":"Wedi gorffen!  Wrthi’n ailgyfeirio i ffeil...","gathering_files":"Wrthi’n casglu ffeiliau (%{progress})...","gathering_files_progress":"Wrthi’n casglu ffeiliau (%{progress})...","see_attached_files":"Gweler y ffeiliau sydd wedi’u hatodi"}},"da":{"click_here_to_download_size_of_file_74443988":"Klik her for at downloade %{size_of_file}","download_assignment_submissions_41e50ee7":"Download opgaveafleveringer","excused_cf8792eb":"Undskyldt","submissions":{"creating_zip":"Opretter zip-fil ...","download_submissions_title":"Download opgaveafleveringer","finished_redirecting":"Færdig! Omdirigerer til fil ...","gathering_files":"Samler filer (%{progress})...","gathering_files_progress":"Samler filer (%{progress})...","see_attached_files":"Se vedhæftede filer"}},"da-x-k12":{"click_here_to_download_size_of_file_74443988":"Klik her for at downloade %{size_of_file}","download_assignment_submissions_41e50ee7":"Download opgaveafleveringer","excused_cf8792eb":"Undskyldt","submissions":{"creating_zip":"Opretter zip-fil ...","download_submissions_title":"Download opgaveafleveringer","finished_redirecting":"Færdig! Omdirigerer til fil ...","gathering_files":"Samler filer (%{progress})...","gathering_files_progress":"Samler filer (%{progress})...","see_attached_files":"Se vedhæftede filer"}},"de":{"click_here_to_download_size_of_file_74443988":"Zum Herunterladen hier klicken %{size_of_file}","download_assignment_submissions_41e50ee7":"Aufgabenabgaben herunterladen","excused_cf8792eb":"Entschuldigt","submissions":{"creating_zip":"Zip-Datei wird erstellt ...","download_submissions_title":"Aufgabenabgaben herunterladen","finished_redirecting":"Fertig! Weiterleitung in Datei ...","gathering_files":"Dateien sammeln (%{progress}) ...","gathering_files_progress":"Dateien sammeln (%{progress}) ...","see_attached_files":"Siehe angehängte Dateien"}},"el":{"excused_cf8792eb":"Δικαιολογημένος/η","submissions":{"creating_zip":"Δημιουργία αρχείου zip...","download_submissions_title":"Λήψη των Υποβολών Εργασιών","finished_redirecting":"\\u003cmrk mid=\\"3115\\" mtype=\\"seg\\"\\u003eΟλοκληρώθηκε!\\u003c/mrk\\u003e  \\u003cmrk mid=\\"3116\\" mtype=\\"seg\\"\\u003eΑνακατεύθυνση στο Αρχείο...\\u003c/mrk\\u003e","gathering_files":"Συγκέντρωση Αρχείων (%{progress})...","gathering_files_progress":"Συγκέντρωση Αρχείων (%{progress})...","see_attached_files":"Δείτε τα επισυναπτόμενα αρχεία"}},"en-AU":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download Assignment Submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download Assignment Submissions","finished_redirecting":"Finished!  Redirecting to File...","gathering_files":"Gathering Files (%{progress})...","gathering_files_progress":"Gathering Files (%{progress})...","see_attached_files":"See attached files"}},"en-AU-x-unimelb":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download Assignment Submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download Assignment Submissions","finished_redirecting":"Finished!  Redirecting to File...","gathering_files":"Gathering Files (%{progress})...","gathering_files_progress":"Gathering Files (%{progress})...","see_attached_files":"See attached files"}},"en-CA":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download Assignment Submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download Assignment Submissions","finished_redirecting":"Finished!  Redirecting to File...","gathering_files":"Gathering Files (%{progress})...","gathering_files_progress":"Gathering Files (%{progress})...","see_attached_files":"See attached files"}},"en-GB":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download assignment submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download assignment submissions","finished_redirecting":"Finished!  Redirecting to file...","gathering_files":"Gathering files (%{progress})...","gathering_files_progress":"Gathering files (%{progress})...","see_attached_files":"See attached files"}},"en-GB-x-lbs":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download task submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download task submissions","finished_redirecting":"Finished!  Redirecting to file...","gathering_files":"Gathering files (%{progress})...","gathering_files_progress":"Gathering files (%{progress})...","see_attached_files":"See attached files"}},"en-GB-x-ukhe":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download assignment submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download assignment submissions","finished_redirecting":"Finished!  Redirecting to file...","gathering_files":"Gathering files (%{progress})...","gathering_files_progress":"Gathering files (%{progress})...","see_attached_files":"See attached files"}},"es":{"click_here_to_download_size_of_file_74443988":"Haga clic aquí para descargar %{size_of_file}","download_assignment_submissions_41e50ee7":"Descargar las entregas de tareas","excused_cf8792eb":"Justificado","submissions":{"creating_zip":"Creando un archivo comprimido zip...","download_submissions_title":"Descargar las entregas de tareas","finished_redirecting":"¡Terminado!  Redirigiendo al archivo...","gathering_files":"Recopilando archivos (%{progress})...","gathering_files_progress":"Recopilando archivos (%{progress})...","see_attached_files":"Ver archivos adjuntos"}},"fa":{"click_here_to_download_size_of_file_74443988":"برای بارگیری %{size_of_file} اینجا کلیک کنید","download_assignment_submissions_41e50ee7":"بارگیری تکالیف ارسالی ","excused_cf8792eb":"معاف شد","submissions":{"creating_zip":"درحال ایجاد فایل فشرده...","download_submissions_title":"بارگیری موردهای ارسالی تکلیف","finished_redirecting":"به پایان رسید! در حال تغییر مسیر به فایل ...","gathering_files":"در حال گردآوری فایل ها (%{progress})...","gathering_files_progress":"در حال گردآوری فایل ها (%{progress})...","see_attached_files":"مشاهده فایل های پیوست شده"}},"fi":{"click_here_to_download_size_of_file_74443988":"Napsauta tähän ladataksesi %{size_of_file}","download_assignment_submissions_41e50ee7":"Lataa tehtävän lähetykset","excused_cf8792eb":"Annettu anteeksi","submissions":{"creating_zip":"Luodaan zip-tiedostoa...","download_submissions_title":"Lataa tehtävän lähetykset","finished_redirecting":"Valmis!  Uudelleenohjataan tiedostoon...","gathering_files":"Kerätään tiedostoja (%{progress})...","gathering_files_progress":"Kerätään tiedostoja (%{progress})...","see_attached_files":"Katso liitetyt tiedosto"}},"fr":{"click_here_to_download_size_of_file_74443988":"Cliquez ici pour télécharger %{size_of_file}","download_assignment_submissions_41e50ee7":"Télécharger les envois de travaux","excused_cf8792eb":"Pas obligatoire","submissions":{"creating_zip":"Création d’un fichier zip...","download_submissions_title":"Télécharger les envois de tâches","finished_redirecting":"Terminé. Redirection vers le fichier...","gathering_files":"Collecte des fichiers (%{progress})...","gathering_files_progress":"Collecte des fichiers (%{progress})...","see_attached_files":"Voir les fichiers joints"}},"fr-CA":{"click_here_to_download_size_of_file_74443988":"Cliquez ici pour télécharger %{size_of_file}","download_assignment_submissions_41e50ee7":"Télécharger les envois de tâches","excused_cf8792eb":"Pas obligatoire","submissions":{"creating_zip":"Création d’un fichier zip...","download_submissions_title":"Télécharger les envois de tâches","finished_redirecting":"Terminé. Redirection vers le fichier...","gathering_files":"Collecte des fichiers (%{progress})...","gathering_files_progress":"Collecte des fichiers (%{progress})...","see_attached_files":"Voir les fichiers joints"}},"he":{"click_here_to_download_size_of_file_74443988":"יש להקליק כאן כדי להוריד %{size_of_file}","download_assignment_submissions_41e50ee7":"הורדת הגשות מטלה","excused_cf8792eb":"נסלח","submissions":{"creating_zip":"מכין קובץ זיפ...","download_submissions_title":"הורדת הגשות משימות","finished_redirecting":"נסתיים! מנתב לקובץ...","gathering_files":"אוסף קבצים (%{progress})...","gathering_files_progress":"אוסף קבצים (%{progress})... ","see_attached_files":"ראו קבצים מצורפים"}},"ht":{"click_here_to_download_size_of_file_74443988":"Klike la pou telechaje %{size_of_file}","download_assignment_submissions_41e50ee7":"Telechaje Soumisyon Sesyon","excused_cf8792eb":"Egzante","submissions":{"creating_zip":"Kreyasyon fichye zip...","download_submissions_title":"Telechaje Soumisyon Sesyon","finished_redirecting":"Fini! Redireksyon a Fichye...","gathering_files":"Rasanbleman Fichye (%{progress})...","gathering_files_progress":"Rasanbleman Fichye (%{progress})...","see_attached_files":"Gade fichye atache yo"}},"hu":{"excused_cf8792eb":"Felmentve","submissions":{"creating_zip":"Zip file létrehozása...","download_submissions_title":"Beadott feladatmegoldások letöltése","finished_redirecting":"Befejezve! Átirányítás a fájlhoz...","gathering_files":"Fájlok összegyűjtése (%{progress})...","gathering_files_progress":"Fájlok összegyűjtése (%{progress})...","see_attached_files":"Lásd csatolt fájlok"}},"hy":{"excused_cf8792eb":"Ներված է","submissions":{"creating_zip":"Zip ֆայլ է ստեղծվում...","download_submissions_title":"Ներբեռնել ուղարկված հանձնարարությունները ","finished_redirecting":"Ավարտված է: Անցնել __ֆայլին...","gathering_files":"Ֆայլերի հավաքագրում (%{progress})...","gathering_files_progress":"Ֆայլերի հավաքագրում (%{progress})...","see_attached_files":"Տես կից ֆայլերը"}},"is":{"click_here_to_download_size_of_file_74443988":"Smella hér til að  hlaða niður %{size_of_file}","download_assignment_submissions_41e50ee7":"Hlaða niður skiluðum verkefnum","excused_cf8792eb":"Undanþegið","submissions":{"creating_zip":"Stofna ZIP-skrá...","download_submissions_title":"Hlaða niður skiluðum verkefnum","finished_redirecting":"Búið! Endurbeini á skrá...","gathering_files":"Safna skrám (%{progress})...","gathering_files_progress":"Safna skrám (%{progress})...","see_attached_files":"Sjá viðhengdar skrár"}},"it":{"click_here_to_download_size_of_file_74443988":"Fai clic qui per scaricare %{size_of_file}","download_assignment_submissions_41e50ee7":"Scarica compiti inviati","excused_cf8792eb":"Giustificato","submissions":{"creating_zip":"Creazione file zip in corso...","download_submissions_title":"Scarica consegne compiti","finished_redirecting":"Terminato.  Reindirizzamento al file in corso...","gathering_files":"Raccolta file (%{progress}) in corso...","gathering_files_progress":"Raccolta file (%{progress}) in corso...","see_attached_files":"Vedi file allegati"}},"ja":{"click_here_to_download_size_of_file_74443988":"ここをクリックしてダウンロード%{size_of_file}","download_assignment_submissions_41e50ee7":"課題提出物のダウンロード","excused_cf8792eb":"免除","submissions":{"creating_zip":"zip ファイルを作成しています...","download_submissions_title":"課題提出物のダウンロード","finished_redirecting":"完了しました!ファイルにリダイレクトしています...","gathering_files":"ファイルを収集しています (%{progress})...","gathering_files_progress":"ファイルを収集しています (%{progress})...","see_attached_files":"添付ファイルを参照してください"}},"ko":{"submissions":{"creating_zip":"압축 파일을 만드는 중...","download_submissions_title":"과제 제출물 다운로드","finished_redirecting":"완료됨! 파일로 리디렉트 중...","gathering_files":"파일 수집 중 (%{progress})...","gathering_files_progress":"파일 수집 중 (%{progress})...","see_attached_files":"첨부 파일 보기"}},"mi":{"click_here_to_download_size_of_file_74443988":"Pāwhiri ki konei ki te tiki %{size_of_file}","download_assignment_submissions_41e50ee7":" Tikiake WHakataunga Tāpaetanga","excused_cf8792eb":"Whakawātea","submissions":{"creating_zip":"Te hanga kōnae kōtui ...","download_submissions_title":"tāpaetanga Tikiake whakataunga","finished_redirecting":"Kua oti te! Anō ki Kōnae ...","gathering_files":"Kohikohinga Kōnae (%{progress})...","gathering_files_progress":"Kohikohinga Kōnae (%{progress})...","see_attached_files":"Tirohia te kōnae piri"}},"nb":{"click_here_to_download_size_of_file_74443988":"Trykk her for å laste ned %{size_of_file}","download_assignment_submissions_41e50ee7":"Last ned leverte oppgaver","excused_cf8792eb":"Fritatt","submissions":{"creating_zip":"Lager zip-fil...","download_submissions_title":"Laster ned leverte oppgaver","finished_redirecting":"Ferdig! Omdirigerer til filen...","gathering_files":"Samler filer (%{progress})…","gathering_files_progress":"Samler filer (%{progress})…","see_attached_files":"Se vedlagte filer"}},"nb-x-k12":{"click_here_to_download_size_of_file_74443988":"Klikk her for å laste ned %{size_of_file}","download_assignment_submissions_41e50ee7":"Laster ned leverte oppgaver","excused_cf8792eb":"Fritatt","submissions":{"creating_zip":"Lager zip-fil...","download_submissions_title":"Laster ned leverte oppgaver","finished_redirecting":"Ferdig! Omdirigerer til filen...","gathering_files":"Samler filer (%{progress})…","gathering_files_progress":"Samler filer (%{progress})…","see_attached_files":"Se vedlagte filer"}},"nl":{"click_here_to_download_size_of_file_74443988":"Hier klikken om te downloaden %{size_of_file}","download_assignment_submissions_41e50ee7":"Ingezonden opdracht downloaden","excused_cf8792eb":"Geëxcuseerd!","submissions":{"creating_zip":"Bezig met maken van zip-bestand...","download_submissions_title":"Ingezonden opdracht downloaden","finished_redirecting":"Klaar! Bezig met doorsturen naar bestand...","gathering_files":"Bezig met verzamelen van bestanden (%{progress})...","gathering_files_progress":"Bezig met verzamelen van bestanden (%{progress})...","see_attached_files":"Bijgevoegde bestanden zien"}},"nn":{"click_here_to_download_size_of_file_74443988":"Klikk her for å laste ned %{size_of_file}","download_assignment_submissions_41e50ee7":"Last ned oppgåveinnleveringar","excused_cf8792eb":"Fritak er innvilga","submissions":{"creating_zip":"Opprettar ZIP-fil...","download_submissions_title":"Last ned oppgåveinnleveringar","finished_redirecting":"Fullført.  Omdirigerer til fil...","gathering_files":"Samlar filer (%{progress})...","gathering_files_progress":"Samlar filer (%{progress})...","see_attached_files":"Sjå vedlagde filer"}},"pl":{"click_here_to_download_size_of_file_74443988":"Kliknij tutaj, aby pobrać. %{size_of_file}","download_assignment_submissions_41e50ee7":"Pobierz przesłane zadania","excused_cf8792eb":"Usprawiedliwiony!","submissions":{"creating_zip":"Trwa tworzenie pliku .zip...","download_submissions_title":"Pobierz przesłane zadania","finished_redirecting":"Zakończono!  Trwa przekierowanie do pliku…","gathering_files":"Gromadzenie plików (%{progress})...","gathering_files_progress":"Gromadzenie plików (%{progress})...","see_attached_files":"Zobacz dołączone pliki"}},"pt":{"click_here_to_download_size_of_file_74443988":"Clique aqui para descarregar %{size_of_file}","download_assignment_submissions_41e50ee7":"Descarregar envios de tarefas","excused_cf8792eb":"Desculpado","submissions":{"creating_zip":"Criando arquivo zip...","download_submissions_title":"Descarregar envios de tarefas","finished_redirecting":"finalizado  Redirecionando para o arquivo...","gathering_files":"A reunir os ficheiros (%{progress})...","gathering_files_progress":"A reunir os ficheiros (%{progress})...","see_attached_files":"Consultar arquivos anexos"}},"pt-BR":{"click_here_to_download_size_of_file_74443988":"Clique aqui para baixar %{size_of_file}","download_assignment_submissions_41e50ee7":"Baixar envios de tarefas","excused_cf8792eb":"Dispensado","submissions":{"creating_zip":"Criando arquivo zip...","download_submissions_title":"Baixar envios de tarefas","finished_redirecting":"Concluído!  Redirecionando para o arquivo...","gathering_files":"Reunindo arquivos (%{progress})...","gathering_files_progress":"Reunindo arquivos (%{progress})...","see_attached_files":"Consultar arquivos anexos"}},"ru":{"click_here_to_download_size_of_file_74443988":"Щелкните здесь, чтобы скачать %{size_of_file}","download_assignment_submissions_41e50ee7":"Скачать отправки заданий","excused_cf8792eb":"По уважительной причине","submissions":{"creating_zip":"Создание ZIP-файла...","download_submissions_title":"Скачать отправки заданий","finished_redirecting":"Завершено!  Перенаправление к файлу...","gathering_files":"Сбор файлов (%{progress})...","gathering_files_progress":"Сбор файлов (%{progress})...","see_attached_files":"Смотрите приложенные файлы"}},"sl":{"click_here_to_download_size_of_file_74443988":"Za prenos kliknite tukaj %{size_of_file}","download_assignment_submissions_41e50ee7":"Prenesi oddaje nalog","excused_cf8792eb":"Opravičeno","submissions":{"creating_zip":"Ustvarjanje datoteke .zip ...","download_submissions_title":"Prenesi oddaje nalog","finished_redirecting":"Dokončano.  Preusmerjanje na datoteko ...","gathering_files":"Zbiranje datotek (%{progress}) ...","gathering_files_progress":"Zbiranje datotek (%{progress}) ...","see_attached_files":"Glejte dodane datoteke."}},"sv":{"click_here_to_download_size_of_file_74443988":"Klicka här för att ladda ner %{size_of_file}","download_assignment_submissions_41e50ee7":"Ladda ner uppgiftsinlämningar","excused_cf8792eb":"Ursäktad","submissions":{"creating_zip":"Skapar zipfil ...","download_submissions_title":"Ladda ner uppgiftsinlämningar","finished_redirecting":"Färdig!  Omdirigerar till fil ...","gathering_files":"Hämtar filer (%{progress}) ...","gathering_files_progress":"Hämtar filer (%{progress}) ...","see_attached_files":"Se bifogade filer"}},"sv-x-k12":{"click_here_to_download_size_of_file_74443988":"Klicka här för att ladda ner %{size_of_file}","download_assignment_submissions_41e50ee7":"Ladda ner uppgiftsinlämningar","excused_cf8792eb":"Ursäktad","submissions":{"creating_zip":"Skapar zipfil ...","download_submissions_title":"Ladda ner uppgiftsinlämningar","finished_redirecting":"Färdig!  Omdirigerar till fil ...","gathering_files":"Hämtar filer (%{progress}) ...","gathering_files_progress":"Hämtar filer (%{progress}) ...","see_attached_files":"Se bifogade filer"}},"tr":{"click_here_to_download_size_of_file_74443988":"İndirmek için tıklayın %{size_of_file}","download_assignment_submissions_41e50ee7":"Gönderilen Ödevleri İndir","excused_cf8792eb":"Mazeretli","submissions":{"creating_zip":"zip dosyası oluşturuluyor...","download_submissions_title":"Gönderilen Ödevleri İndir","finished_redirecting":"Tamamlandı! Dosyasına Yönlendiriliyor...","gathering_files":"Dosyalar Toplanıyor (%{progress}%)...","gathering_files_progress":"Dosyalar Toplanıyor (%{progress}%)...","see_attached_files":"Ekli dosyalara bakın"}},"uk":{"click_here_to_download_size_of_file_74443988":"Натисніть тут для завантаження%{size_of_file}","download_assignment_submissions_41e50ee7":"Завантажити подання завдання","excused_cf8792eb":"Виправдано","submissions":{"creating_zip":"Створюється zip-архів...","download_submissions_title":"Завантажити відправлені завдання","finished_redirecting":"Готово! Перенаправлення до файлу ...","gathering_files":"Збір файлів (%{progress})...","gathering_files_progress":"Збір файлів (%{progress})...","see_attached_files":"Передивитись прикріплені файли"}},"zh-Hans":{"click_here_to_download_size_of_file_74443988":"单击此处下载%{size_of_file}","download_assignment_submissions_41e50ee7":"下载作业提交项","excused_cf8792eb":"已免除","submissions":{"creating_zip":"正在创建 zip 文件...","download_submissions_title":"下载作业提交文件","finished_redirecting":"已完成！正在重定向至文件...","gathering_files":"正在收集文件 (%{progress})...","gathering_files_progress":"正在收集文件 (%{progress})...","see_attached_files":"查看附件文件"}},"zh-Hant":{"click_here_to_download_size_of_file_74443988":"按下此處下載%{size_of_file}","download_assignment_submissions_41e50ee7":"下載作業提交項目","excused_cf8792eb":"已免除","submissions":{"creating_zip":"正在創建 zip 文檔...","download_submissions_title":"下載作業提交件","finished_redirecting":"已完成！重定向到文檔...","gathering_files":"正在收集文檔 (%{progress})...","gathering_files_progress":"正在收集文檔 (%{progress})...","see_attached_files":"見所附文檔"}}}'))
s("jQeR")
s("0sPK")
i["a"]=n["default"].scoped("submissions")}}])

//# sourceMappingURL=submissions-c-f02c6e3afc.js.map