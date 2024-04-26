
import { User } from "./types";
import {ProfileCardWrapper, PropertyName} from './styles';


function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };

  return (
    <ProfileCardWrapper>
      {/* <img src={userData.avatar} /> */}
      <h3>{userData.userName}</h3>
      <p>
        <PropertyName>Profession:</PropertyName> {userData.profession}
      </p>
      <p>
        <PropertyName>Hobby:</PropertyName> {userData.hobbies[0]}
      </p>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;