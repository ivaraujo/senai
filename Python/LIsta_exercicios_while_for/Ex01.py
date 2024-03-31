# Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

laco = False
while(laco != True):
    nota = float(input("Digite sua nota (0 - 10)"))
    if(nota >= 0 and nota <= 10):
        print(nota,"é válido!")
        laco = True
    else:
        print("Valor inválido!")