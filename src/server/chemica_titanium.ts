ServerEvents.recipes((event)=>{
        // A vat machine recipe for producing rutile crystals and dust from chlorine and rose quartz, with no specific heat requirement and allowing specific vat types. 
    // The recipe requires 1000 mB of chlorine and one rose quartz item, and it can be processed in a centrifuge machine. 
    // It produces rutile crystals and dust with a 10% chance each after 100 ticks of processing time.
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {
            "item": "create:rose_quartz"
            },
            {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "chemica:chlorine"
            }
        ],
        "machines": [
            "tfmg:centrifuge"
        ],
        "minSize": 1,
        "results": [
            {
            "chance": 0.1,
            "id": "chemica:rutile_crystal"
            },
            {
            "chance": 0.1,
            "id": "chemica:medium_grade_rutile_crystal"
            },
            {
            "chance": 0.1,
            "id": "chemica:high_grade_rutile_crystal"
            },
            {
            "chance": 0.1,
            "id": "chemica:rutile_dust"
            }
        ]
    });
});