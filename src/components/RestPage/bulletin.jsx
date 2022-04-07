import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import { messageBoard, deleteMessage } from '../../actions/restaurants';
import useStyles from './styles';

const BulletinBoard = ({ restaurant }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(restaurant?.messages);
  const styles = useStyles();
  const messagesRef = useRef();

  const handleMessage = async () => {
    const newMessages = await dispatch(messageBoard(`${user?.result?.name}: ${message}`, restaurant._id));

    setMessage('');
    setMessages(newMessages);

    messagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={styles.messagesOuterContainer}>
        <div className={styles.messagesInnerContainer}>
          <Typography gutterBottom variant="h6">Bulletin Board:</Typography>
          {messages?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
                  {c.split(':')[1]}


                  {(user?.result?.googleId === restaurant?.creator || user?.result?._id === restaurant?.creator || user?.result?.isAdmin === true) && (
                      <Button size="small" color="secondary" onClick={() => dispatch(deleteMessage(restaurant._id, i))}>
                          <DeleteIcon fontSize="inherit" /> &nbsp; Delete
                      </Button>
                  )}
            </Typography>
          ))}
                  <div ref={messagesRef} />
        </div>
        <div style={{ alignItems: 'center', width: '70%' }}>
          <Typography gutterBottom variant="h6">Write a message</Typography>
          <TextField fullWidth rows={4} variant="outlined" label="Message" multiline value={message} onChange={(e) => setMessage(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!message.length} color="primary" variant="contained" onClick={handleMessage}>
            Message
                  </Button>
        </div>
          </div>
    </div>
  );
};

export default BulletinBoard;