ServerEvents.recipes((event) => {
    event.remove({
        id: "create:crushing/limestone",
    });
    event.remove({
        id: "garnished:crushing/crushed_salt",
    });
    event.remove({
        id: "createbb:phase1/limestone_crushing",
    });
    event.remove({
        id: "createbb:phase1/limestone_tag_crushing",
    });
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                tag: "create:stone_types/limestone"
            }
        ],
        results: [
            {
                id: "createbb:white_phosphorus",
                count: 1
            },
            {
                id: "createbb:white_phosphorus",
                chance: 0.75
            },
            {
                id: "garnished:crushed_salt",
                count: 1
            },
            {
                id: "minecraft:iron_nugget",
                chance: 0.1,
                count: 2
            },
            {
                id: "create:zinc_nugget",
                count: 2,
                chance: 0.05
            },
            {
                id: "tfmg:limesand",
                count: 1
            }
        ]
    });
});