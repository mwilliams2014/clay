var pageComponent=webpackJsonppageComponent([10],{728:function(e,r,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var t=n(0),i=l(t),u=n(1),c=l(u);n(18),n(19),n(20),n(4),n(10),n(13),n(21),n(5),n(22),n(9),n(23),n(7),n(2),n(8),n(3),n(14),n(17),n(24),n(25),n(11),n(16),n(12),n(26),n(6),n(15),n(27),n(28),n(29),n(30),n(31),n(32),n(33);var p=n(729),d=l(p),g=function(e){function r(){return o(this,r),s(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,e),r}(i.default);c.default.register(g,d.default),r.default=g},729:function(e,r,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0}),r.templates=r.xiwPR=void 0;var t,i=n(0),u=l(i),c=n(1),p=l(c);goog.loadModule(function(e){function r(e,r,l){var t=function(){o("h3"),i("Description"),s("h3"),o("p");var r=e.page.description;"function"==typeof r?r():null!=r&&i(r),s("p"),o("div",null,null,"class","alert alert-info"),i("Check the "),o("a",null,null,"href","https://lexicondesign.io"),i("Lexicon"),s("a"),i(" "),o("a",null,null,"href","https://lexicondesign.io/docs/patterns/"+e.page.pattern+".html");var n=e.page.title;"function"==typeof n?n():null!=n&&i(n),i(" Pattern"),s("a"),i(" for a more in-depth look at the motivations and proper usage of this component."),s("div"),o("article",null,null,"id","clay-progress-bar"),o("h3"),i("States"),s("h3"),o("blockquote"),o("p"),i("Place an addon on either side of a progress component with "),o("code"),i("progress-group"),s("code"),i(" and "),o("code"),i("progress-group-addon"),s("code"),i("."),s("p"),s("blockquote"),o("div",null,null,"class","clay-site-mb"),o("div",null,null,"class","progress-group"),o("div",null,null,"class","progress"),a("div",null,null,"aria-valuenow","30","aria-valuemin","0","aria-valuemax","100","class","progress-bar","role","progressbar","style","width: 30%;"),s("div"),o("div",null,null,"class","progress-group-addon"),i("30%"),s("div"),s("div"),s("div"),o("div",null,null,"class","clay-site-mb"),o("div",null,null,"class","progress-group progress-warning"),o("div",null,null,"class","progress"),a("div",null,null,"aria-valuenow","70","aria-valuemin","0","aria-valuemax","100","class","progress-bar","role","progressbar","style","width: 70%;"),s("div"),o("div",null,null,"class","progress-group-addon"),i("70%"),s("div"),s("div"),s("div"),o("div",null,null,"class","clay-site-mb"),o("div",null,null,"class","progress-group progress-success"),o("div",null,null,"class","progress"),a("div",null,null,"aria-valuenow","100","aria-valuemin","0","aria-valuemax","100","class","progress-bar","role","progressbar","style","width: 100%;"),s("div"),o("div",null,null,"class","progress-group-addon"),o("div",null,null,"class","progress-group-feedback"),o("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-check-circle"),a("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#check-circle"),s("svg"),s("div"),s("div"),s("div"),s("div"),u({code:"{call ClayProgressBar.render}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param value: 30 /}\n{/call}\n\n{call ClayProgressBar.render}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param status: 'warning' /}\n    {param value: 70 /}\n{/call}\n\n{call ClayProgressBar.render}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param status: 'complete' /}\n{/call}",mode:"soy"},null,l),u({code:'<clay-progress-bar\n    spritemap="/vendor/lexicon/icons.svg"\n    value="30">\n</clay-progress-bar>\n\n<clay-progress-bar\n    spritemap="/vendor/lexicon/icons.svg"\n    status="warning"\n    value="70">\n</clay-progress-bar>\n\n<clay-progress-bar\n    spritemap="/vendor/lexicon/icons.svg"\n    status="complete">\n</clay-progress-bar>',mode:"text/html"},null,l),u({code:'<div class="progress-group">\n    <div class="progress">\n        <div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>\n    </div>\n    <div class="progress-group-addon">30%</div>\n</div>\n\n<div class="progress-group progress-warning">\n    <div class="progress">\n        <div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>\n    </div>\n    <div class="progress-group-addon">70%</div>\n</div>\n\n<div class="progress-group progress-success">\n    <div class="progress">\n        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>\n    </div>\n    <div class="progress-group-addon">\n        <div class="progress-group-feedback">\n            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">\n                <use xlink:href="/vendor/lexicon/icons.svg#check-circle" />\n            </svg>\n        </div>\n    </div>\n</div>',mode:"text/html"},null,l),s("article"),o("input",null,null,"type","hidden","value",e.page.title),s("input"),o("input",null,null,"type","hidden","value",e.site.title),s("input")};c(n.$$assignDefaults({content:t},e),null,l)}goog.module("xiwPR.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var l=goog.require("incrementaldom"),o=l.elementOpen,s=l.elementClose,a=l.elementVoid,i=(l.elementOpenStart,l.elementOpenEnd,l.text),u=(l.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("guide.incrementaldom","render");return e.render=r,goog.DEBUG&&(r.soyTemplateName="xiwPR.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=t=e,e});var d=function(e){function r(){return o(this,r),s(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,e),r}(u.default);p.default.register(d,t),r.xiwPR=d,r.templates=t,r.default=t}},[728]);