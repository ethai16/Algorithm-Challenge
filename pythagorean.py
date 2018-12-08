def pythogorean(a,b,c):
    return (a**2 + b**2 == c**2)

sum = 1000

for i in range(1,10):
    for j in range(1+i, 10):
        c = sum - (i +j)
        print(j, i)
        if pythogorean(i,j,c):
            if i + j + c == sum:
                print(i)
                print(j)
                print(c)

string1 = "abcd"
stringList = []
string2 = "abcde"
string2List = []
string3 = []


for i in range(len(string1)):
    stringList.append(string1[i])
for j in range(len(string2)):
    string2List.append(string2[j])

for i in range(len(stringList)):
    for j in range(len(string2List)):
        if string2List[j] != stringList[i]:
            string2List.remove(string2List[j])
            string3.append(string2List[j])
        print(j)