ServerEvents.recipes(event => {
    event.remove({ output: 'create_sa:brass_jetpack_chestplate' });
    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        category: "misc",
        key: {
            A: {
            item: "create:cogwheel"
            },
            B: {
            item: "create:brass_ingot"
            },
            C: {
            item: "create:encased_fan"
            },
            D: {
            item: "create:fluid_tank"
            },
            E: {
            item: "minecraft:elytra"
            },
            F: {
            item: "create:blaze_burner"
            },
        },
        pattern: [
            "ABABA",
            "CDEDC",
            " BFB "
        ],
        result: {
            count: 1,
            id: "create_sa:brass_jetpack_chestplate"
        },
        show_notification: false
        }).id("kubejs:mechanical_crafting/brass_jetpack_chestplate");

    event.remove({ output: 'create_sa:andesite_jetpack_chestplate' });
    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        category: "misc",
        key: {
            C: {
            item: "create:cogwheel"
            },
            A: {
            item: "create:andesite_alloy"
            },
            B: {
                item: "create:belt_connector"
            },
            F: {
            item: "create:encased_fan"
            },
            T: {
            item: "create:fluid_tank"
            },
            E: {
            item: "minecraft:elytra"
            },
            G: {
            item: "create:blaze_burner"
            },
        },
        pattern: [
            "CABAC",
            "FTETF",
            "FAGAF"
        ],
        result: {
            count: 1,
            id: "create_sa:andesite_jetpack_chestplate"
        },
        show_notification: false
        }).id("kubejs:mechanical_crafting/andesite_jetpack_chestplate");
});