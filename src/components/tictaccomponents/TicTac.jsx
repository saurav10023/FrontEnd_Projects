import { useEffect, useState } from "react"

export default function TicTac(){

    const [grid , setgrid] = useState(["" , "" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ])
    const [symbol , setsymbol] = useState("X") ;
    const [count , setcount] = useState(0);
    const [check , setcheck] = useState(false);
    const [winner , setwinner] = useState("");
    const [scorey , setscorey] = useState(0);
    const[scorex , setscorex] = useState(0);
    const [colo , setcolo] = useState([false ,false ,false ,false ,false ,false ,false ,false ,false ]);
    function playclick(index){
        if(grid[index] === "" && !check){
            setgrid(prev => (prev.map((item , i) => i === index && item === "" ? symbol : item )))
            setsymbol(prev => (prev==="X" ? "O" : "X"));
            setcount(prev => prev+1);
        }
    }
    
    function overcheck(){
        const wins = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]           
    ];

    for (let [a, b, c] of wins) {
        
      if (
        grid[a] &&
        grid[a] === grid[b] &&
        grid[a] === grid[c]
      ) {
        setcheck(true);
        setwinner(grid[a]);
        setcolo(prev => prev.map((item , ind)=> ind===a || ind===b || ind===c ? true : item));
        if(grid[a] == "X")setscorex(prev =>prev+1);
        else setscorey(prev => prev+1);
        return;
      }
    }
    if(!grid.includes("") && !check){
            setcheck(true);
            setwinner("Nobody")
            
            return;
        }
    }
    function restart(){
        setgrid(["","","","","","","","",""]);
        setcount(0);
        setcheck(false);
        setwinner("");
        setcolo([false ,false ,false ,false ,false ,false ,false ,false ,false ]);
    }

    function resetscore(){
        setgrid(["","","","","","","","",""]);
        setcount(0);
        setcheck(false);
        setwinner("");
        setscorex(0);
        setscorey(0);
        setcolo([false ,false ,false ,false ,false ,false ,false ,false ,false ]);

    }
    useEffect(()=>{
        overcheck();
    },[grid])
    return(
        <>



        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-fuchsia-50 flex flex-col items-center p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-fuchsia-700 mb-1 drop-shadow-lg">
        Tic Tac Toe
      </h1>

      {/* Turn / Game Over Message */}
      <div className="mb-2 flex flex-row gap-20" >
        {!check && (
          <p className="text-xl sm:text-2xl font-semibold text-gray-700">
            {symbol}'s Turn
          </p>
        )}
        {check && (
          <p className="text-2xl sm:text-3xl font-bold text-green-600 animate-pulse">
            Game Over! {winner==="nobody" ? "its a draw" : `${winner} wins!`} 
          </p>
        )} 
        <div className="flex gap-4 text-lg sm:text-2xl font-bold mt-4 sm:mt-0">
        <p className="text-purple-700">X: <span className="ml-1">{scorex}</span></p>
        <p className="text-pink-700">O: <span className="ml-1">{scorey}</span></p>
        </div>
      </div>

      {/* Tic Tac Toe Grid */}
      <div className="grid grid-cols-3 gap-4 w-80 sm:w-96">
        {grid.map((item, index) => (
          <div
            key={index}
            onClick={() => playclick(index)}
            className={`flex justify-center items-center text-6xl sm:text-7xl font-extrabold cursor-pointer
                        h-24 sm:h-28 ${colo[index] ? "bg-green-300 animate-spin " : "bg-white"} rounded-xl shadow-lg hover:scale-105 transform transition `}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-8 gap-6">
  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <button
      onClick={restart}
      className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
    >
      Restart
    </button>
    <button
      onClick={resetscore}
      className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
    >
      Reset Scoreboard
    </button>
  </div>

</div>

    </div>
        
        </>
    )
}