// const a_notes = document.querySelectorAll(".a-note");
// const b_notes = document.querySelectorAll(".b-note");
// const c_notes = document.querySelectorAll(".c-note");
// const d_notes = document.querySelectorAll(".d-note");
// const e_notes = document.querySelectorAll(".e-note");
// const f_notes = document.querySelectorAll(".f-note");
// const g_notes = document.querySelectorAll(".g-note");
const accidentalsEl = document.querySelectorAll(".accidental");
const notes = document.querySelectorAll(".note");
const acciToggle = document.getElementById("accidentals-toggle");

// const notesArr = [
//   a_notes,
//   b_notes,
//   c_notes,
//   d_notes,
//   e_notes,
//   f_notes,
//   g_notes,
// ];

//assignNotes(notesArr);
assignNotes(notes);

const accidentals = [
  { sharp: "C<sup>♯</sup>", flat: "D<sub>♭</sub>" },
  { sharp: "D<sup>♯</sup>", flat: "E<sub>♭</sub>" },
  { sharp: "F<sup>♯</sup>", flat: "G<sub>♭</sub>" },
  { sharp: "G<sup>♯</sup>", flat: "A<sub>♭</sub>" },
  { sharp: "A<sup>♯</sup>", flat: "B<sub>♭</sub>" },
];

acciToggle.addEventListener("click", () => toggleAccidentals());

// function assignNotes(notesArr) {
//   notesArr.forEach((notes) => {
//     notes.forEach((note) => {
//       note.addEventListener("click", () => {
//         const noteClass = [...note.classList].find((cls) =>
//           cls.endsWith("-note")
//         );
//         notes.forEach((n) => {
//           n.classList.toggle(`${noteClass}-active`);
//           n.classList.add("clicked");

//           setTimeout(() => {
//             n.classList.remove("clicked");
//           }, 400);
//         });
//       });
//     });
//   });
// }

function toggleAccidentals() {
  accidentalsEl.forEach((accidental) => {
    const span = accidental.querySelector("span"); // Select the span inside
    if (span) {
      const currentValue = span.innerHTML; // Get the text inside span
      // Find the corresponding accidental pair
      const found = accidentals.find(
        (pair) => pair.sharp === currentValue || pair.flat === currentValue
      );

      if (found) {
        // Toggle between sharp and flat
        span.innerHTML =
          currentValue === found.sharp ? found.flat : found.sharp;
      }
    }
  });
}

function assignNotes(notes) {
  notes.forEach((note) => {
    note.addEventListener("click", () => {
      const noteClass = [...note.classList].find((cls) =>
        cls.endsWith("-note")
      );
      notes.forEach((n) => {
        noteClassCompare = [...n.classList].find((cls) =>
          cls.endsWith("-note")
        );

        if (noteClass === noteClassCompare) {
          n.classList.toggle(`${noteClass}-active`);
          n.classList.add("clicked");
          setTimeout(() => {
            n.classList.remove("clicked");
          }, 400);
        }
      });
    });
  });
}
