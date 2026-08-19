ServerEvents.recipes(event => {
    const dyesTags = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]

    dyesTags.forEach(color => {
        event.remove({ id: `interiors:crafting/chair/${color}_chair_from_other_chair` })
        event.remove({ id: `interiors:crafting/floor_chair/${color}_floor_chair_from_other_floor_chair` })

        event.shapeless(
            Item.of(`interiors:${color}_chair`, 1),
            [
                {tag: 'interiors:chairs'},
                {tag: `c:dyes/${color}`}
            ]
        ).id(`kubejs:interiors/chair/${color}_chair_from_other_chair`)

        event.shapeless(
            Item.of(`interiors:${color}_floor_chair`, 1),
            [
                {tag: 'interiors:floor_chairs'},
                {tag: `c:dyes/${color}`}
            ]
        ).id(`kubejs:interiors/floor_chair/${color}_floor_chair_from_other_floor_chair`)
    })

    // fixes for missing recipes due to multiversion and wrong recipes folder namin in original interiors mod
    event.custom({
        type: "minecraft:crafting_shaped",
        group: "building",
        accept_mirrored: true,
        pattern: [
            "PS",
            "SP"
        ],
        key: {
            P: {tag: "minecraft:planks"},
            S: {tag: "minecraft:wooden_slabs"}
        },
        result: {
            id: "interiors:seatwood_planks",
            count: 3
        }
    }).id('kubejs:interiors/seatwood_planks')

    event.custom({
        type: "minecraft:crafting_shaped",
        group: "building",
        pattern: [
            "PSP"
        ],
        key: {
            P: {tag: "minecraft:planks"},
            S: {tag: "minecraft:wooden_slabs"}
        },
        result: {
            id: "interiors:wall_mounted_table",
            count: 4
        }
    }).id('kubejs:interiors/wall_mounted_table')

    event.custom({
        type: "minecraft:crafting_shapeless",
        group: "building",
        ingredients: [
            {item: "create:belt_connector"},
            {tag: "minecraft:wooden_slabs"}
        ],
        result: {
            id: "interiors:kelp_seat",
            count: 1
        }
    }).id('kubejs:interiors/kelp_seat')

    event.custom({
        type: "minecraft:crafting_shapeless",
        category: "building",
        ingredients: [
            {tag: "minecraft:wooden_slabs"},
            {item: "interiors:kelp_seat"}
        ],
        result: {
            id: "interiors:kelp_floor_chair"
        }
    }).id('kubejs:interiors/kelp_floor_chair_from_seat')

    event.custom({
        type: "minecraft:crafting_shapeless",
        group: "building",
        ingredients: [
            {item: "interiors:kelp_seat"},
            {tag: "minecraft:planks"}
        ],
        result: {
            id: "interiors:kelp_chair",
            count: 1
        }
    }).id('kubejs:interiors/kelp_chair_from_seat')

    event.custom({
        type: "minecraft:crafting_shapeless",
        category: "building",
        ingredients: [
            {tag: "minecraft:wooden_slabs"},
            {tag: "minecraft:wooden_slabs"},
            {item: "create:belt_connector"},
        ],
        result: {
            id: "interiors:kelp_floor_chair"
        }
    }).id('kubejs:interiors/kelp_floor_chair')

    event.custom({
        type: "minecraft:crafting_shapeless",
        group: "building",
        ingredients: [
            {item: "create:belt_connector"},
            {tag: "minecraft:wooden_slabs"},
            {tag: "minecraft:planks"}
        ],
        result: {
            id: "interiors:kelp_chair",
            count: 1
        }
    }).id('kubejs:interiors/kelp_chair')
});