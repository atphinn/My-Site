/**
 * Implements a dictionary's functionality.
 */

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include "dictionary.h"

/**
 * Returns true if word is in dictionary else false.
 */

bool check(const char *word)
{
  //TO Do
  /*
  if the word exist, it can be found in the hashtable
  which bucket would the word be in?
    hashtable[hash(word)]
  search in that linked list by using strcmp

  */
  for (int i = 0; i < strlen(word); i++) {
    /* code */
    if(isalph(word[i]) == true, word [i]-> hashtable){
      hashtable[hash(word)]
    }
      strcmp(new_node -> word, word);
  }

  /*TRIE
  for each letter in input word
  go to corresponding element in children
  if NULL, word is misspelled
  if not NULL, move to next letter
  once at the end of input file
  check if is_word is true

  */

}

/**
 * Loads dictionary into memory. Returns true if successful else false.
 */
bool load(const char *dictionary)
{
  //To do
  // Linked list

  typedef struct node{
    char word[LENGTH + 1];
    struct node * next;
  }
  node;
  //hashes words in an array
  node* hashtable[100]
//malloc to assign the appropiate amount of memory
  node* new_node = malloc(sizeof(node));
  //new node points to the word and word is saved there
  fscanf(file, "%s", new_node -> word);
}


/*TRIE
typedef struct node
{
   bool is_word;
   struct node* children[27];
}
node;
node* root;

Pseudocode

for every dictionary word, iterate thru the trie
each element in children corresponds to a different letter.
check the value at children[i]
  if NULL , malloc the node, have children[i] point to it
  if not NULL, move to the new node and continue
if at the end of word, set is_word to true


*/

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    // TO DO
    return 0;
}

/**
 * Unloads dictionary from memory. Returns true if successful else false.
 */
bool unload(void)
{
    // TO DO

  /*
  for every element in hashtable
for every node in the linked list, you’ll want to free that node.

  */
  for(new_node -> hashtable){
    for (node -> new_node ){
      free(node);
    }
  }

    return 0;
}
