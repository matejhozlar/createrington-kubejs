// KubeJS file to add Create Garnished Roots recipes
ServerEvents.recipes((event) => {
  event.shapeless(Item.of("create:empty_schematic", 1), ["create:schematic"]);

  event.shapeless(Item.of("create_pattern_schematic:empty_pattern_schematic", 1), ["create_pattern_schematic:pattern_schematic"]);
});
