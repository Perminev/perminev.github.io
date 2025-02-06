const verbs = [
    { infinitive: "arise", past: "arose", participle: "arisen" },
    { infinitive: "be", past: "was/were", participle: "been" },
    { infinitive: "bear", past: "bore", participle: "borne" },
    { infinitive: "beat", past: "beat", participle: "beaten" },
    { infinitive: "become", past: "became", participle: "become" },
    { infinitive: "begin", past: "began", participle: "begun" },
    { infinitive: "bend", past: "bent", participle: "bent" },
    { infinitive: "bet", past: "bet", participle: "bet" },
    { infinitive: "bid", past: "bid", participle: "bid" },
    { infinitive: "bind", past: "bound", participle: "bound" },
    { infinitive: "bite", past: "bit", participle: "bitten" },
    { infinitive: "bleed", past: "bled", participle: "bled" },
    { infinitive: "blow", past: "blew", participle: "blown" },
    { infinitive: "break", past: "broke", participle: "broken" },
    { infinitive: "bring", past: "brought", participle: "brought" },
    { infinitive: "build", past: "built", participle: "built" },
    { infinitive: "buy", past: "bought", participle: "bought" },
    { infinitive: "catch", past: "caught", participle: "caught" },
    { infinitive: "choose", past: "chose", participle: "chosen" },
    { infinitive: "come", past: "came", participle: "come" },
    { infinitive: "cost", past: "cost", participle: "cost" },
    { infinitive: "creep", past: "crept", participle: "crept" },
    { infinitive: "cut", past: "cut", participle: "cut" },
    { infinitive: "deal", past: "dealt", participle: "dealt" },
    { infinitive: "dig", past: "dug", participle: "dug" },
    { infinitive: "do", past: "did", participle: "done" },
    { infinitive: "draw", past: "drew", participle: "drawn" },
    { infinitive: "drink", past: "drank", participle: "drunk" },
    { infinitive: "drive", past: "drove", participle: "driven" },
    { infinitive: "eat", past: "ate", participle: "eaten" },
    { infinitive: "fall", past: "fell", participle: "fallen" },
    { infinitive: "feed", past: "fed", participle: "fed" },
    { infinitive: "feel", past: "felt", participle: "felt" },
    { infinitive: "fight", past: "fought", participle: "fought" },
    { infinitive: "find", past: "found", participle: "found" },
    { infinitive: "fly", past: "flew", participle: "flown" },
    { infinitive: "forget", past: "forgot", participle: "forgotten" },
    { infinitive: "forgive", past: "forgave", participle: "forgiven" },
    { infinitive: "freeze", past: "froze", participle: "frozen" },
    { infinitive: "get", past: "got", participle: "gotten" },
    { infinitive: "give", past: "gave", participle: "given" },
    { infinitive: "go", past: "went", participle: "gone" },
    { infinitive: "grow", past: "grew", participle: "grown" },
    { infinitive: "hang", past: "hung", participle: "hung" },
    { infinitive: "have", past: "had", participle: "had" },
    { infinitive: "hear", past: "heard", participle: "heard" },
    { infinitive: "hide", past: "hid", participle: "hidden" },
    { infinitive: "hit", past: "hit", participle: "hit" },
    { infinitive: "hold", past: "held", participle: "held" },
    { infinitive: "hurt", past: "hurt", participle: "hurt" },
    { infinitive: "keep", past: "kept", participle: "kept" },
    { infinitive: "know", past: "knew", participle: "known" },
    { infinitive: "learn", past: "learnt", participle: "learnt" },
    { infinitive: "leave", past: "left", participle: "left" },
    { infinitive: "lend", past: "lent", participle: "lent" },
    { infinitive: "let", past: "let", participle: "let" },
    { infinitive: "lie", past: "lay", participle: "lain" },
    { infinitive: "lose", past: "lost", participle: "lost" },
    { infinitive: "make", past: "made", participle: "made" },
    { infinitive: "mean", past: "meant", participle: "meant" },
    { infinitive: "meet", past: "met", participle: "met" },
    { infinitive: "pay", past: "paid", participle: "paid" },
    { infinitive: "put", past: "put", participle: "put" },
    { infinitive: "read", past: "read", participle: "read" }, // произносится как "red"
    { infinitive: "ride", past: "rode", participle: "ridden" },
    { infinitive: "ring", past: "rang", participle: "rung" },
    { infinitive: "rise", past: "rose", participle: "risen" },
    { infinitive: "run", past: "ran", participle: "run" },
    { infinitive: "say", past: "said", participle: "said" },
    { infinitive: "see", past: "saw", participle: "seen" },
    { infinitive: "sell", past: "sold", participle: "sold" },
    { infinitive: "send", past: "sent", participle: "sent" },
    { infinitive: "set", past: "set", participle: "set" },
    { infinitive: "shake", past: "shook", participle: "shaken" },
    { infinitive: "shine", past: "shone", participle: "shone" },
    { infinitive: "shoot", past: "shot", participle: "shot" },
    { infinitive: "show", past: "showed", participle: "shown" },
    { infinitive: "shut", past: "shut", participle: "shut" },
    { infinitive: "sing", past: "sang", participle: "sung" },
    { infinitive: "sink", past: "sank", participle: "sunk" },
    { infinitive: "sit", past: "sat", participle: "sat" },
    { infinitive: "sleep", past: "slept", participle: "slept" },
    { infinitive: "speak", past: "spoke", participle: "spoken" },
    { infinitive: "spend", past: "spent", participle: "spent" },
    { infinitive: "stand", past: "stood", participle: "stood" },
    { infinitive: "steal", past: "stole", participle: "stolen" },
    { infinitive: "stick", past: "stuck", participle: "stuck" },
    { infinitive: "strike", past: "struck", participle: "struck" },
    { infinitive: "swim", past: "swam", participle: "swum" },
    { infinitive: "take", past: "took", participle: "taken" },
    { infinitive: "teach", past: "taught", participle: "taught" },
    { infinitive: "tear", past: "tore", participle: "torn" },
    { infinitive: "tell", past: "told", participle: "told" },
    { infinitive: "think", past: "thought", participle: "thought" },
    { infinitive: "throw", past: "threw", participle: "thrown" },
    { infinitive: "understand", past: "understood", participle: "understood" },
    { infinitive: "wake", past: "woke", participle: "woken" },
    { infinitive: "wear", past: "wore", participle: "worn" },
    { infinitive: "win", past: "won", participle: "won" },
    { infinitive: "write", past: "wrote", participle: "written" }
];


function searchVerb() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const verbList = document.getElementById('verbList');
    verbList.innerHTML = '';

    const filteredVerbs = verbs.filter(verb => 
        verb.infinitive.startsWith(input) || 
        verb.past.startsWith(input) || 
        verb.participle.startsWith(input)
    );

    filteredVerbs.forEach(verb => {
        const li = document.createElement('li');
        li.className = 'verbItem';
        li.innerHTML = `<span>${verb.infinitive}</span> ${verb.past} / ${verb.participle}`;
        verbList.appendChild(li);
    });
}

function searchVerbtwo() {
    const input = document.getElementById('searchvtwolInput').value.toLowerCase();
    const verbList = document.getElementById('verbList');
    const verbListt = document.getElementById('verbListt');
    
    // Очистка обоих списков перед добавлением новых элементов
    verbList.innerHTML = '';
    verbListt.innerHTML = '';

    const filteredVerbs = verbs.filter(verb => 
        verb.infinitive.startsWith(input) || 
        verb.past.startsWith(input) || 
        verb.participle.startsWith(input)
    );

    // Добавляем только элементы в verbList для прошедшей формы
    filteredVerbs.forEach(verb => {
        const li = document.createElement('li');
        li.className = 'verbItem';
        li.innerHTML = `${verb.past}`;
        verbList.appendChild(li);
    });

    // Добавляем только элементы в verbListt для причастия
    filteredVerbs.forEach(verb => {
        const li = document.createElement('li');
        li.className = 'verbItem2';
        li.innerHTML = `${verb.participle}`;
        verbListt.appendChild(li);
    });

    const searchvtwolInput = document.getElementById('searchvtwolInput');
    
    searchvtwolInput.addEventListener('input', () => {
        searchvtwolInput.style.color = 'black';
    });
}
