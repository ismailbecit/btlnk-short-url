# BTLNK URL Shortener

BTLNK is the shortest link shortener service with free, fast, and reliable URL shortening. It allows you to track, brand, and share your links.

### Register and Add Your Domains to the Whitelist

To obtain a custom API key, sign up at [btlnk.com](https://btlnk.com) and add your domains to the whitelist.

## API Usage

#### Establish Connection with the Service

```javascript
const key = "test-api-key";
const api = createBtlnkService({ apiKey: key });
```

| Parameter | Type      | Description                                                            |
| :-------- | :-------- | :--------------------------------------------------------------------- |
| `apiKey`  | `string`  | **Required**. Your API key.                                            |
| `isSSL`   | `boolean` | If you are experiencing an SSL error, you need to set this to `false`. |

#### Create a New Link

```javascript
await api
  .newLink({ url: "https://example.com" })
  .then((res) => res)
  .catch((err) => err);
```

| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| `url`     | `string` | **Required**. URL to shorten |

#### Get Registered Links

```javascript
await api
  .fetchLinks({ page: 1 })
  .then((res) => res)
  .catch((err) => err);
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `page`    | `number` | **Required**. Page number of the links |

#### Get Link Report

```javascript
await api
  .fetchLinkReport({ id: 1, page: 1 })
  .then((res) => res)
  .catch((err) => err);
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `number` | **Required**. Link ID                 |
| `page`    | `number` | **Required**. Page number of the link |

## LICENCE

[MIT](https://github.com/ismailbecit/btlnk-short-url/blob/main/LICENSE.txt)

## Authors and Acknowledgments

- [@ismailbecit](https://www.github.com/ismailbecit) for development.
- [@btlnk](https://www.github.com/btlnk)
