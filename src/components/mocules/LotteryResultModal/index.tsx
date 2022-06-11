import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import * as React from 'react'

const LotteryResultModal: React.FunctionComponent = () => {
  const handleClose = () => {
    console.log('close')
  }

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
        {/* <div dangerouslySetInnerHTML={{ __html: '' }}> */}
        <iframe
          src='https://www.minhngoc.net.vn/free/index.php'
          width='500'
          height='2000'
          frameBorder='0'
          scrolling='auto'
          id='iframe_xosominhngoc'
          name='iframe_xosominhngoc'
        ></iframe>
        {/* </div> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LotteryResultModal
{
  /* <script language="javascript" src="//www.minhngoc.net.vn/jquery/jquery-1.7.2.js"></script>
<link rel="stylesheet" type="text/css" href="//www.minhngoc.net.vn/style/bangketqua_mini.css"/>
<div id="box_kqxs_minhngoc">
  <script language="javascript"> 	
  bgcolor="#bfbfbf";titlecolor="#730038";dbcolor="#000000";fsize="12px";kqwidth="300px"; </script>
  <script language="javascript" src="//www.minhngoc.net.vn/getkqxs/mien-bac.js"></script></div> */
}
