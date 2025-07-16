/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2134807182",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "imagens",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2134807182",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "field2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
