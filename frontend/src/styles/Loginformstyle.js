import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #222;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Garamond', serif;
`;

export const LoginFormWrapper = styled.div`
  background-color: #333;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
  text-align: center;
  width: 300px;
  border: 2px solid #444;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background-color: #555;
  border: 1px solid #666;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  font-family: 'Garamond', serif;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    border-color: #f44336;
    background-color: #444;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f44336;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Garamond', serif;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const Title = styled.h2`
  font-family: 'Garamond', serif;
  font-size: 28px;
  color: #f44336;
  margin-bottom: 20px;
`;

