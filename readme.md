# Omnistack 10.0 || DevRadar

* [1. Conceitos abordados](#1-conceitos-abordados)
* [2. Descrição do projeto](#2-descrição-do-projeto)
* [3. Iniciando o Projeto](#3-iniciando-o-projeto)
* [4. Criando o projeto](#5-criando-o-projeto)

##  1. Conceitos abordados

1.  Back-end
    1.  Servidor via express
    2.  Armezenar dados de devs via DB não-relacional Mongoose.
    3.  socket.io para enviar coordenadas latitude, longitude.

2.  Front-end
    1.  Desenvolvimento usando React.
    2.  Uso do var navigator para geo-localização.

3.  Mobile
    1.  Desenvolvimento usando React Native.
    2.  Redux e Hooks.
    3.  React Navigation Stacks.
    4.  

##  2. Descrição do projeto

Um aplicativo para encontrar Devs com conhecimento em determinadas tecnologias, em um mapa, dentro de um raio de x km. O website cadastra Devs com dados do seu perfil no github e a sua localização (latitude, longitude). O app mobile mostra os Devs no mapa de geolocalização dentro da área pesquisada.

### Website
<img src="https://github.com/MaisDennis/Omnistack10-devradar/blob/master/Web.png" alt="Web" width="100%" height="auto">

### Mobile
<img src="https://github.com/MaisDennis/Omnistack10-devradar/blob/master/Mobile.png" alt="Mobile" width="30%" height="auto">


##  3. Iniciando o projeto

1.  Back-end
    1.  Iniciar DB:
        1.  Cloud Atlas: MongoDB -> Cluster Omnistack
        2.  MongoDB Compass (User: omnistack10 Senha: omnistack10)
        ```
        mongoose.connect('mongodb+srv://omnistack10:omnistack10@omnistack-ufvxl.mongodb.net/week10?   retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        ```
    2.  yarn dev

2.  Front-end
    1.  yarn start

3.  Mobile
    1.  

##  4. Criando o projeto
