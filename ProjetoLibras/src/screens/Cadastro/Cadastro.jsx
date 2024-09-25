import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

export const Cadastro = () => {
  const navigate = useNavigate(); // Hook de navegação

  const handleCadastrar = () => {
    // Aqui você pode adicionar a lógica para validação/envio do formulário
    console.log("Formulário de cadastro enviado com sucesso!");

    // Redirecionar para a página de tradução após o cadastro
    navigate("/tradutor");
  };

  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[363px] h-[752px] top-[108px] left-[547px] rounded-xl">
          <div className="absolute w-[363px] h-[752px] top-0 left-0 rounded-xl">
            <div className="relative h-[464px] rounded-xl">
              <div className="w-[363px] h-[73px] top-[92px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <div className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap">
                    Email
                  </div>
                </div>
                <img
                  className="absolute w-[35px] h-[30px] top-[21px] left-3.5"
                  alt="Layer"
                  src="https://c.animaapp.com/j928kLmN/img/layer-2@2x.png"
                />
              </div>
              <div className="w-[363px] h-[73px] top-[193px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <div className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap">
                    Senha
                  </div>
                </div>
                <img
                  className="w-[35px] h-[30px] left-[15px] absolute top-[21px]"
                  alt="Vector"
                  src="https://c.animaapp.com/j928kLmN/img/vector.svg"
                />
              </div>
              <div className="w-[234px] top-1 left-16 font-bold text-[#324eff] text-[52px] absolute h-8 [font-family:'Roboto',Helvetica] tracking-[0] leading-8 whitespace-nowrap">
                Cadastrar
              </div>
              <div className="w-[363px] h-[73px] top-[294px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <div className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap">
                    Confirmação de Senha
                  </div>
                </div>
                <img
                  className="absolute w-[35px] h-[30px] top-[21px] left-[18px]"
                  alt="Group"
                  src="https://c.animaapp.com/j928kLmN/img/group-19@2x.png"
                />
              </div>
              <div className="w-[363px] h-[73px] top-[391px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <div className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap">
                    Telefone
                  </div>
                </div>
                <img
                  className="w-[33px] h-[34px] left-[17px] absolute top-[21px]"
                  alt="Vector"
                  src="https://c.animaapp.com/j928kLmN/img/vector-1.svg"
                />
              </div>
              <div className="absolute w-[367px] h-[175px] top-[581px] left-0">
                <p className="absolute w-[234px] h-8 top-[143px] left-[75px] [font-family:'Roboto',Helvetica] font-normal text-[#324eff] text-base tracking-[0] leading-8 whitespace-nowrap">
                  Já tem uma conta? Entrar
                </p>
                <p className="absolute w-[234px] h-8 top-0 left-16 [font-family:'Roboto',Helvetica] font-light text-[#324eff] text-lg tracking-[0] leading-8 whitespace-nowrap">
                  Ou use o registro instantâneo
                </p>
                <div className="w-[363px] h-[73px] top-[51px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                  <div className="absolute w-[299px] h-8 top-5 left-[73px] [font-family:'Poppins',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap">
                    Cadastre-se com Google
                  </div>
                  <div className="absolute w-16 h-[74px] -top-px left-0 bg-white rounded-xl">
                    <img
                      className="absolute w-[45px] h-[39px] top-[17px] left-2.5"
                      alt="Google"
                      src="https://c.animaapp.com/j928kLmN/img/google.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[560px] h-[84px] top-3 left-[462px]">
            <div className="relative w-[558px] h-[84px] bg-[#f9f9f9] rounded-xl">
              <div className="absolute w-[62px] h-8 top-[26px] left-[74px] [font-family:'Roboto',Helvetica] font-extrabold text-[#3f5ce0] text-[15.9px] tracking-[0] leading-8 whitespace-nowrap">
                AI Sign
              </div>
              <div className="absolute w-[45px] h-[45px] top-[19px] left-3">
                <div className="relative h-[45px]">
                  <img
                    className="absolute w-[37px] h-3.5 top-[15px] left-1"
                    alt="Simplification"
                    src="https://c.animaapp.com/j928kLmN/img/simplification.svg"
                  />
                  <div className="absolute w-[45px] h-[45px] top-0 left-0">
                    <div className="relative h-[45px] rounded-[22.5px]">
                      <div className="w-10 h-10 top-[3px] left-[3px] rounded-[19.78px] border-[#4cccfc] absolute border-2 border-solid" />
                      <div className="w-[45px] h-[45px] top-0 left-0 rounded-[22.5px] border-[#3f5ce0] absolute border-2 border-solid" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Botão de cadastrar */}
              <div
                className="w-[102px] h-11 top-5 left-[436px] bg-[#181414] absolute rounded-xl cursor-pointer"
                onClick={handleCadastrar} // Adiciona o evento onClick
              >
                <div className="w-[78px] top-[5px] left-4 font-medium text-white text-base absolute h-8 [font-family:'Roboto',Helvetica] tracking-[0] leading-8 whitespace-nowrap">
                  Cadastrar
                </div>
              </div>
              <div className="w-[75px] h-8 top-[26px] left-[329px] border border-solid border-black absolute rounded-xl">
                <div className="absolute w-[49px] h-8 -top-px left-4 [font-family:'Roboto',Helvetica] font-medium text-[#181414] text-base tracking-[0] leading-8 whitespace-nowrap">
                  Entrar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
