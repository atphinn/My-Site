import sys

def main ():
 if len(sys.argv) == 2:
     p = input("Enter plain text: ")
     shift = sys.argv[1]
     # for i in range(p):
     #     if i.isalpha():
     #         finalLetter = chr((ord(i.lower()) - 97 + shift) % 26 + 97)
     # print(finalLetter)

     for i in p:
        if i.isalpha():
            key = ord(i)
            key += shift

            if i.isupper():
                if key < ord('A'):
                    key += 26
                elif key > ord('Z'):
                    key -= 26
            elif i.islower():
                if key < ord('a'):
                    key += 26
                elif key > ord('z'):
                    key -= 26
            print(char(key))
if __name__ == '__main__':
    main()
