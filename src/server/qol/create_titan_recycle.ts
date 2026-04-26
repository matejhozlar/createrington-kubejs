// KubeJS file to disable sophisticated omaga stack upgrade tiers
ServerEvents.recipes((event) => {
  // Slabs back to Full Blocks
  event.shapeless(Item.of("northstar:titanium_sheetmetal", 1), [
    "2x northstar:titanium_sheetmetal_slab",
  ]);
  event.shapeless(Item.of("northstar:titanium_plating", 1), [
    "2x northstar:titanium_plating_slab",
  ]);
  // Slab converter to other slab variant
  event.stonecutting(
    "northstar:titanium_sheetmetal_vertical_slab",
    "northstar:titanium_sheetmetal_slab",
  );
  event.stonecutting(
    "northstar:titanium_plating_vertical_slab",
    "northstar:titanium_plating_slab",
  );
  event.stonecutting(
    "northstar:titanium_sheetmetal_slab",
    "northstar:titanium_sheetmetal_vertical_slab",
  );
  event.stonecutting(
    "northstar:titanium_plating_slab",
    "northstar:titanium_plating_vertical_slab",
  );
  // Stairs back to Full Blocks
  event.stonecutting(
    "northstar:titanium_plating",
    "northstar:titanium_plating_stairs",
  );
  // Back to Titanium Sheets / Ingots
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "northstar:titanium_sheetmetal",
      },
    ],
    results: [
      {
        id: "northstar:titanium_sheet",
        count: 1,
      },
    ],
  });
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "northstar:titanium_plating",
      },
    ],
    results: [
      {
        id: "northstar:titanium_ingot",
        count: 1,
      },
    ],
  });
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "northstar:titanium_pillar",
      },
    ],
    results: [
      {
        id: "northstar:titanium_ingot",
        count: 1,
      },
    ],
  });
});
