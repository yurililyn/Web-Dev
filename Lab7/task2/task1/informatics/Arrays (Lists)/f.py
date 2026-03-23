<<<<<<< HEAD
n = int(input())
arr = list(map(int, input().split()))
count = 0

for i in range(1, n-1):
    if (arr[i] > arr[i-1] and arr[i] > arr[i+1]):
        count += 1

=======
n = int(input())
arr = list(map(int, input().split()))
count = 0

for i in range(1, n-1):
    if (arr[i] > arr[i-1] and arr[i] > arr[i+1]):
        count += 1

>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
print(count)