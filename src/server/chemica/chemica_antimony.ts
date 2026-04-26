ServerEvents.recipes((event) => {
  // === ANTIMONY PROCESSING CHAIN ===
  // Ref: Agent772/TFMG-Chemica-additions#2
  //
  // Option A: Passive byproduct — lead ore crushing drops 5% antimony_dust
  // Option B: TEL thermal cracking — 250mb tetraethyllead → antimony_nugget (+ lead_nugget byproduct)
  // Zero-mining path: blackstone → crushed_raw_lead (already in chemica_platinum.ts)
  //   → smelt → lead_ingot → TEL → vat (heated + mixing) → antimony_nugget

  // --- Option A: Lead ore crushing byproduct ---
  // Galena (lead ore) commonly contains antimony as a natural impurity.
  // Chemica already adds silver_dust as a byproduct — antimony fits the same pattern.
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "tfmg:lead_ore" }],
    processingTime: 400,
    results: [
      { count: 1, id: "create:crushed_raw_lead" },
      { chance: 0.75, id: "create:experience_nugget" },
      { chance: 0.075, id: "chemica:silver_dust" },
      { chance: 0.05, id: "chemica:antimony_dust" },
    ],
  });
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "tfmg:deepslate_lead_ore" }],
    processingTime: 400,
    results: [
      { count: 1, id: "create:crushed_raw_lead" },
      { chance: 0.75, id: "create:crushed_raw_lead" },
      { chance: 0.75, id: "create:experience_nugget" },
      { chance: 0.14, id: "chemica:silver_dust" },
      { chance: 0.1, id: "chemica:antimony_dust" },
    ],
  });
  event.remove({ id: "create:crushing/raw_lead" });
  event.custom({
    type: "create:crushing",
    ingredients: [{ item: "tfmg:raw_lead" }],
    processingTime: 400,
    results: [
      { count: 1, id: "create:crushed_raw_lead" },
      { chance: 0.75, id: "create:experience_nugget" },
      { chance: 0.075, id: "chemica:silver_dust" },
      { chance: 0.05, id: "chemica:antimony_dust" },
    ],
  });
  // --- Option B: TEL thermal cracking (vat) ---
  // TEL is produced from lead + ethanol + chlorine and was previously a dead-end fluid.
  // The lead used in TEL comes from galena which naturally carries antimony impurities;
  // heating TEL causes thermal decomposition, releasing those impurities.
  // lead_nugget byproduct represents the lead residue left after decomposition.
  // Full chain (zero-mining via blackstone):
  //   blackstone → crush (7%) → crushed_raw_lead → smelt → lead_ingot
  //   → vat (ethanol + chlorine) → TEL → vat (heated + mixing) → antimony_nugget
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"],
    heat_requirement: "superheated",
    ingredients: [
      { type: "neoforge:single", amount: 250, fluid: "chemica:tetraethyllead" },
    ],
    machines: ["tfmg:mixing"],
    minSize: 1,
    processingTime: 400,
    results: [
      { count: 1, id: "chemica:antimony_nugget" },
      { chance: 0.5, count: 1, id: "tfmg:lead_nugget" },
    ],
  });
});
