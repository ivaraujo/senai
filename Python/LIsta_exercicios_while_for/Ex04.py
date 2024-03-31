# Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

paisA = 80000
paisB = 200000
cont = 0
popA = paisA
popB = paisB

while(popA <= popB):
    popA = popA+popA*(3/100)
    popB = popB+popB*(1.5/100)
    cont = cont + 1
print("Total: ",cont,"anos")
print("População A: ",round(popA,2))
print("População B: ",round(popB,2))