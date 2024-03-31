# Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

laco = False
while(laco != True):
    paisA = float(input("Digite o valor da população da cidade A: "))
    paisB = float(input("Digite o valor da população da cidade B: "))
    taxaA = float(input("Digite o valor da taxa de crescimento da cidade A: "))
    taxaB = float(input("Digite o valor da taxa de crescimento da cidade B: "))
    cont = 0
    popA = paisA
    popB = paisB
    
    if(paisA >= paisB):
        print("População A: ",round(paisA,2))
        print("População B: ",round(paisB,2))
        laco = True
    elif(paisA != paisB and taxaA == taxaB):
        print("A taxa de crescimento é igual nunca irá ultrapassar ou igualar!")
    else:
        while(popA <= popB):
            popA = popA+popA*(taxaA/100)
            popB = popB+popB*(taxaB/100)
            cont = cont + 1
        print("Total: ",cont,"anos")
        print("População A: ",round(popA,2))
        print("População B: ",round(popB,2))
        laco = True