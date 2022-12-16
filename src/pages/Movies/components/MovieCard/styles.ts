import styled from 'styled-components';
import { CardDetailsValue } from '../../../../styles/global';

export const MovieCardWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.divider};
  border-radius: 3px;
`;

export const MovieCardImage = styled.div<{ src: string }>`
  height: 300px;
  background: url('${(props) => props.src}') no-repeat center;
  background-size: cover;
  border-radius: 3px 3px 0 0;
`;

export const MovieCardBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${(props) => props.theme.spacing.md};
`;

export const MovieCardEpisode = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
`;

export const MovieCardDetails = styled.div`
  padding: ${(props) => `${props.theme.spacing.md} 0`};

  ${CardDetailsValue}:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
`;

export const MovieCardAction = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin-top: ${(props) => props.theme.spacing.md};
`;
