#Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno,
# imprima o número de alunos com média maior ou igual a 7.0.
medias = []
notas = 0
contador = 0
for i in range(10):
    print("-"*20)    
    print(f" {i+1} aluno")
    print("-"*20)
    for j in range(4):
        nota = float(input(f"Digite a {j+1}º nota: "))
        notas = notas + nota
    media = notas / 4
    medias.append(media)
for i in range(len(medias)):
    if(medias[i] >= 7):
        contador += 1
print(f"Foram aprovados {contador} alunos!")