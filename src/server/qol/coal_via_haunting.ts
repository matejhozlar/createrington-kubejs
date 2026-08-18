// KubeJS file to add Create Garnished Roots recipes
ServerEvents.recipes((event) => {
  event.custom({
    type: "create:haunting",
    ingredients: [
      {
        item: "minecraft:charcoal",
      },
    ],
    results: [
      {
        chance: 0.666,
        id: "minecraft:coal",
      },
    ],
  }).id("kubejs:haunting/coal_via_charcoal");
});
