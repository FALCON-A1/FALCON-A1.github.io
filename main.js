// --- Data ---
const UPPERCASE_LETTERS = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
const LOWERCASE_LETTERS = [
    'w', 'f', 'q', 'l', 'g', 't', 'k', 'u', 'd', 'm', 'r', 'b', 'x', 'j', 'e', 's', 'v', 'n', 'y', 'i', 'a', 'z', 'p', 'h', 'c', 'o'
];
const SENTENCE_FILTER = [
    'I can play with the bat and ball here.',
    'The three boys like to walk to the bus stop.',
    'We are sleeping. We woke up late and we are very tired.',
    'Mother and father work from home. They help people and tell them what to do. Some of them left their houses very early.',
    'Sometimes we need to place animals into groups of the same and different. Together, we must write the important ones on the same list.'
];
const WORD_LISTS = {
    'word-preprimer': [
        'big', 'I', 'Can', 'Me', 'ball', 'And', 'In', 'Play', 'Little', 'You'
    ],
    'word-primer': [
        'Have', 'Come', 'School', 'They', 'Sit', 'Get', 'She', 'Ran', 'Like', 'That'
    ],
    'word-1': [
        'Mother', 'Over', 'Said', 'With', 'Old', 'Then', 'Put', 'Going', 'Away', 'Walk', 'Shop', 'Also', 'Them', 'Any', 'Has'
    ],
    'word-2': [
        'gives', 'New', 'Move', 'Food', 'Word', 'before', 'Off', 'good', 'Our', 'Because', 'Your', 'Five', 'Tell', 'Many', 'buy'
    ],
    'word-3': [
        'Men', 'Another', 'People', 'Money', 'Today', 'Back', 'Grow', 'Think', 'Place', 'Need', 'Keep', 'Small', 'About', 'Better', 'Only'
    ],
    'word-4': [
        'health', 'return', 'however', 'Important', 'Reaped', 'listen', 'Favourite', 'problems', 'towards', 'Ourselves', 'information', 'Appeared', 'Covered', 'voice', 'Whenever', 'laugh', 'Attractive', 'Same', 'transport', 'produce'
    ],
    'word-5': [
        'built', 'Different', 'compare', 'understand', 'decided', 'Seldom', 'Attend', 'carefully', 'machine', 'thousands', 'increase', 'Collect', 'explore', 'holiday', 'wonderful', 'remembered', 'infected', 'Involve', 'holiday', 'improve'
    ],
    'word-6': [
        'Environment', 'complex', 'available', 'computer', 'location', 'various', 'production', 'physical', 'education', 'access', 'Medicine', 'especially', 'Prevents', 'environment', 'Resources', 'photography', 'classified', 'customs', 'volunteer', 'industry'
    ]
};
const PASSAGES = {
    'passage-preprimer': [
        `I am Roy. I am a big boy. I can play bat and ball. Pam is a little girl. She can play bat and ball.`
    ],
    'passage-primer': [
        `I have two brown and white cats. They love to run and play. They love milk. Father has a pet at home too. He has a pet dog and it loves to run and jump. The dog is black with white. It loves to eat food. It is big. When I go to school, my mother stays at home with our pets.`
    ],
    'passage-1': [
        `The Farm\nPat lives on a farm. There are pigs and hens on the farm. It rains on the farm. The hens run to get out of the rain. They look funny when they are wet.\nThe pigs like to play in the rain. The rain is good for the farmer. He can get good things to take to the market. After the rain stops, the farmer goes to the market. He likes to go to the market.`
    ],
    'passage-2': [
        `Cake day at home\nMy name is Peter. There are four of us at home, mother, father, Ann and I. We have cake day at home. Mother and Ann make the cake. First, they buy the things they need.\nThen they read the labels, wash their hands and write what they should do. Mother and Ann sing when they bake. Father and I work in the yard.\nWhen the cake is done, mother takes it from the oven. She puts it to cool on the table. We wash up and then we eat our cake. We love our cake day at home.`
    ],
    'passage-3': [
        `Tom and his friends love to draw and paint. Together they do pretty pictures in class. They do their best work when they are at school. First, they think about what they would want to draw.\nThen they get all the items that they need. Next they begin. Tom likes to use cold colours when he draws and paints. Cold colours are blue, green and purple. His friends like to use warm colours like red, yellow and orange.\nWhen they work together they use only the three Primary colours to get all the six colours. The Primary colours are red, yellow and blue. If the paint falls on the floor, they clean it up. When they are finished painting, they show their work to their friends and family. Friends and family will buy their paintings.`
    ],
    'passage-4': [
        `Sports Days\nSports days at school are an important part of our culture. Athletes and non-athletes look forward to this activity-filled event. This annual event is normally held on the two days before Ash Wednesday.\nThe excitement begins weeks, even months before the big days. Students and teachers dress in their house colours, sing cheers and practice for each event. Some of the events include cheerleading, cross-country race, one hundred metre, eight hundred metre race, shuttle relay and my favourite baton relays.\nGlucose, oranges and water are a must-have for these days as the days are usually very hot and runners get very competitive. Coaches and teachers select their best runners or the person they believe would have a chance at winning. There are four houses at our school. They are Red House, Blue House, Yellow House and Green House.\nI had recently transferred from another school and my house leader or captain did not know about my abilities. On the day of the big events, I pleaded with the house leader to let me run but I was told that they had all the athletes for each race already. So I went back to my seat to continue watching the races.\nWhen it was time for the eight hundred metres race the announcer called for two runners from each house. Then I overheard the house leader and captain discussing that they only had one name written down. I immediately volunteered myself as both looked at me from head to toe as if to say, he is so frail. The announcer repeated the call and they said go ahead. I quickly changed into my gears and confidently walked onto the field to the starting position. That day, I surpassed everyone's expectations.`
    ],
    'passage-5': [
        `My name is Abby and my dream is to become a renowned Scientist. A scientist is someone who conducts scientific research to advance knowledge in an area of interest. Scientists are great and they help people. That is why Science is my favourite subject.\nMy area of interest and the most important thing to me in Science class is the studying of insects. During that period, I am very attentive, especially when practical is involved. Insects are different and very interesting creatures so I want to learn everything about them.\nWhen it is time to explore, I set up an area and then I begin my work. I look for all kinds of insects and put them in different categories. These categories include ants, bugs and worms. Whenever I collect different species I compare them to each other to see what new information I can learn. You would be amazed at the number of different species of worms and bugs inhabiting an area.\nFurthermore, you would be even more fascinated by the valuable contributions that they make to the environment. I worry about some of these insects becoming extinct. As a result, I want to have a thorough understanding of their needs, challenges and life cycle of each and every insect in my surroundings.`
    ],
    'passage-6': [
        `Virus\nViruses can make you sick. That's why you should practice proper hygiene. Wash hands after using the bathroom, before you eat. They can become an epidemic with many people being infected. This is because of globalization, travel, and trade. Things can get worse and the virus later becomes a pandemic if we are not very careful. This can cause many vulnerable people to become sick or later die.\nThese viruses can cause many people to develop a flu that involves a cough, or cold that later causes pneumonia which will result in severe respiratory problems. In 2020 we had the pandemic of the Novel Coronavirus. It crossed many country borders, caused many illnesses and had a devastating effect on their economy.\nSince people were asked to stay inside to contain the spread, many industries had to close. Tourism, travel and entertainment were the worst hit. Schools also had to be closed and many businesses had to change their model to online operations. Some businesses were ready and others weren't, consequently those did not survive.\nGovernments all over the world had to provide stimulus packages to boost their economy to ensure that they did not collapse or go into a deep recession. Mental health became an issue as people struggled to cope with the situation.`
    ]
};

// --- State ---
let currentSection = 'uppercase';
let uppercaseState = {
    order: [],
    results: {}, // { letter: 'correct' | 'incorrect' | undefined }
    current: 0,
};
let lowercaseState = {
    order: [],
    results: {}, // { letter: 'correct' | 'incorrect' | undefined }
    current: 0,
};
let sentenceFilterState = {
    order: [], // array of indices
    results: {}, // { idx: 'correct' | 'incorrect' | undefined }
    current: 0,
};
let wordListStates = {};
for (const key in WORD_LISTS) {
    wordListStates[key] = {
        order: [],
        results: {}, // { word: 'correct' | 'incorrect' | undefined }
        current: 0,
    };
}
let passageStates = {};
for (const key in PASSAGES) {
    passageStates[key] = {
        order: [], // array of indices
        results: {}, // { idx: 'correct' | 'incorrect' | undefined }
        current: 0,
    };
}
let studentName = '';
let currentUser = null;
let currentRole = localStorage.getItem('alpharia_role') || 'student';

// --- Utility ---
function shuffle(array) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- Rendering ---
function renderUppercaseSection() {
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        uppercaseState.order = shuffle(UPPERCASE_LETTERS);
        uppercaseState.results = {};
        uppercaseState.current = 0;
        renderUppercaseSection();
    };
    section.appendChild(reshuffleBtn);

    // Single letter display
    const idx = uppercaseState.current;
    const letter = uppercaseState.order[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '2.2rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = letter;
    if (uppercaseState.results[letter] === 'correct') card.classList.add('correct');
    if (uppercaseState.results[letter] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (uppercaseState.results[letter] === 'correct') {
            uppercaseState.results[letter] = 'incorrect';
        } else if (uppercaseState.results[letter] === 'incorrect') {
            uppercaseState.results[letter] = undefined;
        } else {
            uppercaseState.results[letter] = 'correct';
        }
        renderUppercaseSection();
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = uppercaseState.current === 0;
    prevBtn.onclick = () => {
        if (uppercaseState.current > 0) {
            uppercaseState.current--;
            renderUppercaseSection();
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = uppercaseState.current === uppercaseState.order.length - 1;
    nextBtn.onclick = () => {
        if (uppercaseState.current < uppercaseState.order.length - 1) {
            uppercaseState.current++;
            renderUppercaseSection();
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    // Scoreboard
    const total = UPPERCASE_LETTERS.length;
    const correct = Object.values(uppercaseState.results).filter(v => v === 'correct').length;
    const incorrect = Object.values(uppercaseState.results).filter(v => v === 'incorrect').length;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.innerHTML = `
        <span>Total: <b>${total}</b></span>
        <span>Correct: <b>${correct}</b></span>
        <span>Incorrect: <b>${incorrect}</b></span>
        <span>Score: <b>${percent}%</b></span>
    `;

    // Export buttons
    const exportCSV = document.createElement('button');
    exportCSV.className = 'export-btn';
    exportCSV.textContent = 'Export CSV';
    exportCSV.onclick = () => exportResults('csv');
    scoreboard.appendChild(exportCSV);

    const exportJSON = document.createElement('button');
    exportJSON.className = 'export-btn';
    exportJSON.textContent = 'Export JSON';
    exportJSON.onclick = () => exportResults('json');
    scoreboard.appendChild(exportJSON);

    section.appendChild(scoreboard);
}

function renderLowercaseSection() {
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        lowercaseState.order = shuffle(LOWERCASE_LETTERS);
        lowercaseState.results = {};
        lowercaseState.current = 0;
        renderLowercaseSection();
    };
    section.appendChild(reshuffleBtn);

    // Single letter display
    const idx = lowercaseState.current;
    const letter = lowercaseState.order[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '2.2rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = letter;
    if (lowercaseState.results[letter] === 'correct') card.classList.add('correct');
    if (lowercaseState.results[letter] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (lowercaseState.results[letter] === 'correct') {
            lowercaseState.results[letter] = 'incorrect';
        } else if (lowercaseState.results[letter] === 'incorrect') {
            lowercaseState.results[letter] = undefined;
        } else {
            lowercaseState.results[letter] = 'correct';
        }
        renderLowercaseSection();
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = lowercaseState.current === 0;
    prevBtn.onclick = () => {
        if (lowercaseState.current > 0) {
            lowercaseState.current--;
            renderLowercaseSection();
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = lowercaseState.current === lowercaseState.order.length - 1;
    nextBtn.onclick = () => {
        if (lowercaseState.current < lowercaseState.order.length - 1) {
            lowercaseState.current++;
            renderLowercaseSection();
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    // Scoreboard
    const total = LOWERCASE_LETTERS.length;
    const correct = Object.values(lowercaseState.results).filter(v => v === 'correct').length;
    const incorrect = Object.values(lowercaseState.results).filter(v => v === 'incorrect').length;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.innerHTML = `
        <span>Total: <b>${total}</b></span>
        <span>Correct: <b>${correct}</b></span>
        <span>Incorrect: <b>${incorrect}</b></span>
        <span>Score: <b>${percent}%</b></span>
    `;

    // Export buttons
    const exportCSV = document.createElement('button');
    exportCSV.className = 'export-btn';
    exportCSV.textContent = 'Export CSV';
    exportCSV.onclick = () => exportLowercaseResults('csv');
    scoreboard.appendChild(exportCSV);

    const exportJSON = document.createElement('button');
    exportJSON.className = 'export-btn';
    exportJSON.textContent = 'Export JSON';
    exportJSON.onclick = () => exportLowercaseResults('json');
    scoreboard.appendChild(exportJSON);

    section.appendChild(scoreboard);
}

function renderSentenceFilterSection() {
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        sentenceFilterState.order = shuffle([...Array(SENTENCE_FILTER.length).keys()]);
        sentenceFilterState.results = {};
        sentenceFilterState.current = 0;
        renderSentenceFilterSection();
    };
    section.appendChild(reshuffleBtn);

    // Sentence display
    const idx = sentenceFilterState.order[sentenceFilterState.current];
    const sentence = SENTENCE_FILTER[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '1.25rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = sentence;
    if (sentenceFilterState.results[idx] === 'correct') card.classList.add('correct');
    if (sentenceFilterState.results[idx] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (sentenceFilterState.results[idx] === 'correct') {
            sentenceFilterState.results[idx] = 'incorrect';
        } else if (sentenceFilterState.results[idx] === 'incorrect') {
            sentenceFilterState.results[idx] = undefined;
        } else {
            sentenceFilterState.results[idx] = 'correct';
        }
        renderSentenceFilterSection();
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = sentenceFilterState.current === 0;
    prevBtn.onclick = () => {
        if (sentenceFilterState.current > 0) {
            sentenceFilterState.current--;
            renderSentenceFilterSection();
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = sentenceFilterState.current === sentenceFilterState.order.length - 1;
    nextBtn.onclick = () => {
        if (sentenceFilterState.current < sentenceFilterState.order.length - 1) {
            sentenceFilterState.current++;
            renderSentenceFilterSection();
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    // Scoreboard
    const total = SENTENCE_FILTER.length;
    const correct = Object.values(sentenceFilterState.results).filter(v => v === 'correct').length;
    const incorrect = Object.values(sentenceFilterState.results).filter(v => v === 'incorrect').length;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.innerHTML = `
        <span>Total: <b>${total}</b></span>
        <span>Correct: <b>${correct}</b></span>
        <span>Incorrect: <b>${incorrect}</b></span>
        <span>Score: <b>${percent}%</b></span>
    `;

    // Export buttons
    const exportCSV = document.createElement('button');
    exportCSV.className = 'export-btn';
    exportCSV.textContent = 'Export CSV';
    exportCSV.onclick = () => exportSentenceFilterResults('csv');
    scoreboard.appendChild(exportCSV);

    const exportJSON = document.createElement('button');
    exportJSON.className = 'export-btn';
    exportJSON.textContent = 'Export JSON';
    exportJSON.onclick = () => exportSentenceFilterResults('json');
    scoreboard.appendChild(exportJSON);

    section.appendChild(scoreboard);
}

function renderWordListSection(listKey) {
    const words = WORD_LISTS[listKey];
    const state = wordListStates[listKey];
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        state.order = shuffle(words);
        state.results = {};
        state.current = 0;
        renderWordListSection(listKey);
    };
    section.appendChild(reshuffleBtn);

    // Single word display
    const idx = state.current;
    const word = state.order[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '2.2rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = word;
    if (state.results[word] === 'correct') card.classList.add('correct');
    if (state.results[word] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (state.results[word] === 'correct') {
            state.results[word] = 'incorrect';
        } else if (state.results[word] === 'incorrect') {
            state.results[word] = undefined;
        } else {
            state.results[word] = 'correct';
        }
        renderWordListSection(listKey);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = state.current === 0;
    prevBtn.onclick = () => {
        if (state.current > 0) {
            state.current--;
            renderWordListSection(listKey);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = state.current === state.order.length - 1;
    nextBtn.onclick = () => {
        if (state.current < state.order.length - 1) {
            state.current++;
            renderWordListSection(listKey);
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    // Scoreboard
    const total = words.length;
    const correct = Object.values(state.results).filter(v => v === 'correct').length;
    const incorrect = Object.values(state.results).filter(v => v === 'incorrect').length;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.innerHTML = `
        <span>Total: <b>${total}</b></span>
        <span>Correct: <b>${correct}</b></span>
        <span>Incorrect: <b>${incorrect}</b></span>
        <span>Score: <b>${percent}%</b></span>
    `;

    // Export buttons
    const exportCSV = document.createElement('button');
    exportCSV.className = 'export-btn';
    exportCSV.textContent = 'Export CSV';
    exportCSV.onclick = () => exportWordListResults(listKey, 'csv');
    scoreboard.appendChild(exportCSV);

    const exportJSON = document.createElement('button');
    exportJSON.className = 'export-btn';
    exportJSON.textContent = 'Export JSON';
    exportJSON.onclick = () => exportWordListResults(listKey, 'json');
    scoreboard.appendChild(exportJSON);

    section.appendChild(scoreboard);
}

function renderPassageSection(listKey) {
    const passages = PASSAGES[listKey];
    const state = passageStates[listKey];
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        state.order = shuffle([...Array(passages.length).keys()]);
        state.results = {};
        state.current = 0;
        renderPassageSection(listKey);
    };
    section.appendChild(reshuffleBtn);

    // Passage display
    const idx = state.order[state.current];
    const passage = passages[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '1.08rem';
    card.style.minHeight = '120px';
    card.style.padding = '22px 28px';
    card.style.textAlign = 'left';
    card.style.whiteSpace = 'pre-line';
    card.textContent = passage;
    if (state.results[idx] === 'correct') card.classList.add('correct');
    if (state.results[idx] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (state.results[idx] === 'correct') {
            state.results[idx] = 'incorrect';
        } else if (state.results[idx] === 'incorrect') {
            state.results[idx] = undefined;
        } else {
            state.results[idx] = 'correct';
        }
        renderPassageSection(listKey);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = state.current === 0;
    prevBtn.onclick = () => {
        if (state.current > 0) {
            state.current--;
            renderPassageSection(listKey);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = state.current === state.order.length - 1;
    nextBtn.onclick = () => {
        if (state.current < state.order.length - 1) {
            state.current++;
            renderPassageSection(listKey);
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    // Scoreboard
    const total = passages.length;
    const correct = Object.values(state.results).filter(v => v === 'correct').length;
    const incorrect = Object.values(state.results).filter(v => v === 'incorrect').length;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.innerHTML = `
        <span>Total: <b>${total}</b></span>
        <span>Correct: <b>${correct}</b></span>
        <span>Incorrect: <b>${incorrect}</b></span>
        <span>Score: <b>${percent}%</b></span>
    `;

    // Export buttons
    const exportCSV = document.createElement('button');
    exportCSV.className = 'export-btn';
    exportCSV.textContent = 'Export CSV';
    exportCSV.onclick = () => exportPassageResults(listKey, 'csv');
    scoreboard.appendChild(exportCSV);

    const exportJSON = document.createElement('button');
    exportJSON.className = 'export-btn';
    exportJSON.textContent = 'Export JSON';
    exportJSON.onclick = () => exportPassageResults(listKey, 'json');
    scoreboard.appendChild(exportJSON);

    section.appendChild(scoreboard);
}

function exportResults(type) {
    const data = UPPERCASE_LETTERS.map(letter => ({
        student: studentName,
        letter,
        result: uppercaseState.results[letter] || ''
    }));
    if (type === 'csv') {
        const csv = 'Student,Letter,Result\n' + data.map(d => `${d.student},${d.letter},${d.result}`).join('\n');
        downloadFile(csv, 'uppercase_results.csv', 'text/csv');
    } else {
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, 'uppercase_results.json', 'application/json');
    }
}

function exportLowercaseResults(type) {
    const data = LOWERCASE_LETTERS.map(letter => ({
        student: studentName,
        letter,
        result: lowercaseState.results[letter] || ''
    }));
    if (type === 'csv') {
        const csv = 'Student,Letter,Result\n' + data.map(d => `${d.student},${d.letter},${d.result}`).join('\n');
        downloadFile(csv, 'lowercase_results.csv', 'text/csv');
    } else {
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, 'lowercase_results.json', 'application/json');
    }
}

function exportSentenceFilterResults(type) {
    const data = sentenceFilterState.order.map(idx => ({
        student: studentName,
        sentence: SENTENCE_FILTER[idx],
        result: sentenceFilterState.results[idx] || ''
    }));
    if (type === 'csv') {
        const csv = 'Student,Sentence,Result\n' + data.map(d => `"${d.student}","${d.sentence.replace(/"/g, '""')}",${d.result}`).join('\n');
        downloadFile(csv, 'sentence_filter_results.csv', 'text/csv');
    } else {
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, 'sentence_filter_results.json', 'application/json');
    }
}

function exportWordListResults(listKey, type) {
    const words = WORD_LISTS[listKey];
    const state = wordListStates[listKey];
    const data = words.map(word => ({
        student: studentName,
        word,
        result: state.results[word] || ''
    }));
    if (type === 'csv') {
        const csv = 'Student,Word,Result\n' + data.map(d => `${d.student},${d.word},${d.result}`).join('\n');
        downloadFile(csv, `${listKey}_results.csv`, 'text/csv');
    } else {
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, `${listKey}_results.json`, 'application/json');
    }
}

function exportPassageResults(listKey, type) {
    const passages = PASSAGES[listKey];
    const state = passageStates[listKey];
    const data = state.order.map(idx => ({
        student: studentName,
        passage: passages[idx],
        result: state.results[idx] || ''
    }));
    if (type === 'csv') {
        const csv = 'Student,Passage,Result\n' + data.map(d => `"${d.student}","${d.passage.replace(/"/g, '""')}",${d.result}`).join('\n');
        downloadFile(csv, `${listKey}_results.csv`, 'text/csv');
    } else {
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, `${listKey}_results.json`, 'application/json');
    }
}

function downloadFile(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
}

// --- Navigation ---
function setupSidebar() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.onclick = () => {
            if (item.dataset.section === 'uppercase') {
                currentSection = 'uppercase';
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderUppercaseSection();
            } else if (item.dataset.section === 'lowercase') {
                currentSection = 'lowercase';
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderLowercaseSection();
            } else if (item.dataset.section === 'sentence-filter') {
                currentSection = 'sentence-filter';
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderSentenceFilterSection();
            } else if (item.dataset.section && item.dataset.section.startsWith('word-')) {
                currentSection = item.dataset.section;
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderWordListSection(item.dataset.section);
            } else if (item.dataset.section && item.dataset.section.startsWith('passage-')) {
                currentSection = item.dataset.section;
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderPassageSection(item.dataset.section);
            } else {
                alert('This section is coming soon!');
            }
        };
    });
}

function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    const setIcon = (isLight) => {
        btn.textContent = isLight ? '☀️' : '🌙';
    };
    // Load preference
    let isLight = localStorage.getItem('theme') === 'light';
    if (isLight) document.body.classList.add('light');
    setIcon(isLight);
    btn.onclick = () => {
        isLight = !isLight;
        document.body.classList.toggle('light', isLight);
        setIcon(isLight);
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    };
}

const TEST_FLOW = [
    { type: 'uppercase' },
    { type: 'lowercase' },
    { type: 'sentence-filter' },
    { type: 'word', key: 'word-preprimer' },
    { type: 'word', key: 'word-primer' },
    { type: 'word', key: 'word-1' },
    { type: 'word', key: 'word-2' },
    { type: 'word', key: 'word-3' },
    { type: 'word', key: 'word-4' },
    { type: 'word', key: 'word-5' },
    { type: 'word', key: 'word-6' },
    { type: 'passage', key: 'passage-preprimer' },
    { type: 'passage', key: 'passage-primer' },
    { type: 'passage', key: 'passage-1' },
    { type: 'passage', key: 'passage-2' },
    { type: 'passage', key: 'passage-3' },
    { type: 'passage', key: 'passage-4' },
    { type: 'passage', key: 'passage-5' },
    { type: 'passage', key: 'passage-6' }
];
let testFlowIndex = 0;
let inTestFlow = false;

function startTestFlow() {
    inTestFlow = true;
    testFlowIndex = 0;
    goToTestFlowSection();
    disableSidebar();
}
function goToTestFlowSection() {
    const section = TEST_FLOW[testFlowIndex];
    if (!section) {
        showFinalReport();
        return;
    }
    if (section.type === 'uppercase') {
        currentSection = 'uppercase';
        renderUppercaseSection(true);
    } else if (section.type === 'lowercase') {
        currentSection = 'lowercase';
        renderLowercaseSection(true);
    } else if (section.type === 'sentence-filter') {
        currentSection = 'sentence-filter';
        renderSentenceFilterSection(true);
    } else if (section.type === 'word') {
        currentSection = section.key;
        renderWordListSection(section.key, true);
    } else if (section.type === 'passage') {
        currentSection = section.key;
        renderPassageSection(section.key, true);
    }
    highlightSidebar(currentSection);
}
function nextTestFlowSection() {
    testFlowIndex++;
    goToTestFlowSection();
}
function disableSidebar() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.style.pointerEvents = 'none';
        item.style.opacity = '0.5';
    });
}
function enableSidebar() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.style.pointerEvents = '';
        item.style.opacity = '';
    });
}
function highlightSidebar(sectionKey) {
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.section === sectionKey) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
function showSectionReport({title, correct, incorrect, total, percent, onNext, details, columns}) {
    let modal = document.getElementById('section-report-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'section-report-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.right = '0';
        modal.style.bottom = '0';
        modal.style.background = 'rgba(24,26,27,0.92)';
        modal.style.zIndex = '2000';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.innerHTML = '<div class="start-card" id="section-report-card" style="max-height:80vh;overflow:auto;"></div>';
        document.body.appendChild(modal);
    }
    const card = document.getElementById('section-report-card');
    let gridHtml = '';
    if (details && columns) {
        gridHtml = `<div class='detail-grid'>${details.map(row => `
            <div class='detail-cell'><b>${columns[0]}:</b> ${row[0]}</div>
            <div class='detail-cell'><b>${columns[1]}:</b> ${row[1]}</div>
            <div class='detail-cell'><b>${columns[2]}:</b> ${row[2]}</div>
        `).join('')}</div>`;
    }
    card.innerHTML = `<h2>${title} Complete</h2>
        ${gridHtml}
        <div style="margin:12px 0 12px 0; font-size:1.1rem;"><b>Score:</b> ${correct} / ${total} (${percent}%)</div>
        <button id="section-next-btn">Next Section</button>`;
    document.getElementById('section-next-btn').onclick = () => {
        modal.style.display = 'none';
        if (onNext) onNext();
    };
    modal.style.display = 'flex';
}
function computeSummary() {
    const summary = [];
    let totalCorrect = 0, totalItems = 0;
    // Uppercase
    const ucCorrect = Object.values(uppercaseState.results).filter(v => v === 'correct').length;
    const ucTotal = UPPERCASE_LETTERS.length;
    summary.push({ label: 'Uppercase Letters', correct: ucCorrect, total: ucTotal, percent: ucTotal ? Math.round((ucCorrect/ucTotal)*100) : 0 });
    totalCorrect += ucCorrect; totalItems += ucTotal;
    // Lowercase
    const lcCorrect = Object.values(lowercaseState.results).filter(v => v === 'correct').length;
    const lcTotal = LOWERCASE_LETTERS.length;
    summary.push({ label: 'Lowercase Letters', correct: lcCorrect, total: lcTotal, percent: lcTotal ? Math.round((lcCorrect/lcTotal)*100) : 0 });
    totalCorrect += lcCorrect; totalItems += lcTotal;
    // Sentence Filter
    const sfCorrect = Object.values(sentenceFilterState.results).filter(v => v === 'correct').length;
    const sfTotal = SENTENCE_FILTER.length;
    summary.push({ label: 'Sentence Filter', correct: sfCorrect, total: sfTotal, percent: sfTotal ? Math.round((sfCorrect/sfTotal)*100) : 0 });
    totalCorrect += sfCorrect; totalItems += sfTotal;
    // Word Lists
    for (const key of Object.keys(WORD_LISTS)) {
        const state = wordListStates[key];
        const correct = Object.values(state.results).filter(v => v === 'correct').length;
        const total = WORD_LISTS[key].length;
        const label = key.replace('word-', '').replace(/\b\w/g, c => c.toUpperCase()) + ' Words';
        summary.push({ label, correct, total, percent: total ? Math.round((correct/total)*100) : 0 });
        totalCorrect += correct; totalItems += total;
    }
    // Passages
    for (const key of Object.keys(PASSAGES)) {
        const state = passageStates[key];
        const correct = Object.values(state.results).filter(v => v === 'correct').length;
        const total = PASSAGES[key].length;
        const label = key.replace('passage-', '').replace(/\b\w/g, c => c.toUpperCase()) + ' Passage';
        summary.push({ label, correct, total, percent: total ? Math.round((correct/total)*100) : 0 });
        totalCorrect += correct; totalItems += total;
    }
    return { summary, totalCorrect, totalItems };
}
function exportSummaryResults(type) {
    const { summary, totalCorrect, totalItems } = computeSummary();
    if (type === 'csv') {
        const header = 'Section,Score,Percent\n';
        const rows = summary.map(s => `${s.label},${s.correct} / ${s.total},${s.percent}%`).join('\n');
        const totalRow = `\nFinal Total:,${totalCorrect} / ${totalItems},${totalItems ? Math.round((totalCorrect/totalItems)*100) : 0}%`;
        downloadFile(header + rows + totalRow, 'alpharia_summary.csv', 'text/csv');
    } else {
        const obj = {
            student: studentName,
            sections: summary.map(s => ({ section: s.label, score: `${s.correct} / ${s.total}`, percent: `${s.percent}%` })),
            finalTotal: `${totalCorrect} / ${totalItems} (${totalItems ? Math.round((totalCorrect/totalItems)*100) : 0}%)`
        };
        downloadFile(JSON.stringify(obj, null, 2), 'alpharia_summary.json', 'application/json');
    }
}
function showFinalReport() {
    let modal = document.getElementById('section-report-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'section-report-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.right = '0';
        modal.style.bottom = '0';
        modal.style.background = 'rgba(24,26,27,0.92)';
        modal.style.zIndex = '2000';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.innerHTML = '<div class="start-card" id="section-report-card" style="max-height:80vh;overflow:auto;"></div>';
        document.body.appendChild(modal);
    }
    const card = document.getElementById('section-report-card');
    const { summary, totalCorrect, totalItems } = computeSummary();
    let tableHtml = `<table style='width:100%;margin:18px 0 12px 0;border-collapse:collapse;font-size:1.05rem;'>
        <tbody>
        ${summary.map(row => `<tr><td style='padding:4px 8px;'>${row.label}</td><td style='padding:4px 8px;'>${row.correct} / ${row.total}</td><td style='padding:4px 8px;'>${row.percent}%</td></tr>`).join('')}
        </tbody>
    </table>`;
    card.innerHTML = `<h2>Test Complete</h2>
        <div style=\"margin:8px 0 12px 0; font-size:1.1rem;\">Thank you, ${studentName}!</div>
        ${tableHtml}
        <div style=\"margin:12px 0 12px 0; font-size:1.15rem;\"><b>Final Total:</b> ${totalCorrect} / ${totalItems} (${totalItems ? Math.round((totalCorrect/totalItems)*100) : 0}%)</div>
        <div style=\"display:flex; gap:12px; justify-content:center; margin-top:10px;\">
            <button id=\"export-all-csv\" class=\"export-btn\">Export CSV</button>
            <button id=\"export-all-json\" class=\"export-btn\">Export JSON</button>
            <button id=\"finish-attempt\" class=\"reshuffle-btn\">Finish Attempt</button>
            <button id=\"retake-test\" class=\"reshuffle-btn\">Retake Test</button>
        </div>`;
    document.getElementById('export-all-csv').onclick = () => exportSummaryResults('csv');
    document.getElementById('export-all-json').onclick = () => exportSummaryResults('json');
    document.getElementById('finish-attempt').onclick = () => {
        modal.style.display = 'none';
        inTestFlow = false;
        enableSidebar();
        setupSidebar();
    };
    document.getElementById('retake-test').onclick = () => {
        resetAllStates();
        modal.style.display = 'none';
        startTestFlow();
    };
    modal.style.display = 'flex';
}
// --- Patch renderers for test flow ---
function renderUppercaseSection(isTestFlow) {
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        uppercaseState.order = shuffle(UPPERCASE_LETTERS);
        uppercaseState.results = {};
        uppercaseState.current = 0;
        renderUppercaseSection(isTestFlow);
    };
    section.appendChild(reshuffleBtn);

    // Single letter display
    const idx = uppercaseState.current;
    const letter = uppercaseState.order[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '2.2rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = letter;
    if (uppercaseState.results[letter] === 'correct') card.classList.add('correct');
    if (uppercaseState.results[letter] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (uppercaseState.results[letter] === 'correct') {
            uppercaseState.results[letter] = 'incorrect';
        } else if (uppercaseState.results[letter] === 'incorrect') {
            uppercaseState.results[letter] = undefined;
        } else {
            uppercaseState.results[letter] = 'correct';
        }
        renderUppercaseSection(isTestFlow);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = uppercaseState.current === 0;
    prevBtn.onclick = () => {
        if (uppercaseState.current > 0) {
            uppercaseState.current--;
            renderUppercaseSection(isTestFlow);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = isTestFlow ? false : (uppercaseState.current === uppercaseState.order.length - 1);
    nextBtn.onclick = () => {
        if (uppercaseState.current < uppercaseState.order.length - 1) {
            uppercaseState.current++;
            renderUppercaseSection(isTestFlow);
        } else if (isTestFlow) {
            const details = uppercaseState.order.map(letter => [
                `Letter ${letter}`,
                uppercaseState.results[letter] ? uppercaseState.results[letter] : '',
                uppercaseState.results[letter] === 'correct' ? '100%' : (uppercaseState.results[letter] === 'incorrect' ? '0%' : '-')
            ]);
            showSectionReport({
                title: 'Uppercase Letters',
                correct: Object.values(uppercaseState.results).filter(v => v === 'correct').length,
                incorrect: Object.values(uppercaseState.results).filter(v => v === 'incorrect').length,
                total: UPPERCASE_LETTERS.length,
                percent: UPPERCASE_LETTERS.length ? Math.round((Object.values(uppercaseState.results).filter(v => v === 'correct').length / UPPERCASE_LETTERS.length) * 100) : 0,
                onNext: nextTestFlowSection,
                details,
                columns: ['Item', 'Student Answer', 'Accuracy']
            });
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    if (!isTestFlow) {
        // Scoreboard
        const total = UPPERCASE_LETTERS.length;
        const correct = Object.values(uppercaseState.results).filter(v => v === 'correct').length;
        const incorrect = Object.values(uppercaseState.results).filter(v => v === 'incorrect').length;
        const percent = total ? Math.round((correct / total) * 100) : 0;

        const scoreboard = document.createElement('div');
        scoreboard.className = 'scoreboard';
        scoreboard.innerHTML = `
            <span>Total: <b>${total}</b></span>
            <span>Correct: <b>${correct}</b></span>
            <span>Incorrect: <b>${incorrect}</b></span>
            <span>Score: <b>${percent}%</b></span>
        `;

        // Export buttons
        const exportCSV = document.createElement('button');
        exportCSV.className = 'export-btn';
        exportCSV.textContent = 'Export CSV';
        exportCSV.onclick = () => exportResults('csv');
        scoreboard.appendChild(exportCSV);

        const exportJSON = document.createElement('button');
        exportJSON.className = 'export-btn';
        exportJSON.textContent = 'Export JSON';
        exportJSON.onclick = () => exportResults('json');
        scoreboard.appendChild(exportJSON);

        section.appendChild(scoreboard);
    }
}

function renderLowercaseSection(isTestFlow) {
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        lowercaseState.order = shuffle(LOWERCASE_LETTERS);
        lowercaseState.results = {};
        lowercaseState.current = 0;
        renderLowercaseSection(isTestFlow);
    };
    section.appendChild(reshuffleBtn);

    // Single letter display
    const idx = lowercaseState.current;
    const letter = lowercaseState.order[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '2.2rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = letter;
    if (lowercaseState.results[letter] === 'correct') card.classList.add('correct');
    if (lowercaseState.results[letter] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (lowercaseState.results[letter] === 'correct') {
            lowercaseState.results[letter] = 'incorrect';
        } else if (lowercaseState.results[letter] === 'incorrect') {
            lowercaseState.results[letter] = undefined;
        } else {
            lowercaseState.results[letter] = 'correct';
        }
        renderLowercaseSection(isTestFlow);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = lowercaseState.current === 0;
    prevBtn.onclick = () => {
        if (lowercaseState.current > 0) {
            lowercaseState.current--;
            renderLowercaseSection(isTestFlow);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = isTestFlow ? false : (lowercaseState.current === lowercaseState.order.length - 1);
    nextBtn.onclick = () => {
        if (lowercaseState.current < lowercaseState.order.length - 1) {
            lowercaseState.current++;
            renderLowercaseSection(isTestFlow);
        } else if (isTestFlow) {
            const details = lowercaseState.order.map(letter => [
                `Letter ${letter}`,
                lowercaseState.results[letter] ? lowercaseState.results[letter] : '',
                lowercaseState.results[letter] === 'correct' ? '100%' : (lowercaseState.results[letter] === 'incorrect' ? '0%' : '-')
            ]);
            showSectionReport({
                title: 'Lowercase Letters',
                correct: Object.values(lowercaseState.results).filter(v => v === 'correct').length,
                incorrect: Object.values(lowercaseState.results).filter(v => v === 'incorrect').length,
                total: LOWERCASE_LETTERS.length,
                percent: LOWERCASE_LETTERS.length ? Math.round((Object.values(lowercaseState.results).filter(v => v === 'correct').length / LOWERCASE_LETTERS.length) * 100) : 0,
                onNext: nextTestFlowSection,
                details,
                columns: ['Item', 'Student Answer', 'Accuracy']
            });
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    if (!isTestFlow) {
        const total = LOWERCASE_LETTERS.length;
        const correct = Object.values(lowercaseState.results).filter(v => v === 'correct').length;
        const incorrect = Object.values(lowercaseState.results).filter(v => v === 'incorrect').length;
        const percent = total ? Math.round((correct / total) * 100) : 0;

        const scoreboard = document.createElement('div');
        scoreboard.className = 'scoreboard';
        scoreboard.innerHTML = `
            <span>Total: <b>${total}</b></span>
            <span>Correct: <b>${correct}</b></span>
            <span>Incorrect: <b>${incorrect}</b></span>
            <span>Score: <b>${percent}%</b></span>
        `;

        const exportCSV = document.createElement('button');
        exportCSV.className = 'export-btn';
        exportCSV.textContent = 'Export CSV';
        exportCSV.onclick = () => exportLowercaseResults('csv');
        scoreboard.appendChild(exportCSV);

        const exportJSON = document.createElement('button');
        exportJSON.className = 'export-btn';
        exportJSON.textContent = 'Export JSON';
        exportJSON.onclick = () => exportLowercaseResults('json');
        scoreboard.appendChild(exportJSON);

        section.appendChild(scoreboard);
    }
}

function renderSentenceFilterSection(isTestFlow) {
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        sentenceFilterState.order = shuffle([...Array(SENTENCE_FILTER.length).keys()]);
        sentenceFilterState.results = {};
        sentenceFilterState.current = 0;
        renderSentenceFilterSection(isTestFlow);
    };
    section.appendChild(reshuffleBtn);

    // Sentence display
    const idx = sentenceFilterState.order[sentenceFilterState.current];
    const sentence = SENTENCE_FILTER[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '1.25rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = sentence;
    if (sentenceFilterState.results[idx] === 'correct') card.classList.add('correct');
    if (sentenceFilterState.results[idx] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (sentenceFilterState.results[idx] === 'correct') {
            sentenceFilterState.results[idx] = 'incorrect';
        } else if (sentenceFilterState.results[idx] === 'incorrect') {
            sentenceFilterState.results[idx] = undefined;
        } else {
            sentenceFilterState.results[idx] = 'correct';
        }
        renderSentenceFilterSection(isTestFlow);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = sentenceFilterState.current === 0;
    prevBtn.onclick = () => {
        if (sentenceFilterState.current > 0) {
            sentenceFilterState.current--;
            renderSentenceFilterSection(isTestFlow);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = isTestFlow ? false : (sentenceFilterState.current === sentenceFilterState.order.length - 1);
    nextBtn.onclick = () => {
        if (sentenceFilterState.current < sentenceFilterState.order.length - 1) {
            sentenceFilterState.current++;
            renderSentenceFilterSection(isTestFlow);
        } else if (isTestFlow) {
            const details = sentenceFilterState.order.map(idx => [
                SENTENCE_FILTER[idx],
                sentenceFilterState.results[idx] ? sentenceFilterState.results[idx] : '',
                sentenceFilterState.results[idx] === 'correct' ? '100%' : (sentenceFilterState.results[idx] === 'incorrect' ? '0%' : '-')
            ]);
            showSectionReport({
                title: 'Sentence Filter',
                correct: Object.values(sentenceFilterState.results).filter(v => v === 'correct').length,
                incorrect: Object.values(sentenceFilterState.results).filter(v => v === 'incorrect').length,
                total: SENTENCE_FILTER.length,
                percent: SENTENCE_FILTER.length ? Math.round((Object.values(sentenceFilterState.results).filter(v => v === 'correct').length / SENTENCE_FILTER.length) * 100) : 0,
                onNext: nextTestFlowSection,
                details,
                columns: ['Item', 'Student Answer', 'Accuracy']
            });
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    if (!isTestFlow) {
        const total = SENTENCE_FILTER.length;
        const correct = Object.values(sentenceFilterState.results).filter(v => v === 'correct').length;
        const incorrect = Object.values(sentenceFilterState.results).filter(v => v === 'incorrect').length;
        const percent = total ? Math.round((correct / total) * 100) : 0;

        const scoreboard = document.createElement('div');
        scoreboard.className = 'scoreboard';
        scoreboard.innerHTML = `
            <span>Total: <b>${total}</b></span>
            <span>Correct: <b>${correct}</b></span>
            <span>Incorrect: <b>${incorrect}</b></span>
            <span>Score: <b>${percent}%</b></span>
        `;

        const exportCSV = document.createElement('button');
        exportCSV.className = 'export-btn';
        exportCSV.textContent = 'Export CSV';
        exportCSV.onclick = () => exportSentenceFilterResults('csv');
        scoreboard.appendChild(exportCSV);

        const exportJSON = document.createElement('button');
        exportJSON.className = 'export-btn';
        exportJSON.textContent = 'Export JSON';
        exportJSON.onclick = () => exportSentenceFilterResults('json');
        scoreboard.appendChild(exportJSON);

        section.appendChild(scoreboard);
    }
}

function renderWordListSection(listKey, isTestFlow) {
    const words = WORD_LISTS[listKey];
    const state = wordListStates[listKey];
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        state.order = shuffle(words);
        state.results = {};
        state.current = 0;
        renderWordListSection(listKey, isTestFlow);
    };
    section.appendChild(reshuffleBtn);

    // Single word display
    const idx = state.current;
    const word = state.order[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '2.2rem';
    card.style.minHeight = '90px';
    card.style.padding = '18px 24px';
    card.style.textAlign = 'center';
    card.textContent = word;
    if (state.results[word] === 'correct') card.classList.add('correct');
    if (state.results[word] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (state.results[word] === 'correct') {
            state.results[word] = 'incorrect';
        } else if (state.results[word] === 'incorrect') {
            state.results[word] = undefined;
        } else {
            state.results[word] = 'correct';
        }
        renderWordListSection(listKey, isTestFlow);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = state.current === 0;
    prevBtn.onclick = () => {
        if (state.current > 0) {
            state.current--;
            renderWordListSection(listKey, isTestFlow);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = isTestFlow ? false : (state.current === state.order.length - 1);
    nextBtn.onclick = () => {
        if (state.current < state.order.length - 1) {
            state.current++;
            renderWordListSection(listKey, isTestFlow);
        } else if (isTestFlow) {
            const details = state.order.map(word => [
                word,
                state.results[word] ? state.results[word] : '',
                state.results[word] === 'correct' ? '100%' : (state.results[word] === 'incorrect' ? '0%' : '-')
            ]);
            showSectionReport({
                title: `Word List (${listKey.replace('word-', '').replace(/\b\w/g, c => c.toUpperCase())})`,
                correct: Object.values(state.results).filter(v => v === 'correct').length,
                incorrect: Object.values(state.results).filter(v => v === 'incorrect').length,
                total: words.length,
                percent: words.length ? Math.round((Object.values(state.results).filter(v => v === 'correct').length / words.length) * 100) : 0,
                onNext: nextTestFlowSection,
                details,
                columns: ['Item', 'Student Answer', 'Accuracy']
            });
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    if (!isTestFlow) {
        const total = words.length;
        const correct = Object.values(state.results).filter(v => v === 'correct').length;
        const incorrect = Object.values(state.results).filter(v => v === 'incorrect').length;
        const percent = total ? Math.round((correct / total) * 100) : 0;

        const scoreboard = document.createElement('div');
        scoreboard.className = 'scoreboard';
        scoreboard.innerHTML = `
            <span>Total: <b>${total}</b></span>
            <span>Correct: <b>${correct}</b></span>
            <span>Incorrect: <b>${incorrect}</b></span>
            <span>Score: <b>${percent}%</b></span>
        `;

        const exportCSV = document.createElement('button');
        exportCSV.className = 'export-btn';
        exportCSV.textContent = 'Export CSV';
        exportCSV.onclick = () => exportWordListResults(listKey, 'csv');
        scoreboard.appendChild(exportCSV);

        const exportJSON = document.createElement('button');
        exportJSON.className = 'export-btn';
        exportJSON.textContent = 'Export JSON';
        exportJSON.onclick = () => exportWordListResults(listKey, 'json');
        scoreboard.appendChild(exportJSON);

        section.appendChild(scoreboard);
    }
}

function renderPassageSection(listKey, isTestFlow) {
    const passages = PASSAGES[listKey];
    const state = passageStates[listKey];
    const section = document.getElementById('section-content');
    section.innerHTML = '';

    // Reshuffle button
    const reshuffleBtn = document.createElement('button');
    reshuffleBtn.className = 'reshuffle-btn';
    reshuffleBtn.textContent = 'Reshuffle';
    reshuffleBtn.onclick = () => {
        state.order = shuffle([...Array(passages.length).keys()]);
        state.results = {};
        state.current = 0;
        renderPassageSection(listKey, isTestFlow);
    };
    section.appendChild(reshuffleBtn);

    // Passage display
    const idx = state.order[state.current];
    const passage = passages[idx];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.fontSize = '1.08rem';
    card.style.minHeight = '120px';
    card.style.padding = '22px 28px';
    card.style.textAlign = 'left';
    card.style.whiteSpace = 'pre-line';
    card.textContent = passage;
    if (state.results[idx] === 'correct') card.classList.add('correct');
    if (state.results[idx] === 'incorrect') card.classList.add('incorrect');
    card.onclick = () => {
        if (state.results[idx] === 'correct') {
            state.results[idx] = 'incorrect';
        } else if (state.results[idx] === 'incorrect') {
            state.results[idx] = undefined;
        } else {
            state.results[idx] = 'correct';
        }
        renderPassageSection(listKey, isTestFlow);
    };
    section.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '18px';
    nav.style.margin = '18px 0';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'reshuffle-btn';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = state.current === 0;
    prevBtn.onclick = () => {
        if (state.current > 0) {
            state.current--;
            renderPassageSection(listKey, isTestFlow);
        }
    };
    nav.appendChild(prevBtn);
    const nextBtn = document.createElement('button');
    nextBtn.className = 'reshuffle-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = isTestFlow ? false : (state.current === state.order.length - 1);
    nextBtn.onclick = () => {
        if (state.current < state.order.length - 1) {
            state.current++;
            renderPassageSection(listKey, isTestFlow);
        } else if (isTestFlow) {
            const details = state.order.map(idx => [
                passages[idx],
                state.results[idx] ? state.results[idx] : '',
                state.results[idx] === 'correct' ? '100%' : (state.results[idx] === 'incorrect' ? '0%' : '-')
            ]);
            showSectionReport({
                title: `Passage (${listKey.replace('passage-', '').replace(/\b\w/g, c => c.toUpperCase())})`,
                correct: Object.values(state.results).filter(v => v === 'correct').length,
                incorrect: Object.values(state.results).filter(v => v === 'incorrect').length,
                total: passages.length,
                percent: passages.length ? Math.round((Object.values(state.results).filter(v => v === 'correct').length / passages.length) * 100) : 0,
                onNext: nextTestFlowSection,
                details,
                columns: ['Item', 'Student Answer', 'Accuracy']
            });
        }
    };
    nav.appendChild(nextBtn);
    section.appendChild(nav);

    if (!isTestFlow) {
        const total = passages.length;
        const correct = Object.values(state.results).filter(v => v === 'correct').length;
        const incorrect = Object.values(state.results).filter(v => v === 'incorrect').length;
        const percent = total ? Math.round((correct / total) * 100) : 0;

        const scoreboard = document.createElement('div');
        scoreboard.className = 'scoreboard';
        scoreboard.innerHTML = `
            <span>Total: <b>${total}</b></span>
            <span>Correct: <b>${correct}</b></span>
            <span>Incorrect: <b>${incorrect}</b></span>
            <span>Score: <b>${percent}%</b></span>
        `;

        const exportCSV = document.createElement('button');
        exportCSV.className = 'export-btn';
        exportCSV.textContent = 'Export CSV';
        exportCSV.onclick = () => exportPassageResults(listKey, 'csv');
        scoreboard.appendChild(exportCSV);

        const exportJSON = document.createElement('button');
        exportJSON.className = 'export-btn';
        exportJSON.textContent = 'Export JSON';
        exportJSON.onclick = () => exportPassageResults(listKey, 'json');
        scoreboard.appendChild(exportJSON);

        section.appendChild(scoreboard);
    }
}

function collectAllResults() {
    const rows = [];
    // Uppercase
    UPPERCASE_LETTERS.forEach(letter => {
        rows.push({ student: studentName, section: 'Uppercase Letters', item: letter, result: uppercaseState.results[letter] || '' });
    });
    // Lowercase
    LOWERCASE_LETTERS.forEach(letter => {
        rows.push({ student: studentName, section: 'Lowercase Letters', item: letter, result: lowercaseState.results[letter] || '' });
    });
    // Sentence Filter
    SENTENCE_FILTER.forEach((sentence, idx) => {
        rows.push({ student: studentName, section: 'Sentence Filter', item: sentence, result: sentenceFilterState.results[idx] || '' });
    });
    // Word Lists
    Object.keys(WORD_LISTS).forEach(key => {
        const label = key.replace('word-', '').replace(/\b\w/g, c => c.toUpperCase()) + ' Words';
        WORD_LISTS[key].forEach(word => {
            rows.push({ student: studentName, section: label, item: word, result: (wordListStates[key].results[word] || '') });
        });
    });
    // Passages
    Object.keys(PASSAGES).forEach(key => {
        const label = key.replace('passage-', '').replace(/\b\w/g, c => c.toUpperCase()) + ' Passage';
        PASSAGES[key].forEach((passage, idx) => {
            rows.push({ student: studentName, section: label, item: passage, result: (passageStates[key].results[idx] || '') });
        });
    });
    return rows;
}
function exportAllResults(type) {
    const rows = collectAllResults();
    if (type === 'csv') {
        const csv = 'Student,Section,Item,Result\n' + rows.map(r => `"${r.student}","${r.section}","${r.item.replace(/"/g, '""')}",${r.result}`).join('\n');
        downloadFile(csv, 'alpharia_attempt.csv', 'text/csv');
    } else {
        const json = JSON.stringify(rows, null, 2);
        downloadFile(json, 'alpharia_attempt.json', 'application/json');
    }
}
function resetAllStates() {
    uppercaseState.order = shuffle(UPPERCASE_LETTERS);
    uppercaseState.results = {};
    uppercaseState.current = 0;
    lowercaseState.order = shuffle(LOWERCASE_LETTERS);
    lowercaseState.results = {};
    lowercaseState.current = 0;
    sentenceFilterState.order = shuffle([...Array(SENTENCE_FILTER.length).keys()]);
    sentenceFilterState.results = {};
    sentenceFilterState.current = 0;
    for (const key in WORD_LISTS) {
        wordListStates[key].order = shuffle(WORD_LISTS[key]);
        wordListStates[key].results = {};
        wordListStates[key].current = 0;
    }
    for (const key in PASSAGES) {
        passageStates[key].order = shuffle([...Array(PASSAGES[key].length).keys()]);
        passageStates[key].results = {};
        passageStates[key].current = 0;
    }
}

function setupStartScreen() {
    const startScreen = document.getElementById('start-screen');
    const container = document.querySelector('.container');
    const input = document.getElementById('student-name-input');
    const btn = document.getElementById('start-btn');
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') btn.click();
    });
    btn.onclick = () => {
        const name = input.value.trim();
        if (!name) {
            input.focus();
            input.style.border = '1.5px solid #b71c1c';
            return;
        }
        studentName = name;
        startScreen.style.display = 'none';
        container.style.display = '';
        updateStudentNameDisplay();
        startTestFlow();
    };
}
function updateStudentNameDisplay() {
    const el = document.getElementById('student-name-display');
    el.textContent = studentName ? `Student: ${studentName}` : '';
}

// Landing and Admin Panel
function setupLanding() {
    const landing = document.getElementById('landing-screen');
    const startOverlay = document.getElementById('start-screen');
    const adminPanel = document.getElementById('admin-panel');
    const tabBtns = document.querySelectorAll('.auth-tab');
    const studentPanel = document.getElementById('auth-student');
    const adminPanelBody = document.getElementById('auth-admin');

    // Get Started button functionality
    const getStarted = document.getElementById('landing-get-started');
    const authCard = document.getElementById('landing-auth-card');
    
    function showAuthCard() {
        if (authCard) {
            authCard.style.display = 'block';
            authCard.style.opacity = '0';
            authCard.style.transform = 'translateY(20px)';
            authCard.style.transition = 'opacity 220ms ease-out, transform 220ms ease-out';
            
            // Trigger reflow
            void authCard.offsetHeight;
            
            authCard.style.opacity = '1';
            authCard.style.transform = 'translateY(0)';
            
            // Add overlay
            const overlay = document.createElement('div');
            overlay.className = 'auth-overlay';
            overlay.onclick = hideAuthCard;
            document.body.appendChild(overlay);
            
            // Prevent body scroll when auth card is open
            document.body.style.overflow = 'hidden';
        }
    }
    
    function hideAuthCard() {
        if (authCard) {
            authCard.style.opacity = '0';
            authCard.style.transform = 'translateY(20px)';
            
            // Remove overlay
            const overlay = document.querySelector('.auth-overlay');
            if (overlay) {
                overlay.remove();
            }
            
            // Re-enable body scroll
            document.body.style.overflow = '';
            
            // Hide after animation completes
            setTimeout(() => {
                if (authCard) {
                    authCard.style.display = 'none';
                    authCard.style.transform = '';
                }
            }, 220);
        }
    }
    
    // Make these functions globally available
    window.showAuthCard = showAuthCard;
    window.hideAuthCard = hideAuthCard;
    
    // Set up click handlers
    if (getStarted) {
        getStarted.addEventListener('click', showAuthCard);
    }
    
    // Close button in auth card
    const closeAuth = document.querySelector('.close-auth');
    if (closeAuth) {
        closeAuth.addEventListener('click', hideAuthCard);
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (btn.dataset.tab === 'student') {
                studentPanel.style.display = '';
                adminPanelBody.style.display = 'none';
            } else {
                studentPanel.style.display = 'none';
                adminPanelBody.style.display = '';
            }
        });
    });

    document.getElementById('landing-student-start').addEventListener('click', () => {
        const name = document.getElementById('landing-student-name').value.trim();
        
        if (!name) {
            // Add error state
            document.getElementById('landing-student-name').parentElement.classList.add('error');
            return;
        }
        
        // Remove error state if exists
        document.getElementById('landing-student-name').parentElement.classList.remove('error');
        
        // Set student name and proceed
        studentName = name;
        document.getElementById('landing-screen').style.display = 'none';
        document.getElementById('start-screen').style.display = 'flex';
        document.getElementById('student-name-input').value = studentName;
        hideAuthCard();
    });

    // Firebase Auth actions
    const emailEl = document.getElementById('landing-admin-email');
    const passEl = document.getElementById('landing-admin-pass');
    const openBtn = document.getElementById('landing-admin-open');
    const msg = document.createElement('div');
    msg.style.marginTop = '8px';
    msg.style.minHeight = '20px';
    adminPanelBody.appendChild(msg);

    const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = window.alphariaFirebase || {};
    function setMessage(text, good) {
        msg.textContent = text || '';
        msg.style.color = good ? '#00bfae' : '#ff8a80';
    }
    if (auth) {
        onAuthStateChanged(auth, (user) => {
            currentUser = user || null;
            if (user) {
                setMessage(`Signed in as ${user.email}`, true);
                // Go straight to dashboard; role select will decide access
                showDashboard();
            } else {
                openBtn.addEventListener('click', handleEmailPasswordLogin);
            }
        });
    } else {
        openBtn.addEventListener('click', () => showDashboard());
        setMessage('Firebase Auth not available in this context');
    }

    // Toggle between student and admin auth
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and show corresponding panel
            tab.classList.add('active');
            const panelId = `auth-${tab.getAttribute('data-tab')}`;
            document.getElementById(panelId).classList.add('active');
        });
    });
    
    // Toggle password visibility
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '<i class="far fa-eye-slash"></i>';
            } else {
                input.type = 'password';
                btn.innerHTML = '<i class="far fa-eye"></i>';
            }
        });
    });
    
    // Admin sign in/up
    document.getElementById('landing-admin-open').addEventListener('click', handleEmailPasswordLogin);
    
    // Handle Enter key in password field
    document.getElementById('landing-admin-pass')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleEmailPasswordLogin();
        }
    });
    
    // Social login handlers
    document.querySelector('.social-btn.google')?.addEventListener('click', handleGoogleSignIn);
    document.querySelector('.social-btn.microsoft')?.addEventListener('click', handleMicrosoftSignIn);
    
    // Sign up link
    document.querySelector('.auth-link[href="#signup"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        const adminTab = document.querySelector('.auth-tab[data-tab="admin"]');
        adminTab.click();
    });
    
    // Forgot password
    document.querySelector('.forgot-password')?.addEventListener('click', handleForgotPassword);
    
    // Logout button
    document.getElementById('dash-logout')?.addEventListener('click', handleLogout);
}

/**
 * Handle email/password login or signup
 */
async function handleEmailPasswordLogin() {
    const emailInput = document.getElementById('landing-admin-email');
    const passwordInput = document.getElementById('landing-admin-pass');
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Reset error states
    emailInput.parentElement.classList.remove('error');
    passwordInput.parentElement.classList.remove('error');
    
    // Validate inputs
    let isValid = true;
    if (!email) {
        emailInput.parentElement.classList.add('error');
        isValid = false;
    }
    if (!password) {
        passwordInput.parentElement.classList.add('error');
        isValid = false;
    }
    if (!isValid) return;
    
    // Show loading state
    const loginBtn = document.getElementById('landing-admin-open');
    const originalBtnText = loginBtn.innerHTML;
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
    
    try {
        // First try to sign in
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Import Firestore service
            const { UserService } = await import('./js/firestoreService.js');
            
            // Update last login time
            await UserService.updateUserProfile(user.uid, {
                lastLogin: new Date().toISOString()
            });
            
            // Get user profile
            const userProfile = await UserService.getUserProfile(user.uid);
            
            // Store user data in localStorage
            localStorage.setItem('currentUser', JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: userProfile?.displayName || user.displayName || email.split('@')[0],
                photoURL: userProfile?.photoURL || user.photoURL || '',
                role: userProfile?.role || 'student',
                emailVerified: user.emailVerified
            }));
            
            // Show success message
            showToast(`👋 Welcome back, ${userProfile?.displayName || email.split('@')[0]}!`, 'success');
            
            // Redirect to dashboard after a short delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
            
        } catch (loginError) {
            console.log('Login failed, trying signup...', loginError);
            
            // If user not found, try to create a new account
            if (loginError.code === 'auth/user-not-found' || loginError.code === 'auth/wrong-password') {
                try {
                    // Create the user in Firebase Auth
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                    
                    // Create user profile data
                    const userProfile = {
                        uid: user.uid,
                        email: user.email,
                        displayName: email.split('@')[0],
                        photoURL: '',
                        emailVerified: user.emailVerified,
                        role: 'student', // Default role
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        lastLogin: new Date().toISOString()
                    };
                    
                    // Import Firestore service
                    const { UserService } = await import('./js/firestoreService.js');
                    
                    // Create user document in Firestore
                    await UserService.createUserProfile(user.uid, userProfile);
                    
                    // Update user profile in Firebase Auth
                    await updateProfile(user, {
                        displayName: userProfile.displayName,
                        photoURL: userProfile.photoURL
                    });
                    
                    // Store user data in localStorage
                    localStorage.setItem('currentUser', JSON.stringify({
                        uid: user.uid,
                        email: user.email,
                        displayName: userProfile.displayName,
                        photoURL: userProfile.photoURL,
                        role: userProfile.role,
                        emailVerified: user.emailVerified
                    }));
                    
                    // Show success message
                    showToast('🎉 Welcome to Alpharia! Your account has been created successfully.', 'success');
                    
                    // Redirect to dashboard after a short delay
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1500);
                    
                } catch (signUpError) {
                    console.error('Sign up error:', signUpError);
                    
                    // Handle specific error cases
                    let errorMessage = 'An error occurred during sign up. Please try again.';
                    
                    if (signUpError.code === 'auth/email-already-in-use') {
                        errorMessage = 'This email is already registered. Please sign in instead.';
                    } else if (signUpError.code === 'auth/weak-password') {
                        errorMessage = 'Password should be at least 6 characters long.';
                    } else if (signUpError.code === 'auth/invalid-email') {
                        errorMessage = 'Please enter a valid email address.';
                    }
                    
                    // Show error message
                    showToast(errorMessage, 'error');
                }
            } else {
                // Handle other login errors
                let errorMessage = 'An error occurred during login. Please try again.';
                
                if (loginError.code === 'auth/wrong-password') {
                    errorMessage = 'Incorrect password. Please try again.';
                } else if (loginError.code === 'auth/too-many-requests') {
                    errorMessage = 'Too many failed attempts. Please try again later or reset your password.';
                } else if (loginError.code === 'auth/user-disabled') {
                    errorMessage = 'This account has been disabled. Please contact support.';
                }
                
                showToast(errorMessage, 'error');
            }
        }
    } finally {
        // Reset button state if still on login page
        if (window.location.pathname.endsWith('index.html') || 
            window.location.pathname === '/') {
            loginBtn.disabled = false;
            loginBtn.innerHTML = originalBtnText;
        }
    }
}

/**
 * Handle Google Sign In
 */
async function handleGoogleSignIn() {
    try {
        const btn = document.querySelector('.social-btn.google');
        const originalBtnText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
        
        await signInWithGoogle();
        // Success - handled by auth state change
    } catch (error) {
        console.error('Google sign in error:', error);
        showAuthError(getAuthErrorMessage(error.code));
    }
}

/**
 * Handle Microsoft Sign In
 */
async function handleMicrosoftSignIn() {
    try {
        const btn = document.querySelector('.social-btn.microsoft');
        const originalBtnText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
        
        await signInWithMicrosoft();
        // Success - handled by auth state change
    } catch (error) {
        console.error('Microsoft sign in error:', error);
        showAuthError(getAuthErrorMessage(error.code));
    }
}

/**
 * Handle Forgot Password
 */
async function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = prompt('Please enter your email address to reset your password:');
    if (!email) return;
    
    try {
        await sendPasswordResetEmail(auth, email);
        showToast('Password reset email sent. Please check your inbox.');
    } catch (error) {
        console.error('Password reset error:', error);
        showAuthError(getAuthErrorMessage(error.code));
    }
}

/**
 * Handle User Logout
 */
async function handleLogout() {
    try {
        await signOut(auth);
        // Sign-out successful
        currentUser = null;
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('landing-screen').style.display = 'block';
        resetAllStates();
        hideAuthCard();
        showToast('You have been signed out successfully.');
    } catch (error) {
        console.error('Error signing out:', error);
        showAuthError('Failed to sign out. Please try again.');
    }
}

/**
 * Get user-friendly error messages
 */
function getAuthErrorMessage(errorCode) {
    const messages = {
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/user-disabled': 'This account has been disabled.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/email-already-in-use': 'An account already exists with this email.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/account-exists-with-different-credential': 'An account already exists with the same email but different sign-in credentials.',
        'auth/popup-closed-by-user': 'Sign in was cancelled.',
        'auth/operation-not-allowed': 'This operation is not allowed.',
        'auth/too-many-requests': 'Too many requests. Please try again later.',
        'default': 'An error occurred. Please try again.'
    };
    
    return messages[errorCode] || messages['default'];
}

/**
 * Show a toast notification
 */
function showToast(message, type = 'success') {
    // Remove any existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close">&times;</button>
    `;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Auto-remove after delay
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }, 100);
    
    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });
}

function renderAdminAttempts() {
    const listEl = document.getElementById('admin-attempts');
    if (!listEl) return;
    const attempts = JSON.parse(localStorage.getItem('alpharia_attempts') || '[]');
    if (attempts.length === 0) {
        listEl.innerHTML = '<div>No attempts saved yet.</div>';
        return;
    }
    listEl.innerHTML = attempts.map(a => {
        return `<div class='detail-cell' style='margin-bottom:8px;'>
            <div><b>Student:</b> ${a.student}</div>
            <div><b>Date:</b> ${new Date(a.timestamp).toLocaleString()}</div>
            <div><b>Final:</b> ${a.final}</div>
        </div>`;
    }).join('');
}
function saveAttemptSummary() {
    const { summary, totalCorrect, totalItems } = computeSummary();
    const attempts = JSON.parse(localStorage.getItem('alpharia_attempts') || '[]');
    attempts.push({
        userId: currentUser ? currentUser.uid : null,
        userEmail: currentUser ? currentUser.email : null,
        role: currentRole,
        student: studentName,
        timestamp: Date.now(),
        summary,
        final: `${totalCorrect} / ${totalItems} (${totalItems ? Math.round((totalCorrect/totalItems)*100) : 0}%)`
    });
    localStorage.setItem('alpharia_attempts', JSON.stringify(attempts));
}
// --- Speech Utilities ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
function ensureRecognition() {
    if (!recognition && SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    }
    return recognition;
}
export function speakText(text) {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    speechSynthesis.speak(utter);
}
function recognizeOnce() {
    return new Promise((resolve) => {
        const rec = ensureRecognition();
        if (!rec) return resolve({ transcript: '', success: false });
        rec.onresult = (e) => {
            const transcript = e.results[0][0].transcript.trim();
            resolve({ transcript, success: true });
        };
        rec.onerror = () => resolve({ transcript: '', success: false });
        rec.onend = () => {};
        try { rec.start(); } catch (_) { resolve({ transcript: '', success: false }); }
    });
}
// Helper compare
function stringAccuracySpoken(expected, spoken) {
    const ex = expected.toLowerCase().trim();
    const sp = (spoken || '').toLowerCase().trim();
    if (!ex) return 0;
    if (!sp) return 0;
    if (ex === sp) return 100;
    // word-level match percentage
    const eWords = ex.split(/\s+/);
    const sWords = sp.split(/\s+/);
    let match = 0;
    for (let i = 0; i < eWords.length; i++) {
        if (sWords[i] && sWords[i] === eWords[i]) match++;
    }
    return Math.round((match / eWords.length) * 100);
}
// Amend section renderers to include mic capture (button) and store transcript
function addMicAndOverrideUI(parent, onRecognized) {
    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.justifyContent = 'center';
    controls.style.gap = '10px';
    controls.style.marginBottom = '12px';

    const micBtn = document.createElement('button');
    micBtn.className = 'reshuffle-btn';
    micBtn.textContent = '🎤 Speak';
    micBtn.onclick = async () => {
        const result = await recognizeOnce();
        onRecognized(result.transcript);
    };
    controls.appendChild(micBtn);

    const correctBtn = document.createElement('button');
    correctBtn.className = 'reshuffle-btn';
    correctBtn.textContent = 'Mark Correct';
    correctBtn.onclick = () => onRecognized('__OVERRIDE_CORRECT__');
    controls.appendChild(correctBtn);

    const incorrectBtn = document.createElement('button');
    incorrectBtn.className = 'reshuffle-btn';
    incorrectBtn.textContent = 'Mark Incorrect';
    incorrectBtn.onclick = () => onRecognized('__OVERRIDE_INCORRECT__');
    controls.appendChild(incorrectBtn);

    parent.appendChild(controls);
}
// Inject into renderUppercaseSection
function renderUppercaseSection(isTestFlow) {
    const section = document.getElementById('section-content');
    section.innerHTML = '';
    // mic & override
    addMicAndOverrideUI(section, (transcript) => {
        const letter = uppercaseState.order[uppercaseState.current];
        if (transcript === '__OVERRIDE_CORRECT__') uppercaseState.results[letter] = 'correct';
        else if (transcript === '__OVERRIDE_INCORRECT__') uppercaseState.results[letter] = 'incorrect';
        else {
            const acc = stringAccuracySpoken(letter, transcript);
            uppercaseState.results[letter] = acc >= 80 ? 'correct' : 'incorrect';
        }
        renderUppercaseSection(isTestFlow);
    });
    // ... existing code ...
}
// Inject into renderLowercaseSection
function renderLowercaseSection(isTestFlow) {
    const section = document.getElementById('section-content');
    section.innerHTML = '';
    addMicAndOverrideUI(section, (transcript) => {
        const letter = lowercaseState.order[lowercaseState.current];
        if (transcript === '__OVERRIDE_CORRECT__') lowercaseState.results[letter] = 'correct';
        else if (transcript === '__OVERRIDE_INCORRECT__') lowercaseState.results[letter] = 'incorrect';
        else {
            const acc = stringAccuracySpoken(letter, transcript);
            lowercaseState.results[letter] = acc >= 80 ? 'correct' : 'incorrect';
        }
        renderLowercaseSection(isTestFlow);
    });
    // ... existing code ...
}
// Inject into renderSentenceFilterSection
function renderSentenceFilterSection(isTestFlow) {
    const section = document.getElementById('section-content');
    section.innerHTML = '';
    addMicAndOverrideUI(section, (transcript) => {
        const idx = sentenceFilterState.order[sentenceFilterState.current];
        const expected = SENTENCE_FILTER[idx];
        if (transcript === '__OVERRIDE_CORRECT__') sentenceFilterState.results[idx] = 'correct';
        else if (transcript === '__OVERRIDE_INCORRECT__') sentenceFilterState.results[idx] = 'incorrect';
        else {
            const acc = stringAccuracySpoken(expected, transcript);
            sentenceFilterState.results[idx] = acc >= 80 ? 'correct' : 'incorrect';
        }
        renderSentenceFilterSection(isTestFlow);
    });
    // ... existing code ...
}
// Inject into renderWordListSection
function renderWordListSection(listKey, isTestFlow) {
    const words = WORD_LISTS[listKey];
    const state = wordListStates[listKey];
    const section = document.getElementById('section-content');
    section.innerHTML = '';
    addMicAndOverrideUI(section, (transcript) => {
        const word = state.order[state.current];
        if (transcript === '__OVERRIDE_CORRECT__') state.results[word] = 'correct';
        else if (transcript === '__OVERRIDE_INCORRECT__') state.results[word] = 'incorrect';
        else {
            const acc = stringAccuracySpoken(word, transcript);
            state.results[word] = acc >= 80 ? 'correct' : 'incorrect';
        }
        renderWordListSection(listKey, isTestFlow);
    });
    // ... existing code ...
}
// Save attempt when final report displayed
function showFinalReport() {
    // ... existing code ...
    saveAttemptSummary();
    // ... existing code ...
}
// --- Init ---
window.onload = async () => {
    try {
        // Initialize UI components
        setupLanding();
        setupStartScreen();
        setupThemeToggle();
        
        // Check if user is already logged in
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (currentUser && currentUser.uid) {
            // If user is already logged in, show dashboard
            await showDashboard();
            return;
        }
        
        // Initialize application states
        initializeAppStates();
        
        // Show landing page for new visitors
        document.getElementById('landing-screen').style.display = 'block';
        
    } catch (error) {
        console.error('Initialization error:', error);
        showToast('An error occurred during initialization', 'error');
    }
};

function initializeAppStates() {
    // Initialize all application states
    uppercaseState.order = shuffle(UPPERCASE_LETTERS);
    uppercaseState.results = {};
    uppercaseState.current = 0;
    
    lowercaseState.order = shuffle(LOWERCASE_LETTERS);
    lowercaseState.results = {};
    lowercaseState.current = 0;
    
    sentenceFilterState.order = shuffle([...Array(SENTENCE_FILTER.length).keys()]);
    sentenceFilterState.results = {};
    sentenceFilterState.current = 0;
    
    for (const key in WORD_LISTS) {
        wordListStates[key].order = shuffle(WORD_LISTS[key]);
        wordListStates[key].results = {};
        wordListStates[key].current = 0;
    }
    
    for (const key in PASSAGES) {
        passageStates[key].order = shuffle([...Array(PASSAGES[key].length).keys()]);
        passageStates[key].results = {};
        passageStates[key].current = 0;
    }
}

async function showDashboard() {
    try {
        const dash = document.getElementById('dashboard');
        const landing = document.getElementById('landing-screen');
        
        // Hide landing and show dashboard
        if (landing) landing.style.display = 'none';
        if (dash) dash.style.display = 'block';
        
        // Update user info in dashboard
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const dashUser = document.getElementById('dashboard-user');
        if (dashUser) {
            dashUser.textContent = currentUser.email ? `Signed in as ${currentUser.displayName || currentUser.email}` : 'Welcome Guest';
        }
        
        // Load dashboard content based on user role
        if (currentUser.role === 'teacher') {
            // Load teacher dashboard
            await loadTeacherDashboard();
        } else {
            // Load student dashboard
            await loadStudentDashboard();
        }
        
        // Initialize any dashboard-specific components
        initializeDashboardComponents();
        
    } catch (error) {
        console.error('Error showing dashboard:', error);
        showToast('Failed to load dashboard', 'error');
    }
    const roleSel = document.getElementById('role-select');
    roleSel.value = currentRole;
    const allBtn = document.getElementById('dash-all-tests');
    allBtn.style.display = currentRole === 'teacher' ? '' : 'none';
    roleSel.onchange = () => {
        currentRole = roleSel.value;
        localStorage.setItem('alpharia_role', currentRole);
        allBtn.style.display = currentRole === 'teacher' ? '' : 'none';
    };

    document.getElementById('dash-take-test').onclick = () => {
        // Prompt for student display name for reports
        const startOverlay = document.getElementById('start-screen');
        startOverlay.style.display = '';
        const input = document.getElementById('student-name-input');
        input.value = '';
        input.focus();
    };
    document.getElementById('dash-my-tests').onclick = () => renderDashMyTests();
    document.getElementById('dash-all-tests').onclick = () => renderDashAllTests();

    const { auth, signOut } = window.alphariaFirebase || {};
    document.getElementById('dash-logout').onclick = async () => {
        if (auth) { try { await signOut(auth); } catch (_) {} }
        currentUser = null;
        dash.style.display = 'none';
        landing.style.display = '';
    };

    renderDashMyTests();
}
function getAttempts() {
    return JSON.parse(localStorage.getItem('alpharia_attempts') || '[]');
}
function renderDashMyTests() {
    const box = document.getElementById('dash-list');
    const attempts = getAttempts().filter(a => a.userId === (currentUser && currentUser.uid));
    if (attempts.length === 0) { box.innerHTML = '<div>No attempts yet.</div>'; return; }
    box.innerHTML = attempts.map(a => `<div class='detail-cell'><b>${a.student}</b> • ${new Date(a.timestamp).toLocaleString()} • ${a.final}</div>`).join('');
}
function renderDashAllTests() {
    const box = document.getElementById('dash-list');
    const attempts = getAttempts();
    if (attempts.length === 0) { box.innerHTML = '<div>No attempts yet.</div>'; return; }
    box.innerHTML = attempts.map(a => `<div class='detail-cell'><b>${a.student}</b> • ${a.userEmail || ''} • ${new Date(a.timestamp).toLocaleString()} • ${a.final}</div>`).join('');
}

// ... existing code ...
window.revealAuthCard = function () {
    const card = document.getElementById('landing-auth-card');
    if (card) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 220ms ease-out';
    }
};
// ... existing code ...
