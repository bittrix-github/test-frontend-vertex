# Teste Front-End Vertex

Olá! Sou [Pedro Bittencourt](https://www.linkedin.com/in/bittrix/), 32 anos, Físico e Engenheiro Eletricista pela Uerj.

Este *readme* contém informações sobre o desenvolvimento da aplicação tida como teste para o processo seletivo **desenvolvedor front-end** da [Vertex Digital](https://vertexdigital.co/).<br><br>

## Informações e aspectos sobre o desenvolvimento da aplicação

- Sistema operacional: Windows 10 Pro 64 bits;
- Editor de texto: Visual Studio Code (Versão 1.71.2);
- [Node.js](https://nodejs.org/en/) (Versão 16.17.0) ;
- Desenvolvido em [React](https://reactjs.org/);
- Preset com [Create React App](https://create-react-app.dev/).<br><br>

## Pacotes instalados

- [styled components](https://styled-components.com/);
- [Axios](https://github.com/axios/axios);
- [ReactPlayer](https://www.npmjs.com/package/react-player).<br><br>

## Como rodar a aplicação

#### Localmente:

- Ter Node.js instalado;
- Explorar a pasta *youtube-vertex* no seu editor de texto de preferência;
- No terminal do editor de texto, executar *npm start*;
- A aplicação será inicializada em seu navegador padrão (ver **Notas**) em http://localhost:3000/.<br><br>

#### Online:

Acesse a url [teste-vertex-bittrix.surge.sh](https://teste-vertex-bittrix.surge.sh) no seu navegador de preferência (ver **Notas**).

>Observação: a aplicação foi buildada para produção e feito deploy em [Surge.sh](https://surge.sh/).

<br>

## Bugs

- Em alguns momentos (não consegui identificar um padrão), quando algum vídeo é tocado, um erro é mostrado no console:<br><br>
`Failed to execute www-widgetapi.js:963 'postMessage' on 'DOMWindow':The target origin provided ('https://www.youtube.com') does not match the recipient window's origin ('http://localhost:3000').`<br><br>
Encontrei alguns posts em fóruns pela internet onde pessoas que utilizam essa mesma API relatam receber esse erro no console, mas nenhum apresentou solução. Aparentemente, é algo originado na própria API.<br><br>
Uma possível solução apresentada não me pareceu viável, já que a origem da chamada da API deveria ser hard coded no player:<br><br>
`https://www.youtube.com/embed/{video.id}?showinfo=0&enablejsapi=1&origin={URL_DO_HOST}`<br><br>
Trocar o host da aplicação implicaria em alterações diretamente no código;<br><br>

- Quando alguma das respostas para a pesquisa é um canal do YouTube, a API não retorna valores suficientes para tocar algum vídeo (como o vídeo mais recente postado no canal, por exemplo). A resposta pode ser identificada entre um vídeo ou um canal pela propriedade *item.id.kind* (`'youtube#video'` ou `'youtube#channel'`) e poderia ser suprimida na lista de resultados. Entretanto, optei por mantê-las, já que a API retorna *thumbnail* e *título* do canal.<br><br>

- A API não retorna, na propriedade *item.statistics*, a quantidade de *dislikes* do vídeo (exigência do projeto). As propriedades retornadas são:<br><br>
• &nbsp;*commentCount*: quantidade de comentários no vídeo;<br><br>
• &nbsp;*favoriteCount*: quantidade de favoritos do vídeo;<br><br>
• &nbsp;*likeCount*: quantidade de curtidas do vídeo;<br><br>
• &nbsp;*viewCount*: quantidade de visualizações do vídeo.<br><br>
Optei, arbitrariamente, por incluir a quantidade de comentários no vídeo ( `item.statistics.commentCount` );<br><br>

- Rodando a aplicação no navegador de um dispositivo móvel (via [teste-vertex-bittrix.surge](https://teste-vertex-bittrix.surge.sh)), o modo tela cheia do **ReactPlayer**, automaticamente, rotaciona o vídeo para o modo paisagem (não há parâmetros no pacote para previnir esse comportamento padrão). Ao sair do modo tela cheia, alguns estilos são quebrados na página. Ao retornar à página com os resultados, os estilos são restaurados ao normal.<br><br>


## Notas

- Desenvolvimento otimizado para Google Chrome (Versão 106.0.5249.62) versão desktop;<br><br>
- 795px min-height;<br><br>
- 390px min-width (iPhone 12 Pro do *Chrome DevTools*).<br><br>


## Versões futuras da aplicação

- Mostrar mais de 5 resultados através da propriedade `&maxResults={NUMERO_DE_RESULTADOS}`	na url da API;<br><br>
- Criar toggle de light/dark mode;<br><br>
- Responsividade completa.
