import {CheckBoxEvent} from "./CheckBoxEvent";

export default interface CheckBoxProps {
  checked: boolean;
  onClick: CheckBoxEvent;
  children: string;
  name: string;
}