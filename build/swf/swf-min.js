YAHOO.namespace("widget");(function(){var n=0;var m=YAHOO.env.ua;var q="ShockwaveFlash";if(m.gecko||m.webkit||m.opera){if((mF=navigator.mimeTypes["application/x-shockwave-flash"])){if((eP=mF.enabledPlugin)){var g=[];g=eP.description.replace(/\s[rd]/g,".").replace(/[A-Za-z\s]+/g,"").split(".");n=g[0]+".";switch((g[2].toString()).length){case 1:n+="00";break;case 2:n+="0";break;}n+=g[2];n=parseFloat(n);}}}else{if(m.ie){try{var r=new ActiveXObject(q+"."+q+".6");r.AllowScriptAccess="always";}catch(l){if(r!=null){n=6;}}if(n==0){try{var b=new ActiveXObject(q+"."+q);var g=[];g=b.GetVariable("$version").replace(/[A-Za-z\s]+/g,"").split(",");n=g[0]+".";switch((g[2].toString()).length){case 1:n+="00";break;case 2:n+="0";break;}n+=g[2];n=parseFloat(n);}catch(l){}}}}m.flash=n;YAHOO.util.SWFDetect={getFlashVersion:function(){return n;},isFlashVersionAtLeast:function(e){return n>=e;}};var i=YAHOO.util.Dom,p=YAHOO.util.Event,j=YAHOO.util.SWFDetect,k=YAHOO.lang,h="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",f="application/x-shockwave-flash",d="10.22",a="http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+Math.random(),c="YAHOO.widget.SWF.eventHandler",o={align:"",allowNetworking:"",allowScriptAccess:"",base:"",bgcolor:"",menu:"",name:"",quality:"",salign:"",scale:"",tabindex:"",wmode:""};YAHOO.widget.SWF=function(e,I,D){this._queue=this._queue||[];this._events=this._events||{};this._configs=this._configs||{};this._id=i.generateId(null,"yuiswf");if(D.host){this._host=D.host;}var F=this._id;var u=i.get(e);var s=(D["version"]||d);var C=j.isFlashVersionAtLeast(s);var B=(m.flash>=8);var v=B&&!C&&D["useExpressInstall"];var A=(v)?a:I;var z="<object ";var G,y;var H="YUISwfId="+F+"&YUIBridgeCallback="+c;YAHOO.widget.SWF._instances[F]=this;if(u&&(C||v)&&A){z+='id="'+F+'" ';if(m.ie){z+='classid="'+h+'" ';}else{z+='type="'+f+'" data="'+YAHOO.lang.escapeHTML(A)+'" ';}G="100%";y="100%";z+='width="'+G+'" height="'+y+'">';if(m.ie){z+='<param name="movie" value="'+YAHOO.lang.escapeHTML(A)+'"/>';}for(var t in D.fixedAttributes){if(o.hasOwnProperty(t)){z+='<param name="'+YAHOO.lang.escapeHTML(t)+'" value="'+YAHOO.lang.escapeHTML(D.fixedAttributes[t])+'"/>';}}for(var E in D.flashVars){var x=D.flashVars[E];if(k.isString(x)){H+="&"+YAHOO.lang.escapeHTML(E)+"="+YAHOO.lang.escapeHTML(encodeURIComponent(x));}}if(H){z+='<param name="flashVars" value="'+H+'"/>';}z+="</object>";u.innerHTML=z;}YAHOO.widget.SWF.superclass.constructor.call(this,i.get(F));this._swf=i.get(F);};YAHOO.widget.SWF._instances=YAHOO.widget.SWF._instances||{};YAHOO.widget.SWF.eventHandler=function(e,s){YAHOO.widget.SWF._instances[e]._eventHandler(s);};YAHOO.extend(YAHOO.widget.SWF,YAHOO.util.Element,{_eventHandler:function(e){if(e.type=="swfReady"){this.createEvent("swfReady",{fireOnce:true});this.fireEvent("swfReady",e);}else{if(e.type=="log"){}else{if(this._host&&this._host.fireEvent){this._host.fireEvent(e.type,e);}else{this.fireEvent(e.type,e);}}}},callSWF:function(s,e){if(!e){e=[];}if(this._swf[s]){return(this._swf[s].apply(this._swf,e));}else{return null;}},toString:function(){return"SWF "+this._id;}});})();YAHOO.register("swf",YAHOO.widget.SWF,{version:"@VERSION@",build:"@BUILD@"});