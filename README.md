# nodecsv-lfiles

Basta importar o mesmo dataset utilizado na POC [utilizando streams](https://github.com/ErickWendel/concat-large-files-nodejs-yt)

Baixa os dois arquivos do kaggle, cria uma pasta /dataset no root do projeto, extrai os arquivos e joga ambos no diretório.

após isso rode:

```sh
npm install // ou yarn install
touch final.csv
time node index.js
```

