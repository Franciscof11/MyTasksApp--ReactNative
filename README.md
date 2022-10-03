# Projeto MyTasks App
<p align="center">
  <a href="https://inforgeneses.com.br/" target="blank">
    <img src="https://i.imgur.com/ZrJIyr8.png" width="650" alt="MyTask App Banner" />
  </a>
</p>

## Instalação

```bash
# instale o yarn
$ npm i -g yarn

# instale o expo cli
$ npm i -g expo-cli

# utilize yarn para instalar dependências
$ yarn install
```

## Testes

###### Recomenda-se a instação da extensão **[Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)**

```bash
# Rodandno testes com o yarn
$ yarn test
```

<p>Para criar novos testes de componentes, basta criar um arquivo <strong>.spec.tsx</strong> dentro da pasta <strong>__tests__</strong> <br>Ex: <strong>InputCades.spec.tsx</strong></p>

## Storybook

```bash
# Inicie o Storybook no browser
# *Recomended*
$ yarn storybook

# Inicie o Storybook no emulador *Will be removed*
# altere no App.tsx o valor da variável
# enableStorybook para true
$ expo start
```

## Rodando o app

```bash
# Inicie o Expo
$ expo start
```

<p>Depois que todos os passos acima forem seguidos, o app poderá ser visualizado
tanto em um dispositivo físico ou em um emulador.</p>
<p>Neste momento, instruções claras devem aparecer no terminal, caso
as informações que estejam lá não sejam as que você busca, recomendo que acesse as documentações.</p>
<details>
  <summary><strong>Documentações Úteis</strong></summary>

- **v45.x** ([Expo](https://docs.expo.dev/))
- **v0.x** ([React Native](https://reactnative.dev/docs/getting-started))
- **v5.x** ([Styled Components](https://styled-components.com/docs))
- **v6.x** ([StoryBook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/))
- **v2.x** ([Modalize](https://jeremybarbet.github.io/react-native-modalize/#/))

</details>
