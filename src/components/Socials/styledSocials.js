import styled from "styled-components";

export const SocialsDiv = styled.div`
  width: 100%;
  text-align: center;
  background-color: #292929;
  margin: 30px 0 0 0;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-device-width: 319px) {
    margin: 0;
  }
`;

export const SocialMedia = styled.div`
  width: 640px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .iconReact {
    display: inline-flex;
    color: #ddd;
    transition: all 220ms ease-in-out;
    &:hover {
      color: #4668b3;
      transform: scale(1.2);
    }
  }
  .iconGit {
    display: inline-flex;
    color: #ddd;
    transition: all 220ms ease-in-out;
    &:hover {
      color: #5d7bff;
      transform: scale(1.2);
    }
  }
  .iconStack {
    display: inline-flex;
    color: #ddd;
    transition: all 220ms ease-in-out;
    &:hover {
      color: #f48024;
      transform: scale(1.2);
    }
  }
  .iconFont {
    display: inline-flex;
    color: #ddd;
    transition: all 220ms ease-in-out;
    &:hover {
      color: #515e7b;
      transform: scale(1.2);
    }
  }
  .iconJS {
    display: inline-flex;
    color: #ddd;
    transition: all 220ms ease-in-out;
    &:hover {
      color: #fcdc00;
      transform: scale(1.2);
    }
  }

  @media only screen and (max-device-width: 319px) {
    flex-direction: column;
    width: 100%;
    min-width: 100px;
    .iconJS, .iconFont, .iconStack, .iconGit, .iconReact {
      margin: 5px;
    }

`;
