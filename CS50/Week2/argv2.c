#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(int argc, string argv[])
{
    //iterate over strings in argv
   for (int i = 0; i < argc; i++)
   {
       //interate over character in current string
       for (int j = 0, n = strlen(argv[i]); j < n; j++)
       {
           //print j'th character in the i'th string
           printf("%c\n", argv[i][j]);
       }
   }
}

//0 all is well any non 0 means something has gone wrong
