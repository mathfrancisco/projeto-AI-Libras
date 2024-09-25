import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../components/Avatar";

export const TelaInical = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate("/cadastro");
  };

  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] w-[1440px] h-[1024px]">
        <div className="relative w-[1380px] h-[957px] top-[23px] left-12">
          <div className="absolute w-[333px] h-[333px] top-[117px] left-[13px]">
            <div className="relative h-[333px]">
              <img
                className="absolute w-[274px] h-[104px] top-[114px] left-[29px]"
                alt="Simplification"
                src="https://c.animaapp.com/BpigZjET/img/simplification.svg"
              />
              <div className="absolute w-[333px] h-[333px] top-0 left-0">
                <div className="relative h-[333px] rounded-[166.5px]">
                  <div className="w-[293px] h-[293px] top-5 left-5 rounded-[146.37px] border-[#4cccfc] absolute border-[5px] border-solid" />
                  <div className="w-[333px] h-[333px] top-0 left-0 rounded-[166.5px] border-[#3f5ce0] absolute border-[5px] border-solid" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1362px] h-[957px] top-0 left-0">
            <div className="absolute w-[1362px] h-[365px] top-[592px] left-0">
              <div className="relative w-[1368px] h-[365px]">
                <div className="absolute w-[1314px] h-[293px] top-[72px] left-[15px] bg-[#3f5ce0] rounded-[20px]" />
                <Avatar className="!h-[300px] !absolute bg-[url(https://c.animaapp.com/BpigZjET/img/image-1@2x.png)] !left-0 !w-[300px] !top-[43px]" />
                <div className="absolute w-[1020px] h-[327px] top-0 left-[348px]">
                  <div className="absolute w-[1014px] h-[253px] top-0 left-0">
                    <p className="absolute w-[597px] h-[52px] top-[183px] left-0 [font-family:'Inter',Helvetica] font-light text-[#f0f0f0] text-[32px] tracking-[-0.38px] leading-7">
                      Ela será sua companheira dedicada na jornada da comunicação.
                    </p>
                    <p className="absolute w-[1014px] h-[253px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#f0f0f0] text-[42px] tracking-[0.42px] leading-[65px]">
                      Apresentamos Luzia, o avatar 3D da AI Sign!
                    </p>
                  </div>
                  <p className="absolute w-[967px] h-[52px] top-[275px] left-0 [font-family:'Inter',Helvetica] font-extralight text-[#f0f0f0] text-xl tracking-[-0.38px] leading-7">
                    Luzia traduz a língua de sinais em tempo real, facilitando a interação entre deficientes auditivos e
                    o mundo ao seu redor. Seja em conversas cotidianas, reuniões ou eventos, Luzia está aqui para
                    garantir que você nunca perca uma palavra.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute w-[560px] h-[84px] top-0 left-[392px]">
              <div className="relative w-[558px] h-[84px] bg-[#f9f9f9] rounded-xl">
                <div className="absolute w-[62px] h-8 top-[26px] left-[74px] [font-family:'Roboto',Helvetica] font-extrabold text-[#3f5ce0] text-[15.9px] tracking-[0] leading-8 whitespace-nowrap">
                  AI Sign
                </div>
                <div className="absolute w-[45px] h-[45px] top-[19px] left-3">
                  <div className="relative h-[45px]">
                    <img
                      className="absolute w-[37px] h-3.5 top-[15px] left-1"
                      alt="Simplification"
                      src="https://c.animaapp.com/BpigZjET/img/simplification-1.svg"
                    />
                    <div className="absolute w-[45px] h-[45px] top-0 left-0">
                      <div className="relative h-[45px] rounded-[22.5px]">
                        <div className="absolute w-10 h-10 top-[3px] left-[3px] rounded-[19.78px] border-2 border-solid border-[#4cccfc]" />
                        <div className="absolute w-[45px] h-[45px] top-0 left-0 rounded-[22.5px] border-2 border-solid border-[#3f5ce0]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute w-[102px] h-11 top-5 left-[436px] bg-[#181414] rounded-xl cursor-pointer"
                  onClick={handleCadastroClick}
                >
                  <div className="absolute w-[78px] h-8 top-[5px] left-4 [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-8 whitespace-nowrap">
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
          <div className="absolute w-[996px] h-[438px] top-[117px] left-96 rounded-xl">
            <div className="absolute w-[789px] h-[249px] top-5 left-0 rounded-xl">
              <div className="absolute w-[537px] h-[254px] -top-2 left-0">
                <p className="absolute w-[537px] h-[253px] top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-transparent text-[64px] tracking-[0.64px] leading-[109px]">
                  <span className="text-[#3f5ce0] tracking-[0.41px]">Transformando a experiência&nbsp;&nbsp;</span>
                  <span className="text-black tracking-[0.41px]">De</span>
                </p>
                <div className="absolute w-48 h-[133px] top-[121px] left-[325px] border-r-[7px] [border-right-style:solid] border-[#5059fe]" />
              </div>
              <div className="absolute w-[424px] h-[133px] top-[106px] left-[537px] [font-family:'Inter',Helvetica] font-medium text-[#3f5ce0] text-[64px] tracking-[0] leading-[119.6px] whitespace-nowrap">
                comunicação
              </div>
            </div>
            <div className="absolute w-96 h-14 top-[284px] left-0">
              <p className="absolute w-[602px] h-[52px] top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#545454] text-xl tracking-[-0.38px] leading-7">
                Nossa inteligência artificial empodera pessoas com deficiência auditiva, tornando o mundo mais acessível
                e inclusivo
              </p>
            </div>
            <div
              className="w-[345px] h-14 top-[382px] left-0 bg-[#324eff] shadow-[0px_2px_4px_#00000029] absolute rounded-xl cursor-pointer"
              onClick={handleCadastroClick}
            >
              <div className="relative w-[293px] h-[41px] top-[7px] left-[29px]">
                <div className="absolute w-[273px] h-8 top-1 left-0 [font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[32.0px] whitespace-nowrap">
                  Comece Gratuitamente
                </div>
                <img
                  className="absolute w-[41px] h-[41px] top-0 left-[252px]"
                  alt="Img"
                  src="https://c.animaapp.com/BpigZjET/img/662788cd3886c783d571af37-arrow-right-s-svg.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
