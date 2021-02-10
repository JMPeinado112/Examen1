var GAME_LEVELS = [`
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
............................................................o.....................................................
...................................................##......##......|.##..|........................................
.............................................##...................................................................
..................................................................................................................
.............................................................................o....................................
............................................................................##....................................
..##......................................o.o......##........................#....................................
..#.....................o....................................................#....................................
..#......................................#####.............................o.#....................................
..#.....................o.........##.........................................#....................................
..#..@.......................................................................#....................................
..############++###############............................#######+++#########....................................
.............#++#.............#++++++++++++++++++++++++++++#.....#+++#............................................
.............####.............#++++++++++++++++++++++++++++#.....#####............................................
..............................#++++++++++++++++++++++++++++#......................................................
..............................##############################......................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
..................................................................................................................
`, `
..................................................................................................................
..................................................................................................................
...##########################################################################.....................................
...#........................................................................#.....................................
...#........................................................................#.....................................
...#........................................................................#.....................................
...#........................................................................#.....................................
...#........................................................................#.....................................
...#........................................................................#.....................................
...#.........................................................o.........=....#.....................................
...#........................................................###.............#.....................................
...#...............................................##.......................#.....................................
...#.............|....|.....|...|......|.....#..|............|......|.......#.....................................
...#..................................##....................................#.....................................
...#.........................###......................................#######.....................................
...#................##..............................................=.......#.....................................
...#........##................................................=...........o.#.....................................
...#..@...........o.................o.............o.......................o.#.....................................
...################+++++++++++++++++#########################################.....................................
..................#+++++++++++++++++#.............................................................................
..................###################.............................................................................
..................................................................................................................
..................................................................................................................
`, `
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
............................................................................................................
=...........................................................................................................
=...........................................................................................................
=...........................................................................................................
=...........................................................................................................
=.........................###.................###..................###......................................
..@.............###.................####.................####...........................................o...
###....###..................................................................#..................###.....###..
#.#.................................................................................###................#.#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#..
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#o.
##########################################################################################################..
`, `
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
................................................................................................
................................................................................................
.@..............................................................................................
................................................................................................
................................................................................................
................................................................................................
................................................................................................
................................................................................................
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
................................................................................................
................................................................................................
................................................................................................
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.
................................................................................................
................................................................................................
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
................................................................................................
................................................................................................
................................................................................................
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.
................................................................................................
................................................................................................
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
................................................................................................
................................................................................................
................................................................................................
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.
................................................................................................
................................................................................................
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
................................................................................................
................................................................................................
................................................................................................
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.
................................................................................................
................................................................................................
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#
................................................................................................
................................................................................................
................................................................................................
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.
................................................................................................
.........................................o......................................................
`, `
################################################################################################
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#.../...../../...!...*..!......!..*...!...*......!......*...!........!.....*..1.!...1..!..1....#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#-.............................................................................................#
#-.......................................................................-....................-#
#........................................................................-....................-#
#...@........................................................................................o.#
################################################################################################
`, `
..................................................................................................................
...............................................................####.....####......................................
..............................................................##...........##.....................................
.............................................................##.............##....................................
.............................................................#....................................................
.............................................................#.....o...o..........................................
.............................................................#....................................................
.............................................................#.....#...#..........................................
.............................................................##..|...|...|..##....................................
..............................................................##+++++++++++##..#..................................
...............................................................####+++++####.....#......................#.........
..................................................................#######...............#.....##.................#
.............................................................................................................#....
..................................................................................................................
.....................................................###.................................................#........
.................................######......##.......................................................#...........
.........o................###.................................................................#..#................
........####......###..........................................#........................##........................
.......##........#..##...............................................#......#......#..............................
......##.............##...........................................................................................
......#.......#...................................................................................................
......#.....o...o.................................................................................................
......#...........................................................................................................
......#.....#...#.................................................................................................
......##..|...|...|..##...........................................................................................
.......##+++++++++++##....#.......................................................................................
........####+++++####.............................................................................................
...........#######...............#................................................................................
......................................#...........................................................................
..............................................#...................................................................
...................................................#..............................................................
........................................................#.........................................................
..................................................................................................................
.............................................................#....................................................
......................................................................#..............................@............
...............................................................................#........#.......########.........o
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
##################################################################################################################
`];

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = GAME_LEVELS;
if (typeof global != "undefined" && !global.GAME_LEVELS)
  global.GAME_LEVELS = GAME_LEVELS;
