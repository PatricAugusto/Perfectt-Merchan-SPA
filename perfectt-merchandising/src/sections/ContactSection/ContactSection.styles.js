// src/sections/ContactSection/ContactSection.styles.js
import styled from 'styled-components';

export const ContactWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white}; 
  color: ${({ theme }) => theme.colors.black}; 
  padding: 80px 0;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.black};
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black}; 
  color: ${({ theme }) => theme.colors.textLight}; 
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  max-width: 700px; 
  margin: 0 auto;
  text-align: left; 

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
    margin: 0 15px; 
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.08); 
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 0.25rem rgba(184, 134, 11, 0.25); 
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 0.25rem rgba(184, 134, 11, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem 2.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: block; 
  width: 100%; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldLight};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0); 
  }
`;