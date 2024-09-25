import React, { useState, useRef } from 'react';
import { Circle } from "../../components/Circle";

export function Tradutor() {
  const [translationResult, setTranslationResult] = useState('');
  const [textToSign, setTextToSign] = useState('');
  const videoRef = useRef(null);

  const handleCapture = () => {
    const videoElement = videoRef.current;
    console.log('Sending video to backend...');
    setTimeout(() => {
      setTranslationResult('Simulated translation from sign language');
    }, 1000);
  };

  const handleTextToSign = () => {
    console.log('Sending text to backend:', textToSign);
    setTimeout(() => {
      console.log('Sign language representation:', textToSign);
    }, 1000);
  };

  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[1466px] h-[1024px] left-[-26px]">
          <div className="absolute w-[1466px] h-[1024px] top-0 left-0">
            <div className="absolute w-[1099px] h-[243px] top-[781px] left-[367px] bg-[#ffffff0f]" />
            <div className="absolute w-[344px] h-[1024px] top-0 left-[26px] bg-[#3c70e7] rounded-[0px_58px_0px_0px]" />
            <div className="absolute w-[344px] h-[173px] top-0 left-[26px] bg-[#3b59e0]" />
            <div className="inline-flex items-center justify-center gap-[15px] absolute top-[222px] left-[70px]">
              <img
                className="relative w-5 h-[19.5px]"
                alt="Vector"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-4.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Histórico de Conversas
              </div>
            </div>
            <div className="absolute top-[70px] left-[139px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Perfil
            </div>
            <p className="absolute top-[94px] left-[139px] font-normal text-xs [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet
            </p>
            <div className="inline-flex items-center justify-center gap-[15px] px-[60px] py-4 absolute top-[839px] left-[51px] bg-[#00a0d1] rounded-[10px]">
              <img className="relative w-6 h-6" alt="Gg add" src="https://c.animaapp.com/r9jpr4Nx/img/gg-add.svg" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Novo Chat
              </div>
            </div>
            <div className="flex w-[370px] items-center justify-center gap-8 pl-[85px] pr-10 py-5 absolute top-[273px] left-0 bg-[#324383]">
              <div className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto] ml-[-13.50px]">
                <img
                  className="relative w-5 h-[19.5px]"
                  alt="Vector"
                  src="https://c.animaapp.com/r9jpr4Nx/img/vector-1.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                  Lorem ipsum dolor
                </div>
              </div>
              <img
                className="relative flex-[0_0_auto] mr-[-13.50px]"
                alt="Frame"
                src="https://c.animaapp.com/r9jpr4Nx/img/frame-1.svg"
              />
            </div>
            <div className="inline-flex items-start gap-[15px] absolute top-[356px] left-[66px]">
              <img
                className="relative w-5 h-[19.5px]"
                alt="Vector"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-2.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Lorem ipsum dolor sit
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[15px] absolute top-[407px] left-[66px]">
              <img
                className="relative w-5 h-[19.5px]"
                alt="Vector"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-4.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Lorem ipsum dolor
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[15px] absolute top-[458px] left-[66px]">
              <img
                className="relative w-5 h-[19.5px]"
                alt="Vector"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-4.svg"
              />
              <div className="relative w-fit mt-[-1.00px] font-medium text-base [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal]">
                Lorem ipsum dolor sit
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[13px] absolute top-[638px] left-[66px]">
              <img
                className="relative w-6 h-6"
                alt="Integration"
                src="https://c.animaapp.com/r9jpr4Nx/img/integration-1.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Upgrade
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-3.5 absolute top-[572px] left-[66px]">
              <img
                className="relative w-6 h-6"
                alt="Question"
                src="https://c.animaapp.com/r9jpr4Nx/img/question-1.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Guias e FAQ
              </div>
            </div>
            <img
              className="absolute w-[155px] h-6 top-[704px] left-[66px]"
              alt="Frame"
              src="https://c.animaapp.com/r9jpr4Nx/img/frame-10.png"
            />
            <div className="inline-flex items-center justify-center gap-4 absolute top-[770px] left-[66px]">
              <img
                className="relative w-6 h-6"
                alt="Majesticons logout"
                src="https://c.animaapp.com/r9jpr4Nx/img/majesticons-logout-line.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Sair
              </div>
            </div>
            <img
              className="absolute w-[344px] h-px top-[616px] left-[26px] object-cover"
              alt="Vector"
              src="https://c.animaapp.com/r9jpr4Nx/img/vector-3-1.svg"
            />
            <img
              className="absolute w-[344px] h-px top-[682px] left-[26px] object-cover"
              alt="Vector"
              src="https://c.animaapp.com/r9jpr4Nx/img/vector-3-1.svg"
            />
            <img
              className="absolute w-[344px] h-px top-[748px] left-[26px] object-cover"
              alt="Vector"
              src="https://c.animaapp.com/r9jpr4Nx/img/vector-3-1.svg"
            />
            <img
              className="absolute w-14 h-14 top-[66px] left-[66px] object-cover"
              alt="Ellipse"
              src="https://c.animaapp.com/r9jpr4Nx/img/ellipse-3.png"
            />
            <div className="absolute w-[729px] h-[41px] top-[844px] left-[572px]">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 absolute top-0 left-0 bg-[#fb232330] rounded-md">
                <img
                  className="relative w-4 h-[18px]"
                  alt="Vector"
                  src="https://c.animaapp.com/r9jpr4Nx/img/vector-5.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#fb2323] text-sm tracking-[0] leading-[normal]">
                  Delete last generation
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 absolute top-0 left-[236px] bg-[#11b06333] rounded-md">
                <img
                  className="relative w-[14.81px] h-[18px]"
                  alt="Vector"
                  src="https://c.animaapp.com/r9jpr4Nx/img/vector-6.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#11b063] text-sm tracking-[0] leading-[normal]">
                  Regenerate Generation
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 absolute top-2.5 left-[535px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[19.5px] h-[19.5px] ml-[-0.75px]"
                    alt="Group"
                    src="https://c.animaapp.com/r9jpr4Nx/img/group@2x.png"
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-sm tracking-[0] leading-[normal]">
                    Palavras Usadas: 12000
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[164px] h-[58px] top-[914px] left-[92px]"
              alt="Frame"
              src="https://c.animaapp.com/r9jpr4Nx/img/frame-16.png"
            />
          </div>
          <div className="flex w-[694px] items-start gap-[30px] px-[30px] py-5 absolute top-[456px] left-[545px] bg-[#232121] border-l-2 [border-left-style:solid] border-[#4c5ea1]">
            <Circle
              avatar="twenty-seven"
              className="!h-[70px] bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-77@2x.png)] !w-[70px]"
            />
            <div className="relative w-[554px] h-[71px] mt-[-2.00px] mr-[-20.00px] [font-family:'Poppins',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal]">
              <video ref={videoRef} className="w-full h-40 mb-4" autoPlay muted />
              <button onClick={handleCapture} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Capture Sign Language
              </button>
              <p>{translationResult}</p>
            </div>
          </div>

          {/* Correção da barra de pesquisa */}
          <div className="absolute w-[694px] h-14 top-[916px] left-[573px]">
            <div className="relative h-14 rounded-[10px]">
              <div className="flex w-[694px] items-center px-[30px] py-4 absolute top-0 left-0 rounded-[10px] border border-solid border-[#4454904a]">
                <img
                  className="w-6 h-6 mr-[8px]"
                  alt="Search"
                  src="https://c.animaapp.com/r9jpr4Nx/img/material-symbols-search.svg"
                />
                <input
                  type="text"
                  value={textToSign}
                  onChange={(e) => setTextToSign(e.target.value)}
                  placeholder="Traduza qualquer texto para Libras ou Libras para texto"
                  className="w-full bg-transparent text-[#44549078] font-medium text-base outline-none"
                />
              </div>
              <button
                onClick={handleTextToSign}
                className="absolute w-14 h-14 top-0 right-0 bg-[#3b59e0] rounded-r-[10px] flex items-center justify-center"
              >
                <img
                  className="w-8 h-[35px]"
                  alt="Send"
                  src="https://c.animaapp.com/r9jpr4Nx/img/vector-7.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
