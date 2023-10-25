import React, { useState } from "react";

function MyComponent() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleConfirm = () => {
    // Handle the confirmation action
    // You can put your logic here
    setIsConfirmOpen(false); // Close the confirmation dialog
  };

  const handleCancel = () => {
    setIsConfirmOpen(false); // Close the confirmation dialog
  };

  return (
    <div>
      <button onClick={() => setIsConfirmOpen(true)}>
        Open Confirmation Dialog
      </button>
      {isConfirmOpen && (
        //<div className="modal" tabindex="-1" role="dialog">
        <div className="container modal-dialog" tabindex="-1" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

// <div className="confirmation-dialog">
//           <p>Are you sure you want to proceed?</p>
//           <button onClick={handleConfirm}>Yes</button>
//           <button onClick={handleCancel}>No</button>
//         </div>
