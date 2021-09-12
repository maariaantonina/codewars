function parseMolecule(formula) {
  let atoms = {};
  //bracets multipliers
  let r = 1;
  let s = 1;
  let c = 1;

  //letter index
  let index = -1;

  //right bracket indexes
  let rIndex = 0;
  let sIndex = 0;
  let cIndex = 0;

  for (let letter of formula) {
    index++;
    if (/[A-Z]/.test(letter)) {
      if (index > rIndex) {
        r = 1;
      }
      if (index > sIndex) {
        s = 1;
      }
      if (index > cIndex) {
        c = 1;
      }
      if (index !== formula.length - 1 && /[a-z]/.test(formula[index + 1])) {
        if (!isNaN(1 * formula[index + 2])) {
          if (isNaN(1 * formula[index + 3])) {
            letter + formula[index + 1] in atoms
              ? (atoms[letter + formula[formula.indexOf(letter, index) + 1]] +=
                  r * s * c * parseInt(formula[index + 2]))
              : (atoms[letter + formula[index + 1]] =
                  r * s * c * parseInt(formula[index + 2]));
          } else {
            letter + formula[index + 1] in atoms
              ? (atoms[letter + formula[formula.indexOf(letter, index) + 1]] +=
                  r *
                  s *
                  c *
                  (parseInt(formula[index + 2]) + parseInt(formula[index + 3])))
              : (atoms[letter + formula[index + 1]] =
                  r *
                  s *
                  c *
                  (parseInt(formula[index + 2]) +
                    parseInt(formula[index + 3])));
          }
        } else {
          letter + formula[index + 1] in atoms
            ? (atoms[letter + formula[formula.indexOf(letter, index) + 1]] +=
                r * s * c * 1)
            : (atoms[letter + formula[index + 1]] = r * s * c * 1);
        }
      } else {
        if (
          index !== formula.length - 1 &&
          !isNaN(1 * formula[formula.indexOf(letter, index) + 1])
        ) {
          if (isNaN(1 * formula[formula.indexOf(letter, index) + 2])) {
            letter in atoms
              ? (atoms[letter] =
                  atoms[letter] +
                  r *
                    s *
                    c *
                    parseInt(formula[formula.indexOf(letter, index) + 1]))
              : (atoms[letter] = r * s * c * parseInt(formula[index + 1]));
          } else {
            letter in atoms
              ? (atoms[letter] =
                  atoms[letter] +
                  r *
                    s *
                    c *
                    (parseInt(formula[formula.indexOf(letter, index) + 1]) +
                      parseInt(formula[formula.indexOf(letter, index) + 2])))
              : (atoms[letter] =
                  r *
                  s *
                  c *
                  (parseInt(formula[formula.indexOf(letter, index) + 1]) +
                    parseInt(formula[formula.indexOf(letter, index) + 2])));
          }
        } else {
          letter in atoms
            ? (atoms[letter] = atoms[letter] + r * s * c * 1)
            : (atoms[letter] = r * s * c * 1);
        }
      }
    } else if (letter === '(') {
      /[1-9]/.test(formula[formula.indexOf(')', index) + 1], index)
        ? (r = parseInt(formula[formula.indexOf(')', index) + 1]))
        : (r = 1);
      rIndex = formula.indexOf(')', index);
    } else if (letter === '[') {
      !isNaN(1 * formula[formula.indexOf(']', index) + 1])
        ? (s = parseInt(formula[formula.indexOf(']', index) + 1]))
        : (s = 1);
      sIndex = formula.indexOf(']', index);
    } else if (letter === '{') {
      !isNaN(1 * formula[formula.indexOf('}', index) + 1])
        ? (c = parseInt(formula[formula.indexOf('}') + 1]))
        : (c = 1);
      cIndex = formula.indexOf('}', index);
    }
  }
  return atoms;
}

parseMolecule('H2O');
