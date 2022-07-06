import { createContext, useState, ReactNode } from "react"
import { Modal } from "../components/common";


export interface ModalContextType {
  isVisible: boolean
  handleModal: (content: ReactNode) => void
  modalContent: ReactNode
}

export const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>("");

  const handleModal = (content: ReactNode) => {
    setIsVisible(!isVisible);
    if (content) {
      setModalContent(content);
    }
  };

  return (
    <ModalContext.Provider value={{ isVisible, handleModal, modalContent }}>
      {isVisible && <Modal isVisible={isVisible} modalContent={modalContent} onBackgroundPress={() => setIsVisible(false)} />}
      {children}
    </ModalContext.Provider>
  )
}