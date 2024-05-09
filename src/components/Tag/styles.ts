import styled from 'styled-components'
import { colors } from '../../styles'
import { TagProps } from '.'

export const TagContainer = styled.div<TagProps>`
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  display: inline-block;
`
