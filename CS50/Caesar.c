#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, string argv[]){

    if (argc != 2)
    {
        printf("Usage: ./caesar k \n");
        return 1;
    }

    argc = 2;
    int key = atoi(argv[1]);

    printf("Enter Plain text: ");
    string p = get_string();

    printf("Cipher Text: ");
    
    if (p != NULL){
        for (int i = 0, n = strlen(p); i < n; i++)
        {
            if (p[i] >= 'A' && p[i] <= 'Z'){
                printf("%c", ((((p[i] - 65) + key) % 26) + 65));

            }else if (p[i] >= 'a' && p[i] <= 'z' ){

                printf("%c", ((((p[i] - 97) + key) % 26) + 97));

            }else{

                printf("%c", p[i]);
            }


        }
        printf("\n");
        return 0;
    }
}