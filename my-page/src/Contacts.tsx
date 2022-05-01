type ContactsProps = {
    copyright : string 
  }
  
export const Footer: React.FC<ContactsProps> = (props) => (
  <footer>Contact me by mail: {props.copyright}</footer>
);