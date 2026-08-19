ServerEvents.recipes((event) => {
  // Chromatic Compound via Mixing
  event.custom({
    type: "create:mixing",
    heat_requirement: "superheated",
    ingredients: [
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "create:polished_rose_quartz",
      },
    ],
    results: [
      {
        amount: 1,
        id: "create:chromatic_compound",
      },
    ],
  });

  // Shadow Steel Casing via Item Application
  event.custom({
    type: "create:item_application",
    ingredients: [{ tag: "c:stripped_logs" }, { item: "create:shadow_steel" }],
    results: [{ id: "create:shadow_steel_casing" }],
  });

  // Refined Radiance Casing via Item Application
  event.custom({
    type: "create:item_application",
    ingredients: [{tag: "c:stripped_logs",},{item: "create:refined_radiance"}],
    results: [{id: "create:refined_radiance_casing"}],
  });
});