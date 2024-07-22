(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const m of n)if(m.type==="childList")for(const a of m.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const m={};return n.integrity&&(m.integrity=n.integrity),n.referrerPolicy&&(m.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?m.credentials="include":n.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function i(n){if(n.ep)return;n.ep=!0;const m=t(n);fetch(n.href,m)}})();window.updateDisplayAndColors=p;window.updateColorFromPicker=te;window.updateColorFromText=re;window.updateAllColors=ne;function p(){var o,s,d,c,u,g,f,E,B,w,C,k,I,$,A,S,L,O,q,D,T,P,z,N,M,j,H,V,Y,J,K,R,Z,G,Q,U,W,X,_;let r=(o=document.querySelector('input[name="author-name-display"]:checked'))==null?void 0:o.value,e=(s=document.querySelector('input[name="border-block"]:checked'))==null?void 0:s.value,t=(d=document.querySelector('input[name="icon-display"]:checked'))==null?void 0:d.value;document.querySelectorAll("yt-live-chat-author-chip.yt-live-chat-text-message-renderer").forEach(l=>{l.style.display=r}),document.querySelectorAll("yt-img-shadow#author-photo.yt-live-chat-text-message-renderer").forEach(l=>{l.style.display=t});let m=document.querySelectorAll("yt-live-chat-text-message-renderer"),a="",b="3px solid var(--listener-comment-border)",h="3px solid var(--member-comment-border)";m.forEach(l=>{let v=l.querySelector("#message");if(e==="0")v.style.border="none",a="none",b="none",h="none";else{a='""';let ee=l.getAttribute("author-type");ee===""?v.style.border="3px solid var(--listener-comment-border)":ee==="member"&&(v.style.border="3px solid var(--member-comment-border)")}}),document.querySelectorAll(".message-before").forEach(l=>{l.style.display=e==="0"?"none":"block"});let y=`
    :root {
      --listener-name: ${(c=document.getElementById("listener-name"))==null?void 0:c.value};
      --listener-name-bg: ${(u=document.getElementById("listener-name-bg"))==null?void 0:u.value};
      --member-name: ${(g=document.getElementById("member-name"))==null?void 0:g.value};
      --member-name-bg: ${(f=document.getElementById("member-name-bg"))==null?void 0:f.value};
      --listener-comment: ${(E=document.getElementById("listener-comment"))==null?void 0:E.value};
      --listener-comment-bg: ${(B=document.getElementById("listener-comment-bg"))==null?void 0:B.value};
      --listener-comment-border: ${(w=document.getElementById("listener-comment-border"))==null?void 0:w.value};
      --member-comment: ${(C=document.getElementById("member-comment"))==null?void 0:C.value};
      --member-comment-bg: ${(k=document.getElementById("member-comment-bg"))==null?void 0:k.value};
      --member-comment-border: ${(I=document.getElementById("member-comment-border"))==null?void 0:I.value};
      --superchat-name: ${($=document.getElementById("superchat-name"))==null?void 0:$.value};
      --superchat-name-bg: ${(A=document.getElementById("superchat-name-bg"))==null?void 0:A.value};
      --superchat-comment: ${(S=document.getElementById("superchat-comment"))==null?void 0:S.value};
      --superchat-comment-bg: ${(L=document.getElementById("superchat-comment-bg"))==null?void 0:L.value};
      --membership-name: ${(O=document.getElementById("membership-name"))==null?void 0:O.value};
      --membership-name-bg: ${(q=document.getElementById("membership-name-bg"))==null?void 0:q.value};
      --membership-comment: ${(D=document.getElementById("membership-comment"))==null?void 0:D.value};
      --membership-comment-bg: ${(T=document.getElementById("membership-comment-bg"))==null?void 0:T.value};
    }
  `,F=`@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap");
  
    :root {
      --listener-name: ${(P=document.getElementById("listener-name"))==null?void 0:P.value};
      --listener-name-bg: ${(z=document.getElementById("listener-name-bg"))==null?void 0:z.value};
      --member-name: ${(N=document.getElementById("member-name"))==null?void 0:N.value};
      --member-name-bg: ${(M=document.getElementById("member-name-bg"))==null?void 0:M.value};
      --listener-comment: ${(j=document.getElementById("listener-comment"))==null?void 0:j.value};
      --listener-comment-bg: ${(H=document.getElementById("listener-comment-bg"))==null?void 0:H.value};
      --listener-comment-border: ${(V=document.getElementById("listener-comment-border"))==null?void 0:V.value};
      --member-comment: ${(Y=document.getElementById("member-comment"))==null?void 0:Y.value};
      --member-comment-bg: ${(J=document.getElementById("member-comment-bg"))==null?void 0:J.value};
      --member-comment-border: ${(K=document.getElementById("member-comment-border"))==null?void 0:K.value};
      --superchat-name: ${(R=document.getElementById("superchat-name"))==null?void 0:R.value};
      --superchat-name-bg: ${(Z=document.getElementById("superchat-name-bg"))==null?void 0:Z.value};
      --superchat-comment: ${(G=document.getElementById("superchat-comment"))==null?void 0:G.value};
      --superchat-comment-bg: ${(Q=document.getElementById("superchat-comment-bg"))==null?void 0:Q.value};
      --membership-name: ${(U=document.getElementById("membership-name"))==null?void 0:U.value};
      --membership-name-bg: ${(W=document.getElementById("membership-name-bg"))==null?void 0:W.value};
      --membership-comment: ${(X=document.getElementById("membership-comment"))==null?void 0:X.value};
      --membership-comment-bg: ${(_=document.getElementById("membership-comment-bg"))==null?void 0:_.value};
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
      display: ${r};
    }

    /* ---------------------------------------------------- 
      channel
    ----------------------------------------------------*/
    /* listener */
    yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
    yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
    yt-live-chat-text-message-renderer[author-type="member"] #author-name,
    yt-live-chat-text-message-renderer #author-name {
      display: flex;
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
      background-color: var(--member-name-bg) !important;
      color: var(--member-name) !important;
      font-size: 12px !important;
    }

    /* icon */
    yt-img-shadow#author-photo.yt-live-chat-text-message-renderer {
      margin-right: 8px;
      display: ${t};
    }

    /* ---------------------------------------------------- 
      message 
    ----------------------------------------------------*/
    /* message */
    #message.yt-live-chat-text-message-renderer {
      background-color: var(--listener-comment-bg) !important;
      color: var(--listener-comment) !important;
      border-radius: 30px;
      border: ${b};
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
      border: ${h};
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
      border-radius: 6px;
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

  `;document.getElementById("color-styles").innerHTML=y,document.getElementById("custom-css").innerHTML=F}function te(r){let e=document.getElementById(r.id+"-code");e.value=r.value.substring(1),p(`--${r.id}`,r.value)}function re(r){let e=r.value,t=document.getElementById(r.id.replace("-code",""));/^[0-9A-Fa-f]{6}$/.test(e)&&(t.value="#"+e,p(`--${t.id}`))}function ne(r,e){document.querySelectorAll('input[type="color"]').forEach(t=>{t.id!==r&&(t.value=e,document.getElementById(`${t.id}-code`).value=e.substring(1),p(`--${t.id}`))})}document.addEventListener("DOMContentLoaded",function(){p();const r={"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#8CCCE3","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"};for(const[o,s]of Object.entries(r)){const d=document.getElementById(o);if(d){d.value=s;const c=document.getElementById(`${o}-code`);c&&(c.value=s.substring(1))}}const e={colorSetPink:{"listener-name":"#FFFFFF","listener-name-bg":"#FB83AB","member-name":"#FFFFFF","member-name-bg":"#FB83AB","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FB83AB","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FB83AB","superchat-name":"#FFFFFF","superchat-name-bg":"#FFAAC6","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FB83AB","membership-name":"#FFFFFF","membership-name-bg":"#FFAAC6","membership-comment":"#FFFFFF","membership-comment-bg":"#FB83AB"},colorSetBlue:{"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"},colorSetPurple:{"listener-name":"#FFFFFF","listener-name-bg":"#A378FF","member-name":"#FFFFFF","member-name-bg":"#A378FF","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#A378FF","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#A378FF","superchat-name":"#FFFFFF","superchat-name-bg":"#BFA1FF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#A378FF","membership-name":"#FFFFFF","membership-name-bg":"#BFA1FF","membership-comment":"#FFFFFF","membership-comment-bg":"#A378FF"},colorSetOrange:{"listener-name":"#FFFFFF","listener-name-bg":"#FDA25F","member-name":"#FFFFFF","member-name-bg":"#FDA25F","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FDA25F","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FDA25F","superchat-name":"#FFFFFF","superchat-name-bg":"#FFBB88","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FDA25F","membership-name":"#FFFFFF","membership-name-bg":"#FFBB88","membership-comment":"#FFFFFF","membership-comment-bg":"#FDA25F"}};for(const[o,s]of Object.entries(e))document.getElementById(o).addEventListener("click",function(){for(const[d,c]of Object.entries(s)){const u=document.getElementById(d);if(u){u.value=c;const g=document.getElementById(`${d}-code`);g&&(g.value=c.substring(1))}}p()});document.querySelectorAll('input[type="color"]').forEach(o=>{o.addEventListener("input",function(){const s=document.getElementById(`${o.id}-code`);s&&(s.value=o.value.substring(1)),p()})});const i=document.querySelector(".modal"),n=document.querySelector(".modal-open"),m=document.querySelector(".modal-close");let a;function b(){a=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${a}px`}function h(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,a)}function x(){i.classList.add("is-active"),b()}n.addEventListener("click",x);function y(){i.classList.remove("is-active"),h()}m.addEventListener("click",y);function F(o){o.target==i&&(i.classList.remove("is-active"),h())}addEventListener("click",F)});document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("copyBtn"),e=document.querySelector(".copy-tooltip");r.addEventListener("click",()=>{const t=document.getElementById("custom-css").value;navigator.clipboard.writeText(t).then(()=>{e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},2500)})})});document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".custom-color-btn");r.forEach(function(e){e.addEventListener("click",function(){var t=this.nextElementSibling;t.style.maxHeight?(t.style.maxHeight=null,t.classList.remove("open")):(t.style.maxHeight=t.scrollHeight+"px",t.classList.add("open"))})})});document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".custom-color-code");r.forEach(function(e){var t=e.value;e.addEventListener("input",function(){var i=this.value.replace(/[^a-zA-Z0-9]/g,"");i.length<=6?this.value=i:this.value=t}),e.addEventListener("blur",function(){this.value.length!==6&&(this.value=t)})})});
