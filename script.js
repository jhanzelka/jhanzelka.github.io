const a_notes = document.querySelectorAll(".a-note");
const b_notes = document.querySelectorAll(".b-note");
const c_notes = document.querySelectorAll(".c-note");
const d_notes = document.querySelectorAll(".d-note");
const e_notes = document.querySelectorAll(".e-note");
const f_notes = document.querySelectorAll(".f-note");
const g_notes = document.querySelectorAll(".g-note");

const notesArr = [
  a_notes,
  b_notes,
  c_notes,
  d_notes,
  e_notes,
  f_notes,
  g_notes,
];

assignNotes(notesArr);

function assignNotes(notesArr) {
  notesArr.forEach((notes) => {
    notes.forEach((note) => {
      note.addEventListener("click", () => {
        console.log(note);
        const noteClass = [...note.classList].find((cls) =>
          cls.endsWith("-note")
        );
        notes.forEach((n) => {
          n.classList.toggle(`${noteClass}-active`);
          n.classList.add("clicked");

          setTimeout(() => {
            n.classList.remove("clicked");
          }, 400);
        });
      });
    });
  });
}
