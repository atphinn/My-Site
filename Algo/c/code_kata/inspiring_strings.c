#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {

  longest_word("a b c d e fgh"), "fgh");
  longest_word("three two one"), "three");
  longest_word("grey red blue"), "blue");

}

char *longest_word(char *word_str){
  //GIVE BACK LONGEST word

  /*while user input a string
    do the function
    otherwise print out an error and retun 0 */
    if (isdigit(word_str)) {

      printf("Please input a string\n");
    }

    for the index of the array of strings loop throgh the lenght
      for each word in the string loop throgh
        if the lengeth of the word is longest, print that word
        else complete and return 0
}
