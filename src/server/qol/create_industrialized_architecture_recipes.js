// KubeJS file to add the weathering / rusting recipes for Create: Industrialized Architecture
ServerEvents.recipes((event) => {
  // Array of items that have weathering/rusting stages
  const rustingItems = [
    'catwalk_stairs',
    'metal_plate_light',
    'metal_window',
    'metal_plate_block',
    'metal_vent',
    'iron_sheetmetal',
    'metal_pillar',
    'metal_truss',
    'metal_frame',
    'metal_catwalk',
    'tall_metal_catwalk',
    'metal_door',
    'folding_metal_door',
    'metal_railing'
  ];

  // Helper function to create weathering recipes
  const createRustingRecipe = (itemName) => {
    const baseItem = `i_architecture:${itemName}`;
    const slightlyRusted = `i_architecture:slightly_rusted_${itemName}`;
    const rusted = `i_architecture:rusted_${itemName}`;

    // First weathering stage
    event.custom({
      type: "create:filling",
      ingredients: [
        { item: baseItem },
        {
          type: "fluid_stack",
          amount: 250,
          fluid: "minecraft:water",
        },
      ],
      results: [{ id: slightlyRusted }],
    });

    // Second weathering stage
    event.custom({
      type: "create:filling",
      ingredients: [
        { item: slightlyRusted },
        {
          type: "fluid_stack",
          amount: 250,
          fluid: "minecraft:water",
        },
      ],
      results: [{ id: rusted }],
    });
  };

  // Loop through all items and create their rusting recipes
  rustingItems.forEach((item) => createRustingRecipe(item));
});
