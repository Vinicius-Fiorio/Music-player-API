# Player Music with API in JavaScript

Desktop Screen            |  Mobile Screen
------------------------- | -------------------------
<img src="https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/fullScreen.png" alt="Picture project in desktop screen" height="400" width="800" />  |  <img src="https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/mobileScreen.png" alt="Picture project in mobile screen" height="350" width="300"/>


## [English] - Description
Simple project to study the use of an external API with asynchronous method

## How Use
To use the project you will need a key for the API, which you can get from the [RapidAPI](https://rapidapi.com) (an API marketplace where you can test several of them with a single key).
- **Getting Your Key**
  1. Sign up or log in to RapidAPI, after that you will already have an application by default, to access it just click on 'MyApps' in the top right menu.
  2. Open the application's menu and enter the security option ( As shown in the image )<br> <p align="center">![Menu Application](https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/Menu.png)</p>
  3. Your key will appear, just copy it <p align="center">![Your Key](https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/API_KEY.png)</p>
  4. Now in the project's **app.js** file on line 33 paste your key <br> 
~~~javascript
 const promisse = await fetch(url, {
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "YOUR_RAPID_API_KEY",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
  });
~~~

## Result
<p align="center"><img src="https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/result.gif" alt="Result Project" height="400"/></p>

---

## [Portuguese] Descrição
Projeto simples para estudar a utilização de uma API externa com método assíncrono

## Como Usar
Para utilizar o projeto você precisará de uma chave para a API, que será obtida através do [RapidAPI](https://rapidapi.com) ( Um mercado de API's onde você pode testar diversas delas com uma única chave).
- **Obtendo sua Chave**
   1. Cadastre-se ou entre no RapidAPI, após isso você já terá uma aplicação por padrão, para acessá-la basta clicar no 'MyApps' no menu superior direito.
   2. Abra o menu da aplicação e entre na opção de segurança ( Conforme a imagem ) <br> <p align="center">![Menu da Aplicação](https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/Menu.png)</p>
   3. Irá aparecer sua chave, basta copia-la <p align="center">![Sua chave](https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/API_KEY.png)</p>
   4. Agora no arquivo **app.js** do projeto na linha 33 cole sua chave <br> 
~~~javascript
 const promisse = await fetch(url, {
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "YOUR_RAPID_API_KEY",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
  });
~~~

## Resultado
<p align="center"><img src="https://github.com/Vinicius-Fiorio/Music-player-API/blob/main/result.gif" alt="Resultado Projeto" height="400"/></p>
