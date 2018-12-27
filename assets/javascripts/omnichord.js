function invertChord(rootNoteFreq, chordType, count) {
    // make sure the original array is not modified
    newChordArray = triad(parseFloat(rootNoteFreq), chordType)
    // if the count is greater than 0
    if (count > 0) {
        // remove the item at position 0, multiply it by two, and add to the end of the array
        newChordArray.push(newChordArray.shift() * 2)
        // run the function again (if the count is 1, the array will not be further modified)
        newChordArray = invertChord(newChordArray[0], chordType, count - 1)
    }
    return newChordArray
}

function triad(rootNoteFreq, chordType) {
  if (chordType === 'major') { return majorTriad(rootNoteFreq); }
  else if (chordType === 'minor') { return minorTriad(rootNoteFreq); }
  else if (chordType === 'diminished') { return diminishedTriad(rootNoteFreq); }
}

function majorTriad(rootNoteFreq) {
  return [rootNoteFreq, (rootNoteFreq + (halfStep(rootNoteFreq) * 4.0)), (rootNoteFreq + (halfStep(rootNoteFreq) * 7.0))]
}

function minorTriad(rootNoteFreq) {
  return [rootNoteFreq, (rootNoteFreq + (halfStep(rootNoteFreq) * 3.0)), (rootNoteFreq + (halfStep(rootNoteFreq) * 7.0))]
}

function diminishedTriad(rootNoteFreq) {
  return [rootNoteFreq, (rootNoteFreq + (halfStep(rootNoteFreq) * 3.0)), (rootNoteFreq + (halfStep(rootNoteFreq) * 6.0))]
}

function halfStep(rootNoteFreq) {
  return (rootNoteFreq / 12)
}