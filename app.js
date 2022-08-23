  //factory
  const player = (mark) => {

    return { mark }; 

 } 

 const playerX = ('x');
 const playerO = ('o');
 const winnerModal = document.querySelector('.winner-modal');
 //module
 const resetButton = document.querySelector('.resetButton');

    

 const gameBoard = (()=>{
   
    let board = ['','','','','','','','','',];

    let oTurn; 
    const xInput = document.querySelector('#xInput');
    const oInput = document.querySelector('#oInput');
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
            const winnerContainer = document.querySelector('.winner-container');
            const turnContainer = document.querySelector('.turn-container');
            const cells  = document.createElement('div');
           
            cells.classList.add('cells');
            cells.dataset.index = i;
            gameBoard.appendChild(cells);
           
            cells.addEventListener('click',handleClick, {once: true});
            
            function handleClick() {
            
            let mark; 
            if(oTurn){
                cells.textContent = playerO; 
                cells.classList.add('green');
                turnContainer.textContent = xInput.value+" turn..";
                mark = playerO;
                board[i] = mark
            }
            else {
                cells.textContent = playerX;
                cells.classList.add('red');
                turnContainer.textContent = oInput.value+" turn..";
                mark = playerX;
                board[i] = mark
            }
            // const cell = cells.dataset.index;
            console.log(mark);
            console.log(board);
            
                checkWinner();
                swapTurn(); 
               
                function checkWinner() {
                        winningCombinations.forEach((item) =>{
                            if (board[item[0]] === mark && board[item[1]] === mark && board[item[2]] === mark  )
                            {
                                endGame(false); 
                            }
                            else if(isDraw()){
                                endGame(true); 
                            }
                        })
                 }


                 function isDraw(){
                       return board.every(item => {
                        return item === 'x' || item === 'o';
                       })
                 }
             }
             function swapTurn() {
                oTurn = !oTurn
             }
             

             function endGame(draw) {
                if (draw) {
                    winnerContainer.textContent = "Draw!";
                    winnerModal.classList.add('show');
                }else{
                    winnerContainer.textContent = oTurn ?  oInput.value+" Win!" : xInput.value+" Win!";
                    winnerModal.classList.add('show');
                }
             }

             const resetButton = document.querySelector('.resetButton');
             resetButton.addEventListener('click', () => {
                winnerModal.classList.remove('show');
                introContainer.classList.remove('hide');
                gameBoard.removeChild(cells)
                board = ['','','','','','','','','',];
                cells.textContent = ''
                // oTurn = false;
                containerBoard.classList.remove('show');
             })
        }      
       
       

    }

    return {renderBoard};
 })(); 


       

 

 const playButton = document.querySelector('.playButton');
 const introContainer = document.querySelector('.intro-container');
 const containerBoard = document.querySelector('.container-board');
 
        
    playButton.addEventListener('click', () => {
        gameBoard.renderBoard();
        introContainer.classList.add('hide');
        containerBoard.classList.add('show');
        winnerModal.classList.add('hide');
     });
    


