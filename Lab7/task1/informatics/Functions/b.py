def power(a, n):
    const = a
    for i in range(n-1):
        a *= const
    return a

arr = list(map(int, input().split()))
print(power(*arr))