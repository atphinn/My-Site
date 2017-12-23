#name = input("Enter your name: ")
# age = input("What is your age: ")
# gender = input("Are you male or female?: ")
# print("Hello,", name + " You are", age + " years old ", gender + ".")
#my_cites = input("Name three cites that you have lived in: ")
#city1, city2, city3 = my_cites.split()
# print("Here are the cities that you have lived in:  \n", city1,"\n",city2,"\n", city3,"\n" )
# print("\nIs your name really",name, end="?\n\n")
# print(name + ",you have lived in:", city1,city2,city3, sep="\n", end=".\n")

import math

r = float(input("What is the radius of the circle: \n"))

area = (math.pi * r * r)
circumferance = (2 * math.pi * r)

print("Radius",r,sep=":",end="cm.\n")
print("Pi",math.pi,sep=":",end=".\n")
print("Area",area,sep=":",end="sq.\n")
print("circumferance",circumferance,sep=":",end="cm.\n")
