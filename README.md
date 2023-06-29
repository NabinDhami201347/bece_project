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
