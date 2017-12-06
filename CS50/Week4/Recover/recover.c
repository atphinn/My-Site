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
    if (argc != 1){
        fprintf(stderr, "Usage: ./recovery [Image file]\n");
        return 1;
    }


    char* buffer = malloc[512];

    //opens file
    FILE* inptr = fopen(argv[1], "r");
    if (inputr == NULL){
        fprintf(stderr, "Could not open %s.\n", inputr);
        return 2;
    }

    //keep count of pictures
    FILE* outptr = fopen(argv[1], "w");
    sprintf(argv[1], "%03i.jpeg", 2);
    if(outptr == NULL){
        fclose(argv[1]);
        fprintf(stderr, "Could not find JPEG in %s\n", inputr);
        return 2;
    }

//read till buffer of 512 is reached
    fread(buffer, sizeof(512), 1, inptr);

   while (fread(buffer, sizeof(512), 1, inptr)) {
     //find beggining of JPG
     if(buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] == 0xf0) == 0xe0 ){
         fwrite(data,size, number, outptr);
         //data: Pointer to a struct with byte/ buffer
     //size: size of each element to read (sizeof)
     //number: Number of elements to reaf
     //inputr: FILE* to read from
     }
   }




}
