!function(e){function p(a,c){var b=!1,d=!0,f=a.document,h=f.documentElement,m=f.addEventListener?"addEventListener":"attachEvent",e=f.addEventListener?"removeEventListener":"detachEvent",g=f.addEventListener?"":"on",k=function(d){"readystatechange"==d.type&&"complete"!=f.readyState||(("load"==d.type?a:f)[e](g+d.type,k,!1),b||!(b=!0)||c.call(a,d.type||d))},l=function(){try{h.doScroll("left")}catch(q){return void setTimeout(l,50)}k("poll")};if("complete"==f.readyState)c.call(a,"lazy");else{if(f.createEventObject&&
h.doScroll){try{d=!a.frameElement}catch(q){}d&&l()}f[m](g+"DOMContentLoaded",k,!1);f[m](g+"readystatechange",k,!1);a[m](g+"load",k,!1)}}var h=e.document,k="cbinstance",g={merge:function(){var a,c={},b=0,d=arguments.length;if(0===d)return c;for(;d>b;b++)for(a in arguments[b])arguments[b].hasOwnProperty(a)&&(c[a]=arguments[b][a]);return c},str2bool:function(a){switch(a=""+a,a.toLowerCase()){case "false":case "no":case "0":case "":return!1;default:return!0}},fade_in:function(a){1>a.style.opacity&&(a.style.opacity=
(parseFloat(a.style.opacity)+.05).toFixed(2),e.setTimeout(function(){g.fade_in(a)},50))},get_data_attribs:function(a){var c={};if(a.hasOwnProperty("dataset"))c=a.dataset;else{var b;a=a.attributes;for(b in a)if(a.hasOwnProperty(b)){var d=a[b];if(/^data-/.test(d.name)){var f=g.camelize(d.name.substr(5));c[f]=d.value}}}return c},camelize:function(a){for(var c=a.indexOf("-");-1!=c;){var b=c===a.length-1;c=b?"":a[c+1];var d=c.toUpperCase();a=a.replace(b?"-":"-"+c,d);c=a.indexOf("-")}return a},find_script_by_id:function(a){for(var c=
h.getElementsByTagName("script"),b=0,d=c.length;d>b;b++)if(a===c[b].id)return c[b];return null}},l=g.find_script_by_id("cookiebanner"),n=e.Cookiebanner=function(a){this.init(a)};n.prototype={cookiejar:{get:function(a){return decodeURIComponent(h.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},set:function(a,c,b,d,f,g){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var e="";if(b)switch(b.constructor){case Number:e=
1/0===b?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+b;break;case String:e="; expires="+b;break;case Date:e="; expires="+b.toUTCString()}return h.cookie=encodeURIComponent(a)+"="+encodeURIComponent(c)+e+(f?"; domain="+f:"")+(d?"; path="+d:"")+(g?"; secure":""),!0},has:function(a){return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(h.cookie)},remove:function(a,c,b){return a&&this.has(a)?(h.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+
(b?"; domain="+b:"")+(c?"; path="+c:""),!0):!1}},init:function(a){this.test_mode=this.closed=this.inserted=!1;if(this.default_options={cookie:"cookiebanner-accepted",closeText:"&#10006;",cookiePath:"/",debug:!1,expires:1/0,zindex:255,mask:!1,maskOpacity:.5,maskBackground:"#000",height:"auto",minHeight:"21px",bg:"#000",fg:"#ddd",link:"#aaa",position:"bottom",message:"We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",linkmsg:"Learn more",moreinfo:"http://aboutcookies.org",
effect:null,instance:k},this.options=this.default_options,this.script_el=l,this.script_el){var c=g.get_data_attribs(this.script_el);this.options=g.merge(this.options,c)}a&&(this.options=g.merge(this.options,a));k=this.options.instance;this.options.zindex=parseInt(this.options.zindex,10);this.options.mask=g.str2bool(this.options.mask);"string"==typeof this.options.expires&&"function"==typeof e[this.options.expires]&&(this.options.expires=e[this.options.expires]);"function"==typeof this.options.expires&&
(this.options.expires=this.options.expires());this.script_el&&this.run()},log:function(){"undefined"!=typeof console&&console.log.apply(console,arguments)},run:function(){if(!this.agreed()){var a=this;p(e,function(){a.insert()})}},build_viewport_mask:function(){var a=null;if(!0===this.options.mask){a=this.options.maskOpacity;a='<div id="cookiebanner-mask" style="position:fixed;top:0;left:0;width:100%;height:100%;background:'+this.options.maskBackground+";zoom:1;filter:alpha(opacity="+100*a+");opacity:"+
a+";z-index:"+this.options.zindex+';"></div>';var c=h.createElement("div");c.innerHTML=a;a=c.firstChild}return a},agree:function(){return this.cookiejar.set(this.options.cookie,1,this.options.expires,this.options.cookiePath),!0},agreed:function(){return this.cookiejar.has(this.options.cookie)},close:function(){return this.inserted&&(this.closed||(this.element&&h.body.removeChild(this.element),this.element_mask&&h.body.removeChild(this.element_mask),this.closed=!0)),this.closed},agree_and_close:function(){return this.agree(),
this.close()},cleanup:function(){return this.close(),this.unload()},unload:function(){return this.script_el&&this.script_el.parentNode.removeChild(this.script_el),e[k]=void 0,!0},insert:function(){function a(a,b,c){a[a.addEventListener?"addEventListener":"attachEvent"]((a.addEventListener?"":"on")+b,c,!1)}this.element_mask=this.build_viewport_mask();var c=this.options.zindex;this.element_mask&&(c+=1);var b=h.createElement("div");b.className="cookiebanner";b.style.position="fixed";b.style.left=0;b.style.right=
0;b.style.height=this.options.height;b.style.minHeight=this.options.minHeight;b.style.zIndex=c;b.style.background=this.options.bg;b.style.color=this.options.fg;b.style.lineHeight=b.style.minHeight;b.style.padding="5px 16px";b.style.fontFamily="arial, sans-serif";b.style.fontSize="14px";"top"===this.options.position?b.style.top=0:b.style.bottom=0;b.innerHTML='<p style="display:inline;line-height:35px;">'+this.options.message+'<a title="En savoir plus sur les cookies (Nouvelle fen\u00eatre)">'+this.options.linkmsg+
'</a></p><div class="cookiebanner-close" style="float:right;padding-left:5px;"><button title="Fermer la banni\u00e8re concernant les cookies">'+this.options.closeText+"</button></div>";this.element=b;c=b.getElementsByTagName("a")[0];c.href=this.options.moreinfo;c.target="_blank";c.style.textDecoration="none";c.style.color=this.options.link;b=b.getElementsByTagName("div")[0];b.style.cursor="pointer";var d=this;a(b,"click",function(){d.agree_and_close()});this.element_mask&&(a(this.element_mask,"click",
function(){d.agree_and_close()}),h.body.appendChild(this.element_mask));h.body.appendChild(this.element);this.inserted=!0;"fade"===this.options.effect?(this.element.style.opacity=0,g.fade_in(this.element)):this.element.style.opacity=1}};l&&(e[k]||(e[k]=new n))}(window);
