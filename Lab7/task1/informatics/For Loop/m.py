n = int(input())
count = 0

for i in range (1, n + 1):
    x = int(input())
    while (x > 0):
        remainder = x % 10
        if (remainder == 0):
            count += 1
        x //= 10

print(count)