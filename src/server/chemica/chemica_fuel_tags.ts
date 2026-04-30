ServerEvents.tags("fluid", (event) => {
  // Combustion fuels: tfmg:firebox_fuel + tfmg:flammable + c:fuel
  const combustionFuels = [
    "chemica:methane",
    "chemica:ethane",
    "chemica:propene",
    "chemica:butene",
    "chemica:light_hydrocarbons",
    "chemica:syngas",
    "chemica:hydrogen_fuel",
    "chemica:reformate",
  ];

  for (const fluid of combustionFuels) {
    event.add("tfmg:firebox_fuel", fluid);
    event.add("tfmg:flammable", fluid);
    event.add("c:fuel", fluid);
  }

  // Fix: biodiesel and ethanol already have tfmg:firebox_fuel but are missing tfmg:flammable
  event.add("tfmg:flammable", "chemica:biodiesel");
  event.add("tfmg:flammable", "chemica:ethanol");

  // Flammable feedstocks/solvents (fire hazard, not practical firebox fuels)
  const flammableFeedstocks = [
    "chemica:acetone",
    "chemica:benzene",
    "chemica:toluene",
    "chemica:xylene",
    "chemica:cyclohexane",
    "chemica:aromatic_mix",
    "chemica:ethyl_tert_butyl_ether",
    "chemica:gasoline_additive_mix",
    "chemica:carbon_monoxide",
    "chemica:nitroglycerin",
    "chemica:liquid_hydrogen",
  ];

  for (const fluid of flammableFeedstocks) {
    event.add("tfmg:flammable", fluid);
  }
});
