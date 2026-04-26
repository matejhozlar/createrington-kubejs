ServerEvents.recipes((event) => {
  // === IRIDIUM PROCESSING CHAIN (via electrolytic nickel refining) ===
  // Ref: Agent772/TFMG-Chemica-additions#3
  //
  // Step 1: nickel_dust + sulfuric_acid → sulfuric_nickel_solution (Create mixing, heated)
  // Step 2: sulfuric_nickel_solution → nickel_dust (returned) + 8% iridium_dust (vat electrolysis)
  //
  // Full zero-mining chain (connects to nickel-from-netherrack in chemica_platinum.ts):
  //   netherrack/basalt/blackstone → crush → nickel_dust
  //   nickel_dust + tfmg:sulfuric_acid → heat mix → sulfuric_nickel_solution
  //   sulfuric_nickel_solution → electrolysis (2 electrodes) → nickel_dust + 8% iridium_dust

  // --- Step 1: Dissolution (nickel_dust + sulfuric_acid → sulfuric_nickel_solution) ---
  // Ni + H₂SO₄ → NiSO₄ + H₂
  // sulfuric_nickel_solution was previously unused — this gives it its first recipe.
  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      { item: "chemica:nickel_dust" },
      { type: "neoforge:single", amount: 500, fluid: "tfmg:sulfuric_acid" },
    ],
    results: [{ amount: 500, id: "chemica:sulfuric_nickel_solution" }],
  });

  // --- Step 2: Electrolysis (sulfuric_nickel_solution → nickel_dust + iridium_dust) ---
  // Electrolytic refining deposits pure nickel on the cathode; PGM impurities (iridium,
  // platinum, etc.) settle as anode slime — represented as 8% iridium_dust per batch.
  // Nickel is returned so the only running cost is sulfuric acid.
  // At 8% per 500mb: ~12.5 batches per iridium_dust, ~6,250mb sulfuric_acid per iridium ingot.
  // Uses 2 electrodes (vs. mixing in the platinum chain) to differentiate the recipes.
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"],
    heat_requirement: "heated",
    ingredients: [
      {
        type: "neoforge:single",
        amount: 500,
        fluid: "chemica:sulfuric_nickel_solution",
      },
    ],
    machines: ["chemica:electrode", "chemica:electrode"],
    minSize: 1,
    processingTime: 400,
    results: [
      { count: 1, id: "chemica:nickel_dust" },
      { chance: 0.08, id: "chemica:iridium_dust" },
    ],
  });
});
