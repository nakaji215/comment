(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const m of a)if(m.type==="childList")for(const i of m.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const m={};return a.integrity&&(m.integrity=a.integrity),a.referrerPolicy&&(m.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?m.credentials="include":a.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function t(a){if(a.ep)return;a.ep=!0;const m=n(a);fetch(a.href,m)}})();window.updateDisplayAndColors=c;window.updateColorFromPicker=ae;window.updateColorFromText=me;window.updateAllColors=de;function c(){var F,v,x,f,E,C,w,k,B,$,I,A,L,S,D,q,O,T,V,P,j,z,M,N,H,U,Y,R,J,K,G,Z,Q,W,X,_,ee,te,re,ne;let e=(F=document.querySelector('input[name="author-name-display"]:checked'))==null?void 0:F.value,r=(v=document.querySelector('input[name="border-block"]:checked'))==null?void 0:v.value,n=(x=document.querySelector('input[name="icon-display"]:checked'))==null?void 0:x.value,t=(f=document.querySelector('input[name="comment-direction"]:checked'))==null?void 0:f.value;document.querySelectorAll(".comment-channel").forEach(o=>{o.style.display=e}),document.querySelectorAll(".comment-icon").forEach(o=>{o.style.display=n});let i=document.querySelectorAll(".comment-message"),s="",d="3px solid var(--listener-comment-border)",l="3px solid var(--member-comment-border)";i.forEach(o=>{if(r==="0")o.style.border="none",s="none",d="none",l="none";else{s='""';let oe=o.parentElement.parentElement.getAttribute("author-type");oe===""?o.style.border=d:oe==="member"&&(o.style.border=l)}}),document.querySelectorAll(".comment-before").forEach(o=>{o.style.display=r==="0"?"none":"block"});let p="row",h="row-reverse",u="start",g="end";document.querySelectorAll(".listener-contents, .member-contents").forEach(o=>{t==="flex-start"?o.style.flexDirection=p:o.style.flexDirection=h}),document.querySelectorAll(".listener-contents .comment-channel-block, .member-contents .comment-channel-block").forEach(o=>{t==="flex-start"?o.style.justifyContent=u:o.style.justifyContent=g});let b=document.querySelectorAll(".comment-before"),y=document.querySelectorAll(".comment-after");t==="flex-start"?(b.forEach(o=>{o.style.left="-3px",o.style.right="auto",o.style.transform="rotate(-20deg) skew(20deg, 20deg)"}),y.forEach(o=>{o.style.left="1px",o.style.right="auto",o.style.transform="rotate(-20deg) skew(20deg, 20deg)"})):(b.forEach(o=>{o.style.left="auto",o.style.right="-3px",o.style.transform="rotate(-70deg) skew(20deg, 20deg)"}),y.forEach(o=>{o.style.left="auto",o.style.right="1px",o.style.transform="rotate(110deg) skew(20deg, 20deg)"}));let ie=`
    :root {
      --listener-name: ${(E=document.getElementById("listener-name"))==null?void 0:E.value};
      --listener-name-bg: ${(C=document.getElementById("listener-name-bg"))==null?void 0:C.value};
      --member-name: ${(w=document.getElementById("member-name"))==null?void 0:w.value};
      --member-name-bg: ${(k=document.getElementById("member-name-bg"))==null?void 0:k.value};
      --listener-comment: ${(B=document.getElementById("listener-comment"))==null?void 0:B.value};
      --listener-comment-bg: ${($=document.getElementById("listener-comment-bg"))==null?void 0:$.value};
      --listener-comment-border: ${(I=document.getElementById("listener-comment-border"))==null?void 0:I.value};
      --member-comment: ${(A=document.getElementById("member-comment"))==null?void 0:A.value};
      --member-comment-bg: ${(L=document.getElementById("member-comment-bg"))==null?void 0:L.value};
      --member-comment-border: ${(S=document.getElementById("member-comment-border"))==null?void 0:S.value};
      --superchat-name: ${(D=document.getElementById("superchat-name"))==null?void 0:D.value};
      --superchat-name-bg: ${(q=document.getElementById("superchat-name-bg"))==null?void 0:q.value};
      --superchat-comment: ${(O=document.getElementById("superchat-comment"))==null?void 0:O.value};
      --superchat-comment-bg: ${(T=document.getElementById("superchat-comment-bg"))==null?void 0:T.value};
      --membership-name: ${(V=document.getElementById("membership-name"))==null?void 0:V.value};
      --membership-name-bg: ${(P=document.getElementById("membership-name-bg"))==null?void 0:P.value};
      --membership-comment: ${(j=document.getElementById("membership-comment"))==null?void 0:j.value};
      --membership-comment-bg: ${(z=document.getElementById("membership-comment-bg"))==null?void 0:z.value};
    }
  `,se=`@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap");
  
  :root {
    --listener-name: ${(M=document.getElementById("listener-name"))==null?void 0:M.value};
    --listener-name-bg: ${(N=document.getElementById("listener-name-bg"))==null?void 0:N.value};
    --member-name: ${(H=document.getElementById("member-name"))==null?void 0:H.value};
    --member-name-bg: ${(U=document.getElementById("member-name-bg"))==null?void 0:U.value};
    --listener-comment: ${(Y=document.getElementById("listener-comment"))==null?void 0:Y.value};
    --listener-comment-bg: ${(R=document.getElementById("listener-comment-bg"))==null?void 0:R.value};
    --listener-comment-border: ${(J=document.getElementById("listener-comment-border"))==null?void 0:J.value};
    --member-comment: ${(K=document.getElementById("member-comment"))==null?void 0:K.value};
    --member-comment-bg: ${(G=document.getElementById("member-comment-bg"))==null?void 0:G.value};
    --member-comment-border: ${(Z=document.getElementById("member-comment-border"))==null?void 0:Z.value};
    --superchat-name: ${(Q=document.getElementById("superchat-name"))==null?void 0:Q.value};
    --superchat-name-bg: ${(W=document.getElementById("superchat-name-bg"))==null?void 0:W.value};
    --superchat-comment: ${(X=document.getElementById("superchat-comment"))==null?void 0:X.value};
    --superchat-comment-bg: ${(_=document.getElementById("superchat-comment-bg"))==null?void 0:_.value};
    --membership-name: ${(ee=document.getElementById("membership-name"))==null?void 0:ee.value};
    --membership-name-bg: ${(te=document.getElementById("membership-name-bg"))==null?void 0:te.value};
    --membership-comment: ${(re=document.getElementById("membership-comment"))==null?void 0:re.value};
    --membership-comment-bg: ${(ne=document.getElementById("membership-comment-bg"))==null?void 0:ne.value};
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
    animation: ${t==="flex-start"?"popInLeft":"popInRight"} 0.3s ease-out forwards;
  }

  @keyframes popInLeft {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }

  @keyframes popInRight {
    0% {
      opacity: 0;
      transform: translate(50%, -50%) scale(0);
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
  yt-live-chat-text-message-renderer {
    flex-direction: ${t==="flex-start"?p:h} !important;
    grid-gap: 8px;
  }

  #content.yt-live-chat-text-message-renderer {
    position: relative;
    overflow: visible !important;
    display: block;
  }

  /* ---------------------------------------------------- 
    channel
  ----------------------------------------------------*/
  yt-live-chat-author-chip.yt-live-chat-text-message-renderer {
    justify-content: ${t==="flex-start"?u:g} !important;
    width: 100%;
    margin: auto;
  }

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
    margin-right: 0px;
    display: ${n};
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
    border: ${d};
    display: block !important;
    padding: 12px 20px;
    width: fit-content !important;
    position: relative;
    overflow: visible;
    ${t==="flex-start"?"margin-right":"margin-left"} : auto;
  }

  #message.yt-live-chat-text-message-renderer::before {
    content: ${s};
    position: absolute;
    top: 4px;
    ${t==="flex-start"?"left: -3px; right: auto;":"left: auto; right: -3px;"}
    width: 21px;
    height: 21px;
    transform: ${t==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(-70deg) skew(20deg, 20deg)"};
    background-color: var(--listener-comment-border);
    border-top-left-radius: 7px;
    border-bottom-right-radius: 6px;
    z-index: -1;
  }

  #message.yt-live-chat-text-message-renderer::after {
    content: "";
    position: absolute;
    top: 7px;
    ${t==="flex-start"?"left: 1px; right: auto;":"left: auto; right: 1px;"}
    width: 18px;
    height: 18px;
    transform: ${t==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(110deg) skew(20deg, 20deg)"};
    background-color: var(--listener-comment-bg);
    border-top-left-radius: 4px;
    border-bottom-right-radius: 20px;
    z-index: 0;
  }

  yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer {
    background-color: var(--member-comment-bg) !important;
    color: var(--member-comment) !important;
    border: ${l};
    ${t==="flex-start"?"margin-right":"margin-left"} : auto;
  }

  yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::before {
    content: ${s};
    position: absolute;
    top: 4px;
    ${t==="flex-start"?"left: -3px; right: auto;":"left: auto; right: -3px;"}
    width: 21px;
    height: 21px;
    transform: ${t==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(-70deg) skew(20deg, 20deg)"};
    background-color: var(--listener-comment-border);
    border-top-left-radius: 7px;
    border-bottom-right-radius: 6px;
    z-index: -1;
  }

  yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::after {
    content: "";
    position: absolute;
    top: 7px;
    ${t==="flex-start"?"left: 1px; right: auto;":"left: auto; right: 1px;"}
    width: 18px;
    height: 18px;
    transform: ${t==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(110deg) skew(20deg, 20deg)"};
    background-color: var(--listener-comment-bg);
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

`;document.getElementById("color-styles").innerHTML=ie,document.getElementById("custom-css").innerHTML=se}function ae(e){let r=document.getElementById(e.id+"-code"),n=e.value.substring(1).toUpperCase();r.value=n,c(),document.querySelectorAll(".custom-color-template.active").forEach(t=>{t.classList.remove("active")})}function me(e){let r=e.value.toUpperCase(),n=document.getElementById(e.id.replace("-code",""));/^[0-9A-Fa-f]{6}$/.test(r)?(n.value="#"+r,c()):(e.value=r,n.value="#"+r,c()),document.querySelectorAll(".custom-color-template.active").forEach(t=>{t.classList.remove("active")})}function ce(e){let r=document.getElementById(e.id.replace("-code","")),n=e.value.toUpperCase();if(!/^[0-9A-Fa-f]{6}$/.test(n)){let t=r.value;e.value=t?t.substring(1).toUpperCase():""}c()}function de(e,r){let n=r.toUpperCase();document.querySelectorAll('input[type="color"]').forEach(t=>{t.id!==e&&(t.value=n,document.getElementById(`${t.id}-code`).value=n.substring(1),c())})}document.querySelectorAll('input[type="color"]').forEach(e=>{e.addEventListener("change",()=>ae(e))});document.querySelectorAll('input[type="text"].custom-color-code').forEach(e=>{e.addEventListener("input",()=>me(e)),e.addEventListener("blur",()=>ce(e))});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-color-template");e.forEach(a=>{a.addEventListener("click",function(){e.forEach(m=>m.classList.remove("active")),this.classList.add("active")})}),c();const r={"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"};for(const[a,m]of Object.entries(r)){const i=document.getElementById(a);if(i){i.value=m;const s=document.getElementById(`${a}-code`);s&&(s.value=m.substring(1))}}const n={colorSetPink:{"listener-name":"#FFFFFF","listener-name-bg":"#FB83AB","member-name":"#FFFFFF","member-name-bg":"#FB83AB","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FB83AB","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FB83AB","superchat-name":"#FFFFFF","superchat-name-bg":"#FFAAC6","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FB83AB","membership-name":"#FFFFFF","membership-name-bg":"#FFAAC6","membership-comment":"#FFFFFF","membership-comment-bg":"#FB83AB"},colorSetBlue:{"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"},colorSetPurple:{"listener-name":"#FFFFFF","listener-name-bg":"#C891F8","member-name":"#FFFFFF","member-name-bg":"#C891F8","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#C891F8","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#C891F8","superchat-name":"#FFFFFF","superchat-name-bg":"#B77CEB","superchat-comment":"#FFFFFF","superchat-comment-bg":"#C891F8","membership-name":"#FFFFFF","membership-name-bg":"#B77CEB","membership-comment":"#FFFFFF","membership-comment-bg":"#C891F8"},colorSetOrange:{"listener-name":"#FFFFFF","listener-name-bg":"#FDA25F","member-name":"#FFFFFF","member-name-bg":"#FDA25F","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FDA25F","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FDA25F","superchat-name":"#FFFFFF","superchat-name-bg":"#FFBB88","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FDA25F","membership-name":"#FFFFFF","membership-name-bg":"#FFBB88","membership-comment":"#FFFFFF","membership-comment-bg":"#FDA25F"},colorSetGreen:{"listener-name":"#FFFFFF","listener-name-bg":"#7AC970","member-name":"#FFFFFF","member-name-bg":"#7AC970","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#7AC970","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#7AC970","superchat-name":"#FFFFFF","superchat-name-bg":"#90D387","superchat-comment":"#FFFFFF","superchat-comment-bg":"#7AC970","membership-name":"#FFFFFF","membership-name-bg":"#90D387","membership-comment":"#FFFFFF","membership-comment-bg":"#7AC970"},colorSetBlack:{"listener-name":"#FFFFFF","listener-name-bg":"#8D8D8D","member-name":"#FFFFFF","member-name-bg":"#8D8D8D","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8D8D8D","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8D8D8D","superchat-name":"#FFFFFF","superchat-name-bg":"#8D8D8D","superchat-comment":"#FFFFFF","superchat-comment-bg":"#717171","membership-name":"#FFFFFF","membership-name-bg":"#8D8D8D","membership-comment":"#FFFFFF","membership-comment-bg":"#717171"}};for(const[a,m]of Object.entries(n))document.getElementById(a).addEventListener("click",function(){for(const[i,s]of Object.entries(m)){const d=document.getElementById(i);if(d){d.value=s;const l=document.getElementById(`${i}-code`);l&&(l.value=s.substring(1))}}c()});document.querySelectorAll('input[type="color"]').forEach(a=>{a.addEventListener("input",function(){const m=document.getElementById(`${a.id}-code`);m&&(m.value=a.value.substring(1)),c()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".create-modal"),r=document.querySelector(".create-modal-open"),n=document.querySelector(".create-modal-close");let t;function a(){t=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${t}px`}function m(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,t)}function i(){e.classList.add("is-active"),a()}r.addEventListener("click",i);function s(){e.classList.remove("is-active"),m()}n.addEventListener("click",s);function d(l){l.target==e&&(e.classList.remove("is-active"),m())}addEventListener("click",d)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-modal"),r=document.querySelector(".about-modal-open"),n=document.querySelector(".about-modal-close");let t;function a(){t=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${t}px`}function m(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,t)}function i(){e.classList.add("is-active"),a()}r.addEventListener("click",i);function s(){e.classList.remove("is-active"),m()}n.addEventListener("click",s)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("copyBtn"),r=document.querySelector(".copy-tooltip");e.addEventListener("click",()=>{const n=document.getElementById("custom-css").value;navigator.clipboard.writeText(n).then(()=>{r.classList.add("show"),setTimeout(()=>{r.classList.remove("show")},2500)})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".custom-color-btn");e.forEach(function(r){r.addEventListener("click",function(){var n=this.nextElementSibling;n.style.maxHeight?(n.style.maxHeight=null,n.classList.remove("open")):(n.style.maxHeight=n.scrollHeight+"px",n.classList.add("open"))})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".custom-color-code");e.forEach(function(r){var n=r.value;r.addEventListener("input",function(){var t=this.value.replace(/[^a-zA-Z0-9]/g,"");t.length<=6?this.value=t:this.value=n}),r.addEventListener("blur",function(){this.value.length!==6&&(this.value=n)})})});
