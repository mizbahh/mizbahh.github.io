const cache = {};

const input = document.getElementById('pokemon-input');
const findBtn = document.getElementById('find-btn');
const errorMsg = document.getElementById('error-msg');
const pokemonSection = document.getElementById('pokemon-section');
const pokemonImg = document.getElementById('pokemon-img');
const pokemonAudio = document.getElementById('pokemon-audio');
const moveSelects = [
  document.getElementById('move1'),
  document.getElementById('move2'),
  document.getElementById('move3'),
  document.getElementById('move4')
];
const addBtn = document.getElementById('add-btn');
const teamDisplay = document.getElementById('team-display');

let currentPokemon = null;

findBtn.addEventListener('click', fetchPokemon);
input.addEventListener('keydown', (e) => { if (e.key === 'Enter') fetchPokemon(); });

async function fetchPokemon() {
  const query = input.value.trim().toLowerCase();
  if (!query) return;

  errorMsg.textContent = '';
  pokemonSection.style.display = 'none';

  if (cache[query]) {
    displayPokemon(cache[query]);
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (!response.ok) throw new Error('Pokemon not found');
    const data = await response.json();
    cache[query] = data;
    displayPokemon(data);
  } catch (err) {
    errorMsg.textContent = 'Pokemon not found. Try a different name or ID.';
  }
}

function displayPokemon(data) {
  currentPokemon = data;

  pokemonImg.src = data.sprites.front_default || '';
  pokemonImg.alt = data.name;

  const cry = data.cries?.latest || data.cries?.legacy || '';
  pokemonAudio.src = cry;

  const moves = data.moves.map(m => m.move.name);
  moveSelects.forEach(select => {
    select.innerHTML = '';
    moves.forEach(moveName => {
      const option = document.createElement('option');
      option.value = moveName;
      option.textContent = moveName;
      select.appendChild(option);
    });
  });

  pokemonSection.style.display = 'block';
}

addBtn.addEventListener('click', () => {
  if (!currentPokemon) return;

  const selectedMoves = moveSelects.map(s => s.value);
  const member = document.createElement('div');
  member.className = 'team-member';

  const img = document.createElement('img');
  img.src = currentPokemon.sprites.front_default || '';
  img.alt = currentPokemon.name;

  const info = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = currentPokemon.name;

  const ul = document.createElement('ul');
  selectedMoves.forEach(move => {
    const li = document.createElement('li');
    li.textContent = move;
    ul.appendChild(li);
  });

  info.appendChild(name);
  info.appendChild(ul);
  member.appendChild(img);
  member.appendChild(info);
  teamDisplay.appendChild(member);
});
