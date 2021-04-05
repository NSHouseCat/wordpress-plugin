(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e474f28c"],{1495:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("idx-block",{attrs:{id:e.id,className:e.className}},[r("idx-block",{attrs:{tag:"main",className:"section__content"}},[r("h1",[e._v(e._s(e.title))]),e._t("default")],2),e.$slots.related?r("idx-block",{attrs:{tag:"aside",className:"section__content"}},[e._t("related")],2):e._e()],1)},n=[],s=(r("a15b"),r("ac1f"),r("1276"),{name:"two-column",props:{title:{type:String,required:!0}},computed:{id:function(){return this.title.toLowerCase().split(" ").join("-")},className:function(){return{section:!0,"section--two-column":!!this.$slots.related}}}}),o=s,i=(r("32f5"),r("2877")),l=Object(i["a"])(o,a,n,!1,null,null,null);t["a"]=l.exports},"1e0b":function(e,t,r){},"32f5":function(e,t,r){"use strict";r("b19e")},"480b":function(e,t,r){"use strict";r("d4c1")},a633:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TwoColumn",{attrs:{title:"IMPress Agents Settings"},scopedSlots:e._u([{key:"related",fn:function(){return[r("RelatedLinks",{attrs:{relatedLinks:e.links}})]},proxy:!0}])},[r("idx-block",{attrs:{className:"form-content"}},[r("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" Enable "),r("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.localStateValues.enabled,disabled:e.formDisabled,label:"Enable IMPress Listings"},on:{toggle:e.enablePlugin}})],1),e.enabled?[r("AgentsSettings",e._b({attrs:{formDisabled:e.formDisabled},on:{"form-field-update":e.formUpdate}},"AgentsSettings",e.localStateValues,!1)),r("idx-button",{attrs:{size:"lg"},on:{click:e.save}},[e._v("Save")])]:e._e()],2)],1)},n=[],s=r("5530"),o=r("2f62"),i=r("12e8"),l=r("bce2"),c=r("1495"),u=r("b387"),d=r("b939"),f=r("bb2b"),m=i["a"].agentSettings.repo,p={inject:[m],mixins:[u["a"],d["a"]],components:{AgentsSettings:l["a"],RelatedLinks:f["a"],TwoColumn:c["a"]},data:function(){return{formDisabled:!1}},computed:Object(s["a"])({},Object(o["d"])({enabled:function(e){return e.agentSettings.enabled}})),methods:{enablePlugin:function(){this.enablePluginAction(this[m])},save:function(){this.saveHandler(this[m])}},created:function(){this.module="agentSettings",this.links=[{text:"IMPress Agents Features",href:"#"},{text:"IDX Broker Middleware",href:"https://middleware.idxbroker.com/mgmt/"},{text:"Sign up for IDX Broker",href:"https://signup.idxbroker.com/"}],this.enabled&&this.loadData(this[m])}},b=p,h=r("2877"),g=Object(h["a"])(b,a,n,!1,null,null,null);t["default"]=g.exports},a762:function(e,t,r){"use strict";r("1e0b")},b19e:function(e,t,r){},b387:function(e,t,r){"use strict";r("b64b");var a=r("ade3"),n=r("5530");t["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.$store.state[this.module]),this.formChanges),this.$store.state.guidedSetup[this.module].changes)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var t=Object(a["a"])({},e.key,e.value);this.formChanges=Object(n["a"])(Object(n["a"])({},this.formChanges),t)}},beforeRouteLeave:function(e,t,r){if(this.formIsUpdated){var a=window.confirm("Do you really want to leave? You have unsaved changes!");a?r():r(!1)}else r()}}},b939:function(e,t,r){"use strict";r("96cf");var a=r("1da1");t["a"]={data:function(){return{formDisabled:!1}},methods:{loadData:function(e){var t=arguments,r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",r.formDisabled=!0,a.prev=2,a.next=5,e.get(n);case 5:s=a.sent,o=s.data,r.updateState(o),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](2),r.errorAction();case 13:r.formDisabled=!1;case 14:case"end":return a.stop()}}),a,null,[[2,10]])})))()},updateState:function(e){for(var t in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:t,value:e[t]})},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},saveAction:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=""===t?"Changes Saved":t,this.updateState(this.formChanges),this.formChanges={},this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!1,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:t}})}),3e3)},errorAction:function(){var e=this,t="We're experiencing a problem, please try again";this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!0,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!0,text:t}})}),3e3)},saveHandler:function(e){var t=arguments,r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,s,o,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",s=t.length>2&&void 0!==t[2]?t[2]:r.formChanges,o=t.length>3&&void 0!==t[3]?t[3]:"",r.formDisabled=!0,a.prev=4,a.next=7,e.post(s,n);case 7:i=a.sent,l=i.status,204===l?r.saveAction(o):r.errorAction(),r.formDisabled=!1,a.next=22;break;case 13:if(a.prev=13,a.t0=a["catch"](4),r.formDisabled=!1,401!==a.t0.response.status){a.next=21;break}return r.errorAction(),a.abrupt("return",!1);case 21:r.errorAction();case 22:return a.abrupt("return",!0);case 23:case"end":return a.stop()}}),a,null,[[4,13]])})))()},enablePluginAction:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.formDisabled=!0,r.prev=1,t.formUpdate({key:"enabled",value:!t.enabled}),r.next=5,e.post({enabled:!t.enabled},"enable");case 5:a=r.sent,n=a.status,204===n?location.reload():t.errorAction(),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),t.errorAction();case 13:t.formDisabled=!1;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()}}}},bb2b:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("idx-card",[r("idx-card-header",[e._v(e._s(e.title))]),r("idx-card-body",[r("idx-list",{attrs:{unstyled:""}},e._l(e.relatedLinks,(function(t){return r("idx-list-item",{key:t.href},[r("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])])})),1)],1)],1)},n=[],s={name:"RelatedLinks",props:{title:{type:String,default:"Related Links"},relatedLinks:{type:Array,default:function(){return[]}}}},o=s,i=(r("a762"),r("2877")),l=Object(i["a"])(o,a,n,!1,null,"c94edb7e",null);t["a"]=l.exports},bce2:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("idx-block",{attrs:{tag:"fieldset",className:{"form-content":!0,"form-content--disabled":e.formDisabled}}},[r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("CSS Settings")]),r("p",[e._v("Here you can deregister the IMPress Agents CSS files and move to your theme's css file for ease of customization.")])],1),r("idx-form-group",[r("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.cssLabel)+" "),r("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.deregisterMainCss,disabled:e.formDisabled,label:e.cssLabel},on:{toggle:function(t){return e.$emit("form-field-update",{key:"deregisterMainCss",value:!e.deregisterMainCss})}}})],1)],1),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Default Number of Posts")]),r("p",[e._v(" The default number of posts displayed on a employee archive page is 9. Here you can set a custom number. Enter -1 to display all employee posts. "),r("i",[e._v("If you have more than 20-30 posts, it's not recommended to show all or your page will load slow.")])])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"number-of-posts"}},[e._v("Default Number of Posts")]),r("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"number-of-posts",value:e.numberOfPosts},on:{change:function(t){return e.$emit("form-field-update",{key:"numberOfPosts",value:t.target.value})}}})],1),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Directory Slug")]),r("p",[e._v(" Optionally change the slug of the employee post type. Don't forget to "),r("a",{attrs:{href:"../wp-admin/options-permalink.php",target:"_blank"}},[e._v(" reset your permalinks ")]),e._v(" if you change the slug! ")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"directory-slug"}},[e._v("Directory Slug")]),r("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"directory-slug",value:e.directorySlug},on:{change:function(t){return e.$emit("form-field-update",{key:"directorySlug",value:t.target.value})}}})],1),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Custom Wrapper")]),r("p",[e._v("Detailed sentence or two describing how custom wrappers can be used and how to set them up properly.")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"wrapper-start"}},[e._v("Wrapper Start HTML")]),r("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"wrapper-start",value:e.wrapperStart},on:{change:function(t){return e.$emit("form-field-update",{key:"wrapperStart",value:t.target.value})}}})],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"wrapper-end"}},[e._v("Wrapper End HTML")]),r("idx-form-input",{attrs:{type:"text",disabled:e.formDisabled,id:e.$idxStrap.prefix+"wrapper-end",value:e.wrapperEnd},on:{change:function(t){return e.$emit("form-field-update",{key:"wrapperEnd",value:t.target.value})}}})],1)],1)},n=[],s=(r("a9e3"),{name:"agentSettings",props:{deregisterMainCss:{type:Boolean,default:!1},numberOfPosts:{type:[String,Number],default:""},directorySlug:{type:String,default:"employees"},wrapperStart:{type:String,default:""},wrapperEnd:{type:String,default:""},formDisabled:{type:Boolean,default:!1}},created:function(){this.cssLabel="Deregister IMPress Agents Main CSS?"}}),o=s,i=(r("480b"),r("2877")),l=Object(i["a"])(o,a,n,!1,null,null,null);t["a"]=l.exports},d4c1:function(e,t,r){}}]);
//# sourceMappingURL=chunk-e474f28c.dc01f54e.js.map