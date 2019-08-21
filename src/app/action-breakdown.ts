export interface ActionBreakdown{
  // what is being acted upon (person, place, thing, etc)
  target: string;
  // the action being taken(attack, enter, steal, etc)
  action: string;
  // the sub-target for the action(ie. punch goblin in *head, combine rope with *hook)
  subtarget: string;
  // the item used to complete the action(ie. use *grappling-hook on wall)
  using: string;
}
