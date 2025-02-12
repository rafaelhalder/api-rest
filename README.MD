npm init -y
npm i typescript@5.5.4 @types/node@20.14.12 -D
-- npx tsc src/server.ts // compila ts para js // não usar pois vai usar tsx
npm i tsx@4.16.2 -D
npx tsc --init // cria tsconfig.json

https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
//pegar a versão do node utilizado // 20
e alterar todos os campos que tem lá

npm i express@4.19.2
npm i --save-dev @types/express
