ServerEvents.recipes(event => {

  event.custom({
    type: "create:compacting",
    heat_requirement: "heated",
    conditions: [
      {
        type: "neoforge:not",
        value: {
          type: "neoforge:mod_loaded",
          modid: "garnished"
        }
      }
    ],
    ingredients: [
      {
        item: "minecraft:bone_meal"
      },
      {
        type: "neoforge:single",
        amount: 1000,
        fluid: "minecraft:water"
      }
    ],
    results: [
      {
        id: "minecraft:calcite"
      }
    ]
  }).id("kubejs:compacting/calcite");

})