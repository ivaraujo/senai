'''Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.'''
lista = []
def reversor(numero):    
    numRevertido = numero[::-1]
    return numRevertido

n = int(input("Digite um número: "))
n = str(n)
revertido = reversor(n)

print(revertido)