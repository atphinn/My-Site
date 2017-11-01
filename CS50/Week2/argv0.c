#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])//string argv[] is an array of strings
{
    if (argc == 2)
    {
        printf("hello, %s\n", argv[1]);
    }
    else
    {
        printf("hello, world\n");
    }
}