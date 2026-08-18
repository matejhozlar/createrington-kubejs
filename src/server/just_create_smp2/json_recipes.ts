 

ServerEvents.recipes(event => {

  // Washing

event.custom({
  type: "create:splashing",
  ingredients: [
    {
      item: "minecraft:mud"
    }
  ],
  results: [
    {
      chance: 0.5,
      id: "minecraft:hanging_roots"
    }
  ]
});

// Haunting

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:charcoal"
    }
  ],
  results: [
    {
      chance: 0.666,
      id: "minecraft:coal"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:dark_oak_log"
    }
  ],
  results: [
    {
      id: "minecraft:pale_oak_log"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:dark_oak_sapling"
    }
  ],
  results: [
    {
      id: "minecraft:pale_oak_sapling"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:moss_block"
    }
  ],
  results: [
    {
      id: "minecraft:pale_moss_block"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:moss_carpet"
    }
  ],
  results: [
    {
      id: "minecraft:pale_moss_carpet"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:vine"
    }
  ],
  results: [
    {
      id: "minecraft:pale_hanging_moss"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:dark_oak_leaves"
    }
  ],
  results: [
    {
      id: "minecraft:pale_oak_leaves"
    }
  ]
});

// Mixing

event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "minecraft:bone_meal"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:water"
    }
  ],
  results: [
    {
      id: "minecraft:calcite"
    }
  ]
});

// Crafter

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "create:cogwheel"
    },
    B: {
      item: "create:brass_ingot"
    },
    C: {
      item: "create:encased_fan"
    },
    D: {
      item: "create:fluid_tank"
    },
    E: {
      item: "minecraft:elytra"
    },
    F: {
      item: "create:blaze_burner"
    },
  },
  pattern: [
    "ABABA",
    "CDEDC",
    " BFB "
  ],
  result: {
    count: 1,
    id: "create_sa:brass_jetpack_chestplate"
  },
  show_notification: false
});

 // Crushing

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "minecraft:deepslate"
    }
  ],
  processing_time: 250,
  results: [
    {
      count: 1,
      id: "minecraft:cobbled_deepslate"
    }
  ]
})

})