ServerEvents.recipes((event) => {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "tfmg:turbo",
        },
        loops: 1,
        results: [
            {
                count: 1,
                id: "tfmg:golden_turbo",
            },
        ],
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                { item: "tfmg:turbo" },
                { type: "neoforge:single", fluid: "tfmg:cooling_fluid", amount: 100 },
                ],
                results: [{ id: "tfmg:turbo" }],
            },
            {
                type: "create:deploying",
                ingredients: [
                { item: "tfmg:turbo" },
                { item: "tfmg:steel_mechanism" },
                ],
                results: [{ id: "tfmg:turbo" }],
            },
            {
                type: "create:filling",
                ingredients: [
                { item: "tfmg:turbo" },
                { type: "neoforge:single", fluid: "tfmg:lubrication_oil", amount: 100 },
                ],
                results: [{ id: "tfmg:turbo" }],
            },
            {
                type: "create:deploying",
                ingredients: [
                { item: "tfmg:turbo" },
                { item: "create:golden_sheet" },
                ],
                results: [{ id: "tfmg:turbo" }],
            },
            {
                type: "create:filling",
                ingredients: [
                { item: "tfmg:turbo" },
                { type: "neoforge:single", fluid: "createbb:phenylacetone", amount: 250 },
                ],
                results: [{ id: "tfmg:turbo" }],
            },
            {
                type: "northstar:engraving",
                ingredients: [{ item: "tfmg:turbo" }],
                processing_time: 250,
                results: [{ id: "tfmg:turbo" }],
            },
            {
                type: "create:deploying",
                ingredients: [
                { item: "tfmg:turbo" },
                { item: "chemica:advanced_circuit_board" },
                ],
                results: [{ id: "tfmg:turbo" }],
            },
        ],
        transitional_item: {
            id: "tfmg:turbo",
        },
    });

    event.shapeless("tfmg:turbo", ["tfmg:turbo"])
});