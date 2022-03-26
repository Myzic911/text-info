var letter = ['a', 'à', 'â', 'ä', 'b', 'c', 'ç', 'd', 'e', 'é', 'è', 'ê', 'ë', 'f', 'g', 'h', 'i', 'î', 'ï', 'j', 'k', 'l', 'm', 'n', 'o', 'ô', 'ö', 'p', 'q', 'r', 's', 't', 'u', 'û', 'ù', 'ü', 'v', 'w', 'x', 'y', 'ŷ', 'ÿ', 'z', 'A', 'À', 'Â', 'Ä', 'B', 'C', 'Ç', 'D', 'E', 'É', 'È', 'Ê', 'Ë', 'F', 'G', 'H', 'I', 'Î', 'Ï', 'J', 'K', 'L', 'M', 'N', 'O', 'Ô', 'Ö', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ù', 'Û', 'Ü', 'V', 'W', 'X', 'Y', 'Z'];
var space = [' '];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['&', '~', '"', '#', '\'', '{', '(', '[', '-', '|', '`', '_', '\\', '^', '@', ')', ']', '°', '=', '}', '+', '¨', '$', '£', '¤', '*', 'µ', '%', '?', ',', ';', '.', '/', ':', '!', '§'];
var text = prompt('Enter the text you want to extract informations.').split('');
var total_char = text.length;
var letter_char = 0;
var space_char = 0;
var number_char = 0;
var special_char = 0;
var word = 0;
var word_counter = text.join('').split(' ');

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

  for (var j = 0; j < special.length; j++) {
    if (text[i] === special[j]) {
      special_char++;
    }
  }
}

document.write('Your text contain ' + word_counter.length + ' word, ' + total_char + ' total character, ' + letter_char + ' letter, ' + number_char + ' number, ' + special_char + ' special character and ' + space_char + ' space.');
