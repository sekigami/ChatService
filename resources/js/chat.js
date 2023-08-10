const HSThemeAppearance = {
    init() {
        const defaultTheme = 'default';
        let theme = localStorage.getItem('hs_theme') || defaultTheme;

        if (document.querySelector('html').classList.contains('dark')) return;
        this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
        const $resetStyles = document.createElement('style');
        $resetStyles.innerText = `*{transition: unset !important;}`;
        $resetStyles.setAttribute('data-hs-appearance-onload-styles', '');
        document.head.appendChild($resetStyles);
        return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
        const $resetStylesEl = this._resetStylesOnLoad();

        if (saveInStore) {
            localStorage.setItem('hs_theme', theme);
        }

        if (theme === 'auto') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
        }

        document.querySelector('html').classList.remove('dark');
        document.querySelector('html').classList.remove('default');
        document.querySelector('html').classList.remove('auto');

        document.querySelector('html').classList.add(this.getOriginalAppearance());

        setTimeout(() => {
            $resetStylesEl.remove();
        });

        if (dispatchEvent) {
            window.dispatchEvent(new CustomEvent('on-hs-appearance-change', { detail: theme }));
        }
    },
    getAppearance() {
        let theme = this.getOriginalAppearance();
        if (theme === 'auto') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
        }
        return theme;
    },
    getOriginalAppearance() {
        const defaultTheme = 'default';
        return localStorage.getItem('hs_theme') || defaultTheme;
    },
};
HSThemeAppearance.init();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
        HSThemeAppearance.setAppearance('auto', false);
    }
});

window.addEventListener('load', () => {
    const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]');
    const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]');

    $clickableThemes.forEach(($item) => {
        $item.addEventListener('click', () =>
            HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item)
        );
    });

    $switchableThemes.forEach(($item) => {
        $item.addEventListener('change', (e) => {
            HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default');
        });

        $item.checked = HSThemeAppearance.getAppearance() === 'dark';
    });

    window.addEventListener('on-hs-appearance-change', (e) => {
        $switchableThemes.forEach(($item) => {
            $item.checked = e.detail === 'dark';
        });
    });
});

// ダミーデータの配列を定義
const chatData = [
    {
        id: 1,
        sender: 'YOU',
        message: 'こんにちは、元気ですか？',
        timestamp: '10:30 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 2,
        sender: '奥村',
        message: '元気です！聞いてくれてありがとう。',
        timestamp: '10:32 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 3,
        sender: 'YOU',
        message: '今日はどうでしたか？',
        timestamp: '10:35 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 4,
        sender: '奥村',
        message: '良かったです！生産的な一日でした。',
        timestamp: '10:40 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 5,
        sender: '奥村',
        message: 'YOUはどうでしたか？',
        timestamp: '10:42 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 6,
        sender: 'YOU',
        message: '私の日も良かったです。重要なタスクを終えました。',
        timestamp: '10:45 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 7,
        sender: 'YOU',
        message: '今週末、遊びに行きますか？',
        timestamp: '10:48 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 8,
        sender: '奥村',
        message: 'もちろんです！素晴らしいアイデアですね。',
        timestamp: '10:50 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 9,
        sender: '奥村',
        message: 'では、土曜日にしましょう。',
        timestamp: '10:52 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 10,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 11,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 12,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 13,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 14,
        sender: 'YOU',
        message: 'こんにちは、元気ですか？',
        timestamp: '10:30 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 15,
        sender: '奥村',
        message: '元気です！聞いてくれてありがとう。',
        timestamp: '10:32 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 16,
        sender: 'YOU',
        message: '今日はどうでしたか？',
        timestamp: '10:35 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 17,
        sender: '奥村',
        message: '良かったです！生産的な一日でした。',
        timestamp: '10:40 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 18,
        sender: '奥村',
        message: 'YOUはどうでしたか？',
        timestamp: '10:42 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 19,
        sender: 'YOU',
        message: '私の日も良かったです。重要なタスクを終えました。',
        timestamp: '10:45 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 20,
        sender: 'YOU',
        message: '今週末、遊びに行きますか？',
        timestamp: '10:48 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 21,
        sender: '奥村',
        message: 'もちろんです！素晴らしいアイデアですね。',
        timestamp: '10:50 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 22,
        sender: '奥村',
        message: 'では、土曜日にしましょう。',
        timestamp: '10:52 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 23,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 24,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 25,
        sender: 'YOU',
        message: '良いですね。それではまた！',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    {
        id: 26,
        sender: 'YOU',
        message: 'Sounds good. See you then!',
        timestamp: '10:55 AM',
        icon: '/icons/blue.png',
    },
    // Add more chat messages here as needed
];

function displayChatHistory() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.innerHTML = '';

    for (const message of chatData) {
        const chatBubble = document.createElement('div');
        chatBubble.className =
            message.sender === 'YOU' ? 'chat-bubble sent flex justify-end items-end mb-2' : 'chat-bubble received flex items-end mb-2';

        const messageContent = document.createElement('div');
        messageContent.className = 'message ml-2 text-dark dark:text-white';
        messageContent.textContent = message.message;

        const timestamp = document.createElement('div');
        timestamp.className = 'text-xs text-gray-400 ml-2 mt-8';
        timestamp.textContent = message.timestamp;

        const messageContainer = document.createElement('div');
        messageContainer.className = 'ml-10'; // Add left margin to the message container
        messageContainer.appendChild(messageContent);

        const messageAndTimestamp = document.createElement('div');
        messageAndTimestamp.className = 'flex items-center';
        messageAndTimestamp.appendChild(messageContainer);
        messageAndTimestamp.appendChild(timestamp);

        if (message.sender !== 'YOU') {
            const senderIcon = document.createElement('img');
            senderIcon.className = 'h-8 w-8 rounded-full';
            senderIcon.src = message.icon; // Set the image source to the user's custom icon

            const senderName = document.createElement('div');
            senderName.className = 'text-base font-bold text-dark dark:text-white ml-2';
            senderName.textContent = message.sender; // Set the sender's name

            const nameAndIcon = document.createElement('div');
            nameAndIcon.className = 'flex items-center';
            nameAndIcon.appendChild(senderIcon);
            nameAndIcon.appendChild(senderName);

            chatBubble.appendChild(nameAndIcon);
        }

        chatBubble.appendChild(messageAndTimestamp);

        chatContainer.appendChild(chatBubble);
    }
}

// ページの読み込み後にトーク履歴を表示する
document.addEventListener('DOMContentLoaded', () => {
    displayChatHistory();
});

// モーダルを開閉する処理
const modalBtns = document.querySelectorAll(".modal-toggle");
const closeBtns = document.querySelectorAll(".modal-close");
const modalContents = document.querySelectorAll(".modal-content");
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeModalButton = document.getElementById("closeModalButton");

modalBtns.forEach(btn => {
    btn.onclick = () => {
        const modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
        document.body.classList.add("overflow-hidden");
    };
});

closeBtns.forEach(btn => {
    btn.onclick = () => {
        const modal = btn.closest('.modal');
        modal.style.display = "none";
        document.body.classList.remove("overflow-hidden");
    };
});

window.onclick = event => {
    if (event.target.classList.contains("modal") || modalContents.includes(event.target)) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.classList.remove('overflow-hidden');
    }
};

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.classList.add("overflow-hidden");
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("overflow-hidden");
});