var store_name= Shopify.shop;
    //  var store_name = 
  // console.log(Shopify.shop);
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');  
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



var getapend =  document.querySelector('body');
`<button class="button btn btn-blue coupon-button copy-to-clipboard" data-clipboard-action="copy" data-clipboard-target="#copy-couponapp-code-0" data-widget-id="176" data-shop-id="24" data-widget-count="0">Copy</button>
<svg class="vector" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill:#535EFF;">
<path d="M4.584 3.384C4.722 3.084 4.8 2.754 4.8 2.4C4.8 1.074 3.726 0 2.4 0C1.074 0 0 1.074 0 2.4C0 3.726 1.074 4.8 2.4 4.8C2.754 4.8 3.084 4.722 3.384 4.584L4.8 6L3.384 7.416C3.084 7.278 2.754 7.2 2.4 7.2C1.074 7.2 0 8.274 0 9.6C0 10.926 1.074 12 2.4 12C3.726 12 4.8 10.926 4.8 9.6C4.8 9.246 4.722 8.916 4.584 8.616L6 7.2L10.2 11.4H12V10.8L4.584 3.384ZM2.4 3.6C1.74 3.6 1.2 3.066 1.2 2.4C1.2 1.734 1.74 1.2 2.4 1.2C3.06 1.2 3.6 1.734 3.6 2.4C3.6 3.066 3.06 3.6 2.4 3.6ZM2.4 10.8C1.74 10.8 1.2 10.266 1.2 9.6C1.2 8.934 1.74 8.4 2.4 8.4C3.06 8.4 3.6 8.934 3.6 9.6C3.6 10.266 3.06 10.8 2.4 10.8ZM6 6.3C5.832 6.3 5.7 6.168 5.7 6C5.7 5.832 5.832 5.7 6 5.7C6.168 5.7 6.3 5.832 6.3 6C6.3 6.168 6.168 6.3 6 6.3ZM10.2 0.6L6 4.8L7.2 6L12 1.2V0.6H10.2Z" fill="#635EFF/">
</path></svg>`

var buttomcoupen=`<div id="tab-box-front-0" class="tab-box tab-front-box tab-box-front-0 couponapp-position-right couponapp-style-2 couponapp-desktop couponapp-mobile couponapp-tab-shape-circle couponapp-open-state-click couponapp-open-first coupon-pending-message couonapp-active" data-isexit="data-widgetid" =="" 176=""><div class="tab-box-content tab-box-email-content">
<a href="javascript:void(0);" class="coupon-tab-close"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="10px" height="10px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; fill:; clip-rule:evenodd" viewBox="0 0 2.19 2.19" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><path class="fil0" d="M1.84 0.06c0.08,-0.08 0.21,-0.08 0.29,0 0.08,0.08 0.08,0.21 0,0.29l-0.75 0.74 0.75 0.75c0.08,0.08 0.08,0.21 0,0.29 -0.08,0.08 -0.21,0.08 -0.29,0l-0.75 -0.75 -0.74 0.75c-0.08,0.08 -0.21,0.08 -0.29,0 -0.08,-0.08 -0.08,-0.21 0,-0.29l0.74 -0.75 -0.74 -0.74c-0.08,-0.08 -0.08,-0.21 0,-0.29 0.08,-0.08 0.21,-0.08 0.29,0l0.74 0.74 0.75 -0.74z"></path></svg></a>
<h4>Get 20% your first purchase</h4><div class="count-down-timer-box" data-id="" data-zone="" data-countdown="popup" data-houre="11" data-hidesecond="55" data-hidemin="9" data-min="10" data-second="0" data-widgetid="176"><div class="counter-timer"><span>10</span><label>Minutes</label></div> </div><div class="tab-box-front-0" ><div class="form-wrap clear"><p class="coupon-code-email-text" style="width: 156.088px;"><input type="hidden" name="hide_coup_code" value="20OFFNOW"><input id="emailvalue" type="email" name="couponapp-email" value="" placeholder="Your Email" data-widget-id="176" data-shop-id="24" required="" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"></p><button type="submit" class="button btn btn-blue coupon-button coupon-email-button" data-widget-id="tab-box-front-0" data-consent="1" data-consent-id="email-content-0" data-email-msgcolor="#FFFFFF" data-coupon-code="20OFFNOW">Send Now</button></div><label class="email-content-checkbox"><input type="checkbox" name="" value="1" id="email-content-0" required="required">&nbsp;I agree to join the mailing list</label></div><p class="coupon-description">Minimum order of $25</p></div><div class="tab-box-content tab-box-couponcode-content" style="display:none;">
<a href="javascript:void(0);" class="coupon-tab-close"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="10px" height="10px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; fill:; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 2.19 2.19" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><path class="fil0" d="M1.84 0.06c0.08,-0.08 0.21,-0.08 0.29,0 0.08,0.08 0.08,0.21 0,0.29l-0.75 0.74 0.75 0.75c0.08,0.08 0.08,0.21 0,0.29 -0.08,0.08 -0.21,0.08 -0.29,0l-0.75 -0.75 -0.74 0.75c-0.08,0.08 -0.21,0.08 -0.29,0 -0.08,-0.08 -0.08,-0.21 0,-0.29l0.74 -0.75 -0.74 -0.74c-0.08,-0.08 -0.08,-0.21 0,-0.29 0.08,-0.08 0.21,-0.08 0.29,0l0.74 0.74 0.75 -0.74z"></path></svg></a>
<h4>Thanks! Copy your coupon code:</h4><div class="form-wrap clear"><div class="coupon-code-text"><span id="copy-couponapp-code-0" class="label-tooltip" data-title="Copied"><div class="sr-only"><input id="copy-coupon-inputcode-0" type="text" value="20OFFNOW"></div>20OFFNOW</span></div>
  <button class="button btn btn-blue coupon-button copy-to-clipboard" data-clipboard-action="copy" data-clipboard-target="#copy-couponapp-code-0" data-widget-id="176" data-shop-id="24" data-widget-count="0">Copy</button>
  <svg class="vector" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill:#635EFF;">
  <path d="M4.584 3.384C4.722 3.084 4.8 2.754 4.8 2.4C4.8 1.074 3.726 0 2.4 0C1.074 0 0 1.074 0 2.4C0 3.726 1.074 4.8 2.4 4.8C2.754 4.8 3.084 4.722 3.384 4.584L4.8 6L3.384 7.416C3.084 7.278 2.754 7.2 2.4 7.2C1.074 7.2 0 8.274 0 9.6C0 10.926 1.074 12 2.4 12C3.726 12 4.8 10.926 4.8 9.6C4.8 9.246 4.722 8.916 4.584 8.616L6 7.2L10.2 11.4H12V10.8L4.584 3.384ZM2.4 3.6C1.74 3.6 1.2 3.066 1.2 2.4C1.2 1.734 1.74 1.2 2.4 1.2C3.06 1.2 3.6 1.734 3.6 2.4C3.6 3.066 3.06 3.6 2.4 3.6ZM2.4 10.8C1.74 10.8 1.2 10.266 1.2 9.6C1.2 8.934 1.74 8.4 2.4 8.4C3.06 8.4 3.6 8.934 3.6 9.6C3.6 10.266 3.06 10.8 2.4 10.8ZM6 6.3C5.832 6.3 5.7 6.168 5.7 6C5.7 5.832 5.832 5.7 6 5.7C6.168 5.7 6.3 5.832 6.3 6C6.3 6.168 6.168 6.3 6 6.3ZM10.2 0.6L6 4.8L7.2 6L12 1.2V0.6H10.2Z" fill="#635EFF/">
  </path></svg>
  </div><p class="coupon-description">Minimum order of $25</p></div><div class="tab-box-wrap">
<div class="tab-text-wrap">
<p class="tab-text" style="display: block;">
  Get Offer...
</p>
</div>
<div class="tab-icon" data-widget-id="176" data-shop-id="24">
<img src="https://discountwheelapp.test/black-friday.png">
<svg class="tab-icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.4667 0.799988C22.316 0.799988 22.1709 0.814703 22.0428 0.839672C20.1332 1.16267 17.4596 3.18907 16.2334 5.41378C15.0071 3.18907 12.3359 1.16379 10.4398 0.843072C10.297 0.814703 10.1508 0.799988 10.0001 0.799988C8.74998 0.799988 7.73338 1.81659 7.73338 3.06667C7.73338 3.58915 7.91586 4.10027 8.24678 4.50375C8.25121 4.50819 8.25518 4.5131 8.25928 4.51819L8.26606 4.52643C9.72806 6.38055 14.0982 7.24414 15.6667 7.50143V27.9999H16.8V7.50137C18.3686 7.24409 22.7375 6.38049 24.1995 4.52638C24.2063 4.51958 24.2131 4.51167 24.2188 4.50486C24.5509 4.10138 24.7333 3.59027 24.7333 3.06667C24.7333 1.81659 23.7167 0.799988 22.4667 0.799988ZM9.13529 3.79767L9.13515 3.79749C9.12271 3.78166 9.11032 3.7659 9.09678 3.75235C8.94606 3.55404 8.86669 3.31827 8.86669 3.06667C8.86669 2.44218 9.37557 1.93335 10 1.93335C10.0748 1.93335 10.1485 1.94015 10.2357 1.95715C11.9357 2.24387 14.4993 4.29975 15.4218 6.30686C13.4477 5.94418 10.1179 5.09418 9.13529 3.79767ZM23.3699 3.75118C23.3563 3.7659 23.3439 3.78067 23.3314 3.79767C22.3511 5.09195 19.0191 5.94306 17.046 6.30686C17.9674 4.29975 20.5344 2.24498 22.2457 1.95487C22.3171 1.94015 22.3919 1.93335 22.4667 1.93335C23.0923 1.93335 23.6 2.44224 23.6 3.06667C23.6 3.31827 23.5207 3.55398 23.3699 3.75118ZM14.5334 27.4332V13.2666H4.33339V27.4333C4.33339 27.746 4.58728 27.9999 4.90008 27.9999H14.6377C14.5742 27.822 14.5334 27.6327 14.5334 27.4332ZM3.7667 6.46665H8.83157C10.4829 7.49345 12.7744 8.10545 14.5334 8.44885V12.1333H3.7667C3.4539 12.1333 3.20001 11.8794 3.20001 11.5666V7.03334C3.20001 6.72054 3.4539 6.46665 3.7667 6.46665ZM28.7 6.46665H23.6352C21.9817 7.49345 19.6923 8.10545 17.9334 8.44885V12.1333H28.7C29.0128 12.1333 29.2667 11.8794 29.2667 11.5666V7.03334C29.2667 6.72049 29.0128 6.46665 28.7 6.46665ZM17.9333 27.4333V13.2666H28.1333V27.4333C28.1333 27.7461 27.8794 28 27.5666 28H17.829C17.8925 27.822 17.9333 27.6328 17.9333 27.4333Z"></path></svg>

</div>
</div><style>

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: auto;
}

#tab-box-front-0.tab-box.couponapp-tab-shape-hexagon .tab-icon,
#tab-box-front-0.tab-box .tab-icon{
  width: 80px;
  height: 60px;
  cursor: pointer;
}
#tab-box-front-0.tab-box .tab-icon svg{
  width: 32px;
  height: 32px;
  top: calc(50% - 16px);
  left:calc(50% - 16px);
}
#tab-box-front-0,
#tab-box-front-0 h4,
#tab-box-front-0 .coupon-button
{ font-family: Poppins}
#tab-box-front-0.couponapp-position-custom.couponapp-position-left {bottom: 100px;left: 50px;}

#tab-box-front-0.couponapp-position-custom.couponapp-position-right {bottom: 100px;right: 50px;}

#tab-box-front-0 .tab-text{ color: #FFFFFF;background-color: #605DEC;}

#tab-box-front-0.couponapp-position-right .tab-text:after{ border-left-color:#605DEC;border-right-color:transparent; }

#tab-box-front-0.couponapp-position-left .tab-text:after{ border-right-color:#605DEC;border-left-color:transparent; }

#tab-box-front-0 .tab-icon,
#tab-box-front-0 .tab-icon .hexagon-after,
#tab-box-front-0 .tab-icon .hexagon-before{ background-color: #5dc210;}
#tab-box-front-0 .tab-icon svg{
  fill: #605DEC;
}
#tab-box-front-0 .tab-box-content.tab-box-couponcode-content { background-color: #E0E6EC;}
#tab-box-front-0 .tab-box-content.tab-box-couponcode-content h4{ color: #000000;}

#tab-box-front-0 .tab-box-content .coupon-code-text{ color: #929292;background-color: #FFFFFF;}

#tab-box-front-0 .tab-box-content.tab-box-couponcode-content .coupon-code-email-text input{ color: #000000;background-color: #FFFFFF;}


#tab-box-front-0 .tab-box-content.tab-box-couponcode-content .coupon-button{ color: #FFFFFF;background-color: #605DEC;}

#tab-box-front-0 .tab-box-content.tab-box-couponcode-content .coupon-button.coupon-email-button { color: #FFFFFF;background-color: #605DEC;}

#tab-box-front-0 .tab-box-content.tab-box-couponcode-content .coupon-description{ color: #000000;}

#tab-box-front-0 .tab-box-content.tab-box-email-content { background-color: #E0E6EC;}
#tab-box-front-0 .tab-box-content.tab-box-email-content h4{ color: #000000;}

#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-code-email-text input{ color: #000000;background-color: #FFFFFF;}
#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-code-email-text input::placeholder{ color: #000000;}
#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-code-email-text input:-ms-input-placeholder{ color: #000000;}
#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-code-email-text input::-ms-input-placeholder{ color: #000000;}

#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-button{ color: #FFFFFF;background-color: #000000;}

#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-button.coupon-email-button { color: #FFFFFF;background-color: #605DEC;}

#tab-box-front-0 .tab-box-content.tab-box-email-content .coupon-description{ color: #000000;}
@media screen and (min-width: 769px) {
  #tab-box-front-0.tab-box.tab-front-box.couponapp-desktop{ display: block;}
}
@media screen and (max-width: 768px) {
  #tab-box-front-0.tab-box.tab-front-box.couponapp-mobile{
    display:block
  }
}
              



#tab-box-front-0  .tab-box-content.couponapp-email-code-option .form-wrap, 
#tab-box-front-0.tab-box.couponapp-style-1 .tab-box-couponcode-content .form-wrap, 
#tab-box-front-0 .tab-box.couponapp-style-2 .tab-box-couponcode-content .form-wrap{
  border-color:#635EFF
}

#tab-box-front-0 .tab-box-email-content .form-wrap{
  border-color:#635EFF
}

.clear,.tab-box,.tab-box .tab-box-wrap,.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container{clear:both;visibility:visible;width:auto;height:auto;overflow:unset}.clear:after,.clear:before,.tab-box .tab-box-wrap:after,.tab-box .tab-box-wrap:before,.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container:after,.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container:before,.tab-box:after,.tab-box:before{content:" ";display:table}.clear:after,.tab-box .tab-box-wrap:after,.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container:after,.tab-box:after{clear:both}.smooth,.tab-box.tab-front-box .tab-box-content a.coupon-tab-close,.tab-box .tab-icon img.custom-tab-img,.tab-box .tab-icon svg,.tab-text{transition:all ease-in-out 0.3s}.tab-box{margin:20px;position:absolute;bottom:0}.tab-box.tab-front-box{position:fixed;display:none;z-index:9999}@media only screen and (max-width:600px){.tab-box.tab-front-box{max-width:calc(100% - 40px)}}.tab-box.tab-front-box.couponapp-open-click-hover .tab-box-content{display:none;opacity:0}.tab-box.tab-front-box.couponapp-open-click-hover:hover .tab-box-content{display:block}.tab-box.tab-front-box .tab-icon{pointer-events:all}.tab-box.tab-front-box:not(.couonapp-active){pointer-events:none}.tab-box.tab-front-box:not(.couonapp-active) .tab-box-content{opacity:0;visibility:hidden;transform:translateY(-20px)}.tab-box.tab-front-box.couonapp-active{pointer-events:all;z-index:999999}.tab-box.tab-front-box.couonapp-active .tab-box-wrap .tab-text{opacity:0;visibility:hidden}.tab-box.tab-front-box.couonapp-active .tab-icon-svg{opacity:0;visibility:hidden;transform:rotate(-180deg)}.tab-box.tab-front-box.couonapp-active svg.tab-icon-close{opacity:1;visibility:visible;transform:rotate(-180deg)}.tab-box.tab-front-box.couonapp-active.couponapp-style-2 .tab-box-couponcode-content{display:none;opacity:0;visibility:hidden;pointer-events:none}.tab-box.tab-front-box.couonapp-active.couponapp-style-2.couponapp-email-coupon-code-show .tab-box-couponcode-content{display:block;visibility:visible;opacity:1;pointer-events:all}.tab-box.tab-front-box.couonapp-active.couponapp-style-2.couponapp-email-coupon-code-show .tab-box-email-content{display:none;opacity:0;visibility:hidden;pointer-events:none}.tab-box.tab-front-box svg.tab-icon-close{opacity:0;visibility:hidden;padding:5px}.tab-box.tab-front-box .tab-box-content{position:relative;opacity:1;visibility:visible;transform:translateY(0);transition:all ease-in-out 0.3s}.tab-box.tab-front-box .tab-box-content a.coupon-tab-close{width:16px;height:16px;line-height:16px;position:absolute;top:6px;right:6px;z-index:1;opacity:0.75}.tab-box.tab-front-box .tab-box-content a.coupon-tab-close:active,.tab-box.tab-front-box .tab-box-content a.coupon-tab-close:hover{transform:rotate(-180deg)}.tab-box.tab-front-box .coupon-code-style{display:none}.tab-box.tab-front-box .coupon-email-style .coupon-code-email-text{max-width:140px;margin-right:20px}.tab-box.tab-front-box .coupon-email-style .coupon-code-email-text input{min-width:140px;padding:11px 16px;margin:0;border:1px dashed #AEAEAE}.tab-box.tab-front-box .coupon-code-style,.tab-box.tab-front-box .coupon-email-style{text-align:center}.tab-box.tab-front-box .coupon-code-style>button,.tab-box.tab-front-box .coupon-code-style>p,.tab-box.tab-front-box .coupon-email-style>button,.tab-box.tab-front-box .coupon-email-style>p{display:inline-block;vertical-align:middle}.tab-box.tab-front-box form.tab-box-front-0{margin:0}.tab-box.tab-front-box form.tab-box-front-0 .form-wrap{align-items:start}.tab-box.tab-front-box form.tab-box-front-0 .form-wrap .coupon-code-text{font-size:14px}.formappownerpopup .tab-box.tab-front-box button.coupon_upgradenow,.tab-box.tab-front-box .formappownerpopup button.coupon_upgradenow,.tab-box.tab-front-box button.btn{max-height:38px;font-size:14px;text-transform:none;letter-spacing:0;line-height:40px;padding:0 25px}@media only screen and (max-width:1000px){.tab-box.tab-front-box.couponx-floating-bar.tab-box.couponapp-style-2 .tab-box-couponcode-content .form-wrap{max-width:480px;margin:0 auto}}.tab-box.tab-front-box.couponx-floating-bar:not(.couonapp-active) .tab-box-content{transform:translateY(50px)}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content{width:100%;padding:30px 0;position:fixed!important;left:0;right:0;bottom:0;border-radius:0;margin:0}@media only screen and (max-width:480px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content{padding:25px 0}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content a.coupon-tab-close{top:12px;right:12px}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content a.coupon-tab-close svg{width:16px;height:16px}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container{max-width:1200px;padding-left:15px;padding-right:15px;margin:0 auto;display:flex;align-items:center}@media only screen and (max-width:1000px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container{padding-left:20px;padding-right:20px}}@media only screen and (max-width:768px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container{display:block}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .countdown-timer_on>div{display:inline-block;vertical-align:top;width:50%}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .countdown-timer_on .count-down-timer-box .counter-timer label{margin:6px 0}@media only screen and (max-width:1000px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .countdown-timer_on{text-align:left}}@media only screen and (max-width:768px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .countdown-timer_on{text-align:center}}@media only screen and (min-width:1001px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-left{float:left;text-align:left;width:71%}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-left h4{margin:0 15px 10px 0}}@media only screen and (max-width:1000px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-left{width:60%;margin-bottom:10px}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-left .count-down-timer-box{margin-top:10px}}@media only screen and (max-width:768px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-left{width:100%;float:none}}@media only screen and (min-width:1001px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-right{position:relative;padding:6px 0 0 0;float:right;width:30%}}@media only screen and (max-width:1000px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-right{width:39%}}@media only screen and (max-width:768px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-right{width:100%;float:none}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-right .email-content-checkbox{margin:8px 0 0 0}@media only screen and (min-width:1001px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-right .coupon-code-email-text{width:400px}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .couponx-right .coupon-code-link{width:auto;height:48px;font-size:17px;letter-spacing:1px;line-height:48px;padding:0 35px;border-radius:4px}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container h4{font-size:30px;color:#1E1E1E;margin-bottom:3px}@media only screen and (max-width:480px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container h4{font-size:22px}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container p.coupon-description{font-size:16px;color:#727272!important}@media only screen and (max-width:480px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container p.coupon-description{font-size:14px}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container .form-wrap{margin:0}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container a.coupon-tab-close{width:20px;height:20px;top:calc(50% - 7px);right:0}@media only screen and (max-width:1000px){.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container a.coupon-tab-close{top:20px;right:20px}}.tab-box.tab-front-box.couponx-floating-bar .tab-box-content .couponcode-container a.coupon-tab-close svg{width:20px;height:20px}.tab-box.tab-front-box.couponx-floating-bar.couonapp-active>.tab-box-wrap{display:none}.tab-box.tab-front-box.couponx-floating-bar-top .tab-box-content{top:0;bottom:auto}.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content{position:fixed;top:50%;left:50%;margin:0;transform:translate(-50%,-50%);z-index:99}@media only screen and (min-width:800px){.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content{width:540px;padding:50px 30px;border-radius:16px}}@media only screen and (max-width:600px){.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content{width:100%;max-width:calc(100% - 30px);padding:30px 20px}}@media only screen and (min-width:800px){.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content h4{font-size:28px;margin-bottom:30px}}@media only screen and (min-width:800px){.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content .form-wrap{margin-bottom:30px}}@media only screen and (max-width:800px){}.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content .coupon-code-email-text{width:100%}@media only screen and (min-width:800px){.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .tab-box-content .coupon-code-link{font-size:17px;height:52px;line-height:52px;padding:0 40px;border-radius:4px}}.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .coupon-description{font-size:15px;margin-top:20px}.tab-box.tab-front-box.couponx-lightbox-popup .couponx-popup-box .couponx-popup-overlay{transition:background-color ease-in-out 0.3s}.tab-box.tab-front-box.couponx-lightbox-popup.couonapp-active .couponx-popup-overlay{background-color:rgba(0,0,0,0.5);width:100%;height:100%;position:fixed;top:0;right:0;left:0;bottom:0}.tab-box.tab-front-box.couponx-lightbox-popup.couonapp-active .tab-box-content{transform:translate(-50%,-50%)}.tab-box.tab-front-box.couponx-lightbox-popup.couonapp-active>.tab-box-wrap{display:none}.tab-box.tab-front-box.couponx-lightbox-popup .tab-box-content.tab-box-email-content .coupon-button.coupon-email-button{width:auto}.tab-box.tab-front-box.couponx-lightbox-popup a.coupon-tab-close{width:16px;height:16px}@media only screen and (min-width:1000px){.tab-box.tab-front-box.couponx-lightbox-popup a.coupon-tab-close{top:20px;right:20px}}.tab-box.tab-front-box.couponx-lightbox-popup a.coupon-tab-close svg{width:16px;height:16px}.tab-box.couponapp-position-left{left:0}.tab-box.couponapp-position-left .tab-text{float:right;margin:2px 0 0 15px}.tab-box.couponapp-position-left .tab-text:after{left:-20px;border-right-color:#D4D4D4;border-left-color:transparent}.tab-box.couponapp-position-left .tab-icon{float:left}.tab-box.couponapp-position-left .tab-box-wrap{display:flex;flex-wrap:wrap;align-items:center;flex-direction:row-reverse;justify-content:flex-end}.tab-box.couponapp-position-right{right:0}@media screen and (max-width:480px){.tab-box.couponapp-position-right{right:0!important}}.tab-box.couponapp-position-right .tab-text{float:left;margin:2px 15px 0 0}.tab-box.couponapp-position-right .tab-text:after{right:-20px;border-left-color:#D4D4D4;border-right-color:transparent}.tab-box.couponapp-position-right .tab-icon{float:right}.tab-box.couponapp-position-right .tab-box-wrap{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end}.tab-box .tab-icon{position:relative}.tab-box .tab-icon img.custom-tab-img,.tab-box .tab-icon svg{position:absolute;top:calc(50% - 16px);left:calc(50% - 16px)}.tab-box:not(.couponapp-tab-shape-hexagon) .tab-icon{box-shadow:0px 2px 5px rgba(52,52,52,0.15)}.tab-box.couponapp-tab-shape-circle .tab-icon{border-radius:60%}.tab-box.couponapp-tab-shape-square .tab-icon{border-radius:2px}.tab-box.couponapp-tab-shape-leaf .tab-icon{border-radius:2px 50%}.tab-box.couponapp-tab-shape-hexagon .tab-icon{height:29px;line-height:29px;padding:0 9px;position:relative;z-index:0}.tab-box.couponapp-tab-shape-hexagon .tab-icon .after,.tab-box.couponapp-tab-shape-hexagon .tab-icon .before{background-color:#ffc700;position:absolute;left:0;width:100%;height:100%;z-index:-1}.tab-box.couponapp-tab-shape-hexagon .tab-icon .before{transform:rotate(60deg)}.tab-box.couponapp-tab-shape-hexagon .tab-icon .after{transform:rotate(-60deg)}.tab-box-content.couponapp-email-code-option .form-wrap,.tab-box.couponapp-style-1 .tab-box-couponcode-content .form-wrap,.tab-box.couponapp-style-2 .tab-box-couponcode-content .form-wrap{height:44px;background:white;padding:4px;border-radius:5px;border:2px dashed #605DEC;position:relative;display:block}.tab-box-content.couponapp-email-code-option .form-wrap .vector,.tab-box.couponapp-style-1 .tab-box-couponcode-content .form-wrap .vector,.tab-box.couponapp-style-2 .tab-box-couponcode-content .form-wrap .vector{width:12px;height:12px;position:absolute;left:10px;top:-7px;display:block}.tab-box-content.couponapp-email-code-option .form-wrap .coupon-code-text,.tab-box.couponapp-style-1 .tab-box-couponcode-content .form-wrap .coupon-code-text,.tab-box.couponapp-style-2 .tab-box-couponcode-content .form-wrap .coupon-code-text{min-height:32px;color:#A7A8CD;line-height:32px;padding:0 5px;border:0;text-align:left;font-size:16px;letter-spacing:1px;float:left;width:auto}.tab-box-content.couponapp-email-code-option .form-wrap button.coupon-button,.tab-box.couponapp-style-1 .tab-box-couponcode-content .form-wrap button.coupon-button,.tab-box.couponapp-style-2 .tab-box-couponcode-content .form-wrap button.coupon-button{background-image:url(images/button-bg.png);background-repeat:repeat-x;background-position:0 0;width:auto!important;max-height:32px;height:32px;min-height:32px;font-size:16px;letter-spacing:1px;line-height:32px;padding:0 22px;float:right;border:0}.tab-text{background-color:#D4D4D4;min-width:50px;font-size:16px;line-height:46px;font-weight:500;padding:0 20px;position:relative;border-radius:12px;box-shadow:0px 2px 5px rgba(52,52,52,0.15)}.tab-text:after{width:0;right:0;content:"";position:absolute;top:calc(50% - 10px);border:10px solid;border-bottom-color:transparent;border-top-color:transparent}.tab-icon{background-color:#ffc700;width:50px;height:50px;padding:9px}.tab-icon svg{width:32px;height:32px;fill:#605DEC}.tab-box-content{background-color:#E0E6EC;text-align:center;padding:30px;margin-bottom:15px;border-radius:6px}@media screen and (max-width:480px){.tab-box-content{padding:30px 20px}}.tab-box-content .form-wrap{margin:0 -10px 15px -10px;display:flex;align-items:center;justify-content:center}.tab-box-content .form-wrap input{text-align:center;border-radius:4px;width:100%;height:40px;line-height:40px}.tab-box-content .form-wrap input[type=text]{background:#FFFFFF;border:1px dashed #AEAEAE;border-radius:4px}.tab-box-content .form-wrap button.coupon-button{border-radius:4px;margin:0}.tab-box-content h4{font-size:16px;font-weight:600;margin:0 0 20px}.tab-box-content p{margin:0}.tab-box-content .form-wrap .coupon-code-text{background:#FFFFFF;min-height:39px;border:1px dashed #AEAEAE;border-radius:4px;padding:9px 5px}@keyframes flash{0%,15%,35%,50%,65%,85%,to,to{opacity:1}25%,75%{opacity:0}}@keyframes shakeY{0%,to{transform:translateZ(0)}10%,40%,60%,90%{transform:translate3d(0,-12px,0)}20%,30%,50%,70%,80%{transform:translate3d(0,0,0)}}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(0.9,0.9,0.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}.couponapp-flash-animation .tab-icon{animation-name:flash;animation-duration:3s;animation-iteration-count:infinite}.couponapp-shake-animation .tab-icon{animation-name:shakeY;animation-duration:2s;animation-iteration-count:infinite}.couponapp-swing-animation .tab-icon{animation-name:swing;animation-duration:2s;animation-iteration-count:infinite;transform-origin:top center}.couponapp-tada-animation .tab-icon{animation-name:tada;animation-duration:2s;animation-iteration-count:infinite}.couponapp-heartbeat-animation .tab-icon{animation-name:heartBeat;animation-duration:1.33s;animation-iteration-count:infinite}.couponapp-wobble-animation .tab-icon{animation-name:wobble;animation-duration:2s;animation-iteration-count:infinite}img.custom-tab-img{max-width:32px;max-height:32px;vertical-align:middle}.btn,.formappownerpopup .coupon_upgradenow{outline:0!important;-webkit-appearance:none}.coupon-code-text{position:relative}.coupon-code-text span.label-tooltip{width:auto;height:auto}.coupon-code-text span.label-tooltip.tooltip-show:after{text-align:center;content:"" attr(data-title) "";font-size:11px;position:absolute;top:-5px;left:0;right:0;transform:translate(0,calc(-100% - 6px));padding:0 12px;line-height:23px;height:auto;white-space:nowrap;background-color:#333;color:#ffffff;box-shadow:0 2px 4px rgba(0,0,0,0.15);border-radius:6px;opacity:1}.coupon-code-text span.label-tooltip.tooltip-show:before{content:"";position:absolute;top:-12px;left:calc(50% - 5px);height:10px;width:10px;border-width:8px 5px 0;border-style:solid;border-color:#333 transparent transparent}.tab-box-content.couponapp-email-code-option .form-wrap,.tab-box-content.couponapp-email-option .form-wrap,.tab-box-content.tab-box-couponcode-content .form-wrap,.tab-box-content.tab-box-email-content .form-wrap{margin:0 0 15px 0}.tab-box-content.couponapp-email-code-option .form-wrap .coupon-code-email-text,.tab-box-content.couponapp-email-code-option .form-wrap .coupon-code-text,.tab-box-content.couponapp-email-code-option .form-wrap button.coupon-button,.tab-box-content.couponapp-email-code-option .form-wrap button.coupon-email-button,.tab-box-content.couponapp-email-option .form-wrap .coupon-code-email-text,.tab-box-content.couponapp-email-option .form-wrap .coupon-code-text,.tab-box-content.couponapp-email-option .form-wrap button.coupon-button,.tab-box-content.couponapp-email-option .form-wrap button.coupon-email-button,.tab-box-content.tab-box-couponcode-content .form-wrap .coupon-code-email-text,.tab-box-content.tab-box-couponcode-content .form-wrap .coupon-code-text,.tab-box-content.tab-box-couponcode-content .form-wrap button.coupon-button,.tab-box-content.tab-box-couponcode-content .form-wrap button.coupon-email-button,.tab-box-content.tab-box-email-content .form-wrap .coupon-code-email-text,.tab-box-content.tab-box-email-content .form-wrap .coupon-code-text,.tab-box-content.tab-box-email-content .form-wrap button.coupon-button,.tab-box-content.tab-box-email-content .form-wrap button.coupon-email-button{width:50%}.tab-box-content.couponapp-email-code-option .email-content-checkbox,.tab-box-content.couponapp-email-option .email-content-checkbox,.tab-box-content.tab-box-couponcode-content .email-content-checkbox,.tab-box-content.tab-box-email-content .email-content-checkbox{text-align:left}.tab-box-content.tab-box-couponcode-content,.tab-box-content.tab-box-email-content{width:380px}.tab-box-content.tab-box-email-content p.coupon-code-email-text{margin-right:20px;padding:0px}.coupon_owneroverlay{position:fixed;bottom:20px;left:8%;right:0;z-index:999999}.coupon_owneroverlay:target{visibility:visible;opacity:1}.formappownerpopup{font-family:"Poppins",Open Sans Hebrew;padding:20px;background:#fff;border-radius:15px;width:400px;position:relative;transition:all 5s ease-in-out;box-shadow:rgba(0,0,0,0.15) 0px 0px 20px 0px;z-index:99999;max-width:400px}.formappownerpopup .coupon_ownerpopupclose{width:24px;height:24px;line-height:24px;font-size:36px;color:#868f9a;text-align:center;position:absolute;top:10px;right:10px}.formappownerpopup h2{font-family:"Poppins",Open Sans Hebrew;font-size:13px;color:#868f9a;letter-spacing:0.1em;text-transform:none;padding:6px 10px 6px 8px;border:1px solid #868f9a;border-radius:5px;display:inline-block}.formappownerpopup h2 span{margin-left:6px}.formappownerpopup .coupon_upgradenow{background-color:#ff6624;border-color:#ff6624;border-radius:25px}.formappownerpopup .coupon_upgradenow:active,.formappownerpopup .coupon_upgradenow:hover{background-color:#606060;border-color:#606060}.formappownerpopup .coupon_content p{font-size:14px;color:#868b8e;margin-bottom:10px}.formappownerpopup .coupon_reskmoreevents{font-size:14px;color:#868b8e;margin-bottom:8px}.formappownerpopup .coupon_content h4{font-family:"Poppins",Open Sans Hebrew;font-size:20px;color:#3a3a3a}.coupon_ownerwrapcontent span{color:#FFF;padding:0 5px;font-weight:700;background-color:#f93737;background-image:linear-gradient(-45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);animation:mseprogress-bar-stripes 2s linear infinite}.coupon_content.coupon_reskmoreevents{display:none}.coupon_ownerremind{margin-top:15px;display:block}.coupon_ownerremind a{text-decoration:none;background:#7473d8;color:#fff;padding:10px;border-radius:30px;line-height:1;font-weight:700;font-family:Poppins}.coupon_ownerremind a.coupon_dontremind{background:#ff0047;margin-left:5px}@media only screen and (max-width:480px){.formappownerpopup{width:90%;padding:10px}.formappownerpopup .coupon_reskmoreevents{font-size:13px}.tab-box-content.tab-box-couponcode-content,.tab-box-content.tab-box-email-content{width:100%}}span.coupon-pending-message{position:absolute;top:-8px;right:-8px;font-size:11px;font-size:11.5px;border-radius:50%;background:#d00;color:#fff;min-width:20px;min-height:20px;text-align:center;line-height:20px}@media only screen and (max-width:480px){.tab-box-content.tab-box-couponcode-content,.tab-box-content.tab-box-email-content{width:100%}}.coupon-button.coupon-code-link,.coupon-email-button,.preview-box button.coupon-button{background-image:url(images/button-bg.png);background-repeat:repeat-x;background-position:0 0;border:0}.tab-box.tab-front-box.open-coupon-code.couonapp-active .tab-box-couponcode-content{position:relative;display:block!important;opacity:1;visibility:visible;transform:translateY(0);transition:all ease-in-out 0.3s;pointer-events:unset}.tab-box-email-content .form-wrap{height:44px;background:white;padding:4px;border-radius:5px;border:1px solid #605DEC;position:relative;display:block}.tab-box-content.tab-box-email-content .form-wrap .coupon-code-email-text{float:left;margin-right:0px}.tab-box-content.tab-box-email-content .form-wrap button.coupon-email-button{width:auto;max-height:34px;min-height:34px;line-height:34px;float:right;font-size:16px;letter-spacing:1px}.tab-box-content .form-wrap input,.tab-box-content .form-wrap input:focus{text-align:left;border-radius:0px;border:none;width:100%;height:34px;line-height:34px;outline:none;font-size:16px;letter-spacing:1px;padding:10px 5px}.tab-box.tab-front-box.couponx-lightbox-popup.couonapp-active .tab-box-content.tab-box-couponcode-content{position:fixed;display:block;visibility:visible;opacity:1;pointer-events:all;transform:translate(-50%,-50%)}.tab-box.couponapp-style-1 .tab-box-couponcode-content .form-wrap .coupon-code-text{width:25%}.tab-box-content .form-wrap button.coupon-button{z-index:9999;position:absolute;right:3px;float:none}.tab-box.tab-front-box *,.tab-box.tab-front-box :after,.tab-box.tab-front-box :before{box-sizing:border-box}.formappownerpopup .tab-box.tab-front-box .coupon_upgradenow,.tab-box.tab-front-box .btn,.tab-box.tab-front-box .formappownerpopup .coupon_upgradenow{padding:0px 18px;line-height:38px;border-radius:4px}.count-down-timer-box,.show_countdown_timer_box{font-weight:bold;line-height:40px}@media only screen and (max-width:420px){.count-down-timer-box,.show_countdown_timer_box{line-height:28px}}.count-down-timer-box .counter-timer,.show_countdown_timer_box .counter-timer{display:inline-block;vertical-align:top;font-weight:normal;margin:0 3px}.count-down-timer-box .counter-timer span,.show_countdown_timer_box .counter-timer span{background-color:#FFFFFF;min-width:42px;height:40px;font-size:22px;line-height:40px;text-align:center;display:block;border-radius:6px;padding:0 8px;box-shadow:0 5px 10px -5px rgba(0,0,0,0.5);position:relative;overflow:hidden}@media only screen and (max-width:420px){.count-down-timer-box .counter-timer span,.show_countdown_timer_box .counter-timer span{min-width:28px;height:28px;font-size:18px;line-height:28px}}.count-down-timer-box .counter-timer span:after,.show_countdown_timer_box .counter-timer span:after{background-color:rgba(0,0,0,0.05);position:absolute;top:50%;left:0;right:0;bottom:0;content:""}.count-down-timer-box .counter-timer label,.show_countdown_timer_box .counter-timer label{font-size:13px;line-height:1.6;display:block;margin:5px 0 5px;text-align:center}.couponx-preview-floating-bar .show_countdown_timer_box{line-height:22px}.couponx-preview-floating-bar .show_countdown_timer_box .counter-timer{margin:0 0px}.couponx-preview-floating-bar .show_countdown_timer_box .counter-timer span{background-color:#FFFFFF;min-width:20px;height:20px;font-size:14px;line-height:20px;text-align:center;display:block;border-radius:6px;padding:0 0px}.couponx-preview-floating-bar .show_countdown_timer_box .counter-timer label{font-size:8px}.couponx-popup-box .count-down-timer-box .counter-timer span,.couponx-popup-box .show_countdown_timer_box .counter-timer span{min-width:65px;height:70px;font-size:34px;line-height:70px}.couponx-popup-box .count-down-timer-box,.couponx-popup-box .show_countdown_timer_box{font-weight:bold;line-height:68px}
</style>
</div>`



getapend.insertAdjacentHTML('afterend',buttomcoupen);

$('.tab-box-email-content').hide();
$('.tab-box-wrap').click(function(){
  $(".tab-box-email-content").toggle();

});




  $('.coupon-email-button').click(function (){
  let user = getCookie("username");

    if(user == ""){
      var email = document.querySelector('#emailvalue').value;
  //  console.log(email);
    const appDomain1 = 'https://discountwheelapp.test/'
    $.ajax({
      url: appDomain1+"api/emailsend",
      type:"GET",
      data:{
       email:email,
       store_name:store_name,
      },
      success:function(response){
        if(response) {
        setCookie("username", response, 30);
       set = getCookie("username");
          // document.querySelector('.site-nav__label').innerHTML =set;
          if(set){

  window.location.href = "https://wishlistappstore.myshopify.com/discount/"+set;
}
          
} 

      
      }
    });
}
   
  });



 
 set= getCookie("username"); 
  
if(set){
  document.querySelector('.email-content-checkbox').innerHTML = set;
  $('.form-wrap').hide();
  
}

$('.coupon-tab-close').click(function(){
  $('.tab-box-email-content').hide();
})
if(set){
  document.querySelector('#tab-box-front-0').style.display= 'none';
}
if(set){
// https://boxfit-india.myshopify.com/discount/THANKSMSB8?
  // window.location.href = "https://boxfit-india.myshopify.com/discount/THANKSMSB8";

    var ap1 = document.querySelector('body');
    var alert1 =`<div id='discountly_show-b' class='discountly_wlo_codebar bottom_floating discountly_slide-in-blurred-br' style='display: block; background-color: rgb(107 103 103); color: rgb(255, 255, 254); transform: translate(0px, 0px)'>
  <div class='discountly_wlo_code_cupon discountly_wcb_div discountly_tooltip' style='cursor: pointer !important;' onmouseover='discountly_tooltiptext_set()' onclick='copyText(document.getElementById(&quot;cc-code&quot;).innerHTML)'>
    <span id='cc-code'>couponcode</span>    
    <span class='discountly_tooltiptext' id='discountly_tooltiptext_id'></span>
  </div>
  <div class='discountly_wcb_coupon_text discountly_wlo_bar_text discountly_wcb_div'>
    Your coupon code is reserved for
  </div>
  <span class='wlo_mobile_br'><br></span>  <div class='discountly_wlo_countdown discountly_wcb_div' style='color: rgb(255, 255, 254);'>
    <!--<div class='discountly_wlo_bar_text discountly_wcb_div'>
      is reserved for
    </div>-->
    <input type='hidden' value='20' id='discountly_coupon_time'>
    <div class='discountly_wlo_counter discountly_wlo_minutes discountly_wcb_div'>
      <span id='discountly_timem'></span>
    </div>
    <div class='discountly_wlo_counter wlo_seconds discountly_wcb_div'>
      <span id='discountly_times'>E</span>
    </div>
  </div>
  <div class='discountly_wlo_close_btn discountly_wcb_div closeit'>
    <a href='#' id='closeit_btn' onclick='close()' style='color:white'><span style='font-size:15px;'>✖</span></a>
  </div>
  <div class='discountly_wlo_close_btn discountly_wlo_mobile_only discountly_wcb_div'></div>
</div>`;






var api2 =  document.querySelector('.icon-login');


    ap1.insertAdjacentHTML('afterend', alert1);
document.querySelector('#cc-code').innerHTML= set;


    function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// $(".tab-box-email-content").hide();
$('.tab-icon-svg').click(function(){

});
}

if(set){
// window.onload = function () {
    
// };

var fiveMinutes = 60 * 10,
display = document.querySelector('#faisal');
startTimer(fiveMinutes, display);

setTimeout(myFunction, 60*1000*10);


function myFunction() {

  window.location.href = "https://wishlistappstore.myshopify.com";


}
}


 
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (60*1000*10));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
    
}



$('#closeit_btn').click(function(){
$('.discountly_wlo_codebar').toggle();
});




// time set cokie/
// Set the date we're counting down to

if(set){

var countDownDate = new Date("august 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 10)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector("#discountly_timem").innerHTML =  minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("discountly_times").innerHTML = "EXPIRED";
  window.location.href = "https://wishlistappstore.myshopify.com";
    
  }
}, 1000);
}

// var whatsppb = document.querySelector('body');
// var buttonwhats =` <div id="WAButton"></div>`;
// whatsppb.insertAdjacentHTML('afterend',buttonwhats[[]]);
// $(function() {
//   $('#WAButton').floatingWhatsApp({
//     phone: '1231231231', //WhatsApp Business phone number International format-
//     //Get it with Toky at https://toky.co/en/features/whatsapp.
//     headerTitle: 'Chat with us on WhatsApp!', //Popup Title
//     popupMessage: 'Hello, how can we help you?', //Popup Message
//     showPopup: true, //Enables popup display
//     buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
//     //headerColor: 'crimson', //Custom header color
//     //backgroundColor: 'crimson', //Custom background button color
//     position: "right"    
//   });
// });


//  var link = document.createElement('link');
//  link.rel = "StyleSheet";
//  link.type= "text/css";
//  link.href= "https://discountwheelapp.test/style.css";
// document.getElementsByTagName('head')[0].appendChild(link);




// document.getElementById('cc-code').innerHTML=set;
//     // Set the date we're counting down to
// var countDownDate = new Date().getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate -now  ;
    
//   // Time calculations for days, hours, minutes and seconds

//   var minutes = Math.floor((distance % (1000 * 60 * 10)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("discountly_timem").innerHTML = 
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("discountly_times").innerHTML = "EXPIRED";

//   }
// }, 1000);



// document.querySelector('.swal2-confirm').click(function(){

  

// });



  // headerbottonget= $(document).ready(function() {
    //   var headerbottonget = document.querySelector('head');
 
    //   var headerbuttontop ="</div><div class='modal fade' id='form' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'> <div class='modal-content'> <div class='text-right cross'> <i class='fa fa-times'></i> </div>  <div class='card-body text-center mb-5'> <img src='https://i.imgur.com/7ElCsL1.png' height='200' width='200'> <h4 class='mt-1'>GET 15% OFF!</h4>  <p>Subscribe to our newsletter to get 15% discount in your next shop!</p> <div class='form-group'> <input type='text' id='name' class='form-control' required> <label class='form-control-placeholder' for='name'>your email address</label> </div> <button class='btn btn-out btn-square continue mb-3'>SUBSCRIBE</button><br> <a href='#'>No! thanks</a>  </div> </div>    </div></div>";
// headerbottonget.insertAdjacentHTML('afterend',headerbuttontop);
// });
//  var link = document.createElement('link');
//  link.rel = "StyleSheet";
//  link.type= "text/css";
//  link.href= "https://discountwheelapp.test/style.css";
// document.getElementsByTagName('head')[0].appendChild(link);


// alert("I am an alert box!");
// var cokie =document.cookie = "email=Faisal altaf; date.setTime(date.getTime() + (60 * 1000));";
// alert(cokie);
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

// const { includes } = require("lodash");

// setter : var json_str = JSON.stringify(arr); cookie.set('mycookie', json_str);
// getter : cookie.get('mycookie'); var arr = JSON.parse(json_str);

// let cookie = {
//             set: function(name, value) {
//                 document.cookie = name+"="+value;
//             },
//             get: function(name) {
//                 let nameEQ = name + "=";
//                 let ca = document.cookie.split(';');
//                 for( let i = 0; i < ca.length; i++ ) {
//                     let c = ca[i];
//                     while (c.charAt(0)==' ') c = c.substring(1,c.length);
//                     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//                 }
//                 return null;
//             }
//         }
// document.getSelection('body').

// include('https://discountwheelapp.test/style.css');
// headerbottonget= $(document).ready(function() {
//   var headerbottonget = document.querySelector('head');
//   // executes when HTML-Document is loaded and DOM is ready
  
//   var headerbuttontop =   "<div class='icon'><i class='far fa-envelope'></i></div><div class='content'><header>Become a Subscriber</header> <p>Subscribe to our blog and get the latest updates straight to your inbox.</p></div><form action='index.php' method='POST'><div class='field'> <input type='text' class='email' name='email' placeholder='Email Address' required value= > </div>  <div class='field btn'><div class='layer'></div><button type='submit' name='subscribe'>Subscribe</button>  </div></form><div class='text'>We do not share your information.</div></div>";
//   headerbottonget.insertAdjacentHTML('afterend',headerbuttontop);
//  });
//   var headerbuttontop =   "<div class="container d-flex justify-content-center"> <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#form"> See Modal with Form </button>"
// var sub ="</div><div class='modal fade' id='form' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'> <div class='modal-content'> <div class='text-right cross'> <i class='fa fa-times'></i> </div>  <div class='card-body text-center mb-5'> <img src='https://i.imgur.com/7ElCsL1.png' height='200' width='200'> <h4 class='mt-1'>GET 15% OFF!</h4>  <p>Subscribe to our newsletter to get 15% discount in your next shop!</p> <div class='form-group'> <input type='text' id='name' class='form-control' required> <label class='form-control-placeholder' for='name'>your email address</label> </div> <button class='btn btn-out btn-square continue mb-3'>SUBSCRIBE</button><br> <a href='#'>No! thanks</a>  </div> </div>    </div></div>";



        
  
  // var body = document.getElementsByTagName("body")[0];

// body.addEventListener("load", checkCookie(), false);
// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//      user = prompt("Please enter your name:","");
//      if (user != "" && user != null) {
//        setCookie("username", user, 30);
//      }
//   }
// }

 
 
//   const appDomain1 = 'https://discountwheelapp.test';
//   function checkCookie() {
//     let user = getCookie("username");

    // $.ajax({
    //   url: "https://discountwheelapp.test/api/popup",
    //   type:"GET",
    //   data:{
    //     user:user,
    //   },
    //   success:function(response){
    //     console.log(response);
    //     if(response) {
    //       $('.success').text(response.success);
        
    //     }
    //   },
    //  });
    
    // if (user != "") {
      // alert("Welcome again " + user);
      // var buttomclass = document.querySelector('.grid__item ');
      // var btn = document.querySelector('.site-header__logo-link');
      
      // buttomclass.innerHTML = user;
      // var sticke = "<div><h2>"+user+"</h2></div>";
      // btn.insertAdjacentHTML('afterend','<p>'+user+'</p>');
      // btn.insertAdjacentHTML("afterend", "<p>My new paragraph</p>");
      // $.ajax({
      //   url: "https://discountwheelapp.test/api/show",
      //   type:"GET",
      //   data:{
      //     user:user
      //   },
      //   success:function(response){
      //     console.log(response);
      //     if(response) {
      //       $('.success').text(response.success);
          
      //     }
      //   },
      //  });
      
  //   } else {

      
     
    
  //     if (user != "" && user != null) {
        // setCookie("username", user, 30);
        
  //     }
  //   }
  
      
  // }

 

// function setCookie(cname,cvalue,exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires=" + d.toGMTString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
  
  

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

