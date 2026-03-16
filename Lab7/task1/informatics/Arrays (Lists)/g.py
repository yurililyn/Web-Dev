n = int(input())
arr = list(map(int, input().split()))
reversedArr = arr[::-1]

for num in reversedArr:
    print(num, end=' ')