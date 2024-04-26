
import { User } from "./types";
import {ProfileCardWrapper, PropertyName, CardImage, NameContainer} from './styles';


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
      <NameContainer>{userData.userName}</NameContainer>
      <CardImage src={userData.avatar} />
      <PropertyName>Profession:</PropertyName> {userData.profession}
      <PropertyName>Hobby:</PropertyName> {userData.hobbies[0]}
    </ProfileCardWrapper>
  );
}

export default ProfileCard;