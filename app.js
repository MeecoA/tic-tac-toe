  //factory
  const player = (name, mark) => {

    return { mark }; 

 } 
 const playerX = ('jeff', 'x');
 const playerO = ('meeco', 'o');
 let oTurn; 




 //module
 const gameBoard = (()=>{
    let winningCombinations = [
        [0,1,2], 
        [3,4,5], 
        [6,7,8], 
        [0,3,6],
        [1,4,7], 
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const renderBoard = () => {
        const gameBoard = document.querySelector('.gameBoard');
        for  (let i = 0; i <9; i++){
            const cells  = document.createElement('div');
            cells.classList.add('cells');
            gameBoard.appendChild(cells);
           
            cells.addEventListener('click',handleClick, {once: true});

            function handleClick() {
            
            const mark = oTurn ? cells.textContent = playerO : cells.textContent = playerX;
            console.log(winningCombinations[0][0]);
                swapTurn(); 
                checkWinner();
             }
            
             function swapTurn() {
                oTurn = !oTurn
             }

             function checkWinner() {
                if (cells.textContent == 'x'){
                    console.log('xpanalo');
                }
             }
        }      
    }

    return {renderBoard};
 })(); 

 gameBoard.renderBoard();





