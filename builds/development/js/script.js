(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * Bootstrap v3.0.1 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


jQuery(function($) {

    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 

    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });

    /*==========================================
  PARALLAX SCRIPTS
   =====================================================*/

    
    $('.parallax').scrolly({ bgParallax: true });

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/
	$(function(){
		$("#galeria-fotos").elastic_grid({
		'filterEffect': '<a href="http://www.jqueryscript.net/tags.php?/moveup/">moveup</a>', // moveup, scaleup, fallperspective, fly, flip, helix , popup
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 500,
		'items' :
		[
		{
		'title' : 'Taules fixes de coworking',
		'description'   : 'Un espai per treballar a gust i deixar les teves coses amb total tranquil•litat.<br><br>La Taula Gran Fixe ofereix la possibilitat de ser compartida per només 50€ més, així que entre dos Coworkers pagaríeu 199€/mes. <br><br>Taula Gran Fixa: 149€/mes<br>Taula Petita Fixa: 129€/mes<br><br>Day Pass: 10€/persona',
		'thumbnail' : ['assets/img/espai/small1.jpg'],
		'large' : ['assets/img/espai/large1.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Taules flex',
		'description'   : 'Les taules pels Coworkers més inquiets. Amb un horari de 9h a 19h per treballar i amb un espai on deixar les coses si vols que te les guardem. <br><br>Gaudiràs de la llum natural que entra per la claraboia de la sala. <br><br>99€/mes<br><br>Day Pass: 10€/persona',
		'thumbnail' : ['assets/img/espai/small6.jpg'],
		'large' : ['assets/img/espai/large6.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Sala polivalent',
		'description'   : "Aquesta Sala ens permet fer les activitats per la millora de les habilitats professionals i el foment del Coworking. Fem anglès, xerrades, cafè networking... <br><br>També hi ha possibilitat de llogar-la per 25€/h i poder fer la teva activitat. <br><br>Tenim de tot: TV, Wi-Fi, Taules, Cadires, Nevera, Pissarra, Llum Natural...",
		'thumbnail' : ['assets/img/espai/small5.jpg'],
		'large' : ['assets/img/espai/large5.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Entrada del local i sala de reunions',
		'description'   : "Només entrar rebràs una calorosa benvinguda. A la imatge pots veure que tenim una sala de reunions separada de la resta del Coworking per tal d'oferir l'espai necessari per poder reunir-te amb total tranquil•litat.",
		'thumbnail' : ['assets/img/espai/small7.jpg'],
		'large' : ['assets/img/espai/large7.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Sala de reunions',
		'description'   : 'Amb capacitat per a 6 persones la Sala de Reunions està equipada amb el necessari per fer reunions. <br><br>Si no ets Coworker però la vols llogar, ho pots fer per només 10€/h. <br><br>És important que ens aviseu quan la voleu utilitzar per saber si està disponible. <br><br>Els Coworkers la poden utilitzar sempre que vulguin.',
		'thumbnail' : ['assets/img/espai/small8.jpg'],
		'large' : ['assets/img/espai/large8.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'La terrassa',
		'description'   : 'Espai perfecte per desconnectar un moment, xerrar amb els altres coworkers o simplement fer un cafè. <br><br>Els esmorzars en aquest petit racó donen energia per tot el dia.',
		'thumbnail' : ['assets/img/espai/small3.jpg'],
		'large' : ['assets/img/espai/large3.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Office',
		'description'   : 'Aquí trobaràs tot el necessari per preparar el teu menjar, fer-te un café i netejar els tuppers. <br><br>Entre els Coworkers compartim estones de dinar, tenim detalls com pastissets o pica pica i a vegades el 7dos convida a una cervesa.',
		'thumbnail' : ['assets/img/espai/small4.jpg'],
		'large' : ['assets/img/espai/large4.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		},
		{
		'title' : 'Zona chill-out',
		'description'   : 'Al 7dos també tens a la teva disposició una zona per descansar i desconnectar, per poder tornar #ambganes al teu projecte.',
		'thumbnail' : ['assets/img/espai/small2.jpg'],
		'large' : ['assets/img/espai/large2.jpg'],
		'button_list'   :
		[
		{ 'title':'Tarifes', 'url' : '#about-section' },
		{ 'title':'On estem?', 'url':'#segueixnos-section'}
		],
		'tags'  : ['Coworking']
		}
		 
		]
		});
		});

});
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
    setup: function() {
        $( this ).on( "resize", $special.handler );
    },
    teardown: function() {
        $( this ).off( "resize", $special.handler );
    },
    handler: function( event, execAsap ) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function() {
                // set correct event type
                event.type = "debouncedresize";
                $event.dispatch.apply( context, args );
            };

        if ( resizeTimeout ) {
            clearTimeout( resizeTimeout );
        }

        execAsap ?
            dispatch() :
            resizeTimeout = setTimeout( dispatch, $special.threshold );
    },
    threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
    var $this = this,
        deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
        hasNotify = $.isFunction(deferred.notify),
        $images = $this.find('img').add( $this.filter('img') ),
        loaded = [],
        proper = [],
        broken = [];

    // Register deferred callbacks
    if ($.isPlainObject(callback)) {
        $.each(callback, function (key, value) {
            if (key === 'callback') {
                callback = value;
            } else if (deferred) {
                deferred[key](value);
            }
        });
    }

    function doneLoading() {
        var $proper = $(proper),
            $broken = $(broken);

        if ( deferred ) {
            if ( broken.length ) {
                deferred.reject( $images, $proper, $broken );
            } else {
                deferred.resolve( $images );
            }
        }

        if ( $.isFunction( callback ) ) {
            callback.call( $this, $images, $proper, $broken );
        }
    }

    function imgLoaded( img, isBroken ) {
        // don't proceed if BLANK image, or image is already loaded
        if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
            return;
        }

        // store element in loaded images array
        loaded.push( img );

        // keep track of broken and properly loaded images
        if ( isBroken ) {
            broken.push( img );
        } else {
            proper.push( img );
        }

        // cache image and its state for future calls
        $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

        // trigger deferred progress method if present
        if ( hasNotify ) {
            deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
        }

        // call doneLoading and clean listeners if all images are loaded
        if ( $images.length === loaded.length ){
            setTimeout( doneLoading );
            $images.unbind( '.imagesLoaded' );
        }
    }

    // if no images, trigger immediately
    if ( !$images.length ) {
        doneLoading();
    } else {
        $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
            // trigger imgLoaded
            imgLoaded( event.target, event.type === 'error' );
        }).each( function( i, el ) {
            var src = el.src;

            // find out if this image has been already checked for status
            // if it was, and src has not changed, call imgLoaded on it
            var cached = $.data( el, 'imagesLoaded' );
            if ( cached && cached.src === src ) {
                imgLoaded( el, cached.isBroken );
                return;
            }

            // if complete is true and browser supports natural sizes, try
            // to check for image status manually
            if ( el.complete && el.naturalWidth !== undefined ) {
                imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                return;
            }

            // cached images don't fire load sometimes, so we reset src, but only when
            // dealing with IE, or image is complete (loaded) and failed manual check
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            if ( el.readyState || el.complete ) {
                el.src = BLANK;
                el.src = src;
            }
        });
    }

    return deferred ? deferred.promise( $this ) : $this;
};

/**
 * jquery elastic_grid
 *
 * Copyright 2013, vukhanhtruong
 * http://www.bonchen.net
 */
$(function() {
    $.elastic_grid = {
        version: '1.0'
    };
    $.fn.elastic_grid = function(config){
        config = $.extend({}, {
            items: null,
            filterEffect: '',
            hoverDirection: true,
            hoverDelay: 0,
            hoverInverse: false,
            expandingHeight: 500,
            expandingSpeed: 300,
            callback: function() {}
        }, config);

        // initial container object
        var container = $(this);
        // number of questions
        var numOfItems = config.items.length;
        if(numOfItems == 0){
            return false;
        }

        //initial filter nav
        container.html('<div class="wagwep-container"><nav id="porfolio-nav" class="clearfix"><ul id="portfolio-filter" class="nav nav-tabs clearfix"></ul></nav></div>');

        //initial items
        var gridContent = "";
        var ulObject = $('<ul id="og-grid" class="og-grid"></ul>');
        for (itemIdx = 0; itemIdx < numOfItems; itemIdx++) {
            if(config.items[itemIdx] != undefined){
                var item = config.items[itemIdx];

                //initial new li
                liObject = $('<li></li>');

                //get tags
                tags = item.tags;
                strTag = "";
                for (var i = tags.length - 1; i >= 0; i--) {
                    strTag += ","+tags[i];
                };
                strTag = strTag.substring(1);
                liObject.attr('data-tags', strTag);

                //initial a object
                aObject = $('<a></a>');
                aObject.attr('href', 'javascript:;;');

                //initial default photo
                imgObject = $('<img/>');
                imgObject.attr('src', item.thumbnail[0]);
                imgObject.attr('data-largesrc', item.large[0]);


                //initial hover direction
                spanObject = $('<span></span>');
                spanObject.html(item.title);
                figureObject = $('<figure></figure>');
                figureObject.append(spanObject);

                imgObject.appendTo(aObject);
                figureObject.appendTo(aObject);
                aObject.appendTo(liObject);
                liObject.appendTo(ulObject);
            }
        }
        if(config.filterEffect == ''){
            config.filterEffect = 'moveup';
        }
        ulObject.addClass('effect-'+config.filterEffect);
        ulObject.appendTo(container);
/**************************************************************************
* HOVER DIR
***************************************************************************/
        if(config.hoverDirection == true){
            ulObject.find('li').each( function() {
                $(this).hoverdir({
                    hoverDelay : config.hoverDelay,
                    inverse : config.hoverInverse
                });
            } );
        }

/**************************************************************************
* Tags to filter
***************************************************************************/
    var porfolio_filter = container.find('#portfolio-filter');
    var items = ulObject.find('li'),
    itemsByTags = {};
    numOfTag = 0;

    // Looping though all the li items:

    items.each(function(i){
        var elem = $(this),
        tags = elem.data('tags').split(',');

        // Adding a data-id attribute. Required by the Quicksand plugin:
        elem.attr('data-id',i);

        elem.addClass('all');
        $.each(tags,function(key,value){
            // Removing extra whitespace:
            value = $.trim(value);

            //add class tags to li
            elem.addClass(value.toLowerCase().replace(' ','-'));

            if(!(value in itemsByTags)){
                // Create an empty array to hold this item:
                itemsByTags[value] = [];
                numOfTag++;
            }

            // Each item is added to one array per tag:
            itemsByTags[value].push(elem);
        });

    });

    if(numOfTag > 1){
        // Creating the "Everything" option in the menu:
        createList('All');

        // Looping though the arrays in itemsByTags:
        $.each(itemsByTags,function(k,v){
            createList(k);
        });
    }else{
        porfolio_filter.remove();
    }


    porfolio_filter.find('a').bind('click',function(e){
        //close expanding preview
        $grid.find('li.og-expanded').find('a').trigger('click');
        $grid.find('.og-close').trigger('click');

        $this = $(this);
        $this.css('outline','none');
        porfolio_filter.find('.current').removeClass('current');
        $this.parent().addClass('current');

        var filterVal = $this.text().toLowerCase().replace(' ','-');
        var count  = numOfItems;
        ulObject.find('li').each( function(i, el) {
            classie.remove( el, 'hidden' );
            classie.remove( el, 'animate' );
            if(!--count){
                setTimeout( function() {
                    doAnimateItems(ulObject.find('li'), filterVal);
                }, 1);
            }
        });

        return false;
    });

    function doAnimateItems(objectLi, filterVal){
        objectLi.each(function(i, el) {
            if(classie.has( el, filterVal ) ) {
                classie.toggle( el, 'animate' );
                classie.remove( el, 'hidden' );
            }else{
                classie.add( el, 'hidden' );
                classie.remove( el, 'animate' );
            }
        });
    }

    porfolio_filter.find('li:first').addClass('current');

    function createList(text){
        var filter = text.toLowerCase().replace(' ','-');
        // This is a helper function that takes the
        // text of a menu button and array of li items
        if(text != ''){
            var li = $('<li>');
            var a = $('<a>',{
                html: text,
                'data-filter': '.'+filter,
                href:'#',
                'class':'filter',
            }).appendTo(li);

            li.appendTo(porfolio_filter);
        }
    }
/**************************************************************************
* EXPANDING
***************************************************************************/
        // list of items
        var $grid = ulObject,
            // the items
            $items = $grid.children( 'li' ),
            // current expanded item's index
            current = -1,
            // position (top) of the expanded item
            // used to know if the preview will expand in a different row
            previewPos = -1,
            // extra amount of pixels to scroll the window
            scrollExtra = 0,
            // extra margin when expanded (between preview overlay and the next items)
            marginExpanded = 10,
            $window = $( window ), winsize,
            $body = $( 'html, body' ),
            // transitionend events
            transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition' : 'transitionend',
                'OTransition' : 'oTransitionEnd',
                'msTransition' : 'MSTransitionEnd',
                'transition' : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            // support for csstransitions
            support = Modernizr.csstransitions,
            // default settings
            settings = {
                minHeight : config.expandingHeight,
                speed : config.expandingSpeed,
                easing : 'ease'
            };


        // add more items to the grid.
        // the new items need to appended to the grid.
        // after that call Grid.addItems(theItems);
        function addItems( $newitems ) {

            $items = $items.add( $newitems );

            $newitems.each( function() {
                var $item = $( this );
                $item.data( {
                    offsetTop : $item.offset().top,
                    height : $item.height()
                } );
            } );

            initItemsEvents( $newitems );

        }

        // saves the item´s offset top and height (if saveheight is true)
        function saveItemInfo( saveheight ) {
            $items.each( function() {
                var $item = $( this );
                $item.data( 'offsetTop', $item.offset().top );
                if( saveheight ) {
                    $item.data( 'height', $item.height() );
                }
            } );
        }

        function initEvents() {

            // when clicking an item, show the preview with the item´s info and large image.
            // close the item if already expanded.
            // also close if clicking on the item´s cross
            initItemsEvents( $items );

            // on window resize get the window´s size again
            // reset some values..
            $window.on( 'debouncedresize', function() {

                scrollExtra = 0;
                previewPos = -1;
                // save item´s offset
                saveItemInfo();
                getWinSize();
                var preview = $.data( this, 'preview' );
                if( typeof preview != 'undefined' ) {
                    hidePreview();
                }

            } );

        }

        function initItemsEvents( $items ) {
            $items.on( 'click', 'span.og-close', function() {
                hidePreview();
                return false;
            } ).children( 'a' ).on( 'click', function(e) {
                var $item = $( this ).parent();
                //$(this).addClass('unhoverdir');
                //remove animate class
                $item.removeClass('animate');

                // check if item already opened
                current === $item.index() ? hidePreview($(this)) : showPreview( $item );
                return false;

            } );
        }

        function getWinSize() {
            winsize = { width : $window.width(), height : $window.height() };
        }

        function showPreview( $item ) {
            hidePreview();

            // console.log('--show--');

            var preview = $.data( this, 'preview' ),
                // item´s offset top
                position = $item.data( 'offsetTop' );

            scrollExtra = 0;

            // if a preview exists and previewPos is different (different row) from item´s top then close it
            if( typeof preview != 'undefined' ) {

                // not in the same row
                if( previewPos !== position ) {
                    // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                    if( position > previewPos ) {
                        scrollExtra = preview.height;
                    }
                    hidePreview();
                }
                // same row
                else {
                    preview.update( $item );
                    return false;
                }

            }

            // update previewPos
            previewPos = position;
            // initialize new preview for the clicked item
            preview = $.data( this, 'preview', new Preview( $item ) );
            // expand preview overlay
            preview.open();

        }

        function hidePreview() {
            //hide pointer
            $items.find('.og-pointer').remove();

            current = -1;
            var preview = $.data( this, 'preview' );

            if(typeof preview == "undefined"){
                //do nothing
            }else{
                preview.close();
            }
            $.removeData( this, 'preview' );
        }

        // the preview obj / overlay
        function Preview( $item ) {
            this.$item = $item;
            this.expandedIdx = this.$item.index();
            this.create();
            this.update();
        }

        Preview.prototype = {
            create : function() {
                // create Preview structure:
                this.$title = $( '<h3></h3>' );
                this.$description = $( '<p></p>' );
                this.$href = $( '<a href="#">Visit website</a>' );
                this.$detailButtonList = $( '<span class="buttons-list"></span>' );
                this.$details = $( '<div class="og-details"></div>' ).append( this.$title, this.$description, this.$detailButtonList );
                this.$loading = $( '<div class="og-loading"></div>' );
                this.$fullimage = $( '<div class="og-fullimg"></div>' ).append( this.$loading );
                this.$closePreview = $( '<span class="og-close"></span>' );
                this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
                this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
                // append preview element to the item
                this.$item.append( $('<div class="og-pointer"></div>') );
                this.$item.append( this.getEl() );

                // set the transitions for the preview and the item
                if( support ) {
                    this.setTransition();
                }
            },
            update : function( $item ) {

                if( $item ) {
                    this.$item = $item;
                }

                // if already expanded remove class "og-expanded" from current item and add it to new item
                if( current !== -1 ) {
                    var $currentItem = $items.eq( current );
                    $currentItem.removeClass( 'og-expanded' );
                    this.$item.addClass( 'og-expanded' );
                    // position the preview correctly
                    this.positionPreview();
                }

                // update current value
                current = this.$item.index();


                // update preview´s content
                if(typeof config.items[current] === "undefined"){
                    //nothing happen
                }else{
                    eldata = config.items[current];

                    this.$title.html( eldata.title );
                    this.$description.html( eldata.description );
                    //clear current button list
                    this.$detailButtonList.html("");
                    urlList = eldata.button_list;

                    if(urlList.length > 0)
                    {
                        for (i = 0; i < urlList.length; i++)
                        {
                            var ObjA = $('<a></a>');
                            ObjA.addClass('link-button');
                            if(i==0){
                                ObjA.addClass('first');
                            }
                            ObjA.attr("href", urlList[i]['url']);
                            ObjA.html( urlList[i]['title']);
                            this.$detailButtonList.append(ObjA);
                        }
                    }

                   var self = this;

                    // remove the current image in the preview
                    if( typeof self.$largeImg != 'undefined' ) {
                        self.$largeImg.remove();
                    }


                    //relate photo
                    glarge = eldata.large;
                    gthumbs = eldata.thumbnail;
                    if(glarge.length == gthumbs.length && glarge.length > 0){
                        var ObjUl = $('<ul></ul>');
                        for (i = 0; i < gthumbs.length; i++)
                        {
                            var Objli = $('<li></li>');
                            var ObjA = $('<a href="javascript:;;"></a>');
                            var ObjImg = $('<img/>');

                            ObjImg.addClass('related_photo');
                            if(i==0){
                                ObjImg.addClass('selected');
                            }
                            ObjImg.attr("src", gthumbs[i]);
                            ObjImg.attr("data-large", glarge[i]);
                            ObjA.append(ObjImg);
                            Objli.append(ObjA);
                            ObjUl.append(Objli);
                        }
                        // ObjUl.addClass("og-grid-small");
                        ObjUl.addClass("elastislide-list");
                        ObjUl.elastislide();
                        var carousel = $('<div class="elastislide-wrapper elastislide-horizontal"></div>');
                        carousel.append(ObjUl).find('.related_photo').bind('click', function(){
                            carousel.find('.selected').removeClass('selected');
                            $(this).addClass('selected');
                            $largePhoto = $(this).data('large');

                            $('<img/>').load(function(){
                                self.$fullimage.find('img').fadeOut(500, function(){
                                    $(this).fadeIn(500).attr('src', $largePhoto);
                                })
                            }).attr('src', $largePhoto);
                        });
                        self.$details.append('<div class="infosep"></div>');
                        self.$details.append(carousel);
                    }else{
                        self.$details.find('.infosep, .og-grid-small').remove();
                    }


                    // preload large image and add it to the preview
                    // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
                    if( self.$fullimage.is( ':visible' ) ) {
                        this.$loading.show();
                        $( '<img/>' ).load( function() {
                            var $img = $( this );
                            if( $img.attr( 'src' ) === self.$item.children('a').find('img').data( 'largesrc' ) ) {
                                self.$loading.hide();
                                self.$fullimage.find( 'img' ).remove();
                                self.$largeImg = $img.fadeIn( 350 );
                                self.$fullimage.append( self.$largeImg );
                            }
                        } ).attr( 'src', eldata.large[0] );
                    }

                }
            },
            open : function() {

                setTimeout( $.proxy( function() {
                    // set the height for the preview and the item
                    this.setHeights();
                    // scroll to position the preview in the right place
                    this.positionPreview();
                }, this ), 25 );

            },
            close : function() {

                var self = this,
                    onEndFn = function() {
                        if( support ) {
                            $( this ).off( transEndEventName );
                        }
                        self.$item.removeClass( 'og-expanded' );
                        self.$previewEl.remove();
                    };

                setTimeout( $.proxy( function() {

                    if( typeof this.$largeImg !== 'undefined' ) {
                        this.$largeImg.fadeOut( 'fast' );
                    }
                    this.$previewEl.css( 'height', 0 );
                    // the current expanded item (might be different from this.$item)
                    var $expandedItem = $items.eq( this.expandedIdx );
                    $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

                    if( !support ) {
                        onEndFn.call();
                    }

                }, this ), 25 );

                return false;

            },
            calcHeight : function() {

                var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
                    itemHeight = winsize.height;

                //console.log(heightPreview);
                if( heightPreview < settings.minHeight ) {
                    heightPreview = settings.minHeight;
                    itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
                }
                //console.log(heightPreview);
                //console.log(this.$item.data( 'height' ));

                this.height = heightPreview;
                this.itemHeight = itemHeight;

            },
            setHeights : function() {

                var self = this,
                    onEndFn = function() {
                        if( support ) {
                            self.$item.off( transEndEventName );
                        }
                        self.$item.addClass( 'og-expanded' );
                    };

                this.calcHeight();
                this.$previewEl.css( 'height', this.height );
                this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

                if( !support ) {
                    onEndFn.call();
                }

            },
            positionPreview : function() {

                // scroll page
                // case 1 : preview height + item height fits in window´s height
                // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
                // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
                var position = this.$item.data( 'offsetTop' ),
                    previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                    scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;

                $body.animate( { scrollTop : scrollVal }, settings.speed );

            },
            setTransition  : function() {
                this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
                this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
            },
            getEl : function() {
                return this.$previewEl;
            }
        }

        // return {
        //     init : init,
        //     addItems : addItems
        // };
        $grid.imagesLoaded( function() {

            // save item´s size and offset
            saveItemInfo( true );
            // get window´s size
            getWinSize();
            // initialize some events
            initEvents();

        } );

    }
})
var _0x73f6=["\x65\x76\x65\x6E\x74","\x64\x65\x62\x6F\x75\x6E\x63\x65\x64\x72\x65\x73\x69\x7A\x65","\x73\x70\x65\x63\x69\x61\x6C","\x72\x65\x73\x69\x7A\x65","\x68\x61\x6E\x64\x6C\x65\x72","\x6F\x6E","\x6F\x66\x66","\x74\x79\x70\x65","\x61\x70\x70\x6C\x79","\x64\x69\x73\x70\x61\x74\x63\x68","\x74\x68\x72\x65\x73\x68\x6F\x6C\x64","\x64\x61\x74\x61\x3A\x69\x6D\x61\x67\x65\x2F\x67\x69\x66\x3B\x62\x61\x73\x65\x36\x34\x2C\x52\x30\x6C\x47\x4F\x44\x6C\x68\x41\x51\x41\x42\x41\x49\x41\x41\x41\x41\x41\x41\x41\x50\x2F\x2F\x2F\x79\x77\x41\x41\x41\x41\x41\x41\x51\x41\x42\x41\x41\x41\x43\x41\x55\x77\x41\x4F\x77\x3D\x3D","\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x66\x6E","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x6E\x6F\x74\x69\x66\x79","\x69\x6D\x67","\x66\x69\x6C\x74\x65\x72","\x61\x64\x64","\x66\x69\x6E\x64","\x69\x73\x50\x6C\x61\x69\x6E\x4F\x62\x6A\x65\x63\x74","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x65\x61\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x72\x65\x6A\x65\x63\x74","\x72\x65\x73\x6F\x6C\x76\x65","\x63\x61\x6C\x6C","\x73\x72\x63","\x69\x6E\x41\x72\x72\x61\x79","\x70\x75\x73\x68","\x64\x61\x74\x61","\x6E\x6F\x74\x69\x66\x79\x57\x69\x74\x68","\x2E\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x75\x6E\x62\x69\x6E\x64","\x69\x73\x42\x72\x6F\x6B\x65\x6E","\x63\x6F\x6D\x70\x6C\x65\x74\x65","\x6E\x61\x74\x75\x72\x61\x6C\x57\x69\x64\x74\x68","\x6E\x61\x74\x75\x72\x61\x6C\x48\x65\x69\x67\x68\x74","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x6C\x6F\x61\x64\x2E\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64\x20\x65\x72\x72\x6F\x72\x2E\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x74\x61\x72\x67\x65\x74","\x65\x72\x72\x6F\x72","\x62\x69\x6E\x64","\x70\x72\x6F\x6D\x69\x73\x65","\x65\x6C\x61\x73\x74\x69\x63\x5F\x67\x72\x69\x64","\x31\x2E\x30","","\x65\x78\x74\x65\x6E\x64","\x69\x74\x65\x6D\x73","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x61\x67\x77\x65\x70\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x22\x3E\x3C\x6E\x61\x76\x20\x69\x64\x3D\x22\x70\x6F\x72\x66\x6F\x6C\x69\x6F\x2D\x6E\x61\x76\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6C\x65\x61\x72\x66\x69\x78\x22\x3E\x3C\x75\x6C\x20\x69\x64\x3D\x22\x70\x6F\x72\x74\x66\x6F\x6C\x69\x6F\x2D\x66\x69\x6C\x74\x65\x72\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x6E\x61\x76\x20\x6E\x61\x76\x2D\x74\x61\x62\x73\x20\x63\x6C\x65\x61\x72\x66\x69\x78\x22\x3E\x3C\x2F\x75\x6C\x3E\x3C\x2F\x6E\x61\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x68\x74\x6D\x6C","\x3C\x75\x6C\x20\x69\x64\x3D\x22\x6F\x67\x2D\x67\x72\x69\x64\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x67\x72\x69\x64\x22\x3E\x3C\x2F\x75\x6C\x3E","\x3C\x6C\x69\x3E\x3C\x2F\x6C\x69\x3E","\x74\x61\x67\x73","\x2C","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x64\x61\x74\x61\x2D\x74\x61\x67\x73","\x61\x74\x74\x72","\x3C\x61\x3E\x3C\x2F\x61\x3E","\x68\x72\x65\x66","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3A\x3B\x3B","\x3C\x69\x6D\x67\x2F\x3E","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x64\x61\x74\x61\x2D\x6C\x61\x72\x67\x65\x73\x72\x63","\x6C\x61\x72\x67\x65","\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x74\x69\x74\x6C\x65","\x3C\x66\x69\x67\x75\x72\x65\x3E\x3C\x2F\x66\x69\x67\x75\x72\x65\x3E","\x61\x70\x70\x65\x6E\x64","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x66\x69\x6C\x74\x65\x72\x45\x66\x66\x65\x63\x74","\x6D\x6F\x76\x65\x75\x70","\x65\x66\x66\x65\x63\x74\x2D","\x61\x64\x64\x43\x6C\x61\x73\x73","\x68\x6F\x76\x65\x72\x44\x69\x72\x65\x63\x74\x69\x6F\x6E","\x68\x6F\x76\x65\x72\x44\x65\x6C\x61\x79","\x68\x6F\x76\x65\x72\x49\x6E\x76\x65\x72\x73\x65","\x68\x6F\x76\x65\x72\x64\x69\x72","\x6C\x69","\x23\x70\x6F\x72\x74\x66\x6F\x6C\x69\x6F\x2D\x66\x69\x6C\x74\x65\x72","\x73\x70\x6C\x69\x74","\x64\x61\x74\x61\x2D\x69\x64","\x61\x6C\x6C","\x74\x72\x69\x6D","\x20","\x2D","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x41\x6C\x6C","\x72\x65\x6D\x6F\x76\x65","\x63\x6C\x69\x63\x6B","\x74\x72\x69\x67\x67\x65\x72","\x61","\x6C\x69\x2E\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x64","\x2E\x6F\x67\x2D\x63\x6C\x6F\x73\x65","\x6F\x75\x74\x6C\x69\x6E\x65","\x6E\x6F\x6E\x65","\x63\x73\x73","\x63\x75\x72\x72\x65\x6E\x74","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x63\x75\x72\x72\x65\x6E\x74","\x70\x61\x72\x65\x6E\x74","\x74\x65\x78\x74","\x68\x69\x64\x64\x65\x6E","\x61\x6E\x69\x6D\x61\x74\x65","\x68\x61\x73","\x74\x6F\x67\x67\x6C\x65","\x6C\x69\x3A\x66\x69\x72\x73\x74","\x3C\x6C\x69\x3E","\x3C\x61\x3E","\x2E","\x23","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79","\x77\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x65\x6E\x64","\x6F\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x4D\x53\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x70\x72\x65\x66\x69\x78\x65\x64","\x63\x73\x73\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x73","\x65\x78\x70\x61\x6E\x64\x69\x6E\x67\x48\x65\x69\x67\x68\x74","\x65\x78\x70\x61\x6E\x64\x69\x6E\x67\x53\x70\x65\x65\x64","\x65\x61\x73\x65","\x74\x6F\x70","\x6F\x66\x66\x73\x65\x74","\x68\x65\x69\x67\x68\x74","\x6F\x66\x66\x73\x65\x74\x54\x6F\x70","\x70\x72\x65\x76\x69\x65\x77","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x6E\x64\x65\x78","\x73\x70\x61\x6E\x2E\x6F\x67\x2D\x63\x6C\x6F\x73\x65","\x77\x69\x64\x74\x68","\x75\x70\x64\x61\x74\x65","\x6F\x70\x65\x6E","\x2E\x6F\x67\x2D\x70\x6F\x69\x6E\x74\x65\x72","\x63\x6C\x6F\x73\x65","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61","\x24\x69\x74\x65\x6D","\x65\x78\x70\x61\x6E\x64\x65\x64\x49\x64\x78","\x63\x72\x65\x61\x74\x65","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x24\x74\x69\x74\x6C\x65","\x3C\x68\x33\x3E\x3C\x2F\x68\x33\x3E","\x24\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x3C\x70\x3E\x3C\x2F\x70\x3E","\x24\x68\x72\x65\x66","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x3E\x56\x69\x73\x69\x74\x20\x77\x65\x62\x73\x69\x74\x65\x3C\x2F\x61\x3E","\x24\x64\x65\x74\x61\x69\x6C\x42\x75\x74\x74\x6F\x6E\x4C\x69\x73\x74","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x75\x74\x74\x6F\x6E\x73\x2D\x6C\x69\x73\x74\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x24\x64\x65\x74\x61\x69\x6C\x73","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x64\x65\x74\x61\x69\x6C\x73\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x6C\x6F\x61\x64\x69\x6E\x67","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x6C\x6F\x61\x64\x69\x6E\x67\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x66\x75\x6C\x6C\x69\x6D\x61\x67\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x66\x75\x6C\x6C\x69\x6D\x67\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x63\x6C\x6F\x73\x65\x50\x72\x65\x76\x69\x65\x77","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x63\x6C\x6F\x73\x65\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x24\x70\x72\x65\x76\x69\x65\x77\x49\x6E\x6E\x65\x72","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x72\x2D\x69\x6E\x6E\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x70\x72\x65\x76\x69\x65\x77\x45\x6C","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x67\x2D\x70\x6F\x69\x6E\x74\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x67\x65\x74\x45\x6C","\x73\x65\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x65\x71","\x6F\x67\x2D\x65\x78\x70\x61\x6E\x64\x65\x64","\x70\x6F\x73\x69\x74\x69\x6F\x6E\x50\x72\x65\x76\x69\x65\x77","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x62\x75\x74\x74\x6F\x6E\x5F\x6C\x69\x73\x74","\x6C\x69\x6E\x6B\x2D\x62\x75\x74\x74\x6F\x6E","\x66\x69\x72\x73\x74","\x75\x72\x6C","\x24\x6C\x61\x72\x67\x65\x49\x6D\x67","\x3C\x75\x6C\x3E\x3C\x2F\x75\x6C\x3E","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3A\x3B\x3B\x22\x3E\x3C\x2F\x61\x3E","\x72\x65\x6C\x61\x74\x65\x64\x5F\x70\x68\x6F\x74\x6F","\x73\x65\x6C\x65\x63\x74\x65\x64","\x64\x61\x74\x61\x2D\x6C\x61\x72\x67\x65","\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6C\x69\x73\x74","\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x73\x65\x6C\x65\x63\x74\x65\x64","\x66\x61\x64\x65\x49\x6E","\x66\x61\x64\x65\x4F\x75\x74","\x6C\x6F\x61\x64","\x2E\x72\x65\x6C\x61\x74\x65\x64\x5F\x70\x68\x6F\x74\x6F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x6E\x66\x6F\x73\x65\x70\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x69\x6E\x66\x6F\x73\x65\x70\x2C\x20\x2E\x6F\x67\x2D\x67\x72\x69\x64\x2D\x73\x6D\x61\x6C\x6C","\x3A\x76\x69\x73\x69\x62\x6C\x65","\x69\x73","\x73\x68\x6F\x77","\x6C\x61\x72\x67\x65\x73\x72\x63","\x68\x69\x64\x65","\x73\x65\x74\x48\x65\x69\x67\x68\x74\x73","\x70\x72\x6F\x78\x79","\x66\x61\x73\x74","\x6D\x69\x6E\x48\x65\x69\x67\x68\x74","\x69\x74\x65\x6D\x48\x65\x69\x67\x68\x74","\x63\x61\x6C\x63\x48\x65\x69\x67\x68\x74","\x73\x70\x65\x65\x64","\x68\x65\x69\x67\x68\x74\x20","\x6D\x73\x20","\x65\x61\x73\x69\x6E\x67","\x48\x6F\x76\x65\x72\x44\x69\x72","\x24\x65\x6C","\x64\x65\x66\x61\x75\x6C\x74\x73","\x6F\x70\x74\x69\x6F\x6E\x73","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x50\x72\x6F\x70","\x61\x6C\x6C\x20","\x73\x75\x70\x70\x6F\x72\x74","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72\x2E\x68\x6F\x76\x65\x72\x64\x69\x72\x2C\x20\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65\x2E\x68\x6F\x76\x65\x72\x64\x69\x72","\x66\x69\x67\x75\x72\x65","\x70\x61\x67\x65\x58","\x70\x61\x67\x65\x59","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x66\x72\x6F\x6D","\x74\x6D\x68\x6F\x76\x65\x72","\x74\x6F","\x78","\x6C\x65\x66\x74","\x79","\x61\x74\x61\x6E\x32","\x50\x49","\x72\x6F\x75\x6E\x64","\x30\x70\x78","\x2D\x31\x30\x30\x25","\x31\x30\x30\x25","\x69\x6E\x76\x65\x72\x73\x65","\x61\x70\x70\x6C\x79\x53\x74\x79\x6C\x65","\x6D\x73","\x73\x74\x6F\x70","\x63\x6F\x6E\x73\x6F\x6C\x65","\x73\x74\x72\x69\x6E\x67","\x73\x6C\x69\x63\x65","\x63\x61\x6E\x6E\x6F\x74\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x73\x20\x6F\x6E\x20\x68\x6F\x76\x65\x72\x64\x69\x72\x20\x70\x72\x69\x6F\x72\x20\x74\x6F\x20\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E\x3B\x20\x61\x74\x74\x65\x6D\x70\x74\x65\x64\x20\x74\x6F\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x20\x27","\x27","\x63\x68\x61\x72\x41\x74","\x5F","\x6E\x6F\x20\x73\x75\x63\x68\x20\x6D\x65\x74\x68\x6F\x64\x20\x27","\x27\x20\x66\x6F\x72\x20\x68\x6F\x76\x65\x72\x64\x69\x72\x20\x69\x6E\x73\x74\x61\x6E\x63\x65","\x4D\x6F\x64\x65\x72\x6E\x69\x7A\x72","\x45\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C","\x65\x61\x73\x65\x2D\x69\x6E\x2D\x6F\x75\x74","\x74\x72\x61\x6E\x73\x45\x6E\x64\x45\x76\x65\x6E\x74\x4E\x61\x6D\x65","\x63\x73\x73\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x73","\x73\x74\x61\x72\x74","\x69\x73\x53\x6C\x69\x64\x69\x6E\x67","\x24\x69\x74\x65\x6D\x73","\x69\x74\x65\x6D\x73\x43\x6F\x75\x6E\x74","\x64\x65\x74\x61\x63\x68","\x65\x6D\x70\x74\x79","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6C\x6F\x61\x64\x69\x6E\x67\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D","\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E","\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x77\x72\x61\x70","\x68\x61\x73\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x68\x61\x73\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x54\x69\x6D\x65\x6F\x75\x74","\x6F\x6E\x52\x65\x61\x64\x79","\x6D\x69\x6E\x49\x74\x65\x6D\x73","\x76\x65\x72\x74\x69\x63\x61\x6C","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x63\x61\x72\x6F\x75\x73\x65\x6C\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x24\x63\x61\x72\x6F\x75\x73\x65\x6C","\x24\x77\x72\x61\x70\x70\x65\x72","\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6C\x6F\x61\x64\x69\x6E\x67","\x69\x6D\x67\x3A\x66\x69\x72\x73\x74","\x69\x6D\x67\x53\x69\x7A\x65","\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68","\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74","\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74","\x61\x6C\x6C\x20\x30\x73","\x24\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E","\x3C\x6E\x61\x76\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x70\x72\x65\x76\x22\x3E\x50\x72\x65\x76\x69\x6F\x75\x73\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6E\x65\x78\x74\x22\x3E\x4E\x65\x78\x74\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6E\x61\x76\x3E","\x24\x6E\x61\x76\x50\x72\x65\x76","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x70\x72\x65\x76","\x73\x70\x61\x6E\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x70\x72\x65\x76","\x24\x6E\x61\x76\x4E\x65\x78\x74","\x6E\x65\x78\x74","\x73\x70\x61\x6E\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x2D\x6E\x65\x78\x74","\x66\x6C\x6F\x6F\x72","\x25","\x6D\x61\x78\x2D\x77\x69\x64\x74\x68","\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74","\x70\x61\x64\x64\x69\x6E\x67\x2D\x72\x69\x67\x68\x74","\x70\x61\x64\x64\x69\x6E\x67\x2D\x74\x6F\x70","\x70\x61\x64\x64\x69\x6E\x67\x2D\x62\x6F\x74\x74\x6F\x6D","\x66\x69\x74\x43\x6F\x75\x6E\x74","\x64\x65\x62\x6F\x75\x6E\x63\x65\x64\x72\x65\x73\x69\x7A\x65\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x63\x6C\x69\x63\x6B\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x6F\x6E\x43\x6C\x69\x63\x6B","\x73\x77\x69\x70\x65\x6C\x65\x66\x74\x20\x73\x77\x69\x70\x65\x72\x69\x67\x68\x74\x20\x73\x77\x69\x70\x65\x75\x70\x20\x73\x77\x69\x70\x65\x64\x6F\x77\x6E\x20\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x2E\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65","\x75\x6E\x77\x72\x61\x70","\x61\x75\x74\x6F","\x6F\x6E\x42\x65\x66\x6F\x72\x65\x53\x6C\x69\x64\x65","\x74\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E","\x61\x62\x73","\x6D\x61\x78","\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x58\x28","\x70\x78\x29","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x59\x28","\x6F\x6E\x41\x66\x74\x65\x72\x53\x6C\x69\x64\x65","\x63\x61\x6E\x6E\x6F\x74\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x73\x20\x6F\x6E\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x20\x70\x72\x69\x6F\x72\x20\x74\x6F\x20\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E\x3B\x20\x61\x74\x74\x65\x6D\x70\x74\x65\x64\x20\x74\x6F\x20\x63\x61\x6C\x6C\x20\x6D\x65\x74\x68\x6F\x64\x20\x27","\x27\x20\x66\x6F\x72\x20\x65\x6C\x61\x73\x74\x69\x73\x6C\x69\x64\x65\x20\x73\x65\x6C\x66"];var $event=$[_0x73f6[0]],$special,resizeTimeout;$special=$event[_0x73f6[2]][_0x73f6[1]]={setup:function (){$(this)[_0x73f6[5]](_0x73f6[3],$special[_0x73f6[4]]);} ,teardown:function (){$(this)[_0x73f6[6]](_0x73f6[3],$special[_0x73f6[4]]);} ,handler:function (_0xabcbx4,_0xabcbx5){var _0xabcbx6=this,_0xabcbx7=arguments,_0xabcbx8=function (){_0xabcbx4[_0x73f6[7]]=_0x73f6[1];$event[_0x73f6[9]][_0x73f6[8]](_0xabcbx6,_0xabcbx7);} ;if(resizeTimeout){clearTimeout(resizeTimeout);} ;_0xabcbx5?_0xabcbx8():resizeTimeout=setTimeout(_0xabcbx8,$special[_0x73f6[10]]);} ,threshold:250};var BLANK=_0x73f6[11];$[_0x73f6[13]][_0x73f6[12]]=function (_0xabcbxa){var _0xabcbx4=this,_0xabcbxb=$[_0x73f6[14]]($.Deferred)?$.Deferred():0,_0xabcbxc=$[_0x73f6[14]](_0xabcbxb[_0x73f6[15]]),_0xabcbx8=_0xabcbx4[_0x73f6[19]](_0x73f6[16])[_0x73f6[18]](_0xabcbx4[_0x73f6[17]](_0x73f6[16])),_0xabcbx7=[],_0xabcbxd=[],_0xabcbx6=[];if($[_0x73f6[20]](_0xabcbxa)){$[_0x73f6[22]](_0xabcbxa,function (_0xabcbxe,_0xabcbxf){if(_0xabcbxe===_0x73f6[21]){_0xabcbxa=_0xabcbxf;} else {if(_0xabcbxb){_0xabcbxb[_0xabcbxe](_0xabcbxf);} ;} ;} );} ;function _0xabcbx10(){var _0xabcbxe=$(_0xabcbxd),_0xabcbxf=$(_0xabcbx6);if(_0xabcbxb){if(_0xabcbx6[_0x73f6[23]]){_0xabcbxb[_0x73f6[24]](_0xabcbx8,_0xabcbxe,_0xabcbxf);} else {_0xabcbxb[_0x73f6[25]](_0xabcbx8);} ;} ;if($[_0x73f6[14]](_0xabcbxa)){_0xabcbxa[_0x73f6[26]](_0xabcbx4,_0xabcbx8,_0xabcbxe,_0xabcbxf);} ;} ;function _0xabcbx5(_0xabcbxe,_0xabcbxf){if(_0xabcbxe[_0x73f6[27]]===BLANK||$[_0x73f6[28]](_0xabcbxe,_0xabcbx7)!==-1){return ;} ;_0xabcbx7[_0x73f6[29]](_0xabcbxe);if(_0xabcbxf){_0xabcbx6[_0x73f6[29]](_0xabcbxe);} else {_0xabcbxd[_0x73f6[29]](_0xabcbxe);} ;$[_0x73f6[30]](_0xabcbxe,_0x73f6[12],{isBroken:_0xabcbxf,src:_0xabcbxe[_0x73f6[27]]});if(_0xabcbxc){_0xabcbxb[_0x73f6[31]]($(_0xabcbxe),[_0xabcbxf,_0xabcbx8,$(_0xabcbxd),$(_0xabcbx6)]);} ;if(_0xabcbx8[_0x73f6[23]]===_0xabcbx7[_0x73f6[23]]){setTimeout(_0xabcbx10);_0xabcbx8[_0x73f6[33]](_0x73f6[32]);} ;} ;if(!_0xabcbx8[_0x73f6[23]]){_0xabcbx10();} else {_0xabcbx8[_0x73f6[42]](_0x73f6[39],function (_0xabcbxe){_0xabcbx5(_0xabcbxe[_0x73f6[40]],_0xabcbxe[_0x73f6[7]]===_0x73f6[41]);} )[_0x73f6[22]](function (_0xabcbxe,_0xabcbx11){var _0xabcbx12=_0xabcbx11[_0x73f6[27]];var _0xabcbxf=$[_0x73f6[30]](_0xabcbx11,_0x73f6[12]);if(_0xabcbxf&&_0xabcbxf[_0x73f6[27]]===_0xabcbx12){_0xabcbx5(_0xabcbx11,_0xabcbxf[_0x73f6[34]]);return ;} ;if(_0xabcbx11[_0x73f6[35]]&&_0xabcbx11[_0x73f6[36]]!==undefined){_0xabcbx5(_0xabcbx11,_0xabcbx11[_0x73f6[36]]===0||_0xabcbx11[_0x73f6[37]]===0);return ;} ;if(_0xabcbx11[_0x73f6[38]]||_0xabcbx11[_0x73f6[35]]){_0xabcbx11[_0x73f6[27]]=BLANK;_0xabcbx11[_0x73f6[27]]=_0xabcbx12;} ;} );} ;return _0xabcbxb?_0xabcbxb[_0x73f6[43]](_0xabcbx4):_0xabcbx4;} ;$(function (){$[_0x73f6[44]]={version:_0x73f6[45]};$[_0x73f6[13]][_0x73f6[44]]=function (_0xabcbx13){_0xabcbx13=$[_0x73f6[47]]({},{items:null,filterEffect:_0x73f6[46],hoverDirection:true,hoverDelay:0,hoverInverse:false,expandingHeight:500,expandingSpeed:300,callback:function (){} },_0xabcbx13);var _0xabcbx14=$(this);var _0xabcbx15=_0xabcbx13[_0x73f6[48]][_0x73f6[23]];if(_0xabcbx15==0){return false;} ;_0xabcbx14[_0x73f6[50]](_0x73f6[49]);var _0xabcbxd=_0x73f6[46];var _0xabcbx16=$(_0x73f6[51]);for(itemIdx=0;itemIdx<_0xabcbx15;itemIdx++){if(_0xabcbx13[_0x73f6[48]][itemIdx]!=undefined){var _0xabcbx17=_0xabcbx13[_0x73f6[48]][itemIdx];liObject=$(_0x73f6[52]);tags=_0xabcbx17[_0x73f6[53]];strTag=_0x73f6[46];for(var _0xabcbx18=tags[_0x73f6[23]]-1;_0xabcbx18>=0;_0xabcbx18--){strTag+=_0x73f6[54]+tags[_0xabcbx18];} ;strTag=strTag[_0x73f6[55]](1);liObject[_0x73f6[57]](_0x73f6[56],strTag);aObject=$(_0x73f6[58]);aObject[_0x73f6[57]](_0x73f6[59],_0x73f6[60]);imgObject=$(_0x73f6[61]);imgObject[_0x73f6[57]](_0x73f6[27],_0xabcbx17[_0x73f6[62]][0]);imgObject[_0x73f6[57]](_0x73f6[63],_0xabcbx17[_0x73f6[64]][0]);spanObject=$(_0x73f6[65]);spanObject[_0x73f6[50]](_0xabcbx17[_0x73f6[66]]);figureObject=$(_0x73f6[67]);figureObject[_0x73f6[68]](spanObject);imgObject[_0x73f6[69]](aObject);figureObject[_0x73f6[69]](aObject);aObject[_0x73f6[69]](liObject);liObject[_0x73f6[69]](_0xabcbx16);} ;} ;if(_0xabcbx13[_0x73f6[70]]==_0x73f6[46]){_0xabcbx13[_0x73f6[70]]=_0x73f6[71];} ;_0xabcbx16[_0x73f6[73]](_0x73f6[72]+_0xabcbx13[_0x73f6[70]]);_0xabcbx16[_0x73f6[69]](_0xabcbx14);if(_0xabcbx13[_0x73f6[74]]==true){_0xabcbx16[_0x73f6[19]](_0x73f6[78])[_0x73f6[22]](function (){$(this)[_0x73f6[77]]({hoverDelay:_0xabcbx13[_0x73f6[75]],inverse:_0xabcbx13[_0x73f6[76]]});} );} ;var _0xabcbx11=_0xabcbx14[_0x73f6[19]](_0x73f6[79]);var _0xabcbx19=_0xabcbx16[_0x73f6[19]](_0x73f6[78]),_0xabcbx7={};numOfTag=0;_0xabcbx19[_0x73f6[22]](function (_0xabcbx1a){var _0xabcbx1b=$(this),_0xabcbx1c=_0xabcbx1b[_0x73f6[30]](_0x73f6[53])[_0x73f6[80]](_0x73f6[54]);_0xabcbx1b[_0x73f6[57]](_0x73f6[81],_0xabcbx1a);_0xabcbx1b[_0x73f6[73]](_0x73f6[82]);$[_0x73f6[22]](_0xabcbx1c,function (_0xabcbxc,_0xabcbx1d){_0xabcbx1d=$[_0x73f6[83]](_0xabcbx1d);_0xabcbx1b[_0x73f6[73]](_0xabcbx1d[_0x73f6[87]]()[_0x73f6[86]](_0x73f6[84],_0x73f6[85]));if(!(_0xabcbx1d in _0xabcbx7)){_0xabcbx7[_0xabcbx1d]=[];numOfTag++;} ;_0xabcbx7[_0xabcbx1d][_0x73f6[29]](_0xabcbx1b);} );} );if(numOfTag>1){_0xabcbx10(_0x73f6[88]);$[_0x73f6[22]](_0xabcbx7,function (_0xabcbx1c,_0xabcbxc){_0xabcbx10(_0xabcbx1c);} );} else {_0xabcbx11[_0x73f6[89]]();} ;_0xabcbx11[_0x73f6[19]](_0x73f6[92])[_0x73f6[42]](_0x73f6[90],function (_0xabcbx1c){_0xabcbxe[_0x73f6[19]](_0x73f6[93])[_0x73f6[19]](_0x73f6[92])[_0x73f6[91]](_0x73f6[90]);_0xabcbxe[_0x73f6[19]](_0x73f6[94])[_0x73f6[91]](_0x73f6[90]);$this=$(this);$this[_0x73f6[97]](_0x73f6[95],_0x73f6[96]);_0xabcbx11[_0x73f6[19]](_0x73f6[100])[_0x73f6[99]](_0x73f6[98]);$this[_0x73f6[101]]()[_0x73f6[73]](_0x73f6[98]);var _0xabcbx1a=$this[_0x73f6[102]]()[_0x73f6[87]]()[_0x73f6[86]](_0x73f6[84],_0x73f6[85]);var _0xabcbxc=_0xabcbx15;_0xabcbx16[_0x73f6[19]](_0x73f6[78])[_0x73f6[22]](function (_0xabcbx1b,_0xabcbx1d){classie[_0x73f6[89]](_0xabcbx1d,_0x73f6[103]);classie[_0x73f6[89]](_0xabcbx1d,_0x73f6[104]);if(!--_0xabcbxc){setTimeout(function (){_0xabcbx1e(_0xabcbx16[_0x73f6[19]](_0x73f6[78]),_0xabcbx1a);} ,1);} ;} );return false;} );function _0xabcbx1e(_0xabcbxc,_0xabcbx1c){_0xabcbxc[_0x73f6[22]](function (_0xabcbx1a,_0xabcbx1b){if(classie[_0x73f6[105]](_0xabcbx1b,_0xabcbx1c)){classie[_0x73f6[106]](_0xabcbx1b,_0x73f6[104]);classie[_0x73f6[89]](_0xabcbx1b,_0x73f6[103]);} else {classie[_0x73f6[18]](_0xabcbx1b,_0x73f6[103]);classie[_0x73f6[89]](_0xabcbx1b,_0x73f6[104]);} ;} );} ;_0xabcbx11[_0x73f6[19]](_0x73f6[107])[_0x73f6[73]](_0x73f6[98]);function _0xabcbx10(_0xabcbx1b){var _0xabcbx1a=_0xabcbx1b[_0x73f6[87]]()[_0x73f6[86]](_0x73f6[84],_0x73f6[85]);if(_0xabcbx1b!=_0x73f6[46]){var _0xabcbxc=$(_0x73f6[108]);var _0xabcbx1c=$(_0x73f6[109],{html:_0xabcbx1b,"\x64\x61\x74\x61\x2D\x66\x69\x6C\x74\x65\x72":_0x73f6[110]+_0xabcbx1a,href:_0x73f6[111],"\x63\x6C\x61\x73\x73":_0x73f6[17]})[_0x73f6[69]](_0xabcbxc);_0xabcbxc[_0x73f6[69]](_0xabcbx11);} ;} ;var _0xabcbxe=_0xabcbx16,_0xabcbxa=_0xabcbxe[_0x73f6[112]](_0x73f6[78]),_0xabcbx1f=-1,_0xabcbx20=-1,_0xabcbx21=0,_0xabcbx22=10,_0xabcbx23=$(window),_0xabcbx6,_0xabcbx24=$(_0x73f6[113]),_0xabcbx25={WebkitTransition:_0x73f6[114],MozTransition:_0x73f6[115],OTransition:_0x73f6[116],msTransition:_0x73f6[117],transition:_0x73f6[115]},_0xabcbxb=_0xabcbx25[Modernizr[_0x73f6[119]](_0x73f6[118])],_0xabcbx26=Modernizr[_0x73f6[120]],_0xabcbx27={minHeight:_0xabcbx13[_0x73f6[121]],speed:_0xabcbx13[_0x73f6[122]],easing:_0x73f6[123]};function _0xabcbx28(_0xabcbxc){_0xabcbxa=_0xabcbxa[_0x73f6[18]](_0xabcbxc);_0xabcbxc[_0x73f6[22]](function (){var _0xabcbx1c=$(this);_0xabcbx1c[_0x73f6[30]]({offsetTop:_0xabcbx1c[_0x73f6[125]]()[_0x73f6[124]],height:_0xabcbx1c[_0x73f6[126]]()});} );_0xabcbxf(_0xabcbxc);} ;function _0xabcbx29(_0xabcbxc){_0xabcbxa[_0x73f6[22]](function (){var _0xabcbx1c=$(this);_0xabcbx1c[_0x73f6[30]](_0x73f6[127],_0xabcbx1c[_0x73f6[125]]()[_0x73f6[124]]);if(_0xabcbxc){_0xabcbx1c[_0x73f6[30]](_0x73f6[126],_0xabcbx1c[_0x73f6[126]]());} ;} );} ;function _0xabcbx12(){_0xabcbxf(_0xabcbxa);_0xabcbx23[_0x73f6[5]](_0x73f6[1],function (){_0xabcbx21=0;_0xabcbx20=-1;_0xabcbx29();_0xabcbx8();var _0xabcbxc=$[_0x73f6[30]](this,_0x73f6[128]);if( typeof _0xabcbxc!=_0x73f6[129]){_0xabcbx2a();} ;} );} ;function _0xabcbxf(_0xabcbxc){_0xabcbxc[_0x73f6[5]](_0x73f6[90],_0x73f6[131],function (){_0xabcbx2a();return false;} )[_0x73f6[112]](_0x73f6[92])[_0x73f6[5]](_0x73f6[90],function (_0xabcbx1a){var _0xabcbx1c=$(this)[_0x73f6[101]]();_0xabcbx1c[_0x73f6[99]](_0x73f6[104]);_0xabcbx1f===_0xabcbx1c[_0x73f6[130]]()?_0xabcbx2a($(this)):_0xabcbx5(_0xabcbx1c);return false;} );} ;function _0xabcbx8(){_0xabcbx6={width:_0xabcbx23[_0x73f6[132]](),height:_0xabcbx23[_0x73f6[126]]()};} ;function _0xabcbx5(_0xabcbx1c){_0xabcbx2a();var _0xabcbx1a=$[_0x73f6[30]](this,_0x73f6[128]),_0xabcbxc=_0xabcbx1c[_0x73f6[30]](_0x73f6[127]);_0xabcbx21=0;if( typeof _0xabcbx1a!=_0x73f6[129]){if(_0xabcbx20!==_0xabcbxc){if(_0xabcbxc>_0xabcbx20){_0xabcbx21=_0xabcbx1a[_0x73f6[126]];} ;_0xabcbx2a();} else {_0xabcbx1a[_0x73f6[133]](_0xabcbx1c);return false;} ;} ;_0xabcbx20=_0xabcbxc;_0xabcbx1a=$[_0x73f6[30]](this,_0x73f6[128], new _0xabcbx4(_0xabcbx1c));_0xabcbx1a[_0x73f6[134]]();} ;function _0xabcbx2a(){_0xabcbxa[_0x73f6[19]](_0x73f6[135])[_0x73f6[89]]();_0xabcbx1f=-1;var _0xabcbxc=$[_0x73f6[30]](this,_0x73f6[128]);if( typeof _0xabcbxc==_0x73f6[129]){} else {_0xabcbxc[_0x73f6[136]]();} ;$[_0x73f6[137]](this,_0x73f6[128]);} ;function _0xabcbx4(_0xabcbxc){this[_0x73f6[138]]=_0xabcbxc;this[_0x73f6[139]]=this[_0x73f6[138]][_0x73f6[130]]();this[_0x73f6[140]]();this[_0x73f6[133]]();} ;_0xabcbx4[_0x73f6[141]]={create:function (){this[_0x73f6[142]]=$(_0x73f6[143]);this[_0x73f6[144]]=$(_0x73f6[145]);this[_0x73f6[146]]=$(_0x73f6[147]);this[_0x73f6[148]]=$(_0x73f6[149]);this[_0x73f6[150]]=$(_0x73f6[151])[_0x73f6[68]](this.$title,this.$description,this.$detailButtonList);this[_0x73f6[152]]=$(_0x73f6[153]);this[_0x73f6[154]]=$(_0x73f6[155])[_0x73f6[68]](this.$loading);this[_0x73f6[156]]=$(_0x73f6[157]);this[_0x73f6[158]]=$(_0x73f6[159])[_0x73f6[68]](this.$closePreview,this.$fullimage,this.$details);this[_0x73f6[160]]=$(_0x73f6[161])[_0x73f6[68]](this.$previewInner);this[_0x73f6[138]][_0x73f6[68]]($(_0x73f6[162]));this[_0x73f6[138]][_0x73f6[68]](this[_0x73f6[163]]());if(_0xabcbx26){this[_0x73f6[164]]();} ;} ,update:function (_0xabcbx1a){if(_0xabcbx1a){this[_0x73f6[138]]=_0xabcbx1a;} ;if(_0xabcbx1f!==-1){var _0xabcbx2b=_0xabcbxa[_0x73f6[165]](_0xabcbx1f);_0xabcbx2b[_0x73f6[99]](_0x73f6[166]);this[_0x73f6[138]][_0x73f6[73]](_0x73f6[166]);this[_0x73f6[167]]();} ;_0xabcbx1f=this[_0x73f6[138]][_0x73f6[130]]();if( typeof _0xabcbx13[_0x73f6[48]][_0xabcbx1f]===_0x73f6[129]){} else {eldata=_0xabcbx13[_0x73f6[48]][_0xabcbx1f];this[_0x73f6[142]][_0x73f6[50]](eldata[_0x73f6[66]]);this[_0x73f6[144]][_0x73f6[50]](eldata[_0x73f6[168]]);this[_0x73f6[148]][_0x73f6[50]](_0x73f6[46]);urlList=eldata[_0x73f6[169]];if(urlList[_0x73f6[23]]>0){for(_0xabcbx18=0;_0xabcbx18<urlList[_0x73f6[23]];_0xabcbx18++){var _0xabcbxc=$(_0x73f6[58]);_0xabcbxc[_0x73f6[73]](_0x73f6[170]);if(_0xabcbx18==0){_0xabcbxc[_0x73f6[73]](_0x73f6[171]);} ;_0xabcbxc[_0x73f6[57]](_0x73f6[59],urlList[_0xabcbx18][_0x73f6[172]]);_0xabcbxc[_0x73f6[50]](urlList[_0xabcbx18][_0x73f6[66]]);this[_0x73f6[148]][_0x73f6[68]](_0xabcbxc);} ;} ;var _0xabcbx1c=this;if( typeof _0xabcbx1c[_0x73f6[173]]!=_0x73f6[129]){_0xabcbx1c[_0x73f6[173]][_0x73f6[89]]();} ;glarge=eldata[_0x73f6[64]];gthumbs=eldata[_0x73f6[62]];if(glarge[_0x73f6[23]]==gthumbs[_0x73f6[23]]&&glarge[_0x73f6[23]]>0){var _0xabcbx1d=$(_0x73f6[174]);for(_0xabcbx18=0;_0xabcbx18<gthumbs[_0x73f6[23]];_0xabcbx18++){var _0xabcbx2c=$(_0x73f6[52]);var _0xabcbxc=$(_0x73f6[175]);var _0xabcbx1b=$(_0x73f6[61]);_0xabcbx1b[_0x73f6[73]](_0x73f6[176]);if(_0xabcbx18==0){_0xabcbx1b[_0x73f6[73]](_0x73f6[177]);} ;_0xabcbx1b[_0x73f6[57]](_0x73f6[27],gthumbs[_0xabcbx18]);_0xabcbx1b[_0x73f6[57]](_0x73f6[178],glarge[_0xabcbx18]);_0xabcbxc[_0x73f6[68]](_0xabcbx1b);_0xabcbx2c[_0x73f6[68]](_0xabcbxc);_0xabcbx1d[_0x73f6[68]](_0xabcbx2c);} ;_0xabcbx1d[_0x73f6[73]](_0x73f6[179]);_0xabcbx1d[_0x73f6[180]]();var _0xabcbx2d=$(_0x73f6[181]);_0xabcbx2d[_0x73f6[68]](_0xabcbx1d)[_0x73f6[19]](_0x73f6[186])[_0x73f6[42]](_0x73f6[90],function (){_0xabcbx2d[_0x73f6[19]](_0x73f6[182])[_0x73f6[99]](_0x73f6[177]);$(this)[_0x73f6[73]](_0x73f6[177]);$largePhoto=$(this)[_0x73f6[30]](_0x73f6[64]);$(_0x73f6[61])[_0x73f6[185]](function (){_0xabcbx1c[_0x73f6[154]][_0x73f6[19]](_0x73f6[16])[_0x73f6[184]](500,function (){$(this)[_0x73f6[183]](500)[_0x73f6[57]](_0x73f6[27],$largePhoto);} );} )[_0x73f6[57]](_0x73f6[27],$largePhoto);} );_0xabcbx1c[_0x73f6[150]][_0x73f6[68]](_0x73f6[187]);_0xabcbx1c[_0x73f6[150]][_0x73f6[68]](_0xabcbx2d);} else {_0xabcbx1c[_0x73f6[150]][_0x73f6[19]](_0x73f6[188])[_0x73f6[89]]();} ;if(_0xabcbx1c[_0x73f6[154]][_0x73f6[190]](_0x73f6[189])){this[_0x73f6[152]][_0x73f6[191]]();$(_0x73f6[61])[_0x73f6[185]](function (){var _0xabcbx2e=$(this);if(_0xabcbx2e[_0x73f6[57]](_0x73f6[27])===_0xabcbx1c[_0x73f6[138]][_0x73f6[112]](_0x73f6[92])[_0x73f6[19]](_0x73f6[16])[_0x73f6[30]](_0x73f6[192])){_0xabcbx1c[_0x73f6[152]][_0x73f6[193]]();_0xabcbx1c[_0x73f6[154]][_0x73f6[19]](_0x73f6[16])[_0x73f6[89]]();_0xabcbx1c[_0x73f6[173]]=_0xabcbx2e[_0x73f6[183]](350);_0xabcbx1c[_0x73f6[154]][_0x73f6[68]](_0xabcbx1c.$largeImg);} ;} )[_0x73f6[57]](_0x73f6[27],eldata[_0x73f6[64]][0]);} ;} ;} ,open:function (){setTimeout($[_0x73f6[195]](function (){this[_0x73f6[194]]();this[_0x73f6[167]]();} ,this),25);} ,close:function (){var _0xabcbxc=this,_0xabcbx1c=function (){if(_0xabcbx26){$(this)[_0x73f6[6]](_0xabcbxb);} ;_0xabcbxc[_0x73f6[138]][_0x73f6[99]](_0x73f6[166]);_0xabcbxc[_0x73f6[160]][_0x73f6[89]]();} ;setTimeout($[_0x73f6[195]](function (){if( typeof this[_0x73f6[173]]!==_0x73f6[129]){this[_0x73f6[173]][_0x73f6[184]](_0x73f6[196]);} ;this[_0x73f6[160]][_0x73f6[97]](_0x73f6[126],0);var _0xabcbx1a=_0xabcbxa[_0x73f6[165]](this[_0x73f6[139]]);_0xabcbx1a[_0x73f6[97]](_0x73f6[126],_0xabcbx1a[_0x73f6[30]](_0x73f6[126]))[_0x73f6[5]](_0xabcbxb,_0xabcbx1c);if(!_0xabcbx26){_0xabcbx1c[_0x73f6[26]]();} ;} ,this),25);return false;} ,calcHeight:function (){var _0xabcbx1c=_0xabcbx6[_0x73f6[126]]-this[_0x73f6[138]][_0x73f6[30]](_0x73f6[126])-_0xabcbx22,_0xabcbxc=_0xabcbx6[_0x73f6[126]];if(_0xabcbx1c<_0xabcbx27[_0x73f6[197]]){_0xabcbx1c=_0xabcbx27[_0x73f6[197]];_0xabcbxc=_0xabcbx27[_0x73f6[197]]+this[_0x73f6[138]][_0x73f6[30]](_0x73f6[126])+_0xabcbx22;} ;this[_0x73f6[126]]=_0xabcbx1c;this[_0x73f6[198]]=_0xabcbxc;} ,setHeights:function (){var _0xabcbxc=this,_0xabcbx1c=function (){if(_0xabcbx26){_0xabcbxc[_0x73f6[138]][_0x73f6[6]](_0xabcbxb);} ;_0xabcbxc[_0x73f6[138]][_0x73f6[73]](_0x73f6[166]);} ;this[_0x73f6[199]]();this[_0x73f6[160]][_0x73f6[97]](_0x73f6[126],this[_0x73f6[126]]);this[_0x73f6[138]][_0x73f6[97]](_0x73f6[126],this[_0x73f6[198]])[_0x73f6[5]](_0xabcbxb,_0xabcbx1c);if(!_0xabcbx26){_0xabcbx1c[_0x73f6[26]]();} ;} ,positionPreview:function (){var _0xabcbx1c=this[_0x73f6[138]][_0x73f6[30]](_0x73f6[127]),_0xabcbxc=this[_0x73f6[160]][_0x73f6[125]]()[_0x73f6[124]]-_0xabcbx21,_0xabcbx1a=this[_0x73f6[126]]+this[_0x73f6[138]][_0x73f6[30]](_0x73f6[126])+_0xabcbx22<=_0xabcbx6[_0x73f6[126]]?_0xabcbx1c:this[_0x73f6[126]]<_0xabcbx6[_0x73f6[126]]?_0xabcbxc-(_0xabcbx6[_0x73f6[126]]-this[_0x73f6[126]]):_0xabcbxc;_0xabcbx24[_0x73f6[104]]({scrollTop:_0xabcbx1a},_0xabcbx27[_0x73f6[200]]);} ,setTransition:function (){this[_0x73f6[160]][_0x73f6[97]](_0x73f6[118],_0x73f6[201]+_0xabcbx27[_0x73f6[200]]+_0x73f6[202]+_0xabcbx27[_0x73f6[203]]);this[_0x73f6[138]][_0x73f6[97]](_0x73f6[118],_0x73f6[201]+_0xabcbx27[_0x73f6[200]]+_0x73f6[202]+_0xabcbx27[_0x73f6[203]]);} ,getEl:function (){return this[_0x73f6[160]];} };_0xabcbxe[_0x73f6[12]](function (){_0xabcbx29(true);_0xabcbx8();_0xabcbx12();} );} ;} );(function (_0xabcbx7,_0xabcbx8,_0xabcbx6){_0xabcbx7[_0x73f6[204]]=function (_0xabcbx4,_0xabcbx10){this[_0x73f6[205]]=_0xabcbx7(_0xabcbx10);this._init(_0xabcbx4);} ;_0xabcbx7[_0x73f6[204]][_0x73f6[206]]={speed:300,easing:_0x73f6[123],hoverDelay:0,inverse:false};_0xabcbx7[_0x73f6[204]][_0x73f6[141]]={_init:function (_0xabcbx4){this[_0x73f6[207]]=_0xabcbx7[_0x73f6[47]](true,{},_0xabcbx7[_0x73f6[204]][_0x73f6[206]],_0xabcbx4);this[_0x73f6[208]]=_0x73f6[209]+this[_0x73f6[207]][_0x73f6[200]]+_0x73f6[202]+this[_0x73f6[207]][_0x73f6[203]];this[_0x73f6[210]]=Modernizr[_0x73f6[120]];this._loadEvents();} ,_loadEvents:function (){var _0xabcbx4=this;this[_0x73f6[205]][_0x73f6[5]](_0x73f6[211],function (_0xabcbxc){var _0xabcbxd=_0xabcbx7(this),_0xabcbx10=_0xabcbxd[_0x73f6[19]](_0x73f6[212]),_0xabcbxb=_0xabcbx4._getDir(_0xabcbxd,{x:_0xabcbxc[_0x73f6[213]],y:_0xabcbxc[_0x73f6[214]]}),_0xabcbxa=_0xabcbx4._getStyle(_0xabcbxb);if(_0xabcbxc[_0x73f6[7]]===_0x73f6[215]){_0xabcbx10[_0x73f6[193]]()[_0x73f6[97]](_0xabcbxa[_0x73f6[216]]);clearTimeout(_0xabcbx4[_0x73f6[217]]);_0xabcbx4[_0x73f6[217]]=setTimeout(function (){_0xabcbx10[_0x73f6[191]](0,function (){var _0xabcbxe=_0xabcbx7(this);if(_0xabcbx4[_0x73f6[210]]){_0xabcbxe[_0x73f6[97]](_0x73f6[118],_0xabcbx4[_0x73f6[208]]);} ;_0xabcbx4._applyAnimation(_0xabcbxe,_0xabcbxa[_0x73f6[218]],_0xabcbx4[_0x73f6[207]][_0x73f6[200]]);} );} ,_0xabcbx4[_0x73f6[207]][_0x73f6[75]]);} else {if(_0xabcbx4[_0x73f6[210]]){_0xabcbx10[_0x73f6[97]](_0x73f6[118],_0xabcbx4[_0x73f6[208]]);} ;clearTimeout(_0xabcbx4[_0x73f6[217]]);_0xabcbx4._applyAnimation(_0xabcbx10,_0xabcbxa[_0x73f6[216]],_0xabcbx4[_0x73f6[207]][_0x73f6[200]]);} ;} );} ,_getDir:function (_0xabcbxd,_0xabcbxe){var _0xabcbx10=_0xabcbxd[_0x73f6[132]](),_0xabcbxc=_0xabcbxd[_0x73f6[126]](),_0xabcbx4=(_0xabcbxe[_0x73f6[219]]-_0xabcbxd[_0x73f6[125]]()[_0x73f6[220]]-(_0xabcbx10/2))*(_0xabcbx10>_0xabcbxc?(_0xabcbxc/_0xabcbx10):1),_0xabcbxf=(_0xabcbxe[_0x73f6[221]]-_0xabcbxd[_0x73f6[125]]()[_0x73f6[124]]-(_0xabcbxc/2))*(_0xabcbxc>_0xabcbx10?(_0xabcbx10/_0xabcbxc):1),_0xabcbxb=Math[_0x73f6[224]]((((Math[_0x73f6[222]](_0xabcbxf,_0xabcbx4)*(180/Math[_0x73f6[223]]))+180)/90)+3)%4;return _0xabcbxb;} ,_getStyle:function (_0xabcbxe){var _0xabcbxd,_0xabcbxf,_0xabcbxc={left:_0x73f6[225],top:_0x73f6[226]},_0xabcbx4={left:_0x73f6[225],top:_0x73f6[227]},_0xabcbxa={left:_0x73f6[226],top:_0x73f6[225]},_0xabcbx10={left:_0x73f6[227],top:_0x73f6[225]},_0xabcbx11={top:_0x73f6[225]},_0xabcbxb={left:_0x73f6[225]};switch(_0xabcbxe){case 0:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbxc:_0xabcbx4;_0xabcbxf=_0xabcbx11;break ;;case 1:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbx10:_0xabcbxa;_0xabcbxf=_0xabcbxb;break ;;case 2:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbx4:_0xabcbxc;_0xabcbxf=_0xabcbx11;break ;;case 3:_0xabcbxd=!this[_0x73f6[207]][_0x73f6[228]]?_0xabcbxa:_0xabcbx10;_0xabcbxf=_0xabcbxb;break ;;} ;return {from:_0xabcbxd,to:_0xabcbxf};} ,_applyAnimation:function (_0xabcbx10,_0xabcbx4,_0xabcbxd){_0xabcbx7[_0x73f6[13]][_0x73f6[229]]=this[_0x73f6[210]]?_0xabcbx7[_0x73f6[13]][_0x73f6[97]]:_0xabcbx7[_0x73f6[13]][_0x73f6[104]];_0xabcbx10[_0x73f6[231]]()[_0x73f6[229]](_0xabcbx4,_0xabcbx7[_0x73f6[47]](true,[],{duration:_0xabcbxd+_0x73f6[230]}));} };var _0xabcbx5=function (_0xabcbx4){if(_0xabcbx8[_0x73f6[232]]){_0xabcbx8[_0x73f6[232]][_0x73f6[41]](_0xabcbx4);} ;} ;_0xabcbx7[_0x73f6[13]][_0x73f6[77]]=function (_0xabcbxd){var _0xabcbx4=_0xabcbx7[_0x73f6[30]](this,_0x73f6[77]);if( typeof _0xabcbxd===_0x73f6[233]){var _0xabcbx10=Array[_0x73f6[141]][_0x73f6[234]][_0x73f6[26]](arguments,1);this[_0x73f6[22]](function (){if(!_0xabcbx4){_0xabcbx5(_0x73f6[235]+_0xabcbxd+_0x73f6[236]);return ;} ;if(!_0xabcbx7[_0x73f6[14]](_0xabcbx4[_0xabcbxd])||_0xabcbxd[_0x73f6[237]](0)===_0x73f6[238]){_0xabcbx5(_0x73f6[239]+_0xabcbxd+_0x73f6[240]);return ;} ;_0xabcbx4[_0xabcbxd][_0x73f6[8]](_0xabcbx4,_0xabcbx10);} );} else {this[_0x73f6[22]](function (){if(_0xabcbx4){_0xabcbx4._init();} else {_0xabcbx4=_0xabcbx7[_0x73f6[30]](this,_0x73f6[77], new _0xabcbx7.HoverDir(_0xabcbxd,this));} ;} );} ;return _0xabcbx4;} ;} )(jQuery,window);(function (_0xabcbxd,_0xabcbxa,_0xabcbx4){var _0xabcbx5=_0xabcbxd[_0x73f6[0]],_0xabcbx8,_0xabcbxb;_0xabcbx8=_0xabcbx5[_0x73f6[2]][_0x73f6[1]]={setup:function (){_0xabcbxd(this)[_0x73f6[5]](_0x73f6[3],_0xabcbx8[_0x73f6[4]]);} ,teardown:function (){_0xabcbxd(this)[_0x73f6[6]](_0x73f6[3],_0xabcbx8[_0x73f6[4]]);} ,handler:function (_0xabcbx16,_0xabcbxe){var _0xabcbx12=this,_0xabcbx11=arguments,_0xabcbxf=function (){_0xabcbx16[_0x73f6[7]]=_0x73f6[1];_0xabcbx5[_0x73f6[9]][_0x73f6[8]](_0xabcbx12,_0xabcbx11);} ;if(_0xabcbxb){clearTimeout(_0xabcbxb);} ;_0xabcbxe?_0xabcbxf():_0xabcbxb=setTimeout(_0xabcbxf,_0xabcbx8[_0x73f6[10]]);} ,threshold:150};var _0xabcbx7=_0x73f6[11];_0xabcbxd[_0x73f6[13]][_0x73f6[12]]=function (_0xabcbx29){var _0xabcbx16=this,_0xabcbx20=_0xabcbxd[_0x73f6[14]](_0xabcbxd.Deferred)?_0xabcbxd.Deferred():0,_0xabcbx26=_0xabcbxd[_0x73f6[14]](_0xabcbx20[_0x73f6[15]]),_0xabcbxf=_0xabcbx16[_0x73f6[19]](_0x73f6[16])[_0x73f6[18]](_0xabcbx16[_0x73f6[17]](_0x73f6[16])),_0xabcbx11=[],_0xabcbx22=[],_0xabcbx12=[];if(_0xabcbxd[_0x73f6[20]](_0xabcbx29)){_0xabcbxd[_0x73f6[22]](_0xabcbx29,function (_0xabcbx14,_0xabcbx28){if(_0xabcbx14===_0x73f6[21]){_0xabcbx29=_0xabcbx28;} else {if(_0xabcbx20){_0xabcbx20[_0xabcbx14](_0xabcbx28);} ;} ;} );} ;function _0xabcbx1e(){var _0xabcbx14=_0xabcbxd(_0xabcbx22),_0xabcbx28=_0xabcbxd(_0xabcbx12);if(_0xabcbx20){if(_0xabcbx12[_0x73f6[23]]){_0xabcbx20[_0x73f6[24]](_0xabcbxf,_0xabcbx14,_0xabcbx28);} else {_0xabcbx20[_0x73f6[25]](_0xabcbxf);} ;} ;if(_0xabcbxd[_0x73f6[14]](_0xabcbx29)){_0xabcbx29[_0x73f6[26]](_0xabcbx16,_0xabcbxf,_0xabcbx14,_0xabcbx28);} ;} ;function _0xabcbxe(_0xabcbx14,_0xabcbx28){if(_0xabcbx14[_0x73f6[27]]===_0xabcbx7||_0xabcbxd[_0x73f6[28]](_0xabcbx14,_0xabcbx11)!==-1){return ;} ;_0xabcbx11[_0x73f6[29]](_0xabcbx14);if(_0xabcbx28){_0xabcbx12[_0x73f6[29]](_0xabcbx14);} else {_0xabcbx22[_0x73f6[29]](_0xabcbx14);} ;_0xabcbxd[_0x73f6[30]](_0xabcbx14,_0x73f6[12],{isBroken:_0xabcbx28,src:_0xabcbx14[_0x73f6[27]]});if(_0xabcbx26){_0xabcbx20[_0x73f6[31]](_0xabcbxd(_0xabcbx14),[_0xabcbx28,_0xabcbxf,_0xabcbxd(_0xabcbx22),_0xabcbxd(_0xabcbx12)]);} ;if(_0xabcbxf[_0x73f6[23]]===_0xabcbx11[_0x73f6[23]]){setTimeout(_0xabcbx1e);_0xabcbxf[_0x73f6[33]](_0x73f6[32]);} ;} ;if(!_0xabcbxf[_0x73f6[23]]){_0xabcbx1e();} else {_0xabcbxf[_0x73f6[42]](_0x73f6[39],function (_0xabcbx14){_0xabcbxe(_0xabcbx14[_0x73f6[40]],_0xabcbx14[_0x73f6[7]]===_0x73f6[41]);} )[_0x73f6[22]](function (_0xabcbx14,_0xabcbx23){var _0xabcbx19=_0xabcbx23[_0x73f6[27]];var _0xabcbx28=_0xabcbxd[_0x73f6[30]](_0xabcbx23,_0x73f6[12]);if(_0xabcbx28&&_0xabcbx28[_0x73f6[27]]===_0xabcbx19){_0xabcbxe(_0xabcbx23,_0xabcbx28[_0x73f6[34]]);return ;} ;if(_0xabcbx23[_0x73f6[35]]&&_0xabcbx23[_0x73f6[36]]!==_0xabcbx4){_0xabcbxe(_0xabcbx23,_0xabcbx23[_0x73f6[36]]===0||_0xabcbx23[_0x73f6[37]]===0);return ;} ;if(_0xabcbx23[_0x73f6[38]]||_0xabcbx23[_0x73f6[35]]){_0xabcbx23[_0x73f6[27]]=_0xabcbx7;_0xabcbx23[_0x73f6[27]]=_0xabcbx19;} ;} );} ;return _0xabcbx20?_0xabcbx20[_0x73f6[43]](_0xabcbx16):_0xabcbx16;} ;var _0xabcbx6=_0xabcbxd(_0xabcbxa),_0xabcbx10=_0xabcbxa[_0x73f6[241]];_0xabcbxd[_0x73f6[242]]=function (_0xabcbxe,_0xabcbxf){this[_0x73f6[205]]=_0xabcbxd(_0xabcbxf);this._init(_0xabcbxe);} ;_0xabcbxd[_0x73f6[242]][_0x73f6[206]]={orientation:_0x73f6[243],speed:500,easing:_0x73f6[244],minItems:3,start:0,onClick:function (_0xabcbx11,_0xabcbxe,_0xabcbxf){return false;} ,onReady:function (){return false;} ,onBeforeSlide:function (){return false;} ,onAfterSlide:function (){return false;} };_0xabcbxd[_0x73f6[242]][_0x73f6[141]]={_init:function (_0xabcbxf){this[_0x73f6[207]]=_0xabcbxd[_0x73f6[47]](true,{},_0xabcbxd[_0x73f6[242]][_0x73f6[206]],_0xabcbxf);var _0xabcbxe=this,_0xabcbx11={WebkitTransition:_0x73f6[114],MozTransition:_0x73f6[115],OTransition:_0x73f6[116],msTransition:_0x73f6[117],transition:_0x73f6[115]};this[_0x73f6[245]]=_0xabcbx11[_0xabcbx10[_0x73f6[119]](_0x73f6[118])];this[_0x73f6[210]]=_0xabcbx10[_0x73f6[120]]&&_0xabcbx10[_0x73f6[246]];this[_0x73f6[98]]=this[_0x73f6[207]][_0x73f6[247]];this[_0x73f6[248]]=false;this[_0x73f6[249]]=this[_0x73f6[205]][_0x73f6[112]](_0x73f6[78]);this[_0x73f6[250]]=this[_0x73f6[249]][_0x73f6[23]];if(this[_0x73f6[250]]===0){return false;} ;this._validate();this[_0x73f6[249]][_0x73f6[251]]();this[_0x73f6[205]][_0x73f6[252]]();this[_0x73f6[205]][_0x73f6[68]](this.$items);this[_0x73f6[205]][_0x73f6[256]](_0x73f6[253]+this[_0x73f6[207]][_0x73f6[254]]+_0x73f6[255]);this[_0x73f6[257]]=false;this[_0x73f6[258]]=setTimeout(function (){_0xabcbxe._addTransition();} ,100);this[_0x73f6[205]][_0x73f6[12]](function (){_0xabcbxe[_0x73f6[205]][_0x73f6[191]]();_0xabcbxe._layout();_0xabcbxe._configure();if(_0xabcbxe[_0x73f6[257]]){_0xabcbxe._removeTransition();_0xabcbxe._slideToItem(_0xabcbxe[_0x73f6[98]]);_0xabcbxe[_0x73f6[205]][_0x73f6[5]](_0xabcbxe[_0x73f6[245]],function (){_0xabcbxe[_0x73f6[205]][_0x73f6[6]](_0xabcbxe[_0x73f6[245]]);_0xabcbxe._setWrapperSize();_0xabcbxe._addTransition();_0xabcbxe._initEvents();} );} else {clearTimeout(_0xabcbxe[_0x73f6[258]]);_0xabcbxe._setWrapperSize();_0xabcbxe._initEvents();_0xabcbxe._slideToItem(_0xabcbxe[_0x73f6[98]]);setTimeout(function (){_0xabcbxe._addTransition();} ,25);} ;_0xabcbxe[_0x73f6[207]][_0x73f6[259]]();} );} ,_validate:function (){if(this[_0x73f6[207]][_0x73f6[200]]<0){this[_0x73f6[207]][_0x73f6[200]]=500;} ;if(this[_0x73f6[207]][_0x73f6[260]]<1||this[_0x73f6[207]][_0x73f6[260]]>this[_0x73f6[250]]){this[_0x73f6[207]][_0x73f6[260]]=1;} ;if(this[_0x73f6[207]][_0x73f6[247]]<0||this[_0x73f6[207]][_0x73f6[247]]>this[_0x73f6[250]]-1){this[_0x73f6[207]][_0x73f6[247]]=0;} ;if(this[_0x73f6[207]][_0x73f6[254]]!=_0x73f6[243]&&this[_0x73f6[207]][_0x73f6[254]]!=_0x73f6[261]){this[_0x73f6[207]][_0x73f6[254]]=_0x73f6[243];} ;} ,_layout:function (){this[_0x73f6[205]][_0x73f6[256]](_0x73f6[262]);this[_0x73f6[263]]=this[_0x73f6[205]][_0x73f6[101]]();this[_0x73f6[264]]=this[_0x73f6[263]][_0x73f6[101]]()[_0x73f6[99]](_0x73f6[265]);var _0xabcbxe=this[_0x73f6[249]][_0x73f6[19]](_0x73f6[266]);this[_0x73f6[267]]={width:_0xabcbxe[_0x73f6[268]](true),height:_0xabcbxe[_0x73f6[269]](true)};this._setItemsSize();this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[205]][_0x73f6[97]](_0x73f6[270],this[_0x73f6[267]][_0x73f6[126]]):this[_0x73f6[205]][_0x73f6[97]](_0x73f6[126],this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[126]]);this._addControls();} ,_addTransition:function (){if(this[_0x73f6[210]]){this[_0x73f6[205]][_0x73f6[97]](_0x73f6[118],_0x73f6[209]+this[_0x73f6[207]][_0x73f6[200]]+_0x73f6[202]+this[_0x73f6[207]][_0x73f6[203]]);} ;this[_0x73f6[257]]=true;} ,_removeTransition:function (){if(this[_0x73f6[210]]){this[_0x73f6[205]][_0x73f6[97]](_0x73f6[118],_0x73f6[271]);} ;this[_0x73f6[257]]=false;} ,_addControls:function (){var _0xabcbxe=this;this[_0x73f6[272]]=_0xabcbxd(_0x73f6[273])[_0x73f6[69]](this.$wrapper);this[_0x73f6[274]]=this[_0x73f6[272]][_0x73f6[19]](_0x73f6[277])[_0x73f6[5]](_0x73f6[275],function (_0xabcbxf){_0xabcbxe._slide(_0x73f6[276]);return false;} );this[_0x73f6[278]]=this[_0x73f6[272]][_0x73f6[19]](_0x73f6[280])[_0x73f6[5]](_0x73f6[275],function (_0xabcbxf){_0xabcbxe._slide(_0x73f6[279]);return false;} );} ,_setItemsSize:function (){var _0xabcbxe=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?(Math[_0x73f6[281]](this[_0x73f6[263]][_0x73f6[132]]()/this[_0x73f6[207]][_0x73f6[260]])*100)/this[_0x73f6[263]][_0x73f6[132]]():100;this[_0x73f6[249]][_0x73f6[97]]({width:_0xabcbxe+_0x73f6[282],"\x6D\x61\x78\x2D\x77\x69\x64\x74\x68":this[_0x73f6[267]][_0x73f6[132]],"\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74":this[_0x73f6[267]][_0x73f6[126]]});if(this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[261]){this[_0x73f6[264]][_0x73f6[97]](_0x73f6[283],this[_0x73f6[267]][_0x73f6[132]]+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[284]))+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[285])));} ;} ,_setWrapperSize:function (){if(this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[261]){this[_0x73f6[264]][_0x73f6[97]]({height:this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[126]]+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[286]))+parseInt(this[_0x73f6[264]][_0x73f6[97]](_0x73f6[287]))});} ;} ,_configure:function (){this[_0x73f6[288]]=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[263]][_0x73f6[132]]()<this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[132]]?this[_0x73f6[207]][_0x73f6[260]]:Math[_0x73f6[281]](this[_0x73f6[263]][_0x73f6[132]]()/this[_0x73f6[267]][_0x73f6[132]]):this[_0x73f6[263]][_0x73f6[126]]()<this[_0x73f6[207]][_0x73f6[260]]*this[_0x73f6[267]][_0x73f6[126]]?this[_0x73f6[207]][_0x73f6[260]]:Math[_0x73f6[281]](this[_0x73f6[263]][_0x73f6[126]]()/this[_0x73f6[267]][_0x73f6[126]]);} ,_initEvents:function (){var _0xabcbxe=this;_0xabcbx6[_0x73f6[5]](_0x73f6[289],function (){_0xabcbxe._setItemsSize();_0xabcbxe._configure();_0xabcbxe._slideToItem(_0xabcbxe[_0x73f6[98]]);} );this[_0x73f6[205]][_0x73f6[5]](this[_0x73f6[245]],function (){_0xabcbxe._onEndTransition();} );if(this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]){this[_0x73f6[205]][_0x73f6[5]]({swipeleft:function (){_0xabcbxe._slide(_0x73f6[279]);} ,swiperight:function (){_0xabcbxe._slide(_0x73f6[276]);} });} else {this[_0x73f6[205]][_0x73f6[5]]({swipeup:function (){_0xabcbxe._slide(_0x73f6[279]);} ,swipedown:function (){_0xabcbxe._slide(_0x73f6[276]);} });} ;this[_0x73f6[205]][_0x73f6[5]](_0x73f6[290],_0x73f6[78],function (_0xabcbx11){var _0xabcbxf=_0xabcbxd(this);_0xabcbxe[_0x73f6[207]][_0x73f6[291]](_0xabcbxf,_0xabcbxf[_0x73f6[130]](),_0xabcbx11);} );} ,_destroy:function (_0xabcbxe){this[_0x73f6[205]][_0x73f6[6]](this[_0x73f6[245]])[_0x73f6[6]](_0x73f6[292]);_0xabcbx6[_0x73f6[6]](_0x73f6[293]);this[_0x73f6[205]][_0x73f6[97]]({"\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74":_0x73f6[96],transition:_0x73f6[96]})[_0x73f6[294]](this.$carousel)[_0x73f6[294]](this.$wrapper);this[_0x73f6[249]][_0x73f6[97]]({width:_0x73f6[295],"\x6D\x61\x78\x2D\x77\x69\x64\x74\x68":_0x73f6[96],"\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74":_0x73f6[96]});this[_0x73f6[272]][_0x73f6[89]]();this[_0x73f6[264]][_0x73f6[89]]();if(_0xabcbxe){_0xabcbxe[_0x73f6[26]]();} ;} ,_toggleControls:function (_0xabcbxe,_0xabcbxf){if(_0xabcbxf){(_0xabcbxe===_0x73f6[279])?this[_0x73f6[278]][_0x73f6[191]]():this[_0x73f6[274]][_0x73f6[191]]();} else {(_0xabcbxe===_0x73f6[279])?this[_0x73f6[278]][_0x73f6[193]]():this[_0x73f6[274]][_0x73f6[193]]();} ;} ,_slide:function (_0xabcbxf,_0xabcbx12){if(this[_0x73f6[248]]){return false;} ;this[_0x73f6[207]][_0x73f6[296]]();this[_0x73f6[248]]=true;var _0xabcbx20=this,_0xabcbxe=this[_0x73f6[297]]||0,_0xabcbx22=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[249]][_0x73f6[268]](true):this[_0x73f6[249]][_0x73f6[269]](true),_0xabcbx16=this[_0x73f6[250]]*_0xabcbx22,_0xabcbx11=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[263]][_0x73f6[132]]():this[_0x73f6[263]][_0x73f6[126]]();if(_0xabcbx12===_0xabcbx4){var _0xabcbx1e=this[_0x73f6[288]]*_0xabcbx22;if(_0xabcbx1e<0){return false;} ;if(_0xabcbxf===_0x73f6[279]&&_0xabcbx16-(Math[_0x73f6[298]](_0xabcbxe)+_0xabcbx1e)<_0xabcbx11){_0xabcbx1e=_0xabcbx16-(Math[_0x73f6[298]](_0xabcbxe)+_0xabcbx11);this._toggleControls(_0x73f6[279],false);this._toggleControls(_0x73f6[276],true);} else {if(_0xabcbxf===_0x73f6[276]&&Math[_0x73f6[298]](_0xabcbxe)-_0xabcbx1e<0){_0xabcbx1e=Math[_0x73f6[298]](_0xabcbxe);this._toggleControls(_0x73f6[279],true);this._toggleControls(_0x73f6[276],false);} else {var _0xabcbx26=_0xabcbxf===_0x73f6[279]?Math[_0x73f6[298]](_0xabcbxe)+Math[_0x73f6[298]](_0xabcbx1e):Math[_0x73f6[298]](_0xabcbxe)-Math[_0x73f6[298]](_0xabcbx1e);_0xabcbx26>0?this._toggleControls(_0x73f6[276],true):this._toggleControls(_0x73f6[276],false);_0xabcbx26<_0xabcbx16-_0xabcbx11?this._toggleControls(_0x73f6[279],true):this._toggleControls(_0x73f6[279],false);} ;} ;_0xabcbx12=_0xabcbxf===_0x73f6[279]?_0xabcbxe-_0xabcbx1e:_0xabcbxe+_0xabcbx1e;} else {var _0xabcbx1e=Math[_0x73f6[298]](_0xabcbx12);if(Math[_0x73f6[299]](_0xabcbx16,_0xabcbx11)-_0xabcbx1e<_0xabcbx11){_0xabcbx12=-(Math[_0x73f6[299]](_0xabcbx16,_0xabcbx11)-_0xabcbx11);} ;_0xabcbx1e>0?this._toggleControls(_0x73f6[276],true):this._toggleControls(_0x73f6[276],false);Math[_0x73f6[299]](_0xabcbx16,_0xabcbx11)-_0xabcbx11>_0xabcbx1e?this._toggleControls(_0x73f6[279],true):this._toggleControls(_0x73f6[279],false);} ;this[_0x73f6[297]]=_0xabcbx12;if(_0xabcbxe===_0xabcbx12){this._onEndTransition();return false;} ;if(this[_0x73f6[210]]){this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[205]][_0x73f6[97]](_0x73f6[300],_0x73f6[301]+_0xabcbx12+_0x73f6[302]):this[_0x73f6[205]][_0x73f6[97]](_0x73f6[300],_0x73f6[303]+_0xabcbx12+_0x73f6[302]);} else {_0xabcbxd[_0x73f6[13]][_0x73f6[229]]=this[_0x73f6[257]]?_0xabcbxd[_0x73f6[13]][_0x73f6[104]]:_0xabcbxd[_0x73f6[13]][_0x73f6[97]];var _0xabcbx29=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?{left:_0xabcbx12}:{top:_0xabcbx12};this[_0x73f6[205]][_0x73f6[231]]()[_0x73f6[229]](_0xabcbx29,_0xabcbxd[_0x73f6[47]](true,[],{duration:this[_0x73f6[207]][_0x73f6[200]],complete:function (){_0xabcbx20._onEndTransition();} }));} ;if(!this[_0x73f6[257]]){this._onEndTransition();} ;} ,_onEndTransition:function (){this[_0x73f6[248]]=false;this[_0x73f6[207]][_0x73f6[304]]();} ,_slideTo:function (_0xabcbx16){var _0xabcbx16=_0xabcbx16||this[_0x73f6[98]],_0xabcbx12=Math[_0x73f6[298]](this[_0x73f6[297]])||0,_0xabcbx11=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?this[_0x73f6[249]][_0x73f6[268]](true):this[_0x73f6[249]][_0x73f6[269]](true),_0xabcbxf=_0xabcbx12+this[_0x73f6[263]][_0x73f6[132]](),_0xabcbxe=Math[_0x73f6[298]](_0xabcbx16*_0xabcbx11);if(_0xabcbxe+_0xabcbx11>_0xabcbxf||_0xabcbxe<_0xabcbx12){this._slideToItem(_0xabcbx16);} ;} ,_slideToItem:function (_0xabcbxf){var _0xabcbxe=this[_0x73f6[207]][_0x73f6[254]]===_0x73f6[243]?_0xabcbxf*this[_0x73f6[249]][_0x73f6[268]](true):_0xabcbxf*this[_0x73f6[249]][_0x73f6[269]](true);this._slide(_0x73f6[46],-_0xabcbxe);} ,add:function (_0xabcbx12){var _0xabcbxe=this,_0xabcbx11=this[_0x73f6[98]],_0xabcbxf=this[_0x73f6[249]][_0x73f6[165]](this[_0x73f6[98]]);this[_0x73f6[249]]=this[_0x73f6[205]][_0x73f6[112]](_0x73f6[78]);this[_0x73f6[250]]=this[_0x73f6[249]][_0x73f6[23]];this[_0x73f6[98]]=_0xabcbxf[_0x73f6[130]]();this._setItemsSize();this._configure();this._removeTransition();_0xabcbx11<this[_0x73f6[98]]?this._slideToItem(this[_0x73f6[98]]):this._slide(_0x73f6[279],this[_0x73f6[297]]);setTimeout(function (){_0xabcbxe._addTransition();} ,25);if(_0xabcbx12){_0xabcbx12[_0x73f6[26]]();} ;} ,setCurrent:function (_0xabcbxe,_0xabcbxf){this[_0x73f6[98]]=_0xabcbxe;this._slideTo();if(_0xabcbxf){_0xabcbxf[_0x73f6[26]]();} ;} ,next:function (){self._slide(_0x73f6[279]);} ,previous:function (){self._slide(_0x73f6[276]);} ,slideStart:function (){this._slideTo(0);} ,slideEnd:function (){this._slideTo(this[_0x73f6[250]]-1);} ,destroy:function (_0xabcbxe){this._destroy(_0xabcbxe);} };var _0xabcbxc=function (_0xabcbxe){if(_0xabcbxa[_0x73f6[232]]){_0xabcbxa[_0x73f6[232]][_0x73f6[41]](_0xabcbxe);} ;} ;_0xabcbxd[_0x73f6[13]][_0x73f6[180]]=function (_0xabcbx11){var _0xabcbxe=_0xabcbxd[_0x73f6[30]](this,_0x73f6[180]);if( typeof _0xabcbx11===_0x73f6[233]){var _0xabcbxf=Array[_0x73f6[141]][_0x73f6[234]][_0x73f6[26]](arguments,1);this[_0x73f6[22]](function (){if(!_0xabcbxe){_0xabcbxc(_0x73f6[305]+_0xabcbx11+_0x73f6[236]);return ;} ;if(!_0xabcbxd[_0x73f6[14]](_0xabcbxe[_0xabcbx11])||_0xabcbx11[_0x73f6[237]](0)===_0x73f6[238]){_0xabcbxc(_0x73f6[239]+_0xabcbx11+_0x73f6[306]);return ;} ;_0xabcbxe[_0xabcbx11][_0x73f6[8]](_0xabcbxe,_0xabcbxf);} );} else {this[_0x73f6[22]](function (){if(_0xabcbxe){_0xabcbxe._init();} else {_0xabcbxe=_0xabcbxd[_0x73f6[30]](this,_0x73f6[180], new _0xabcbxd.Elastislide(_0xabcbx11,this));} ;} );} ;return _0xabcbxe;} ;} )(jQuery,window);
var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(e,a){var d=this,c=arguments,b=function(){e.type="debouncedresize";$event.dispatch.apply(d,c)};if(resizeTimeout){clearTimeout(resizeTimeout)}a?b():resizeTimeout=setTimeout(b,$special.threshold)},threshold:250};var BLANK="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";$.fn.imagesLoaded=function(h){var e=this,j=$.isFunction($.Deferred)?$.Deferred():0,i=$.isFunction(j.notify),b=e.find("img").add(e.filter("img")),c=[],g=[],d=[];if($.isPlainObject(h)){$.each(h,function(k,l){if(k==="callback"){h=l}else{if(j){j[k](l)}}})}function f(){var k=$(g),l=$(d);if(j){if(d.length){j.reject(b,k,l)}else{j.resolve(b)}}if($.isFunction(h)){h.call(e,b,k,l)}}function a(k,l){if(k.src===BLANK||$.inArray(k,c)!==-1){return}c.push(k);if(l){d.push(k)}else{g.push(k)}$.data(k,"imagesLoaded",{isBroken:l,src:k.src});if(i){j.notifyWith($(k),[l,b,$(g),$(d)])}if(b.length===c.length){setTimeout(f);b.unbind(".imagesLoaded")}}if(!b.length){f()}else{b.bind("load.imagesLoaded error.imagesLoaded",function(k){a(k.target,k.type==="error")}).each(function(k,m){var n=m.src;var l=$.data(m,"imagesLoaded");if(l&&l.src===n){a(m,l.isBroken);return}if(m.complete&&m.naturalWidth!==undefined){a(m,m.naturalWidth===0||m.naturalHeight===0);return}if(m.readyState||m.complete){m.src=BLANK;m.src=n}})}return j?j.promise(e):e};$(function(){$.elastic_grid={version:"1.0"};$.fn.elastic_grid=function(G){G=$.extend({},{items:null,filterEffect:"",hoverDirection:true,hoverDelay:0,hoverInverse:false,expandingHeight:500,expandingSpeed:300,callback:function(){}},G);var u=$(this);var H=G.items.length;if(H==0){return false}u.html('<div class="wagwep-container"><nav id="porfolio-nav" class="clearfix"><ul id="portfolio-filter" class="nav nav-tabs clearfix"></ul></nav></div>');var g="";var o=$('<ul id="og-grid" class="og-grid"></ul>');for(itemIdx=0;itemIdx<H;itemIdx++){if(G.items[itemIdx]!=undefined){var E=G.items[itemIdx];liObject=$("<li></li>");tags=E.tags;strTag="";for(var C=tags.length-1;C>=0;C--){strTag+=","+tags[C]}strTag=strTag.substring(1);liObject.attr("data-tags",strTag);aObject=$("<a></a>");aObject.attr("href","javascript:;;");imgObject=$("<img/>");imgObject.attr("src",E.thumbnail[0]);imgObject.attr("data-largesrc",E.large[0]);spanObject=$("<span></span>");spanObject.html(E.title);figureObject=$("<figure></figure>");figureObject.append(spanObject);imgObject.appendTo(aObject);figureObject.appendTo(aObject);aObject.appendTo(liObject);liObject.appendTo(o)}}if(G.filterEffect==""){G.filterEffect="moveup"}o.addClass("effect-"+G.filterEffect);o.appendTo(u);if(G.hoverDirection==true){o.find("li").each(function(){$(this).hoverdir({hoverDelay:G.hoverDelay,inverse:G.hoverInverse})})}var m=u.find("#portfolio-filter");var x=o.find("li"),c={};numOfTag=0;x.each(function(J){var K=$(this),I=K.data("tags").split(",");K.attr("data-id",J);K.addClass("all");$.each(I,function(i,L){L=$.trim(L);K.addClass(L.toLowerCase().replace(" ","-"));if(!(L in c)){c[L]=[];numOfTag++}c[L].push(K)})});if(numOfTag>1){f("All");$.each(c,function(I,i){f(I)})}else{m.remove()}m.find("a").bind("click",function(I){k.find("li.og-expanded").find("a").trigger("click");k.find(".og-close").trigger("click");$this=$(this);$this.css("outline","none");m.find(".current").removeClass("current");$this.parent().addClass("current");var J=$this.text().toLowerCase().replace(" ","-");var i=H;o.find("li").each(function(K,L){classie.remove(L,"hidden");classie.remove(L,"animate");if(!--i){setTimeout(function(){p(o.find("li"),J)},1)}});return false});function p(i,I){i.each(function(J,K){if(classie.has(K,I)){classie.toggle(K,"animate");classie.remove(K,"hidden")}else{classie.add(K,"hidden");classie.remove(K,"animate")}})}m.find("li:first").addClass("current");function f(K){var J=K.toLowerCase().replace(" ","-");if(K!=""){var i=$("<li>");var I=$("<a>",{html:K,"data-filter":"."+J,href:"#","class":"filter"}).appendTo(i);i.appendTo(m)}}var k=o,h=k.children("li"),y=-1,t=-1,F=0,q=10,w=$(window),d,A=$("html, body"),B={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},j=B[Modernizr.prefixed("transition")],s=Modernizr.csstransitions,D={minHeight:G.expandingHeight,speed:G.expandingSpeed,easing:"ease"};function v(i){h=h.add(i);i.each(function(){var I=$(this);I.data({offsetTop:I.offset().top,height:I.height()})});l(i)}function r(i){h.each(function(){var I=$(this);I.data("offsetTop",I.offset().top);if(i){I.data("height",I.height())}})}function n(){l(h);w.on("debouncedresize",function(){F=0;t=-1;r();b();var i=$.data(this,"preview");if(typeof i!="undefined"){z()}})}function l(i){i.on("click","span.og-close",function(){z();return false}).children("a").on("click",function(J){var I=$(this).parent();I.removeClass("animate");y===I.index()?z($(this)):a(I);return false})}function b(){d={width:w.width(),height:w.height()}}function a(I){z();var J=$.data(this,"preview"),i=I.data("offsetTop");F=0;if(typeof J!="undefined"){if(t!==i){if(i>t){F=J.height}z()}else{J.update(I);return false}}t=i;J=$.data(this,"preview",new e(I));J.open()}function z(){h.find(".og-pointer").remove();y=-1;var i=$.data(this,"preview");if(typeof i=="undefined"){}else{i.close()}$.removeData(this,"preview")}function e(i){this.$item=i;this.expandedIdx=this.$item.index();this.create();this.update()}e.prototype={create:function(){this.$title=$("<h3></h3>");this.$description=$("<p></p>");this.$href=$('<a href="#">Visit website</a>');this.$detailButtonList=$('<span class="buttons-list"></span>');this.$details=$('<div class="og-details"></div>').append(this.$title,this.$description,this.$detailButtonList);this.$loading=$('<div class="og-loading"></div>');this.$fullimage=$('<div class="og-fullimg"></div>').append(this.$loading);this.$closePreview=$('<span class="og-close"></span>');this.$previewInner=$('<div class="og-expander-inner"></div>').append(this.$closePreview,this.$fullimage,this.$details);this.$previewEl=$('<div class="og-expander"></div>').append(this.$previewInner);this.$item.append($('<div class="og-pointer"></div>'));this.$item.append(this.getEl());if(s){this.setTransition()}},update:function(J){if(J){this.$item=J}if(y!==-1){var O=h.eq(y);O.removeClass("og-expanded");this.$item.addClass("og-expanded");this.positionPreview()}y=this.$item.index();if(typeof G.items[y]==="undefined"){}else{eldata=G.items[y];this.$title.html(eldata.title);this.$description.html(eldata.description);this.$detailButtonList.html("");urlList=eldata.button_list;if(urlList.length>0){for(C=0;C<urlList.length;C++){var i=$("<a></a>");i.addClass("link-button");if(C==0){i.addClass("first")}i.attr("href",urlList[C]["url"]);i.html(urlList[C]["title"]);this.$detailButtonList.append(i)}}var I=this;if(typeof I.$largeImg!="undefined"){I.$largeImg.remove()}glarge=eldata.large;gthumbs=eldata.thumbnail;if(glarge.length==gthumbs.length&&glarge.length>0){var L=$("<ul></ul>");for(C=0;C<gthumbs.length;C++){var N=$("<li></li>");var i=$('<a href="javascript:;;"></a>');var K=$("<img/>");K.addClass("related_photo");if(C==0){K.addClass("selected")}K.attr("src",gthumbs[C]);K.attr("data-large",glarge[C]);i.append(K);N.append(i);L.append(N)}L.addClass("elastislide-list");L.elastislide();var M=$('<div class="elastislide-wrapper elastislide-horizontal"></div>');M.append(L).find(".related_photo").bind("click",function(){M.find(".selected").removeClass("selected");$(this).addClass("selected");$largePhoto=$(this).data("large");$("<img/>").load(function(){I.$fullimage.find("img").fadeOut(500,function(){$(this).fadeIn(500).attr("src",$largePhoto)})}).attr("src",$largePhoto)});I.$details.append('<div class="infosep"></div>');I.$details.append(M)}else{I.$details.find(".infosep, .og-grid-small").remove()}if(I.$fullimage.is(":visible")){this.$loading.show();$("<img/>").load(function(){var P=$(this);if(P.attr("src")===I.$item.children("a").find("img").data("largesrc")){I.$loading.hide();I.$fullimage.find("img").remove();I.$largeImg=P.fadeIn(350);I.$fullimage.append(I.$largeImg)}}).attr("src",eldata.large[0])}}},open:function(){setTimeout($.proxy(function(){this.setHeights();this.positionPreview()},this),25)},close:function(){var i=this,I=function(){if(s){$(this).off(j)}i.$item.removeClass("og-expanded");i.$previewEl.remove()};setTimeout($.proxy(function(){if(typeof this.$largeImg!=="undefined"){this.$largeImg.fadeOut("fast")}this.$previewEl.css("height",0);var J=h.eq(this.expandedIdx);J.css("height",J.data("height")).on(j,I);if(!s){I.call()}},this),25);return false},calcHeight:function(){var I=d.height-this.$item.data("height")-q,i=d.height;if(I<D.minHeight){I=D.minHeight;i=D.minHeight+this.$item.data("height")+q}this.height=I;this.itemHeight=i},setHeights:function(){var i=this,I=function(){if(s){i.$item.off(j)}i.$item.addClass("og-expanded")};this.calcHeight();this.$previewEl.css("height",this.height);this.$item.css("height",this.itemHeight).on(j,I);if(!s){I.call()}},positionPreview:function(){var I=this.$item.data("offsetTop"),i=this.$previewEl.offset().top-F,J=this.height+this.$item.data("height")+q<=d.height?I:this.height<d.height?i-(d.height-this.height):i;A.animate({scrollTop:J},D.speed)},setTransition:function(){this.$previewEl.css("transition","height "+D.speed+"ms "+D.easing);this.$item.css("transition","height "+D.speed+"ms "+D.easing)},getEl:function(){return this.$previewEl}};k.imagesLoaded(function(){r(true);b();n()})}});
(function(c,b,d){c.HoverDir=function(e,f){this.$el=c(f);this._init(e)};c.HoverDir.defaults={speed:300,easing:"ease",hoverDelay:0,inverse:false};c.HoverDir.prototype={_init:function(e){this.options=c.extend(true,{},c.HoverDir.defaults,e);this.transitionProp="all "+this.options.speed+"ms "+this.options.easing;this.support=Modernizr.csstransitions;this._loadEvents()},_loadEvents:function(){var e=this;this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir",function(i){var g=c(this),f=g.find("figure"),j=e._getDir(g,{x:i.pageX,y:i.pageY}),h=e._getStyle(j);if(i.type==="mouseenter"){f.hide().css(h.from);clearTimeout(e.tmhover);e.tmhover=setTimeout(function(){f.show(0,function(){var k=c(this);if(e.support){k.css("transition",e.transitionProp)}e._applyAnimation(k,h.to,e.options.speed)})},e.options.hoverDelay)}else{if(e.support){f.css("transition",e.transitionProp)}clearTimeout(e.tmhover);e._applyAnimation(f,h.from,e.options.speed)}})},_getDir:function(g,k){var f=g.width(),i=g.height(),e=(k.x-g.offset().left-(f/2))*(f>i?(i/f):1),l=(k.y-g.offset().top-(i/2))*(i>f?(f/i):1),j=Math.round((((Math.atan2(l,e)*(180/Math.PI))+180)/90)+3)%4;return j},_getStyle:function(k){var g,l,i={left:"0px",top:"-100%"},e={left:"0px",top:"100%"},h={left:"-100%",top:"0px"},f={left:"100%",top:"0px"},m={top:"0px"},j={left:"0px"};switch(k){case 0:g=!this.options.inverse?i:e;l=m;break;case 1:g=!this.options.inverse?f:h;l=j;break;case 2:g=!this.options.inverse?e:i;l=m;break;case 3:g=!this.options.inverse?h:f;l=j;break}return{from:g,to:l}},_applyAnimation:function(f,e,g){c.fn.applyStyle=this.support?c.fn.css:c.fn.animate;f.stop().applyStyle(e,c.extend(true,[],{duration:g+"ms"}))}};var a=function(e){if(b.console){b.console.error(e)}};c.fn.hoverdir=function(g){var e=c.data(this,"hoverdir");if(typeof g==="string"){var f=Array.prototype.slice.call(arguments,1);this.each(function(){if(!e){a("cannot call methods on hoverdir prior to initialization; attempted to call method '"+g+"'");return}if(!c.isFunction(e[g])||g.charAt(0)==="_"){a("no such method '"+g+"' for hoverdir instance");return}e[g].apply(e,f)})}else{this.each(function(){if(e){e._init()}else{e=c.data(this,"hoverdir",new c.HoverDir(g,this))}})}return e}})(jQuery,window);
(function(g,h,e){var a=g.event,b,j;b=a.special.debouncedresize={setup:function(){g(this).on("resize",b.handler)},teardown:function(){g(this).off("resize",b.handler)},handler:function(o,k){var n=this,m=arguments,l=function(){o.type="debouncedresize";a.dispatch.apply(n,m)};if(j){clearTimeout(j)}k?l():j=setTimeout(l,b.threshold)},threshold:150};var c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";g.fn.imagesLoaded=function(r){var o=this,t=g.isFunction(g.Deferred)?g.Deferred():0,s=g.isFunction(t.notify),l=o.find("img").add(o.filter("img")),m=[],q=[],n=[];if(g.isPlainObject(r)){g.each(r,function(u,v){if(u==="callback"){r=v}else{if(t){t[u](v)}}})}function p(){var u=g(q),v=g(n);if(t){if(n.length){t.reject(l,u,v)}else{t.resolve(l)}}if(g.isFunction(r)){r.call(o,l,u,v)}}function k(u,v){if(u.src===c||g.inArray(u,m)!==-1){return}m.push(u);if(v){n.push(u)}else{q.push(u)}g.data(u,"imagesLoaded",{isBroken:v,src:u.src});if(s){t.notifyWith(g(u),[v,l,g(q),g(n)])}if(l.length===m.length){setTimeout(p);l.unbind(".imagesLoaded")}}if(!l.length){p()}else{l.bind("load.imagesLoaded error.imagesLoaded",function(u){k(u.target,u.type==="error")}).each(function(u,w){var x=w.src;var v=g.data(w,"imagesLoaded");if(v&&v.src===x){k(w,v.isBroken);return}if(w.complete&&w.naturalWidth!==e){k(w,w.naturalWidth===0||w.naturalHeight===0);return}if(w.readyState||w.complete){w.src=c;w.src=x}})}return t?t.promise(o):o};var d=g(h),f=h.Modernizr;g.Elastislide=function(k,l){this.$el=g(l);this._init(k)};g.Elastislide.defaults={orientation:"horizontal",speed:500,easing:"ease-in-out",minItems:3,start:0,onClick:function(m,k,l){return false},onReady:function(){return false},onBeforeSlide:function(){return false},onAfterSlide:function(){return false}};g.Elastislide.prototype={_init:function(l){this.options=g.extend(true,{},g.Elastislide.defaults,l);var k=this,m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=m[f.prefixed("transition")];this.support=f.csstransitions&&f.csstransforms;this.current=this.options.start;this.isSliding=false;this.$items=this.$el.children("li");this.itemsCount=this.$items.length;if(this.itemsCount===0){return false}this._validate();this.$items.detach();this.$el.empty();this.$el.append(this.$items);this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-'+this.options.orientation+'"></div>');this.hasTransition=false;this.hasTransitionTimeout=setTimeout(function(){k._addTransition()},100);this.$el.imagesLoaded(function(){k.$el.show();k._layout();k._configure();if(k.hasTransition){k._removeTransition();k._slideToItem(k.current);k.$el.on(k.transEndEventName,function(){k.$el.off(k.transEndEventName);k._setWrapperSize();k._addTransition();k._initEvents()})}else{clearTimeout(k.hasTransitionTimeout);k._setWrapperSize();k._initEvents();k._slideToItem(k.current);setTimeout(function(){k._addTransition()},25)}k.options.onReady()})},_validate:function(){if(this.options.speed<0){this.options.speed=500}if(this.options.minItems<1||this.options.minItems>this.itemsCount){this.options.minItems=1}if(this.options.start<0||this.options.start>this.itemsCount-1){this.options.start=0}if(this.options.orientation!="horizontal"&&this.options.orientation!="vertical"){this.options.orientation="horizontal"}},_layout:function(){this.$el.wrap('<div class="elastislide-carousel"></div>');this.$carousel=this.$el.parent();this.$wrapper=this.$carousel.parent().removeClass("elastislide-loading");var k=this.$items.find("img:first");this.imgSize={width:k.outerWidth(true),height:k.outerHeight(true)};this._setItemsSize();this.options.orientation==="horizontal"?this.$el.css("max-height",this.imgSize.height):this.$el.css("height",this.options.minItems*this.imgSize.height);this._addControls()},_addTransition:function(){if(this.support){this.$el.css("transition","all "+this.options.speed+"ms "+this.options.easing)}this.hasTransition=true},_removeTransition:function(){if(this.support){this.$el.css("transition","all 0s")}this.hasTransition=false},_addControls:function(){var k=this;this.$navigation=g('<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>').appendTo(this.$wrapper);this.$navPrev=this.$navigation.find("span.elastislide-prev").on("mousedown.elastislide",function(l){k._slide("prev");return false});this.$navNext=this.$navigation.find("span.elastislide-next").on("mousedown.elastislide",function(l){k._slide("next");return false})},_setItemsSize:function(){var k=this.options.orientation==="horizontal"?(Math.floor(this.$carousel.width()/this.options.minItems)*100)/this.$carousel.width():100;this.$items.css({width:k+"%","max-width":this.imgSize.width,"max-height":this.imgSize.height});if(this.options.orientation==="vertical"){this.$wrapper.css("max-width",this.imgSize.width+parseInt(this.$wrapper.css("padding-left"))+parseInt(this.$wrapper.css("padding-right")))}},_setWrapperSize:function(){if(this.options.orientation==="vertical"){this.$wrapper.css({height:this.options.minItems*this.imgSize.height+parseInt(this.$wrapper.css("padding-top"))+parseInt(this.$wrapper.css("padding-bottom"))})}},_configure:function(){this.fitCount=this.options.orientation==="horizontal"?this.$carousel.width()<this.options.minItems*this.imgSize.width?this.options.minItems:Math.floor(this.$carousel.width()/this.imgSize.width):this.$carousel.height()<this.options.minItems*this.imgSize.height?this.options.minItems:Math.floor(this.$carousel.height()/this.imgSize.height)},_initEvents:function(){var k=this;d.on("debouncedresize.elastislide",function(){k._setItemsSize();k._configure();k._slideToItem(k.current)});this.$el.on(this.transEndEventName,function(){k._onEndTransition()});if(this.options.orientation==="horizontal"){this.$el.on({swipeleft:function(){k._slide("next")},swiperight:function(){k._slide("prev")}})}else{this.$el.on({swipeup:function(){k._slide("next")},swipedown:function(){k._slide("prev")}})}this.$el.on("click.elastislide","li",function(m){var l=g(this);k.options.onClick(l,l.index(),m)})},_destroy:function(k){this.$el.off(this.transEndEventName).off("swipeleft swiperight swipeup swipedown .elastislide");d.off(".elastislide");this.$el.css({"max-height":"none",transition:"none"}).unwrap(this.$carousel).unwrap(this.$wrapper);this.$items.css({width:"auto","max-width":"none","max-height":"none"});this.$navigation.remove();this.$wrapper.remove();if(k){k.call()}},_toggleControls:function(k,l){if(l){(k==="next")?this.$navNext.show():this.$navPrev.show()}else{(k==="next")?this.$navNext.hide():this.$navPrev.hide()}},_slide:function(l,n){if(this.isSliding){return false}this.options.onBeforeSlide();this.isSliding=true;var t=this,k=this.translation||0,q=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true),o=this.itemsCount*q,m=this.options.orientation==="horizontal"?this.$carousel.width():this.$carousel.height();if(n===e){var p=this.fitCount*q;if(p<0){return false}if(l==="next"&&o-(Math.abs(k)+p)<m){p=o-(Math.abs(k)+m);this._toggleControls("next",false);this._toggleControls("prev",true)}else{if(l==="prev"&&Math.abs(k)-p<0){p=Math.abs(k);this._toggleControls("next",true);this._toggleControls("prev",false)}else{var s=l==="next"?Math.abs(k)+Math.abs(p):Math.abs(k)-Math.abs(p);s>0?this._toggleControls("prev",true):this._toggleControls("prev",false);s<o-m?this._toggleControls("next",true):this._toggleControls("next",false)}}n=l==="next"?k-p:k+p}else{var p=Math.abs(n);if(Math.max(o,m)-p<m){n=-(Math.max(o,m)-m)}p>0?this._toggleControls("prev",true):this._toggleControls("prev",false);Math.max(o,m)-m>p?this._toggleControls("next",true):this._toggleControls("next",false)}this.translation=n;if(k===n){this._onEndTransition();return false}if(this.support){this.options.orientation==="horizontal"?this.$el.css("transform","translateX("+n+"px)"):this.$el.css("transform","translateY("+n+"px)")}else{g.fn.applyStyle=this.hasTransition?g.fn.animate:g.fn.css;var r=this.options.orientation==="horizontal"?{left:n}:{top:n};this.$el.stop().applyStyle(r,g.extend(true,[],{duration:this.options.speed,complete:function(){t._onEndTransition()}}))}if(!this.hasTransition){this._onEndTransition()}},_onEndTransition:function(){this.isSliding=false;this.options.onAfterSlide()},_slideTo:function(o){var o=o||this.current,n=Math.abs(this.translation)||0,m=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true),l=n+this.$carousel.width(),k=Math.abs(o*m);if(k+m>l||k<n){this._slideToItem(o)}},_slideToItem:function(l){var k=this.options.orientation==="horizontal"?l*this.$items.outerWidth(true):l*this.$items.outerHeight(true);this._slide("",-k)},add:function(n){var k=this,m=this.current,l=this.$items.eq(this.current);this.$items=this.$el.children("li");this.itemsCount=this.$items.length;this.current=l.index();this._setItemsSize();this._configure();this._removeTransition();m<this.current?this._slideToItem(this.current):this._slide("next",this.translation);setTimeout(function(){k._addTransition()},25);if(n){n.call()}},setCurrent:function(k,l){this.current=k;this._slideTo();if(l){l.call()}},next:function(){self._slide("next")},previous:function(){self._slide("prev")},slideStart:function(){this._slideTo(0)},slideEnd:function(){this._slideTo(this.itemsCount-1)},destroy:function(k){this._destroy(k)}};var i=function(k){if(h.console){h.console.error(k)}};g.fn.elastislide=function(m){var k=g.data(this,"elastislide");if(typeof m==="string"){var l=Array.prototype.slice.call(arguments,1);this.each(function(){if(!k){i("cannot call methods on elastislide prior to initialization; attempted to call method '"+m+"'");return}if(!g.isFunction(k[m])||m.charAt(0)==="_"){i("no such method '"+m+"' for elastislide self");return}k[m].apply(k,l)})}else{this.each(function(){if(k){k._init()}else{k=g.data(this,"elastislide",new g.Elastislide(m,this))}})}return k}})(jQuery,window);
/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Elastislide = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.Elastislide.defaults = {
		// orientation 'horizontal' || 'vertical'
		orientation : 'horizontal',
		// sliding speed
		speed : 500,
		// sliding easing
		easing : 'ease-in-out',
		// the minimum number of items to show. 
		// when we resize the window, this will make sure minItems are always shown 
		// (unless of course minItems is higher than the total number of elements)
		minItems : 3,
		// index of the current item (left most item of the carousel)
		start : 0,
		// click item callback
		onClick : function( el, position, evt ) { return false; },
		onReady : function() { return false; },
		onBeforeSlide : function() { return false; },
		onAfterSlide : function() { return false; }
	};

	$.Elastislide.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Elastislide.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			
			// suport for css transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;

			// current item's index
			this.current = this.options.start;

			// control if it's sliding
			this.isSliding = false;

			this.$items = this.$el.children( 'li' );
			// total number of items
			this.itemsCount = this.$items.length;
			if( this.itemsCount === 0 ) {

				return false;

			}
			this._validate();
			// remove white space
			this.$items.detach();
			this.$el.empty();
			this.$el.append( this.$items );

			// main wrapper
			this.$el.wrap( '<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );

			// check if we applied a transition to the <ul>
			this.hasTransition = false;
			
			// add transition for the <ul>
			this.hasTransitionTimeout = setTimeout( function() {
				
				self._addTransition();

			}, 100 );

			// preload the images
			
			this.$el.imagesLoaded( function() {

				self.$el.show();

				self._layout();
				self._configure();
				
				if( self.hasTransition ) {

					// slide to current's position
					self._removeTransition();
					self._slideToItem( self.current );

					self.$el.on( self.transEndEventName, function() {

						self.$el.off( self.transEndEventName );
						self._setWrapperSize();
						// add transition for the <ul>
						self._addTransition();
						self._initEvents();

					} );

				}
				else {

					clearTimeout( self.hasTransitionTimeout );
					self._setWrapperSize();
					self._initEvents();
					// slide to current's position
					self._slideToItem( self.current );
					setTimeout( function() { self._addTransition(); }, 25 );

				}

				self.options.onReady();

			} );

		},
		_validate : function() {

			if( this.options.speed < 0 ) {

				this.options.speed = 500;

			}
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount ) {

				this.options.minItems = 1;

			}
			if( this.options.start < 0 || this.options.start > this.itemsCount - 1 ) {

				this.options.start = 0;

			}
			if( this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' ) {

				this.options.orientation = 'horizontal';

			}
				
		},
		_layout : function() {

			this.$el.wrap( '<div class="elastislide-carousel"></div>' );

			this.$carousel = this.$el.parent();
			this.$wrapper = this.$carousel.parent().removeClass( 'elastislide-loading' );

			// save original image sizes
			var $img = this.$items.find( 'img:first' );
			this.imgSize = { width : $img.outerWidth( true ), height : $img.outerHeight( true ) };

			this._setItemsSize();
			this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.options.minItems * this.imgSize.height );

			// add the controls
			this._addControls();

		},
		_addTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all ' + this.options.speed + 'ms ' + this.options.easing );
				
			}
			this.hasTransition = true;

		},
		_removeTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all 0s' );

			}
			this.hasTransition = false;
			
		},
		_addControls : function() {

			var self = this;

			// add navigation elements
			this.$navigation = $( '<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>' )
				.appendTo( this.$wrapper );


			this.$navPrev = this.$navigation.find( 'span.elastislide-prev' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'prev' );
				return false;

			} );

			this.$navNext = this.$navigation.find( 'span.elastislide-next' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'next' );
				return false;

			} );

		},
		_setItemsSize : function() {

			// width for the items (%)
			var w = this.options.orientation === 'horizontal' ? ( Math.floor( this.$carousel.width() / this.options.minItems ) * 100 ) / this.$carousel.width() : 100;
			
			this.$items.css( {
				'width' : w + '%',
				'max-width' : this.imgSize.width,
				'max-height' : this.imgSize.height
			} );

			if( this.options.orientation === 'vertical' ) {
			
				this.$wrapper.css( 'max-width', this.imgSize.width + parseInt( this.$wrapper.css( 'padding-left' ) ) + parseInt( this.$wrapper.css( 'padding-right' ) ) );
			
			}

		},
		_setWrapperSize : function() {

			if( this.options.orientation === 'vertical' ) {

				this.$wrapper.css( {
					'height' : this.options.minItems * this.imgSize.height + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
				} );

			}

		},
		_configure : function() {

			// check how many items fit in the carousel (visible area -> this.$carousel.width() )
			this.fitCount = this.options.orientation === 'horizontal' ? 
								this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor( this.$carousel.width() / this.imgSize.width ) :
								this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor( this.$carousel.height() / this.imgSize.height );

		},
		_initEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.elastislide', function() {

				self._setItemsSize();
				self._configure();
				self._slideToItem( self.current );

			} );

			this.$el.on( this.transEndEventName, function() {

				self._onEndTransition();

			} );

			if( this.options.orientation === 'horizontal' ) {

				this.$el.on( {
					swipeleft : function() {

						self._slide( 'next' );
					
					},
					swiperight : function() {

						self._slide( 'prev' );
					
					}
				} );

			}
			else {

				this.$el.on( {
					swipeup : function() {

						self._slide( 'next' );
					
					},
					swipedown : function() {

						self._slide( 'prev' );
					
					}
				} );

			}

			// item click event
			this.$el.on( 'click.elastislide', 'li', function( event ) {

				var $item = $( this );

				self.options.onClick( $item, $item.index(), event );
				
			});

		},
		_destroy : function( callback ) {
			
			this.$el.off( this.transEndEventName ).off( 'swipeleft swiperight swipeup swipedown .elastislide' );
			$window.off( '.elastislide' );
			
			this.$el.css( {
				'max-height' : 'none',
				'transition' : 'none'
			} ).unwrap( this.$carousel ).unwrap( this.$wrapper );

			this.$items.css( {
				'width' : 'auto',
				'max-width' : 'none',
				'max-height' : 'none'
			} );

			this.$navigation.remove();
			this.$wrapper.remove();

			if( callback ) {

				callback.call();

			}

		},
		_toggleControls : function( dir, display ) {

			if( display ) {

				( dir === 'next' ) ? this.$navNext.show() : this.$navPrev.show();

			}
			else {

				( dir === 'next' ) ? this.$navNext.hide() : this.$navPrev.hide();

			}
			
		},
		_slide : function( dir, tvalue ) {

			if( this.isSliding ) {

				return false;

			}
			
			this.options.onBeforeSlide();

			this.isSliding = true;

			var self = this,
				translation = this.translation || 0,
				// width/height of an item ( <li> )
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				// total width/height of the <ul>
				totalSpace = this.itemsCount * itemSpace,
				// visible width/height
				visibleSpace = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height();
			
			if( tvalue === undefined ) {
				
				var amount = this.fitCount * itemSpace;

				if( amount < 0 ) {

					return false;

				}

				if( dir === 'next' && totalSpace - ( Math.abs( translation ) + amount ) < visibleSpace ) {

					amount = totalSpace - ( Math.abs( translation ) + visibleSpace );

					// show / hide navigation buttons
					this._toggleControls( 'next', false );
					this._toggleControls( 'prev', true );

				}
				else if( dir === 'prev' && Math.abs( translation ) - amount < 0 ) {

					amount = Math.abs( translation );

					// show / hide navigation buttons
					this._toggleControls( 'next', true );
					this._toggleControls( 'prev', false );

				}
				else {
					
					// future translation value
					var ftv = dir === 'next' ? Math.abs( translation ) + Math.abs( amount ) : Math.abs( translation ) - Math.abs( amount );
					
					// show / hide navigation buttons
					ftv > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
					ftv < totalSpace - visibleSpace ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );
						
				}
				
				tvalue = dir === 'next' ? translation - amount : translation + amount;

			}
			else {

				var amount = Math.abs( tvalue );

				if( Math.max( totalSpace, visibleSpace ) - amount < visibleSpace ) {

					tvalue	= - ( Math.max( totalSpace, visibleSpace ) - visibleSpace );
				
				}

				// show / hide navigation buttons
				amount > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
				Math.max( totalSpace, visibleSpace ) - visibleSpace > amount ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

			}
			
			this.translation = tvalue;

			if( translation === tvalue ) {
				
				this._onEndTransition();
				return false;

			}

			if( this.support ) {
				
				this.options.orientation === 'horizontal' ? this.$el.css( 'transform', 'translateX(' + tvalue + 'px)' ) : this.$el.css( 'transform', 'translateY(' + tvalue + 'px)' );

			}
			else {

				$.fn.applyStyle = this.hasTransition ? $.fn.animate : $.fn.css;
				var styleCSS = this.options.orientation === 'horizontal' ? { left : tvalue } : { top : tvalue };
				
				this.$el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : this.options.speed, complete : function() {

					self._onEndTransition();
					
				} } ) );

			}
			
			if( !this.hasTransition ) {

				this._onEndTransition();

			}

		},
		_onEndTransition : function() {

			this.isSliding = false;
			this.options.onAfterSlide();

		},
		_slideTo : function( pos ) {

			var pos = pos || this.current,
				translation = Math.abs( this.translation ) || 0,
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				posR = translation + this.$carousel.width(),
				ftv = Math.abs( pos * itemSpace );

			if( ftv + itemSpace > posR || ftv < translation ) {

				this._slideToItem( pos );
			
			}

		},
		_slideToItem : function( pos ) {

			// how much to slide?
			var amount	= this.options.orientation === 'horizontal' ? pos * this.$items.outerWidth( true ) : pos * this.$items.outerHeight( true );
			this._slide( '', -amount );
			
		},
		// public method: adds new items to the carousel
		/*
		
		how to use:
		var carouselEl = $( '#carousel' ),
			carousel = carouselEl.elastislide();
		...
		
		// append or prepend new items:
		carouselEl.prepend('<li><a href="#"><img src="images/large/2.jpg" alt="image02" /></a></li>');

		// call the add method:
		es.add();
		
		*/
		add : function( callback ) {
			
			var self = this,
				oldcurrent = this.current,
				$currentItem = this.$items.eq( this.current );
			
			// adds new items to the carousel
			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			this.current = $currentItem.index();
			this._setItemsSize();
			this._configure();
			this._removeTransition();
			oldcurrent < this.current ? this._slideToItem( this.current ) : this._slide( 'next', this.translation );
			setTimeout( function() { self._addTransition(); }, 25 );
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: sets a new element as the current. slides to that position
		setCurrent : function( idx, callback ) {
			
			this.current = idx;

			this._slideTo();
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: slides to the next set of items
		next : function() {

			self._slide( 'next' );

		},
		// public method: slides to the previous set of items
		previous : function() {

			self._slide( 'prev' );

		},
		// public method: slides to the first item
		slideStart : function() {

			this._slideTo( 0 );

		},
		// public method: slides to the last item
		slideEnd : function() {

			this._slideTo( this.itemsCount - 1 );

		},
		// public method: destroys the elastislide instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.elastislide = function( options ) {

		var self = $.data( this, 'elastislide' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for elastislide self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'elastislide', new $.Elastislide( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
},{}]},{},[1])