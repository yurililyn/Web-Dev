<<<<<<< HEAD
def Xor(x, y):
    if (x == 1 and y == 0 or x == 0 and y == 1):
        return True
    else:
        return False

arr = list(map(int, input().split()))
if (Xor(*arr)):
    print(1)
else:
=======
def Xor(x, y):
    if (x == 1 and y == 0 or x == 0 and y == 1):
        return True
    else:
        return False

arr = list(map(int, input().split()))
if (Xor(*arr)):
    print(1)
else:
>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
    print(0)