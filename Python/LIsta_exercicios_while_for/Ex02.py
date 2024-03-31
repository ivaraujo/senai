# Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

laco = False

while(laco != True):
    user = input("Digite seu usuário: ")
    password = input("Digite sua senha: ")
    if(user != password):
        print("Conta cadastrada!")
        laco = True
    else:
        print("Não use a senha igual ao usuário!")