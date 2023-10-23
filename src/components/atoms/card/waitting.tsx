import WaitIcon from "@rsuite/icons/Wait";
import { ButtonToolbar, Button } from "rsuite";
import { TCardWaitting } from ".";

export const CardWaitting = ({ onSignIn, id }: TCardWaitting) => (
  <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-4">
    <div className="flex flex-col justify-center items-center py-8">
      <WaitIcon className="w-16 h-16 pb-4" />
    </div>
    <ButtonToolbar className="justify-center py-2">
      <Button color="blue" appearance="subtle" onClick={() => onSignIn(id)}>
        <strong>Sign in</strong>
      </Button>
    </ButtonToolbar>
  </div>
);
