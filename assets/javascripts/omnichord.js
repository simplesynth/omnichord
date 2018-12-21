function invertChord(chordArray, count) {
    // make sure the original array is not modified
    newChordArray = chordArray.slice();
    // if the count is greater than 0
    if (count > 0) {
        // remove the item at position 0, multiply it by two, and add to the end of the array
        newChordArray.push(newChordArray.shift() * 2)
        // run the function again (if the count is 1, the array will not be further modified)
        newChordArray = invertChord(newChordArray, count - 1)
    }
    return newChordArray
}

