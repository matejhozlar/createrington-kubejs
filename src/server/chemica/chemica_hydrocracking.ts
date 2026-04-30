ServerEvents.recipes((event) => {
  // Diesel → Naphtha hydrocracking recipe.
  // Uses hydrogen as a reactant and oxygen as a pressure proxy — real hydrocracking
  // requires high pressure, which TFMG does not yet model. When native pressure
  // support lands (VatRecipeParams.pressure), the oxygen input can be replaced
  // with a real pressure value.
  // Nickel catalyst (Ni-Mo) is consumed each cycle, reflecting industrial practice.
  // LPG byproduct represents the light C3/C4 gases produced when cracking middle
  // distillates.
  // See: https://gitea.matejhoz.com/Createrington/kubejs/issues/13
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"],
    heat_requirement: "heated",
    ingredients: [
      {
        type: "neoforge:tag",
        amount: 500,
        tag: "c:diesel",
      },
      {
        type: "neoforge:tag",
        amount: 200,
        tag: "c:hydrogen",
      },
      {
        type: "neoforge:single",
        amount: 100,
        fluid: "chemica:oxygen",
      },
      {
        item: "chemica:nickel_catalyst",
      },
    ],
    machines: ["tfmg:mixing"],
    minSize: 1,
    processingTime: 400,
    results: [
      {
        amount: 250,
        id: "tfmg:naphtha",
      },
      {
        amount: 100,
        id: "tfmg:lpg",
      },
    ],
  });

  // Creosote → Naphtha + BTX hydrocracking recipe.
  // Creosote from TFMG coking is a coal tar fraction rich in polycyclic aromatic
  // hydrocarbons (PAHs). Hydrocracking saturates the PAH rings with hydrogen,
  // then cracks them into lighter molecules — naphtha and BTX aromatics
  // (benzene, toluene, xylene).
  // Higher hydrogen demand (350mb vs 200mb) reflects the hydrogen-deficient
  // nature of aromatic compounds. Platinum catalyst handles deep aromatic
  // hydrogenation better than nickel. Superheated conditions required for
  // PAH ring saturation.
  // See: https://gitea.matejhoz.com/Createrington/kubejs/issues/14
  event.custom({
    type: "tfmg:vat_machine_recipe",
    allowedVatTypes: ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"],
    heat_requirement: "superheated",
    ingredients: [
      {
        type: "neoforge:tag",
        amount: 500,
        tag: "c:creosote",
      },
      {
        type: "neoforge:tag",
        amount: 350,
        tag: "c:hydrogen",
      },
      {
        type: "neoforge:single",
        amount: 100,
        fluid: "chemica:oxygen",
      },
      {
        item: "chemica:platinum_catalyst",
      },
    ],
    machines: ["tfmg:mixing"],
    minSize: 1,
    processingTime: 400,
    results: [
      {
        amount: 200,
        id: "tfmg:naphtha",
      },
      {
        amount: 100,
        id: "chemica:benzene",
      },
      {
        amount: 75,
        id: "chemica:toluene",
      },
      {
        amount: 50,
        id: "chemica:xylene",
      },
    ],
  });
});
