'''Escreva um programa que, dada uma string texto e uma string
palavra, ache todas as posições de ocorrência da palavra no
texto. O seu programa deve desconsiderar se as letras são
maiúsculas ou minúsculas.'''

texto = input("Digite o texto: ")
palavra = input("Digite a palavra buscada: ")
busca_texto = texto.lower()
busca_palavra = palavra.lower()
localizacao = 0

while busca_palavra in busca_texto:
    busca = busca_texto.find(busca_palavra)    
    print(busca, end=" ")
    busca_texto = busca_texto[busca + 1:]
    localizacao = localizacao + (busca + 1)