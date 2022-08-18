import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,togle,image,title}) {

  return (
    <div>
      <Modal
      keepMounted
        open={open}
        onClose={togle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Image src={image} width={900} height={900} layout='intrinsic' />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Miêu tả đây
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}