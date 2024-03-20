# Escreva um programa que simula o jogo conhecido como "Pedra-Papel-Tesoura" de um jogador A contra um
# jogador B. O programa deve ler a escolha do jogador A e a escolha do jogador B. Por fim, o programa
# deve indicar quem foi o vencedor.
#
#Jogador1: A e Jogador2: B
#

print("ESCOLHA: pedra | papel | tesoura")
a = str(input("Jogador 1, digite sua escolha: "))
b = str(input("Jogador 2, digite sua escolha: "))

if a == "pedra":
    if b == "pedra":
        print("Empate!") 
    elif b == "tesoura":
        print("Jogador 1, VENCEU!")
    else:
        print("Jogador 2, VENCEU!")
elif a == "tesoura":
    if b == "tesoura":
        print("Empate!") 
    if b == "papel":
        print("Jogador 1, VENCEU!")
    else:
        print("Jogador 2, VENCEU!")
else:
    if b == "pedra":
        print("Jogador 1, VENCEU!") 
    if b == "tesoura":
        print("Jogador 2, VENCEU!")
    else:
        print("Empate!")
