var store_name= document.title
    //  var store_name = sh
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

$(document).ready(function (){
let user = getCookie("username");
  if(user == ""){
  (async () => {

    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      Swal.fire(`Entered email: ${email}`)
   

     }

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
      },
     });
    
    })()

  }



});
 
 set= getCookie("username"); 
  
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
  <span class='wlo_mobile_br'><br></span>   <div class='discountly_wlo_countdown discountly_wcb_div' style='color: rgb(255, 255, 254);'>
    <!--<div class='discountly_wlo_bar_text discountly_wcb_div'>
      is reserved for
    </div>-->
    <input type='hidden' value='20' id='discountly_coupon_time'>
    <div class='discountly_wlo_counter discountly_wlo_minutes discountly_wcb_div'>
      <span id='discountly_timem'>2</span>
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


var getapend =  document.querySelector('body');
`<button class="button btn btn-blue coupon-button copy-to-clipboard" data-clipboard-action="copy" data-clipboard-target="#copy-couponapp-code-0" data-widget-id="176" data-shop-id="24" data-widget-count="0">Copy</button>
<svg class="vector" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill:#535EFF;">
<path d="M4.584 3.384C4.722 3.084 4.8 2.754 4.8 2.4C4.8 1.074 3.726 0 2.4 0C1.074 0 0 1.074 0 2.4C0 3.726 1.074 4.8 2.4 4.8C2.754 4.8 3.084 4.722 3.384 4.584L4.8 6L3.384 7.416C3.084 7.278 2.754 7.2 2.4 7.2C1.074 7.2 0 8.274 0 9.6C0 10.926 1.074 12 2.4 12C3.726 12 4.8 10.926 4.8 9.6C4.8 9.246 4.722 8.916 4.584 8.616L6 7.2L10.2 11.4H12V10.8L4.584 3.384ZM2.4 3.6C1.74 3.6 1.2 3.066 1.2 2.4C1.2 1.734 1.74 1.2 2.4 1.2C3.06 1.2 3.6 1.734 3.6 2.4C3.6 3.066 3.06 3.6 2.4 3.6ZM2.4 10.8C1.74 10.8 1.2 10.266 1.2 9.6C1.2 8.934 1.74 8.4 2.4 8.4C3.06 8.4 3.6 8.934 3.6 9.6C3.6 10.266 3.06 10.8 2.4 10.8ZM6 6.3C5.832 6.3 5.7 6.168 5.7 6C5.7 5.832 5.832 5.7 6 5.7C6.168 5.7 6.3 5.832 6.3 6C6.3 6.168 6.168 6.3 6 6.3ZM10.2 0.6L6 4.8L7.2 6L12 1.2V0.6H10.2Z" fill="#635EFF/">
</path></svg>`

var buttomcoupen=`  <div  id="tab-box-front-0" class="tab-box tab-front-box tab-box-front-0 couponapp-position-right couponapp-style-2 couponapp-desktop couponapp-mobile couponapp-tab-shape-circle couponapp-open-state-click couponapp-open-first coupon-pending-message" data-isexit="data-widgetid" =="" 176=""><div class="tab-box-content tab-box-email-content">
<a href="javascript:void(0);" class="coupon-tab-close"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="10px" height="10px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; fill:; clip-rule:evenodd" viewBox="0 0 2.19 2.19" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><path class="fil0" d="M1.84 0.06c0.08,-0.08 0.21,-0.08 0.29,0 0.08,0.08 0.08,0.21 0,0.29l-0.75 0.74 0.75 0.75c0.08,0.08 0.08,0.21 0,0.29 -0.08,0.08 -0.21,0.08 -0.29,0l-0.75 -0.75 -0.74 0.75c-0.08,0.08 -0.21,0.08 -0.29,0 -0.08,-0.08 -0.08,-0.21 0,-0.29l0.74 -0.75 -0.74 -0.74c-0.08,-0.08 -0.08,-0.21 0,-0.29 0.08,-0.08 0.21,-0.08 0.29,0l0.74 0.74 0.75 -0.74z"></path></svg></a>
<h4>Get 20% your first purchase</h4><div class="count-down-timer-box" data-id="" data-zone="" data-countdown="popup" data-houre="11" data-hidesecond="55" data-hidemin="9" data-min="10" data-second="0" data-widgetid="176"> </div><form class="tab-box-front-0" action="" method="post"><div class="form-wrap clear"><p class="coupon-code-email-text" style="width: 156.088px;"><input type="hidden" name="hide_coup_code" value="20OFFNOW"><input type="email" name="couponapp-email" value="" placeholder="Your Email" data-widget-id="176" data-shop-id="24" required="" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"></p><button type="submit" class="button btn btn-blue coupon-button coupon-email-button" data-widget-id="tab-box-front-0" data-consent="1" data-consent-id="email-content-0" data-email-msgcolor="#FFFFFF" data-coupon-code="20OFFNOW">Send Now</button></div><label class="email-content-checkbox"><input type="checkbox" name="" value="1" id="email-content-0" required="required">&nbsp;I agree to join the mailing list</label></form><p class="coupon-description">Minimum order of $25</p></div><div class="tab-box-content tab-box-couponcode-content" style="display:none;">
<a href="javascript:void(0);" class="coupon-tab-close"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="10px" height="10px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; fill:; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 2.19 2.19" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><path class="fil0" d="M1.84 0.06c0.08,-0.08 0.21,-0.08 0.29,0 0.08,0.08 0.08,0.21 0,0.29l-0.75 0.74 0.75 0.75c0.08,0.08 0.08,0.21 0,0.29 -0.08,0.08 -0.21,0.08 -0.29,0l-0.75 -0.75 -0.74 0.75c-0.08,0.08 -0.21,0.08 -0.29,0 -0.08,-0.08 -0.08,-0.21 0,-0.29l0.74 -0.75 -0.74 -0.74c-0.08,-0.08 -0.08,-0.21 0,-0.29 0.08,-0.08 0.21,-0.08 0.29,0l0.74 0.74 0.75 -0.74z"></path></svg></a>
<h4>Thanks! Copy your coupon code:</h4><div class="form-wrap clear"><div class="coupon-code-text"><span id="copy-couponapp-code-0" class="label-tooltip" data-title="Copied"><div class="sr-only"><input id="copy-coupon-inputcode-0" type="text" value="20OFFNOW"></div>20OFFNOW</span></div>
  <button class="button btn btn-blue coupon-button copy-to-clipboard" data-clipboard-action="copy" data-clipboard-target="#copy-couponapp-code-0" data-widget-id="176" data-shop-id="24" data-widget-count="0">Copy</button>
  <svg class="vector" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill:#635EFF;">
  <path d="M4.584 3.384C4.722 3.084 4.8 2.754 4.8 2.4C4.8 1.074 3.726 0 2.4 0C1.074 0 0 1.074 0 2.4C0 3.726 1.074 4.8 2.4 4.8C2.754 4.8 3.084 4.722 3.384 4.584L4.8 6L3.384 7.416C3.084 7.278 2.754 7.2 2.4 7.2C1.074 7.2 0 8.274 0 9.6C0 10.926 1.074 12 2.4 12C3.726 12 4.8 10.926 4.8 9.6C4.8 9.246 4.722 8.916 4.584 8.616L6 7.2L10.2 11.4H12V10.8L4.584 3.384ZM2.4 3.6C1.74 3.6 1.2 3.066 1.2 2.4C1.2 1.734 1.74 1.2 2.4 1.2C3.06 1.2 3.6 1.734 3.6 2.4C3.6 3.066 3.06 3.6 2.4 3.6ZM2.4 10.8C1.74 10.8 1.2 10.266 1.2 9.6C1.2 8.934 1.74 8.4 2.4 8.4C3.06 8.4 3.6 8.934 3.6 9.6C3.6 10.266 3.06 10.8 2.4 10.8ZM6 6.3C5.832 6.3 5.7 6.168 5.7 6C5.7 5.832 5.832 5.7 6 5.7C6.168 5.7 6.3 5.832 6.3 6C6.3 6.168 6.168 6.3 6 6.3ZM10.2 0.6L6 4.8L7.2 6L12 1.2V0.6H10.2Z" fill="#635EFF/">
  </path></svg>
  </div><p class="coupon-description">Minimum order of $25</p></div><div class="tab-box-wrap">
<div class="tab-text-wrap">
<p class="tab-text" style="display: none;">
  Get Offer...
</p>
</div>
<div style="float:right; "  class="tab-icon" data-widget-id="176" data-shop-id="24">

<svg class="tab-icon-svg" style="align-items:center;justify-content: center;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.4667 0.799988C22.316 0.799988 22.1709 0.814703 22.0428 0.839672C20.1332 1.16267 17.4596 3.18907 16.2334 5.41378C15.0071 3.18907 12.3359 1.16379 10.4398 0.843072C10.297 0.814703 10.1508 0.799988 10.0001 0.799988C8.74998 0.799988 7.73338 1.81659 7.73338 3.06667C7.73338 3.58915 7.91586 4.10027 8.24678 4.50375C8.25121 4.50819 8.25518 4.5131 8.25928 4.51819L8.26606 4.52643C9.72806 6.38055 14.0982 7.24414 15.6667 7.50143V27.9999H16.8V7.50137C18.3686 7.24409 22.7375 6.38049 24.1995 4.52638C24.2063 4.51958 24.2131 4.51167 24.2188 4.50486C24.5509 4.10138 24.7333 3.59027 24.7333 3.06667C24.7333 1.81659 23.7167 0.799988 22.4667 0.799988ZM9.13529 3.79767L9.13515 3.79749C9.12271 3.78166 9.11032 3.7659 9.09678 3.75235C8.94606 3.55404 8.86669 3.31827 8.86669 3.06667C8.86669 2.44218 9.37557 1.93335 10 1.93335C10.0748 1.93335 10.1485 1.94015 10.2357 1.95715C11.9357 2.24387 14.4993 4.29975 15.4218 6.30686C13.4477 5.94418 10.1179 5.09418 9.13529 3.79767ZM23.3699 3.75118C23.3563 3.7659 23.3439 3.78067 23.3314 3.79767C22.3511 5.09195 19.0191 5.94306 17.046 6.30686C17.9674 4.29975 20.5344 2.24498 22.2457 1.95487C22.3171 1.94015 22.3919 1.93335 22.4667 1.93335C23.0923 1.93335 23.6 2.44224 23.6 3.06667C23.6 3.31827 23.5207 3.55398 23.3699 3.75118ZM14.5334 27.4332V13.2666H4.33339V27.4333C4.33339 27.746 4.58728 27.9999 4.90008 27.9999H14.6377C14.5742 27.822 14.5334 27.6327 14.5334 27.4332ZM3.7667 6.46665H8.83157C10.4829 7.49345 12.7744 8.10545 14.5334 8.44885V12.1333H3.7667C3.4539 12.1333 3.20001 11.8794 3.20001 11.5666V7.03334C3.20001 6.72054 3.4539 6.46665 3.7667 6.46665ZM28.7 6.46665H23.6352C21.9817 7.49345 19.6923 8.10545 17.9334 8.44885V12.1333H28.7C29.0128 12.1333 29.2667 11.8794 29.2667 11.5666V7.03334C29.2667 6.72049 29.0128 6.46665 28.7 6.46665ZM17.9333 27.4333V13.2666H28.1333V27.4333C28.1333 27.7461 27.8794 28 27.5666 28H17.829C17.8925 27.822 17.9333 27.6328 17.9333 27.4333Z"></path></svg>
<svg style="display:none"class="tab-icon-close" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" width="24" height="24" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 2.19 2.19" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><path class="fil0" d="M1.84 0.06c0.08,-0.08 0.21,-0.08 0.29,0 0.08,0.08 0.08,0.21 0,0.29l-0.75 0.74 0.75 0.75c0.08,0.08 0.08,0.21 0,0.29 -0.08,0.08 -0.21,0.08 -0.29,0l-0.75 -0.75 -0.74 0.75c-0.08,0.08 -0.21,0.08 -0.29,0 -0.08,-0.08 -0.08,-0.21 0,-0.29l0.74 -0.75 -0.74 -0.74c-0.08,-0.08 -0.08,-0.21 0,-0.29 0.08,-0.08 0.21,-0.08 0.29,0l0.74 0.74 0.75 -0.74z"></path></svg>

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
width: 50px;
height: 50px;
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
#tab-box-front-0 .tab-icon .hexagon-before{ background-color: #FFC60D;}
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
</style>
</div>`
getapend.insertAdjacentHTML('afterend',buttomcoupen);


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



window.onload = function () {
    var fiveMinutes = 60 * 2,
        display = document.querySelector('#discountly_timem');
    startTimer(fiveMinutes, display);
};

setTimeout(myFunction, 60*1000*2);


function myFunction() {

  window.location.href = "https://wishlistappstore.myshopify.com";


}


}

 


$("#closeit_btn").click(function(){
  $("#discountly_show-b").toggle();
});

$(".tab-icon-svg").click(function(){
  $("tab-box-content").toggle();
});

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (60*1000*2));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
}
var whatsppb = querySelector('body');
var buttonwhats =` <div id="WAButton"></div>`;
whatsppb.insertAdjacentHTML('afterend',buttonwhats[[]]);
$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '1231231231', //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: 'Chat with us on WhatsApp!', //Popup Title
    popupMessage: 'Hello, how can we help you?', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});


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

