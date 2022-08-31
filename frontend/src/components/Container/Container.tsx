import "./Container.styled.scss"

interface IProps {
  children: React.ReactNode
}

export const Container: React.FC<IProps> = ({ children }: IProps) => {
  return <div className="Container">{children}</div>
}

export default Container
