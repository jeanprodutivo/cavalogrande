function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function checkCookie(nomeCookie){var user=getCookie(nomeCookie);if(user!=""){return true;}
else
{return false;}}
var src=getCookie("meu-cookie-para-iframe-01");function updateLinksInHTML(html){var regex=/href\s*=\s*(['"])(https?:\/\/.+?)\1/gi;var link;while((link=regex.exec(html))!==null){html=html.replace(link[2],link[2]+src);}
return html;}
if(checkCookie("meu-cookie-para-iframe-01")&&getCookie("meu-cookie-para-iframe-01")!="")
{var matches=document.getElementsByClassName('col-lg-4 mx-auto')
for(var i=0;i<matches.length;i++)
{var divOnclick=matches[i].getElementsByClassName('tabela');var divUrl=divOnclick[0].getAttribute('onclick');var divUrlAlterada=updateLinksInHTML(divUrl);divOnclick[0].setAttribute('onclick',divUrlAlterada);}}