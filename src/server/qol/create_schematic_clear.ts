// KubeJS file to add Create Garnished Roots recipes
ServerEvents.recipes((event) => {
  event.shapeless(Item.of("create:empty_schematic", 1), ["create:schematic"]).id('kubejs:shapeless/empty_schematic');

  event.shapeless(Item.of("create_pattern_schematics:empty_pattern_schematic", 1), ["create_pattern_schematics:pattern_schematic"]).id('kubejs:shapeless/empty_pattern_schematic');
});
