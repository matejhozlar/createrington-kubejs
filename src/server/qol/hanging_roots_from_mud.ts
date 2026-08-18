ServerEvents.recipes(event => {
    event.custom({
    type: "create:splashing",
    ingredients: [
        {
        item: "minecraft:mud"
        }
    ],
    results: [
        {
        chance: 0.5,
        id: "minecraft:hanging_roots"
        }
    ]
    }).id('kubejs:splashing/hanging_roots_from_mud');
});