ServerEvents.recipes((event) => {
  // === PLATINUM PROCESSING CHAIN ===
  // Ref: Agent772/TFMG-Chemica-additions#1
  //
  // Tier 1: Passive byproduct from crushing cobalt/nickel ore (2% platinum dust)
  // Tier 2: Vat leaching — nickel or cobalt dust + HCl → platinum dust
  // Tier 3: Zero-mining path — crush nether blocks → nickel dust → vat leach → platinum dust

  // --- Tier 1: Crushing byproducts ---

  // Add 2% platinum_dust to deepslate_cobalt_ore crushing
  event.remove({ id: "chemica:crushing/deepslate_cobalt_ore" });
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "chemica:deepslate_cobalt_ore" }],
    processingTime: 250,
    results: [
      { count: 2, id: "chemica:crushed_raw_cobalt" },
      { chance: 0.11, id: "chemica:nickel_dust" },
      { chance: 0.02, id: "chemica:platinum_dust" },
    ],
  });

  // Add 2% platinum_dust to nickel_ore crushing
  event.remove({ id: "create:crushing/nickel_ore" });
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "tfmg:nickel_ore" }],
    processingTime: 250,
    results: [
      { count: 1, id: "create:crushed_raw_nickel" },
      { chance: 0.11, id: "chemica:cobalt_dust" },
      { chance: 0.02, id: "chemica:platinum_dust" },
    ],
  });

  // --- Tier 2: Vat leaching ---
  // Nickel and cobalt dissolve readily in HCl (Ni/Co + 2HCl → metal chloride + H₂)
  // HCl chain: salt → brine → electrolysis → H₂ + Cl₂ → HCl (no platinum dependency)

  // 4x nickel_dust + 500mb HCl → platinum_dust + waste_slurry
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"],
    heat_requirement: "heated",
    ingredients: [
      { amount: 4, item: "chemica:nickel_dust" },
      { type: "neoforge:single", amount: 500, fluid: "chemica:hydrochloric_acid" },
    ],
    machines: ["tfmg:mixing"],
    minSize: 1,
    processingTime: 400,
    results: [
      { count: 1, id: "chemica:platinum_dust" },
      { amount: 500, id: "chemica:waste_slurry" },
    ],
  });

  // 4x cobalt_dust + 500mb HCl → platinum_dust + waste_slurry
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"],
    heat_requirement: "heated",
    ingredients: [
      { amount: 4, item: "chemica:cobalt_dust" },
      { type: "neoforge:single", amount: 500, fluid: "chemica:hydrochloric_acid" },
    ],
    machines: ["tfmg:mixing"],
    minSize: 1,
    processingTime: 400,
    results: [
      { count: 1, id: "chemica:platinum_dust" },
      { amount: 500, id: "chemica:waste_slurry" },
    ],
  });

  // --- Tier 3: Nether block crushing → nickel dust ---
  // Nickel is abundant in magmatic/mantle rocks.
  // Full zero-mining chain: nether block → nickel_dust → vat leach → platinum_dust

  // Netherrack: 4% nickel_dust
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "minecraft:netherrack" }],
    processingTime: 250,
    results: [{ chance: 0.04, id: "chemica:nickel_dust" }],
  });

  // Basalt: 5% nickel_dust (more directly magmatic)
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "minecraft:basalt" }],
    processingTime: 250,
    results: [{ chance: 0.05, id: "chemica:nickel_dust" }],
  });

  // Blackstone: gravel (guaranteed) + 7% crushed_raw_lead + 5% nickel_dust
  // Also feeds the antimony chain (see chemica_antimony.ts)
  // Lead rate is higher (7%) than nickel since lead is more geologically abundant
  // and the antimony chain that follows has more steps
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "minecraft:blackstone" }],
    processingTime: 250,
    results: [
      { count: 1, id: "minecraft:gravel" },
      { chance: 0.07, id: "create:crushed_raw_lead" },
      { chance: 0.05, id: "chemica:nickel_dust" },
    ],
  });
});
