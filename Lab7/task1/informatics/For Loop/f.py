x = int(input())
reversedArr = []

while (x > 0):
    reversedArr.append(x % 10)
    x //= 10

for num in reversedArr:
    print(num, end="")