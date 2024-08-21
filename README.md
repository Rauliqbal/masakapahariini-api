
# Unofficial MasakApaHariIni API 🥗🍜🍛

An unofficial API from [Masakapahariini](https://www.masakapahariini.com/). I made this API using the scrapping method with the help of the cheerio library. Hopefully it can help you to develop food recipes applications 😉.



## API Reference


#### Base URL

```
https://masakapahariini-api
```

#### Get New Recipes

```BASH
/api/v1/recipes
```

| Method | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `string` | Get list new recipes |

#### Get Recipes by Page

```BASH
/api/v1/recipes/:id
```
`ex: /api/v1/recipes/2 `

| Method | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `GET`      | `string` | Get recipes by page |


## License

[MIT](https://github.com/Rauliqbal/masakapahariini-api/blob/main/LICENSE)

