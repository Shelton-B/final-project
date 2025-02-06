import "..//ModalWithForm/ModalWithForm.css";

function ModalWithForm({
  children,
  titleText,
  isOpen,
  handleCloseClick,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h1 className="modal__title">{titleText}</h1>

        <button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        ></button>

        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
