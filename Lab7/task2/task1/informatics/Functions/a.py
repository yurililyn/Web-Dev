<<<<<<< HEAD
def min(a, b, c, d):
    if (a < b):
        min1 = a
    else:
        min1 = b
    
    if (c < d):
        min2 = c
    else:
        min2 = d

    if (min1 < min2):
        return min1
    else:
        return min2

arr = list(map(int, input().split()))
=======
def min(a, b, c, d):
    if (a < b):
        min1 = a
    else:
        min1 = b
    
    if (c < d):
        min2 = c
    else:
        min2 = d

    if (min1 < min2):
        return min1
    else:
        return min2

arr = list(map(int, input().split()))
>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
print(min(*arr))