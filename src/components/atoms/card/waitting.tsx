import WaitIcon from "@rsuite/icons/Wait";
import { ButtonToolbar, Button } from "rsuite";
import { TOnPressCardButton } from ".";

export const CardWaitting = ({ onPress }: TOnPressCardButton) => (
  <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-4">
    <div className="flex flex-col justify-center items-center py-8">
      <WaitIcon className="w-16 h-16 pb-4" />
    </div>
    <ButtonToolbar className="justify-center py-2">
      <Button color="blue" appearance="subtle" onClick={onPress}>
        <strong>Book</strong>
      </Button>
    </ButtonToolbar>
  </div>
);
