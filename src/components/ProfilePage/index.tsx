import React from 'react';

// import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton> Editar perfil </EditButton>

        <h1>Beatriz Gonçalves</h1>
        <h2>@biagonz</h2>

        <p>
          Developer at <a href="https://twitter.com">@Marttech</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascida em 10 de Novembro de 1994
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
        </span>
        </Followage>
      </ProfileData>

      {/* <Feed /> */}
    </Container>
  );
}

export default ProfilePage;