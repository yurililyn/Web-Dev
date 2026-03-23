if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    uniqueSortedArr = list(set(sorted(arr)))

    if (len(uniqueSortedArr) > 1):
        print(uniqueSortedArr[-2])
