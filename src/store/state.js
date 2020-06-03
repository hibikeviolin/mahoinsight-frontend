import events from '@/store/gameevents'

const state = {
  item: {},
  chara: {},
  quest: {},
  maxRank: 8,
  maxLevel: 90,
  curRank: 0,
  curLevel: 0,
  rankColor: {
    1: "blue",
    2: "brown",
    3: "brown",
    4: "grey darken-1",
    5: "grey darken-1",
    6: "grey darken-1",
    7: "amber darken-2",
    8: "amber darken-2"
  },
  difficulties: ["normal", "hard", "other"],
  widthThreshold: [300, 600],
  gitcommit: "unknown",
  events,
  mobile: false
}

export default state
