"use client";

import { useVCR, VCRBody, VCRHeader, VCRFooter, VCRSidebar } from "@/components";

interface Props {}

export const VCR: React.FC<Props> = () => {
  const {
    shareScreen,
    toggleCamera,
    toggleMicrophone,
    MY_CUSTOM_KEY,
    handleChatControl,
    handleParticipantsControl,
    videosSrc,
    isChat,
    isParticipants,
    isMicrophoneMuted,
    isCameraOn,
    isShareScreen,
    isRaiseHand,
    isSideOpen,
    setIsSideOpen,
  } = useVCR();

  return (
    <>
      <div className="mx-auto pt-[3vh] flex flex-col justify-between items-between">
        <VCRHeader />
        <VCRBody
          videos={Object.entries(videosSrc).map(([key, value]) => ({
            isMyVideo: key === MY_CUSTOM_KEY.current,
            source: value,
          }))}
        />
        <VCRFooter
          handleCamControl={toggleCamera}
          handleMicControl={toggleMicrophone}
          handleChatControl={handleChatControl}
          handleParticipantsControl={handleParticipantsControl}
          handleScreenShare={async () => {
            await shareScreen();
          }}
          handleOpenSetting={() => {}}
          handleLeave={() => {}}
          handleRaiseHand={() => {}}
          isMuted={isMicrophoneMuted}
          isCamOff={!isCameraOn}
          isShareScreen={isShareScreen}
          isChatFocus={isChat}
          isParticipantsFocus={isParticipants}
          isRaiseHand={isRaiseHand}
        />
      </div>
      <VCRSidebar
        isOpen={isSideOpen}
        setIsOpen={setIsSideOpen}
        isChat={isChat}
      />
    </>
  );
};

export default VCR;
