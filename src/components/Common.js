import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  border: 2px solid ${(props) => (props.light ? "white" : "#3454D1")};
  background: ${(props) =>
    props.transparent ? "transparent" : props.light ? "white" : "#3454D1"};
  color: ${(props) =>
    props.transparent
      ? props.light
        ? "white"
        : "#3454D1"
      : props.light
      ? "#3454D1"
      : "white"};
  box-shadow: 5px 5px 30px 0
    ${(props) => (!props.transparent ? "#3454d138" : "transparent")};
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.1s;

  &:hover {
    background: ${(props) => (props.light ? "white" : "#3454D1")};
    color: ${(props) => (props.light ? "#3454D1" : "white")};
  }
`;
