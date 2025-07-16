/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file679219841",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "principal_image",
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

  // remove field
  collection.fields.removeById("file679219841")

  return app.save(collection)
})
