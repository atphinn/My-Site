/**
 * Implements a dictionary's functionality.
 */

#include <stdbool.h>

#include "dictionary.h"

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char *word)
{
    // TODO
  
   return false;
}

/**
 * Loads dictionary into memory. Returns true if successful else false.
 */
bool load(const char *dictionary)
{
    // TODO
    /*
    for each word in dic text
        store in dic data structure
        Linked list/hash
        sort in to 2 groups ex: if (n % 2 == 1), odd box else even box or multiple boxes 
        A - D E-H I-M N-Q R - U Nodes
        node:
        typedef struct node{
            char word[LENGTH + 1];
            struct node *node;
        }
        node;

        node *node1 = malloc(sizeof(node)); //give pointer and allcate size
        node *node2 = malloc(sizeof(node));
        node -> next = node2;
        
         typedef struct node{
            char word[LENGTH + 1];
            struct node *next;
        }
        node

        popo hase and scan dic word

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
        */
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
