# Next Level Week - NLW

A aplicação da NLW é a parte web e mobile do ecoleta, que é o seu marketplace de coleta de resíduos. Permite o cadastro dos items, pontos de coleta e visualização destes.

# Server:
- Comandos utlizados para criar o projeto e as instações necessárias:
 ```
    npm init -y

    npm install express
    
    npm install @types/express -D
      - Express: Micro Framework pra mexer com rotas.

    npm install typescript -D 
    npm install ts-node -D
    npx tsc --init 
      - cria o arquivo de config do Typescript

    npx ts-node src/server.ts
      - NPX serve para executar o pacote que foi instalado

    npm install ts-node-dev -D

    - Criar no package.json:
        "scripts": {
          "dev": "ts-node-dev src/server.ts"
        },
      - Agora é só executar npm run dev

    npm install cors
    npm install @types/cors -D

    npm install multer
    npm install @types/multer -D

    npm install celebrate
    npm install @types/hapi__joi -D
   ```
 
- Para banco de dados foi utilizado o knex

# Front
```
    npx create-react-app web --template=typescript

    npm start

    npm install react-icons

    npm install react-router-dom
    npm install @types/react-router-dom -D

    -- Para integração de mapas:

    npm install leaflet react-leaflet
    npm install @types/react-leaflet -D

    -- Integração com a API
    npm install axios

    npm install react-dropzone

```

# Mobile

```
    npm install -g expo-cli 
    -- instalar o expo

    expo init mobile
    --select - blank(typescript)

    npm start

    expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

    npm install @react-navigation/native
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    npm install @react-navigation/stack

    expo install react-native-maps

    expo install expo-constants

    expo install react-native-svg

    npm install axios

    expo install expo-location

    expo install expo-mail-composer
```
