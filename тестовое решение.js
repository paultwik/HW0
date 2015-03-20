/*global readline: true */
/*global console: true */

var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.

var LeftLimit = 0, RightLimit = W - 1, UpLimit = 0, DownLimit = H - 1;
var X = parseInt(inputs[0], 10), Y = parseInt(inputs[1], 10);

function XYtrans(arg1, arg2) {
    "use strict";
    var res = Math.abs(arg1 - arg2);
    return Math.trunc(res / 2) +  res % 2 + Math.min(arg1, arg2);
}
// game loop
var BOMB_DIR;
while (true) {
    BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    switch (BOMB_DIR) {
    case "U":
        DownLimit = Y - 1;

        Y = new XYtrans(DownLimit, UpLimit);
        break;
    case "UR":
        DownLimit = Y - 1;
        LeftLimit = X + 1;

        Y = new XYtrans(DownLimit, UpLimit);
        X = new XYtrans(LeftLimit, RightLimit);
        break;
   case "R":
        LeftLimit = X + 1;

        X = new XYtrans(LeftLimit, RightLimit);
        break;
   case "DR":
        UpLimit = Y + 1;
        LeftLimit = X + 1;

        Y = new XYtrans(DownLimit, UpLimit);
        X = new XYtrans(LeftLimit, RightLimit);
        break;
   case "D":
        UpLimit = Y + 1;

        Y = new XYtrans(DownLimit, UpLimit);
        break;
   case "DL":
        UpLimit = Y + 1;
        RightLimit = X - 1;

        Y = new XYtrans(DownLimit, UpLimit);
        X = new XYtrans(LeftLimit, RightLimit);
        break;
   case "L":
        RightLimit = X - 1;

        X = new XYtrans(LeftLimit, RightLimit);
        break;
   case "UL":
        DownLimit = Y - 1;
        RightLimit = X - 1;

        Y = new XYtrans(DownLimit, UpLimit);
        X = new XYtrans(LeftLimit, RightLimit);
        break;
    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    console.log(X + ' ' + Y); // the location of the next window Batman should jump to.
end;