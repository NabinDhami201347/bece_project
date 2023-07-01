```sh
npm i react-hook-form zod @hookform/resolvers
```

```json
{
  "expo": {
    "experiments": {
      "tsconfigPaths": true // app.json
    }
  }
}
```

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"] // tsconfig.json
    }
  }
}
```

![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*W4Z9fdZj-bTrQhTTflr6pw.jpeg)

```sh
yarn add @react-native-community/async-storage @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage react-native-safe-area-context react-native-gesture-handler @react-navigation/bottom-tabs

npx expo install @react-native-async-storage/async-storage@1.17.11 react-native-safe-area-context@4.5.0  react-native-gesture-handler@~2.9.0
```

### [Authentication Flow](https://reactnavigation.org/docs/auth-flow/) | [Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/) | [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage)
