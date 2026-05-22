ServerEvents.recipes((event) => {
    event.remove({
        mod: 'createcasing',
        not: [
            { id: 'createcasing:sequenced_assembly/chorium_ingot' },
            { output: 'createcasing:creative_casing' },
            { output: 'createcasing:chorium_ingot' },
            { output: 'createcasing:andesite_automatic_clutch' },
            { output: 'createcasing:andesite_configurable_gearbox' }
        ]
    });
});