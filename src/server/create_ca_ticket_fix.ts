// KubeJS file to disable sophisticated omaga stack upgrade tiers
ServerEvents.recipes(event => {
    event.remove({output: 'create_things_and_misc:empty_ticket'})
    event.custom({
        "type": "create:cutting",
        "ingredients": [
            {
            "item": "minecraft:paper"
            }
        ],
        "results": [
            {
            "id": "create_things_and_misc:empty_ticket",
            "count": 2
            }
        ]
    })
});