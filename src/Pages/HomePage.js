import ButtonLogin from "../Buttons/ButtonLogin";
import ButtonPlay from "../Buttons/ButtonPlay";
import ButtonStatus from "../Buttons/ButtonStatus";
import ChessBoardDec from "../Components/ChessBoardDec";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";


// Nesta Pagina, um dos botões vai ser renderizado de acordo com o estado do usuário (Logado/Deslogado)
function HomePage() {
    return (
        <div className= "bg-[#EADDBE] flex flex-col items-center static">
            <Logo/>
            <ButtonPlay/>
            <ButtonLogin/>
            <ButtonStatus/>
            <ChessBoardDec className="md:object-scale-down"/>
            <div className= "absolute bottom-0 mb-4">
                <Navbar className= "object-bottom"/>
            </div>
        </div>
    );
}

export default HomePage;