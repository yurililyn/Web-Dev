import math as m
x = int(input())
i = 1

while (i <= x):
    if (m.sqrt(i) % 1 == 0):
        print(i)
    i += 1