ServerEvents.recipes((event) => {
  event.remove({
    output: "tfmg:napalm_bomb",
  });
  event.remove({
    output: "tfmg:flamethrower",
  });
  event.remove({
    output: "tfmg:thermite_grenade",
  });
  event.remove({
    output: "tfmg:zinc_grenade",
  });
  event.remove({
    output: "tfmg:copper_grenade",
  });
  event.remove({
    output: "tfmg:pipe_bomb",
  });
  event.remove({
    output: "tfmg:napalm_potato",
  });
});
