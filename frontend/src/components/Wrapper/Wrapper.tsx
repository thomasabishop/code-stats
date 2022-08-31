import "./Wrapper.styled.scss"

interface IProps {
  children: React.ReactNode
}

export const Wrapper: React.FC<IProps> = ({ children }: IProps) => {
  return <div className="Wrapper">{children}</div>
}

export default Wrapper
