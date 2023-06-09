import React from "react";
import { Lightbox } from "react-modal-image";

function NFTTile(data) {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const handleOpen = (img) => {
    setOpen(true);
    setImage(img);
  };

  const handleClose = () => {
    setOpen(false);
    setImage(null);
  };

  return (
    <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
      <img
        src={data.data.image}
        alt=""
        className="w-72 h-80 rounded-lg object-cover"
        onClick={() => handleOpen(data.data.image)}
      />
      {open && <Lightbox large={image} onClose={handleClose} />}

      <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-100">
        <strong className="text-xl">{data.data.name}</strong>
        <p className="display-inline">{data.data.age}</p>
        <p className="display-inline">{data.data.sex}</p>
        <p className="display-inline">{data.data.phone}</p>

        <p className="display-inline">{data.data.doctorName}</p>
        <p className="display-inline">{data.data.date}</p>
        <p className="display-inline">{data.data.diagnosis}</p>
      </div>
    </div>

  );
}

export default NFTTile;
