let flag = 0;

function muda_cor(){
    let peso = document.getElementById("Peso");
    let alt = document.getElementById("Altura");
    let body = document.getElementById("bg");
    let button = document.getElementById("bu")
   flag = Math.floor(Math.random()*(8 - 1 + 1 + 1))
   switch(flag){
    case 1:
        body.style.backgroundColor = "#000000";
        button.style.backgroundColor = "#1C1C1C";
        break;
        case 2:
            body.style.backgroundColor = "#40E0D0";
        button.style.backgroundColor = "#7FFFD4";
            break;
            case 3:
                body.style.backgroundColor = "#BA55D3";
                 button.style.backgroundColor = "#A020F0";
                break;
                case 4:
                    body.style.backgroundColor = "#FFB6C1";
                     button.style.backgroundColor = "#FFC0CB";
                    break;
                    case 5:
                        button.style.backgroundColor = "#FFA500"    ;
                    body.style.backgroundColor = "#FFD700";
                        break;
                        case 6:
                            button.style.backgroundColor = "#F5F5DC"
                            body.style.backgroundColor = "#FDF5E6";
                            break;
                            case 7:
                                button.style.backgroundColor = "#F0FFFF"
                                body.style.backgroundColor = "#E0FFFF";
      break;
      default:
        button.style.backgroundColor = "#B0E0E6"
      body.style.backgroundColor = "#E0FFFF";

   }
}