import { SignInModal } from "@components/molecules/modal";
import WaitIcon from "@rsuite/icons/Wait";
import { useState } from "react";
import { ButtonToolbar, Button } from "rsuite";
import { TRecordState } from "@utils/common.type";
import { TCardWaitting } from ".";
import { useUser } from "@contexts/users";

export const CardWaitting = ({ onSignIn, id, isAdmin }: TCardWaitting) => {
  const user = useUser()
  const [openModal, setOpenModal] = useState(false);

  const handleSignIn = () => {
    if (isAdmin) {
      // open modal sign in
      setOpenModal(() => true);
    } else {
      onSignIn(id);
    }
  };

  const handleClose = () => {
    setOpenModal(() => false);
  };

  const handleSubmit = (data: TRecordState) => {
    setOpenModal(() => false);
    user.signIn({
      firstname: data.firstname,
      lastname: data.lastname,
      phoneNo: data.phoneNo,
      id: data.id,
    })
  };

  return (
    <div className="w-48 flex flex-col justify-center bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-col justify-center items-center py-8">
        <WaitIcon className="w-16 h-16 pb-4" />
      </div>
      <ButtonToolbar className="justify-center py-2">
        <Button color="blue" appearance="subtle" onClick={handleSignIn}>
          <strong>Sign in</strong>
        </Button>
      </ButtonToolbar>
      <SignInModal props={{ id, open: openModal, handleClose, handleSubmit }} />
    </div>
  );
};
