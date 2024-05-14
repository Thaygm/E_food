import styled from 'styled-components'
import { colors } from '../../styles'

import { TagProps } from '.'

export const TagContainer = styled.div<TagProps>`
  background-color: ${colors.coral};
  color: ${colors.beige};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  display: inline-block;
`
