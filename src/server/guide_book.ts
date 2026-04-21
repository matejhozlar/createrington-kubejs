ServerEvents.recipes((event)=>{
    event.shapeless(
        Item.of('patchouli:guide_book', 1, { 'patchouli:book': 'patchouli:createrington_guide_book' }),
        [
            'minecraft:paper', 
            'createringtoncurrency:bill_1'
        ]
    );
});