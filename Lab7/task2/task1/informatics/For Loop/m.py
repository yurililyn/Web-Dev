<<<<<<< HEAD
n = int(input())
count = 0

for i in range (1, n + 1):
    x = int(input())
    while (x > 0):
        remainder = x % 10
        if (remainder == 0):
            count += 1
        x //= 10

=======
n = int(input())
count = 0

for i in range (1, n + 1):
    x = int(input())
    while (x > 0):
        remainder = x % 10
        if (remainder == 0):
            count += 1
        x //= 10

>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
print(count)