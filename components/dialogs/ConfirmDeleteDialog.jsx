import DialogContainer from "@components/UI/DialogContainer";

export default function ConfirmDeleteDialog({ open }) {
  return (
    <DialogContainer open={open}>
      <h4>Confirm Delete</h4>
    </DialogContainer>
  );
}