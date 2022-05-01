type BioProps = {
    copyright : string 
  }
  
export const P: React.FC<BioProps> = (props) => (
  <p>{props.copyright}</p>
);