# Project -2:  Create API

You can find the deployed API [here](https://xavier-v-project-2-build-api-production.up.railway.app/)

This [API](https://xavier-v-project-2-build-api-production.up.railway.app) contains two collections: 

 
* [Anime Quotes](https://xavier-v-project-2-build-api-production.up.railway.app/quote)

> https://xavier-v-project-2-build-api-production.up.railway.app/quote

* [Anime Data](https://xavier-v-project-2-build-api-production.up.railway.app/info)

> https://xavier-v-project-2-build-api-production.up.railway.app/info
---
These routes will return all the data contained in the database’s respective collections. 

If you’re looking to find specific entries, you can do so by adding the object id after /quote or /info.

---
## To find an object:
Example:

``` json
    {
        "_id": "63c07cc70beb9ab55c7e7363",
        "anime": "Mobile Suit Gundam Seed",
        "character": "Yzak Joule",
        "quote": "What's so fun about firing at targets that aren't moving?",
        "__v": 0
    }
```

---

The object above can be found using:

> https://xavier-v-project-2-build-api-production.up.railway.app/quote/63c07cc70beb9ab55c7e7363

Note: Any method used for the /quote path can be used for the /info path.

## You can create a quote by using:
> https://xavier-v-project-2-build-api-production.up.railway.app/quote/create

---

Ex: make a post request with the body as shown below.

``` json
    {
        "anime": "Mobile Suit Gundam Seed",
        "character": "Yzak Joule",
        "quote": "How do you do?"
    }
```

can be added using :

> https://xavier-v-project-2-build-api-production.up.railway.app/quote/create

Expected output:

```javascript
{
anime: 'Mobile Suit Gundam Seed',
character: 'Yzak Joule',
quote: 'How do you do?',
_id: new ObjectId("63c16a18c07b96ddde80cfa8"),
__v: 0
}
was entered into the DB
```

---

## You can update a quote by using:

>https://xavier-v-project-2-build-api-production.up.railway.app/quote/update/<:id>

Ex: To update this object:

```javascript
{
anime: 'Mobile Suit Gundam Seed',
character: 'Yzak Joule',
quote: 'How do you do?',
_id: new ObjectId("63c16a18c07b96ddde80cfa8"),
__v: 0
}
was entered into the DB
```
send a put request to https://xavier-v-project-2-build-api-production.up.railway.app/quote/update/63c16a18c07b96ddde80cfa8 with the body as shown below:


```json
{
"anime": "Mobile Suit Gundam Seed",
"character": "Yzak Joule",
"quote": "Doing just fine!"
}

```

Expected output:

```javascript
{
_id: new ObjectId("63c16a18c07b96ddde80cfa8"),
anime: 'Mobile Suit Gundam Seed',
character: 'Yzak Joule',
quote: 'How do you do?',
__v: 0
}
was changed to
{
_id: new ObjectId("63c16a18c07b96ddde80cfa8"),
anime: 'Mobile Suit Gundam Seed',
character: 'Yzak Joule',
quote: 'Doing just fine!',
__v: 0
}
```
---
---
## You can delete an entry by using:
>https://xavier-v-project-2-build-api-production.up.railway.app/quote/delete/<:id>

Example:

```javascript
{
_id: new ObjectId("63c16a18c07b96ddde80cfa8"),
anime: 'Mobile Suit Gundam Seed',
character: 'Yzak Joule',
quote: 'Doing just fine!',
__v: 0
}
```
Can be deleted using:
> https://xavier-v-project-2-build-api-production.up.railway.app/quote/delete/63c16a18c07b96ddde80cfa8

Expected Output:

```javascript
Deleted:
{
_id: new ObjectId("63c16a18c07b96ddde80cfa8"),
anime: 'Mobile Suit Gundam Seed',
character: 'Yzak Joule',
quote: 'Doing just fine!',
__v: 0
}
```