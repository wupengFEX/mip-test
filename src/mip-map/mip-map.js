(window.MIP=window.MIP||[]).push({name:"mip-map",func:function(){define("mip-map/mip-map",["require","customElement"],function(n){function t(n){this.config=n}var o=n("customElement").create();return t.prototype.show=function(){this.init(),this.append()},t.prototype.init=function(){var n=this.config,t=[],o={v:n.version||"2.0",ak:n.ak||"",t:(new Date).getTime(),callback:this.getCb()};for(var i in o)if(o.hasOwnProperty(i))t.push(i.concat("=",o[i]));this.mapUrl="https://api.map.baidu.com/api?"+t.join("&")},t.prototype.getCb=function(){return window.mapCallback=this.handleResult.bind(this),"mapCallback"},t.prototype.handleResult=function(){this.map=new BMap.Map("container"),this.map.centerAndZoom(new BMap.Point(116.404,39.915),11);var n=this.config,t=n.location;if(this.traverseAndConcat(t)&&t.city)this.handlePoint()},t.prototype.handlePoint=function(){var n=this,t=n.map,o=n.config,i=o.location,e=new BMap.Geocoder,a=n.traverseAndConcat(o.location);if(a&&i.city)e.getPoint(a,function(i){if(i){var e=new BMap.Marker(i);t.addOverlay(e),t.centerAndZoom(i,16),n.handleSyncOption({cfg:o,map:t,point:i,marker:e})}},i.city)},t.prototype.handleSyncOption=function(n){this.handleInfoWindow(n),this.handleControls(n)},t.prototype.handleControls=function(n){var t=this.config.controls;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o]||{},e=BMap[o];e&&n.map.addControl(new e(i))}},t.prototype.handleInfoWindow=function(n){var t=n.cfg.info;if(t){var o=new BMap.InfoWindow(t.content,t);n.marker.addEventListener("click",function(){n.map.openInfoWindow(o,n.point)})}},t.prototype.traverseAndConcat=function(n){var t="";for(var o in n)if(n.hasOwnProperty(o)&&n[o])t+=n[o];return t},t.prototype.append=function(){var n=document.createElement("script");n.src=this.mapUrl,document.body.appendChild(n)},o.prototype.jsonParse=function(n){try{return JSON.parse(n)}catch(n){return console.error(n),!1}},o.prototype.firstInviewCallback=function(){var n=this.element.querySelector('script[type="application/json"]'),o=this.jsonParse(n.textContent);o&&new t(o).show()},o}),define("mip-map",["mip-map/mip-map"],function(n){return n}),function(){function n(n,t){n.registerMipElement("mip-map",t,"")}if(window.MIP)require(["mip-map"],function(t){n(window.MIP,t)});else require(["mip","mip-map"],n)}()}});