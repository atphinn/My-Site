owed = float(input("Hello how much change do I owe: "))

coins = int(0)
quart = int(0)
dime = int(0)
nickles = int(0)
penny = int(0)

while (owed > 0):
    while(owed >= .25):
        coins += 1
        quart += 1
        owed = owed - .25
    while(owed >= .10):
        coins += 1
        dime += 1
        owed = owed - .10
    while(owed >= .5):
        coins += 1
        nickles += 1
        owed = owed - .5
    while(owed >= .1):
        coins += 1
        penny += 1
        owed = owed - .01

print(coins)