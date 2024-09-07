window.updateDisplayAndColors = updateDisplayAndColors;
window.updateColorFromPicker = updateColorFromPicker;
window.updateColorFromText = updateColorFromText;
window.updateAllColors = updateAllColors;

function updateDisplayAndColors() {
  let displayValue = document.querySelector('input[name="author-name-display"]:checked')?.value;
  let borderValue = document.querySelector('input[name="border-block"]:checked')?.value;
  let iconValue = document.querySelector('input[name="icon-display"]:checked')?.value;
  let directionValue = document.querySelector('input[name="comment-direction"]:checked')?.value;
  let platformValue = document.querySelector('input[name="comment-platform"]:checked')?.value;

  let authorChips = document.querySelectorAll('.comment-channel');
      authorChips.forEach(authorChip => {
        authorChip.style.display = displayValue;
      });

  let iconShadows = document.querySelectorAll('.comment-icon');
      iconShadows.forEach(iconShadow => {
        iconShadow.style.display = iconValue;
      });

  let messageElements = document.querySelectorAll('.comment-message');
  let messageBeforeContent = "";
  let listenerBorderColor = "3px solid var(--listener-comment-border)";
  let memberBorderColor = "3px solid var(--member-comment-border)";
      
  messageElements.forEach(messageElement => {
    if (borderValue === '0') {
      messageElement.style.border = 'none';
      messageBeforeContent = 'none';
      listenerBorderColor = "none";
      memberBorderColor = "none";
    } else {
      messageBeforeContent = '""';
      let authorType = messageElement.parentElement.parentElement.getAttribute('author-type');
          
      if (authorType === '') {
        messageElement.style.border = listenerBorderColor;
      } else if (authorType === 'member') {
        messageElement.style.border = memberBorderColor;
      }
    }
  });

  let messageElementBefores = document.querySelectorAll('.comment-before');
      messageElementBefores.forEach(element => {
        element.style.display = (borderValue === '0') ? 'none' : 'block';
      });

  let rowDirection = 'row'
  let reverseDirection = 'row-reverse'
  let startDirection = 'start'
  let endDirection = 'end'

  let commentContainer = document.querySelectorAll('.listener-contents, .member-contents');
      commentContainer.forEach(element => {
        if (directionValue === 'flex-start') {
          element.style.flexDirection = rowDirection; 
        } else {
          element.style.flexDirection = reverseDirection; 
        }
      });

  let channelContainer = document.querySelectorAll('.listener-contents .comment-channel-block, .member-contents .comment-channel-block');
      channelContainer.forEach(element => {
        if (directionValue === 'flex-start') {
          element.style.justifyContent = startDirection;
        } else {
          element.style.justifyContent = endDirection; 
        }
      });
  
  let commentBefores = document.querySelectorAll('.comment-before');
  let commentAfters = document.querySelectorAll('.comment-after');
    
      if (directionValue === 'flex-start') {
        commentBefores.forEach(element => {
          element.style.left = '-3px';
          element.style.right = 'auto';
          element.style.transform = 'rotate(-20deg) skew(20deg, 20deg)';
        });
        commentAfters.forEach(element => {
          element.style.left = '1px';
          element.style.right = 'auto';
          element.style.transform = 'rotate(-20deg) skew(20deg, 20deg)';
        });
      } else {
        commentBefores.forEach(element => {
          element.style.left = 'auto';
          element.style.right = '-3px';
          element.style.transform = 'rotate(-70deg) skew(20deg, 20deg)';
        });
        commentAfters.forEach(element => {
          element.style.left = 'auto';
          element.style.right = '1px';
          element.style.transform = 'rotate(110deg) skew(20deg, 20deg)';
        });
      }

  let colorStyle = `
    :root {
      --listener-name: ${document.getElementById('listener-name')?.value};
      --listener-name-bg: ${document.getElementById('listener-name-bg')?.value};
      --member-name: ${document.getElementById('member-name')?.value};
      --member-name-bg: ${document.getElementById('member-name-bg')?.value};
      --listener-comment: ${document.getElementById('listener-comment')?.value};
      --listener-comment-bg: ${document.getElementById('listener-comment-bg')?.value};
      --listener-comment-border: ${document.getElementById('listener-comment-border')?.value};
      --member-comment: ${document.getElementById('member-comment')?.value};
      --member-comment-bg: ${document.getElementById('member-comment-bg')?.value};
      --member-comment-border: ${document.getElementById('member-comment-border')?.value};
      --superchat-name: ${document.getElementById('superchat-name')?.value};
      --superchat-name-bg: ${document.getElementById('superchat-name-bg')?.value};
      --superchat-comment: ${document.getElementById('superchat-comment')?.value};
      --superchat-comment-bg: ${document.getElementById('superchat-comment-bg')?.value};
      --membership-name: ${document.getElementById('membership-name')?.value};
      --membership-name-bg: ${document.getElementById('membership-name-bg')?.value};
      --membership-comment: ${document.getElementById('membership-comment')?.value};
      --membership-comment-bg: ${document.getElementById('membership-comment-bg')?.value};
    }
  `;

  let youtubeStyle = `
    /* ---------------------------------------------------- 
      ©︎通行止め.ᐟ.ᐟ
    ---------------------------------------------------- */
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap");
    
    :root {
      --listener-name: ${document.getElementById('listener-name')?.value};
      --listener-name-bg: ${document.getElementById('listener-name-bg')?.value};
      --member-name: ${document.getElementById('member-name')?.value};
      --member-name-bg: ${document.getElementById('member-name-bg')?.value};
      --listener-comment: ${document.getElementById('listener-comment')?.value};
      --listener-comment-bg: ${document.getElementById('listener-comment-bg')?.value};
      --listener-comment-border: ${document.getElementById('listener-comment-border')?.value};
      --member-comment: ${document.getElementById('member-comment')?.value};
      --member-comment-bg: ${document.getElementById('member-comment-bg')?.value};
      --member-comment-border: ${document.getElementById('member-comment-border')?.value};
      --superchat-name: ${document.getElementById('superchat-name')?.value};
      --superchat-name-bg: ${document.getElementById('superchat-name-bg')?.value};
      --superchat-comment: ${document.getElementById('superchat-comment')?.value};
      --superchat-comment-bg: ${document.getElementById('superchat-comment-bg')?.value};
      --membership-name: ${document.getElementById('membership-name')?.value};
      --membership-name-bg: ${document.getElementById('membership-name-bg')?.value};
      --membership-comment: ${document.getElementById('membership-comment')?.value};
      --membership-comment-bg: ${document.getElementById('membership-comment-bg')?.value};
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
      animation: ${directionValue === 'flex-start' ? 'popInLeft' : 'popInRight'} 0.3s ease-out forwards;
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
      flex-direction: ${directionValue === 'flex-start' ? rowDirection : reverseDirection} !important;
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
      justify-content: ${directionValue === 'flex-start' ? startDirection : endDirection} !important;
      width: 100%;
      margin: auto;
    }

    /* listener */
    yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
    yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
    yt-live-chat-text-message-renderer[author-type="member"] #author-name,
    yt-live-chat-text-message-renderer #author-name {
      display: ${displayValue};
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
      display: ${displayValue};
      background-color: var(--member-name-bg) !important;
      color: var(--member-name) !important;
      font-size: 12px !important;
    }

    /* icon */
    yt-img-shadow#author-photo.yt-live-chat-text-message-renderer {
      margin-right: 0px;
      display: ${iconValue};
    }

    #chat-badges.yt-live-chat-author-chip {
      display: ${displayValue};
    }

    /* ---------------------------------------------------- 
      message 
    ----------------------------------------------------*/
    /* message */
    #message.yt-live-chat-text-message-renderer {
      background-color: var(--listener-comment-bg) !important;
      color: var(--listener-comment) !important;
      border-radius: 30px;
      border: ${listenerBorderColor};
      display: block !important;
      padding: 12px 20px;
      width: fit-content !important;
      position: relative;
      overflow: visible;
      ${directionValue === 'flex-start' ? 'margin-right' : 'margin-left'} : auto;
    }

    #message.yt-live-chat-text-message-renderer::before {
      content: ${messageBeforeContent};
      position: absolute;
      top: 4px;
      ${directionValue === 'flex-start' ? 'left: -3px; right: auto;' : 'left: auto; right: -3px;'}
      width: 21px;
      height: 21px;
      transform: ${directionValue === 'flex-start' ? 'rotate(-20deg) skew(20deg, 20deg)' : 'rotate(-70deg) skew(20deg, 20deg)'};
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    #message.yt-live-chat-text-message-renderer::after {
      content: "";
      position: absolute;
      top: 7px;
      ${directionValue === 'flex-start' ? 'left: 1px; right: auto;' : 'left: auto; right: 1px;'}
      width: 18px;
      height: 18px;
      transform: ${directionValue === 'flex-start' ? 'rotate(-20deg) skew(20deg, 20deg)' : 'rotate(110deg) skew(20deg, 20deg)'};
      background-color: var(--listener-comment-bg);
      border-top-left-radius: 4px;
      border-bottom-right-radius: 20px;
      z-index: 0;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer {
      background-color: var(--member-comment-bg) !important;
      color: var(--member-comment) !important;
      border: ${memberBorderColor};
      ${directionValue === 'flex-start' ? 'margin-right' : 'margin-left'} : auto;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::before {
      content: ${messageBeforeContent};
      position: absolute;
      top: 4px;
      ${directionValue === 'flex-start' ? 'left: -3px; right: auto;' : 'left: auto; right: -3px;'}
      width: 21px;
      height: 21px;
      transform: ${directionValue === 'flex-start' ? 'rotate(-20deg) skew(20deg, 20deg)' : 'rotate(-70deg) skew(20deg, 20deg)'};
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::after {
      content: "";
      position: absolute;
      top: 7px;
      ${directionValue === 'flex-start' ? 'left: 1px; right: auto;' : 'left: auto; right: 1px;'}
      width: 18px;
      height: 18px;
      transform: ${directionValue === 'flex-start' ? 'rotate(-20deg) skew(20deg, 20deg)' : 'rotate(110deg) skew(20deg, 20deg)'};
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

  `

  let twichStyle = `
    /* ---------------------------------------------------- 
      ©︎通行止め.ᐟ.ᐟ
    ---------------------------------------------------- */
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Noto+Sans+TC:wght@400;700&family=Noto+Sans+KR:wght@400;700&family=Noto+Sans:wght@400;700&display=swap");

    :root {
      --listener-name: ${document.getElementById('listener-name')?.value};
      --listener-name-bg: ${document.getElementById('listener-name-bg')?.value};
      --listener-comment: ${document.getElementById('listener-comment')?.value};
      --listener-comment-bg: ${document.getElementById('listener-comment-bg')?.value};
      --listener-comment-border: ${document.getElementById('listener-comment-border')?.value};
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
      animation: ${directionValue === 'flex-start' ? 'popInLeft' : 'popInRight'} 0.3s ease-out forwards;
    }

    .chat-line__no-background {
      display: grid !important;
      grid-gap: 6px;
      width: fit-content;
      ${directionValue === 'flex-start' ? 'margin-right' : 'margin-left'} : auto;
    }

    /* ユーザー名 */
    .chat-line__username-container {
      display: flex !important;
      flex-direction: row-reverse;
      grid-gap: 8px;
      width: fit-content;
      white-space: nowrap;
      text-overflow: ellipsis;
      ${directionValue === 'flex-start' ? 'margin-right' : 'margin-left'} : auto;
    }

    .chat-line__username-container span {
      display: ${displayValue};
    }

    .chat-line__username {
      display: ${displayValue} !important;
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
      border: ${listenerBorderColor};
      display: block !important;
      padding: 12px 20px;
      width: fit-content !important;
      position: relative;
      overflow: visible;
      ${directionValue === 'flex-start' ? 'margin-right' : 'margin-left'} : auto;
    }

    span[data-a-target="chat-line-message-body"]::before {
      content: ${messageBeforeContent};
      position: absolute;
      top: 4px;
      ${directionValue === 'flex-start' ? 'left: -3px; right: auto;' : 'left: auto; right: -3px;'}
      width: 21px;
      height: 21px;
      transform: ${directionValue === 'flex-start' ? 'rotate(-20deg) skew(20deg, 20deg)' : 'rotate(-70deg) skew(20deg, 20deg)'};
      background-color: var(--listener-comment-border);
      border-top-left-radius: 7px;
      border-bottom-right-radius: 6px;
      z-index: -1;
    }

    span[data-a-target="chat-line-message-body"]::after {
      content: "";
      position: absolute;
      top: 7px;
      ${directionValue === 'flex-start' ? 'left: 1px; right: auto;' : 'left: auto; right: 1px;'}
      width: 18px;
      height: 18px;
      transform: ${directionValue === 'flex-start' ? 'rotate(-20deg) skew(20deg, 20deg)' : 'rotate(110deg) skew(20deg, 20deg)'};
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
  `

  document.getElementById('color-styles').innerHTML = colorStyle;

  let superchat = document.querySelector(".superchat-contents");
  let twitchMember = document.querySelector(".twitch-member");
  let member = document.querySelector(".member-contents");
  let membership = document.querySelector(".membership-contents");
  let membershipComment = document.querySelector(".membership-comment-contents");
  let profileImages = document.querySelectorAll(".custom-label-group:nth-child(3)");
  let colorBlocks = document.querySelectorAll('.custom-color-block:nth-child(n+2)');
  
  if(platformValue == 'youtube') {
    superchat.classList.remove('is-twitch');
    member.classList.remove('is-twitch');
    membership.classList.remove('is-twitch');
    membershipComment.classList.remove('is-twitch');
    twitchMember.classList.add('is-twitch');
    
    profileImages.forEach(function(profileImage) {
      profileImage.classList.remove('is-twitch');
    });
    colorBlocks.forEach(function(colorBlock) {
      colorBlock.classList.remove('is-twitch');
    });
    iconShadows.forEach(iconShadow => {
      iconShadow.classList.remove('is-twitch');
    });
  
    document.getElementById('custom-css').innerHTML = youtubeStyle;
  } else if(platformValue == 'twitch') {
    superchat.classList.add('is-twitch');
    member.classList.add('is-twitch');
    membership.classList.add('is-twitch');
    membershipComment.classList.add('is-twitch');
    twitchMember.classList.remove('is-twitch');
    
  
    profileImages.forEach(function(profileImage) {
      profileImage.classList.add('is-twitch');
    });
    colorBlocks.forEach(function(colorBlock) {
      colorBlock.classList.add('is-twitch');
    });
    iconShadows.forEach(iconShadow => {
      iconShadow.classList.add('is-twitch');
    });
  
    document.getElementById('custom-css').innerHTML = twichStyle;
  }
  
}

function updateColorFromPicker(colorInput) {
  let textInput = document.getElementById(colorInput.id + '-code');
  let colorValue = colorInput.value.substring(1).toUpperCase();
  textInput.value = colorValue;
  updateDisplayAndColors();

  document.querySelectorAll('.custom-color-template.active').forEach(button => {
    button.classList.remove('active');
  });
}

function updateColorFromText(textInput) {
  let colorValue = textInput.value.toUpperCase();
  let colorInput = document.getElementById(textInput.id.replace('-code', ''));

  if (/^[0-9A-Fa-f]{6}$/.test(colorValue)) {
    colorInput.value = '#' + colorValue;
    updateDisplayAndColors();
  } else {
    textInput.value = colorValue;
    colorInput.value = '#' + colorValue;
    updateDisplayAndColors();
  }

  document.querySelectorAll('.custom-color-template.active').forEach(button => {
    button.classList.remove('active');
  });
}

function handleTextBlur(textInput) {
  let colorInput = document.getElementById(textInput.id.replace('-code', ''));
  let colorValue = textInput.value.toUpperCase();

  if (!/^[0-9A-Fa-f]{6}$/.test(colorValue)) {
    let computedColorValue = colorInput.value;
    textInput.value = computedColorValue ? computedColorValue.substring(1).toUpperCase() : '';
  }
  updateDisplayAndColors();
}

function updateAllColors(id, value) {
  let upperValue = value.toUpperCase();
  document.querySelectorAll('input[type="color"]').forEach(input => {
    if (input.id !== id) {
      input.value = upperValue;
      document.getElementById(`${input.id}-code`).value = upperValue.substring(1);
      updateDisplayAndColors();
    }
  });
}

document.querySelectorAll('input[type="color"]').forEach(input => {
  input.addEventListener('change', () => updateColorFromPicker(input));
});

document.querySelectorAll('input[type="text"].custom-color-code').forEach(input => {
  input.addEventListener('input', () => updateColorFromText(input));
  input.addEventListener('blur', () => handleTextBlur(input));
});

//テンプレート
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.custom-color-template');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  updateDisplayAndColors();

  const initialColors = {
    'listener-name': '#FFFFFF',
    'listener-name-bg': '#8CCCE3',
    'member-name': '#FFFFFF',
    'member-name-bg': '#8CCCE3',
    'listener-comment': '#333333',
    'listener-comment-bg': '#FFFFFF',
    'listener-comment-border': '#8CCCE3',
    'member-comment': '#333333',
    'member-comment-bg': '#FFFFFF',
    'member-comment-border': '#8CCCE3',
    'superchat-name': '#FFFFFF',
    'superchat-name-bg': '#9ED9EF',
    'superchat-comment': '#FFFFFF',
    'superchat-comment-bg': '#8CCCE3',
    'membership-name': '#FFFFFF',
    'membership-name-bg': '#9ED9EF',
    'membership-comment': '#FFFFFF',
    'membership-comment-bg': '#8CCCE3'
  };

  for (const [id, color] of Object.entries(initialColors)) {
    const input = document.getElementById(id);
    if (input) {
      input.value = color;
      const codeElement = document.getElementById(`${id}-code`);
      if (codeElement) {
        codeElement.value = color.substring(1);
      }
    }
  }

  const colorSets = {
    'colorSetPink': {
      'listener-name': '#FFFFFF',
      'listener-name-bg': '#FB83AB',
      'member-name': '#FFFFFF',
      'member-name-bg': '#FB83AB',
      'listener-comment': '#333333',
      'listener-comment-bg': '#FFFFFF',
      'listener-comment-border': '#FB83AB',
      'member-comment': '#333333',
      'member-comment-bg': '#FFFFFF',
      'member-comment-border': '#FB83AB',
      'superchat-name': '#FFFFFF',
      'superchat-name-bg': '#FFAAC6',
      'superchat-comment': '#FFFFFF',
      'superchat-comment-bg': '#FB83AB',
      'membership-name': '#FFFFFF',
      'membership-name-bg': '#FFAAC6',
      'membership-comment': '#FFFFFF',
      'membership-comment-bg': '#FB83AB'
    },
    'colorSetBlue': {
      'listener-name': '#FFFFFF',
      'listener-name-bg': '#8CCCE3',
      'member-name': '#FFFFFF',
      'member-name-bg': '#8CCCE3',
      'listener-comment': '#333333',
      'listener-comment-bg': '#FFFFFF',
      'listener-comment-border': '#8CCCE3',
      'member-comment': '#333333',
      'member-comment-bg': '#FFFFFF',
      'member-comment-border': '#8CCCE3',
      'superchat-name': '#FFFFFF',
      'superchat-name-bg': '#9ED9EF',
      'superchat-comment': '#FFFFFF',
      'superchat-comment-bg': '#8CCCE3',
      'membership-name': '#FFFFFF',
      'membership-name-bg': '#9ED9EF',
      'membership-comment': '#FFFFFF',
      'membership-comment-bg': '#8CCCE3'
    },
    'colorSetPurple': {
      'listener-name': '#FFFFFF',
      'listener-name-bg': '#C891F8',
      'member-name': '#FFFFFF',
      'member-name-bg': '#C891F8',
      'listener-comment': '#333333',
      'listener-comment-bg': '#FFFFFF',
      'listener-comment-border': '#C891F8',
      'member-comment': '#333333',
      'member-comment-bg': '#FFFFFF',
      'member-comment-border': '#C891F8',
      'superchat-name': '#FFFFFF',
      'superchat-name-bg': '#B77CEB',
      'superchat-comment': '#FFFFFF',
      'superchat-comment-bg': '#C891F8',
      'membership-name': '#FFFFFF',
      'membership-name-bg': '#B77CEB',
      'membership-comment': '#FFFFFF',
      'membership-comment-bg': '#C891F8'
    },
    'colorSetOrange': {
      'listener-name': '#FFFFFF',
      'listener-name-bg': '#FDA25F',
      'member-name': '#FFFFFF',
      'member-name-bg': '#FDA25F',
      'listener-comment': '#333333',
      'listener-comment-bg': '#FFFFFF',
      'listener-comment-border': '#FDA25F',
      'member-comment': '#333333',
      'member-comment-bg': '#FFFFFF',
      'member-comment-border': '#FDA25F',
      'superchat-name': '#FFFFFF',
      'superchat-name-bg': '#FFBB88',
      'superchat-comment': '#FFFFFF',
      'superchat-comment-bg': '#FDA25F',
      'membership-name': '#FFFFFF',
      'membership-name-bg': '#FFBB88',
      'membership-comment': '#FFFFFF',
      'membership-comment-bg': '#FDA25F'
    },
    'colorSetGreen': {
      'listener-name': '#FFFFFF',
      'listener-name-bg': '#7AC970',
      'member-name': '#FFFFFF',
      'member-name-bg': '#7AC970',
      'listener-comment': '#333333',
      'listener-comment-bg': '#FFFFFF',
      'listener-comment-border': '#7AC970',
      'member-comment': '#333333',
      'member-comment-bg': '#FFFFFF',
      'member-comment-border': '#7AC970',
      'superchat-name': '#FFFFFF',
      'superchat-name-bg': '#90D387',
      'superchat-comment': '#FFFFFF',
      'superchat-comment-bg': '#7AC970',
      'membership-name': '#FFFFFF',
      'membership-name-bg': '#90D387',
      'membership-comment': '#FFFFFF',
      'membership-comment-bg': '#7AC970'
    },
    'colorSetBlack': {
      'listener-name': '#FFFFFF',
      'listener-name-bg': '#8D8D8D',
      'member-name': '#FFFFFF',
      'member-name-bg': '#8D8D8D',
      'listener-comment': '#333333',
      'listener-comment-bg': '#FFFFFF',
      'listener-comment-border': '#8D8D8D',
      'member-comment': '#333333',
      'member-comment-bg': '#FFFFFF',
      'member-comment-border': '#8D8D8D',
      'superchat-name': '#FFFFFF',
      'superchat-name-bg': '#8D8D8D',
      'superchat-comment': '#FFFFFF',
      'superchat-comment-bg': '#717171',
      'membership-name': '#FFFFFF',
      'membership-name-bg': '#8D8D8D',
      'membership-comment': '#FFFFFF',
      'membership-comment-bg': '#717171'
    }
  };

  for (const [colorSetId, colors] of Object.entries(colorSets)) {
    document.getElementById(colorSetId).addEventListener('click', function() {
      for (const [id, color] of Object.entries(colors)) {
        const input = document.getElementById(id);
        if (input) {
          input.value = color;
          const codeElement = document.getElementById(`${id}-code`);
          if (codeElement) {
            codeElement.value = color.substring(1);
          }
        }
      }
      updateDisplayAndColors();
    });
  }

  const colorInputs = document.querySelectorAll('input[type="color"]');
  colorInputs.forEach(input => {
    input.addEventListener('input', function() {
      const codeElement = document.getElementById(`${input.id}-code`);
      if (codeElement) {
        codeElement.value = input.value.substring(1);
      }
      updateDisplayAndColors();
    });
  });
});

//Createモーダル
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.create-modal');
  const open = document.querySelector('.create-modal-open');
  const close = document.querySelector('.create-modal-close');
  let scrollTop;

  function fixedOn() {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
  }

  function fixedOff() {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollTop);
  }

  function modalOpen() {
    modal.classList.add('is-active');
    fixedOn();
  }
  open.addEventListener('click', modalOpen);

  function modalClose() {
    modal.classList.remove('is-active');
    fixedOff();
  }
  close.addEventListener('click', modalClose);

  function modalOut(e) {
    if (e.target == modal) {
      modal.classList.remove('is-active');
      fixedOff();
    }
  }
  addEventListener('click', modalOut);
});

//Aboutモーダル
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.about-modal');
  const open = document.querySelector('.about-modal-open');
  const close = document.querySelector('.about-modal-close');
  let scrollTop;

  function fixedOn() {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
  }

  function fixedOff() {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollTop);
  }

  function modalOpen() {
    modal.classList.add('is-active');
    fixedOn();
  }
  open.addEventListener('click', modalOpen);

  function modalClose() {
    modal.classList.remove('is-active');
    fixedOff();
  }
  close.addEventListener('click', modalClose);
});

//コピー
document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyBtn');
  const tooltip = document.querySelector('.copy-tooltip');

  copyButton.addEventListener('click', () => {
    const txt = document.getElementById('custom-css').value;
    navigator.clipboard.writeText(txt).then(() => {
      tooltip.classList.add('show');

      setTimeout(() => {
        tooltip.classList.remove('show');
      }, 2500);
    });
  });
});

//アコーディオン
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.custom-color-btn');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var accordionContent = this.nextElementSibling;

      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove('open');
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.classList.add('open');
      }
    });
  });
});

//バリデーション
document.addEventListener('DOMContentLoaded', function() {
  var textInputs = document.querySelectorAll('.custom-color-code');

  textInputs.forEach(function(input) {
    var originalValue = input.value;

    input.addEventListener('input', function() {
      var newValue = this.value.replace(/[^a-zA-Z0-9]/g, '');

      if (newValue.length <= 6) {
        this.value = newValue;
      } else {
        this.value = originalValue;
      }
    });

    input.addEventListener('blur', function() {
      if (this.value.length !== 6) {
        this.value = originalValue;
      }
    });
  });
});

//rotate
document.querySelector('.custom-color-btn').addEventListener('click', function() {
  let arrowImage = document.querySelector('.custom-detail-arrow img');
  arrowImage.classList.toggle('rotate');
});


