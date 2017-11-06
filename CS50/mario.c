int main(void)
{
    int height;
    int row;
    int padding;
    int h;

do{
    printf("Input a nubmer between 0 and 23 for the height: ");
       height  = get_int();
    }
    while ((height < 0) || (height > 23));

    for (row = 1; row <= height; row++ ) 
    {

    for (padding = (height - row ); padding > 0; padding -- )
    {
        printf(" ");
    }

    for (h = 1; h <= (row + 1); h++)
    {
        printf("#");
    }
printf("/n");

}
return 0;

}

