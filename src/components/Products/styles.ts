import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  padding: 8px 8px 0 8px;
  background-color: ${colors.coral};
`

export const Card = styled.div`
  position: relative;
  overflow: auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`

export const CardContainer = styled.div`
  background-color: ${colors.coral};
  padding: 8px;
  margin-bottom: 32px;
  margin-top: -4px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.beige};
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nota = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
  color: ${colors.beige};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const TagContainer = styled.div`
  background-color: ${colors.coral};
  color: ${colors.beige};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`

export const BotaoAdd = styled.button`
  background-color: ${colors.beige};
  color: ${colors.coral};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  display: inline-block;
  width: 100%;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);

    @media (max-width: ${breakpoints.tablet}) {
      height: 105vh;
    }
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  background-color: ${colors.coral};
  color: ${colors.white};
  padding: 32px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin: 0 24px 0 0;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 0 16px;
      height: 230px;
      width: 100%;
    }
  }

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 335px;
    width: 100%;
    max-height: none;
    height: auto;
    flex-direction: column;
  }
`
export const InfosContainer = styled.div`
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  img {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 16px;
  }

  ${BotaoAdd} {
    height: 24px;
    width: 218px;
  }
`
