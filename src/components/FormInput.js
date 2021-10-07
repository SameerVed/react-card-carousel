import { format } from "date-fns";
import React, { Fragment, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { Textbox } from "react-inputs-validation";
import { useDispatch } from "react-redux";
import { addNewCard } from "../store/carouselStore/action";
import { ModalContext } from "./CarouselContainer";

const FormInput = (props) => {
  const dispatch = useDispatch();
  const { handleClose, item } = useContext(ModalContext);
  const initialState = {
    card_holder_name: "",
    expiry: new Date(),
    color: "",
    spend_limit: "",
    card_last_four: "",
  };
  const { type, isDisabled } = props;
  const [inputData, setInputData] = useState(initialState);
  const handleChange = (key, data) => {
    setInputData({ ...inputData, [key]: data });
  };
  const customCss = {
    padding: " 8px 15px",
    margin: "2px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const validateSubmit = () => {
    const { card_name, expiry, color, spend_limit, card_last_four } = inputData;

    return card_name && expiry && color && spend_limit && card_last_four;
  };
  const onPositive = () => {
    if (validateSubmit()) {
      handleClose(type);
      const payload = {
        ...inputData,
        expiry: format(inputData.expiry, "MM/yyyy"),
      };

      dispatch(addNewCard(payload));
    }
  };
  return (
    <Fragment>
      <div className="gridContainer">
        <div className="gridItem">
          <label>Card Name: </label>
          <Textbox
            attributesInput={{
              name: "Card Holder Name",
              id: "cardHolderName",
              placeholder: "Enter Card Holder Name",
            }}
            validationOption={{
              name: "Holder's name",
              check: true,
              required: true,
            }}
            onBlur={(e) => {
              console.log(e);
            }}
            customStyleInput={customCss}
            value={inputData.card_name || item?.card_name}
            disabled={isDisabled}
            onChange={(value) => handleChange("card_name", value)}
          />
        </div>
        <div className="gridItem">
          <label>Color:</label>
          <Textbox
            attributesInput={{
              name: "Color",
              id: "color",
              placeholder: "Enter color",
            }}
            validationOption={{
              name: "Color",
              check: true,
              required: true,
            }}
            onBlur={(e) => {
              console.log(e);
            }}
            customStyleInput={customCss}
            disabled={isDisabled}
            value={inputData.color || item?.color}
            onChange={(value) => handleChange("color", value)}
          />
        </div>
        <div className="gridItem">
          <label>Expiry: </label>
          {props.type === "add" ? (
            <ReactDatePicker
              dateFormat={"MM/yyyy"}
              placeholderText={"Select card expiry date"}
              showMonthYearPicker
              id="expiry-datepicker"
              selected={inputData?.expiry}
              onChange={(value) => handleChange("expiry", value)}
            />
          ) : (
            <div>
              <input
                className="display-date"
                type="text"
                disabled={isDisabled}
                value={item?.expiry}
              />
            </div>
          )}
        </div>

        <div className="gridItem">
          <label>Spend limit:</label>
          <Textbox
            attributesInput={{
              name: "Spend Limit",
              id: "spendLimit",
              placeholder: "Enter spend limit",
              type: "number",
            }}
            onBlur={(e) => {
              console.log(e);
            }}
            validationOption={{
              name: "Spend Limit",
              check: true,
              required: true,
            }}
            disabled={isDisabled}
            customStyleInput={customCss}
            value={inputData.spend_limit || item?.spend_limit}
            onChange={(value) => handleChange("spend_limit", value)}
          />
        </div>
      </div>

      <div className="gridContainerLastFour">
        <label>{type === "add" ? " Last Four " : "XXXX-XXXX-XXXX-"}</label>
        <Textbox
          attributesInput={{
            name: "Last four digits",
            id: "cardLastFour",
            placeholder: "XXXX-XXXX-XXXX-1234",
            type: "number",
            maxLength: 4,
          }}
          validationOption={{
            name: "Account No.",
            check: true,
            required: true,
          }}
          onBlur={(e) => {
            console.log(e);
          }}
          disabled={isDisabled}
          customStyleInput={customCss}
          value={inputData.card_last_four || item?.card_last_four}
          onChange={(value) => handleChange("card_last_four", value)}
        />
      </div>
      <br />
      {props.type === "add" ? (
        <Button
          variant="primary"
          className="submitButton"
          onClick={() => onPositive()}
        >
          Save Changes
        </Button>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default FormInput;
