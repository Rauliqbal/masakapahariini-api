
# Unofficial MasakApaHariIni API 🥗🍜🍛

An unofficial API from [Masakapahariini](https://www.masakapahariini.com/). I made this API using the scrapping method with the help of the cheerio library. Hopefully it can help you to develop food recipes applications 😉.



## API Reference

#### Get all items

```http
/api/v1/recipes
```

| Method | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `string` | Get list new recipes |

#### Get item

```HTTP
/api/v1/recipes/:page
```
`ex: /api/v1/recipes/2 `

| Method | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `GET`      | `string` | Get recipes details |

#### add(num1, num2)

Takes two numbers and returns the sum.


## License

[MIT](https://github.com/Rauliqbal/masakapahariini-api/blob/main/LICENSE)

