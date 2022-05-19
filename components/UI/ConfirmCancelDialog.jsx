import DialogContainer from "./DialogContainer";
export default function ConfirmCancelDialog({ open }) {
  return (
    <DialogContainer open={open}>
      <h4>Confirm Cancel</h4>
    </DialogContainer>
  );
}