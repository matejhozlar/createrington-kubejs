ServerEvents.recipes(event => {

    event.custom({
    type: "create:haunting",
    ingredients: [
        {
        item: "minecraft:dark_oak_sapling"
        }
    ],
    results: [
        {
        id: "minecraft:pale_oak_sapling"
        }
    ]
    }).id('kubejs:haunting/pale_oak_sapling_from_dark_oak_sapling');

    event.custom({
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:moss_block"
        }
      ],
      results: [
        {
          id: "minecraft:pale_moss_block"
        }
      ]
    }).id('kubejs:haunting/pale_moss_block_from_moss_block');
    
    event.custom({
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:moss_carpet"
        }
      ],
      results: [
        {
          id: "minecraft:pale_moss_carpet"
        }
      ]
    }).id('kubejs:haunting/pale_moss_carpet_from_moss_carpet');
    
    event.custom({
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:vine"
        }
      ],
      results: [
        {
          id: "minecraft:pale_hanging_moss"
        }
      ]
    }).id('kubejs:haunting/pale_hanging_moss_from_vine');
    
    event.custom({
      type: "create:haunting",
      ingredients: [
        {
          item: "minecraft:dark_oak_leaves"
        }
      ],
      results: [
        {
          id: "minecraft:pale_oak_leaves"
        }
      ]
    }).id('kubejs:haunting/pale_oak_leaves_from_dark_oak_leaves');
});