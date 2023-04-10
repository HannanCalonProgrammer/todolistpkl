migrate((db) => {
  const collection = new Collection({
    "id": "8hw3iw2cv58r8z3",
    "created": "2023-04-05 04:24:56.219Z",
    "updated": "2023-04-05 04:24:56.219Z",
    "name": "todolist",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nf4uzndc",
        "name": "judulrencana",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1wezd6hq",
        "name": "user",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "fkzd0h6w",
        "name": "tenggatwaktu",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "z7xbjy6d",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "xdr1lnc9",
        "name": "tombol",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "home",
            "menu",
            "user",
            "sampah"
          ]
        }
      },
      {
        "system": false,
        "id": "3ehavg5i",
        "name": "nomor",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ot1ow5sf",
        "name": "gambar",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "rjjgedvw",
        "name": "ceklis",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "awpygymj",
        "name": "font",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8hw3iw2cv58r8z3");

  return dao.deleteCollection(collection);
})
