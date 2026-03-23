<<<<<<< HEAD
n = int(input())
arr = list(map(int, input().split()))
isFound = False
i = 1

while (not isFound and i < n):
    if (arr[i-1] * arr[i] > 0):
        isFound = True
    i += 1

if (isFound):
    print("YES")
else:
=======
n = int(input())
arr = list(map(int, input().split()))
isFound = False
i = 1

while (not isFound and i < n):
    if (arr[i-1] * arr[i] > 0):
        isFound = True
    i += 1

if (isFound):
    print("YES")
else:
>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
    print("NO")