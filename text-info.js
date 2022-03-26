var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var space = [' '];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var text = prompt('Enter the text you want to extract informations.').split('');
var total_char = text.length;
var letter_char = 0;
var space_char = 0;
var number_char = 0;

for (var i = 0; i < text.length; i++) {
  for (var j = 0; j < letter.length; j++) {
    if (text[i] === letter[j]) {
      letter_char++;
    }
  }

  for (var j = 0; j < space.length; j++) {
    if (text[i] === space[j]) {
      space_char++;
    }
  }

  for (var j = 0; j < number.length; j++) {
    if (text[i] === number[j]) {
      number_char++;
    }
  }
}

document.write('Your text contain ' + total_char + ' total char, ' + letter_char + ' letter, ' + number_char + ' number and ' + space_char + ' space.');
