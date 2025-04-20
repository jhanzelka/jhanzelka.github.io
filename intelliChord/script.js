import { chords } from "./chords.js";

const notes = document.querySelectorAll(".note");
const string_notes = document.querySelectorAll(".string-note");
const strings = document.querySelectorAll(".string");
const chord_nameEl = document.querySelector(".chord-name h1");
const info_container = document.querySelector(".info-container");
const chord_noteEl = document.getElementById("chord-note");
const chord_typeEl = document.getElementById("chord-type");
const fret_numbers = document.querySelectorAll(".fret-numbers");
const scroll_wrapper = document.querySelector(".scroll-wrapper");
const info_icon = document.querySelector(".chord-name i");
const shape_left = document.querySelector(".shape-left");
const shape_right = document.querySelector(".shape-right");
const shape_select_el = document.querySelector(".shape-select-element");

let currentChord = "";
let var_num = 0;

// initialize ui
createChord(chords["A_maj"]);
configureNotesSelectionUI();
getChordTypes("A");
setShapeVariationNumber();

// event listeners for change of chord
chord_noteEl.addEventListener("change", () => {
  var_num = 0;
  let chord_name_value = chord_noteEl.value;
  chord_name_value = chord_name_value.replaceAll("♯", "shrp");

  getChordTypes(chord_name_value);
  const chord_type_value = chord_typeEl.value;
  const newValue = `${chord_name_value}_${chord_type_value}`;
  createChord(chords[newValue]);
});

// event listeners for change of chord shape
shape_left.addEventListener("click", () => {
  changeShapeVariation("left");
});

shape_right.addEventListener("click", () => {
  changeShapeVariation("right");
});

info_icon.addEventListener("click", () => {
  info_container.classList.toggle("visible");
});

info_container.querySelector("i").addEventListener("click", () => {
  info_container.classList.remove("visible");
});

chord_typeEl.addEventListener("change", () => {
  var_num = 0;
  const chord_name_value = chord_noteEl.value;
  const chord_type_value = chord_typeEl.value;
  const newValue = `${chord_name_value}_${chord_type_value}`;
  createChord(chords[newValue]);
  setShapeVariationNumber();
});

// set note selection ui based on available chords
function configureNotesSelectionUI() {
  const availableChords = parseChords(chords);
  const typesOfNotes = availableChords.notes;
  typesOfNotes.forEach((typeOfNote) => {
    const newOption = document.createElement("option");
    newOption.innerText = typeOfNote.replaceAll("shrp", "♯");
    chord_noteEl.appendChild(newOption);
  });
}

function parseChords(chords) {
  const noteSet = new Set();
  const noteTypeMap = {};

  for (const key of Object.keys(chords)) {
    const note = chords[key].chord_name.replaceAll("♯", "shrp");
    const type = chords[key].chord_type;

    // Add note to the set
    noteSet.add(note);

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

  return {
    notes: Array.from(noteSet),
    typesByNote: noteTypeMap,
  };
}

function getChordTypes(UInoteType) {
  //remove all existing option entries
  chord_typeEl.innerHTML = "";

  // create new entries based on available chords
  const availableChords = parseChords(chords);
  const typesByNote = availableChords.typesByNote[UInoteType];

  typesByNote.forEach((typeOfNote) => {
    const newOption = document.createElement("option");
    newOption.innerText = typeOfNote;
    chord_typeEl.appendChild(newOption);
  });
}

// Generate the chord on the fretboard
function createChord(chord) {
  currentChord = chord;
  setShapeVariationNumber();

  //constants across chord shape
  const chord_name = chord.chord_name;
  const chord_type = chord.chord_type;
  const chord_description = chord.description;

  //variable based on var_nem
  const note_names = chord.variations[var_num].note_names;
  const fingers = chord.variations[var_num].fingers;
  const first_fret = chord.variations[var_num].first_fret;
  const roots = chord.variations[var_num].root.map((id) => id.toString());
  const activeIds = chord.variations[var_num].notes.map((id) => id.toString());
  const muted = chord.variations[var_num].muted.map((id) => id.toString());
  //set chord name header
  chord_nameEl.innerHTML = `${chord_name}<small>${chord_type}</small>`;

  // Assign description text
  const descriptionEl = document.createElement("p");
  scroll_wrapper.innerHTML = "";
  descriptionEl.innerHTML = chord_description;

  scroll_wrapper.appendChild(descriptionEl);

  //set string notes values
  applyNoteNames(note_names);

  //set fret numbers
  fret_numbers.forEach((fretNumEl, idx) => {
    fretNumEl.innerText = first_fret + idx;
  });

  //handle note visiblity and muting
  notes.forEach((noteEl) => {
    noteEl.classList.remove("visible");
    noteEl.classList.remove("muted");
    noteEl.classList.remove("root");
    // noteEl.classList.add("add");

    const id = noteEl.id;
    if (activeIds.includes(id)) {
      noteEl.classList.add("visible");
    } else if (muted.includes(id)) {
      noteEl.classList.add("visible");
      noteEl.classList.add("muted");
    }
    if (roots.includes(id)) {
      noteEl.classList.add("root");
    }
  });

  //set note finger values
  applyFingerValues(fingers);
}

// assign corresponding note name to the section under strings
function applyNoteNames(note_names) {
  string_notes.forEach((note, idx) => {
    const span = strings[idx].querySelector("span");
    span.textContent = note_names[idx];
  });
}

// assign the finger number values to fretted notes
function applyFingerValues(fingers) {
  Object.entries(fingers).forEach(([key, value]) => {});
  const ids = Object.keys(fingers).map(String);

  notes.forEach((noteEl) => {
    if (!noteEl.classList.contains("nut")) {
      noteEl.innerHTML = "";
    }

    if (ids.includes(noteEl.id)) {
      const finger_value = fingers[noteEl.id];
      noteEl.innerHTML = `<span>${finger_value}</span>`;
    }
  });
}

function setShapeVariationNumber() {
  const var_count = currentChord.variations.length;
  shape_select_el.innerHTML = `Shape <span style="font-weight: bolder; color: #222">${
    var_num + 1
  }</span> of <span style="font-weight: bolder; color: #222">${var_count}</span>`;
}

function changeShapeVariation(direction) {
  const var_count = currentChord.variations.length;

  if (direction === "left" && var_num > 0) {
    var_num--;
  } else if (direction === "right" && var_num < var_count - 1) {
    var_num++;
  }

  setShapeVariationNumber();
  createChord(currentChord);
}
