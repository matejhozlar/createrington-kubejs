// Converts Vibrant Vaults to Deco Shipping Containers then back to Vaults
ServerEvents.recipes(event => {
    const colors = [
        'white', 'light_gray', 'gray', 'black', 
        'brown', 'red', 'orange', 'yellow', 
        'lime', 'green', 'cyan', 'light_blue', 
        'blue', 'purple', 'magenta', 'pink'
    ];

    colors.forEach(color => {
        event.shapeless(Item.of(`createdeco:${color}_shipping_container`, 1), [
            `1x create_vibrant_vaults:${color}_shipping_container`
        ]).id(`kubejs:shipping_container_conversion/${color}_vibrant_to_deco`);

        event.shapeless(Item.of(`create_vibrant_vaults:${color}_shipping_container`, 1), [
            `1x createdeco:${color}_shipping_container`
        ]).id(`kubejs:shipping_container_conversion/${color}_deco_to_vibrant`);

        event.shapeless(Item.of(`create_vibrant_vaults:${color}_basic_shipping_container`, 1), [
            `1x dndecor:${color}_container`
        ]).id(`kubejs:shipping_container_conversion/${color}_decor_to_vibrant`);

        event.shapeless(Item.of(`dndecor:${color}_container`, 1), [
            `1x create_vibrant_vaults:${color}_basic_shipping_container`
        ]).id(`kubejs:shipping_container_conversion/${color}_vibrant_to_decor`);
        
    });

    event.custom({
        type: "create:splashing",
        ingredients: [
        {
            tag: "dndecor:dyed_containers_decor",
        },
        ],
        results: [
        {
            id: "dndecor:container",
        },
        ],
    });
});