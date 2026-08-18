ServerEvents.recipes(event => {
    // Pale Oak Shelf
    event.shaped(
        Item.of('shelvesbackport:pale_oak_shelf', 6),
        [
            'LLL',
            '   ',
            'LLL'
        ],
        {
            L: 'minecraft:stripped_pale_oak_log'
        }
    ).id('kubejs:pale_oak_shelf');
});