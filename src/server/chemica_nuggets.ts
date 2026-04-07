ServerEvents.recipes((event)=>{
    // A vat machine recipe for producing iron nuggets from chlorine and a red zultanite item, with no specific heat requirement and allowing only firebrick lined vats. 
    // The recipe requires 10 mB of chlorine and one red zultanite item, and it can be processed in a centrifuge machine. 
    // It produces 5 iron nuggets after 100 ticks of processing time.s
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "chemica:chlorine"
            },
            {
            "item": "garnished:red_zultanite"
            }
            
        ],
        "machines": [
            "tfmg:centrifuge"
        ],
        "minSize": 3,
        "processingTime": 100,
        "results": [
            {
            "amount": 5,
            "id": "minecraft:iron_nugget"
            },
            {
            "chance": 0.5,
            "amount": 1,
            "id": "minecraft:redstone"
            }
        ]
    });

    // Vat recipe for Blue zultanite to asurine and then to zinc nuggets
    event.remove({
        id: 'create:crushing/asurine'
    });
    event.remove({
        id: 'create:crushing/asurine_recycling'
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "tfmg:sulfuric_acid"
            },
            {
            "amount": 5,
            "item": "garnished:blue_zultanite"
            },
        ],
        "minSize": 3,
        "processingTime": 400,
        "results": [
            {
            "amount": 1,
            "id": "create:asurine"
            }
        ]
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            {
            "amount": 5,
            "item": "create:asurine"
            },
        ],
        "machines": [
            "tfmg:electrode",
            "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
            "amount": 3,
            "id": "create:zinc_nugget"
            },
            {
            "amount": 1,
            "id": "tfmg:sulfur_dust"
            },
        ]
    });

    // A vat machine recipe copper via veridium
    event.remove({
        id: 'create:crushing/veridium'
    });
    event.remove({
        id: 'create:crushing/veridium_recycling'
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "tfmg:air"
            },
            {
            "amount": 5,
            "item": "garnished:green_zultanite"
            },
        ],
        "machines": [
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode"
        ],
        "minSize": 3,
        "processingTime": 400,
        "results": [
            {
            "amount": 1,
            "id": "create:veridium"
            }
        ]
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {
            "amount": 5,
            "item": "create:veridium"
            },
        ],
        "machines": [
            "tfmg:electrode",
            "tfmg:electrode"
        ],
        "minSize": 3,
        "processingTime": 400,
        "results": [
            {
            "amount": 3,
            "id": "create:copper_nugget"
            },
            {
            "chance": 0.2,
            "amount": 1,
            "id": "chemica:silver_nugget"
            },
            {
            "chance": 0.1,
            "amount": 1,
            "id": "minecraft:gold_nugget"
            },
        ]
    });

    // vat recipe for gold via cynanide and ochrum
    event.remove({
        id: 'create:crushing/ochrum'
    });
    event.remove({
        id: 'create:crushing/ochrum_recycling'
    });
    event.remove({
        id: 'createbb:phase2/cyanide'
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heatRequirement": "superheated",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 100,
            "fluid": "chemica:methane"
            },
            {
            "type": "neoforge:single",
            "amount": 100,
            "fluid": "chemica:ammonia"
            },
            {
            "type": "neoforge:single",
            "amount": 100,
            "fluid": "chemica:oxygen"
            },
        ],
        "minSize": 3,
        "processingTime": 500,
        "results": [
            {
            "amount": 5,
            "id": "createbb:cyanide"
            }
        ]
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 100,
            "fluid": "tfmg:air"
            },
            {
            "amount": 5,
            "item": "createbb:cyanide"
            },
            {
            "amount": 5,
            "item": "garnished:yellow_zultanite"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "minSize": 3,
        "processingTime": 300,
        "results": [
            {
            "amount": 3,
            "id": "create:ochrum"
            }
        ]
    });
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:firebrick_lined_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            {
            "amount": 3,
            "item": "create:zinc_nugget"
            },
            {
            "amount": 6,
            "item": "create:ochrum"
            }
        ],
        "minSize": 3,
        "processingTime": 400,
        "results": [
            {
            "amount": 3,
            "id": "minecraft:gold_nugget"
            },
            {
            "chance": 0.50,
            "amount": 2,
            "id": "create:zinc_nugget"
            },
            {
            "chance": 0.20,
            "amount": 1,
            "id": "tfmg:lead_nugget"
            }
        ]
    });
});