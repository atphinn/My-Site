#include <stdio.h>
#include <string.h>
double arithmetic (double a, double b, char* operator);

int main(void){

   arithmetic(1, 2, "multiply");
}

double arithmetic (double a, double b, char* operator)   {
  // Your Code here!
double result;
  if (strcmp(operator, "add") == 0) {

    result = a+b;
    printf("The result is %f\n", result);
  } else if (strcmp(operator ,"subtract") == 0) {

    result = a-b;
    printf("The result is %f\n", result);
  } else if (strcmp(operator , "multiply") == 0){

    result = a*b;
    printf("The result is %f\n", result);
  }else if (strcmp(operator , "divide") == 0) {

    result = a/b;
    printf("The result is %f\n", result);
  }else{
    return 1;
  }
  return 0;
}
