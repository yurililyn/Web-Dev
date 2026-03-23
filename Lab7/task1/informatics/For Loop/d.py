x = int(input())
d = int(input())
count = 0

while (d > 0):
    remainder = d % 10
    if (remainder == x):
        count += 1
    d //= 10

print(count)