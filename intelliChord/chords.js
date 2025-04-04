export const chords = {
  A_Major: {
    chord_name: "A",
    chord_type: "maj",
    notes: [2, 6, 15, 16, 17],
    note_names: ["", "A", "B", "A", "C♯", "E"],
    root: 16,
    fingers: {
      15: 1,
      16: 2,
      17: 3,
    },
    muted: [1],
    first_fret: 1,
    description: `<p>The <strong>A major</strong> chord is built from the A major scale, consisting of the notes:</p>
        <p style="font-weight: bold; text-align: center;">A – B – <strong>C♯</strong> – D – <strong>E</strong> – F♯ – G♯</p>
        <p>It includes the root (A), the major third (C♯), and the perfect fifth (E), creating a full and stable sound.</p>
        <p>This chord is very common in rock, pop, and country music due to its bright and clear tone.</p>`,
  },

  A_Minor: {
    chord_name: "A",
    chord_type: "min",
    notes: [2, 6, 11, 15, 16],
    note_names: ["", "A", "B", "A", "C", "E"],
    root: 16,
    fingers: {
      11: 3,
      15: 1,
      16: 2,
    },
    muted: [1],
    first_fret: 1,
    description: `<p>The <strong>A minor</strong> chord uses the natural minor scale:</p>
        <p style="font-weight: bold; text-align: center;">A – B – <strong>C</strong> – D – <strong>E</strong> – F – G</p>
        <p>It replaces the major third (C♯) with a minor third (C), giving it a sadder, more reflective sound.</p>
        <p>It’s a popular chord in folk, pop, and classical music for evoking emotion and depth.</p>`,
  },

  A_Dim: {
    chord_name: "A",
    chord_type: "dim",
    notes: [2, 9, 11, 16],
    note_names: ["", "A", "D♯", "A", "C", ""],
    root: 16,
    fingers: {
      9: 1,
      11: 3,
      16: 2,
    },
    muted: [1, 6],
    first_fret: 1,
    description: `<p>The <strong>A diminished</strong> chord lowers the third and fifth of the A major chord.</p>
        <p style="font-weight: bold; text-align: center;">A – B – <strong>C</strong> – D – <strong>D♯</strong> – F♯ – G♯</p>
        <p>It replaces the major third (C♯) with C, and the perfect fifth (E) with D♯, creating a dissonant, unstable sound.</p>
        <p>This chord adds tension and is used frequently in classical, jazz, and film scores.</p>`,
  },

  A_Aug: {
    chord_name: "A",
    chord_type: "aug",
    notes: [2, 12, 16, 17, 21],
    note_names: ["", "A", "F", "A", "C♯", "F"],
    root: 16,
    fingers: {
      12: 1,
      16: 2,
      17: 3,
      21: 4,
    },
    muted: [1],
    first_fret: 1,
    description: `<p>The <strong>A augmented</strong> chord raises the fifth of the A major chord (E to F).</p>
        <p style="font-weight: bold; text-align: center;">A – B – C♯ – D – <strong>F</strong> – F♯ – G♯</p>
        <p>This produces a dreamy, unresolved sound often leading into new harmonic territory.</p>
        <p>It's great for use in jazz, experimental, and theatrical music.</p>`,
  },

  B_Major: {
    chord_name: "B",
    chord_type: "maj",
    notes: [14, 18, 27, 28, 29],
    note_names: ["", "B", "F♯", "B", "D♯", "E"],
    root: 16,
    fingers: {
      14: 1,
      18: 1,
      27: 2,
      28: 3,
      29: 4,
    },
    muted: [1],
    first_fret: 1,
    description: `<p>The <strong>B major</strong> chord is built from the B major scale:</p>
  <p style="font-weight: bold; text-align: center;">B – C♯ – <strong>D♯</strong> – E – <strong>F♯</strong> – G♯ – A♯</p>
  <p>It includes the root (B), major third (D♯), and perfect fifth (F♯), giving it a bright, full, and powerful sound.</p>
  <p>Because of its barre chord shape on guitar, it’s a bit trickier for beginners but widely used in pop, rock, and classical music due to its bold and expressive tone.</p>`,
  },

  B_Minor: {
    chord_name: "B",
    chord_type: "min",
    notes: [14, 18, 23, 27, 28],
    note_names: ["", "B", "F♯", "B", "D", "E"],
    root: 16,
    fingers: {
      14: 1,
      18: 1,
      23: 2,
      27: 3,
      28: 4,
    },
    muted: [1],
    first_fret: 1,
    description: `<p>The <strong>B minor</strong> chord is built from the B natural minor scale:</p>
  <p style="font-weight: bold; text-align: center;">B – <strong>C♯</strong> – <strong>D</strong> – E – <strong>F♯</strong> – G – A</p>
  <p>It contains the root (B), minor third (D), and perfect fifth (F♯), giving it a somber, emotional quality compared to its major counterpart.</p>
  <p>B minor is a widely used chord in rock, metal, classical, and pop, and often evokes a sense of introspection or melancholy.</p>`,
  },

  B_Dim: {
    chord_name: "B",
    chord_type: "dim",
    notes: [14, 21, 23, 28],
    note_names: ["", "B", "F", "B", "D", ""],
    root: 16,
    fingers: {
      14: 1,
      21: 2,
      23: 3,
      28: 4,
    },
    muted: [1, 6],
    first_fret: 1,
    description: `<p>The <strong>B diminished</strong> chord is built by lowering the third and fifth of the B major chord.</p>
  <p style="font-weight: bold; text-align: center;">B – <strong>D</strong> – <strong>F</strong> – G – A – C – D♯</p>
  <p>It includes the root (B), minor third (D), and diminished fifth (F), creating a tense and unstable sound that seeks resolution.</p>
  <p>B diminished is commonly used in classical, jazz, and dramatic music to introduce harmonic tension and transition smoothly between chords.</p>`,
  },

  C_Major: {
    chord_name: "C",
    chord_type: "maj",
    notes: [4, 6, 11, 15, 20],
    note_names: ["", "C", "E", "G", "C", "E"],
    root: 16,
    fingers: {
      11: 1,
      15: 2,
      20: 3,
    },
    muted: [1],
    first_fret: 1,
    description: `<p>The <strong>C major</strong> chord is built from the C major scale, which contains no sharps or flats:</p>
  <p style="font-weight: bold; text-align: center;">C – <strong>D</strong> – <strong>E</strong> – F – G – A – B</p>
  <p>It includes the root (C), the major third (E), and the perfect fifth (G), producing a clear, stable, and harmonious sound.</p>
  <p>C major is one of the most foundational chords in Western music and is often the first chord learned by beginners on guitar and piano alike.</p>`,
  },

  D_Major: {
    chord_name: "D",
    chord_type: "maj",
    notes: [3, 16, 18, 23],
    note_names: ["", "", "D", "A", "D", "F♯"],
    root: 16,
    fingers: {
      16: 1,
      18: 2,
      23: 3,
    },
    muted: [1, 2],
    first_fret: 1,
    description: `<p>The <strong>D major</strong> chord is built from the D major scale:</p>
        <p style="font-weight: bold; text-align: center;">D – E – <strong>F♯</strong> – G – <strong>A</strong> – B – C♯</p>
        <p>It includes the root (D), major third (F♯), and perfect fifth (A), resulting in a bright, strong sound.</p>
        <p>Common in all musical styles, D major is a foundational chord in guitar-based music.</p>`,
  },

  D_Minor: {
    chord_name: "D",
    chord_type: "min",
    notes: [3, 16, 12, 23],
    note_names: ["", "", "D", "A", "D", "F"],
    root: 16,
    fingers: {
      12: 1,
      16: 2,
      23: 3,
    },
    muted: [1, 2],
    first_fret: 1,
    description: `<p>The <strong>D minor</strong> chord is made by lowering the third of D major (F♯ to F).</p>
        <p style="font-weight: bold; text-align: center;">D – E – <strong>F</strong> – G – A – B – C♯</p>
        <p>This change gives it a darker, moodier sound, perfect for emotional or dramatic music.</p>
        <p>You’ll hear D minor in classical, alternative rock, and ambient compositions.</p>`,
  },

  D_Dim: {
    chord_name: "D",
    chord_type: "dim",
    notes: [8, 15, 17, 22],
    note_names: ["", "A♯", "E", "A♯", "C♯", "E"],
    root: 15,
    fingers: {
      8: 1,
      15: 2,
      17: 3,
      22: 4,
    },
    muted: [1, 6],
    first_fret: 1,
    description: `<p>The <strong>D diminished</strong> chord lowers the third and fifth of the D major chord.</p>
        <p style="font-weight: bold; text-align: center;">D – E – <strong>F</strong> – G – <strong>A♭</strong> – B – C♯</p>
        <p>This introduces sharp tension and is typically used to transition between chords.</p>
        <p>You’ll find it in jazz, classical, and cinematic music.</p>`,
  },

  D_Aug: {
    chord_name: "D",
    chord_type: "aug",
    notes: [18, 22, 23, 27],
    note_names: ["", "", "F", "A♯", "D", "F♯"],
    root: 16,
    fingers: {
      18: 1,
      22: 2,
      23: 3,
      27: 4,
    },
    muted: [1, 2],
    first_fret: 1,
    description: `<p>The <strong>D augmented</strong> chord raises the fifth (A to A♯) of the D major chord.</p>
        <p style="font-weight: bold; text-align: center;">D – E – F♯ – G – <strong>A♯</strong> – B – C♯</p>
        <p>Its unresolved nature creates tension and curiosity in progressions.</p>
        <p>Often used in jazz and progressive styles for harmonic color.</p>`,
  },

  D_Sus2: {
    chord_name: "D",
    chord_type: "sus2",
    notes: [3, 6, 16, 23],
    note_names: ["", "", "D", "A", "D", "E"],
    root: 14,
    fingers: {
      16: 1,
      23: 2,
    },
    muted: [1, 2],
    first_fret: 1,
    description: `<p>The <strong>D Sus2</strong> chord replaces the third (F♯) of D major with the second (E), creating a suspended feel.</p>
        <p style="font-weight: bold; text-align: center;">D – <strong>E</strong> – F♯ – G – A – B – C♯</p>
        <p>This results in an open and airy tone that feels unresolved until it resolves back to D major.</p>
        <p>Common in folk, pop, and soft rock music.</p>`,
  },

  D_Sus4: {
    chord_name: "D",
    chord_type: "sus4",
    notes: [3, 16, 23, 24],
    note_names: ["", "", "D", "A", "D", "G"],
    root: 16,
    fingers: {
      16: 1,
      23: 2,
      24: 3,
    },
    muted: [1, 2],
    first_fret: 1,
    description: `<p>The <strong>D Sus4</strong> chord is a variation of the D major chord that replaces its major third (<strong>F♯</strong>) with the perfect fourth (<strong>G</strong>).
        These notes come from the D major scale:</p>
        <p style="font-weight: bold; text-align: center;">D – E – <strong>F♯</strong> – <strong>G</strong> – A – B – C♯</p>
        <p>In this scale, F♯ is the 3rd degree and G is the 4th degree. Swapping the 3rd for the 4th "suspends" the chord,
        removing its major quality and giving it an open, unresolved sound.</p>
        <p>This chord is often used to create tension or anticipation, and commonly resolves back to D major.
        You’ll hear it in many pop, rock, and folk songs.</p>`,
  },
  E_Major: {
    chord_name: "E",
    chord_type: "maj",
    notes: [1, 5, 6, 10, 14, 15],
    note_names: ["E", "B", "E", "G♯", "B", "E"],
    root: 16,
    fingers: {
      10: 1,
      14: 2,
      15: 3,
    },
    muted: [],
    first_fret: 1,
    description: `<p>The <strong>E major</strong> chord is based on the E major scale:</p>
  <p style="font-weight: bold; text-align: center;">E – <strong>F♯</strong> – <strong>G♯</strong> – A – <strong>B</strong> – C♯ – D♯</p>
  <p>It contains the root (E), major third (G♯), and perfect fifth (B), giving it a bright, bold, and resonant sound.</p>
  <p>E major is one of the most iconic open chords on guitar, known for its full, rich tone and its use across rock, blues, pop, and classical music.</p>`,
  },

  F_Major: {
    chord_name: "F",
    chord_type: "maj",
    notes: [7, 11, 12, 16, 20, 21],
    note_names: ["F", "C", "F", "A", "C", "F"],
    root: 16,
    fingers: {
      7: 1,
      11: 1,
      12: 1,
      16: 2,
      20: 3,
      21: 4,
    },
    muted: [],
    first_fret: 1,
    description: `<p>The <strong>F major</strong> chord is built from the F major scale:</p>
  <p style="font-weight: bold; text-align: center;">F – <strong>G</strong> – <strong>A</strong> – A♯ – C – D – E</p>
  <p>It includes the root (F), the major third (A), and the perfect fifth (C), resulting in a strong, bright, and stable sound.</p>
  <p>On guitar, F major is often played as a barre chord and is known for its rich tone and versatility in pop, classical, and folk music.</p>`,
  },

  G_Major: {
    chord_name: "G",
    chord_type: "maj",
    notes: [3, 4, 5, 14, 19, 24],
    note_names: ["G", "B", "D", "G", "B", "G"],
    root: 16,
    fingers: {
      14: 1,
      19: 2,
      24: 3,
    },
    muted: [],
    first_fret: 1,
    description: `<p>The <strong>G major</strong> chord is built from the G major scale:</p>
  <p style="font-weight: bold; text-align: center;">G – <strong>A</strong> – <strong>B</strong> – C – <strong>D</strong> – E – F♯</p>
  <p>It contains the root (G), the major third (B), and the perfect fifth (D), producing a bright, resonant, and uplifting sound.</p>
  <p>G major is one of the most commonly used open chords on guitar, featured in countless pop, country, folk, and rock songs due to its warm and full tone.</p>`,
  },
};
