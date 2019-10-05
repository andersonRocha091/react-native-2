# Estilos e Animações

## Tópicos
Com esse desafio, você aprenderá:

- Estilos mais avançados.
- Animações
- Diferenças de android e IOS

## Requisitos
Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

## Detalhes

Dentro da pasta src, você encontrará a estrutura básica do projeto React Native, todos arquivos necessários de configuração já estão criados. Sua missão será criar tela conforme o exemplo do vídeo abaixo.

Dentro da pasta screens tem o arquivo Profile, você terá um objeto com as informações do usuário.

### Tarefas
1. Header
  - Deve conter a logo da CodeNation com a classe `header-image`
    - `https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png`
2. Loading
  - Deve conter um ActivityIndicator com no máximo 600 milisegundos antes de mostrar o conteúdo.
3. Body
  - Deve conter a imagem do usuário que já se encontra no objeto. Obs: a imagem deve conter a classe `profile-image`.
  - Deve conter duas sessões que deverão ser animadas com uma opacidade depois do loading.
    - A opacidade deve ser aplicada em um componente View com a classe `contact-content`.
    - A primeira sessão deve conter os dados do linkedin e do github. e a segunda sessão os demais campos.
    - Os labels deverão conter a classe `contact-label`
    - Os valores dos campos deverão conter a classe `contact-value` com exceção dos valores dos idiomas que deve conter a classe `contact-language`

### Exemplo
![](https://codenation-challenges.s3-us-west-1.amazonaws.com/react-native-2/react-native-2.webm)

## Rodando a aplicação
Na primeira execução rodar o comando:
```
npm run android
```
Para rodar a aplicação:
```
npm start
```
