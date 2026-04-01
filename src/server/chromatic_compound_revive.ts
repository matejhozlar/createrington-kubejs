ServerEvents.recipes((event)=>{
  // Chromatic Compound via Mixing
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [
      {
        "item": "minecraft:glowstone_dust"
      },
      {
        "item": "minecraft:glowstone_dust"
      },
      {
        "item": "minecraft:glowstone_dust"
      },
      {
          "item": "create:powdered_obsidian"
      },
      {
          "item": "create:powdered_obsidian"
      },
      {
          "item": "create:powdered_obsidian"
      },
      {
          "item": "create:polished_rose_quartz"
      }
    ],
    "results": [
      {
        "amount": 1,
        "id": "create:chromatic_compound"
      }
    ]
  });
  // Refined Radiance via Sequenced Assembly
  // event.custom({
  //   "type": "northstar:engraving",
  //   "ingredients": [
  //     { "item": "create:chromatic_compound" }
  //   ],
  //   "processing_time": 2000,
  //   "results": [
  //     { "id": "create:refined_radiance" }
  //   ]
  // });
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
        "item": "create:chromatic_compound"
    },
    loops: 5,
    "results": [
        {
            "count": 1,
            "id": "create:refined_radiance"
        }
    ],
    "sequence": [
        {
        "type": "northstar:engraving",
        "ingredients": [
          { "item": "create:chromatic_compound" }
        ],
        "processing_time": 250,
        "results": [
          { "id": "create:chromatic_compound" }
        ]
        },
        {
        "type": "create:filling",
        "ingredients": [
          { "item": "create:chromatic_compound" },
          { "type": "neoforge:single", "fluid": "tfmg:cooling_fluid", "amount": 100 }
        ],
        "results": [
          { "id": "create:chromatic_compound" }
        ]
        }
    ],
    "transitional_item": {
        "id": "create:chromatic_compound"
    }
  });
  // Refined Radiance Casing via Item Application
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "tag": "c:stripped_logs"
      },
      {
        "item": "create:refined_radiance"
      }
    ],
    "results": [
      {
        "id": "create:refined_radiance_casing"
      }
    ]
  });
  // Shadow Steel via Sequenced Assembly
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
        "item": "create:chromatic_compound"
    },
    loops: 5,
    "results": [
        {
            "count": 1,
            "id": "create:shadow_steel"
        }
    ],
    "sequence": [
        {
        "type": "create:filling",
        "ingredients": [
          { "item": "create:chromatic_compound" },
          { "type": "neoforge:single", "fluid": "tfmg:napalm", "amount": 100 }
        ],
        "results": [
          { "id": "create:chromatic_compound" }
        ]
        },
        {
        "type": "create:filling",
        "ingredients": [
          { "item": "create:chromatic_compound" },
          { "type": "neoforge:single", "fluid": "create_deep_dark:molten_echo", "amount": 1 }
        ],
        "results": [
          { "id": "create:chromatic_compound" }
        ]
        },
        {
        "type": "northstar:engraving",
        "ingredients": [
          { "item": "create:chromatic_compound" }
        ],
        "processing_time": 40,
        "results": [
          { "id": "create:chromatic_compound" }
        ]
        }
    ],
    "transitional_item": {
        "id": "create:chromatic_compound"
    }
  });
  // Shadow Steel Casing via Item Application
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag": "c:stripped_logs" },
      { "item": "create:shadow_steel" }
    ],
    "results": [
      { "id": "create:shadow_steel_casing" }
    ]
  });

  //Chromatic Compound Reset
  event.shapeless('create:chromatic_compound', ['create:chromatic_compound']);
});