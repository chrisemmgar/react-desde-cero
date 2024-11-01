import './Button.css';

interface Props {
  label: string,
  parentMethod: () => void,

}

export const ButtonDec = ({ label, parentMethod }: Props) => {

  return (
    <>
      <button className='custom-button' onClick={parentMethod}>
        {label}
      </button>
    </>
  )

}

export default ButtonDec;