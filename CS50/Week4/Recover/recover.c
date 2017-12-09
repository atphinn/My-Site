/*
PSEUDOCODE

--Open card file
repeat untill end of card
    --read 512 bytes into a buffer
    start of a new JPEG?
        yes ==> ....
        no ==> ....
    already found a JPEG?
        no ==>....
        yes ==> ...
close any remaining files

*/
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){
//esures proper usage
    if (argc != 2){
        fprintf(stderr, "Usage: ./recovery [Image file]\n");
        return 1;
    }

    //sets buffer
    int* buffer = malloc(512);

    //checks for file
    int jpeg_found = 0;
    //counter
    int n = 0;

    //opens file
    FILE* inptr = fopen(argv[1], "r");
    if (inptr == NULL){
        fprintf(stderr, "Could not open\n");
        return 2;
    }

    FILE* output == NULL;

    //keep count of pictures



    //read till buffer of 512 is reached


    while (fread(buffer, sizeof(512), 1, inptr) == 1) {
    //find beggining of JPG
        if(buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0 ){
            if (jpeg_found == 1){

                fclose(output);
                char filename[8];
            sprintf(argv[1], "%03i.jpeg", n);
            output = fopen(filename, "a");
            n++;

             fwrite(buffer, sizeof(512),1,output);
            }else{
                jpeg_found = 1;
            }


        }

    }


    fclose(inptr);
    fclose(output);

    free(buffer);
    return 0;

}
