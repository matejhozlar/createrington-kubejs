ServerEvents.recipes((event) => {
    event.remove({ id: 'tfmg:casting/plastic_sheet' });
    event.custom({
        "type": "tfmg:casting",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 144,
            "fluid": "tfmg:molten_plastic"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "tfmg:plastic_sheet"
            }
        ]
    });
    event.remove({ id: 'chemica:casting/polyvinyl_chloride' });
    event.custom({
        "type": "tfmg:casting",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 144,
            "fluid": "chemica:polyvinyl_chloride"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "chemica:polyvinyl_chloride_sheet"
            }
        ]
    });
    event.remove({ id: 'chemica:casting/polyethylene_sheet' });
    event.custom({
        "type": "tfmg:casting",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 144,
            "fluid": "chemica:polyethylene"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "chemica:polyethylene_sheet"
            }
        ]
    });
    event.remove({ id: 'chemica:casting/epoxy_resin' });
    event.custom({
        "type": "tfmg:casting",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 144,
            "fluid": "chemica:epoxy_resin"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "chemica:cured_epoxy_sheet"
            }
        ]
    });
});