const cssPopOverlay=function(){const css=`.overlay {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.85);
        z-index: 10000;
        }
        .popup {
        /*width: 98%;*/
        width: 400px;
        padding: 0;
        left: 0;
        /*margin-left: 1%;*/
        border: 1px solid #ccc;
        border-radius: 0;
        background: white;
        position: absolute;
        top: -100%;
        box-shadow: 5px 5px 5px #000;
        z-index: 10001;
        
        right:0;
        margin-left:auto;
        margin-right:auto;
        }
        .popup p {font-weight: bold; color: #333; margin: 0 0 10px;}
        .text-right {
        text-align: right;
        }
        
        .btn
        {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        }
        .btn-primary {
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
        }
        
        .btn.active, .btn:active {
        background-image: none;
        outline: 0;
        -webkit-box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
        box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
        }
        .btn.focus, .btn:focus, .btn:hover {
        color: #333;
        text-decoration: none;
        }


     
        /*mudar para min-width para voltar padrao*/
        @media (max-width: 768px) {
            .popup {
                /*width: 66.66666666%;
                margin-left: 16.666666%;*/
                width: 300px;
                height: auto;
            }
            .overlay{
                /*background: none !important;*/
            }
        }
        @media (min-width: 992px) {
        /*.popup {
        width: 50%;
        margin-left: 25%;
        }*/
        }
        @media (min-width: 1200px) {
        /*.popup {
        width: 33.33333%;
        margin-left: 33.33333%;
        }*/
        }
    
        .video_yt_pop{
        width: 100%;
        }`;head=document.head||document.getElementsByTagName('head')[0],style=document.createElement('style');head.appendChild(style);style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));}}
function showPrompt(msgUrl,msgImg)
{cssPopOverlay()
if(!msgImg)return;let msg=`<div class="overlay">
    <div class="popup w3-animate-top" style="top: 15%;">
            <p><a href="${msgUrl}" target="_BLANK"><img src="${msgImg}" style=" width: 100%; "></a></p>
            <div class="text-right"><button class="btn btn-cancel">FECHAR</button><button class="btn btn-primary" style="display: none;">SIM</button>
            </div>
        </div>
    </div>`
const p=function(){let my_awesome_script=document.createElement('div');my_awesome_script.setAttribute("class","div_overlay")
my_awesome_script.innerHTML=msg;document.body.appendChild(my_awesome_script);document.getElementsByClassName("btn-cancel")[0].addEventListener("click",function(){document.getElementsByClassName("div_overlay")[0].style.display="none"})}
return p();}
const mouseEvent=e=>{const shouldShowExitIntent=!e.toElement&&!e.relatedTarget&&e.clientY<10;if(shouldShowExitIntent){document.removeEventListener('mouseout',mouseEvent);showPrompt(msgUrl,msgImg)}};document.addEventListener('mouseout',mouseEvent);