def Xor(x, y):
    if (x == 1 and y == 0 or x == 0 and y == 1):
        return True
    else:
        return False

arr = list(map(int, input().split()))
if (Xor(*arr)):
    print(1)
else:
    print(0)