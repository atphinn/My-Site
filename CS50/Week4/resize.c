#include <stdio.h>
#include <stdlib.h>

#include "bmp.h"


int main(int argc, char *argv[]){


  //ensure proper usage
  if(argc != 4 ){
    fprintf(stderr, "Usage: ./resize n [inputfilename] [outputfilename]\n");
    return 1;
  }

  //save files
  int n = atoi(argv[1]);
  char *infile = argv[2];
  char *outfile = argv[3];

  //Ensure there is no negative integer and limit size increase value to under 100
  if(n < 0 || n > 100){
    fprintf(stderr, "Please use an positive integer that is less than 100! \n");
    return 2;
  }

  //open input file
  FILE*inptr = fopen(infile, "r");
  if (inptr == NULL){
    fprintf(stderr, "Could not open file %s.\n", infile);
    return 3;
  }

  //open output file
  FILE*outptr = fopen(outfile, "w");
  if (outptr == NULL){
    fprintf(stderr, "Could not create %s.\n", outfile);
    return 4;
  }

  //read infile's BITMAPFILEHEADER
  BITMAPFILEHEADER bf;
  fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);

  //reads infile's BITMAPINFOHEADER
  BITMAPINFOHEADER bi;
  fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

  //check in file is 24-bit and uncompressed BMP 4.0
  if(bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 || bi.biBitCount != 24 || bi.biCompression != 0){
    fclose(outptr);
    fclose(inptr);
    fprintf(stderr, "File format not supported.\n");
    return 5;
  }
  //padding / scaling
  int padding = (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;
  int padding2 = (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;

  //write outfile's BITMAPFILEHEADER
  bf.bfSize = ((bi.biHeight*sizeof(RGBTRIPLE))*(bi.biWidth*sizeof(RGBTRIPLE)))+(padding*(bi.biHeight*sizeof(RGBTRIPLE)))+sizeof(BITMAPINFOHEADER)+sizeof(BITMAPFILEHEADER);
  fwrite(&bf, sizeof(BITMAPFILEHEADER), 1, outptr);

  //write outfile's BITMAPINFOHEADER and adjust size by number user inputed
  bi.biHeight = n * bi.biHeight;

  bi.biWidth = n * bi.biWidth;

  bi.biSizeImage = ((bi.biHeight*sizeof(RGBTRIPLE))*(bi.biWidth*sizeof(RGBTRIPLE)))+(padding*(bi.biHeight*sizeof(RGBTRIPLE)));

  fwrite(&bi, sizeof(BITMAPINFOHEADER), 1, outptr);


  //iterate over infiles scanlines
  for (int i = 0, biHeight = abs(bi.biHeight); i < biHeight; i++){
  // iterate over pixels in scanline
    for(int j = 0; j < n; j++){

      for(int k = 0; k < bi.biWidth; k++){
        //Temp storage
        RGBTRIPLE triple;
        //change pure red to white (00000ff to ffffff)


        //read RGB triple from infile
        fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

        //write RGB triple to outfile
        for(int l = 0; l < n; l++){
        fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
        }


      }

      //look for and skip padding
      fseek(inptr, padding, SEEK_CUR);
      //rewrite

      //recopy


      //add it back
      for(int m = 0; m < padding2; m++){
        fputc(0x00, outptr);
      }
      fseek(inptr, -(bi.biWidth*sizeof(RGBTRIPLE)+1), SEEK_CUR);
    }

  }

  //close infile
  fclose(inptr);

  //close outfille
  fclose(outptr);

  return 0;
}
