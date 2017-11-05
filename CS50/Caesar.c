#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

/*
int main(int argc, string argv[]){
    argc = 2;
    int key = atoi(argv[1]);
     if (argc != 2)
    {
        printf("Wrong command-line argument\n");
        return 1;
    }
   printf("Enter Plain text: ");
   string p = get_string();

    for (int i = 0, n = strlen(p); i < n; i++){
        if (isalpha(p[i])){
            p[i] = p[i] - 97;
        }

        p[i] = ((p[i] + key) % 26 + 97);
    }
    printf("Cipher text: %s\n", p);
} */
/* Final*/


int main(int argc, string argv[]){
    argc = 2;
    int key = atoi(argv[1]);
     if (argc != 2)
    {
        printf("Wrong command-line argument\n");
        return 1;
    }
   printf("Enter Plain text: ");
   string p = get_string();


        for (int i = 0, n = strlen(p); i < n; i++)
        {
            if ((p[i] >= 'a' && p[i] <= 'z') || (p[i] >= 'A' && p[i] <= 'Z'))
            {
                printf("%c", p[i] + key % 26  );
            }
            else
            {
                printf("%c", p[i]);
            }
        }
        printf("\n");

}