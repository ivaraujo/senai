'''Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.'''

def contagem(numero):
    digitos = list(numero)
    qt_digitos = len(digitos)
    return qt_digitos

n = input("Digite um número: ")
totalDigitos = contagem(n)

print(f"Existe {totalDigitos} neste número.")