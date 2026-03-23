<<<<<<< HEAD
def power(a, n):
    const = a
    for i in range(n-1):
        a *= const
    return a

arr = list(map(int, input().split()))
=======
def power(a, n):
    const = a
    for i in range(n-1):
        a *= const
    return a

arr = list(map(int, input().split()))
>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
print(power(*arr))