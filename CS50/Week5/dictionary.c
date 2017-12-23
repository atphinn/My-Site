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
typedef struct node{
  bool text;
  *childern(27);
}

bool check(const char *word)
{
  node *checkSample = root;
    // TODO
  for (int i = 0; int n = strlen(word); i++){
    int txtwords = 0;
    if (isalph(word[i])){
      txtwords = tolower(word[i]) - a;
    }else{
      txtwords = 26;
    }

    if(checkSample -> childern[txtwords] == NULL){
      return false;
      checkSample = checkSample -> childern[charValue];
  }
   return checkSample -> isWord;
}

/**
 * Loads dictionary into memory. Returns true if successful else false.
 */
bool load(const char *dictionary)
{
    //TODO
    FILE *dict = fopen(dictionary, "r");
    root = malloc(1, sizeof(node));

        //node:
        typedef struct node{
            char word[LENGTH + 1];
            struct node *node;
        }
        node;

        node *node1 = malloc(sizeof(node)); //give pointer and allcate size
        node *node2 = malloc(sizeof(node));
        node -> next = node2;

        //popo hase and scan dic word

        while (fscanf (file, "%s", word) != EOF){
            ...//Malloc a node *for each new word and check if null so speller quits
            node *new_node = malloc(sizeof(node));
            if (new_node == NULL){
                unload();
                return false;
            }else{
                strcpy(new_node -> word, word); //Copy word into node

            }

            new_node -> head;

        }

    return false;
}

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    // TODO
    return 0;
}

/**
 * Unloads dictionary from memory. Returns true if successful else false.
 */
bool unload(void)
{
    // TODO

    return false;
}
