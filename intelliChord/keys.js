const circle_container = document.querySelector(".circle-container");
const circle_text = document.querySelector(".circle-text");
const left_btn = document.querySelector(".left-btn");
const right_btn = document.querySelector(".right-btn");
const key_selectEl = document.querySelector(".key-select");
const progression_selectEl = document.querySelector(".progression-select");
const progression_descriptionEl = document.querySelector(
  ".progression-description"
);
const selected_progression_container = document.querySelector(
  ".selected-progression-container"
);

let rotationIndex = 0;
let active_key = {};

const majorKeys = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "G♭",
  "D♭",
  "A♭",
  "E♭",
  "B♭",
  "F",
];

const minorKeys = [
  "Cm",
  "Gm",
  "Dm",
  "Am",
  "Em",
  "Bm",
  "F♯m",
  "C♯m",
  "G♯m",
  "D♯m",
  "B♭m",
  "Fm",
];

const diminished_chords = [
  "B°",
  "F♯°",
  "C♯°",
  "G♯°",
  "D♯°",
  "A♯°",
  "E♯°",
  "C°",
  "G°",
  "D°",
  "A°",
  "E°",
];

const progressions = [
  {
    name: "Full Scale",
    numbers: [1, 2, 3, 4, 5, 6, 7],
    style: "All seven diatonic chords in order.",
  },
  {
    name: "Basic Three-Chord",
    numbers: [1, 4, 5],
    style:
      "One of the most foundational progressions in Western music — used in blues, folk, rock, and country.",
  },
  {
    name: "Pop Gold",
    numbers: [1, 5, 6, 4],
    style:
      "A modern pop staple found in countless chart-topping songs across decades.",
  },
  {
    name: "Cinematic Loop",
    numbers: [6, 4, 1, 5],
    style:
      "An emotional, cinematic sequence often heard in pop ballads and soundtrack music.",
  },
  {
    name: "Jazz Turnaround",
    numbers: [2, 5, 1],
    style:
      "A jazz essential — the gold standard for creating smooth, resolved harmonic motion.",
  },
  {
    name: "50s Progression",
    numbers: [1, 6, 4, 5],
    style:
      "The “50s progression” — think doo-wop, oldies, nostalgic sounds from the golden era.",
  },
  {
    name: "Dark Minor Drive",
    numbers: [1, 6, 3, 7],
    style:
      "A dark, powerful minor key progression — common in rock, cinematic, and emotional music.",
  },
  {
    name: "Folk Stomp",
    numbers: [1, 4, 1, 5],
    style:
      "A simple folk-style pattern found in acoustic, country, and traditional roots music.",
  },
  {
    name: "Canon Style",
    numbers: [1, 5, 6, 3, 4, 1, 4, 5],
    style:
      "Elegant and flowing, this sequence mirrors the famous Canon in D and works well in romantic, classical, or wedding settings.",
  },
];

configureKeySelectionUI();

// event listeners

left_btn.addEventListener("click", () => {
  rotate(-1);
  key_selectEl.value = majorKeys[rotationIndex];
});

right_btn.addEventListener("click", () => {
  rotate(1);
  key_selectEl.value = majorKeys[rotationIndex];
});

key_selectEl.addEventListener("change", (e) => {
  let key_name_value = key_selectEl.value;
  const index = majorKeys.indexOf(key_name_value);
  rotationIndex = index;
  renderCircle();
});

progression_selectEl.addEventListener("change", () => {
  const targetName = progression_selectEl.value;

  const match = progressions.find((p) => p.name === targetName);

  if (match) {
    const newProgression = match.numbers; // → [1, 5, 6, 3, 4, 1, 4, 5]
    const newDescription = match.style;
    renderProgressions(newProgression, newDescription);
  } else {
    console.log("No match found.");
  }
});

// set note selection ui based on available keys
function configureKeySelectionUI() {
  const availableKeys = majorKeys;
  availableKeys.forEach((key) => {
    const newOption = document.createElement("option");
    newOption.innerText = key;
    key_selectEl.appendChild(newOption);
  });
}

function renderCircle() {
  // create lines

  for (let i = 0; i < 6; i++) {
    const lineEl = document.createElement("div");
    lineEl.classList.add("line");
    lineEl.style.transform = `rotate(${30 * i + 15}deg)`;
    circle_container.appendChild(lineEl);
  }

  circle_text.innerHTML = "";
  majorKeys.forEach((key, i) => {
    const angle = ((i - rotationIndex + 12) % 12) * (360 / 12);
    // major wedges
    const wedge = document.createElement("div");
    wedge.className = "major-wedge";
    if (angle === 0) {
      wedge.classList.add("active");
      wedge.classList.add("one-chord");
      wedge.style.transform = `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg) translate(-50%, -50%)`;
      active_key[1] = key;
    } else if (angle === 30) {
      wedge.classList.add("active");
      wedge.classList.add("five-chord");
      wedge.style.transform = `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg) translate(-50%, -50%)`;
      active_key[5] = key;
    } else if (angle === 330) {
      wedge.classList.add("active");
      wedge.classList.add("four-chord");
      wedge.style.transform = `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg) translate(-50%, -50%)`;
      active_key[4] = key;
    } else {
      wedge.style.transform = `rotate(${angle}deg) translateY(-175px) rotate(-${angle}deg) translate(-50%, -50%)`;
    }
    wedge.innerText = key;
    circle_text.appendChild(wedge);

    // minor wedges
    const minorWedge = document.createElement("div");
    minorWedge.className = "minor-wedge";

    let minorWedge_idx = i + 3;
    if (minorWedge_idx >= minorKeys.length) {
      minorWedge_idx = i - 9;
    }

    if (angle === 0) {
      minorWedge.classList.add("active");
      minorWedge.classList.add("six-chord");
      minorWedge.style.transform = `rotate(${angle}deg) translateY(-130px) rotate(-${angle}deg) translate(-50%, -50%)`;
      active_key[6] = minorKeys[minorWedge_idx];
    } else if (angle === 30) {
      minorWedge.classList.add("active");
      minorWedge.classList.add("three-chord");
      minorWedge.style.transform = `rotate(${angle}deg) translateY(-130px) rotate(-${angle}deg) translate(-50%, -50%)`;
      active_key[3] = minorKeys[minorWedge_idx];
    } else if (angle === 330) {
      minorWedge.classList.add("active");
      minorWedge.classList.add("two-chord");
      minorWedge.style.transform = `rotate(${angle}deg) translateY(-130px) rotate(-${angle}deg) translate(-50%, -50%)`;
      active_key[2] = minorKeys[minorWedge_idx];
    } else {
      minorWedge.style.transform = `rotate(${angle}deg) translateY(-125px) rotate(-${angle}deg) translate(-50%, -50%)`;
    }

    minorWedge.innerText = minorKeys[minorWedge_idx];
    circle_text.appendChild(minorWedge);

    // dimminished wedges
    let dimminishedWedge_idx = i;
    if (dimminishedWedge_idx >= diminished_chords.length) {
      dimminishedWedge_idx = i - 9;
    }
    const dimminishedWedge = document.createElement("div");
    dimminishedWedge.className = "dimminished-wedge";
    if (i === rotationIndex % 12) {
      dimminishedWedge.classList.add("active");
      dimminishedWedge.classList.add("seven-chord");
      active_key[7] = diminished_chords[dimminishedWedge_idx];
    }
    dimminishedWedge.style.transform = `rotate(${angle}deg) translateY(-75px) rotate(-${angle}deg) translate(-50%, -50%)`;

    dimminishedWedge.innerText = diminished_chords[dimminishedWedge_idx];
    circle_text.appendChild(dimminishedWedge);
  });

  renderProgressions(progressions[0].numbers, progressions[0].style);
}

renderCircle();
setProgressionTypes();

function rotate(dir) {
  rotationIndex = (rotationIndex + dir + 12) % 12;
  renderCircle();
}

function setProgressionTypes() {
  //remove all existing option entries
  progression_selectEl.innerHTML = "";

  for (const key of Object.keys(progressions)) {
    const name = progressions[key].name;
    const newOption = document.createElement("option");
    newOption.innerText = name;
    progression_selectEl.appendChild(newOption);
  }
}

function parseProgressions() {
  const progressionSet = new Set();
  const noteTypeMap = {};

  for (const key of Object.keys(progressions)) {
    const name = progressions[key].name;

    // Add note to the set
    progressionSet.add(note);

    // Initialize array if note not seen before
    if (!noteTypeMap[note]) {
      noteTypeMap[note] = [];
    }

    // Normalize empty string (used for major chords)
    const chordType = type || "major";

    // Add type if it's not already in the list
    if (!noteTypeMap[note].includes(chordType)) {
      noteTypeMap[note].push(chordType);
    }
  }
}

function renderProgressions(progression, description) {
  selected_progression_container.innerHTML = "";
  progression_descriptionEl.innerText = description;
  progression.forEach((num) => {
    const noteEl = document.createElement("div");
    noteEl.className = `keyNote keyNote-${num}`;
    noteEl.textContent = active_key[num];
    selected_progression_container.appendChild(noteEl);
  });
}
