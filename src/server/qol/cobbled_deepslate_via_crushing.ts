ServerEvents.recipes(event => {
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
            item: "minecraft:deepslate"
            }
        ],
        processing_time: 250,
        results: [
            {
            count: 1,
            id: "minecraft:cobbled_deepslate"
            }
        ]
    }).id("kubejs:crushing/cobbled_deepslate");
});