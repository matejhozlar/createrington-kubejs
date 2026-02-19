// KubeJS file to add Create Garnished Roots recipes
ServerEvents.recipes(event => {
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
            "item": "minecraft:charcoal"
            }
        ],
        "results": [
            {
            "id": "minecraft:coal"
            }
        ]
    })
});