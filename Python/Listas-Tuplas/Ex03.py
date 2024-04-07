notas = []
for i in range(4):
    n = float(input(f"Digite a {i+1} nota: "))
    notas.append(n)
soma = sum(notas)
media = soma/len(notas)

print(notas)
print(f"A média é: {media}")