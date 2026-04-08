ServerEvents.recipes((event)=>{
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:firebrick_lined_vat"
        ],
        "heat_requirement": "heated",
        "ingredients": [
            {
            "amount": 1,
            "item": "createaddition:biomass_pellet_block"
            }
        ],
        "machines": [
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode"
        ],
        "minSize": 1,
        "processingTime": 300,
        "results": [
            {
            "amount": 100,
            "id": "chemica:methane"
            },
        ]
    });
});

ServerEvents.tags('fluid', (event)=>{
    event.add('c:methane', 'chemica:methane');
});
