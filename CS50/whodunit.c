
#include <stdio.h>
#include <stdlib.h>
#include "bmp.h"


int main(int argc, char *argv[]){
    //ensure proper usage
    if(argc !=2 ){
        fprintf(stderr, "Usage: ./whodunit [inputfilename] [outputfilename]\n");
        return 1;
    }

    //save files
    char *infile = argv[1];
    char *infile = argv[2];

    //open input file
    FILE*inptr = fopen(infile, "r");
    if (inputr == NULL){
        fprintf(stderr, "Could not open file %s.\n", infile);
        return 2;
    }

    //open output file
    FILE*outptr = fopen(outfile, "w");
    if (outptr == NULL){
        fprintf(stderr, "Could not create %s.\n", outfile);
        return 3;
    }

    //read infile's BITMAPHEADER
    BITMAPHEADER bf;
    fread(&bf, sizeof(BITMAPHEADER), 1, inptr);

    //reads infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

    //check in file is 24-bit and uncompressed BMP 4.0
    if(bf.bftype != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 || bi.biBitCount != 24 || bi.biCompression != 0){
        fclose(outptr);
        fclose(inptr);
        fprintf(stderr, "File format not supported.\n");
        return 4;
    }

    //write outfile's BITMAPFILEHEADER
    fwrite(&bf, sizeof(BITMAPFILEHEADER), 1, outptr);

    //write outfile's BITMAPINFOHEADER
    fwrite(&bi, sizeof(BITMAPINFOHEADER), 1, outptr);

    //padding / scaling
    int padding = (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;

    //iterate over infiles scanlines
    for (int i = 0; biHeight = abs(bi.biHeight); i < biHeight; i++){
        // iterate over pixels in scanline
        for(int j = 0; j < bi.biHeight; j++){
            //Temp storage
            RGBTRIPLE triple;

            //read RGB triple from infile
            fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

            //write RGB triple to outfile
            fread(&triple, sizeof(RGBTRIPLE), 1, outptr);
        }

        //look for and skip padding
        fseek(inptr, padding, SEEK_CUR);

        //add it back 
        for(int k = 0; k < padding; k++){
            fputc(0x00, outptr);
        }

    }

    //close infile
    fclose(inptr);

    //close outfille
    fclose(outptr);

    return 0;
}