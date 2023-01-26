import styled from 'styled-components'

const Spinner = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &::before, &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
  }
  &::before{
    background: var(--primary);
    animation: pulse 2s ease-in-out infinite;
  }
  &::after{
    background: var(--primary-light);
    animation: pulse 2s 1s ease-in-out infinite;
  }
`

export { Spinner }
