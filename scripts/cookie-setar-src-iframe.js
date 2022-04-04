function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function checkCookie(nomeCookie){var user=getCookie(nomeCookie);if(user!=""){return true;}
else
{return false;}}
if(checkCookie("meu-cookie-para-iframe-02")&&getCookie("meu-cookie-para-iframe-02")!="")
{var meuCookieParaIframe_02=document.createElement('iframe');meuCookieParaIframe_02.setAttribute('src',getCookie("meu-cookie-para-iframe-02"));meuCookieParaIframe_02.setAttribute('style','display:none;');;document.head.appendChild(meuCookieParaIframe_02);}