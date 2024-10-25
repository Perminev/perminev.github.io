const verbs = [
    { infinitive: "understand", past: "understood", participle: "understood" },
    { infinitive: "go", past: "went", participle: "gone" },
    { infinitive: "write", past: "wrote", participle: "written" },
    // Добавьте другие глаголы по необходимости
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
    verbList.innerHTML = '';
    verbListt.innerHTML = '';

    const filteredVerbs = verbs.filter(verb => 
        verb.infinitive.startsWith(input) || 
        verb.past.startsWith(input) || 
        verb.participle.startsWith(input)
    );

    filteredVerbs.forEach(verb => {
        const li = document.createElement('li');
        li.className = 'verbItem';
        li.innerHTML = `${verb.past}`;
        verbList.appendChild(li);
    });
    filteredVerbs.forEach(verb => {
        const li = document.createElement('li');
        li.className = 'verbItem2';
        li.innerHTML = `${verb.participle}`;
        verbList.appendChild(li);
    });
    
    const searchvtwolInput = document.getElementById('searchvtwolInput');
    
    searchvtwolInput.addEventListener('input', () => {
        searchvtwolInput.style.color = 'black';
    });

}

