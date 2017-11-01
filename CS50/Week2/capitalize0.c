#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string();
    if (s != NULL)
    {
        //iterate through s
        for (int i = 0,  n = strlen(s); i <  n; i++)
        {
            //if s is lower case capitalize
            if (s[i] >= 'a' && s[i] <= 'z')
            {
                //capitilalize using the ascii, sub 32 from num
                printf("%c", s[i] - 32);
            }
            else
            {
                printf("%c", s[i]);
            }
        }
        printf("\n");
    }
}
