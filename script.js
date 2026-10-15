// ===============================================================
// 1. ДАННЫЕ ОБ ИГРОКАХ
// ===============================================================
const playersData = {
    jungle: { nick: "Flyence_Jungle", role: "Markvin", color: "#a855f7", mains: "Хирара, Су Ё, Нолан, Ли Сун Син", rank: "Мифический Бессмертный 109", bio: "Агрессив бой" },
    mid: { nick: "Flyence_Mid", role: "Moon", color: "#00f2fe", mains: "Заск, Валир, Новария", rank: "Мифический Бессмертный 110", bio: "Хочет научиться на селене(((" },
    exp: { nick: "Flyence_EXP", role: "Mal1nbi4", color: "#ff6b00", mains: "Арлотт, Чонг", rank: "Мифическая Слава 85", bio: "Хз пока" },
    gold: { nick: "Flyence_Gold", role: "Ma_bachana", color: "#ffd700", mains: "Клинт", rank: "Мифический Бессмертный 149", bio: "Экспонат" },
    roam: { nick: "Flyence_Roam", role: "Yes It`s Pomegranate", color: "#10b981", mains: "Атлас, Белерик", rank: "Мифический Бессмертный 110", bio: "Лютый мейнер Чухана" },
    reserve: { nick: "Flyence_Reserve_Exp", role: "Arlequin_Rumold", color: "rgb(4, 0, 249)", mains: "Фрейя", rank: "Мифический Бессмертный 132", bio: "Тунеядец ученик (Маскот)"}
};

function showPlayer(roleKey) {
    const player = playersData[roleKey];
    if (!player) return;

    const playerCard = document.getElementById('player-info');
    playerCard.classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('player-nick').innerText = player.nick;
        document.getElementById('player-role-badge').innerText = player.role;
        document.getElementById('player-mains').innerText = player.mains;
        document.getElementById('player-rank').innerText = player.rank;
        document.getElementById('player-bio').innerText = player.bio;

        playerCard.style.setProperty('--player-theme-color', player.color);
        playerCard.classList.remove('fade-out');
    }, 200);

    const buttons = document.querySelectorAll('.role-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
}


// ===============================================================
// 2. ХАЙЛАЙТЫ (СПИСОК ВИДЕО)
// ===============================================================
const highlightsList = [
    {
        videoUrl: "images/highlight1.mp4",
        title: "В будущем"
    },
    {
        videoUrl: "images/highlight2.mp4",
        title: "В будущем"
    }
];

let currentHighlightIndex = 0;

function renderHighlight() {
    const container = document.getElementById('current-highlight');
    const highlight = highlightsList[currentHighlightIndex];

    container.innerHTML = `
        <video src="${highlight.videoUrl}" controls class="media-element" poster="https://via.placeholder.com/600x300/1c2333/00f2fe?text=Нажми+Play"></video>
        <h4 class="card-title">${highlight.title}</h4>
    `;
    container.classList.remove('fade-out');
}

function switchHighlight(newIndex) {
    const container = document.getElementById('current-highlight');
    container.classList.add('fade-out');

    setTimeout(() => {
        currentHighlightIndex = newIndex;
        renderHighlight();
    }, 250);
}

function nextHighlight() {
    let newIndex = (currentHighlightIndex + 1) % highlightsList.length;
    switchHighlight(newIndex);
}

function prevHighlight() {
    let newIndex = (currentHighlightIndex - 1 + highlightsList.length) % highlightsList.length;
    switchHighlight(newIndex);
}


// ===============================================================
// 3. МЕМЫ КОМАНДЫ (СПИСОК)
// ===============================================================
const memesList = [
    {
        type: "video",
        mediaUrl: "images/meme_bachana1.mp4",
        text: "«Бачана экспонат»",
        author: "Yes It`s Pomegranate"
    },
    {
        type: "video",
        mediaUrl: "images/meme_bachana2.mp4",
        text: "Клинта возьми!",
        author: "Yes It`s Pomegranate"
    },
    {
        type: "video",
        mediaUrl: "images/meme_video1.mp4",
        text: "В будущем",
        author: "В будущемt"
    }
];

let currentMemeIndex = 0;

function renderMeme() {
    const container = document.getElementById('current-meme');
    const meme = memesList[currentMemeIndex];
    let html = '';
    
    if (meme.type === 'image') {
        html += `<img src="${meme.mediaUrl}" class="media-element" alt="Мем">`;
    } else if (meme.type === 'video') {
        html += `<video src="${meme.mediaUrl}" controls class="media-element"></video>`;
    }

    html += `<p class="meme-text">${meme.text}</p>`;
    html += `<span class="meme-author">${meme.author}</span>`;

    container.innerHTML = html;
    container.classList.remove('fade-out');
}

function switchMeme(newIndex) {
    const container = document.getElementById('current-meme');
    container.classList.add('fade-out');

    setTimeout(() => {
        currentMemeIndex = newIndex;
        renderMeme();
    }, 250);
}

function nextMeme() {
    let newIndex = (currentMemeIndex + 1) % memesList.length;
    switchMeme(newIndex);
}

function prevMeme() {
    let newIndex = (currentMemeIndex - 1 + memesList.length) % memesList.length;
    switchMeme(newIndex);
}

// Запуск при старте
document.addEventListener('DOMContentLoaded', () => {
    renderHighlight();
    renderMeme();
});
