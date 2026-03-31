ServerEvents.recipes((event)=>{
    event.smelting( 'chemica:tin_ingot', 'create:crushed_tin_ore',0.1, 200);
    event.blasting( 'chemica:tin_ingot', 'create:crushed_tin_ore',0.1, 100);
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": 'create:crushed_tin_ore'
            }
        ],
        "results": [
            { 
                "id": 'chemica:tin_nugget',
                "count": 9,
            },
            {
                "id": 'minecraft:iron_nugget',
                "count": 2,
                "chance": 0.5
            }
        ]
    });
});