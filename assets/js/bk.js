function updateDisplayAndColors() {
  let displayValue = document.querySelector('input[name="author-name-display"]:checked')?.value;
  let borderValue = document.querySelector('input[name="border-block"]:checked')?.value;
  let iconValue = document.querySelector('input[name="icon-display"]:checked')?.value;

  let authorChips = document.querySelectorAll('yt-live-chat-author-chip.yt-live-chat-text-message-renderer');
      authorChips.forEach(authorChip => {
        authorChip.style.display = displayValue;
      });

  let iconShadows = document.querySelectorAll('yt-img-shadow#author-photo.yt-live-chat-text-message-renderer');
      iconShadows.forEach(iconShadow => {
        iconShadow.style.display = iconValue;
      });

  let messageElements = document.querySelectorAll('yt-live-chat-text-message-renderer');
  let messageBeforeContent = "";
  let listenerBorderColor = "3px solid var(--listener-comment-border)";
  let memberBorderColor = "3px solid var(--member-comment-border)";
      messageElements.forEach(messageElement => {
        let message = messageElement.querySelector('#message');
        if (borderValue === '0') {
          message.style.border = 'none';
          messageBeforeContent = 'none';
          listenerBorderColor = "none";
          memberBorderColor = "none";
        } else {
          messageBeforeContent = '""';
          let authorType = messageElement.getAttribute('author-type');
          if (authorType === '') {
            message.style.border = `3px solid var(--listener-comment-border)`;
          } else if (authorType === 'member') {
            message.style.border = `3px solid var(--member-comment-border)`;
          }
        }
      });

  let messageElementBefores = document.querySelectorAll('.message-before');
      messageElementBefores.forEach(element => {
        element.style.display = (borderValue === '0') ? 'none' : 'block';
      });

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

  let styleContent = `
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
      display: ${displayValue};
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
      display: ${iconValue};
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
    }

    #message.yt-live-chat-text-message-renderer::before {
      content: ${messageBeforeContent};
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
      border: ${memberBorderColor};
    }

    yt-live-chat-text-message-renderer[author-type="member"] #message.yt-live-chat-text-message-renderer::before {
      content: ${messageBeforeContent};
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

  `

  document.getElementById('color-styles').innerHTML = colorStyle;
  document.getElementById('custom-css').innerHTML = styleContent;
}

function updateColorFromPicker(colorInput) {
    let textInput = document.getElementById(colorInput.id + '-code');
    textInput.value = colorInput.value.substring(1); // Remove the '#' from the color code
  }

  function updateColorFromText(textInput) {
    let colorValue = textInput.value;
    let colorInput = document.getElementById(textInput.id.replace('-code', ''));
    if (/^[0-9A-Fa-f]{6}$/.test(colorValue)) {
      colorInput.value = '#' + colorValue;
      updateDisplayAndColors(`--${colorInput.id}`, '#' + colorValue);
    }
  }

function updateAllColors(id, value) {
  document.querySelectorAll('input[type="color"]').forEach(input => {
    if (input.id !== id) {
      input.value = value;
      document.getElementById(`${input.id}-code`).innerText = value;
      updateDisplayAndColors();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateDisplayAndColors();

  // 初期値の設定
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
    'membership-name-bg': '#8CCCE3',
    'membership-comment': '#FFFFFF',
    'membership-comment-bg': '#8CCCE3'
  };

  for (const [id, color] of Object.entries(initialColors)) {
    const input = document.getElementById(id);
    input.value = color;
    document.getElementById(`${id}-code`).innerText = color;
  }

  //Template
  document.getElementById('colorSetPink').addEventListener('click', function() {
    const white = '#FFFFFF';
    const mainColor = '#FB83AB';
    const subColor = '#FFAAC6';
  
    const colorMappings = {
      'listener-name': white,
      'listener-name-bg': mainColor,
      'member-name': white,
      'member-name-bg': mainColor,
      'listener-comment': mainColor,
      'listener-comment-bg': white,
      'listener-comment-border': mainColor,
      'member-comment': mainColor,
      'member-comment-bg': white,
      'member-comment-border': mainColor,
      'superchat-name': white,
      'superchat-name-bg': mainColor,
      'superchat-comment': white,
      'superchat-comment-bg': subColor,
      'membership-name': white,
      'membership-name-bg': mainColor,
      'membership-comment': white,
      'membership-comment-bg': subColor
    };
  
    for (const [id, color] of Object.entries(colorMappings)) {
      const input = document.getElementById(id);
      if (input) {
        input.value = color;
        document.getElementById(`${id}-code`).innerText = color;
      }
    }
  
    updateDisplayAndColors();
  });
  document.getElementById('colorSetBlue').addEventListener('click', function() {
    const white = '#FFFFFF';
    const mainColor = '#8CCCE3';
    const subColor = '#9ED9EF';
  
    const colorMappings = {
      'listener-name': white,
      'listener-name-bg': mainColor,
      'member-name': white,
      'member-name-bg': mainColor,
      'listener-comment': mainColor,
      'listener-comment-bg': white,
      'listener-comment-border': mainColor,
      'member-comment': mainColor,
      'member-comment-bg': white,
      'member-comment-border': mainColor,
      'superchat-name': white,
      'superchat-name-bg': mainColor,
      'superchat-comment': white,
      'superchat-comment-bg': subColor,
      'membership-name': white,
      'membership-name-bg': mainColor,
      'membership-comment': white,
      'membership-comment-bg': subColor
    };
  
    for (const [id, color] of Object.entries(colorMappings)) {
      const input = document.getElementById(id);
      if (input) {
        input.value = color;
        document.getElementById(`${id}-code`).innerText = color;
      }
    }
  
    updateDisplayAndColors();
  });
  document.getElementById('colorSetPurple').addEventListener('click', function() {
    const white = '#FFFFFF';
    const mainColor = '#A378FF';
    const subColor = '#BFA1FF';
  
    const colorMappings = {
      'listener-name': white,
      'listener-name-bg': mainColor,
      'member-name': white,
      'member-name-bg': mainColor,
      'listener-comment': mainColor,
      'listener-comment-bg': white,
      'listener-comment-border': mainColor,
      'member-comment': mainColor,
      'member-comment-bg': white,
      'member-comment-border': mainColor,
      'superchat-name': white,
      'superchat-name-bg': mainColor,
      'superchat-comment': white,
      'superchat-comment-bg': subColor,
      'membership-name': white,
      'membership-name-bg': mainColor,
      'membership-comment': white,
      'membership-comment-bg': subColor
    };
  
    for (const [id, color] of Object.entries(colorMappings)) {
      const input = document.getElementById(id);
      if (input) {
        input.value = color;
        document.getElementById(`${id}-code`).innerText = color;
      }
    }
  
    updateDisplayAndColors();
  });
  document.getElementById('colorSetOrange').addEventListener('click', function() {
    const white = '#FFFFFF';
    const mainColor = '#FDA25F';
    const subColor = '#FFBB88';
  
    const colorMappings = {
      'listener-name': white,
      'listener-name-bg': mainColor,
      'member-name': white,
      'member-name-bg': mainColor,
      'listener-comment': mainColor,
      'listener-comment-bg': white,
      'listener-comment-border': mainColor,
      'member-comment': mainColor,
      'member-comment-bg': white,
      'member-comment-border': mainColor,
      'superchat-name': white,
      'superchat-name-bg': mainColor,
      'superchat-comment': white,
      'superchat-comment-bg': subColor,
      'membership-name': white,
      'membership-name-bg': mainColor,
      'membership-comment': white,
      'membership-comment-bg': subColor
    };
  
    for (const [id, color] of Object.entries(colorMappings)) {
      const input = document.getElementById(id);
      if (input) {
        input.value = color;
        document.getElementById(`${id}-code`).innerText = color;
      }
    }
  
    updateDisplayAndColors();
  });

  const colorInputs = document.querySelectorAll('input[type="color"]');
  colorInputs.forEach(input => {
    input.addEventListener('input', function() {
      document.getElementById(`${input.id}-code`).innerText = input.value;
      updateDisplayAndColors();
    });
  });

  // modal
  const modal = document.querySelector('.modal');
  const open = document.querySelector('.modal-open');
  const close = document.querySelector('.modal-close');
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

//テキストコピー
const copy = () => {
  const txt = document.getElementById("custom-css").value;
  navigator.clipboard.writeText(txt).then(() => {
      const tooltip = document.querySelector('.copy-tooltip');
      tooltip.classList.add('show');

      setTimeout(() => {
          tooltip.classList.remove('show');
      }, 2500);
  });
};

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

