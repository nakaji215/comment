function updateDisplayAndColors() {
  let displayValue = document.querySelector('input[name="author-name-display"]:checked')?.value;
  let borderValue = document.querySelector('input[name="border-block"]:checked')?.value;
  let iconValue = document.querySelector('input[name="icon-display"]:checked')?.value;

  let iconShadows = document.querySelectorAll('yt-img-shadow#author-photo.yt-live-chat-text-message-renderer');
  iconShadows.forEach(iconShadow => {
    iconShadow.style.display = iconValue;
  });

  let authorChips = document.querySelectorAll('yt-live-chat-author-chip.yt-live-chat-text-message-renderer');
  authorChips.forEach(authorChip => {
    authorChip.style.display = displayValue;
  });

  let messageElements = document.querySelectorAll('yt-live-chat-text-message-renderer');
  messageElements.forEach(messageElement => {
  let message = messageElement.querySelector('#message');
  if (borderValue === '0') {
    message.style.border = 'none';
  } else {
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

  // Update CSS variables
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
      font-size: 12px !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: 1.5 !important;
      letter-spacing: 0.5px !important;
    }

    yt-live-chat-text-message-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer,
    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-sticker-renderer,
    yt-live-chat-paid-message-renderer {
      padding: 12px 24px !important;
    }

    /* ---------------------------------------------------- 
      content
    ----------------------------------------------------*/
    #content.yt-live-chat-text-message-renderer {
      position: relative;
      overflow: visible !important;
    }

    /* ---------------------------------------------------- 
      channel
    ----------------------------------------------------*/
    yt-live-chat-author-chip.yt-live-chat-text-message-renderer {
      position: absolute;
      top: -36px;
    }

    /* listener */
    yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
    yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
    yt-live-chat-text-message-renderer #author-name {
      display: ${displayValue};
      margin: 0;
      padding: 4px 12px;
      border-radius: 18px !important;
      width: fit-content;
      background-color: var(--listener-name-bg) !important;
      color: var(--listener-name) !important;
    }

    /* member */
    yt-live-chat-text-message-renderer[author-type="member"] #author-name {
      background-color: var(--member-name-bg) !important;
      color: var(--member-name) !important;
    }

    /* ---------------------------------------------------- 
      message 
    ----------------------------------------------------*/

    /* message */
    #message.yt-live-chat-text-message-renderer {
      background-color: var(--listener-name) !important;
      color: var(--listener-name-bg) !important;
      border-radius: 30px;
      border: ${messageElements}px solid var(--listener-name-bg) !important;
      display: block !important;
      padding: 12px 20px;
      width: fit-content !important;
      position: relative;
      overflow: visible;
    }

    #message.yt-live-chat-text-message-renderer::before {
      content: ${messageElementBefores};
      position: absolute;
      top: 4px;
      left: -3px;
      width: 21px;
      height: 21px;
      transform: rotate(-20deg) skew(20deg, 20deg);
      background-color: var(--listener-name-bg);
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
      background-color: var(--listener-name);
      border-top-left-radius: 4px;
      border-bottom-right-radius: 20px;
      z-index: 0;
    }

    /* ---------------------------------------------------- 
      icon 
    ----------------------------------------------------*/
    yt-img-shadow#author-photo.yt-live-chat-text-message-renderer {
      display: ${iconShadows} !important;
    }

    yt-img-shadow#author-photo.yt-live-chat-text-message-renderer img {
      width: 32px;
      height: 32px;
      border-radius: 32px;
      display: block;
      margin-right: 8px;
    }
  `;

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

  document.getElementById('custom-css').innerHTML = styleContent;
  document.getElementById('color-styles').innerHTML = colorStyle;
}

function updateAllColors(id, value) {
  document.querySelectorAll('input[type="color"]').forEach(input => {
    if (input.id !== id) {
      input.value = value;
      updateDisplayAndColors('--' + input.id, value);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateDisplayAndColors();

  // 初期値の設定
  document.getElementById('listener-name').value = '#FFFFFF';
  document.getElementById('listener-name-bg').value = '#8CCCE3';
  document.getElementById('member-name').value = '#FFFFFF';
  document.getElementById('member-name-bg').value = '#8CCCE3';
  document.getElementById('listener-comment').value = '#333333';
  document.getElementById('listener-comment-bg').value = '#FFFFFF';
  document.getElementById('listener-comment-border').value = '#8CCCE3';
  document.getElementById('member-comment').value = '#333333';
  document.getElementById('member-comment-bg').value = '#FFFFFF';
  document.getElementById('member-comment-border').value = '#8CCCE3';
  document.getElementById('superchat-name').value = '#FFFFFF';
  document.getElementById('superchat-name-bg').value = '#9ED9EF';
  document.getElementById('superchat-comment').value = '#FFFFFF';
  document.getElementById('superchat-comment-bg').value = '#8CCCE3';
  document.getElementById('membership-name').value = '#FFFFFF';
  document.getElementById('membership-name-bg').value = '#8CCCE3';
  document.getElementById('membership-comment').value = '#FFFFFF';
  document.getElementById('membership-comment-bg').value = '#8CCCE3';
});

// color code
document.addEventListener("DOMContentLoaded", function() {
  const colorInputs = document.querySelectorAll('input[type="color"]');
  
  colorInputs.forEach(input => {
      input.addEventListener("input", function() {
          updateDisplayAndColors(`--${input.id}`, input.value);
          document.getElementById(`${input.id}-code`).innerText = input.value;
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
    fixedOff()
  }
  close.addEventListener('click', modalClose);
  
  function modalOut(e) {
    if (e.target == modal) {
      modal.classList.remove('is-active');
      fixedOff()
    }
  }
  addEventListener('click', modalOut);

});

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

function updateSpecificColors() {
  updateDisplayAndColors();
  
  let redcolorStyle = `
    :root {
      --listener-name: #FB83AB;
      --listener-name-bg: #FB83AB;
      --listener-comment: #333333;
      --listener-comment-bg: #FB83AB;
      --listener-comment-border: #FB83AB;
      --member-name: #FB83AB;
      --member-name-bg: #9ED9EF;
      --member-comment: #333333;
      --member-comment-bg: #FB83AB;
      --member-comment-border: #FB83AB;
      --superchat-name: #FFFFFF;
      --superchat-name-bg: #9ED9EF;
      --superchat-comment: #FFFFFF;
      --superchat-comment-bg: #FB83AB;
      --membership-name: #FFFFFF;
      --membership-name-bg: #9ED9EF;
      --membership-comment: #FFFFFF;
      --membership-comment-bg: #FB83AB;
    }
  `;

  let colorStylesElement = document.getElementById('color-styles');
  if (colorStylesElement) {
    colorStylesElement.innerHTML = redcolorStyle;
  }
}

