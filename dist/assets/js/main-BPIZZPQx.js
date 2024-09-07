(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const m of n)if(m.type==="childList")for(const i of m.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const m={};return n.integrity&&(m.integrity=n.integrity),n.referrerPolicy&&(m.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?m.credentials="include":n.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function e(n){if(n.ep)return;n.ep=!0;const m=a(n);fetch(n.href,m)}})();window.updateDisplayAndColors=d;window.updateColorFromPicker=ve;window.updateColorFromText=fe;window.updateAllColors=Ce;function d(){var B,$,I,L,S,A,D,q,_,O,T,N,z,j,M,P,V,H,R,U,J,Y,K,G,Q,Z,W,X,ee,te,re,ne,oe,ae,me,ie,se,ce,le,de,pe,he,ue,ge,be,ye;let t=(B=document.querySelector('input[name="author-name-display"]:checked'))==null?void 0:B.value,o=($=document.querySelector('input[name="border-block"]:checked'))==null?void 0:$.value,a=(I=document.querySelector('input[name="icon-display"]:checked'))==null?void 0:I.value,e=(L=document.querySelector('input[name="comment-direction"]:checked'))==null?void 0:L.value,n=(S=document.querySelector('input[name="comment-platform"]:checked'))==null?void 0:S.value;document.querySelectorAll(".comment-channel").forEach(r=>{r.style.display=t});let i=document.querySelectorAll(".comment-icon");i.forEach(r=>{r.style.display=a});let s=document.querySelectorAll(".comment-message"),c="",l="3px solid var(--listener-comment-border)",p="3px solid var(--member-comment-border)";s.forEach(r=>{if(o==="0")r.style.border="none",c="none",l="none",p="none";else{c='""';let Fe=r.parentElement.parentElement.getAttribute("author-type");Fe===""?r.style.border=l:Fe==="member"&&(r.style.border=p)}}),document.querySelectorAll(".comment-before").forEach(r=>{r.style.display=o==="0"?"none":"block"});let h="row",u="row-reverse",g="start",b="end";document.querySelectorAll(".listener-contents, .member-contents").forEach(r=>{e==="flex-start"?r.style.flexDirection=h:r.style.flexDirection=u}),document.querySelectorAll(".listener-contents .comment-channel-block, .member-contents .comment-channel-block").forEach(r=>{e==="flex-start"?r.style.justifyContent=g:r.style.justifyContent=b});let y=document.querySelectorAll(".comment-before"),F=document.querySelectorAll(".comment-after");e==="flex-start"?(y.forEach(r=>{r.style.left="-3px",r.style.right="auto",r.style.transform="rotate(-20deg) skew(20deg, 20deg)"}),F.forEach(r=>{r.style.left="1px",r.style.right="auto",r.style.transform="rotate(-20deg) skew(20deg, 20deg)"})):(y.forEach(r=>{r.style.left="auto",r.style.right="-3px",r.style.transform="rotate(-70deg) skew(20deg, 20deg)"}),F.forEach(r=>{r.style.left="auto",r.style.right="1px",r.style.transform="rotate(110deg) skew(20deg, 20deg)"}));let xe=`
    :root {
      --listener-name: ${(A=document.getElementById("listener-name"))==null?void 0:A.value};
      --listener-name-bg: ${(D=document.getElementById("listener-name-bg"))==null?void 0:D.value};
      --member-name: ${(q=document.getElementById("member-name"))==null?void 0:q.value};
      --member-name-bg: ${(_=document.getElementById("member-name-bg"))==null?void 0:_.value};
      --listener-comment: ${(O=document.getElementById("listener-comment"))==null?void 0:O.value};
      --listener-comment-bg: ${(T=document.getElementById("listener-comment-bg"))==null?void 0:T.value};
      --listener-comment-border: ${(N=document.getElementById("listener-comment-border"))==null?void 0:N.value};
      --member-comment: ${(z=document.getElementById("member-comment"))==null?void 0:z.value};
      --member-comment-bg: ${(j=document.getElementById("member-comment-bg"))==null?void 0:j.value};
      --member-comment-border: ${(M=document.getElementById("member-comment-border"))==null?void 0:M.value};
      --superchat-name: ${(P=document.getElementById("superchat-name"))==null?void 0:P.value};
      --superchat-name-bg: ${(V=document.getElementById("superchat-name-bg"))==null?void 0:V.value};
      --superchat-comment: ${(H=document.getElementById("superchat-comment"))==null?void 0:H.value};
      --superchat-comment-bg: ${(R=document.getElementById("superchat-comment-bg"))==null?void 0:R.value};
      --membership-name: ${(U=document.getElementById("membership-name"))==null?void 0:U.value};
      --membership-name-bg: ${(J=document.getElementById("membership-name-bg"))==null?void 0:J.value};
      --membership-comment: ${(Y=document.getElementById("membership-comment"))==null?void 0:Y.value};
      --membership-comment-bg: ${(K=document.getElementById("membership-comment-bg"))==null?void 0:K.value};
    }
  `,we=`
    /* ---------------------------------------------------- 
      ©︎通行止め.ᐟ.ᐟ
    ---------------------------------------------------- */
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap");
    
    :root {
      --listener-name: ${(G=document.getElementById("listener-name"))==null?void 0:G.value};
      --listener-name-bg: ${(Q=document.getElementById("listener-name-bg"))==null?void 0:Q.value};
      --member-name: ${(Z=document.getElementById("member-name"))==null?void 0:Z.value};
      --member-name-bg: ${(W=document.getElementById("member-name-bg"))==null?void 0:W.value};
      --listener-comment: ${(X=document.getElementById("listener-comment"))==null?void 0:X.value};
      --listener-comment-bg: ${(ee=document.getElementById("listener-comment-bg"))==null?void 0:ee.value};
      --listener-comment-border: ${(te=document.getElementById("listener-comment-border"))==null?void 0:te.value};
      --member-comment: ${(re=document.getElementById("member-comment"))==null?void 0:re.value};
      --member-comment-bg: ${(ne=document.getElementById("member-comment-bg"))==null?void 0:ne.value};
      --member-comment-border: ${(oe=document.getElementById("member-comment-border"))==null?void 0:oe.value};
      --superchat-name: ${(ae=document.getElementById("superchat-name"))==null?void 0:ae.value};
      --superchat-name-bg: ${(me=document.getElementById("superchat-name-bg"))==null?void 0:me.value};
      --superchat-comment: ${(ie=document.getElementById("superchat-comment"))==null?void 0:ie.value};
      --superchat-comment-bg: ${(se=document.getElementById("superchat-comment-bg"))==null?void 0:se.value};
      --membership-name: ${(ce=document.getElementById("membership-name"))==null?void 0:ce.value};
      --membership-name-bg: ${(le=document.getElementById("membership-name-bg"))==null?void 0:le.value};
      --membership-comment: ${(de=document.getElementById("membership-comment"))==null?void 0:de.value};
      --membership-comment-bg: ${(pe=document.getElementById("membership-comment-bg"))==null?void 0:pe.value};
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
      animation: ${e==="flex-start"?"popInLeft":"popInRight"} 0.3s ease-out forwards;
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
      flex-direction: ${e==="flex-start"?h:u} !important;
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
      justify-content: ${e==="flex-start"?g:b} !important;
      width: 100%;
      margin: auto;
    }

    /* listener */
    yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
    yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
    yt-live-chat-text-message-renderer[author-type="member"] #author-name,
    yt-live-chat-text-message-renderer #author-name {
      display: ${t};
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
      display: ${t};
      background-color: var(--member-name-bg) !important;
      color: var(--member-name) !important;
      font-size: 12px !important;
    }

    /* icon */
    yt-img-shadow#author-photo.yt-live-chat-text-message-renderer {
      margin-right: 0px;
      display: ${a};
    }

    #chat-badges.yt-live-chat-author-chip {
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
      border: ${l};
      display: block !important;
      padding: 12px 20px;
      width: fit-content !important;
      position: relative;
      overflow: visible;
      ${e==="flex-start"?"margin-right":"margin-left"} : auto;
    }

    #message.yt-live-chat-text-message-renderer::before {
      content: ${c};
      position: absolute;
      top: 4px;
      ${e==="flex-start"?"left: -3px; right: auto;":"left: auto; right: -3px;"}
      width: 21px;
      height: 21px;
      transform: ${e==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(-70deg) skew(20deg, 20deg)"};
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    #message.yt-live-chat-text-message-renderer::after {
      content: "";
      position: absolute;
      top: 7px;
      ${e==="flex-start"?"left: 1px; right: auto;":"left: auto; right: 1px;"}
      width: 18px;
      height: 18px;
      transform: ${e==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(110deg) skew(20deg, 20deg)"};
      background-color: var(--listener-comment-bg);
      border-top-left-radius: 4px;
      border-bottom-right-radius: 20px;
      z-index: 0;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer {
      background-color: var(--member-comment-bg) !important;
      color: var(--member-comment) !important;
      border: ${p};
      ${e==="flex-start"?"margin-right":"margin-left"} : auto;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::before {
      content: ${c};
      position: absolute;
      top: 4px;
      ${e==="flex-start"?"left: -3px; right: auto;":"left: auto; right: -3px;"}
      width: 21px;
      height: 21px;
      transform: ${e==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(-70deg) skew(20deg, 20deg)"};
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::after {
      content: "";
      position: absolute;
      top: 7px;
      ${e==="flex-start"?"left: 1px; right: auto;":"left: auto; right: 1px;"}
      width: 18px;
      height: 18px;
      transform: ${e==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(110deg) skew(20deg, 20deg)"};
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

  `,Ee=`
    /* ---------------------------------------------------- 
      ©︎通行止め.ᐟ.ᐟ
    ---------------------------------------------------- */
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Noto+Sans+TC:wght@400;700&family=Noto+Sans+KR:wght@400;700&family=Noto+Sans:wght@400;700&display=swap");

    :root {
      --listener-name: ${(he=document.getElementById("listener-name"))==null?void 0:he.value};
      --listener-name-bg: ${(ue=document.getElementById("listener-name-bg"))==null?void 0:ue.value};
      --listener-comment: ${(ge=document.getElementById("listener-comment"))==null?void 0:ge.value};
      --listener-comment-bg: ${(be=document.getElementById("listener-comment-bg"))==null?void 0:be.value};
      --listener-comment-border: ${(ye=document.getElementById("listener-comment-border"))==null?void 0:ye.value};
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

    body,
    .chat-room,
    .chat-line__moderation,
    .chat-line__status,
    .chat-line__message,
    .chat-author__display-name {
      margin: 0 auto;
      background-color: transparent !important;
      font-family: "Noto Sans JP";
      font-size: 16px !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: 1.5 !important;
      letter-spacing: 0.5px !important;
    }

    .chat-line__message {
      position: relative;
      padding: 8px 16px;
      animation: ${e==="flex-start"?"popInLeft":"popInRight"} 0.3s ease-out forwards;
    }

    .chat-line__no-background {
      display: grid !important;
      grid-gap: 6px;
      width: fit-content;
      ${e==="flex-start"?"margin-right":"margin-left"} : auto;
    }

    /* ユーザー名 */
    .chat-line__username-container {
      display: flex !important;
      flex-direction: row-reverse;
      grid-gap: 8px;
      width: fit-content;
      white-space: nowrap;
      text-overflow: ellipsis;
      ${e==="flex-start"?"margin-right":"margin-left"} : auto;
    }

    .chat-line__username-container span {
      display: ${t};
    }

    .chat-line__username {
      display: ${t} !important;
      background-color: var(--listener-name-bg) !important;
      padding: 4px 12px;
      border-radius: 18px;
    }

    .chat-author__display-name {
      display: block;
      width: fit-content;
      text-wrap: wrap;
      color: var(--listener-name) !important;
      font-weight: bold;
    }

    .chat-badge {
      margin-bottom: 0 !important;
      vertical-align: bottom !important;
    }

    /* テキストボックス */
    span[data-a-target="chat-line-message-body"] {
      background-color: var(--listener-comment-bg) !important;
      color: var(--listener-comment) !important;
      border-radius: 30px;
      border: ${l};
      display: block !important;
      padding: 12px 20px;
      width: fit-content !important;
      position: relative;
      overflow: visible;
      ${e==="flex-start"?"margin-right":"margin-left"} : auto;
    }

    span[data-a-target="chat-line-message-body"]::before {
      content: ${c};
      position: absolute;
      top: 4px;
      ${e==="flex-start"?"left: -3px; right: auto;":"left: auto; right: -3px;"}
      width: 21px;
      height: 21px;
      transform: ${e==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(-70deg) skew(20deg, 20deg)"};
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    span[data-a-target="chat-line-message-body"]::after {
      content: "";
      position: absolute;
      top: 7px;
      ${e==="flex-start"?"left: 1px; right: auto;":"left: auto; right: 1px;"}
      width: 18px;
      height: 18px;
      transform: ${e==="flex-start"?"rotate(-20deg) skew(20deg, 20deg)":"rotate(110deg) skew(20deg, 20deg)"};
      background-color: var(--listener-comment-bg);
      border-top-left-radius: 4px;
      border-bottom-right-radius: 20px;
      z-index: 0;
    }

    /* emote */
    .chat-line__message--emote{
      margin: 0 !important;
    }

    /* スクロールバー削除 */
    .simplebar-scrollbar {
      display: none !important;
    }

    /* ログイン名非表示 */
    .chat-author__intl-login {
      display: none !important;
    }

    span[aria-hidden="true"] {
      display: none !important;
    }

    .chat-line__timestamp {
      display: none !important;
    }

    .stream-chat-header,
    .channel-leaderboard-container,
    .tw-interactable,
    .tw-z-default,
    .chat-input,
    .chat-line__status {
      visibility: hidden !important;
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      border: none !important;
    }

    .InjectLayout-sc-1i43xsx-0,
    .user-notice-line {
      display: none;
    }

    .community-highlight-stack__scroll-area--disable {
      display: none !important;
    }

    .community-highlight-stack__backlog-card,
    .community-highlight-stack__nav-target {
      display: none !important;
    }

    .paid-pinned-chat-message-list {
      display: none;
    }

    .paid-pinned-chat-message-content-wrapper {
      display: none !important;
    }

    .fiHaCw {
      border: none !important;
    }

    .stream-chat-header {
      display: none !important;
    }

    .pMQwv,
    .scrollable-trigger__trigger-area {
      display: none !important;
    }

    /* 返信 */
    .jIBntd {
      display: none !important;
    }

    /* 新着 */
    .xxjeD {
      display: none !important;
    }
  `;document.getElementById("color-styles").innerHTML=xe;let v=document.querySelector(".superchat-contents"),f=document.querySelector(".twitch-member"),x=document.querySelector(".member-contents"),w=document.querySelector(".membership-contents"),E=document.querySelector(".membership-comment-contents"),k=document.querySelectorAll(".custom-label-group:nth-child(3)"),C=document.querySelectorAll(".custom-color-block:nth-child(n+2)");n=="youtube"?(v.classList.remove("is-twitch"),x.classList.remove("is-twitch"),w.classList.remove("is-twitch"),E.classList.remove("is-twitch"),f.classList.add("is-twitch"),k.forEach(function(r){r.classList.remove("is-twitch")}),C.forEach(function(r){r.classList.remove("is-twitch")}),i.forEach(r=>{r.classList.remove("is-twitch")}),document.getElementById("custom-css").innerHTML=we):n=="twitch"&&(v.classList.add("is-twitch"),x.classList.add("is-twitch"),w.classList.add("is-twitch"),E.classList.add("is-twitch"),f.classList.remove("is-twitch"),k.forEach(function(r){r.classList.add("is-twitch")}),C.forEach(function(r){r.classList.add("is-twitch")}),i.forEach(r=>{r.classList.add("is-twitch")}),document.getElementById("custom-css").innerHTML=Ee)}function ve(t){let o=document.getElementById(t.id+"-code"),a=t.value.substring(1).toUpperCase();o.value=a,d(),document.querySelectorAll(".custom-color-template.active").forEach(e=>{e.classList.remove("active")})}function fe(t){let o=t.value.toUpperCase(),a=document.getElementById(t.id.replace("-code",""));/^[0-9A-Fa-f]{6}$/.test(o)?(a.value="#"+o,d()):(t.value=o,a.value="#"+o,d()),document.querySelectorAll(".custom-color-template.active").forEach(e=>{e.classList.remove("active")})}function ke(t){let o=document.getElementById(t.id.replace("-code","")),a=t.value.toUpperCase();if(!/^[0-9A-Fa-f]{6}$/.test(a)){let e=o.value;t.value=e?e.substring(1).toUpperCase():""}d()}function Ce(t,o){let a=o.toUpperCase();document.querySelectorAll('input[type="color"]').forEach(e=>{e.id!==t&&(e.value=a,document.getElementById(`${e.id}-code`).value=a.substring(1),d())})}document.querySelectorAll('input[type="color"]').forEach(t=>{t.addEventListener("change",()=>ve(t))});document.querySelectorAll('input[type="text"].custom-color-code').forEach(t=>{t.addEventListener("input",()=>fe(t)),t.addEventListener("blur",()=>ke(t))});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".custom-color-template");t.forEach(n=>{n.addEventListener("click",function(){t.forEach(m=>m.classList.remove("active")),this.classList.add("active")})}),d();const o={"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"};for(const[n,m]of Object.entries(o)){const i=document.getElementById(n);if(i){i.value=m;const s=document.getElementById(`${n}-code`);s&&(s.value=m.substring(1))}}const a={colorSetPink:{"listener-name":"#FFFFFF","listener-name-bg":"#FB83AB","member-name":"#FFFFFF","member-name-bg":"#FB83AB","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FB83AB","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FB83AB","superchat-name":"#FFFFFF","superchat-name-bg":"#FFAAC6","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FB83AB","membership-name":"#FFFFFF","membership-name-bg":"#FFAAC6","membership-comment":"#FFFFFF","membership-comment-bg":"#FB83AB"},colorSetBlue:{"listener-name":"#FFFFFF","listener-name-bg":"#8CCCE3","member-name":"#FFFFFF","member-name-bg":"#8CCCE3","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8CCCE3","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8CCCE3","superchat-name":"#FFFFFF","superchat-name-bg":"#9ED9EF","superchat-comment":"#FFFFFF","superchat-comment-bg":"#8CCCE3","membership-name":"#FFFFFF","membership-name-bg":"#9ED9EF","membership-comment":"#FFFFFF","membership-comment-bg":"#8CCCE3"},colorSetPurple:{"listener-name":"#FFFFFF","listener-name-bg":"#C891F8","member-name":"#FFFFFF","member-name-bg":"#C891F8","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#C891F8","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#C891F8","superchat-name":"#FFFFFF","superchat-name-bg":"#B77CEB","superchat-comment":"#FFFFFF","superchat-comment-bg":"#C891F8","membership-name":"#FFFFFF","membership-name-bg":"#B77CEB","membership-comment":"#FFFFFF","membership-comment-bg":"#C891F8"},colorSetOrange:{"listener-name":"#FFFFFF","listener-name-bg":"#FDA25F","member-name":"#FFFFFF","member-name-bg":"#FDA25F","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#FDA25F","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#FDA25F","superchat-name":"#FFFFFF","superchat-name-bg":"#FFBB88","superchat-comment":"#FFFFFF","superchat-comment-bg":"#FDA25F","membership-name":"#FFFFFF","membership-name-bg":"#FFBB88","membership-comment":"#FFFFFF","membership-comment-bg":"#FDA25F"},colorSetGreen:{"listener-name":"#FFFFFF","listener-name-bg":"#7AC970","member-name":"#FFFFFF","member-name-bg":"#7AC970","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#7AC970","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#7AC970","superchat-name":"#FFFFFF","superchat-name-bg":"#90D387","superchat-comment":"#FFFFFF","superchat-comment-bg":"#7AC970","membership-name":"#FFFFFF","membership-name-bg":"#90D387","membership-comment":"#FFFFFF","membership-comment-bg":"#7AC970"},colorSetBlack:{"listener-name":"#FFFFFF","listener-name-bg":"#8D8D8D","member-name":"#FFFFFF","member-name-bg":"#8D8D8D","listener-comment":"#333333","listener-comment-bg":"#FFFFFF","listener-comment-border":"#8D8D8D","member-comment":"#333333","member-comment-bg":"#FFFFFF","member-comment-border":"#8D8D8D","superchat-name":"#FFFFFF","superchat-name-bg":"#8D8D8D","superchat-comment":"#FFFFFF","superchat-comment-bg":"#717171","membership-name":"#FFFFFF","membership-name-bg":"#8D8D8D","membership-comment":"#FFFFFF","membership-comment-bg":"#717171"}};for(const[n,m]of Object.entries(a))document.getElementById(n).addEventListener("click",function(){for(const[i,s]of Object.entries(m)){const c=document.getElementById(i);if(c){c.value=s;const l=document.getElementById(`${i}-code`);l&&(l.value=s.substring(1))}}d()});document.querySelectorAll('input[type="color"]').forEach(n=>{n.addEventListener("input",function(){const m=document.getElementById(`${n.id}-code`);m&&(m.value=n.value.substring(1)),d()})})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".create-modal"),o=document.querySelector(".create-modal-open"),a=document.querySelector(".create-modal-close");let e;function n(){e=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${e}px`}function m(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,e)}function i(){t.classList.add("is-active"),n()}o.addEventListener("click",i);function s(){t.classList.remove("is-active"),m()}a.addEventListener("click",s);function c(l){l.target==t&&(t.classList.remove("is-active"),m())}addEventListener("click",c)});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".about-modal"),o=document.querySelector(".about-modal-open"),a=document.querySelector(".about-modal-close");let e;function n(){e=window.scrollY||document.documentElement.scrollTop,document.body.style.position="fixed",document.body.style.top=`-${e}px`}function m(){document.body.style.position="",document.body.style.top="",window.scrollTo(0,e)}function i(){t.classList.add("is-active"),n()}o.addEventListener("click",i);function s(){t.classList.remove("is-active"),m()}a.addEventListener("click",s)});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("copyBtn"),o=document.querySelector(".copy-tooltip");t.addEventListener("click",()=>{const a=document.getElementById("custom-css").value;navigator.clipboard.writeText(a).then(()=>{o.classList.add("show"),setTimeout(()=>{o.classList.remove("show")},2500)})})});document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".custom-color-btn");t.forEach(function(o){o.addEventListener("click",function(){var a=this.nextElementSibling;a.style.maxHeight?(a.style.maxHeight=null,a.classList.remove("open")):(a.style.maxHeight=a.scrollHeight+"px",a.classList.add("open"))})})});document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".custom-color-code");t.forEach(function(o){var a=o.value;o.addEventListener("input",function(){var e=this.value.replace(/[^a-zA-Z0-9]/g,"");e.length<=6?this.value=e:this.value=a}),o.addEventListener("blur",function(){this.value.length!==6&&(this.value=a)})})});document.querySelector(".custom-color-btn").addEventListener("click",function(){document.querySelector(".custom-detail-arrow img").classList.toggle("rotate")});
