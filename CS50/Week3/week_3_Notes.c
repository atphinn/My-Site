//CS50 Week 3: Notes

//Finding 50

/*
Strings are a grid of infomation
\0 tell the computer is the end of a string
Zamyla\0Alex\0 -- Letter is a byte of informtion
*/


/* function
void = no input
argc = argumant cout (ho many word inputed)
argv = an arry
*/

//Linear search

for each element in array
    id element youre looking for
        return true
return false

//wrong because will come out of for loop if first element is false abs stop looping
for each element in arry
    if element youre looking for
        return true
    else
        return false


/*Bunary search
Search smaller problem till there is no element or the correct element*/

look at middlle of array 
if element youre looking for
    return true
else if element is to left
    search left half of array
else if element is to right
    search right half of array
else
    return false

 
//sorting

42681375

/*selection sort
Exchange 1 with value in 0 position 2 , 3 and so on so on. looking to aeee the samllest element loop thorugh
--peudo code--

for i from 0 to n-1
    find smallest element between i'th and n-1'th
    swap smallest with i'th element

*/


/*bubble sort

look at 2 numbers 4,2 and switch positions to 2,4 so on comparing two numbers to see which is less. in ex 8 bubbled up to top end of arra, 1 then moves closer to 0 index

--Peudo code-- 

repete until no swaps
    for i from 0 to n-2 --> n-2 makes sure right pointer doesnt look at last number
        if i'th and i+1'th elements out of order
            swap them

*/


/*Insertion sorting

--peudo code

for i from 1 to n-1
    call 0'th through i-1'th elements the "sorted side"
    remove i'th element
    insert it into sorted side in order

take each problem one at a time and solve/sorted 4 is taken out, then 2 is comparded and added to the list with 4 to the left*/

//Algorithm running time - time takes for alog to run

/*

bubble sort:
    how many steps to sort numbers (n-1) + (n-2)+ ...+1 or n(n-1)/2 or (n2 -n)/2 or n2/2 - n/2

    number that is bigger is consider (n2)

    ex 10000002/2 - 1000000/2
        500000000000 - 500000
        499,999,500,000
big O notation = O(n2) *on the order of n squared upper bound on the time the Algo takes 

think Order and n is the number of steps below is listed slowest to fastest:
O(n2) - bubble sort, select and Insertion cause they compared
O(n * log n) - Select sort
O(n) - Linear search
O(log n) - Binary search
O (1) - Printf(), addition, 
...
 */

 //Omega search
 /*Fewest steps list is already sorted (Order is slowest to fastest)
 
Omega(n2) - select (just looking for smallest number constant)
Omega(n * log n) - 
Omeag(n) - Bubble sort
O(log n) - can you sort n elements with out looking at elements? No computational limit.
O (1) -  linear and binary 
...
 
 */

 //Theada when big O and Omenga notation are the same

 //Recursion 

 /*
0 pick up 
1 open to middle of phone book
2 look at names
3 if Smith is among names
4    call Mike
5 else if Smith is earlier in book
6   search for mike in left half of book
7
8 else if Smith is later in book
9   search for Mike in right half of book
10
11 else
12  quit


merge sort - 

On input of n elements
    If n < 2
        return
    else
        sort left half of elements
        sort right half of elements
        merge sorted halves


 */

 //running time 
 //T(n) = O(I) {if n < 2}
 //T(n)=T(n/2) +  T(n/2)  + O(n) {if n < 2} = 0(n * log n)

 //sigma0.c

 #include <cs50.h>
 #include <stdio.h>

 int sigma (int m);

 int main(void){
     int n;
     do
     {
         printf("Positive integer please: ");
         n = get_int();
     }

     while (n < 1);

     int answer = sigma(n);

     printf("%i\n", answer);
 }

int sigma(int m){
    int sum = 0;
    for (int i = 1; i <= m; i++){
        sum += i;
    }
    return sum;
}

//sigma1.c

#include <cs50.h>
#include <stdio.h>

int sigma (int m);

int main(void){
    int n;
    do
    {
        printf("Positive integer please: ");
        n = get_int();
    }

    while (n < 1);

    int answer = sigma(n);

    printf("%i\n", answer);
}

int sigma(int m){ //takes up memeory
  if (m <= 0){ //if negative number return 0
      return 0;
  }
  else{
      return (m + sigma(m-1)); //save m and call simga till imput is 0
  }
}
