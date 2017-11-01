#include <stdio.h>
#include <cs50.h>

int main(void)
{
     float owed;
     int coins = 0;
     int quart=0, dime=0, nickles=0, penny=0;
    do{
    printf("O hai! How Much change is owed?");
    owed = get_float();
  }while (owed < 0);

    //convert from float to integer
  while (owed > 0) {
    while (owed >= 25 ){
        coins ++
        quart ++
        owed = owed - 25;
      }
    while (owed >= 10){
        coins ++
        dime ++
          owed = owed -10;
        }
    while (owed >= 5)
    {
      coins ++
      nickles ++
      owed = owed -5
      }
    while (owed >= 1)
    {
    coins ++
    penny ++
      owed = owed -1
    }
  }
    //print number of coins used

    printf("%i\n", coins);
}
