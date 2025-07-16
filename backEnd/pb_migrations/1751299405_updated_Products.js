/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // remove field
  collection.fields.removeById("text679219841")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text679219841",
    "max": 0,
    "min": 0,
    "name": "principal_image",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
