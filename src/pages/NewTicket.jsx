import ImageUploader from "@/components/ImageUploader";
import TextComponent from "@/components/ui/TextComponent";
import Toast from "@/components/ui/Toast";
import React, { useState } from "react";
import { useSearchParams } from "react-router";

function NewTicket() {
  const [searchParams] = useSearchParams();
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const token = searchParams.get("token");
  const name = searchParams.get("name");

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    title: "",
    project: "",
    branch: "",
    description: "",
  });

  function handleSubmit() {
    setToast({
      open: true,
      message: "Ticket created successfully",
      severity: "success",
    });
  }

  return (
    <div className="new-ticket">
      <h3>New Ticket</h3>
      <div className="block">
        <label>Title</label>
        <TextComponent
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <span>Provide a clear and concise title for the ticket.</span>
      </div>
      <div className="block">
        <label>Description</label>
        <TextComponent
          type="text"
          value={formData.description}
          multiline
          height={"80px"}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <span>
          Describe the issue in detail including steps to reproduce if
          applicable.
        </span>
      </div>
      <div className="block">
        <label>Images</label>
        <ImageUploader
          images={images}
          setImages={setImages}
          previews={previews}
          setPreviews={setPreviews}
        />
        <span>Upload any relevant images or screenshots.</span>
      </div>
      <hr />
      <div className="block">
        <div className="two-column">
          <div className="block">
            <label>Name</label>
            <TextComponent
              type="text"
              readOnly
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="block">
            <label>Phone</label>
            <TextComponent
              type="text"
              readOnly
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="block">
        <div className="two-column">
          <div className="block">
            <label>Company</label>
            <TextComponent
              type="text"
              readOnly
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
            />
          </div>
          <div className="block">
            <label>Branch</label>
            <TextComponent
              type="text"
              readOnly
              value={formData.branch}
              onChange={(e) =>
                setFormData({ ...formData, branch: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <button className="glb-btn" onClick={handleSubmit}>
        Submit
      </button>
      <Toast
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={() => setToast({ open: false, message: "", severity: "" })}
      />
    </div>
  );
}

export default NewTicket;
