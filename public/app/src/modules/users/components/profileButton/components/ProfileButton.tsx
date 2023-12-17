
import React from 'react'
import { Button } from '../../../../../shared/components/button'
import { Link } from 'react-router-dom';

interface ProfileButtonProps {
  isLoggedIn: boolean;
  username: string
  onLogout: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = (props) => {
  return props.isLoggedIn ? (
    <Button 
      text={<span><Link to={`/member/${props.username}`} style={{color: 'white'}}>{props.username}</Link> / {<u onClick={props.onLogout}>logout</u>}</span>}
      onClick={() => {}}
    />
  ) : (
    <Button 
      text="Join" 
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.location.href = "/join"
        }
      }}
    />
  )
}

export default ProfileButton;