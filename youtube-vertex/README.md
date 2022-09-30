# Teste Front-End Vertex

Olá! Sou [Pedro Bittencourt](https://www.linkedin.com/in/bittrix/), 32 anos, Físico e Engenheiro Eletricista pela Uerj.

Este _readme_ contém informações sobre o desenvolvimento da aplicação tida como teste para o processo seletivo **desenvolvedor front-end** da [Vertex Digital](https://vertexdigital.co/).

## Informações e aspectos sobre o desenvolvimento da aplicação

- Sistema operacional: Windows 10 Pro 64 bits;
- Editor de texto: Visual Studio Code (Versão 1.71.2);
- [Node.js](https://nodejs.org/en/) (Versão 16.17.0) ;
- Desenvolvido em [React](https://reactjs.org/);
- Preset com [Create React App](https://create-react-app.dev/).

## Pacotes instalados

- [styled components](https://styled-components.com/);
- [Axios](https://github.com/axios/axios);
- [ReactPlayer](https://www.npmjs.com/package/react-player).

## Como rodar a aplicação

#### Localmente:

- Ter Node.js instalado;
- Explorar a pasta _youtube-vertex_ no seu editor de texto de preferência;
- No terminal do editor de texto, executar _npm start_;
- A aplicação será inicializada em seu navegador padrão (ver **Notas**) em http://localhost:3000/

#### Online:

Acesse a url [teste-vertex-bittrix.surge.sh](https://teste-vertex-bittrix.surge.sh) no seu navegador de preferência (ver **Notas**).

> Observação: a aplicação foi buildada para produção e feito deploy em [Surge.sh](https://surge.sh/).

## Bugs

- Em alguns momentos (não consegui identificar um padrão), quando algum vídeo é tocado, um erro é mostrado no console:<br>
  _`Failed to execute www-widgetapi.js:963 'postMessage' on 'DOMWindow': The target origin provided ('https://www.youtube.com') does not match the recipient window's origin ('http://localhost:3000').`_<br>
  Encontrei alguns posts em fóruns pela internet onde pessoas que utilizam essa mesma API relatam receber esse erro no console, mas nenhum apresentou solução. Aparentemente, é algo originado na própria API.<br>
  Uma possível solução apresentada não me pareceu viável, já que a origem da chamada da API deveria ser hard coded no player:<br>
  `https://www.youtube.com/embed/{video.id}?showinfo=0&enablejsapi=1&origin={URL_DO_HOST}`<br>
  Trocar o host da aplicação implicaria em alterações diretamente no código;<br><br>

- Quando alguma das respostas para a pesquisa é um canal do YouTube, a API não retorna valores suficientes para tocar algum vídeo (como o vídeo mais recente postado no canal, por exemplo). A resposta pode ser identificada entre um vídeo ou um canal pela propriedade _item.id.kind_ (`'youtube#video'` ou `'youtube#channel'`) e poderia ser suprimida na lista de resultados. Entretanto, optei por mantê-las, já que a API retorna _thumbnail_ e _título_ do canal.<br><br>

- A API não retorna, na propriedade _item.statistics_, a quantidade de _dislikes_ do vídeo (exigência do projeto). As propriedades retornadas são:<br>
  --- _commentCount_: quantidade de comentários no vídeo;
  --- _favoriteCount_: quantidade de favoritos do vídeo;
  --- _likeCount_: quantidade de curtidas do vídeo;
  --- _viewCount_: quantidade de visualizações do vídeo.<br>
  Optei, arbitrariamente, por incluir a quantidade de comentários no vídeo ( `item.statistics.commentCount` );<br><br>

- Rodando a aplicação no navegador de um dispositivo móvel (via [teste-vertex-bittrix.surge](https://teste-vertex-bittrix.surge.sh)), o modo tela cheia do **ReactPlayer**, automaticamente, rotaciona o vídeo para o modo paisagem (não há parâmetros no pacote para previnir esse comportamento padrão). Ao sair do modo tela cheia, alguns estilos são quebrados na página. Ao retornar à página com os resultados, os estilos são restaurados ao normal.

## Notas

- Desenvolvimento otimizado para Google Chrome (Versão 106.0.5249.62) versão desktop;<br><br>
- 795px min-height;<br><br>
- 390px min-width (iPhone 12 Pro do _Chrome DevTools_).

## Versões futuras da aplicação

- Mostrar mais de 5 resultados através da propriedade `&maxResults={NUMERO_DE_RESULTADOS}` na url da API;

- Criar toggle de light/dark mode;

- Responsividade completa.
