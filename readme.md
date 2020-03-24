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
<img src="https://github.com/MaisDennis/Omnistack10-devradar/blob/master/Mobile.png" alt="Mobile" width="40%" height="auto">


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

    Dia 1: Backend
    1. npm e yarn são gerenciador de pacotes.
	1. instalar novas ferramentas e novas bibliotecas.
		1. Ex. bibliotecas de fazer API com correios, emissão de NF, emitir boleto, pdf, etc
    2. index.js
		1. 
```
app.get('/', (request, response) => {
  
})
```
		1. request vem do frontend, response é o que devolve para o frontend.
		2. 
```
const express = require('express');
const app = express();
app.get('/', (request, response) => {
  return response.send('Hello World');
})
app.listen(3333);
```
	1. Terminal> node index.js (server)
	2. vide Browser: localhost:3333
	3. 
```
return response.json({ message: 'Hello Omnistack'});
```
	1. json não pode ser string. Tem que ser vetor o u objeto (provavelmente converte em string).
	2. vide Browser: localhost:3333
	3. yarn add nodemon (server que atualiza)
	4. yarn nodemon index.js -> rodar o server que atualiza
		1. Criar yarn dev
```
 "scripts": {
    "dev": "nodemon index.js"
  },
```
	1. Download INsomnia
		1. insomnia.rest
		2. obs. alternativa: Postman
	2. Query PArams:
			1. 

			1. 
```
app.get('/users', (request, response) => {
  console.log(request.query);
  // return response.send('Hello World');
  return response.json({ message: 'Hello Omnistack'});
});
```
			1. 
```
// Query Params: request.query (Filtros, ordenação, paginação...)
```
			1. console.log => terminal: { search: 'Diego' }
	1. 
```
// Métodos http: get, post, put, delete

// Tipos de parametros: 
  // Query Params: request.query (Filtros, ordenação, paginação...)
  // Route Params: request.params (Identificar um recurso na alteração ou remoção)
  // Body: request.body (Dados para a criação ou alteração de um registro)
```
	1. não esquece => p/ express entender JSON:
```
app.use(express.json());
```
	1. DB -> MongoDB
		1. https://www.mongodb.com/cloud/atlas
	2. Build new cluster.
		1. COnectar com mongoose (yarn add mongoose etc).
	3. http://portquiz.net:27017/ serve para ver se a porta está OK, ou se está por tras de firewall.
	4. yarn add axios
	5. Mongo DB operators (Ex: $in usado em SearchController.js) -> procurar no Google.
---
1. Dia 2
	1. Entendendo o React
		1. 

		1. 

	1. yarn create react-app web
		1. ou npx create-react-app web
	2. App.js
	3. Lat e Long:
		1. 
```
navigator.geolocation.getCurrentPosition
```
		1. responsividade
```
@media (max-width: 650px) {
  main ul{
    grid-template-columns: 1fr;
  }
}
```
	1. conexao backend
		1. yarn add cors
			1. cross origin resouce sharing
		2. backend -> index.js
```
const cors = require('cors');
```
		1. 
```
app.use(cors());
```
	1. de volta ao front-end
		1. yarn add axios
	2. chamada api:
		1. 
---
1. Dia 3: Mobile
2. 

1. 

1. 

1. 

	1. Instalação do Expo
		1. yarn global add expo-cli
		2. procurar no google:
			1. yarn global path
				1. https://yarnpkg.com/lang/en/docs/cli/global/
			2. npm install -g expo-cli
		3. Se não aparecer nos arquivos .zshrc, .bash_profile, .profile, .bashrc: 
```
    export PATH="$(yarn global bin):$PATH"
```
		1. adicionar/escrever via terminal.
	1. expo init mobile
	2. 1a opção (blank)
	3. Y (via yarn)
	4. yarn start
	5. 

	1. para resolver adb problems no genymotion:
		1. https://github.com/Rocketseat/expo-common-issues
		2. https://medium.com/@birobirobiro/erro-adb-devices-no-genymotion-react-native-735c15594ac6
	2. Iniciar o react native:
		1. terminal: pasta mobile -> code .
	3. nao tem class nem ID nas propriedades dos compnentes.
	4. Usa style.
	5. Codar:
		1. criar src
			1. pages
				1. Main e Profile
			2. routes
	6. docs.expo.io
		1. Guides
			1. Routing & Navigation
				1. React Navigation
					1. https://github.com/react-navigation/react-navigation
					2. https://reactnavigation.org/docs/en/getting-started.html
					3. installing into an existing project
					4. yarn add react-navigation
					5. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
					6. Hello React Navigation.
					7. yarn add react-navigation-stack
					8. yarn add @react-native-community/masked-view
	7. routes.js
	8. App.js
	9. https://docs.expo.io/versions/latest/
		1. API Reference
		2. MapView
			1. expo install react-native-maps
		3. Location
			1. expo install expo-location
		4. vide Main.js
	10. Colocar os Devs no mapa:
		1. vide Main
	11. Docs: Webview
		1. expo install react-native-webview
		2. 
```
import { WebView } from 'react-native-webview';
```
	1. API Rest
		1. yarn add axios
		2. 
---
1. DIa 4: FUncionalidades avançadas
	1.  yarn add socket.io
		1. Adição de web socket
			1. requisições http (get, post...etc)
			2. GET, POST, PUT, DELETE
			3. req: Frontend -> Backend -> RESPOSTA ao Front.
			4. back end mandar resposta sem req do front-> protocolo WebSocket
	2. index.js
		1. 
```
const http = require('http');
```
		1. 
```
const server = http.Server(app);
```
		1. 
```
server.listen(3333);
```
	1. Criar websocket.js
		1. vide websocket e index.js
	2. Partiu mobile
		1. genymotion...gps...
		2. yarn start etc...run on device...
	3. yarn add socket.io-client
		1. vide api.js socket.js, Main.js -> setupWebsocket()
			1. console.log(socket.id) do backend (websocket.js) deve aparecer no terminal quando apertar a busca.