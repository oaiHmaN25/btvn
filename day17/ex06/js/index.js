var boardChess = '';

for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        if ((i + j) % 2 === 0) {
            boardChess += ' * ';
        } else {
            boardChess += '   ';
        }
    }
    boardChess += '\n';
}
console.log("Bài tập vẽ bàn cờ : 8x8 những ô trắng để trắng dấu `*` tượng trưng cho ô đen");
console.log(boardChess);    