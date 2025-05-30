

const Modal = ({ content }: { content: React.ReactNode }) => {
  return (
    <div className="modal">
      <div className="modal-header"></div>
      <div className="modal-body">     
          <h4>{content}</h4>
      </div>
      <div className="modal-footer"></div>

    </div>
  );
};

export default Modal;

