<<<<<<< HEAD
x = int(input())
d = int(input())
count = 0

while (d > 0):
    remainder = d % 10
    if (remainder == x):
        count += 1
    d //= 10

=======
x = int(input())
d = int(input())
count = 0

while (d > 0):
    remainder = d % 10
    if (remainder == x):
        count += 1
    d //= 10

>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
print(count)