import React  from "react";
import Link from "../../../common/component/navigation/link/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import HeaderProductsProps from "./HeaderProductsProps";

const HeaderProducts: React.FC<HeaderProductsProps> = props => {
  return (
    <div className="flex items-center mt-4">
      <p className="quick-sand text-2xl orielly-text-primary mb-6 font-bold">
        {props.title}
      </p>
      <div className="ml-auto text-sm">
        <Link to={props.to}>
          <span className="mr-2">Lihat lainnya</span>
          <FontAwesomeIcon
            icon={faArrowRight}
          />
        </Link>
      </div>
    </div>
  )
}

export default HeaderProducts;