#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string();
    int n = 0;
    while (s[n] != '\0')//8 0bits in a row, how comp seperates strings like a period (data types)
    {
        n++;
    }
    printf("%i\n", n);
}