import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`;

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  width: 100%;
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 4px;
`;
