(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();window.updateDisplayAndColors=c;window.updateColorFromPicker=ee;window.updateColorFromText=te;window.updateAllColors=re;function c(){var p,h,u,b,g,y,v,F,x,f,E,w,B,k,C,$,I,L,A,S,O,q,D,T,P,z,M,N,V,j,H,Y,U,J,K,R,Z,G,Q;let e=(p=document.querySelector('input[name="author-name-display"]:checked'))==null?void 0:p.value,n=(h=document.querySelector('input[name="border-block"]:checked'))==null?void 0:h.value,t=(u=document.querySelector('input[name="icon-display"]:checked'))==null?void 0:u.value;document.querySelectorAll(".comment-channel").forEach(s=>{s.style.display=e}),document.querySelectorAll(".comment-icon").forEach(s=>{s.style.display=t});let o=document.querySelectorAll(".comment-message"),m="",i="3px solid var(--listener-comment-border)",d="3px solid var(--member-comment-border)";o.forEach(s=>{if(n==="0")s.style.border="none",m="none",i="none",d="none";else{m='""';let W=s.parentElement.parentElement.getAttribute("author-type");W===""?s.style.border=i:W==="member"&&(s.style.border=d)}}),document.querySelectorAll(".comment-before").forEach(s=>{s.style.display=n==="0"?"none":"block"});let X=`
    :root {
      --listener-name: ${(b=document.getElementById("listener-name"))==null?void 0:b.value};
      --listener-name-bg: ${(g=document.getElementById("listener-name-bg"))==null?void 0:g.value};
      --member-name: ${(y=document.getElementById("member-name"))==null?void 0:y.value};
      --member-name-bg: ${(v=document.getElementById("member-name-bg"))==null?void 0:v.value};
      --listener-comment: ${(F=document.getElementById("listener-comment"))==null?void 0:F.value};
      --listener-comment-bg: ${(x=document.getElementById("listener-comment-bg"))==null?void 0:x.value};
      --listener-comment-border: ${(f=document.getElementById("listener-comment-border"))==null?void 0:f.value};
      --member-comment: ${(E=document.getElementById("member-comment"))==null?void 0:E.value};
      --member-comment-bg: ${(w=document.getElementById("member-comment-bg"))==null?void 0:w.value};
      --member-comment-border: ${(B=document.getElementById("member-comment-border"))==null?void 0:B.value};
      --superchat-name: ${(k=document.getElementById("superchat-name"))==null?void 0:k.value};
      --superchat-name-bg: ${(C=document.getElementById("superchat-name-bg"))==null?void 0:C.value};
      --superchat-comment: ${($=document.getElementById("superchat-comment"))==null?void 0:$.value};
      --superchat-comment-bg: ${(I=document.getElementById("superchat-comment-bg"))==null?void 0:I.value};
      --membership-name: ${(L=document.getElementById("membership-name"))==null?void 0:L.value};
      --membership-name-bg: ${(A=document.getElementById("membership-name-bg"))==null?void 0:A.value};
      --membership-comment: ${(S=document.getElementById("membership-comment"))==null?void 0:S.value};
      --membership-comment-bg: ${(O=document.getElementById("membership-comment-bg"))==null?void 0:O.value};
    }
  `,_=`@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap");
  
    :root {
      --listener-name: ${(q=document.getElementById("listener-name"))==null?void 0:q.value};
      --listener-name-bg: ${(D=document.getElementById("listener-name-bg"))==null?void 0:D.value};
      --member-name: ${(T=document.getElementById("member-name"))==null?void 0:T.value};
      --member-name-bg: ${(P=document.getElementById("member-name-bg"))==null?void 0:P.value};
      --listener-comment: ${(z=document.getElementById("listener-comment"))==null?void 0:z.value};
      --listener-comment-bg: ${(M=document.getElementById("listener-comment-bg"))==null?void 0:M.value};
      --listener-comment-border: ${(N=document.getElementById("listener-comment-border"))==null?void 0:N.value};
      --member-comment: ${(V=document.getElementById("member-comment"))==null?void 0:V.value};
      --member-comment-bg: ${(j=document.getElementById("member-comment-bg"))==null?void 0:j.value};
      --member-comment-border: ${(H=document.getElementById("member-comment-border"))==null?void 0:H.value};
      --superchat-name: ${(Y=document.getElementById("superchat-name"))==null?void 0:Y.value};
      --superchat-name-bg: ${(U=document.getElementById("superchat-name-bg"))==null?void 0:U.value};
      --superchat-comment: ${(J=document.getElementById("superchat-comment"))==null?void 0:J.value};
      --superchat-comment-bg: ${(K=document.getElementById("superchat-comment-bg"))==null?void 0:K.value};
      --membership-name: ${(R=document.getElementById("membership-name"))==null?void 0:R.value};
      --membership-name-bg: ${(Z=document.getElementById("membership-name-bg"))==null?void 0:Z.value};
      --membership-comment: ${(G=document.getElementById("membership-comment"))==null?void 0:G.value};
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
      padding: 4px 12px;
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
      display: ${t};
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
      content: ${m};
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
      content: ${m};
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

  `;document.getElementById("color-styles").innerHTML=X,document.getElementById("custom-css").innerHTML=_}function ee(e){let n=document.getElementById(e.id+"-code"),t=e.value.substring(1).toUpperCase();n.value=t,c(`--${e.id}`,e.value)}function te(e){let n=e.value.toUpperCase(),t=document.getElementById(e.id.replace("-code",""));/^[0-9A-Fa-f]{6}$/.test(n)&&(t.value="#"+n,c(`--${t.id}`)),e.value=n}function re(e,n){let t=n.toUpperCase();document.querySelectorAll('input[type="color"]').forEach(a=>{a.id!==e&&(a.value=t,document.getElementById(`${a.id}-code`).value=t.substring(1),c(`--${a.id}`,"#"+t.substring(1)))})}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-color-picker");e.forEach(r=>{r.addEventListener("click",function(){e.forEach(o=>o.classList.remove("active")),this.classList.add("active")})}),c();const n={"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"};for(const[r,o]of Object.entries(n)){const m=document.getElementById(r);if(m){m.value=o;const i=document.getElementById(`${r}-code`);i&&(i.value=o.substring(1))}}const t={colorSetPink:{"listener-name":"#FFFFFF","listener-name-bg":"#FB83AB","member-name":"#FFFFFF","member-name-bg":"#FB83AB","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FB83AB","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FB83AB","superchat-name":"#FFFFFF","superchat-name-bg":"#FFAAC6","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FB83AB","membership-name":"#FFFFFF","membership-name-bg":"#FFAAC6","membership-comment":"#FFFFFF","membership-comment-bg":"#FB83AB"},colorSetBlue:{"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"},colorSetPurple:{"listener-name":"#FFFFFF","listener-name-bg":"#A378FF","member-name":"#FFFFFF","member-name-bg":"#A378FF","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#A378FF","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#A378FF","superchat-name":"#FFFFFF","superchat-name-bg":"#BFA1FF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#A378FF","membership-name":"#FFFFFF","membership-name-bg":"#BFA1FF","membership-comment":"#FFFFFF","membership-comment-bg":"#A378FF"},colorSetOrange:{"listener-name":"#FFFFFF","listener-name-bg":"#FDA25F","member-name":"#FFFFFF","member-name-bg":"#FDA25F","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FDA25F","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FDA25F","superchat-name":"#FFFFFF","superchat-name-bg":"#FFBB88","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FDA25F","membership-name":"#FFFFFF","membership-name-bg":"#FFBB88","membership-comment":"#FFFFFF","membership-comment-bg":"#FDA25F"}};for(const[r,o]of Object.entries(t))document.getElementById(r).addEventListener("click",function(){for(const[m,i]of Object.entries(o)){const d=document.getElementById(m);if(d){d.value=i;const l=document.getElementById(`${m}-code`);l&&(l.value=i.substring(1))}}c()});document.querySelectorAll('input[type="color"]').forEach(r=>{r.addEventListener("input",function(){const o=document.getElementById(`${r.id}-code`);o&&(o.value=r.value.substring(1)),c()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".create-modal"),n=document.querySelector(".create-modal-open"),t=document.querySelector(".create-modal-close");let a;function r(){a=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${a}px`}function o(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,a)}function m(){e.classList.add("is-active"),r()}n.addEventListener("click",m);function i(){e.classList.remove("is-active"),o()}t.addEventListener("click",i);function d(l){l.target==e&&(e.classList.remove("is-active"),o())}addEventListener("click",d)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-modal"),n=document.querySelector(".about-modal-open"),t=document.querySelector(".about-modal-close");let a;function r(){a=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${a}px`}function o(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,a)}function m(){e.classList.add("is-active"),r()}n.addEventListener("click",m);function i(){e.classList.remove("is-active"),o()}t.addEventListener("click",i)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("copyBtn"),n=document.querySelector(".copy-tooltip");e.addEventListener("click",()=>{const t=document.getElementById("custom-css").value;navigator.clipboard.writeText(t).then(()=>{n.classList.add("show"),setTimeout(()=>{n.classList.remove("show")},2500)})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".custom-color-btn");e.forEach(function(n){n.addEventListener("click",function(){var t=this.nextElementSibling;t.style.maxHeight?(t.style.maxHeight=null,t.classList.remove("open")):(t.style.maxHeight=t.scrollHeight+"px",t.classList.add("open"))})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".custom-color-code");e.forEach(function(n){var t=n.value;n.addEventListener("input",function(){var a=this.value.replace(/[^a-zA-Z0-9]/g,"");a.length<=6?this.value=a:this.value=t}),n.addEventListener("blur",function(){this.value.length!==6&&(this.value=t)})})});
