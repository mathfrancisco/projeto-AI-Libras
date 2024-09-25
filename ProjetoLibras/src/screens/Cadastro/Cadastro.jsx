import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

export const Cadastro = () => {
  const navigate = useNavigate(); // Hook de navegação

  // Estados para controlar os inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleCadastrar = () => {
    // Aqui você pode adicionar a lógica para validação/envio do formulário
    if (senha !== confirmacaoSenha) {
      console.log("As senhas não coincidem");
      return;
    }

    // Lógica para enviar os dados do formulário (pode integrar com uma API, por exemplo)
    console.log("Formulário de cadastro enviado com sucesso!", { email, senha, telefone });

    // Redirecionar para a página de tradução após o cadastro
    navigate("/tradutor");
  };

  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[363px] h-[752px] top-[108px] left-[547px] rounded-xl">
          <div className="absolute w-[363px] h-[752px] top-0 left-0 rounded-xl">
            <div className="relative h-[464px] rounded-xl">

              {/* Campo de Email */}
              <div className="w-[363px] h-[73px] top-[92px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <input
                    className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Campo de Senha */}
              <div className="w-[363px] h-[73px] top-[193px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <input
                    className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
              </div>

              {/* Campo de Confirmação de Senha */}
              <div className="w-[363px] h-[73px] top-[294px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <input
                    className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap"
                    type="password"
                    placeholder="Confirmação de Senha"
                    value={confirmacaoSenha}
                    onChange={(e) => setConfirmacaoSenha(e.target.value)}
                  />
                </div>
              </div>

              {/* Campo de Telefone */}
              <div className="w-[363px] h-[73px] top-[391px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl">
                <div className="absolute w-[317px] h-[73px] top-0 left-16">
                  <div className="absolute w-[299px] h-[73px] top-0 left-0 bg-white rounded-xl" />
                  <input
                    className="absolute w-[299px] h-8 top-5 left-[18px] [font-family:'Poppins',Helvetica] font-light text-[#324eff] text-[22px] tracking-[0] leading-[35.2px] whitespace-nowrap"
                    type="tel"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
              </div>

              {/* Botão de Cadastrar */}
              <button 
                className="w-[363px] h-[73px] top-[500px] bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl text-white text-[22px]"
                onClick={handleCadastrar}
              >
                Cadastrar
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
