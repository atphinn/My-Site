#define _XOPEN_SOURCE
#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <unistd.h>

char *crypt(const char *key, const char *salt);

int main(int argc, string argv[]){
    if (argc != 2){
    printf("Usage: ./crack {hash}");
    return 1;
    }

    argc = 2;
    char *hash;
    char *user = argv[1];

    //salt is 50
    //i rates through 1 -4 letter alphabet words and compare to the inputed hash starting at index 2
    char pass [5];

    for (int i = 65; i >= 65 && i<=122; i++){
        for(int j = 65; j >= 65 && j <=122; j++ ){
            for(int k = 65; k >= 65 && k<=122; k++){
                for (int l = 65; l >= 65 && l<=122; l++){
                    pass[0] = i;
                    pass[1] = j;
                    pass[2] = k;
                    pass[3] = l;

                    hash = crypt(pass, "50");

                    if (strcmp(hash, user) == 0)
                        {
                            printf("%s \n", pass);
                            return 0;
                        }else{
                            pass[3] = '\0';
                            hash = crypt(pass, "50");
                            if(strcmp(hash, user) == 0){
                                printf("%s\n", pass);
                                return 0;
                            }else{
                                pass[2] = '\0';
                                hash = crypt(pass, "50");
                                if(strcmp(hash, user) == 0){
                                    printf("%s\n", pass);
                                    return 0;
                                }else{
                                    pass[1] = '\0';
                                    hash = crypt(pass, "50");
                                    if(strcmp(hash, user) == 0){
                                        printf("%s\n", pass);
                                        return 0;
                                    }else{
                                        continue;
                                    }
                                }
                            }

                        }
                    }


            }

        }
    }

}
