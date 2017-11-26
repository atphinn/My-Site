/**
 * helpers.c
 *
 * Helper functions for Problem Set 3.
 */

#include <cs50.h>

#include "helpers.h"

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
// TODO: implement a searching algorithm

if (value < 0){
    return false;
}

int arrStart = 0;
int arrEnd = n-1;

    while (n > 0)
    {
        int mid = (arrStart - arrEnd)/2 + arrEnd;

        if (values[mid] == value)
        {
            return true;
        }else if (values[mid] < value)
        {
            arrEnd = mid -1 ;
        }else if (values[mid] > value)
        {
            arrStart = mid + 1;
        }
            n = arrStart - arrEnd + 1;
    }
        return false;
}


/**
* Sorts array of n values.
*/
void sort(int values[], int n)
{
// TODO: implement a sorting algorithm
    for (int i = 0; i < n -1; i++){
        int smallest = i;
        for (int j = i; j < n; j++ ){
            if (values[smallest] > values[j] ){
                smallest = j;
            }
        }

        if (smallest != i){
            int temp = values[smallest];
            values[smallest] = values[i];
            values[i] = temp;

        }
    }
    return;
    }
