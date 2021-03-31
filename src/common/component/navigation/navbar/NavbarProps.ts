import {RouteComponentProps} from "react-router-dom";
import CategoryState from "../../../../category/state/contract/CategoryState";

export default interface NavbarProps extends RouteComponentProps {
  category: CategoryState;
}