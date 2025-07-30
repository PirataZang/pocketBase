/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3063842665",
    "maxSelect": 0,
    "name": "sizes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3063842665",
    "maxSelect": 2,
    "name": "sizes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ]
  }))

  return app.save(collection)
})
