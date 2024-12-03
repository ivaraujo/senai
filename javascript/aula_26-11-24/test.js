document.addEventListener("DOMContentLoaded", () => {
    const board = Array(9).fill(null);
    const gameBoard = document.getElementById("game-board");
    const gameStatus = document.getElementById("game-status");
    const resetButton = document.getElementById("reset-button");
    let currentPlayer = "X";
    let gameActive = true;

    function createBoard() {
        gameBoard.innerHTML = "";
        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.index = index;
            cellElement.addEventListener("click", handleCellClick);
            gameBoard.appendChild(cellElement);
        });
    }

    function handleCellClick(e) {
        const index = e.target.dataset.index;

        if (board[index] !== null || !gameActive) return; // Corrigir a verificação aqui
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        e.target.classList.add("taken");

        // Verificação de vitória
        if (verificarVitoria()) {
            gameStatus.textContent = `Jogador ${currentPlayer} venceu!`;
            gameActive = false;
            return;
        }

        // Verificação de empate
        if (board.every(cell => cell !== null)) {
            gameStatus.textContent = "Empate!";
            gameActive = false;
            return;
        }

        // Alterna o jogador
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        gameStatus.textContent = `Vez do jogador ${currentPlayer}`;
    }

    function verificarVitoria() {
        const vitoriaCombinacao = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return vitoriaCombinacao.some(combinacao => {
            const [a, b, c] = combinacao;
            return (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            );
        });
    }

    resetButton.addEventListener("click", () => {
        board.fill(null);
        gameActive = true;
        currentPlayer = "X";
        gameStatus.textContent = `Vez do jogador ${currentPlayer}`;
        createBoard();
    });

    createBoard();
    gameStatus.textContent = `Vez do jogador ${currentPlayer}`;
});