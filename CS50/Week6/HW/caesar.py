import sys
from string import ascii_uppercase, ascii_lowercase
p = input("Enter plain text: ")
shift = int(sys.argv[1])
cipher = list(p)

for i in range(len(p)):
 shifted = ord(cipher[i]) + shift

 if p[i] in ascii_uppercase:
  if shifted > 90:
   shifted = shifted - 90 + 64
  elif shifted < 65:
   shifted = 91 - (65 - shifted )

 elif p[i] in ascii_lowercase:
  if shifted > 122:
   shifted = shifted - 122 + 96
  elif shifted < 97:
   shifted = 123 - (97 - shifted )

 cipher[i] = chr(shifted)
print(''.join(cipher))