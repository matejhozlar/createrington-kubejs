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
});