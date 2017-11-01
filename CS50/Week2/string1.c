#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    //ask user for input
    string s = get_string();

    //make sure get string return a string
    if(s != NULL)
    {

        //iterate over the haracters in s one at a time
        for (int i = 0; n = strlen(s); i < n; i++)
        {
            // print i'th character in s
            printf("%c\n", s[i]);
        }
    }
}