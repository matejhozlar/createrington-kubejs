ServerEvents.recipes((event) => {
  // Vat Machine Recipe for water electrolysis to produce hydrogen and oxygen,
  // with a heat requirement of "heated" and allowing specific vat types.
  // The recipe requires 1000 mB of water and two electrodes as machines, producing 200 mB of hydrogen and 100 mB of oxygen after 100 ticks of processing time.
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat"],
    heat_requirement: "superheated",
    ingredients: [
      {
        type: "neoforge:single",
        amount: 1000,
        fluid: "minecraft:water",
      },
    ],
    machines: ["chemica:electrode", "chemica:electrode"],
    minSize: 1,
    processingTime: 100,
    results: [
      {
        amount: 200,
        id: "tfmg:hydrogen",
      },
      {
        amount: 100,
        id: "chemica:oxygen",
      },
    ],
  });

  // A vat machine recipe for producing hydrogen fuel from hydrogen and oxygen, with a heat requirement of "superheated" and allowing specific vat types.
  // The recipe requires 1000 mB of hydrogen, 500 mB of oxygen, and coal dust as an additional ingredient.
  // It can be processed in a mixing machine and produces 500 mB of hydrogen fuel after 200 ticks of processing time.
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat",
    ],
    ingredients: [
      {
        type: "neoforge:single",
        amount: 1000,
        fluid: "tfmg:hydrogen",
      },
      {
        type: "neoforge:single",
        amount: 500,
        fluid: "chemica:oxygen",
      },
      {
        item: "chemica:coal_dust",
      },
    ],
    machines: ["tfmg:mixing"],
    minSize: 1,
    processingTime: 200,
    results: [
      {
        amount: 500,
        id: "chemica:hydrogen_fuel",
      },
    ],
  });
});

ServerEvents.tags("fluid", (event) => {
  event.add("c:liquid_hydrogen", "tfmg:hydrogen");
});
