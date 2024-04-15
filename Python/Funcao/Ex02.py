n = int(input("Digite a quantidade de repetições: "))

def piramide(x):
    x = x + 1
    i = 1
    j = 0
    for i in range(1,x+1):
        for j in range(1,i+1):
            print(j,end=" ")        
        print("\n")
piramide(n)