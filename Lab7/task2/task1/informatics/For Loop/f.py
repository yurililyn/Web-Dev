<<<<<<< HEAD
x = int(input())
reversedArr = []

while (x > 0):
    reversedArr.append(x % 10)
    x //= 10

for num in reversedArr:
=======
x = int(input())
reversedArr = []

while (x > 0):
    reversedArr.append(x % 10)
    x //= 10

for num in reversedArr:
>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
    print(num, end="")