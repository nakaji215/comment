(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();window.updateDisplayAndColors=c;window.updateColorFromPicker=X;window.updateColorFromText=_;window.updateAllColors=ne;function c(){var p,h,u,b,g,F,y,v,x,f,E,C,B,w,k,I,$,L,A,S,D,q,O,T,P,V,z,M,N,j,H,U,Y,J,K,G,R,Z,Q;let e=(p=document.querySelector('input[name="author-name-display"]:checked'))==null?void 0:p.value,t=(h=document.querySelector('input[name="border-block"]:checked'))==null?void 0:h.value,r=(u=document.querySelector('input[name="icon-display"]:checked'))==null?void 0:u.value;document.querySelectorAll(".comment-channel").forEach(s=>{s.style.display=e}),document.querySelectorAll(".comment-icon").forEach(s=>{s.style.display=r});let o=document.querySelectorAll(".comment-message"),a="",i="3px solid var(--listener-comment-border)",d="3px solid var(--member-comment-border)";o.forEach(s=>{if(t==="0")s.style.border="none",a="none",i="none",d="none";else{a='""';let W=s.parentElement.parentElement.getAttribute("author-type");W===""?s.style.border=i:W==="member"&&(s.style.border=d)}}),document.querySelectorAll(".comment-before").forEach(s=>{s.style.display=t==="0"?"none":"block"});let ee=`
    :root {
      --listener-name: ${(b=document.getElementById("listener-name"))==null?void 0:b.value};
      --listener-name-bg: ${(g=document.getElementById("listener-name-bg"))==null?void 0:g.value};
      --member-name: ${(F=document.getElementById("member-name"))==null?void 0:F.value};
      --member-name-bg: ${(y=document.getElementById("member-name-bg"))==null?void 0:y.value};
      --listener-comment: ${(v=document.getElementById("listener-comment"))==null?void 0:v.value};
      --listener-comment-bg: ${(x=document.getElementById("listener-comment-bg"))==null?void 0:x.value};
      --listener-comment-border: ${(f=document.getElementById("listener-comment-border"))==null?void 0:f.value};
      --member-comment: ${(E=document.getElementById("member-comment"))==null?void 0:E.value};
      --member-comment-bg: ${(C=document.getElementById("member-comment-bg"))==null?void 0:C.value};
      --member-comment-border: ${(B=document.getElementById("member-comment-border"))==null?void 0:B.value};
      --superchat-name: ${(w=document.getElementById("superchat-name"))==null?void 0:w.value};
      --superchat-name-bg: ${(k=document.getElementById("superchat-name-bg"))==null?void 0:k.value};
      --superchat-comment: ${(I=document.getElementById("superchat-comment"))==null?void 0:I.value};
      --superchat-comment-bg: ${($=document.getElementById("superchat-comment-bg"))==null?void 0:$.value};
      --membership-name: ${(L=document.getElementById("membership-name"))==null?void 0:L.value};
      --membership-name-bg: ${(A=document.getElementById("membership-name-bg"))==null?void 0:A.value};
      --membership-comment: ${(S=document.getElementById("membership-comment"))==null?void 0:S.value};
      --membership-comment-bg: ${(D=document.getElementById("membership-comment-bg"))==null?void 0:D.value};
    }
  `,te=`@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap");
  
    :root {
      --listener-name: ${(q=document.getElementById("listener-name"))==null?void 0:q.value};
      --listener-name-bg: ${(O=document.getElementById("listener-name-bg"))==null?void 0:O.value};
      --member-name: ${(T=document.getElementById("member-name"))==null?void 0:T.value};
      --member-name-bg: ${(P=document.getElementById("member-name-bg"))==null?void 0:P.value};
      --listener-comment: ${(V=document.getElementById("listener-comment"))==null?void 0:V.value};
      --listener-comment-bg: ${(z=document.getElementById("listener-comment-bg"))==null?void 0:z.value};
      --listener-comment-border: ${(M=document.getElementById("listener-comment-border"))==null?void 0:M.value};
      --member-comment: ${(N=document.getElementById("member-comment"))==null?void 0:N.value};
      --member-comment-bg: ${(j=document.getElementById("member-comment-bg"))==null?void 0:j.value};
      --member-comment-border: ${(H=document.getElementById("member-comment-border"))==null?void 0:H.value};
      --superchat-name: ${(U=document.getElementById("superchat-name"))==null?void 0:U.value};
      --superchat-name-bg: ${(Y=document.getElementById("superchat-name-bg"))==null?void 0:Y.value};
      --superchat-comment: ${(J=document.getElementById("superchat-comment"))==null?void 0:J.value};
      --superchat-comment-bg: ${(K=document.getElementById("superchat-comment-bg"))==null?void 0:K.value};
      --membership-name: ${(G=document.getElementById("membership-name"))==null?void 0:G.value};
      --membership-name-bg: ${(R=document.getElementById("membership-name-bg"))==null?void 0:R.value};
      --membership-comment: ${(Z=document.getElementById("membership-comment"))==null?void 0:Z.value};
      --membership-comment-bg: ${(Q=document.getElementById("membership-comment-bg"))==null?void 0:Q.value};
    }

    ytd-sponsorships-live-chat-header-renderer *,
    yt-live-chat-paid-sticker-renderer *,
    yt-live-chat-membership-item-renderer *,
    yt-live-chat-paid-message-renderer *,
    yt-live-chat-text-message-renderer * {
      font-family: "Noto Sans JP";
      font-size: 16px !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: 1.5 !important;
      letter-spacing: 0.5px !important;
    }

    ytd-sponsorships-live-chat-header-renderer #message,
    yt-live-chat-paid-sticker-renderer #message,
    yt-live-chat-membership-item-renderer #message,
    yt-live-chat-membership-item-renderer #header-subtext,
    ytd-sponsorships-live-chat-header-renderer #primary-text,
    yt-live-chat-paid-message-renderer #message,
    yt-live-chat-text-message-renderer #message {
      font-weight: 500 !important;
    } 

    ytd-sponsorships-live-chat-header-renderer,
    yt-live-chat-paid-sticker-renderer,
    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-text-message-renderer {
      animation: popIn 0.3s ease-out forwards;
    }

    @keyframes popIn {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
    }

    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer,
    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-sticker-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-text-message-renderer {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    /* ---------------------------------------------------- 
      content
    ----------------------------------------------------*/
    #content.yt-live-chat-text-message-renderer {
      position: relative;
      overflow: visible !important;
      display: block;
    }

    /* ---------------------------------------------------- 
      channel
    ----------------------------------------------------*/
    /* listener */
    yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
    yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
    yt-live-chat-text-message-renderer[author-type="member"] #author-name,
    yt-live-chat-text-message-renderer #author-name {
      display: ${e};
      width: fit-content;
      padding: 4px 12px !important;
      border-radius: 18px !important;
      background-color: var(--listener-name-bg) !important;
      color: var(--listener-name) !important;
      font-size: 12px !important;
      margin-bottom: 8px;
    }

    /* member */
    yt-live-chat-text-message-renderer[author-type="member"] #author-name {
      display: ${e};
      background-color: var(--member-name-bg) !important;
      color: var(--member-name) !important;
      font-size: 12px !important;
    }

    /* icon */
    yt-img-shadow#author-photo.yt-live-chat-text-message-renderer {
      margin-right: 8px;
      display: ${r};
    }

    #chat-badges.yt-live-chat-author-chip {
      display: ${e};
    }

    /* ---------------------------------------------------- 
      message 
    ----------------------------------------------------*/
    /* message */
    #message.yt-live-chat-text-message-renderer {
      background-color: var(--listener-comment-bg) !important;
      color: var(--listener-comment) !important;
      border-radius: 30px;
      border: ${i};
      display: block !important;
      padding: 12px 20px;
      width: fit-content !important;
      position: relative;
      overflow: visible;
    }

    #message.yt-live-chat-text-message-renderer::before {
      content: ${a};
      position: absolute;
      top: 4px;
      left: -3px;
      width: 21px;
      height: 21px;
      transform: rotate(-20deg) skew(20deg, 20deg);
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    #message.yt-live-chat-text-message-renderer::after {
      content: "";
      position: absolute;
      top: 7px;
      left: 1px;
      width: 18px;
      height: 18px;
      transform: rotate(-20deg) skew(20deg, 20deg);
      background-color: var(--listener-comment-bg);
      border-top-left-radius: 4px;
      border-bottom-right-radius: 20px;
      z-index: 0;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer {
      background-color: var(--member-comment-bg) !important;
      color: var(--member-comment) !important;
      border: ${d};
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::before {
      content: ${a};
      position: absolute;
      top: 4px;
      left: -3px;
      width: 21px;
      height: 21px;
      transform: rotate(-20deg) skew(20deg, 20deg);
      background-color: var(--member-comment-border) !important;
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::after {
      content: "";
      position: absolute;
      top: 7px;
      left: 1px;
      width: 18px;
      height: 18px;
      transform: rotate(-20deg) skew(20deg, 20deg);
      background-color: var(--member-comment-bg) !important;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 20px;
      z-index: 0;
    }

    /* ---------------------------------------------------- 
      superchat 
    ----------------------------------------------------*/
    /* card header */
    yt-live-chat-paid-message-renderer #card.yt-live-chat-paid-message-renderer {
      background-color: var(--superchat-comment-bg);
      border-radius: 13px;

      position: relative;
      width: 100%;
    }

    /* sp header */
    yt-live-chat-paid-message-renderer #header.yt-live-chat-paid-message-renderer {
      background-color: var(--superchat-name-bg);
      color: var(--superchat-name);
      padding: 12px 20px;
      border-radius: 10px 10px 0px 0px;
      position: relative;
    }

    yt-live-chat-author-chip[disable-highlighting] #author-name.yt-live-chat-author-chip {
      color: var(--superchat-name);
    }

    /* sp header only */
    yt-live-chat-paid-message-renderer[show-only-header] #header.yt-live-chat-paid-message-renderer {
      border-radius: 10px;
    }

    yt-live-chat-paid-message-renderer[show-only-header] #content.yt-live-chat-paid-message-renderer {
      padding: 0;
    }

    /* user */
    yt-live-chat-paid-message-renderer #single-line.yt-live-chat-paid-message-renderer span#chat-badges {
      display: flex;
      align-items: center;
    }

    yt-live-chat-paid-message-renderer #single-line.yt-live-chat-paid-message-renderer {
      display: flex;
      justify-content: space-between;
    }

    /* price */
    yt-live-chat-paid-message-renderer #header-content-primary-column.yt-live-chat-paid-message-renderer {
      padding-right: 0px !important;
    }

    #purchase-amount-column.yt-live-chat-paid-message-renderer {
      text-wrap: nowrap;
    }

    /* message */
    yt-live-chat-paid-message-renderer #content.yt-live-chat-paid-message-renderer {
      background-color: var(--superchat-comment-bg);
      color: var(--superchat-comment);
      border-radius: 0px 0px 10px 10px;
      padding: 12px 20px;
    }

    /* like */
    #creator-heart-button.yt-live-chat-paid-message-renderer {
      display: none !important;
    }
    
    #gradient-container.yt-live-chat-paid-message-renderer {
      display: none !important;
    }

    yt-live-chat-paid-message-renderer[has-heart-button] #menu.yt-live-chat-paid-message-renderer {
      display: none !important;
    }

    #action-buttons.yt-live-chat-paid-message-renderer {
      display: none !important;
    }

    /* super sticker */
    #before-content-buttons.yt-live-chat-text-message-renderer {
      display: none !important;
    }
    

    /* ---------------------------------------------------- 
      sticker 
    ----------------------------------------------------*/

    /* image */
    #sticker img {
      width: 56px !important;
      height: 56px !important;
    }

    /* sticker */
    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #card.yt-live-chat-paid-sticker-renderer {
      display: block;
      padding: 0px;
      border-radius: 10px;
      box-shadow: none;
      overflow: visible;
      position: relative;
    }

    /* header */
    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #author-info.yt-live-chat-paid-sticker-renderer {
      background-color: var(--superchat-name-bg);
      color: var(--superchat-name);
      border-radius: 10px 10px 0px 0px;
      display: block;
      padding: 12px 20px !important;
    }

    #author-photo.yt-live-chat-paid-sticker-renderer {
      display: none !important;
    }

    /* channel price*/
    #content-primary-column.yt-live-chat-paid-sticker-renderer {
      display: flex;
      justify-content: space-between;
    }

    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #purchase-amount-chip.yt-live-chat-paid-sticker-renderer {
      padding: 0;
      color: var(--superchat-name);
    }

    /* comment */
    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #sticker-container {
      background-color: var(--superchat-comment-bg) !important;
      display: block;
      padding: 12px 20px;
      border-radius: 0px 0px 10px 10px;
    }

    /* ----------------------------------------------------
      membership
    ---------------------------------------------------- */

    /* welcome channel */
    yt-live-chat-membership-item-renderer[show-only-header] #header.yt-live-chat-membership-item-renderer {
      background-color: var(--membership-name-bg) !important;
      color: var(--membership-name);
      padding: 0px;
      border-radius: 10px;
    }

    yt-live-chat-membership-item-renderer[show-only-header] div#header-content-inner-column {
      padding: 12px 20px;
    }

    /* welcome */
    yt-live-chat-membership-item-renderer[show-only-header] #header-subtext.yt-live-chat-membership-item-renderer {
      background-color: var(--membership-name-bg);
      color: var(--membership-name);
      padding: 0px 20px 12px;
      border-radius: 0px 0px 10px 10px;
      margin: 0;
    }

    /* comment */
    #header.yt-live-chat-membership-item-renderer {
      background-color: var(--membership-comment-bg);
      color: var(--membership-comment);
      padding: 0px;
      border-radius: 10px 10px 0px 0px;
    }

    #content.yt-live-chat-membership-item-renderer {
      background-color: var(--membership-comment-bg);
      color: var(--membership-comment);
      padding: 12px 20px;
      border-radius: 0px 0px 10px 10px;
    }

    yt-live-chat-membership-item-renderer[has-primary-header-text] div#header-content-primary-column {
      width: 100%;
    }

    /* channel member-history */
    yt-live-chat-membership-item-renderer[has-primary-header-text] div#header-content-inner-column {
      background-color: var(--membership-name-bg);
      color: var(--membership-name);
      padding: 12px 20px 0px;
      border-radius: 10px 10px 0px 0px;
    }

    /* membership-name */
    yt-live-chat-membership-item-renderer[has-primary-header-text]:not([dashboard-money-feed]) #header-subtext.yt-live-chat-membership-item-renderer {
      background-color: var(--membership-name-bg);
      color: var(--membership-name);
      padding: 6px 20px 12px;
      margin: 0;
    }

    /* channel */
    #content.ytd-sponsorships-live-chat-header-renderer #author-name.member.yt-live-chat-author-chip {
      display: block;
      background-color: var(--membership-name-bg);
      color: var(--membership-name) !important;
      border-radius: 10px 10px 0px 0px;
      padding: 12px 20px;
      width: 100%;
    }

    /* gift message */
    #content.ytd-sponsorships-live-chat-header-renderer {
      padding: 0px;
    }

    #primary-text.ytd-sponsorships-live-chat-header-renderer {  
      background-color: var(--membership-name-bg);
      color: var(--membership-name);
      border-radius: 0px 0px 10px 10px;
      padding: 0px 20px 12px;
    }

    /* gift */
    #header.ytd-sponsorships-live-chat-header-renderer {
      background-color: var(--membership-name-bg);
      color: var(--membership-name);
      border-radius: 10px;
    }

    .rhs-image.ytd-sponsorships-live-chat-header-renderer {
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      right: 20px;
    }

    /* gift image */
    ytd-sponsorships-live-chat-header-renderer img.yt-img-shadow {
      width: 80px;
      height: 80px;
    }

    #author-photo.ytd-sponsorships-live-chat-header-renderer {
      display: none;
    }

    /* ballon */
    #overlay-image.yt-live-chat-paid-message-renderer {
      top: 50%;
      transform: translateY(-50%);
      right: 100px;
      z-index: 2;
      width: 100px;
    }

    /* emoji */
    #content.yt-live-chat-paid-message-renderer img.yt-live-chat-paid-message-renderer {
      width: 18px !important;
      height: 18px !important;
    }

    /* badge */
    .yt-live-chat-author-badge-renderer {
      width: 16px !important;
      height: 16px !important;
    }

    /* icon */
    #author-photo.yt-live-chat-paid-message-renderer,
    #author-photo.yt-live-chat-membership-item-renderer {
      display: none !important;
    }

    /* badge  */
    yt-live-chat-author-badge-renderer[type=moderator],
    yt-live-chat-author-badge-renderer[type=verified] {
      display: none !important;
    }

    /* time */
    yt-live-chat-text-message-renderer #timestamp {
      display: none !important;
    }

    yt-live-chat-ticker-renderer {
      background-color: transparent !important;
      box-shadow: none !important;
    }

    yt-live-chat-renderer {
      visibility: hidden !important;
    }

    yt-live-chat-renderer * {
      visibility: initial !important;
    }

    yt-live-chat-item-list-renderer #items {
      overflow: hidden !important;
    }
    
    yt-live-chat-item-list-renderer #item-scroller {
      overflow: hidden !important;
    }

    yt-live-chat-text-message-renderer,
    yt-live-chat-text-message-renderer[is-highlighted],
    yt-live-chat-text-message-renderer[author-type="owner"],
    yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted],
    yt-live-chat-text-message-renderer[author-type="moderator"],
    yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted],
    yt-live-chat-text-message-renderer[author-type="member"],
    yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] {
      background-color: transparent !important;
    }

    div#action-panel.style-scope.yt-live-chat-renderer {
      display: none;
    }

    .mention.style-scope {
      background-color: unset;
    }

    yt-live-chat-upsell-dialog-renderer {
      display: none;
    }

    div#reaction-control-panel-overlay.yt-live-chat-renderer {
      display: none;
    }

    div#separator.yt-live-chat-renderer {
      display: none;
    }

    div#lower-bumper.yt-live-chat-paid-message-renderer {
      display: none;
    }

    ytd-sponsorships-live-chat-gift-redemption-announcement-renderer {
      display: none;
    }

    yt-live-chat-text-message-renderer a,
    yt-live-chat-membership-item-renderer a {
      text-decoration: none !important;
    }

    yt-live-chat-text-message-renderer[is-deleted],
    yt-live-chat-membership-item-renderer[is-deleted],
    yt-live-chat-moderation-message-renderer,
    yt-live-chat-auto-mod-message-renderer {
      display: none !important;
    }

    yt-live-chat-ticker-renderer {
      background-color: transparent !important;
      box-shadow: none !important;
    }

    yt-live-chat-ticker-renderer {
      display: none !important;
    }

    yt-live-chat-mode-change-message-renderer,
    yt-live-chat-viewer-engagement-message-renderer,
    yt-live-chat-server-error-message,
    yt-live-chat-banner-manager,
    yt-live-chat-restricted-participation-renderer {
      display: none !important;
    }

    #panel-pages,
    yt-live-chat-message-input-renderer {
      display: none !important;
    }

    yt-live-chat-header-renderer {
      display: none !important;
    }

    body {
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0);
    }

  `;document.getElementById("color-styles").innerHTML=ee,document.getElementById("custom-css").innerHTML=te}function X(e){let t=document.getElementById(e.id+"-code"),r=e.value.substring(1).toUpperCase();t.value=r,c(),document.querySelectorAll(".custom-color-template.active").forEach(m=>{m.classList.remove("active")})}function _(e){let t=e.value.toUpperCase(),r=document.getElementById(e.id.replace("-code",""));/^[0-9A-Fa-f]{6}$/.test(t)?(r.value="#"+t,c()):(e.value=t,r.value="#"+t,c()),document.querySelectorAll(".custom-color-template.active").forEach(m=>{m.classList.remove("active")})}function re(e){let t=document.getElementById(e.id.replace("-code","")),r=e.value.toUpperCase();if(!/^[0-9A-Fa-f]{6}$/.test(r)){let m=t.value;e.value=m?m.substring(1).toUpperCase():""}c()}function ne(e,t){let r=t.toUpperCase();document.querySelectorAll('input[type="color"]').forEach(m=>{m.id!==e&&(m.value=r,document.getElementById(`${m.id}-code`).value=r.substring(1),c())})}document.querySelectorAll('input[type="color"]').forEach(e=>{e.addEventListener("change",()=>X(e))});document.querySelectorAll('input[type="text"].custom-color-code').forEach(e=>{e.addEventListener("input",()=>_(e)),e.addEventListener("blur",()=>re(e))});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-color-template");e.forEach(n=>{n.addEventListener("click",function(){e.forEach(o=>o.classList.remove("active")),this.classList.add("active")})}),c();const t={"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"};for(const[n,o]of Object.entries(t)){const a=document.getElementById(n);if(a){a.value=o;const i=document.getElementById(`${n}-code`);i&&(i.value=o.substring(1))}}const r={colorSetPink:{"listener-name":"#FFFFFF","listener-name-bg":"#FB83AB","member-name":"#FFFFFF","member-name-bg":"#FB83AB","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FB83AB","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FB83AB","superchat-name":"#FFFFFF","superchat-name-bg":"#FFAAC6","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FB83AB","membership-name":"#FFFFFF","membership-name-bg":"#FFAAC6","membership-comment":"#FFFFFF","membership-comment-bg":"#FB83AB"},colorSetBlue:{"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"},colorSetPurple:{"listener-name":"#FFFFFF","listener-name-bg":"#C891F8","member-name":"#FFFFFF","member-name-bg":"#C891F8","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#C891F8","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#C891F8","superchat-name":"#FFFFFF","superchat-name-bg":"#B77CEB","superchat-comment":"#FFFFFF","superchat-comment-bg":"#C891F8","membership-name":"#FFFFFF","membership-name-bg":"#B77CEB","membership-comment":"#FFFFFF","membership-comment-bg":"#C891F8"},colorSetOrange:{"listener-name":"#FFFFFF","listener-name-bg":"#FDA25F","member-name":"#FFFFFF","member-name-bg":"#FDA25F","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FDA25F","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FDA25F","superchat-name":"#FFFFFF","superchat-name-bg":"#FFBB88","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FDA25F","membership-name":"#FFFFFF","membership-name-bg":"#FFBB88","membership-comment":"#FFFFFF","membership-comment-bg":"#FDA25F"},colorSetGreen:{"listener-name":"#FFFFFF","listener-name-bg":"#7AC970","member-name":"#FFFFFF","member-name-bg":"#7AC970","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#7AC970","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#7AC970","superchat-name":"#FFFFFF","superchat-name-bg":"#90D387","superchat-comment":"#FFFFFF","superchat-comment-bg":"#7AC970","membership-name":"#FFFFFF","membership-name-bg":"#90D387","membership-comment":"#FFFFFF","membership-comment-bg":"#7AC970"},colorSetBlack:{"listener-name":"#FFFFFF","listener-name-bg":"#8D8D8D","member-name":"#FFFFFF","member-name-bg":"#8D8D8D","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8D8D8D","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8D8D8D","superchat-name":"#FFFFFF","superchat-name-bg":"#8D8D8D","superchat-comment":"#FFFFFF","superchat-comment-bg":"#717171","membership-name":"#FFFFFF","membership-name-bg":"#8D8D8D","membership-comment":"#FFFFFF","membership-comment-bg":"#717171"}};for(const[n,o]of Object.entries(r))document.getElementById(n).addEventListener("click",function(){for(const[a,i]of Object.entries(o)){const d=document.getElementById(a);if(d){d.value=i;const l=document.getElementById(`${a}-code`);l&&(l.value=i.substring(1))}}c()});document.querySelectorAll('input[type="color"]').forEach(n=>{n.addEventListener("input",function(){const o=document.getElementById(`${n.id}-code`);o&&(o.value=n.value.substring(1)),c()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".create-modal"),t=document.querySelector(".create-modal-open"),r=document.querySelector(".create-modal-close");let m;function n(){m=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${m}px`}function o(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,m)}function a(){e.classList.add("is-active"),n()}t.addEventListener("click",a);function i(){e.classList.remove("is-active"),o()}r.addEventListener("click",i);function d(l){l.target==e&&(e.classList.remove("is-active"),o())}addEventListener("click",d)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-modal"),t=document.querySelector(".about-modal-open"),r=document.querySelector(".about-modal-close");let m;function n(){m=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${m}px`}function o(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,m)}function a(){e.classList.add("is-active"),n()}t.addEventListener("click",a);function i(){e.classList.remove("is-active"),o()}r.addEventListener("click",i)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("copyBtn"),t=document.querySelector(".copy-tooltip");e.addEventListener("click",()=>{const r=document.getElementById("custom-css").value;navigator.clipboard.writeText(r).then(()=>{t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},2500)})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".custom-color-btn");e.forEach(function(t){t.addEventListener("click",function(){var r=this.nextElementSibling;r.style.maxHeight?(r.style.maxHeight=null,r.classList.remove("open")):(r.style.maxHeight=r.scrollHeight+"px",r.classList.add("open"))})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".custom-color-code");e.forEach(function(t){var r=t.value;t.addEventListener("input",function(){var m=this.value.replace(/[^a-zA-Z0-9]/g,"");m.length<=6?this.value=m:this.value=r}),t.addEventListener("blur",function(){this.value.length!==6&&(this.value=r)})})});
