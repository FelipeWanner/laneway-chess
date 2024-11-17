import React from 'react';
import Chessboard from '../chess/chessComponents/Chessboard';
import Navbar from '../Components/Navbar';
import Logo from '../Components/Logo';

function MatchPage() {
    return (
        <div className="relative flex justify-center items-center min-h-screen bg-[#EADDBE]">
            <ul>
                <Logo className="object-center"/>
                <li className="static  m-5">
                    <div class="grid grid-cols-3">
                        <div class="pl-4">
                            <h1>Player 1</h1>
                            <div className="overflow-auto md:overflow-scroll w-25 p-4 border-2">
                                <h1>Add information here</h1>
                            </div>
                            <div className="box-content h-4 w-15 p-4 border-2">
                                <h1>Timer</h1>
                            </div>
                        </div>
                        <div class="flex-1 flex items-center justify-center ">
                            <h1>VS</h1>
                        </div>
                        <div class="flex-1 ml-4">
                            <h1>Player 2</h1>
                            <div className="overflow-auto md:overflow-scroll w-25 p-4 border-2">
                                <h1>Add information here</h1>
                            </div>
                            <div className="box-content h-4 w-15 p-4 border-2">
                                <h1>Timer</h1>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex justify-center items-center m-4 mb-10">
                    <Chessboard/>                  
                </li>
            </ul>
            <div className= "absolute bottom-0 m-4">
                <Navbar className= "object-bottom"/>
            </div>
        </div>
    );
}

export default MatchPage;