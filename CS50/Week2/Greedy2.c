#include <stdio.h>
#include <cs50.h>

#define DIM(array)        (sizeof(array)/sizeof(array[0]))

int makeChange(int *pAmount, int denomination)
{
    int ret = *pAmount / denomination;

    *pAmount -= ret * denomination;
    return ret;
}

int main(void)
{
    // declare float
    float money;
    const int billDenominations[] = { 100, 50, 20, 10, 5, 1 };
    const int coinDenominations[] = { 25, 10, 5, 1 };

    // Get user input and check if input is positive
    do
    {
        printf("O hai! How Much change is owed?  \n");
        money = get_float();
    } while (money < 0);

    // Get the Dollars from the Float
    int numDollars = (int) money;

    // Get the cents from the Float (rounded to nearest cent)
    int numCents = (int) ((money - numDollars) * 100 + 0.5f);

    int remainingDollars = numDollars;
    int remainingCents   = numCents;
    int numBillsAndCoins = 0;

    // Greedy Algorithm for Dollars
    for (int i = 0;i < DIM(billDenominations);i++)
        numBillsAndCoins += makeChange(&remainingDollars, billDenominations[i]);

    // Greedy Algorithm for Cents
    for (int i = 0;i < DIM(coinDenominations);i++)
        numBillsAndCoins += makeChange(&remainingCents, coinDenominations[i]);

    printf("\nThe least possible steps you can make change from "
            "$%i.%02i is %i. \n", numDollars, numCents, numBillsAndCoins);
}
