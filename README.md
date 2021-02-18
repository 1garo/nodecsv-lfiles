# nodecsv-lfiles

Repo insipirado por [este projeto](https://github.com/ErickWendel/concat-large-files-nodejs-yt)
Basta importar o mesmo dataset utilizado na POC [utilizando streams](https://github.com/ErickWendel/concat-large-files-nodejs-yt)

Baixa os dois arquivos do kaggle, cria uma pasta /dataset no root do projeto, extrai os arquivos e joga ambos no diretório.

OBS: lembre de renomear os arquivos ao extrai-los, ambos vem com o mesmo nome.

após isso rode:

```sh
npm install // ou yarn install
touch final.csv
time node index.js
```

