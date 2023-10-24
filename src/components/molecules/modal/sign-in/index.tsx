import { RegisterForm } from "@components/molecules/form";
import { AppComponentProps, TRecordState } from "@utils/common.type";
import { Modal } from "rsuite";

import "./index.css";

export type TSignInModal = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (data: TRecordState) => void;
};

export const SignInModal = ({
  props: { id, open, isAdmin, handleClose, handleSubmit },
}: AppComponentProps<TSignInModal & { id: number; isAdmin: boolean }>) => {
  const handleFormSubmit = (data: TRecordState) => {
    handleSubmit({ ...data, id, isAdmin });
  };
  return (
    <Modal
      open={open}
      size="xs"
      onClose={handleClose}
      dialogClassName="custom-modal"
    >
      <Modal.Header>
        <Modal.Title className="font-semibold">Sign in</Modal.Title>
      </Modal.Header>
      {/* Body */}
      <Modal.Body>
        <RegisterForm callback={handleFormSubmit} />
      </Modal.Body>
    </Modal>
  );
};
