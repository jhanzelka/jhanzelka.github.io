import { chords } from "./chords.js";

const notes = document.querySelectorAll(".note");
const string_notes = document.querySelectorAll(".string-note");
const strings = document.querySelectorAll(".string");
const chord_nameEl = document.querySelector(".chord-name h1");
const info_container = document.querySelector(".info-container");
const chord_noteEl = document.getElementById("chord-note");
const chord_typeEl = document.getElementById("chord-type");
const fret_numbers = document.querySelector(".fret-numbers");
const scroll_wrapper = document.querySelector(".scroll-wrapper");
const info_icon = document.querySelector(".chord-name i");
//const info_btn = document.querySelector(".info-btn");

// initialize ui
createChord(chords["A_Major"]);
configureNotesSelectionUI();
getChordTypes("A");

// DISABLED note event listeners for clicks
// notes.forEach((note) =>
//   note.addEventListener("click", () => {
//     note.classList.toggle("visible");
//   })
// );

// event listeners for change of chord
chord_noteEl.addEventListener("change", () => {
  const chord_name_value = chord_noteEl.value;
  getChordTypes(chord_name_value);
  const chord_type_value = chord_typeEl.value;
  const newValue = `${chord_name_value}_${chord_type_value}`;
  createChord(chords[newValue]);
});

// event listener for learn more
// info_btn.addEventListener("click", () => {
//   info_container.classList.toggle("visible");
// });

info_icon.addEventListener("click", () => {
  info_container.classList.toggle("visible");
});

info_container.querySelector("i").addEventListener("click", () => {
  info_container.classList.remove("visible");
});

chord_typeEl.addEventListener("change", () => {
  const chord_name_value = chord_noteEl.value;
  const chord_type_value = chord_typeEl.value;
  const newValue = `${chord_name_value}_${chord_type_value}`;
  createChord(chords[newValue]);
});

// set note selection ui based on available chords
function configureNotesSelectionUI() {
  const availableChords = parseChords(chords);
  const typesOfNotes = availableChords.notes;
  typesOfNotes.forEach((typeOfNote) => {
    const newOption = document.createElement("option");
    newOption.innerText = typeOfNote;
    chord_noteEl.appendChild(newOption);
  });
}

function parseChords(chords) {
  const noteSet = new Set();
  const noteTypeMap = {};

  for (const key of Object.keys(chords)) {
    const [note, type] = key.split("_");

    // Add note to the set
    noteSet.add(note);

    // Initialize array if note not seen before
    if (!noteTypeMap[note]) {
      noteTypeMap[note] = [];
    }

    // Normalize empty string (used for major chords)
    const chordType = type || "Major";

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
  const chord_name = chord.chord_name;
  const chord_type = chord.chord_type;
  const note_names = chord.note_names;
  const chord_description = chord.description;
  const fingers = chord.fingers;
  const first_fret = chord.first_fret;
  chord_nameEl.innerText = `${chord_name} ${chord_type}`;

  const activeIds = chord.notes.map((id) => id.toString());
  const muted = chord.muted.map((id) => id.toString());

  // Assign description text
  const descriptionEl = document.createElement("p");
  scroll_wrapper.innerHTML = "";
  descriptionEl.innerHTML = chord_description;

  scroll_wrapper.appendChild(descriptionEl);

  //set string notes values
  applyNoteNames(note_names);

  //set fret numbers
  const fretNumEls = fret_numbers.querySelectorAll("p");
  fretNumEls.forEach((fretNumEl, idx) => {
    fretNumEl.innerText = idx + 1;
  });

  //handle note visiblity and muting
  notes.forEach((noteEl) => {
    noteEl.classList.remove("visible");
    noteEl.classList.remove("muted");
    // noteEl.classList.add("add");

    const id = noteEl.id;
    if (activeIds.includes(id)) {
      noteEl.classList.add("visible");
    } else if (muted.includes(id)) {
      noteEl.classList.add("visible");
      noteEl.classList.add("muted");
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
