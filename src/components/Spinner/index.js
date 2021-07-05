import img from "../../assets/images/spinner.gif";
import '../../styles/spinner.scss';
const Spinner = () => (
  <div className="spinner-layout">    
    <img src={img} alt="spinner" />{" "}
  </div>
);
export default Spinner;
