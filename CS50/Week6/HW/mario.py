height = int(input("input a number between 0 and 23 for the height: "))

if height < 0 or height > 23:
  print("Invliad input!!")

for i in range(1, height+1):
  print('#' * (i))
