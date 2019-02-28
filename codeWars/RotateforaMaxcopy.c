//Rotate for a Max.c#include <stdio.h>
#include <stdlib.h>
#include <criterion/criterion.h>
#include <math.h>

long long maxRot(long long n) {
  // your code
  //print entered number
  printf("%d", n);
  bool swapped = false;
  //sprintf(str, "Value of Pi = %f", M_PI);
  //turn into an convert number into an array
    unsigned int length = (int)(log10((float)n)) + 1;
    char * arr = (char *) malloc(length * sizeof(char)), * curr = arr;
    do {
        *curr++ = n % 10;
        n /= 10;
    } while (n != 0);
    return arr;
    //loop through the array
    for (int i = 0; i < arr ; i++) {
  /* code */
    int digit = arr[i];
    if(arr[i] > arr[i+1]){
       digit = arr[i];
    }
    swapped = true;
    printf("%s\n",digit);

    if(!swapped) {
            break;
         }

}


}
