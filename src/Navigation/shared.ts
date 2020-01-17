import styled from 'styled-components'

export const NavItemsGroup = styled.ul`
  display: flex;
  justify-content: space-evenly;
  justify-self: ${props =>
    (props as any)['data-type'] === 'info' ? 'flex-end' : 'flex-start'};
  width: 100%;
  margin: 0;
  padding: 0.5em 0;
  max-width: ${props =>
    (props as any)['data-type'] === 'info' ? '400px' : '250px'};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    max-width: unset;
  }
`

export const NavItemsGroupLinks = styled.li`
  display: inline-flex;
  align-items: center;
  list-style: none;
  height: 2em;

  @media (max-width: 768px) {
    margin: 0.3em 0;
  }
`

export const NavItemsGroupLinksLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.1);
  transition: opacity 100ms ease-in;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    color: ${props => props.color};
    position: relative;

    &.info,
    &.auth {
      max-width: unset;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 2px;
      background-color: ${props => props.color};
      position: absolute;
      bottom: -10px;
      left: -10%;
      right: -25%;
      transition: width 50ms ease-in;
    }

    &:hover::before {
      width: 120%;
      transition: width 200ms ease-out;
    }
  }
`
