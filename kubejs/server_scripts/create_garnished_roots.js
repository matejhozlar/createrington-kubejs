// KubeJS file to add Create Garnished Roots recipes
ServerEvents.recipes(event => {
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
            "item": "minecraft:beetroot"
            }
        ],
        "results": [
            {
            "id": "garnished:soul_roots"
            }
        ]
    })
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
            "item": "minecraft:beetroot"
            }
        ],
        "results": [
            {
            "id": "deeperdarker:glowing_roots"
            }
        ]
    })
    event.custom({
        "type": "create_dragons_plus:sanding",
        "ingredients": [
            {
            "item": "minecraft:beetroot"
            }
        ],
        "results": [
            {
            "id": "garnished:barren_roots"
            }
        ]
    })
});